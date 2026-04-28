# Adding a New Entry

1. `cd /Users/baek.sowon/workspace/sw/wishpages`
2. `pnpm dev` — start local preview at http://localhost:4321
3. Create `src/content/pages/[slug].md` with frontmatter + content
4. Preview updates automatically on save
5. `git add . && git commit -m "add: [thing]" && git push`
6. Auto-deployed in ~1 min at wishpages.dev

## Frontmatter template

```markdown
---
title: "..."
description: "..."
pubDate: "Apr 29 2026"
tags: ["tool"]
github: "https://github.com/..."
demo: "https://..."
---
```
