---
title: "SuperCollider: Exposing GPU Concurrency Bugs"
type: project
layout: case-study
lang: en
slug: supercollider
permalink: /entries/supercollider/
date: 2026-08-01
year: 2026
label: "GPU CONCURRENCY"
role: "LLVM instrumentation for GPU race testing"
technologies: [CUDA, LLVM, GPU Concurrency, Race Detection]
code: "https://github.com/Devashish-Dh/SooopaColaida_clean"
demo: ""
paper: ""
show_cover: false
excerpt: "A clean-room implementation of SuperCollider, which perturbs GPU memory-operation timing to expose concurrency bugs."
---

## Reimplementing SuperCollider

GPU races can remain hidden when repeated executions happen to produce a benign ordering. SuperCollider changes the timing of memory operations so that other orderings, and the bugs they expose, are more likely to appear during testing.

A clean-room implementation of the published NVIDIA Research design was developed without access to its source code. It combines LLVM instrumentation with a GPU runtime that inserts controlled delays around memory operations.

## Extensions and evaluation

The implementation was extended to handle asynchronous memory operations and additional GPU execution patterns. Evaluation across a range of concurrency cases identifies which races can be exposed reliably and which cases remain difficult.
