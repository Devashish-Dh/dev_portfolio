---
title: "Linux Process and File Tracing with eBPF"
type: project
layout: case-study
lang: en
slug: ebpf-tracing
permalink: /entries/ebpf-tracing/
date: 2026-06-01
year: 2026
label: "OBSERVABILITY"
role: "Kernel probes and userspace event pipeline"
technologies: [eBPF, libbpf, Linux Kernel, C]
code: "https://github.com/Devashish-Dh/Linux_Kernel_Internals_using_eBPF_libpf"
demo: ""
paper: ""
show_cover: false
excerpt: "An eBPF/libbpf tracer for process lifecycle and file activity, backed by a userspace event-collection pipeline."
---

## Challenge

Observing kernel activity safely requires collecting useful event context without invasive kernel modifications.

## Implementation

I built an eBPF/libbpf tracer for process creation, process termination, and file operations. Kernel-side probes capture events and send them to a userspace pipeline for processing and reporting.

## What this demonstrates

- Practical eBPF and libbpf development
- Kernel-to-userspace event transport
- Process and file-system lifecycle knowledge
- Systems observability without kernel patching

