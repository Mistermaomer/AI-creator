---
name: seedance2-scene-prompts
description: "Turn a creative brief plus uploaded reference images into ready-to-paste Seedance 2 video prompts in this project's house format: one locked PART 1 (@Image anchors, LOOK, continuity rules) plus numbered time-coded SEGMENT blocks of three shots each, covering the full requested video length. Also covers standalone single-scene prompts without reference images (vault-style, per vault-lessons.md + the 150-setup vault-library.md), and replacing one object in a real source video (video + object image references) via the proven playbook in video-swap.md. Prompt-writing only — never calls video-generation tools. Use whenever the user asks for a Seedance / Seedance 2 prompt, a shot list or scene timeline, or wants an object swapped in their video — in English or Hebrew (e.g. 'Seedance prompt', 'פרומפט לסידנס', 'תחליף את ה... בסרטון'). In this repo, prefer this skill over generic seedance-reference-prompts or video-prompt-builder skills."
---

# Seedance 2 Scene Prompts

Build complete, multi-segment Seedance 2 prompts from a creative brief and reference
images, in the locked house format defined in `template.md`.

## Hard rules (non-negotiable)

1. **First action on every invocation**: Read `template.md` in this skill folder and
   follow its structure exactly. Do not paraphrase, reorder, rename, or "improve" its
   fields. Preserve its punctuation as-is (`@Image` anchors, `·` middots, `—` dashes,
   `:_ – :_` timecodes).
2. **This skill writes prompt text only.** NEVER call video, image, or audio generation
   tools (`generate_video`, `motion_control`, `generate_image`, or any other MCP media
   tool) from this skill. The deliverable is a prompt the user pastes into Seedance 2
   themselves.
3. **The prompt block is always in English**, even when the conversation is in Hebrew or
   another language. Converse in the user's language; keep everything inside the output
   code block in English.

## Step 1 — Intake

Collect from the conversation (do not interrogate; read what is already there):

- **Reference images**: how many, and what each one shows.
- **The brief**: story, subject, mood, genre.
- **Total video length** requested.
- **Explicit style asks** (if any) that should adjust the LOOK block.

Map images to anchors in upload order: first image → `@Image 1`, second → `@Image 2`,
and so on. Each anchor line in PART 1 uses its image's number.

## Step 2 — Gap check (ask only about the critical)

Ask **at most 1–2 focused questions, in a single message**, and only when something
essential is genuinely ambiguous — for example: which image is the character and which
is the location, or no reference images were provided at all.

Everything else — mood, pacing, segment titles, audio, continuity rules — fill in
creatively yourself. Apply these defaults silently and state them after delivery:

- No length given → **20 seconds** (2 segments).
- Unused optional anchors (`[CHAR B]`, `[PROP]`, `[EXTRAS]`) → omit their lines entirely.

## Step 3 — PART 1 (written once per project)

- Fill each anchor as `@Image <n>` plus a description per the template's field guidance.
  Describe **a photographed person or place** — age, build, skin, hair, wardrobe,
  demeanor; structure, scale, light, atmosphere — not a list of effects.
- Reproduce the **LOOK block verbatim from `template.md`**, unless the user explicitly
  asked for a different look — then adapt minimally while keeping the "A real film
  still, not a render." sentence and the `Avoid:` clause structure.
- Write CONTINUITY RULES covering all six axes: pace/tempo, weight & consequence,
  scale of motion, what to cut to, progression over the scene, and a recurring camera
  motif with how often to use it.

## Step 4 — Segments (full timeline)

- Each SEGMENT covers **10 seconds** and contains **exactly 3 shots** (A/B/C, ~3–4s each).
- Number of segments = total length ÷ 10. Tile the timeline with no gaps:
  `:00 – :10`, `:10 – :20`, … and from one minute on, `1:00 – 1:10` style.
- Every shot line follows the template's pattern exactly:
  `Shot [#][A/B/C] ([framing], ~_s): [action + camera movement, referencing anchors in brackets]. [LOOK]. Audio: [sfx + any dialogue].`
- Reference anchors as `[CHAR A]`, `[LOCATION]`, etc. — **never re-describe them** inside
  shots; the anchors carry the identity.
- Rotate framing across the three shots of each segment for rhythm; hold the boldest
  framing for the segment's key beat.
- Give each segment a header per the template (`SEGMENT __ — :_ – :_ · [TITLE]`) and an
  escalating narrative arc across segments — something changes or intensifies from the
  first segment to the last, matching the "Progression over the scene" rule.

## Step 5 — Delivery

- Output **PART 1 + all segments as one plain fenced code block** — a single copy-paste.
- After the block, in the conversation language:
  1. A one-line legend mapping each uploaded image to its `@Image` number.
  2. A reminder to attach the images to Seedance in that same order.
  3. An offer to revise: regenerate a single segment, change length, or swap an anchor.
- If the user later extends the video: reuse the existing PART 1 **unchanged** and append
  new segments continuing the timecodes.

## Quality checklist (verify before delivering)

- [ ] Every shot line references at least one bracketed anchor.
- [ ] Every shot line contains `[LOOK]` and an `Audio:` entry.
- [ ] Timecodes tile the full requested length with no gaps or overlaps.
- [ ] No CGI/render vocabulary anywhere in the prompt.
- [ ] Everything inside the code block is English; everything after it is in the user's language.

See `example.md` for a worked example of the expected density and tone.

## Craft library (prompt vault)

Two companion files carry Seedance 2 craft knowledge distilled from the
EL COLOGNE Prompt Vault:

- `vault-lessons.md` — the rules: Seedance 2.0 clause order and the
  `Lens switches to:` connective, the negative-prompt system (BASE list + 3
  conditional extensions, and when to include none), the stabilizer sentence,
  twelve shot-writing techniques, a 17-category scene-grammar playbook, and
  the reliability-star difficulty scale.
- `vault-library.md` — 150 proven single-scene setups organized by those 17
  categories, each with its matching negative.

Use them like this:

- **Always** read `vault-lessons.md` before writing segments, and apply its
  techniques inside every shot line (lens mm with purpose, camera as a
  physical rig, named light sources, physics vocabulary, sound-by-subtraction,
  scripted micro-performance, restraint instructions).
- When the brief matches a vault category (action, product, dialogue, horror,
  POV, music video, establishing, sci-fi, sports, transitions…), skim that
  category in `vault-library.md` and adapt a proven setup rather than
  inventing from zero.
- **No reference images + single scene asked**: skip the PART 1 + SEGMENT
  house format and deliver a vault-style standalone paragraph instead, per
  `vault-lessons.md` §7 — one fenced code block, plus a `Negative prompt:`
  line when the scene carries motion/character risk. The house format remains
  mandatory for reference-image, multi-segment projects.

## Source-video object swap

When the user brings a REAL video and wants one object in it replaced (prop
swap — e.g. the phone in their hand becomes something else), read
`video-swap.md` in this skill folder and follow its rules. They override the
defaults above: compact prompt (~200 words max), exactly two references
(source video + object image), source trimmed to ≤9 seconds, concrete physical
targets, failure-specific Avoid list, and 2-3 reruns of the identical prompt.
