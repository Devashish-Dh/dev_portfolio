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
role: "Kernel tracing with eBPF and libbpf"
technologies: [eBPF, libbpf, Linux Kernel, C]
code: "https://github.com/Devashish-Dh/Linux_Kernel_Internals_using_eBPF_libpf"
demo: ""
paper: ""
show_cover: false
excerpt: "An eBPF/libbpf tracer for process creation, termination, and file activity."
---

## Tracing process and file activity

An eBPF/libbpf tracer monitors process creation, process termination, and file operations. Kernel-side probes collect the relevant event data and pass it to a userspace program for processing and reporting.

The implementation covers the complete path from loading and attaching eBPF programs to transporting events from the kernel to userspace, without requiring kernel modifications.
