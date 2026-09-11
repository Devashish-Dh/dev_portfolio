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
role: "LLVM and MLIR compiler passes"
technologies: [LLVM, MLIR, Dataflow Analysis, Affine Dialect]
code: "https://github.com/Devashish-Dh/ModernCompilers-Hoist-Anticipated-Exp-MLIR-Affine-Loop-Interchange"
demo: ""
paper: ""
show_cover: false
excerpt: "Two compiler projects: anticipated-expression analysis and code hoisting in LLVM, and affine loop interchange in MLIR."
---

## LLVM: anticipated expressions

This project implements backward anticipated-expression analysis in LLVM using per-basic-block GEN/KILL sets and fixed-point dataflow propagation. The resulting information is used to hoist expressions when speculative execution is safe and the operands dominate the new location.

## MLIR: affine loop interchange

The second component is an MLIR pass for affine loop interchange. It analyzes affine loop nests, checks which permutations are legal, and selects an ordering based on locality and parallelism.
