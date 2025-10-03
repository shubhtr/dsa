/**
 * Solution: Top K Elements Problems
 * 
 * Time Complexity: O(n log k) for heap, O(n) for bucket sort
 * Space Complexity: O(n) for frequency map and heap/buckets
 */

// Approach 1: Min Heap (Priority Queue)
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

// Min heap helper functions
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

// Approach 2: Bucket Sort
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

// Approach 3: Sorting
function topKFrequentSort(nums, k) {
    // Count frequencies
    const frequencyMap = new Map();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    // Sort by frequency (descending)
    const sorted = Array.from(frequencyMap.entries())
        .sort((a, b) => b[1] - a[1]);
    
    // Return top k elements
    return sorted.slice(0, k).map(([num]) => num);
}

// Kth Largest Element
function findKthLargest(nums, k) {
    // Use quickselect algorithm
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

// Additional Top-K Patterns

// Top K Frequent Words
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

// K Closest Points to Origin
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

// K Closest Points (using heap)
function kClosestHeap(points, k) {
    const maxHeap = [];
    
    for (const point of points) {
        const distance = point[0] * point[0] + point[1] * point[1];
        
        if (maxHeap.length < k) {
            maxHeap.push({ point, distance });
            heapifyUp(maxHeap, maxHeap.length - 1, true);
        } else if (distance < maxHeap[0].distance) {
            maxHeap[0] = { point, distance };
            heapifyDown(maxHeap, 0, true);
        }
    }
    
    return maxHeap.map(item => item.point);
}

// Generic heap helper for max heap
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

// Merge K Sorted Lists
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

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

function heapifyDownNode(heap, index) {
    while (true) {
        let smallest = index;
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;
        
        if (leftChild < heap.length && heap[leftChild].node.val < heap[smallest].node.val) {
            smallest = leftChild;
        }
        
        if (rightChild < heap.length && heap[rightChild].node.val < heap[smallest].node.val) {
            smallest = rightChild;
        }
        
        if (smallest === index) break;
        
        [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
        index = smallest;
    }
}

// Sliding Window Maximum
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

// Test cases
console.log("=== Top K Frequent Elements ===");
console.log("Test Case 1:", topKFrequent([1,1,1,2,2,3], 2)); // Expected: [1,2]
console.log("Test Case 2:", topKFrequent([1], 1)); // Expected: [1]
console.log("Test Case 3:", topKFrequent([1,1,1,2,2,3,3,3,3], 2)); // Expected: [3,1]

console.log("\n=== Bucket Sort Approach ===");
console.log("Test Case 1:", topKFrequentBucket([1,1,1,2,2,3], 2)); // Expected: [1,2]
console.log("Test Case 2:", topKFrequentBucket([1], 1)); // Expected: [1]

console.log("\n=== Sorting Approach ===");
console.log("Test Case 1:", topKFrequentSort([1,1,1,2,2,3], 2)); // Expected: [1,2]
console.log("Test Case 2:", topKFrequentSort([1], 1)); // Expected: [1]

console.log("\n=== Kth Largest Element ===");
console.log("Test Case 1:", findKthLargest([3,2,1,5,6,4], 2)); // Expected: 5
console.log("Test Case 2:", findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // Expected: 4

console.log("\n=== Top K Frequent Words ===");
console.log("Test Case 1:", topKFrequentWords(["i","love","leetcode","i","love","coding"], 2)); 
// Expected: ["i","love"]

console.log("\n=== K Closest Points ===");
console.log("Test Case 1:", kClosest([[1,1],[2,2],[3,3]], 2)); // Expected: [[1,1],[2,2]]

console.log("\n=== Sliding Window Maximum ===");
console.log("Test Case 1:", maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); 
// Expected: [3,3,5,5,6,7]

/**
 * Key Insights:
 * 1. Use heap for dynamic top-k maintenance
 * 2. Bucket sort is efficient for frequency-based problems
 * 3. Quickselect for finding kth element in O(n) average case
 * 4. Min heap for top-k largest, max heap for top-k smallest
 * 5. Heap size should be k for optimal space usage
 * 
 * Top-K Patterns:
 * - Frequency counting + heap/bucket sort
 * - Distance calculation + heap
 * - Sorting + selection
 * - Quickselect for kth element
 * - Sliding window with deque
 * - Merge k sorted lists
 * 
 * Heap Types:
 * - Min heap: maintains k largest elements
 * - Max heap: maintains k smallest elements
 * - Priority queue: for complex comparisons
 * 
 * Time Complexities:
 * - Heap: O(n log k)
 * - Bucket sort: O(n)
 * - Quickselect: O(n) average, O(n²) worst
 * - Sorting: O(n log n)
 */
