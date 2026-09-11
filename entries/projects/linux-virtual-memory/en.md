---
title: "Linux Virtual Memory"
type: project
layout: case-study
lang: en
slug: linux-virtual-memory
permalink: /entries/linux-virtual-memory/
date: 2026-07-01
year: 2026
label: "KERNEL SYSTEMS"
role: "Linux page tables and memory management"
technologies: [Linux Kernel, Page Tables, Virtual Memory, C]
code: "https://github.com/Devashish-Dh/kernel_dev_ongoing"
demo: ""
paper: ""
show_cover: false
excerpt: "Linux kernel work involving page-table walks, PTE updates, and deduplication of identical pages."
---

## Page-table work

The Linux virtual-memory code is extended to inspect and modify user mappings. The implementation walks page tables, updates PTEs, maintains page references, and synchronizes changes to an address space.

## Page deduplication

Page-deduplication support identifies pages with identical contents and merges their mappings. Reference counts and mapping correctness are preserved throughout the deduplication process.
