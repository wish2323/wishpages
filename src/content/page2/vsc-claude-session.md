---
title: "Claude Watchboard"
description: "VS Code extension for browsing and analyzing Claude Code sessions."
tags: ["vscode-ext", "typescript"]
github: "https://github.com/wish2323/vsc-claude-session"
marketplace: "https://marketplace.visualstudio.com/items?itemName=100wish.claude-watchboard"
---

## Purpose

It started with finding out that Claude Code saves sessions locally as JSONL files. Once I knew that, I wanted to actually do something with that data. So I built the first version around three things I personally wanted: browsing sessions by git branch, skimming a session's content by collecting just my own messages, and seeing a breakdown of which tools were used.

After that, I sat down with Claude Code and thought through it more like a PM — what would other people actually want out of this? That thinking drove the rest of the features: cost tracking, cache efficiency, context usage, conversation timelines, and so on.

## Key Features

- Session timeline grouped by date or git branch, with cost and token totals per session
- Context usage bar showing how full the context window is (with dynamic limit per model)
- Cache efficiency breakdown — hit/write/uncached ratio at a glance
- Tool usage distribution — which tools were called and how often
- Per-session conversation timeline with turn-by-turn token counts and tool tags
- Cost tracking: today's spend vs. all-time total
- One-click copy of a session summary as markdown
- Status bar showing current cost and session count at all times

## How It Was Built

Built with Claude Code assistance. Written in TypeScript using the VS Code Extension API and esbuild for bundling, with a webview-based sidebar UI. Reads local JSONL files from `~/.claude/projects/` — no API calls, no network requests.
