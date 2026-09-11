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
role: "LLVM instrumentation and GPU runtime"
technologies: [CUDA, LLVM, GPU Concurrency, Race Detection]
code: "https://github.com/Devashish-Dh/SooopaColaida_clean"
demo: ""
paper: ""
show_cover: false
excerpt: "A clean-room reimplementation of the NVIDIA Research PLDI 2026 design for perturbing GPU memory-operation ordering and exposing races."
---

## Challenge

GPU races can remain hidden because a particular execution repeatedly produces a benign ordering. SuperCollider perturbs memory-operation timing so that concurrency failures become observable during testing.

## Implementation

I reimplemented the published design without access to a public implementation. The system combines LLVM-based instrumentation with a GPU runtime that introduces controlled delays around memory operations.

I extended the implementation to cover asynchronous memory operations and additional GPU execution patterns, then evaluated it across diverse concurrency scenarios.

## What this demonstrates

- Low-level program instrumentation over LLVM IR
- CUDA runtime and synchronization reasoning
- Experimental design for nondeterministic correctness failures
- Reproduction and extension of a research system from its published description

