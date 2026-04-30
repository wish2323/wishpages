---
title: "Project Deck"
description: "VS Code extension for pinning and launching project folders."
tags: ["vscode-ext", "typescript"]
github: "https://github.com/wish2323/vsc-dashboard"
marketplace: "https://marketplace.visualstudio.com/items?itemName=100wish.vsc-dashboard"
---

## Purpose

I often find myself switching between a bunch of local project folders in VS Code, and the default "Recent" list gets cluttered fast. I tried a few existing extensions, but they either lacked the features I needed, came with way too many, or just didn't look the way I wanted. So I built Project Deck myself — something that lets me pin the projects I actually care about, glance at their git state, and open them instantly.

## Key Features

- Pin project folders as cards and organize them into named sections
- See git branch and remote info at a glance on each card
- Color-code cards for quick visual identification
- Drag-and-drop reordering within sections
- Auto-opens when VS Code launches with no folder active

## How It Was Built

Built with Claude Code assistance. The extension is written in TypeScript using the VS Code Extension API, with a vanilla JS/HTML/CSS webview panel for the UI.
