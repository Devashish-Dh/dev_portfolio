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
role: "CUDA kernel optimization and profiling"
technologies: [CUDA C++, Shared Memory, Nsight Compute, Nsight Systems]
code: "https://github.com/Devashish-Dh/2D_conv_CUDA"
demo: ""
paper: ""
show_cover: false
excerpt: "A set of CUDA 2D convolution kernels, progressively optimized using coalesced access, shared-memory tiling, and data reuse."
---

## CUDA kernels

The project develops several versions of a 2D convolution kernel in CUDA C/C++, beginning with a straightforward implementation and progressively improving memory access through coalescing, shared-memory tiling, and data reuse.

Each GPU version is validated against a CPU reference before performance is compared.

## Performance analysis

Nsight Compute and Nsight Systems are used to study memory traffic, kernel execution, and the remaining bottlenecks. The repository includes the kernels, reports, and profiler captures.
