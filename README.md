# EOPSA Project Page

Project website for **EOPSA: Efficient On-Policy Self-Distilled Safety Alignment**.

- Website: https://neuqrui.github.io/EOPSA-page/
- Paper: https://arxiv.org/abs/2609.34519
- Official implementation: https://github.com/neuqrui/EOPSA
- Models: https://huggingface.co/collections/neuqrui/eopsa

## Preview locally

Run `python3 -m http.server 8000` in this directory, then open http://localhost:8000.

This is a static HTML/CSS/JavaScript site with no build step. GitHub Pages serves the `main` branch from the repository root; `.nojekyll` preserves the assets directly.

## Contents

- `index.html`, `style.css`, `app.js`: site content, styles, and interactions.
- `assets/`: original paper figures, official mascot, local paper PDF, and source provenance.
- `assets/results-hd.png`: 600 dpi crop of Table 1 from page 7 of the paper, 3334 × 2209 pixels.

The ARS companion uses explicitly illustrative TRR values. Published response excerpts are replayed locally with visible `<think>` tags; this is not a live inference service. Reduced-motion preferences and manual playback controls are supported.
