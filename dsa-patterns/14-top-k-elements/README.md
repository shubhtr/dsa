# Top K Elements Pattern

## Overview
The Top K Elements pattern is used to find the k largest, smallest, most frequent, or closest elements from a dataset. This pattern typically uses heap data structures, sorting, or specialized algorithms like quickselect to efficiently solve these problems.

## When to Use Top K Elements
- **Frequency Analysis**: Find k most/least frequent elements
- **Ranking Problems**: Find top k largest/smallest elements
- **Closest Elements**: Find k closest points or values
- **Streaming Data**: Maintain top k elements from a stream
- **Optimization**: Find optimal k solutions from many candidates
- **Selection Problems**: Find kth largest/smallest element

## Pattern Characteristics
- **Heap-based**: Often uses priority queues for efficiency
- **Sorting**: May involve sorting by frequency or value
- **Selection**: Uses algorithms like quickselect
- **Streaming**: Maintains top k elements dynamically

## Common Problems
- Top K Frequent Elements
- Kth Largest Element in Array
- Top K Frequent Words
- K Closest Points to Origin
- Merge K Sorted Lists
- Sliding Window Maximum
- Find K Pairs with Smallest Sums
- Reorganize String
- Task Scheduler

## Time Complexity
- **Heap-based**: O(n log k) where n is total elements
- **Bucket Sort**: O(n) for frequency-based problems
- **Quickselect**: O(n) average, O(n²) worst case
- **Sorting**: O(n log n)

## Space Complexity
- **Heap**: O(k) for heap size
- **Frequency Map**: O(n) for storing frequencies
- **Buckets**: O(n) for bucket arrays
- **Overall**: O(n) in most cases

## Implementation Patterns

### Top K Frequent Elements (Heap)
```javascript
function topKFrequent(nums, k) {
    // Count frequencies
    const frequencyMap = new Map();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    // Use min heap to maintain top k elements
    const heap = [];
    
    for (const [num, freq] of frequencyMap) {
        if (heap.length < k) {
            heap.push([num, freq]);
            heapifyUp(heap, heap.length - 1);
        } else if (freq > heap[0][1]) {
            heap[0] = [num, freq];
            heapifyDown(heap, 0);
        }
    }
    
    return heap.map(([num]) => num);
}
```

### Top K Frequent Elements (Bucket Sort)
```javascript
function topKFrequentBucket(nums, k) {
    // Count frequencies
    const frequencyMap = new Map();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    // Create buckets - index represents frequency
    const buckets = Array(nums.length + 1).fill().map(() => []);
    
    for (const [num, freq] of frequencyMap) {
        buckets[freq].push(num);
    }
    
    // Collect top k elements from buckets
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        result.push(...buckets[i]);
    }
    
    return result.slice(0, k);
}
```

### Kth Largest Element (Quickselect)
```javascript
function findKthLargest(nums, k) {
    return quickSelect(nums, 0, nums.length - 1, nums.length - k);
}

function quickSelect(nums, left, right, k) {
    if (left === right) return nums[left];
    
    const pivotIndex = partition(nums, left, right);
    
    if (k === pivotIndex) {
        return nums[k];
    } else if (k < pivotIndex) {
        return quickSelect(nums, left, pivotIndex - 1, k);
    } else {
        return quickSelect(nums, pivotIndex + 1, right, k);
    }
}

function partition(nums, left, right) {
    const pivot = nums[right];
    let i = left;
    
    for (let j = left; j < right; j++) {
        if (nums[j] <= pivot) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
    }
    
    [nums[i], nums[right]] = [nums[right], nums[i]];
    return i;
}
```

## Advanced Patterns

### K Closest Points to Origin
```javascript
function kClosest(points, k) {
    // Calculate distances and sort
    const distances = points.map((point, index) => ({
        point,
        distance: point[0] * point[0] + point[1] * point[1],
        index
    }));
    
    distances.sort((a, b) => a.distance - b.distance);
    
    return distances.slice(0, k).map(item => item.point);
}

// Using heap approach
function kClosestHeap(points, k) {
    const maxHeap = [];
    
    for (const point of points) {
        const distance = point[0] * point[0] + point[1] * point[1];
        
        if (maxHeap.length < k) {
            maxHeap.push({ point, distance });
            heapifyUpMax(maxHeap, maxHeap.length - 1);
        } else if (distance < maxHeap[0].distance) {
            maxHeap[0] = { point, distance };
            heapifyDownMax(maxHeap, 0);
        }
    }
    
    return maxHeap.map(item => item.point);
}
```

### Merge K Sorted Lists
```javascript
function mergeKLists(lists) {
    const minHeap = [];
    
    // Add first node from each list to heap
    for (let i = 0; i < lists.length; i++) {
        if (lists[i]) {
            minHeap.push({ node: lists[i], listIndex: i });
            lists[i] = lists[i].next;
        }
    }
    
    // Build heap
    for (let i = Math.floor(minHeap.length / 2) - 1; i >= 0; i--) {
        heapifyDownNode(minHeap, i);
    }
    
    const dummy = new ListNode(0);
    let current = dummy;
    
    while (minHeap.length > 0) {
        const { node, listIndex } = minHeap[0];
        
        current.next = node;
        current = current.next;
        
        // Replace with next node from same list
        if (lists[listIndex]) {
            minHeap[0] = { node: lists[listIndex], listIndex };
            lists[listIndex] = lists[listIndex].next;
            heapifyDownNode(minHeap, 0);
        } else {
            // Remove if no more nodes in this list
            minHeap[0] = minHeap[minHeap.length - 1];
            minHeap.pop();
            if (minHeap.length > 0) {
                heapifyDownNode(minHeap, 0);
            }
        }
    }
    
    return dummy.next;
}
```

### Sliding Window Maximum
```javascript
function maxSlidingWindow(nums, k) {
    const result = [];
    const deque = []; // Store indices
    
    for (let i = 0; i < nums.length; i++) {
        // Remove elements outside current window
        while (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }
        
        // Remove elements smaller than current element
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        
        deque.push(i);
        
        // Add maximum to result when window is complete
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    
    return result;
}
```

## Specialized Applications

### Top K Frequent Words
```javascript
function topKFrequentWords(words, k) {
    const frequencyMap = new Map();
    
    for (const word of words) {
        frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
    }
    
    // Sort by frequency (desc) then by word (asc) for ties
    const sorted = Array.from(frequencyMap.entries())
        .sort((a, b) => {
            if (a[1] !== b[1]) {
                return b[1] - a[1];
            }
            return a[0].localeCompare(b[0]);
        });
    
    return sorted.slice(0, k).map(([word]) => word);
}
```

### Reorganize String
```javascript
function reorganizeString(s) {
    const frequencyMap = new Map();
    
    for (const char of s) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }
    
    const maxHeap = [];
    for (const [char, freq] of frequencyMap) {
        maxHeap.push([char, freq]);
    }
    
    // Build max heap
    for (let i = Math.floor(maxHeap.length / 2) - 1; i >= 0; i--) {
        heapifyDownMax(maxHeap, i);
    }
    
    let result = '';
    let prev = null;
    
    while (maxHeap.length > 0 || prev) {
        if (maxHeap.length === 0 && prev) {
            return ''; // Can't reorganize
        }
        
        const [char, freq] = maxHeap[0];
        
        // Remove from heap
        maxHeap[0] = maxHeap[maxHeap.length - 1];
        maxHeap.pop();
        if (maxHeap.length > 0) {
            heapifyDownMax(maxHeap, 0);
        }
        
        result += char;
        
        // Add previous character back if it has frequency > 1
        if (prev) {
            maxHeap.push(prev);
            heapifyUpMax(maxHeap, maxHeap.length - 1);
            prev = null;
        }
        
        // Set current as previous if frequency > 1
        if (freq > 1) {
            prev = [char, freq - 1];
        }
    }
    
    return result;
}
```

### Task Scheduler
```javascript
function leastInterval(tasks, n) {
    const frequencyMap = new Map();
    
    for (const task of tasks) {
        frequencyMap.set(task, (frequencyMap.get(task) || 0) + 1);
    }
    
    const frequencies = Array.from(frequencyMap.values()).sort((a, b) => b - a);
    const maxFreq = frequencies[0];
    let idleSlots = (maxFreq - 1) * n;
    
    for (let i = 1; i < frequencies.length; i++) {
        idleSlots -= Math.min(frequencies[i], maxFreq - 1);
    }
    
    return tasks.length + Math.max(0, idleSlots);
}
```

## Heap Implementation

### Min Heap Helpers
```javascript
function heapifyUp(heap, index) {
    while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (heap[index][1] >= heap[parentIndex][1]) break;
        
        [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
        index = parentIndex;
    }
}

function heapifyDown(heap, index) {
    while (true) {
        let smallest = index;
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;
        
        if (leftChild < heap.length && heap[leftChild][1] < heap[smallest][1]) {
            smallest = leftChild;
        }
        
        if (rightChild < heap.length && heap[rightChild][1] < heap[smallest][1]) {
            smallest = rightChild;
        }
        
        if (smallest === index) break;
        
        [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
        index = smallest;
    }
}
```

### Max Heap Helpers
```javascript
function heapifyUpMax(heap, index) {
    while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (heap[index].distance <= heap[parentIndex].distance) break;
        
        [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
        index = parentIndex;
    }
}

function heapifyDownMax(heap, index) {
    while (true) {
        let largest = index;
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;
        
        if (leftChild < heap.length && heap[leftChild].distance > heap[largest].distance) {
            largest = leftChild;
        }
        
        if (rightChild < heap.length && heap[rightChild].distance > heap[largest].distance) {
            largest = rightChild;
        }
        
        if (largest === index) break;
        
        [heap[index], heap[largest]] = [heap[largest], heap[index]];
        index = largest;
    }
}
```

## Optimization Techniques

### Space Optimization
```javascript
function topKFrequentOptimized(nums, k) {
    const frequencyMap = new Map();
    
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    // Use array instead of heap for small k
    if (k >= frequencyMap.size) {
        return Array.from(frequencyMap.keys());
    }
    
    // Continue with heap approach for larger datasets
    // ...
}
```

### Early Termination
```javascript
function findKthLargestOptimized(nums, k) {
    // Use heap for small k
    if (k < nums.length / 2) {
        const minHeap = [];
        
        for (const num of nums) {
            if (minHeap.length < k) {
                minHeap.push(num);
                heapifyUp(minHeap, minHeap.length - 1);
            } else if (num > minHeap[0]) {
                minHeap[0] = num;
                heapifyDown(minHeap, 0);
            }
        }
        
        return minHeap[0];
    }
    
    // Use quickselect for larger k
    return quickSelect(nums, 0, nums.length - 1, nums.length - k);
}
```

## Practice Problems
1. Top K Frequent Elements
2. Kth Largest Element in Array
3. Top K Frequent Words
4. K Closest Points to Origin
5. Merge K Sorted Lists
6. Sliding Window Maximum
7. Find K Pairs with Smallest Sums
8. Reorganize String
9. Task Scheduler
10. Sort Characters By Frequency
11. Top K Frequent Elements
12. Find K Closest Elements
13. Kth Smallest Element in a Sorted Matrix
14. Find Median from Data Stream
15. Design Twitter
