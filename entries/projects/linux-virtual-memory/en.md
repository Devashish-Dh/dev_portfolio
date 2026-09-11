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
role: "Page-table and memory-management extensions"
technologies: [Linux Kernel, Page Tables, Virtual Memory, C]
code: "https://github.com/Devashish-Dh/kernel_dev_ongoing"
demo: ""
paper: ""
show_cover: false
excerpt: "Linux memory-management extensions for inspecting mappings, updating PTEs, and safely deduplicating identical pages."
---

## Challenge

Virtual-memory changes must preserve mapping correctness while interacting with page tables, references, and address-space synchronization.

## Implementation

I extended Linux virtual-memory code to inspect and modify user mappings through page-table walks, PTE updates, reference handling, and address-space synchronization.

I also implemented page deduplication support that identifies identical page contents and merges mappings while preserving page references and mapping correctness.

## What this demonstrates

- Kernel-level C development
- Page-table and PTE manipulation
- Memory ownership and reference handling
- Careful synchronization around address-space changes

