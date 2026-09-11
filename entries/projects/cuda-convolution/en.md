---
title: "CUDA 2D Convolution and Performance Analysis"
type: project
layout: case-study
lang: en
slug: cuda-convolution
permalink: /entries/cuda-convolution/
date: 2026-04-01
year: 2025-2026
label: "GPU PERFORMANCE"
role: "Kernel implementation, optimization, and profiling"
technologies: [CUDA C++, Shared Memory, Nsight Compute, Nsight Systems]
code: "https://github.com/Devashish-Dh/2D_conv_CUDA"
demo: ""
paper: ""
show_cover: false
excerpt: "A progression of CUDA convolution kernels using coalescing, shared-memory tiling, data reuse, and profiler-guided optimization."
---

## Implementation

I implemented and optimized 2D convolution kernels in CUDA C/C++. The optimized versions improve memory behavior through coalesced accesses, shared-memory tiling, and data reuse.

GPU results are checked against a CPU reference to separate performance work from correctness failures.

## Performance analysis

I used Nsight Compute and Nsight Systems to inspect memory traffic, kernel execution, and performance bottlenecks. The repository includes the implementation, reports, and profiler captures.

## What this demonstrates

- CUDA kernel optimization
- GPU memory-hierarchy reasoning
- Profiler-driven performance investigation
- CPU/GPU correctness validation

