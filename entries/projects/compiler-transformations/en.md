---
title: "Compiler Analysis and Loop Transformations"
type: project
layout: case-study
lang: en
slug: compiler-transformations
permalink: /entries/compiler-transformations/
date: 2026-05-01
year: 2026
label: "COMPILERS"
role: "LLVM dataflow analysis and MLIR transformation passes"
technologies: [LLVM, MLIR, Dataflow Analysis, Affine Dialect]
code: "https://github.com/Devashish-Dh/ModernCompilers-Hoist-Anticipated-Exp-MLIR-Affine-Loop-Interchange"
demo: ""
paper: ""
show_cover: false
excerpt: "LLVM anticipated-expression analysis with safe code hoisting, plus an MLIR affine loop-interchange pass guided by locality and parallelism."
---

## Anticipated expressions and code hoisting

I implemented backward anticipated-expressions analysis in LLVM using per-basic-block GEN/KILL sets and fixed-point dataflow propagation.

The analysis identifies safe code-hoisting opportunities and checks speculative-execution safety and operand dominance before transforming the program.

## Affine loop interchange

I implemented an MLIR pass for affine loop interchange. The pass analyzes loop nests and uses locality and parallelism properties to choose among legal permutations.

## What this demonstrates

- Classical compiler dataflow analysis
- Dominance and transformation-safety reasoning
- LLVM pass implementation
- MLIR affine-dialect transformations

