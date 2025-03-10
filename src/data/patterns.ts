export interface Question {
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  leetcodeUrl?: string;
  gfgUrl?: string;
  hackerrankUrl?: string;
}

export interface Pattern {
  id: string;
  title: string;
  description: string;
  whenToUse: string[];
  dataStructures: string[];
  approach: string[];
  questions: Question[];
}

export const patterns: Pattern[] = [
  {
    id: "sliding-window",
    title: "1. Sliding Window",
    description: "An algorithmic technique that involves creating a window that slides over data to solve problems efficiently.",
    whenToUse: [
      "Array/String problems involving contiguous sequences",
      "When asked to find subarrays/substrings meeting certain conditions",
      "Problems involving fixed-size windows or dynamic size based on conditions"
    ],
    dataStructures: ["Arrays", "Strings", "HashMaps"],
    approach: [
      "Initialize window pointers (start and end)",
      "Expand window by moving end pointer",
      "Process current window",
      "Shrink window from start when needed",
      "Update result during process"
    ],
    questions: [
      {
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
      },
      {
        title: "Maximum Sum Subarray of Size K",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/maximum-subarray/"
      },
      {
        title: "Longest Subarray with Ones after Replacement",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/max-consecutive-ones-iii/"
      }
    ]
  },
  {
    id: "two-pointers",
    title: "2. Two Pointers",
    description: "A technique where two pointers iterate through the data structure in a coordinated way to solve the problem efficiently.",
    whenToUse: [
      "Searching pairs in a sorted array",
      "Comparing elements from both ends",
      "Finding triplets or subarrays"
    ],
    dataStructures: ["Arrays", "Linked Lists"],
    approach: [
      "Initialize two pointers",
      "Move pointers based on conditions",
      "Process elements at pointer positions",
      "Update result when conditions are met"
    ],
    questions: [
      {
        title: "Container With Most Water",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/container-with-most-water/"
      },
      {
        title: "3Sum",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/3sum/"
      },
      {
        title: "Remove Duplicates from Sorted Array",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/"
      }
    ]
  },
  {
    id: "fast-slow-pointers",
    title: "3. Fast & Slow Pointers",
    description: "A pattern using two pointers moving at different speeds, useful for cycle detection and middle finding.",
    whenToUse: [
      "Detecting cycles in linked lists",
      "Finding middle elements",
      "Problems involving circular arrays"
    ],
    dataStructures: ["Linked Lists", "Arrays"],
    approach: [
      "Initialize fast and slow pointers",
      "Move fast pointer twice as fast",
      "Detect meeting point",
      "Find cycle start if needed"
    ],
    questions: [
      {
        title: "Linked List Cycle",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/linked-list-cycle/"
      },
      {
        title: "Middle of the Linked List",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/middle-of-the-linked-list/"
      },
      {
        title: "Happy Number",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/happy-number/"
      }
    ]
  },
  {
    id: "merge-intervals",
    title: "4. Merge Intervals",
    description: "A pattern for dealing with overlapping intervals and scheduling problems.",
    whenToUse: [
      "Interval scheduling problems",
      "Finding overlapping periods",
      "Merging time ranges"
    ],
    dataStructures: ["Arrays", "Priority Queues"],
    approach: [
      "Sort intervals by start time",
      "Compare adjacent intervals",
      "Merge overlapping intervals",
      "Handle non-overlapping cases"
    ],
    questions: [
      {
        title: "Merge Intervals",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/merge-intervals/"
      },
      {
        title: "Meeting Rooms II",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/meeting-rooms-ii/"
      },
      {
        title: "Insert Interval",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/insert-interval/"
      }
    ]
  },
  {
    id: "cyclic-sort",
    title: "5. Cyclic Sort",
    description: "A pattern for sorting numbers in a fixed range by placing each number in its correct position.",
    whenToUse: [
      "Array contains numbers in range 1 to n",
      "Finding missing/duplicate numbers",
      "In-place sorting required"
    ],
    dataStructures: ["Arrays"],
    approach: [
      "Iterate through array",
      "Place each number in correct position",
      "Swap elements when needed",
      "Check for missing/duplicate numbers"
    ],
    questions: [
      {
        title: "Missing Number",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/missing-number/"
      },
      {
        title: "Find All Duplicates in an Array",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/find-all-duplicates-in-an-array/"
      },
      {
        title: "First Missing Positive",
        difficulty: "Hard",
        leetcodeUrl: "https://leetcode.com/problems/first-missing-positive/"
      }
    ]
  },
  {
    id: "in-place-reversal",
    title: "6. In-place Linked List Reversal",
    description: "A pattern for reversing linked lists or parts of linked lists without using extra space.",
    whenToUse: [
      "Reversing linked lists",
      "Modifying list structure in-place",
      "K-group reversals"
    ],
    dataStructures: ["Linked Lists"],
    approach: [
      "Track previous, current, and next nodes",
      "Reverse links while traversing",
      "Handle edge cases",
      "Update head pointer"
    ],
    questions: [
      {
        title: "Reverse Linked List",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/reverse-linked-list/"
      },
      {
        title: "Reverse Nodes in k-Group",
        difficulty: "Hard",
        leetcodeUrl: "https://leetcode.com/problems/reverse-nodes-in-k-group/"
      },
      {
        title: "Rotate List",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/rotate-list/"
      }
    ]
  },
  {
    id: "bfs",
    title: "7. Breadth First Search",
    description: "A traversal pattern that explores all nodes at the present depth before moving to nodes at the next depth level.",
    whenToUse: [
      "Level-order traversal",
      "Shortest path in unweighted graphs",
      "Connected components"
    ],
    dataStructures: ["Trees", "Graphs", "Queues"],
    approach: [
      "Use queue for level-order processing",
      "Process nodes level by level",
      "Track visited nodes",
      "Handle multiple paths"
    ],
    questions: [
      {
        title: "Binary Tree Level Order Traversal",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/binary-tree-level-order-traversal/"
      },
      {
        title: "Word Ladder",
        difficulty: "Hard",
        leetcodeUrl: "https://leetcode.com/problems/word-ladder/"
      },
      {
        title: "Shortest Path in Binary Matrix",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/shortest-path-in-binary-matrix/"
      }
    ]
  },
  {
    id: "dfs",
    title: "8. Depth First Search",
    description: "A traversal pattern that explores as far as possible along each branch before backtracking.",
    whenToUse: [
      "Tree/Graph traversal",
      "Path finding problems",
      "Cycle detection"
    ],
    dataStructures: ["Trees", "Graphs", "Stacks"],
    approach: [
      "Use recursion or stack",
      "Track visited nodes",
      "Backtrack when needed",
      "Process node during traversal"
    ],
    questions: [
      {
        title: "Number of Islands",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/number-of-islands/"
      },
      {
        title: "All Paths From Source to Target",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/all-paths-from-source-to-target/"
      },
      {
        title: "Course Schedule",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/course-schedule/"
      }
    ]
  },
  {
    id: "backtracking",
    title: "9. Backtracking",
    description: "A technique that considers searching every possible combination in a systematic way.",
    whenToUse: [
      "Combination/Permutation problems",
      "Constraint satisfaction",
      "Finding all possible solutions"
    ],
    dataStructures: ["Arrays", "Strings", "Trees"],
    approach: [
      "Define base cases",
      "Make choices",
      "Explore recursively",
      "Undo choices (backtrack)"
    ],
    questions: [
      {
        title: "N-Queens",
        difficulty: "Hard",
        leetcodeUrl: "https://leetcode.com/problems/n-queens/"
      },
      {
        title: "Word Search",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/word-search/"
      },
      {
        title: "Generate Parentheses",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/generate-parentheses/"
      }
    ]
  },
  {
    id: "dp-1d",
    title: "10. Dynamic Programming - 1D",
    description: "A method for solving complex problems by breaking them down into simpler subproblems.",
    whenToUse: [
      "Optimization problems",
      "Counting problems",
      "Problems with overlapping subproblems"
    ],
    dataStructures: ["Arrays", "HashMaps"],
    approach: [
      "Identify subproblems",
      "Define state and transitions",
      "Create DP array",
      "Fill DP array bottom-up"
    ],
    questions: [
      {
        title: "Climbing Stairs",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/climbing-stairs/"
      },
      {
        title: "House Robber",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/house-robber/"
      },
      {
        title: "Maximum Subarray",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/maximum-subarray/"
      }
    ]
  },
  {
    id: "dp-2d",
    title: "11. Dynamic Programming - 2D",
    description: "An extension of 1D DP for problems requiring two-dimensional state representation.",
    whenToUse: [
      "Grid traversal problems",
      "String matching problems",
      "Matrix chain multiplication"
    ],
    dataStructures: ["2D Arrays", "Matrices"],
    approach: [
      "Define 2D state space",
      "Establish recurrence relation",
      "Initialize base cases",
      "Fill DP table"
    ],
    questions: [
      {
        title: "Unique Paths",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/unique-paths/"
      },
      {
        title: "Minimum Path Sum",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/minimum-path-sum/"
      },
      {
        title: "Dungeon Game",
        difficulty: "Hard",
        leetcodeUrl: "https://leetcode.com/problems/dungeon-game/"
      }
    ]
  },
  {
    id: "dp-knapsack",
    title: "12. DP - Subset & Knapsack",
    description: "A pattern for solving optimization problems with constraints on resource usage.",
    whenToUse: [
      "Resource allocation problems",
      "Subset sum problems",
      "Partition problems"
    ],
    dataStructures: ["Arrays", "2D Arrays"],
    approach: [
      "Define items and capacity",
      "Create DP table",
      "Consider including/excluding items",
      "Track optimal solution"
    ],
    questions: [
      {
        title: "Partition Equal Subset Sum",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/partition-equal-subset-sum/"
      },
      {
        title: "Target Sum",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/target-sum/"
      },
      {
        title: "Coin Change",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/coin-change/"
      }
    ]
  },
  {
    id: "dp-strings",
    title: "13. DP - Strings",
    description: "Dynamic programming techniques specifically for string manipulation problems.",
    whenToUse: [
      "String matching problems",
      "Subsequence problems",
      "String transformation"
    ],
    dataStructures: ["Strings", "2D Arrays"],
    approach: [
      "Compare characters",
      "Build solution incrementally",
      "Track optimal substrings",
      "Handle different cases"
    ],
    questions: [
      {
        title: "Longest Common Subsequence",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/longest-common-subsequence/"
      },
      {
        title: "Edit Distance",
        difficulty: "Hard",
        leetcodeUrl: "https://leetcode.com/problems/edit-distance/"
      },
      {
        title: "Regular Expression Matching",
        difficulty: "Hard",
        leetcodeUrl: "https://leetcode.com/problems/regular-expression-matching/"
      }
    ]
  },
  {
    id: "tries",
    title: "14. Tries",
    description: "A tree-like data structure for efficient string operations and prefix matching.",
    whenToUse: [
      "Prefix matching",
      "Auto-complete features",
      "Dictionary operations"
    ],
    dataStructures: ["Trie", "HashMaps"],
    approach: [
      "Build trie structure",
      "Insert words character by character",
      "Track word endings",
      "Traverse for search/prefix"
    ],
    questions: [
      {
        title: "Implement Trie",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/implement-trie-prefix-tree/"
      },
      {
        title: "Word Search II",
        difficulty: "Hard",
        leetcodeUrl: "https://leetcode.com/problems/word-search-ii/"
      },
      {
        title: "Design Add and Search Words Data Structure",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/design-add-and-search-words-data-structure/"
      }
    ]
  },
  {
    id: "bit-manipulation",
    title: "15. Bit Manipulation",
    description: "Techniques for manipulating numbers at the bit level to solve problems efficiently.",
    whenToUse: [
      "Optimizing space usage",
      "Arithmetic operations",
      "Flag management"
    ],
    dataStructures: ["Integers", "Bit Arrays"],
    approach: [
      "Use bitwise operators",
      "Manipulate individual bits",
      "Apply bit masks",
      "Track bit changes"
    ],
    questions: [
      {
        title: "Single Number",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/single-number/"
      },
      {
        title: "Counting Bits",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/counting-bits/"
      },
      {
        title: "Reverse Bits",
        difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/reverse-bits/"
      }
    ]
  },
  {
    id: "graph-algorithms",
    title: "16. Graph Algorithms",
    description: "Advanced algorithms for solving complex graph-based problems.",
    whenToUse: [
      "Network flow problems",
      "Shortest path finding",
      "Dependency resolution"
    ],
    dataStructures: ["Graphs", "Priority Queues"],
    approach: [
      "Model problem as graph",
      "Choose appropriate algorithm",
      "Handle edge cases",
      "Optimize solution"
    ],
    questions: [
      {
        title: "Network Delay Time",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/network-delay-time/"
      },
      {
        title: "Course Schedule II",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/course-schedule-ii/"
      },
      {
        title: "Cheapest Flights Within K Stops",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/cheapest-flights-within-k-stops/"
      }
    ]
  },
  {
    id: "math-theory",
    title: "17. Math & Number Theory",
    description: "Mathematical concepts and number theory techniques for solving algorithmic problems.",
    whenToUse: [
      "Prime number problems",
      "Combinatorial problems",
      "Mathematical modeling"
    ],
    dataStructures: ["Arrays", "HashMaps"],
    approach: [
      "Apply mathematical formulas",
      "Use number theory concepts",
      "Optimize calculations",
      "Handle edge cases"
    ],
    questions: [
      {
        title: "Count Primes",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/count-primes/"
      },
      {
        title: "Pow(x, n)",
        difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/powx-n/"
      },
      {
        title: "Basic Calculator",
        difficulty: "Hard",
        leetcodeUrl: "https://leetcode.com/problems/basic-calculator/"
      }
    ]
  }
];

export const defaultPattern: Pattern = {
  id: "welcome",
  title: "Welcome to Code Crusaders",
  description: "Master the art of coding interviews with our comprehensive DSA pattern approach.",
  whenToUse: [
    "Preparing for technical interviews",
    "Building a strong foundation in algorithms",
    "Systematic problem-solving practice"
  ],
  dataStructures: [],
  approach: [
    "Choose a pattern from the sidebar",
    "Understand the core concept",
    "Practice with curated problems",
    "Master one pattern at a time"
  ],
  questions: []
};