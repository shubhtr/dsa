# DSA Patterns Repository

This repository contains comprehensive implementations of 15 essential Data Structures and Algorithms patterns, each with detailed problems, solutions, and documentation.

## 📚 Overview

This collection was created to provide a systematic approach to learning and mastering common DSA patterns used in technical interviews and competitive programming. Each pattern includes multiple implementation approaches, time/space complexity analysis, and extensive practice problems.

## 🎯 Pattern Categories

### 1. [01-sliding-window](./01-sliding-window/)
**Pattern**: Sliding Window Technique  
**Use Case**: Contiguous subarray/substring problems with fixed or variable window size  
**Key Problems**: Maximum sum subarray, longest substring with K distinct characters  
**Time Complexity**: O(n)  
**Space Complexity**: O(1)

### 2. [02-two-pointers](./02-two-pointers/)
**Pattern**: Two Pointers Technique  
**Use Case**: Sorted array problems, palindromes, container problems  
**Key Problems**: Two sum, container with most water, valid palindrome  
**Time Complexity**: O(n)  
**Space Complexity**: O(1)

### 3. [03-prefix-sum](./03-prefix-sum/)
**Pattern**: Prefix Sum (Cumulative Sum)  
**Use Case**: Range queries, subarray sums, optimization problems  
**Key Problems**: Range sum queries, subarray sum equals K  
**Time Complexity**: O(n) preprocessing, O(1) per query  
**Space Complexity**: O(n)

### 4. [04-tree-traversal](./04-tree-traversal/)
**Pattern**: Tree Traversal (DFS/BFS)  
**Use Case**: Tree processing, hierarchical data structures  
**Key Problems**: Level order traversal, tree serialization, path problems  
**Time Complexity**: O(n)  
**Space Complexity**: O(h) where h is tree height

### 5. [05-matrix-traversal](./05-matrix-traversal/)
**Pattern**: Matrix Traversal  
**Use Case**: 2D grid problems, matrix manipulation  
**Key Problems**: Spiral matrix, rotate image, matrix zeroes  
**Time Complexity**: O(m×n)  
**Space Complexity**: O(1) to O(m×n)

### 6. [06-dfs-depth-first-search](./06-dfs-depth-first-search/)
**Pattern**: Depth-First Search  
**Use Case**: Graph traversal, connected components, path finding  
**Key Problems**: Number of islands, word search, course schedule  
**Time Complexity**: O(V + E)  
**Space Complexity**: O(V)

### 7. [07-bfs-breadth-first-search](./07-bfs-breadth-first-search/)
**Pattern**: Breadth-First Search  
**Use Case**: Level-order processing, shortest path in unweighted graphs  
**Key Problems**: Binary tree level order, word ladder, rotting oranges  
**Time Complexity**: O(V + E)  
**Space Complexity**: O(V)

### 8. [08-backtracking](./08-backtracking/)
**Pattern**: Backtracking  
**Use Case**: Constraint satisfaction, generating all solutions  
**Key Problems**: Generate parentheses, N-Queens, Sudoku solver  
**Time Complexity**: O(b^d) where b is branching factor, d is depth  
**Space Complexity**: O(d)

### 9. [09-dynamic-programming](./09-dynamic-programming/)
**Pattern**: Dynamic Programming  
**Use Case**: Optimization problems, overlapping subproblems  
**Key Problems**: Climbing stairs, house robber, longest common subsequence  
**Time Complexity**: O(n) to O(n²) depending on problem  
**Space Complexity**: O(1) to O(n)

### 10. [10-fast-and-slow-pointers](./10-fast-and-slow-pointers/)
**Pattern**: Fast and Slow Pointers (Floyd's Cycle Detection)  
**Use Case**: Linked list problems, cycle detection  
**Key Problems**: Linked list cycle, find middle, palindrome linked list  
**Time Complexity**: O(n)  
**Space Complexity**: O(1)

### 11. [11-in-place-traversal](./11-in-place-traversal/)
**Pattern**: In-Place Array Manipulation  
**Use Case**: Space-optimized array operations  
**Key Problems**: Move zeroes, remove duplicates, sort colors  
**Time Complexity**: O(n)  
**Space Complexity**: O(1)

### 12. [12-monotonic-stack](./12-monotonic-stack/)
**Pattern**: Monotonic Stack  
**Use Case**: Next/previous greater/smaller element problems  
**Key Problems**: Daily temperatures, largest rectangle, trapping rain water  
**Time Complexity**: O(n)  
**Space Complexity**: O(n)

### 13. [13-binary-search](./13-binary-search/)
**Pattern**: Binary Search  
**Use Case**: Sorted array problems, optimization in search space  
**Key Problems**: Search in rotated array, find peak element, search insert position  
**Time Complexity**: O(log n)  
**Space Complexity**: O(1)

### 14. [14-top-k-elements](./14-top-k-elements/)
**Pattern**: Top K Elements  
**Use Case**: Frequency analysis, ranking problems, heap operations  
**Key Problems**: Top K frequent elements, Kth largest, merge K sorted lists  
**Time Complexity**: O(n log k)  
**Space Complexity**: O(k)

### 15. [15-overlapping-intervals](./15-overlapping-intervals/)
**Pattern**: Overlapping Intervals  
**Use Case**: Scheduling problems, interval manipulation  
**Key Problems**: Merge intervals, meeting rooms, car pooling  
**Time Complexity**: O(n log n)  
**Space Complexity**: O(1) to O(n)

## 📁 Repository Structure

Each pattern directory contains:

```
pattern-name/
├── problem.js      # Problem statement with examples and constraints
├── solution.js     # Multiple solution approaches with explanations
└── README.md       # Comprehensive documentation and patterns
```

## 🚀 Getting Started

### Prerequisites
- Basic knowledge of JavaScript/Node.js
- Understanding of basic data structures (arrays, objects, linked lists)
- Familiarity with time/space complexity concepts

### How to Use This Repository

1. **Start with any pattern** that interests you or matches your current learning goals
2. **Read the problem.js** file to understand the problem statement
3. **Try to solve it yourself** before looking at solutions
4. **Review the solution.js** file for multiple approaches and optimizations
5. **Study the README.md** for comprehensive pattern documentation
6. **Practice with additional problems** listed in each README

### Recommended Learning Path

For beginners:
1. Two Pointers → Sliding Window → Fast-Slow Pointers
2. Tree Traversal → DFS → BFS
3. Dynamic Programming → Backtracking
4. Binary Search → Top K Elements
5. Advanced: Monotonic Stack → Overlapping Intervals

For intermediate learners:
- Focus on patterns you're less familiar with
- Practice implementing multiple solutions for each problem
- Study the complexity analysis and optimization techniques

## 💡 Key Learning Objectives

After working through this repository, you should be able to:

- **Recognize patterns** in new problems and apply appropriate techniques
- **Implement multiple solutions** for each problem type
- **Analyze time and space complexity** of different approaches
- **Optimize solutions** using various techniques
- **Handle edge cases** and constraints effectively
- **Apply patterns** to solve interview and competitive programming problems

## 🎯 Interview Preparation

This repository is designed to help with:
- **Technical Interviews**: Each pattern includes common interview questions
- **Competitive Programming**: Efficient algorithms for contest problems
- **System Design**: Understanding algorithmic complexity for scalable systems
- **Code Reviews**: Best practices and optimization techniques

## 📊 Pattern Difficulty Levels

### Beginner (⭐)
- Two Pointers
- Sliding Window
- Tree Traversal
- In-Place Traversal

### Intermediate (⭐⭐)
- Prefix Sum
- Matrix Traversal
- Fast-Slow Pointers
- Binary Search

### Advanced (⭐⭐⭐)
- DFS/BFS
- Backtracking
- Dynamic Programming
- Monotonic Stack
- Top K Elements
- Overlapping Intervals

## 🔧 Technical Implementation Notes

### Code Quality Standards
- **Clean Code**: Readable and well-commented implementations
- **Multiple Approaches**: Different solution methods for each problem
- **Error Handling**: Proper edge case management
- **Performance**: Optimized time and space complexity
- **Documentation**: Comprehensive explanations and insights

### Testing
Each solution includes:
- **Test Cases**: Multiple examples with expected outputs
- **Edge Cases**: Boundary conditions and special cases
- **Performance Tests**: Complexity validation
- **Interactive Examples**: Run and verify solutions

## 📈 Progress Tracking

### Recommended Study Plan
- **Week 1-2**: Patterns 1-5 (Basic patterns)
- **Week 3-4**: Patterns 6-10 (Graph and advanced techniques)
- **Week 5-6**: Patterns 11-15 (Specialized patterns)
- **Week 7**: Review and practice integration
- **Week 8**: Mock interviews and problem solving

### Assessment Checklist
- [ ] Can implement each pattern from memory
- [ ] Understands time/space complexity trade-offs
- [ ] Can apply patterns to new problems
- [ ] Can optimize solutions effectively
- [ ] Handles edge cases appropriately

## 🤝 Contributing

This repository is designed as a learning resource. If you find improvements or want to add more examples:

1. **Fork the repository**
2. **Add your improvements** with clear explanations
3. **Include test cases** for new solutions
4. **Update documentation** as needed
5. **Submit a pull request** with detailed description

## 📚 Additional Resources

### Recommended Reading
- "Cracking the Coding Interview" by Gayle Laakmann McDowell
- "Algorithm Design Manual" by Steven Skiena
- "Elements of Programming Interviews" by Aziz, Lee, and Prakash

### Online Platforms
- LeetCode: Practice problems by pattern
- HackerRank: Algorithm challenges
- Codeforces: Competitive programming
- GeeksforGeeks: Pattern explanations and examples

## 🏆 Success Metrics

You'll know you've mastered these patterns when you can:
- **Identify the right pattern** within 2-3 minutes of reading a problem
- **Implement a working solution** in 15-20 minutes
- **Optimize the solution** and explain trade-offs
- **Handle follow-up questions** about edge cases and variations
- **Apply patterns** to completely new problem domains

## 📝 Final Notes

This repository represents a comprehensive approach to mastering essential DSA patterns. The key to success is consistent practice and understanding the underlying principles rather than memorizing code. Each pattern builds upon fundamental concepts that will serve you throughout your programming career.

Remember: **Patterns are tools, not solutions**. The goal is to develop the ability to recognize when and how to apply these tools to solve new problems effectively.

---

**Happy Coding! 🚀**

*Created with ❤️ for the programming community*
