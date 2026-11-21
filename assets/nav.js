// ============================================================
// COURSE SITE DATA — the full roadmap. Only topics with a
// non-empty "chapters" array are built so far; others render
// as a collapsed, non-clickable "coming soon" placeholder.
// Add chapters here as new topics get built — every page on
// the site shares this one file, so one edit updates all nav.
// ============================================================
var COURSE = {
  tracks: [
    {
      label: "Year 1 — Foundations",
      topics: [
        { id: "linalg", title: "Linear Algebra for Engineers", chapters: [
          { file: "linalg-01-vectors.html", title: "1. Vectors", sections: [
            { id: "what-is-a-vector", title: "1.1 What a vector actually is" },
            { id: "add-sub", title: "1.2 Addition & subtraction" },
            { id: "scalar-mult", title: "1.3 Scalar multiplication" },
            { id: "magnitude", title: "1.4 Magnitude & unit vectors" },
            { id: "dot-product", title: "1.5 The dot product" },
            { id: "cross-product", title: "1.6 The cross product" },
            { id: "span", title: "1.7 Linear combinations & span" },
            { id: "recap", title: "Recap" },
            { id: "quiz", title: "Check yourself" }
          ]},
          { file: "linalg-02-matrices.html", title: "2. Matrices as Transformations", sections: [
            { id: "what-is-a-matrix", title: "2.1 What a matrix actually is" },
            { id: "matrix-vector-mult", title: "2.2 Matrix-vector multiplication" },
            { id: "named-transformations", title: "2.3 Named transformations" },
            { id: "matrix-matrix-mult", title: "2.4 Matrix-matrix multiplication" },
            { id: "special-matrices", title: "2.5 Special matrices & transpose" },
            { id: "recap2", title: "Recap" },
            { id: "quiz2", title: "Check yourself" }
          ]},
          { file: "linalg-03-systems.html", title: "3. Systems of Linear Equations", sections: [
            { id: "what-is-a-system", title: "3.1 What a system represents" },
            { id: "gaussian-elimination", title: "3.2 Gaussian elimination" },
            { id: "solution-types", title: "3.3 The three outcomes" },
            { id: "recap3", title: "Recap" },
            { id: "quiz3", title: "Check yourself" }
          ]},
          { file: "linalg-04-inverse-det.html", title: "4. Inverse & Determinants", sections: [
            { id: "what-is-inverse", title: "4.1 What a matrix inverse is" },
            { id: "determinants", title: "4.2 The determinant" },
            { id: "computing-inverse", title: "4.3 Computing an inverse" },
            { id: "why-avoid-inverse", title: "4.4 Why real code avoids the inverse" },
            { id: "recap4", title: "Recap" },
            { id: "quiz4", title: "Check yourself" }
          ]},
          { file: "linalg-05-spaces-rank.html", title: "5. Vector Spaces, Basis & Rank", sections: [
            { id: "linear-independence", title: "5.1 Linear independence" },
            { id: "basis-dimension", title: "5.2 Basis and dimension" },
            { id: "rank", title: "5.3 Rank" },
            { id: "recap5", title: "Recap" },
            { id: "quiz5", title: "Check yourself" }
          ]},
          { file: "linalg-06-eigen.html", title: "6. Eigenvalues & Eigenvectors", sections: [
            { id: "what-are-eigenvectors", title: "6.1 What eigenvectors/values are" },
            { id: "finding-eigenvalues", title: "6.2 Finding eigenvalues" },
            { id: "finding-eigenvectors", title: "6.3 Finding eigenvectors" },
            { id: "eigenvalues-stability", title: "6.4 Why eigenvalues = stability" },
            { id: "symmetric-eigen", title: "6.5 Symmetric matrices" },
            { id: "recap6", title: "Recap" },
            { id: "quiz6", title: "Check yourself" }
          ]},
          { file: "linalg-07-decomposition.html", title: "7. Diagonalization & Decompositions", sections: [
            { id: "diagonalization", title: "7.1 Diagonalization" },
            { id: "when-not-diagonalizable", title: "7.2 When it isn't possible" },
            { id: "svd-preview", title: "7.3 Preview: SVD" },
            { id: "recap7", title: "Recap" },
            { id: "quiz7", title: "Check yourself" }
          ]},
          { file: "linalg-08-numerical.html", title: "8. Numerical Linear Algebra in Practice", sections: [
            { id: "floating-point-basics", title: "8.1 Floating-point isn't exact" },
            { id: "conditioning", title: "8.2 Ill-conditioning" },
            { id: "practical-guidelines", title: "8.3 Practical guidelines" },
            { id: "recap8", title: "Recap" },
            { id: "quiz8", title: "Check yourself" }
          ]},
          { file: "linalg-09-cps.html", title: "9. CPS Applications", sections: [
            { id: "state-space-full", title: "9.1 State-space, worked fully" },
            { id: "rotation-robotics", title: "9.2 Rotation matrices in robotics" },
            { id: "course-closing", title: "9.3 How the chapters connect" },
            { id: "recap9", title: "Recap" },
            { id: "quiz9", title: "Check yourself" }
          ]}
        ]},
        { id: "c-prog", title: "C Programming Fundamentals", chapters: [
          { file: "c-01-getting-started.html", title: "1. Getting Started with C", sections: [
            { id: "why-c", title: "1.1 What C is, why it matters" },
            { id: "toolchain", title: "1.2 The toolchain" },
            { id: "first-program", title: "1.3 Your first program" },
            { id: "program-structure-overview", title: "1.4 Program structure" },
            { id: "io-basics", title: "1.5 Basic input & output" },
            { id: "recap-c1", title: "Recap" },
            { id: "quiz-c1", title: "Check yourself" }
          ]},
          { file: "c-02-variables-types.html", title: "2. Variables, Types & Operators", sections: [
            { id: "basic-types", title: "2.1 The basic types" },
            { id: "declaration-init", title: "2.2 Declaration & initialization" },
            { id: "operators", title: "2.3 Operators" },
            { id: "type-conversion", title: "2.4 Type conversion" },
            { id: "recap-c2", title: "Recap" },
            { id: "quiz-c2", title: "Check yourself" }
          ]},
          { file: "c-03-control-flow.html", title: "3. Control Flow: Decisions & Loops", sections: [
            { id: "if-else", title: "3.1 if / else" },
            { id: "switch", title: "3.2 switch & fallthrough" },
            { id: "loops", title: "3.3 Loops: while, do-while, for" },
            { id: "recap-c3", title: "Recap" },
            { id: "quiz-c3", title: "Check yourself" }
          ]},
          { file: "c-04-functions.html", title: "4. Functions & Program Structure", sections: [
            { id: "what-is-a-function", title: "4.1 What a function actually is" },
            { id: "declare-define-call", title: "4.2 Declaring, defining, calling" },
            { id: "pass-by-value", title: "4.3 Pass by value, in depth" },
            { id: "return-values", title: "4.4 Return values & void" },
            { id: "declare-before-call", title: "4.5 Declare before you call" },
            { id: "scope-lifetime", title: "4.6 Scope & lifetime" },
            { id: "recursion", title: "4.7 Recursion" },
            { id: "structuring-program", title: "4.8 Structuring a program" },
            { id: "recap-c4", title: "Recap" },
            { id: "quiz-c4", title: "Check yourself" }
          ]},
          { file: "c-05-arrays-strings.html", title: "5. Arrays & Strings", sections: [
            { id: "array-basics", title: "5.1 Array basics" },
            { id: "arrays-and-functions", title: "5.2 Arrays and functions (decay)" },
            { id: "strings", title: "5.3 Strings & null-termination" },
            { id: "multidim-arrays", title: "5.4 Multi-dimensional arrays" },
            { id: "recap-c5", title: "Recap" },
            { id: "quiz-c5", title: "Check yourself" }
          ]},
          { file: "c-06-pointers-1.html", title: "6. Pointers I — Fundamentals", sections: [
            { id: "what-is-a-pointer", title: "6.1 What a pointer actually is" },
            { id: "pointer-types-null", title: "6.2 Pointer types, NULL & size" },
            { id: "pointers-and-functions", title: "6.3 Pointers and functions" },
            { id: "pointers-and-arrays", title: "6.4 Pointers and arrays" },
            { id: "recap-c6", title: "Recap" },
            { id: "quiz-c6", title: "Check yourself" }
          ]},
          { file: "c-07-pointers-2.html", title: "7. Pointers II — Dynamic Memory", sections: [
            { id: "stack-vs-heap", title: "7.1 Stack vs. heap" },
            { id: "malloc-free", title: "7.2 malloc and free" },
            { id: "memory-bugs", title: "7.3 The three classic heap bugs" },
            { id: "pointer-arithmetic", title: "7.4 Pointer arithmetic, in full" },
            { id: "dynamic-worked-problem", title: "7.5 Worked problem: growable list" },
            { id: "recap-c7", title: "Recap" },
            { id: "quiz-c7", title: "Check yourself" }
          ]},
          { file: "c-08-structs.html", title: "8. Structs, Unions & Typedefs", sections: [
            { id: "what-is-a-struct", title: "8.1 What a struct is" },
            { id: "typedef", title: "8.2 typedef" },
            { id: "structs-and-pointers", title: "8.3 Structs and pointers (->)" },
            { id: "unions", title: "8.4 Unions" },
            { id: "nested-structs", title: "8.5 Nested & self-referential structs" },
            { id: "recap-c8", title: "Recap" },
            { id: "quiz-c8", title: "Check yourself" }
          ]},
          { file: "c-09-headers.html", title: "9. Header Files & the Preprocessor", sections: [
            { id: "multi-file-motivation", title: "9.1 Why split across files" },
            { id: "header-files", title: "9.2 Header files" },
            { id: "preprocessor-directives", title: "9.3 #define and macros" },
            { id: "include-guards", title: "9.4 Include guards" },
            { id: "conditional-compilation", title: "9.5 Conditional compilation" },
            { id: "recap-c9", title: "Recap" },
            { id: "quiz-c9", title: "Check yourself" }
          ]},
          { file: "c-10-bitwise.html", title: "10. Bitwise Operations", sections: [
            { id: "binary-refresher", title: "10.1 Binary & two's complement" },
            { id: "bitwise-operators", title: "10.2 The bitwise operators" },
            { id: "bit-flags-masks", title: "10.3 Bit flags and masks" },
            { id: "recap-c10", title: "Recap" },
            { id: "quiz-c10", title: "Check yourself" }
          ]},
          { file: "c-11-file-io.html", title: "11. File I/O", sections: [
            { id: "file-basics", title: "11.1 Opening & closing files" },
            { id: "formatted-io", title: "11.2 Formatted reading/writing" },
            { id: "binary-files", title: "11.3 Binary file I/O" },
            { id: "file-worked-problem", title: "11.4 Worked problem: data logger" },
            { id: "recap-c11", title: "Recap" },
            { id: "quiz-c11", title: "Check yourself" }
          ]},
          { file: "c-12-memory-model.html", title: "12. The C Memory Model", sections: [
            { id: "memory-segments", title: "12.1 The four memory segments" },
            { id: "lifetime-across-segments", title: "12.2 Tracing all four at once" },
            { id: "memory-constraints-embedded", title: "12.3 Why this matters on embedded" },
            { id: "recap-c12", title: "Recap" },
            { id: "quiz-c12", title: "Check yourself" }
          ]},
          { file: "c-13-embedded-bridge.html", title: "13. From C to Embedded C", sections: [
            { id: "no-os-no-stdlib", title: "13.1 No OS, smaller stdlib" },
            { id: "registers-and-volatile", title: "13.2 Registers & volatile" },
            { id: "course-closing-c", title: "13.3 Tracing every chapter forward" },
            { id: "recap-c13", title: "Recap" },
            { id: "quiz-c13", title: "Check yourself" }
          ]}
        ] },
        { id: "python", title: "Python for Engineering", chapters: [
          { file: "py-01-quickstart.html", title: "1. Python Quickstart for Programmers", sections: [
            { id: "python-philosophy", title: "1.1 What's different from C/Java" },
            { id: "basic-types-syntax", title: "1.2 Basic types & operators" },
            { id: "control-flow-python", title: "1.3 Control flow" },
            { id: "functions-python", title: "1.4 Functions" },
            { id: "worked-problem-py1", title: "1.5 Worked problem" },
            { id: "recap-py1", title: "Recap" },
            { id: "quiz-py1", title: "Check yourself" }
          ]},
          { file: "py-02-data-structures.html", title: "2. Core Data Structures", sections: [
            { id: "lists", title: "2.1 Lists" },
            { id: "tuples", title: "2.2 Tuples" },
            { id: "dicts", title: "2.3 Dictionaries" },
            { id: "sets", title: "2.4 Sets" },
            { id: "worked-problem-py2", title: "2.5 Worked problem" },
            { id: "recap-py2", title: "Recap" },
            { id: "quiz-py2", title: "Check yourself" }
          ]},
          { file: "py-03-files-strings-exceptions.html", title: "3. Files, Strings & Exceptions", sections: [
            { id: "strings-python", title: "3.1 Strings" },
            { id: "files-python", title: "3.2 File I/O & 'with'" },
            { id: "exceptions", title: "3.3 Exceptions" },
            { id: "worked-problem-py3", title: "3.4 Worked problem: log parser" },
            { id: "recap-py3", title: "Recap" },
            { id: "quiz-py3", title: "Check yourself" }
          ]},
          { file: "py-04-numpy-arrays.html", title: "4. NumPy I — Arrays & Vectorization", sections: [
            { id: "what-is-numpy", title: "4.1 What NumPy is" },
            { id: "vectorization", title: "4.2 Vectorization" },
            { id: "boolean-masking", title: "4.3 Boolean masking" },
            { id: "creation-and-stats", title: "4.4 Array creation & statistics" },
            { id: "recap-py4", title: "Recap" },
            { id: "quiz-py4", title: "Check yourself" }
          ]},
          { file: "py-05-numpy-linalg.html", title: "5. NumPy II — Linear Algebra & Indexing", sections: [
            { id: "2d-arrays-matrices", title: "5.1 2D arrays as matrices" },
            { id: "linalg-functions", title: "5.2 The np.linalg module" },
            { id: "broadcasting", title: "5.3 Broadcasting" },
            { id: "advanced-indexing", title: "5.4 Advanced indexing & axes" },
            { id: "recap-py5", title: "Recap" },
            { id: "quiz-py5", title: "Check yourself" }
          ]},
          { file: "py-06-matplotlib.html", title: "6. Matplotlib — Visualizing Data", sections: [
            { id: "first-plot", title: "6.1 Your first plot" },
            { id: "plot-types", title: "6.2 Plot types" },
            { id: "worked-problem-py6", title: "6.3 Worked problem: visualizing cleaning" },
            { id: "recap-py6", title: "Recap" },
            { id: "quiz-py6", title: "Check yourself" }
          ]},
          { file: "py-07-pandas.html", title: "7. Pandas — Tabular & Time-Series Data", sections: [
            { id: "dataframes", title: "7.1 The DataFrame" },
            { id: "groupby", title: "7.2 groupby" },
            { id: "time-series", title: "7.3 Time series" },
            { id: "worked-problem-py7", title: "7.4 Worked problem: comparing laps" },
            { id: "recap-py7", title: "Recap" },
            { id: "quiz-py7", title: "Check yourself" }
          ]},
          { file: "py-08-scipy.html", title: "8. SciPy — Signal Processing", sections: [
            { id: "what-is-scipy", title: "8.1 What SciPy adds" },
            { id: "filtering-scipy", title: "8.2 Filtering" },
            { id: "interpolation", title: "8.3 Interpolation" },
            { id: "optimize", title: "8.4 Curve fitting" },
            { id: "recap-py8", title: "Recap" },
            { id: "quiz-py8", title: "Check yourself" }
          ]},
          { file: "py-09-clean-python.html", title: "9. Writing Clean, Reusable Python", sections: [
            { id: "modules", title: "9.1 Modules" },
            { id: "virtual-environments", title: "9.2 Virtual environments" },
            { id: "project-structure", title: "9.3 Project structure" },
            { id: "recap-py9", title: "Recap" },
            { id: "quiz-py9", title: "Check yourself" }
          ]},
          { file: "py-10-capstone.html", title: "10. CPS Capstone: Data Pipeline", sections: [
            { id: "the-problem", title: "10.1 The problem" },
            { id: "full-pipeline", title: "10.2 The full pipeline" },
            { id: "course-closing-py", title: "10.3 How the chapters connect" },
            { id: "recap-py10", title: "Recap" },
            { id: "quiz-py10", title: "Check yourself" }
          ]}
        ] },
        { id: "digital-logic", title: "Digital Logic Design", chapters: [
          { file: "dl-01-number-systems.html", title: "1. Number Systems & Binary", sections: [
            { id: "why-binary", title: "1.1 Why binary at all" },
            { id: "binary-basics", title: "1.2 Binary from first principles" },
            { id: "hexadecimal", title: "1.3 Hexadecimal" },
            { id: "binary-arithmetic", title: "1.4 Binary arithmetic" },
            { id: "recap-dl1", title: "Recap" },
            { id: "quiz-dl1", title: "Check yourself" }
          ]},
          { file: "dl-02-boolean-gates.html", title: "2. Boolean Algebra & Logic Gates", sections: [
            { id: "basic-gates", title: "2.1 The basic gates" },
            { id: "boolean-algebra", title: "2.2 Boolean algebra laws" },
            { id: "gates-vs-c-bitwise", title: "2.3 Connecting to C's bitwise ops" },
            { id: "recap-dl2", title: "Recap" },
            { id: "quiz-dl2", title: "Check yourself" }
          ]},
          { file: "dl-03-combinational.html", title: "3. Combinational Logic Design", sections: [
            { id: "adders", title: "3.1 Adders" },
            { id: "mux-decoder", title: "3.2 Multiplexers & decoders" },
            { id: "karnaugh-maps", title: "3.3 Karnaugh maps" },
            { id: "recap-dl3", title: "Recap" },
            { id: "quiz-dl3", title: "Check yourself" }
          ]},
          { file: "dl-04-latches-flipflops.html", title: "4. Latches & Flip-Flops", sections: [
            { id: "why-memory-needed", title: "4.1 Why memory is needed" },
            { id: "sr-latch", title: "4.2 The SR latch" },
            { id: "d-latch-flipflop", title: "4.3 D latch & edge-triggered flip-flop" },
            { id: "worked-problem-dl4", title: "4.4 Worked problem" },
            { id: "recap-dl4", title: "Recap" },
            { id: "quiz-dl4", title: "Check yourself" }
          ]},
          { file: "dl-05-counters-registers.html", title: "5. Counters & Registers", sections: [
            { id: "registers", title: "5.1 Registers" },
            { id: "counters", title: "5.2 Counters" },
            { id: "shift-registers", title: "5.3 Shift registers" },
            { id: "worked-problem-dl5", title: "5.4 Worked problem: mod-6 counter" },
            { id: "recap-dl5", title: "Recap" },
            { id: "quiz-dl5", title: "Check yourself" }
          ]},
          { file: "dl-06-fsm.html", title: "6. Finite State Machines", sections: [
            { id: "what-is-fsm", title: "6.1 What an FSM is" },
            { id: "moore-mealy", title: "6.2 Moore vs. Mealy" },
            { id: "fsm-design-process", title: "6.3 The FSM design process" },
            { id: "worked-problem-dl6", title: "6.4 Worked problem: traffic light" },
            { id: "recap-dl6", title: "Recap" },
            { id: "quiz-dl6", title: "Check yourself" }
          ]},
          { file: "dl-07-hdl-fpga-bridge.html", title: "7. From Logic to Hardware", sections: [
            { id: "two-paths-hardware", title: "7.1 Two paths to hardware" },
            { id: "hdl-intro", title: "7.2 Intro to HDLs" },
            { id: "course-closing-dl", title: "7.3 How the chapters connect" },
            { id: "recap-dl7", title: "Recap" },
            { id: "quiz-dl7", title: "Check yourself" }
          ]}
        ] },
        { id: "git-cli", title: "Git, Linux & Command Line", chapters: [
          { file: "gl-01-command-line.html", title: "1. The Command Line & Linux Fundamentals", sections: [
            { id: "why-terminal", title: "1.1 Why the terminal" },
            { id: "navigation-basics", title: "1.2 Navigating the filesystem" },
            { id: "file-operations", title: "1.3 Basic file operations" },
            { id: "pipes-preview", title: "1.4 A first taste of pipes" },
            { id: "worked-problem-gl1", title: "1.5 Worked problem" },
            { id: "recap-gl1", title: "Recap" },
            { id: "quiz-gl1", title: "Check yourself" }
          ]},
          { file: "gl-02-files-permissions.html", title: "2. Files, Permissions & Processes", sections: [
            { id: "permissions-model", title: "2.1 The permissions model" },
            { id: "processes", title: "2.2 Processes" },
            { id: "environment-variables", title: "2.3 Environment variables & PATH" },
            { id: "worked-problem-gl2", title: "2.4 Worked problem" },
            { id: "recap-gl2", title: "Recap" },
            { id: "quiz-gl2", title: "Check yourself" }
          ]},
          { file: "gl-03-text-pipes-scripting.html", title: "3. Text Processing, Pipes & Scripting", sections: [
            { id: "redirection-pipes", title: "3.1 Redirection and pipes" },
            { id: "text-tools", title: "3.2 Core text-processing tools" },
            { id: "sed-awk", title: "3.3 sed and awk" },
            { id: "shell-scripting", title: "3.4 Shell scripting" },
            { id: "worked-problem-gl3", title: "3.5 Worked problem" },
            { id: "recap-gl3", title: "Recap" },
            { id: "quiz-gl3", title: "Check yourself" }
          ]},
          { file: "gl-04-git-fundamentals.html", title: "4. Git Fundamentals", sections: [
            { id: "why-git", title: "4.1 Why version control, Git's model" },
            { id: "three-areas", title: "4.2 Working dir, staging, repo" },
            { id: "history-diff", title: "4.3 Viewing history: log & diff" },
            { id: "branching", title: "4.4 Branching and merging" },
            { id: "remotes", title: "4.5 Working with remotes" },
            { id: "undoing", title: "4.6 Undoing things safely" },
            { id: "worked-problem-gl4", title: "4.7 Worked problem" },
            { id: "recap-gl4", title: "Recap" },
            { id: "quiz-gl4", title: "Check yourself" }
          ]}
        ] },
        { id: "electronics", title: "Basic Electronics & Circuits", chapters: [
          { file: "elec-01-voltage-current-resistance.html", title: "1. Voltage, Current, Resistance & Ohm's Law", sections: [
            { id: "charge-current-voltage", title: "1.1 Charge, current, voltage" },
            { id: "resistance-ohms-law", title: "1.2 Resistance & Ohm's Law" },
            { id: "power", title: "1.3 Power dissipation" },
            { id: "circuit-diagrams", title: "1.4 Reading a circuit diagram" },
            { id: "worked-problem-elec1", title: "1.5 Worked problem" },
            { id: "recap-elec1", title: "Recap" },
            { id: "quiz-elec1", title: "Check yourself" }
          ]},
          { file: "elec-02-kirchhoff-series-parallel.html", title: "2. Kirchhoff's Laws, Series & Parallel", sections: [
            { id: "kirchhoffs-laws", title: "2.1 KVL and KCL" },
            { id: "series-circuits", title: "2.2 Series circuits" },
            { id: "parallel-circuits", title: "2.3 Parallel circuits" },
            { id: "combined-networks", title: "2.4 Combined networks" },
            { id: "worked-problem-elec2", title: "2.5 Worked problem" },
            { id: "recap-elec2", title: "Recap" },
            { id: "quiz-elec2", title: "Check yourself" }
          ]},
          { file: "elec-03-capacitors-inductors.html", title: "3. Capacitors, Inductors & RC/RL Transients", sections: [
            { id: "capacitors", title: "3.1 Capacitors" },
            { id: "rc-transients", title: "3.2 RC transients" },
            { id: "inductors", title: "3.3 Inductors" },
            { id: "rl-transients", title: "3.4 RL transients" },
            { id: "worked-problem-elec3", title: "3.5 Worked problem" },
            { id: "recap-elec3", title: "Recap" },
            { id: "quiz-elec3", title: "Check yourself" }
          ]},
          { file: "elec-04-ac-impedance.html", title: "4. AC Circuits & Impedance", sections: [
            { id: "sinusoidal-signals", title: "4.1 Sinusoidal signals" },
            { id: "impedance", title: "4.2 Impedance of R, L, C" },
            { id: "phasors", title: "4.3 Phasors & complex impedance" },
            { id: "basic-filters", title: "4.4 Low-pass & high-pass filters" },
            { id: "worked-problem-elec4", title: "4.5 Worked problem" },
            { id: "recap-elec4", title: "Recap" },
            { id: "quiz-elec4", title: "Check yourself" }
          ]},
          { file: "elec-05-diodes-transistors.html", title: "5. Diodes & Transistors", sections: [
            { id: "semiconductor-basics", title: "5.1 P-N junction basics" },
            { id: "diodes", title: "5.2 Diodes: behavior & applications" },
            { id: "bjt-basics", title: "5.3 Bipolar Junction Transistors" },
            { id: "mosfet-basics", title: "5.4 MOSFETs" },
            { id: "worked-problem-elec5", title: "5.5 Worked problem" },
            { id: "recap-elec5", title: "Recap" },
            { id: "quiz-elec5", title: "Check yourself" }
          ]},
          { file: "elec-06-op-amps.html", title: "6. Op-Amps & Basic Amplifiers", sections: [
            { id: "ideal-op-amp", title: "6.1 The ideal op-amp model" },
            { id: "amplifier-configs", title: "6.2 Inverting & non-inverting amps" },
            { id: "comparators", title: "6.3 Comparators" },
            { id: "worked-problem-elec6", title: "6.4 Worked problem" },
            { id: "recap-elec6", title: "Recap" },
            { id: "quiz-elec6", title: "Check yourself" }
          ]},
          { file: "elec-07-measurement-power.html", title: "7. Practical Measurement & Power Supplies", sections: [
            { id: "multimeter", title: "7.1 Using a multimeter" },
            { id: "oscilloscope", title: "7.2 Oscilloscope basics" },
            { id: "breadboarding", title: "7.3 Breadboarding" },
            { id: "power-supplies", title: "7.4 Regulated power supplies" },
            { id: "bridge-to-microcontrollers", title: "7.5 Bridge to microcontroller I/O" },
            { id: "worked-problem-elec7", title: "7.6 Worked problem" },
            { id: "recap-elec7", title: "Recap" },
            { id: "quiz-elec7", title: "Check yourself" }
          ]}
        ] }
      ]
    },
    {
      label: "Year 2 — Core Embedded",
      topics: [
        { id: "microcontrollers", title: "Microcontrollers (Arduino/ESP32)", chapters: [
          { file: "mc-01-fundamentals-devenv.html", title: "1. Fundamentals & Dev Environment", sections: [
            { id: "what-is-a-microcontroller", title: "1.1 What a microcontroller is" },
            { id: "arduino-vs-esp32", title: "1.2 Arduino (AVR) vs. ESP32" },
            { id: "toolchain", title: "1.3 The toolchain" },
            { id: "sketch-structure", title: "1.4 Sketch structure: setup/loop" },
            { id: "worked-problem-mc1", title: "1.5 Worked problem" },
            { id: "recap-mc1", title: "Recap" },
            { id: "quiz-mc1", title: "Check yourself" }
          ]},
          { file: "mc-02-digital-io.html", title: "2. Digital I/O", sections: [
            { id: "gpio-pin-modes", title: "2.1 GPIO pins and pin modes" },
            { id: "digital-write-read", title: "2.2 digitalWrite/digitalRead" },
            { id: "pullup-pulldown", title: "2.3 Pull-up/pull-down resistors" },
            { id: "debouncing", title: "2.4 Debouncing switches" },
            { id: "worked-problem-mc2", title: "2.5 Worked problem" },
            { id: "recap-mc2", title: "Recap" },
            { id: "quiz-mc2", title: "Check yourself" }
          ]},
          { file: "mc-03-analog-io.html", title: "3. Analog I/O", sections: [
            { id: "the-adc", title: "3.1 The ADC" },
            { id: "analog-read", title: "3.2 analogRead() in practice" },
            { id: "pwm-analog-write", title: "3.3 PWM and analogWrite()" },
            { id: "mapping-values", title: "3.4 Mapping and scaling values" },
            { id: "worked-problem-mc3", title: "3.5 Worked problem" },
            { id: "recap-mc3", title: "Recap" },
            { id: "quiz-mc3", title: "Check yourself" }
          ]},
          { file: "mc-04-timers-interrupts.html", title: "4. Timers & Interrupts", sections: [
            { id: "millis-vs-delay", title: "4.1 millis(): non-blocking timing" },
            { id: "hardware-timers", title: "4.2 Hardware timers" },
            { id: "interrupts", title: "4.3 Interrupts and ISRs" },
            { id: "interrupt-priority-race", title: "4.4 Race conditions with shared data" },
            { id: "worked-problem-mc4", title: "4.5 Worked problem" },
            { id: "recap-mc4", title: "Recap" },
            { id: "quiz-mc4", title: "Check yourself" }
          ]},
          { file: "mc-05-communication-basics.html", title: "5. Communication Basics (Preview)", sections: [
            { id: "serial-uart", title: "5.1 Serial/UART" },
            { id: "i2c-preview", title: "5.2 I2C preview" },
            { id: "spi-preview", title: "5.3 SPI preview" },
            { id: "protocol-comparison", title: "5.4 Choosing a protocol" },
            { id: "worked-problem-mc5", title: "5.5 Worked problem" },
            { id: "recap-mc5", title: "Recap" },
            { id: "quiz-mc5", title: "Check yourself" }
          ]},
          { file: "mc-06-power-management.html", title: "6. Power Management & Sleep Modes", sections: [
            { id: "why-power-matters", title: "6.1 Why power management matters" },
            { id: "sleep-modes-overview", title: "6.2 Sleep modes overview" },
            { id: "waking-from-sleep", title: "6.3 Waking up: timers & interrupts" },
            { id: "practical-current-draw", title: "6.4 Practical current-draw considerations" },
            { id: "worked-problem-mc6", title: "6.5 Worked problem" },
            { id: "recap-mc6", title: "Recap" },
            { id: "quiz-mc6", title: "Check yourself" }
          ]},
          { file: "mc-07-putting-together.html", title: "7. Putting It Together", sections: [
            { id: "using-libraries", title: "7.1 Using libraries" },
            { id: "project-structure", title: "7.2 Structuring a larger project" },
            { id: "wifi-bluetooth-basics", title: "7.3 ESP32 WiFi & Bluetooth" },
            { id: "capstone-project", title: "7.4 Capstone worked project" },
            { id: "recap-mc7", title: "Recap" },
            { id: "quiz-mc7", title: "Check yourself" }
          ]}
        ] },
        { id: "control-1", title: "Control Systems I", chapters: [
          { file: "cs-01-systems-signals.html", title: "1. Systems, Signals & the Big Picture", sections: [
            { id: "what-is-a-system", title: "1.1 What a system means here" },
            { id: "open-loop-vs-closed-loop", title: "1.2 Open-loop vs. closed-loop" },
            { id: "block-diagrams", title: "1.3 Block diagrams" },
            { id: "why-feedback-matters", title: "1.4 Why feedback matters" },
            { id: "worked-problem-cs1", title: "1.5 Worked problem" },
            { id: "recap-cs1", title: "Recap" },
            { id: "quiz-cs1", title: "Check yourself" }
          ]},
          { file: "cs-02-modeling-transfer-functions.html", title: "2. Modeling Systems: Differential Equations & Transfer Functions", sections: [
            { id: "from-physics-to-diffeq", title: "2.1 From physics to a differential equation" },
            { id: "lti-systems", title: "2.2 Linear, time-invariant (LTI) systems" },
            { id: "transfer-function-definition", title: "2.3 The transfer function" },
            { id: "worked-problem-cs2", title: "2.4 Worked problem" },
            { id: "recap-cs2", title: "Recap" },
            { id: "quiz-cs2", title: "Check yourself" }
          ]},
          { file: "cs-03-laplace-response.html", title: "3. The Laplace Transform & System Response", sections: [
            { id: "what-laplace-does", title: "3.1 What the Laplace transform does" },
            { id: "poles-and-zeros", title: "3.2 Poles and zeros" },
            { id: "first-order-response", title: "3.3 First-order step response" },
            { id: "second-order-response", title: "3.4 Second-order response & damping" },
            { id: "worked-problem-cs3", title: "3.5 Worked problem" },
            { id: "recap-cs3", title: "Recap" },
            { id: "quiz-cs3", title: "Check yourself" }
          ]},
          { file: "cs-04-block-diagram-algebra.html", title: "4. Block Diagram Algebra & Feedback", sections: [
            { id: "series-parallel-reduction", title: "4.1 Series and parallel reduction" },
            { id: "feedback-loop-formula", title: "4.2 The closed-loop transfer function" },
            { id: "quantifying-feedback-benefit", title: "4.3 Quantifying feedback's benefit" },
            { id: "worked-problem-cs4", title: "4.4 Worked problem" },
            { id: "recap-cs4", title: "Recap" },
            { id: "quiz-cs4", title: "Check yourself" }
          ]},
          { file: "cs-05-stability.html", title: "5. Stability", sections: [
            { id: "what-stability-means", title: "5.1 What stability means, formally" },
            { id: "the-s-plane", title: "5.2 The s-plane" },
            { id: "routh-hurwitz", title: "5.3 The Routh-Hurwitz criterion" },
            { id: "gain-and-stability", title: "5.4 Gain and stability" },
            { id: "worked-problem-cs5", title: "5.5 Worked problem" },
            { id: "recap-cs5", title: "Recap" },
            { id: "quiz-cs5", title: "Check yourself" }
          ]},
          { file: "cs-06-pid-control.html", title: "6. PID Control", sections: [
            { id: "proportional-term", title: "6.1 The proportional term" },
            { id: "integral-term", title: "6.2 The integral term" },
            { id: "derivative-term", title: "6.3 The derivative term" },
            { id: "tuning-intuition", title: "6.4 Combining P, I, D" },
            { id: "worked-problem-cs6", title: "6.5 Worked problem" },
            { id: "recap-cs6", title: "Recap" },
            { id: "quiz-cs6", title: "Check yourself" }
          ]},
          { file: "cs-07-putting-together.html", title: "7. Putting It Together", sections: [
            { id: "the-design-process", title: "7.1 The full design process" },
            { id: "continuous-to-discrete", title: "7.2 Continuous to discrete" },
            { id: "capstone-project", title: "7.3 Capstone project" },
            { id: "recap-cs7", title: "Recap" },
            { id: "quiz-cs7", title: "Check yourself" }
          ]}
        ] },
        { id: "signals", title: "Signals & Systems", chapters: [
          { file: "ss-01-signal-classification.html", title: "1. Signal Classification & Basic Operations", sections: [
            { id: "continuous-vs-discrete", title: "1.1 Continuous vs. discrete-time signals" },
            { id: "elementary-signals", title: "1.2 The elementary signals" },
            { id: "basic-operations", title: "1.3 Shifting, scaling, reflecting" },
            { id: "energy-and-power", title: "1.4 Signal energy and power" },
            { id: "worked-problem-ss1", title: "1.5 Worked problem" },
            { id: "recap-ss1", title: "Recap" },
            { id: "quiz-ss1", title: "Check yourself" }
          ]},
          { file: "ss-02-system-properties.html", title: "2. System Properties", sections: [
            { id: "system-definition", title: "2.1 What a system is" },
            { id: "linearity", title: "2.2 Linearity" },
            { id: "time-invariance", title: "2.3 Time-invariance" },
            { id: "causality-memory", title: "2.4 Memory and causality" },
            { id: "bibo-stability", title: "2.5 BIBO stability" },
            { id: "invertibility", title: "2.6 Invertibility" },
            { id: "worked-problem-ss2", title: "2.7 Worked problem" },
            { id: "recap-ss2", title: "Recap" },
            { id: "quiz-ss2", title: "Check yourself" }
          ]},
          { file: "ss-03-convolution.html", title: "3. Convolution", sections: [
            { id: "convolution-idea", title: "3.1 Where convolution comes from" },
            { id: "dt-convolution", title: "3.2 Discrete-time convolution" },
            { id: "ct-convolution", title: "3.3 Continuous-time convolution" },
            { id: "conv-properties", title: "3.4 Properties, and what h tells you" },
            { id: "fir-in-code", title: "3.5 Convolution in firmware: FIR" },
            { id: "worked-problem-ss3", title: "3.6 Worked problem" },
            { id: "recap-ss3", title: "Recap" },
            { id: "quiz-ss3", title: "Check yourself" }
          ]},
          { file: "ss-04-fourier-series.html", title: "4. The Fourier Series", sections: [
            { id: "fs-building-blocks", title: "4.1 Why sinusoids: eigenfunctions" },
            { id: "fs-trig", title: "4.2 The trigonometric series" },
            { id: "fs-complex", title: "4.3 Complex form & the spectrum" },
            { id: "fs-properties", title: "4.4 Properties, Parseval, convergence" },
            { id: "fs-lti", title: "4.5 Periodic inputs through LTI systems" },
            { id: "fs-firmware", title: "4.6 Measuring harmonics in firmware" },
            { id: "worked-problem-ss4", title: "4.7 Worked problem" },
            { id: "recap-ss4", title: "Recap" },
            { id: "quiz-ss4", title: "Check yourself" }
          ]},
          { file: "ss-05-fourier-transform.html", title: "5. The Fourier Transform", sections: [
            { id: "ft-from-series", title: "5.1 From the series to the transform" },
            { id: "ft-pairs", title: "5.2 Transform pairs" },
            { id: "ft-properties", title: "5.3 Properties: convolution → product" },
            { id: "ft-filtering", title: "5.4 Filtering and frequency response" },
            { id: "ft-time-bandwidth", title: "5.5 Time-bandwidth & modulation" },
            { id: "ft-dft-fft", title: "5.6 The DFT and FFT in firmware" },
            { id: "worked-problem-ss5", title: "5.7 Worked problem" },
            { id: "recap-ss5", title: "Recap" },
            { id: "quiz-ss5", title: "Check yourself" }
          ]},
          { file: "ss-06-sampling-nyquist.html", title: "6. Sampling & the Nyquist Theorem", sections: [
            { id: "sampling-spectrum", title: "6.1 Sampling: the spectrum repeats" },
            { id: "nyquist-theorem", title: "6.2 The Nyquist-Shannon theorem" },
            { id: "aliasing", title: "6.3 Aliasing" },
            { id: "anti-aliasing", title: "6.4 Reconstruction & anti-aliasing" },
            { id: "sampling-in-practice", title: "6.5 Filters and PWM in practice" },
            { id: "worked-problem-ss6", title: "6.6 Worked problem" },
            { id: "recap-ss6", title: "Recap" },
            { id: "quiz-ss6", title: "Check yourself" }
          ]},
          { file: "ss-07-putting-together.html", title: "7. Putting It Together", sections: [
            { id: "unified-picture", title: "7.1 The whole topic in one picture" },
            { id: "design-process", title: "7.2 The general design process" },
            { id: "capstone-project", title: "7.3 Capstone — vibration monitoring" },
            { id: "where-next", title: "7.4 Where this topic leads next" },
            { id: "recap-ss7", title: "Recap" },
            { id: "quiz-ss7", title: "Check yourself" }
          ]}
        ] },
        { id: "serial", title: "Serial Protocols", chapters: [
          { file: "sp-01-serial-fundamentals.html", title: "1. Serial Communication Fundamentals", sections: [
            { id: "serial-vs-parallel", title: "1.1 Serial vs. parallel" },
            { id: "bit-rate-timing", title: "1.2 Bit rate, baud rate, sync/async" },
            { id: "framing-basics", title: "1.3 Framing" },
            { id: "physical-layer", title: "1.4 The physical layer" },
            { id: "worked-problem-sp1", title: "1.5 Worked problem" },
            { id: "recap-sp1", title: "Recap" },
            { id: "quiz-sp1", title: "Check yourself" }
          ]},
          { file: "sp-02-uart.html", title: "2. UART", sections: [
            { id: "uart-framing", title: "2.1 The UART frame" },
            { id: "clock-tolerance", title: "2.2 Clock tolerance" },
            { id: "uart-in-practice", title: "2.3 UART peripherals and firmware" },
            { id: "uart-extras", title: "2.4 Flow control, break, RS-232" },
            { id: "worked-problem-sp2", title: "2.5 Worked problem" },
            { id: "recap-sp2", title: "Recap" },
            { id: "quiz-sp2", title: "Check yourself" }
          ]},
          { file: "sp-03-spi.html", title: "3. SPI", sections: [
            { id: "spi-bus", title: "3.1 The four-wire bus" },
            { id: "spi-modes", title: "3.2 CPOL, CPHA, SPI modes" },
            { id: "spi-chip-select", title: "3.3 Multiple slaves & chip select" },
            { id: "spi-speed", title: "3.4 Speed and physical limits" },
            { id: "worked-problem-sp3", title: "3.5 Worked problem" },
            { id: "recap-sp3", title: "Recap" },
            { id: "quiz-sp3", title: "Check yourself" }
          ]},
          { file: "sp-04-i2c.html", title: "4. I2C", sections: [
            { id: "i2c-two-wire", title: "4.1 The two-wire bus" },
            { id: "i2c-addressing", title: "4.2 START, STOP, addressing" },
            { id: "i2c-ack-nack", title: "4.3 ACK and NACK" },
            { id: "i2c-stretch-arbitration", title: "4.4 Clock stretching & arbitration" },
            { id: "i2c-speed-practice", title: "4.5 Speed modes & firmware" },
            { id: "worked-problem-sp4", title: "4.6 Worked problem" },
            { id: "recap-sp4", title: "Recap" },
            { id: "quiz-sp4", title: "Check yourself" }
          ]},
          { file: "sp-05-can-rs485.html", title: "5. CAN & RS-485", sections: [
            { id: "differential-review", title: "5.1 Why differential signaling survives" },
            { id: "rs485-basics", title: "5.2 RS-485" },
            { id: "can-basics", title: "5.3 CAN frame format" },
            { id: "can-arbitration-errors", title: "5.4 CAN arbitration & errors" },
            { id: "comparison-and-practice", title: "5.5 Comparison table & firmware" },
            { id: "worked-problem-sp5", title: "5.6 Worked problem" },
            { id: "recap-sp5", title: "Recap" },
            { id: "quiz-sp5", title: "Check yourself" }
          ]},
          { file: "sp-06-choosing-debugging.html", title: "6. Choosing and Debugging Protocols", sections: [
            { id: "choosing-protocol", title: "6.1 A decision framework" },
            { id: "logic-analyzer", title: "6.2 Reading a logic analyzer capture" },
            { id: "debugging-checklist", title: "6.3 A systematic debugging checklist" },
            { id: "worked-problem-sp6", title: "6.4 Worked problem" },
            { id: "recap-sp6", title: "Recap" },
            { id: "quiz-sp6", title: "Check yourself" }
          ]},
          { file: "sp-07-putting-together.html", title: "7. Putting It Together", sections: [
            { id: "unified-picture", title: "7.1 The whole topic in one picture" },
            { id: "five-questions", title: "7.2 Five questions every protocol answers" },
            { id: "capstone", title: "7.3 Capstone: greenhouse node" },
            { id: "where-next", title: "7.4 Where this leads next" },
            { id: "recap-sp7", title: "Recap" },
            { id: "quiz-sp7", title: "Check yourself" }
          ]}
        ] },
        { id: "dsa", title: "Data Structures & Algorithms", chapters: [
          { file: "dsa-01-complexity-bigo.html", title: "1. Complexity & Big-O", sections: [
            { id: "why-measure", title: "1.1 Why we measure cost" },
            { id: "counting-ops", title: "1.2 Counting operations" },
            { id: "big-o", title: "1.3 Big-O notation, precisely" },
            { id: "classes", title: "1.4 Common complexity classes" },
            { id: "space-amortized", title: "1.5 Space, stack & amortized cost" },
            { id: "in-practice", title: "1.6 Measuring in practice" },
            { id: "worked-problem-dsa1", title: "1.7 Worked problem" },
            { id: "recap-dsa1", title: "Recap" },
            { id: "quiz-dsa1", title: "Check yourself" }
          ]},
          { file: "dsa-02-arrays-strings.html", title: "2. Arrays & Strings", sections: [
            { id: "arrays-in-memory", title: "2.1 Arrays in memory & their costs" },
            { id: "array-ops", title: "2.2 Insert, delete, reverse, rotate" },
            { id: "two-pointers-windows", title: "2.3 Two pointers, prefix sums, windows" },
            { id: "strings-c-python", title: "2.4 Strings: hidden costs" },
            { id: "multidim-order", title: "2.5 2D arrays & row-major order" },
            { id: "fixed-buffers", title: "2.6 Fixed buffers & safe strings" },
            { id: "worked-problem-dsa2", title: "2.7 Worked problem" },
            { id: "recap-dsa2", title: "Recap" },
            { id: "quiz-dsa2", title: "Check yourself" }
          ]},
          { file: "dsa-03-linked-lists.html", title: "3. Linked Lists", sections: [
            { id: "what-is-linked-list", title: "3.1 What a linked list is & costs" },
            { id: "core-operations", title: "3.2 Core operations in C" },
            { id: "classic-problems", title: "3.3 Reverse, middle, cycle detection" },
            { id: "doubly-circular", title: "3.4 Doubly linked, circular, sentinels" },
            { id: "lists-vs-arrays-pool", title: "3.5 Lists vs. arrays, fixed pools" },
            { id: "worked-problem-dsa3", title: "3.6 Worked problem" },
            { id: "recap-dsa3", title: "Recap" },
            { id: "quiz-dsa3", title: "Check yourself" }
          ]},
          { file: "dsa-04-stacks-queues.html", title: "4. Stacks & Queues", sections: [
            { id: "what-is-stack", title: "4.1 The stack: LIFO" },
            { id: "stack-applications", title: "4.2 Brackets & postfix evaluation" },
            { id: "queues", title: "4.3 The queue: FIFO" },
            { id: "ring-buffers", title: "4.4 The ring buffer in depth" },
            { id: "isr-ring-buffers", title: "4.5 Ring buffer: ISR to main loop" },
            { id: "choosing-structure", title: "4.6 Deques & choosing a structure" },
            { id: "worked-problem-dsa4", title: "4.7 Worked problem" },
            { id: "recap-dsa4", title: "Recap" },
            { id: "quiz-dsa4", title: "Check yourself" }
          ]},
          { file: "dsa-05-recursion.html", title: "5. Recursion & Divide and Conquer", sections: [
            { id: "recursion-anatomy", title: "5.1 Anatomy of a recursive function" },
            { id: "recursive-thinking", title: "5.2 Thinking recursively" },
            { id: "recurrence-cost", title: "5.3 Reading the cost of a recursion" },
            { id: "divide-and-conquer", title: "5.4 Divide and conquer" },
            { id: "recursion-to-iteration", title: "5.5 Recursion to iteration" },
            { id: "backtracking", title: "5.6 Backtracking" },
            { id: "recursion-embedded", title: "5.7 Recursion on a microcontroller" },
            { id: "worked-problem-dsa5", title: "5.8 Worked problem" },
            { id: "recap-dsa5", title: "Recap" },
            { id: "quiz-dsa5", title: "Check yourself" }
          ]},
          { file: "dsa-06-sorting-searching.html", title: "6. Sorting & Searching", sections: [
            { id: "why-sort", title: "6.1 Sorting & the n log n bound" },
            { id: "simple-sorts", title: "6.2 Selection & insertion sort" },
            { id: "merge-sort", title: "6.3 Merge sort" },
            { id: "quicksort", title: "6.4 Quicksort" },
            { id: "library-and-special", title: "6.5 Library sorts, counting sort" },
            { id: "searching-table", title: "6.6 Lower bound & table interpolation" },
            { id: "choosing-embedded", title: "6.7 Choosing a sort; median filter" },
            { id: "worked-problem-dsa6", title: "6.8 Worked problem" },
            { id: "recap-dsa6", title: "Recap" },
            { id: "quiz-dsa6", title: "Check yourself" }
          ]},
          { file: "dsa-07-hash-tables.html", title: "7. Hash Tables", sections: [
            { id: "hash-idea", title: "7.1 From direct addressing to hashing" },
            { id: "hash-functions", title: "7.2 Hash functions" },
            { id: "collisions", title: "7.3 Collisions & the birthday problem" },
            { id: "chaining", title: "7.4 Chaining (fixed pool)" },
            { id: "open-addressing", title: "7.5 Open addressing & tombstones" },
            { id: "load-factor", title: "7.6 Load factor, resizing, dict" },
            { id: "when-hash", title: "7.7 When (not) to use a hash table" },
            { id: "worked-problem-dsa7", title: "7.8 Worked problem" },
            { id: "recap-dsa7", title: "Recap" },
            { id: "quiz-dsa7", title: "Check yourself" }
          ]}
        ] },
        { id: "pcb", title: "PCB Design Basics", chapters: [] }
      ]
    },
    {
      label: "Year 3 — Systems & Networking",
      topics: [
        { id: "rtos", title: "Real-Time Operating Systems", chapters: [] },
        { id: "ros2", title: "ROS / ROS2 Fundamentals", chapters: [] },
        { id: "networking", title: "Networking & IoT Protocols", chapters: [] },
        { id: "opencv", title: "Computer Vision with OpenCV", chapters: [] },
        { id: "control-2", title: "Control Systems II", chapters: [] },
        { id: "cybersecurity", title: "Cybersecurity for CPS & IoT", chapters: [] }
      ]
    },
    {
      label: "Year 4 — AI, Scale & Capstone",
      topics: [
        { id: "tinyml", title: "TinyML & Edge AI", chapters: [] },
        { id: "mbse", title: "Model-Based Systems Engineering", chapters: [] },
        { id: "fpga", title: "FPGA & VHDL/Verilog", chapters: [] },
        { id: "capstone", title: "Capstone / Hackathon Practice", chapters: [] }
      ]
    },
    {
      label: "Git & GitHub Track",
      topics: [
        { id: "g1", title: "G1 — Local Git Basics", chapters: [] },
        { id: "g2", title: "G2 — Branching & Merging", chapters: [] },
        { id: "g3", title: "G3 — Meet GitHub", chapters: [] },
        { id: "g4", title: "G4 — Collaboration Workflow", chapters: [] },
        { id: "g5", title: "G5 — Advanced Git & Ecosystem", chapters: [] }
      ]
    },
    {
      label: "Motorsport — Vehicle Dynamics",
      topics: [
        { id: "vehdyn", title: "Vehicle Dynamics Fundamentals", chapters: [] },
        { id: "chassis", title: "Chassis & Suspension Control", chapters: [] },
        { id: "canbus", title: "CAN Bus for Vehicle Networks", chapters: [] }
      ]
    },
    {
      label: "Motorsport — Data & Simulation",
      topics: [
        { id: "telemetry", title: "Data Acquisition & Telemetry", chapters: [] },
        { id: "laptime", title: "Lap Time & Vehicle Simulation", chapters: [] },
        { id: "aero", title: "Aerodynamics & CFD Basics", chapters: [] }
      ]
    },
    {
      label: "Motorsport — Powertrain",
      topics: [
        { id: "ecu", title: "ECU Fundamentals & Engine Control", chapters: [] },
        { id: "hybrid", title: "Hybrid & Electric Powertrain Control", chapters: [] }
      ]
    },
    {
      label: "Motorsport — Autonomous Racing",
      topics: [
        { id: "autostack", title: "Autonomous Racing Stacks", chapters: [] },
        { id: "sensorfusion", title: "Sensor Fusion for Racing", chapters: [] }
      ]
    }
  ]
};

(function(){
  var PROGRESS_KEY = 'cps-deep-course-progress-v1';
  var FONT_KEY = 'cps-deep-course-fontsize-v1';
  var OPEN_KEY = 'cps-deep-course-navopen-v1';

  function getAllChapterFiles(){
    var files = [];
    COURSE.tracks.forEach(function(track){
      track.topics.forEach(function(topic){
        topic.chapters.forEach(function(ch){ files.push(ch.file); });
      });
    });
    return files;
  }

  function loadJSON(key){
    try { return JSON.parse(localStorage.getItem(key)) || {}; } catch(e){ return {}; }
  }
  function saveJSON(key, obj){
    try { localStorage.setItem(key, JSON.stringify(obj)); } catch(e){}
  }

  var progress = loadJSON(PROGRESS_KEY);
  var openState = loadJSON(OPEN_KEY);

  function currentFile(){
    var path = window.location.pathname.split('/');
    return path[path.length - 1] || 'index.html';
  }

  function buildSidebar(){
    var root = document.getElementById('nav-root');
    if (!root) return;
    var cur = currentFile();
    var html = '';
    COURSE.tracks.forEach(function(track){
      html += '<div class="track-h">' + track.label + '</div>';
      track.topics.forEach(function(topic){
        var hasChapters = topic.chapters.length > 0;
        var isCurrentTopic = hasChapters && topic.chapters.some(function(c){ return c.file === cur; });
        var isOpen = openState[topic.id] || isCurrentTopic;
        html += '<div class="topic-block">';
        if (hasChapters){
          html += '<div class="topic-head' + (isOpen ? ' open' : '') + (isCurrentTopic ? ' active-topic' : '') + '" data-topic="' + topic.id + '">' +
                    '<span>' + topic.title + '</span><span class="care">▸</span></div>';
          html += '<ul class="chapter-list' + (isOpen ? ' open' : '') + '" data-topic-list="' + topic.id + '">';
          topic.chapters.forEach(function(ch){
            var done = progress[ch.file];
            var isCurrentChapter = ch.file === cur;
            var hasSections = ch.sections && ch.sections.length > 0;
            var chKey = topic.id + '::' + ch.file;
            var sectionsOpen = isCurrentChapter || openState[chKey];
            html += '<li>';
            if (hasSections){
              html += '<div class="chapter-row">' +
                        '<a href="' + ch.file + '" class="' + (isCurrentChapter ? 'current' : '') + '">' +
                          '<span class="chk' + (done ? ' done' : '') + '">' + (done ? '✓' : '') + '</span>' + ch.title + '</a>' +
                        '<button class="care-mini' + (sectionsOpen ? ' open' : '') + '" data-chkey="' + chKey + '">▸</button>' +
                      '</div>';
              html += '<ul class="section-list' + (sectionsOpen ? ' open' : '') + '" data-section-list="' + chKey + '">';
              ch.sections.forEach(function(s){
                html += '<li><a href="' + ch.file + '#' + s.id + '" data-section-anchor="' + s.id + '" class="' + (isCurrentChapter ? '' : '') + '">' + s.title + '</a></li>';
              });
              html += '</ul>';
            } else {
              html += '<a href="' + ch.file + '" class="' + (isCurrentChapter ? 'current' : '') + '">' +
                        '<span class="chk' + (done ? ' done' : '') + '">' + (done ? '✓' : '') + '</span>' + ch.title + '</a>';
            }
            html += '</li>';
          });
          html += '</ul>';
        } else {
          html += '<div class="topic-head" style="opacity:.4; cursor:default;"><span>' + topic.title + '</span><span class="badge">soon</span></div>';
        }
        html += '</div>';
      });
    });
    root.innerHTML = html;

    root.querySelectorAll('.topic-head[data-topic]').forEach(function(head){
      head.addEventListener('click', function(){
        var id = head.getAttribute('data-topic');
        var list = root.querySelector('[data-topic-list="' + id + '"]');
        var willOpen = !head.classList.contains('open');
        head.classList.toggle('open', willOpen);
        list.classList.toggle('open', willOpen);
        openState[id] = willOpen;
        saveJSON(OPEN_KEY, openState);
      });
    });

    root.querySelectorAll('.care-mini').forEach(function(btn){
      btn.addEventListener('click', function(e){
        e.preventDefault(); e.stopPropagation();
        var key = btn.getAttribute('data-chkey');
        var list = root.querySelector('[data-section-list="' + key + '"]');
        var willOpen = !btn.classList.contains('open');
        btn.classList.toggle('open', willOpen);
        list.classList.toggle('open', willOpen);
        openState[key] = willOpen;
        saveJSON(OPEN_KEY, openState);
      });
    });

    highlightActiveSection();
  }

  // ---------- Scroll-spy: highlight the current sub-section in the sidebar ----------
  var spySectionIds = [];
  function setupScrollSpy(){
    var cur = currentFile();
    spySectionIds = [];
    COURSE.tracks.forEach(function(track){
      track.topics.forEach(function(topic){
        topic.chapters.forEach(function(ch){
          if (ch.file === cur && ch.sections){
            ch.sections.forEach(function(s){ spySectionIds.push(s.id); });
          }
        });
      });
    });
  }

  function highlightActiveSection(){
    if (!spySectionIds.length) return;
    var scrollPos = window.scrollY + 130;
    var activeId = null;
    spySectionIds.forEach(function(id){
      var el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) activeId = id;
    });
    document.querySelectorAll('[data-section-anchor]').forEach(function(a){
      a.classList.toggle('current', a.getAttribute('data-section-anchor') === activeId);
    });
  }

  function updateProgressBar(){
    var files = getAllChapterFiles();
    var total = files.length;
    var done = files.filter(function(f){ return progress[f]; }).length;
    var pct = total ? Math.round((done/total)*100) : 0;
    var fill = document.getElementById('progressFill');
    var pctEl = document.getElementById('progressPct');
    if (fill) fill.style.width = pct + '%';
    if (pctEl) pctEl.textContent = pct + '% (' + done + '/' + total + ' chapters)';
  }

  function wireMarkRead(){
    var btn = document.getElementById('markReadBtn');
    if (!btn) return;
    var file = currentFile();
    function refresh(){
      if (progress[file]) { btn.classList.add('done'); btn.textContent = '✓ Marked as read'; }
      else { btn.classList.remove('done'); btn.textContent = 'Mark this chapter as read'; }
    }
    btn.addEventListener('click', function(){
      progress[file] = !progress[file];
      saveJSON(PROGRESS_KEY, progress);
      refresh();
      updateProgressBar();
      buildSidebar(); // refresh checkmarks in sidebar too
    });
    refresh();
  }

  function wireFontControls(){
    var MIN=14, MAX=22;
    var saved = parseInt(localStorage.getItem(FONT_KEY), 10);
    var cur = (saved && saved>=MIN && saved<=MAX) ? saved : 17;
    function apply(px){
      document.documentElement.style.setProperty('--content-font-size', px+'px');
      try { localStorage.setItem(FONT_KEY, px); } catch(e){}
    }
    apply(cur);
    var plus = document.getElementById('fontPlus'), minus = document.getElementById('fontMinus');
    if (plus) plus.addEventListener('click', function(){ cur = Math.min(MAX, cur+1); apply(cur); });
    if (minus) minus.addEventListener('click', function(){ cur = Math.max(MIN, cur-1); apply(cur); });
  }


  function wireThemeSwitcher(){
    var THEME_KEY = 'cps-deep-course-theme-v1';
    var htmlEl = document.documentElement;
    function setTheme(theme){
      htmlEl.setAttribute('data-theme', theme);
      try { localStorage.setItem(THEME_KEY, theme); } catch(e){}
      document.querySelectorAll('.theme-btn').forEach(function(b){
        b.classList.toggle('active', b.getAttribute('data-theme-btn') === theme);
      });
    }
    document.querySelectorAll('.theme-btn').forEach(function(b){
      b.addEventListener('click', function(){ setTheme(b.getAttribute('data-theme-btn')); });
    });
    var saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch(e){}
    setTheme(saved || 'dark');
  }


  function wireFullscreenMode(){
    var FS_KEY = 'cps-deep-course-fullscreen-v1';

    function isOn(){
      try { return localStorage.getItem(FS_KEY) === 'true'; } catch(e){ return false; }
    }

    // Real browser Fullscreen API -- hides the OS/browser chrome itself
    // (address bar, tabs, taskbar). Must be called from a direct user click;
    // browsers silently block it if called automatically on page load.
    function requestRealFullscreen(){
      var el = document.documentElement;
      var req = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
      if (req) { try { req.call(el); } catch(e){} }
    }
    function exitRealFullscreen(){
      var exit = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
      if (exit && (document.fullscreenElement || document.webkitFullscreenElement)) {
        try { exit.call(document); } catch(e){}
      }
    }

    function setMode(on, viaUserClick){
      document.body.classList.toggle('reading-mode', on);
      try { localStorage.setItem(FS_KEY, on ? 'true' : 'false'); } catch(e){}
      if (viaUserClick) {
        if (on) requestRealFullscreen(); else exitRealFullscreen();
      }
    }

    // Inject the toggle button into the topbar, next to the font controls
    var fontGroup = document.querySelector('.font-group');
    if (fontGroup && !document.getElementById('fullscreenBtn')) {
      var btn = document.createElement('button');
      btn.className = 'fullscreen-btn';
      btn.id = 'fullscreenBtn';
      btn.title = 'Fullscreen reading mode';
      btn.textContent = '⛶';
      btn.addEventListener('click', function(){ setMode(true, true); });
      fontGroup.parentNode.insertBefore(btn, fontGroup.nextSibling);
    }

    // Inject the floating control group (sidebar toggle + exit button),
    // present on every page, shown only via CSS while reading-mode is active
    if (!document.getElementById('fullscreenControls')) {
      var controls = document.createElement('div');
      controls.className = 'fullscreen-controls';
      controls.id = 'fullscreenControls';

      var navToggleBtn = document.createElement('button');
      navToggleBtn.className = 'reading-nav-btn';
      navToggleBtn.id = 'readingNavToggle';
      navToggleBtn.textContent = '☰ Chapters';
      navToggleBtn.addEventListener('click', function(){
        var willOpen = !document.body.classList.contains('nav-open');
        document.body.classList.toggle('nav-open', willOpen);
        navToggleBtn.classList.toggle('active', willOpen);
      });

      var exitBtn = document.createElement('button');
      exitBtn.className = 'exit-fullscreen-btn';
      exitBtn.id = 'exitFullscreenBtn';
      exitBtn.textContent = '✕ Exit fullscreen';
      exitBtn.addEventListener('click', function(){ setMode(false, true); });

      controls.appendChild(navToggleBtn);
      controls.appendChild(exitBtn);
      document.body.appendChild(controls);
    }

    // Backdrop -- click anywhere outside the sidebar overlay to close it
    if (!document.getElementById('readingNavBackdrop')) {
      var backdrop = document.createElement('div');
      backdrop.className = 'reading-nav-backdrop';
      backdrop.id = 'readingNavBackdrop';
      backdrop.addEventListener('click', function(){
        document.body.classList.remove('nav-open');
        var t = document.getElementById('readingNavToggle');
        if (t) t.classList.remove('active');
      });
      document.body.appendChild(backdrop);
    }

    // Always start with the chapter panel closed on a fresh page load,
    // even if reading-mode itself is persisted -- avoids it popping open unexpectedly
    document.body.classList.remove('nav-open');

    // If the user exits real fullscreen via Esc (browser-native), keep our
    // reading-mode state in sync rather than leaving bars hidden with no way back
    ['fullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange'].forEach(function(evt){
      document.addEventListener(evt, function(){
        var stillFullscreen = document.fullscreenElement || document.webkitFullscreenElement;
        if (!stillFullscreen && isOn()) {
          setMode(false, false);   // sync only -- don't re-trigger the API call
        }
      });
    });

    // Apply persisted CSS state immediately on this page load (bars stay hidden
    // across chapter navigation). The real browser Fullscreen API is NOT
    // re-requested automatically here -- browsers require a direct click for
    // that, so after navigating to a new chapter you may need one click to
    // re-enter true OS-level fullscreen, even though our own bars stay hidden.
    setMode(isOn(), false);
  }

  function wireSidebarToggle(){
    var sidebar = document.getElementById('sidebar');
    var toggle = document.getElementById('sidebarToggle');
    if (!sidebar || !toggle) return;
    toggle.addEventListener('click', function(){ sidebar.classList.toggle('collapsed'); });
    if (window.innerWidth < 900) sidebar.classList.add('collapsed');
  }


  function wireQuizToggles(){
    document.querySelectorAll('.quiz-toggle').forEach(function(btn){
      btn.addEventListener('click', function(){
        var ans = btn.nextElementSibling;
        if (!ans) return;
        var showing = ans.classList.toggle('show');
        btn.textContent = showing ? 'Hide answer' : 'Show answer';
      });
    });
  }


  // ============================================================
  // SPA-style navigation -- fetches a chapter's content and swaps
  // it into the current page instead of doing a real navigation,
  // so fullscreen mode survives clicking between chapters.
  //
  // Gracefully degrades: if fetch() fails (e.g. the site was opened
  // directly via file:// instead of a local server, where browsers
  // block this kind of local file fetching), it falls back to an
  // ordinary page navigation automatically -- the site still works
  // either way, just without fullscreen persistence in the file:// case.
  // ============================================================

  function isLocalHtmlLink(a){
    if (!a || !a.getAttribute) return false;
    var href = a.getAttribute('href');
    if (!href) return false;
    if (a.target && a.target !== '' && a.target !== '_self') return false;
    if (/^https?:\/\//i.test(href)) return false;
    if (href.indexOf('mailto:') === 0) return false;
    var filePart = href.split('#')[0];
    if (filePart === '') return false;              // pure "#anchor" link -- let browser handle it
    if (filePart.slice(-5) !== '.html') return false;
    return true;
  }

  function swapInContent(html, targetFile){
    var parser = new DOMParser();
    var newDoc = parser.parseFromString(html, 'text/html');

    var newContent = newDoc.querySelector('.content-wrap');
    var curContent = document.querySelector('.content-wrap');
    if (!newContent || !curContent) return false;
    curContent.innerHTML = newContent.innerHTML;

    var newTitle = newDoc.querySelector('title');
    if (newTitle) document.title = newTitle.textContent;

    var newCrumb = newDoc.querySelector('.crumb');
    var curCrumb = document.querySelector('.crumb');
    if (newCrumb && curCrumb) curCrumb.textContent = newCrumb.textContent;

    return true;
  }

  function reinitAfterSwap(anchor){
    setupScrollSpy();
    buildSidebar();
    updateProgressBar();
    wireMarkRead();
    wireQuizToggles();
    if (anchor) {
      var el = document.getElementById(anchor);
      if (el) { el.scrollIntoView({behavior:'auto', block:'start'}); }
      else { window.scrollTo(0, 0); }
    } else {
      window.scrollTo(0, 0);
    }
    highlightActiveSection();
    if (window.innerWidth < 900) {
      var sidebar = document.getElementById('sidebar');
      if (sidebar) sidebar.classList.add('collapsed');
    }
  }

  function navigateTo(href, pushState){
    var parts = href.split('#');
    var filePart = parts[0];
    var anchor = parts[1] || null;

    fetch(filePart)
      .then(function(res){
        if (!res.ok) throw new Error('fetch failed: ' + res.status);
        return res.text();
      })
      .then(function(html){
        var ok = swapInContent(html, filePart);
        if (!ok) { window.location.href = href; return; }
        if (pushState) {
          try { history.pushState({file: filePart}, '', href); } catch(e){}
        }
        reinitAfterSwap(anchor);
      })
      .catch(function(){
        // fetch blocked (likely opened via file://) -- fall back to a normal navigation
        window.location.href = href;
      });
  }

  function wireSpaNavigation(){
    document.body.addEventListener('click', function(e){
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;   // let "open in new tab" work normally
      var a = e.target.closest('a');
      if (!isLocalHtmlLink(a)) return;

      var href = a.getAttribute('href');
      var filePart = href.split('#')[0];
      if (filePart === currentFile()) return;   // same-page anchor jump -- browser handles it natively

      e.preventDefault();
      navigateTo(href, true);
    });

    window.addEventListener('popstate', function(){
      var path = window.location.pathname.split('/');
      var file = path[path.length - 1] || 'index.html';
      var hash = window.location.hash ? window.location.hash.slice(1) : null;
      fetch(file)
        .then(function(res){ return res.text(); })
        .then(function(html){
          swapInContent(html, file);
          reinitAfterSwap(hash);
        })
        .catch(function(){ window.location.reload(); });
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    setupScrollSpy();
    buildSidebar();
    updateProgressBar();
    wireMarkRead();
    wireFontControls();
    wireThemeSwitcher();
    wireSidebarToggle();
    wireFullscreenMode();
    wireQuizToggles();
    wireSpaNavigation();
    window.addEventListener('scroll', highlightActiveSection, {passive:true});
  });
})();
