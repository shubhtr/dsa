# Overlapping Intervals Pattern

## Overview
The Overlapping Intervals pattern deals with problems involving intervals (time ranges, segments, etc.) where you need to find overlaps, merge intervals, or optimize based on interval properties. This pattern is commonly used in scheduling, resource allocation, and optimization problems.

## When to Use Overlapping Intervals
- **Scheduling Problems**: Meeting rooms, employee schedules
- **Resource Allocation**: Minimum resources needed
- **Merge Operations**: Combine overlapping intervals
- **Optimization**: Find minimum/maximum intervals to remove/add
- **Intersection Problems**: Find common time ranges
- **Range Updates**: Apply changes to specific ranges

## Pattern Characteristics
- **Sorting**: Usually requires sorting by start or end time
- **Greedy Approach**: Often uses greedy algorithms for optimization
- **Two Pointers**: For finding intersections or comparisons
- **Event-based**: Sometimes uses event simulation approach

## Common Problems
- Merge Intervals
- Insert Interval
- Erase Overlapping Intervals
- Interval Intersection
- Meeting Rooms
- Meeting Rooms II
- Minimum Number of Arrows to Burst Balloons
- Employee Free Time
- Car Pooling
- Range Addition

## Time Complexity
- **Sorting**: O(n log n) for most problems
- **Processing**: O(n) after sorting
- **Overall**: O(n log n) typically

## Space Complexity
- **Merge Operations**: O(1) to O(n) depending on approach
- **Event Arrays**: O(n) for storing events
- **Heap**: O(n) for meeting room problems

## Implementation Patterns

### Merge Intervals
```javascript
function merge(intervals) {
    if (intervals.length <= 1) return intervals;
    
    // Sort by start time
    intervals.sort((a, b) => a[0] - b[0]);
    
    const result = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const last = result[result.length - 1];
        
        // Check if intervals overlap
        if (current[0] <= last[1]) {
            // Merge intervals
            last[1] = Math.max(last[1], current[1]);
        } else {
            // No overlap, add new interval
            result.push(current);
        }
    }
    
    return result;
}
```

### Insert Interval
```javascript
function insertInterval(intervals, newInterval) {
    const result = [];
    let i = 0;
    
    // Add intervals before newInterval
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }
    
    // Merge overlapping intervals
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    
    result.push(newInterval);
    
    // Add remaining intervals
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }
    
    return result;
}
```

### Erase Overlapping Intervals (Greedy)
```javascript
function eraseOverlapIntervals(intervals) {
    if (intervals.length <= 1) return 0;
    
    // Sort by end time
    intervals.sort((a, b) => a[1] - b[1]);
    
    let count = 0;
    let end = intervals[0][1];
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < end) {
            // Overlapping interval, remove it
            count++;
        } else {
            // Non-overlapping, update end
            end = intervals[i][1];
        }
    }
    
    return count;
}
```

### Interval Intersection
```javascript
function intervalIntersection(firstList, secondList) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < firstList.length && j < secondList.length) {
        const start = Math.max(firstList[i][0], secondList[j][0]);
        const end = Math.min(firstList[i][1], secondList[j][1]);
        
        if (start <= end) {
            result.push([start, end]);
        }
        
        // Move pointer of interval that ends first
        if (firstList[i][1] < secondList[j][1]) {
            i++;
        } else {
            j++;
        }
    }
    
    return result;
}
```

## Advanced Patterns

### Meeting Rooms II
```javascript
function minMeetingRooms(intervals) {
    if (intervals.length === 0) return 0;
    
    // Sort start and end times separately
    const starts = intervals.map(interval => interval[0]).sort((a, b) => a - b);
    const ends = intervals.map(interval => interval[1]).sort((a, b) => a - b);
    
    let rooms = 0;
    let endIndex = 0;
    
    for (let i = 0; i < starts.length; i++) {
        if (starts[i] < ends[endIndex]) {
            rooms++;
        } else {
            endIndex++;
        }
    }
    
    return rooms;
}
```

### Meeting Rooms II (Heap Approach)
```javascript
function minMeetingRoomsHeap(intervals) {
    if (intervals.length === 0) return 0;
    
    intervals.sort((a, b) => a[0] - b[0]);
    const heap = [intervals[0][1]]; // Min heap of end times
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= heap[0]) {
            // Reuse room
            heap[0] = intervals[i][1];
            heapifyDown(heap, 0);
        } else {
            // Need new room
            heap.push(intervals[i][1]);
            heapifyUp(heap, heap.length - 1);
        }
    }
    
    return heap.length;
}
```

### Car Pooling (Event-based)
```javascript
function carPooling(trips, capacity) {
    const events = [];
    
    for (const [passengers, start, end] of trips) {
        events.push([start, passengers]);  // Pick up
        events.push([end, -passengers]);   // Drop off
    }
    
    events.sort((a, b) => a[0] - b[0]);
    
    let currentPassengers = 0;
    
    for (const [time, change] of events) {
        currentPassengers += change;
        if (currentPassengers > capacity) {
            return false;
        }
    }
    
    return true;
}
```

### Range Addition (Difference Array)
```javascript
function getModifiedArray(length, updates) {
    const result = new Array(length).fill(0);
    
    // Apply updates using difference array
    for (const [start, end, inc] of updates) {
        result[start] += inc;
        if (end + 1 < length) {
            result[end + 1] -= inc;
        }
    }
    
    // Convert to prefix sum
    for (let i = 1; i < length; i++) {
        result[i] += result[i - 1];
    }
    
    return result;
}
```

## Specialized Applications

### Minimum Arrows to Burst Balloons
```javascript
function findMinArrowShots(points) {
    if (points.length === 0) return 0;
    
    // Sort by end position
    points.sort((a, b) => a[1] - b[1]);
    
    let arrows = 1;
    let end = points[0][1];
    
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > end) {
            arrows++;
            end = points[i][1];
        }
    }
    
    return arrows;
}
```

### Employee Free Time
```javascript
function employeeFreeTime(schedule) {
    const allIntervals = [];
    
    // Flatten all intervals
    for (const employee of schedule) {
        for (const interval of employee) {
            allIntervals.push(interval);
        }
    }
    
    // Sort by start time
    allIntervals.sort((a, b) => a[0] - b[0]);
    
    const merged = [allIntervals[0]];
    
    // Merge overlapping intervals
    for (let i = 1; i < allIntervals.length; i++) {
        const current = allIntervals[i];
        const last = merged[merged.length - 1];
        
        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            merged.push(current);
        }
    }
    
    // Find free time gaps
    const freeTime = [];
    for (let i = 1; i < merged.length; i++) {
        freeTime.push([merged[i - 1][1], merged[i][0]]);
    }
    
    return freeTime;
}
```

### Partition Labels
```javascript
function partitionLabels(s) {
    const lastIndex = new Map();
    
    // Record last occurrence of each character
    for (let i = 0; i < s.length; i++) {
        lastIndex.set(s[i], i);
    }
    
    const result = [];
    let start = 0;
    let end = 0;
    
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, lastIndex.get(s[i]));
        
        if (i === end) {
            result.push(end - start + 1);
            start = end + 1;
        }
    }
    
    return result;
}
```

## Common Sorting Strategies

### Sort by Start Time
```javascript
intervals.sort((a, b) => a[0] - b[0]);
```
**Use for**: Merging intervals, insertion problems

### Sort by End Time
```javascript
intervals.sort((a, b) => a[1] - b[1]);
```
**Use for**: Greedy optimization (minimum removals, meeting rooms)

### Sort by Both Start and End
```javascript
intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
```
**Use for**: Complex problems requiring stable sorting

## Interval Operations

### Overlap Detection
```javascript
function isOverlapping(interval1, interval2) {
    return interval1[0] <= interval2[1] && interval2[0] <= interval1[1];
}
```

### Merge Two Intervals
```javascript
function mergeTwoIntervals(interval1, interval2) {
    return [
        Math.min(interval1[0], interval2[0]),
        Math.max(interval1[1], interval2[1])
    ];
}
```

### Find Intersection
```javascript
function findIntersection(interval1, interval2) {
    const start = Math.max(interval1[0], interval2[0]);
    const end = Math.min(interval1[1], interval2[1]);
    
    return start <= end ? [start, end] : null;
}
```

## Optimization Techniques

### Early Termination
```javascript
function mergeIntervalsOptimized(intervals) {
    if (intervals.length <= 1) return intervals;
    
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const last = result[result.length - 1];
        
        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            result.push(current);
        }
    }
    
    return result;
}
```

### Space Optimization
```javascript
function eraseOverlapIntervalsInPlace(intervals) {
    if (intervals.length <= 1) return 0;
    
    intervals.sort((a, b) => a[1] - b[1]);
    
    let count = 0;
    let end = intervals[0][1];
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < end) {
            count++;
        } else {
            end = intervals[i][1];
        }
    }
    
    return count;
}
```

## Practice Problems
1. Merge Intervals
2. Insert Interval
3. Erase Overlapping Intervals
4. Interval Intersection
5. Meeting Rooms
6. Meeting Rooms II
7. Minimum Number of Arrows to Burst Balloons
8. Employee Free Time
9. Car Pooling
10. Range Addition
11. Partition Labels
12. Non-overlapping Intervals
13. Remove Covered Intervals
14. Video Stitching
15. Maximum Profit in Job Scheduling
