---
title: "Trinity: GPU Race Detection and Memory Safety"
type: project
layout: case-study
lang: en
slug: trinity
permalink: /entries/trinity/
date: 2026-09-01
year: 2026
label: "GPU MEMORY SAFETY"
role: "Static analysis for GPU race detection"
technologies: [CUDA, LLVM, NVVM, Static Analysis, Race Detection]
code: ""
demo: ""
paper: ""
show_cover: false
excerpt: "Trinity is a static analysis tool for finding data races and memory-safety issues in GPU programs."
---

## Trinity

Trinity is a static analysis tool for finding data races and memory-safety issues in GPU programs. The project is part of ongoing research at the Indian Institute of Science.

## Program analysis for GPU code

The analysis works over LLVM/NVVM IR and reasons about control flow, data flow, and memory behavior in CUDA programs. The aim is to detect correctness problems without relying on a particular runtime execution to expose them.

A manuscript describing this work has been submitted for publication.
