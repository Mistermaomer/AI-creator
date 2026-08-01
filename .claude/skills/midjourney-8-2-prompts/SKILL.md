---
name: midjourney-8-2-prompts
description: "Write ready-to-paste Midjourney V8.2 image prompts — full prompt line plus tuned parameters (--raw, --s, --exp, --sref, --sw, --p, --ar) — and run the cheap-explore → lock-style → refine → edit → HD workflow that V8.2 rewards. Covers the V8.2 aesthetic shift (bolder, higher-contrast, personalization-driven), the parameter compatibility traps (--q dead, --oref silently runs on V7), Draft Mode with --sref random, moodboards and personalization codes, and the Editor's inpaint/retexture loop. Prompt-writing only — never calls image-generation tools. Use whenever the user wants a Midjourney prompt, a style locked across a set, a photoreal/product/editorial image, or help tuning MJ parameters — in English or Hebrew (e.g. 'Midjourney prompt', 'פרומפט למידג׳רני', 'תמונה במידג׳רני')."
---

# Midjourney V8.2 Prompts

Turn a brief into a ready-to-paste V8.2 prompt line, with parameters chosen on purpose
rather than by habit. Read `reference.md` for the parameter tables and model behavior;
`recipes.md` for per-use-case prompt formulas and known-good parameter sets.

## Hard rules (non-negotiable)

1. **This skill writes prompt text only.** NEVER call `generate_image`, `upscale_image`,
   or any other media MCP tool from this skill. The deliverable is a prompt line the user
   pastes into Midjourney themselves.
2. **The prompt is always in English**, even when the conversation is in Hebrew. Converse
   in the user's language; keep everything inside the output code block in English.
3. **Never invent parameters.** Only use flags listed in `reference.md`. If a user asks
   for one that V8.2 dropped (`--q`, `--cref`, `--cw`), say so and give the substitute.
4. **Read `reference.md` before choosing parameter values** on any request that isn't a
   trivial re-run. The V8.2 defaults are not the V8.1 defaults in effect, and guessing
   produces over-graded images.

## The V8.2 fact that drives every decision

V8.2 (default since 24 Jul 2026) is an **aesthetics** release, not a control release. It
pushes harder than 8.1 on contrast, dramatic lighting, bold color grading, and dynamic
composition. That is a gift for editorial, fashion, cinematic and concept work — and a
tax on product shots, technical illustration, and anything that must look neutral.

So the first question for any brief is: **does this image want Midjourney's opinion?**

- **Yes** (editorial, poster, concept, mood) → let it run: `--s 500–800`, no `--raw`.
- **No** (product, catalog, UI mock, documentary-real) → suppress it: `--raw`, `--s 50–150`,
  `--c 0–10`.

Getting this one call right matters more than any wording in the prompt.

## Step 1 — Intake

Read what's already in the conversation; don't interrogate:

- **The subject and the job it does** — an ad, a thumbnail, a mood frame, a product page.
- **Where it will be used** → sets `--ar` (see `reference.md` for the ratio table).
- **Realism vs. stylization**, per the call above.
- **Anything to keep consistent** — a style across a set, a character, a brand palette.
- **Existing assets**: sref codes, moodboard/personalization codes, reference image URLs.

## Step 2 — Gap check (ask at most 1–2 questions, in one message)

Ask only when a wrong guess wastes the user's GPU minutes — typically: photoreal or
illustrated, and what aspect ratio. Everything else, decide yourself and state the
assumptions after delivery.

Silent defaults:

- No ratio given → `--ar 3:2` for scenes, `--ar 4:5` for a single subject, `--ar 16:9` for
  anything described as cinematic.
- No style anchor given → pick one and name it; don't leave the style to chance.
- Realism unstated but the brief mentions a product, a person's likeness, or a real place
  → assume photoreal, use `--raw`.

## Step 3 — Build the prompt line

Order the clauses this way — Midjourney weights earlier tokens more heavily:

```
[subject + defining detail], [action or pose], [setting], [lighting], [camera + lens], [mood/style] --params
```

- **Lead with the subject**, not with atmosphere. "A weathered fisherman mending nets"
  beats "Moody atmospheric scene featuring a fisherman."
- **Lighting is the highest-leverage clause.** Name it concretely — "hard low sun raking
  across the wall," not "beautiful lighting."
- **Camera and lens anchor realism.** A real body + real focal length ("Sony A7R V, 85mm
  f/1.4") reproduces that lens's depth of field and reads as photography. Use it whenever
  the brief is photoreal; omit it entirely for illustration.
- **Keep it under ~150 tokens.** Past that you are adding adjectives that fight each
  other. One idea per prompt; if the brief has two, write two prompts.
- **Write what you want, not what you don't.** Reach for `--no` only for something that
  keeps intruding, and list one concept per word — `--no text` and `--no watermark`, since
  each word is evaluated separately.

## Step 4 — Choose parameters deliberately

Pull the known-good set from `recipes.md`, then adjust. The traps that cost the most:

- **`--raw` with a high `--s` is self-cancelling.** Raw exists to suppress the house style;
  a high stylize invites it back.
- **`--exp` overwhelms `--stylize`.** If you use both, keep `--exp` at 25 or below.
- **`--oref` silently runs the job on V7.** Character locking is available, but the output
  will not have V8.2's look. Say this out loud whenever you hand the user an `--oref`
  prompt — it is the single most surprising behavior in the version.
- **`--q` no longer exists** in the V8 family. HD comes from the Editor's 2048px re-render,
  not from a quality flag.
- **Moodboards can't be combined with `--sw` or `--sv`.**

## Step 5 — Delivery

1. The prompt as **one plain fenced code block**, single copy-paste, English.
2. Two or three lines, in the conversation's language, covering:
   - Why these parameters — especially the realism call and the stylize value.
   - The one knob to turn if the first batch misses (usually `--s`, sometimes `--sref`).
3. If the brief implies more than one image, offer the **set workflow** below rather than
   writing five prompts blind.

## The workflow V8.2 actually rewards

For anything beyond a one-off image, prompting harder is the wrong move — exploring
cheaper is the right one. Walk the user through this:

1. **Explore in Draft Mode** (web only; lightning-bolt toggle or `--draft`). 24 images at
   512px for ~0.4 GPU minutes — six times the images at a fraction of the cost of a normal
   4-image job.
2. **Add `--sref random` to the draft.** Each of the 24 comes back with a different style
   reference, so one job scans the style space instead of one direction.
3. **Lock the winner's sref code**, then drop `--draft` and re-run at full quality with
   that `--sref` plus `--sw` (start 100; 65–175 is the usable band).
4. **Fix locally in the Editor** — inpaint the region that failed rather than rerolling a
   good composition. Retexture re-skins materials while holding structure, which is how
   you produce colorway or material variants of an approved frame.
5. **HD last.** Re-render the final at 2048px (~1.3 GPU min) once, not on every candidate.

Step 1–2 is where the money is: exploration at draft cost, commitment at full cost.

## Personalization is the V8.2 upgrade

The headline improvement in 8.2 is that personalization reads taste more accurately — and
it only pays out if there's data behind it. When a user wants "their look" consistently:

- **Rate images.** The profile gets sharper with volume; V8.2 is the version that finally
  exploits a well-fed profile.
- **Build a moodboard** for deliberate control — hand-picked images beat accumulated
  ratings when the target look is specific. Moodboard codes start with `m`, profile codes
  with `p`.
- Apply with `--p` (default profile) or `--p pCODE` / `--p mCODE` for a specific one.
- Once personalization is on, **`--stylize` scales your style**, not Midjourney's default.

Recommend this whenever a user is fighting the same style correction repeatedly — it is a
one-time setup that removes a recurring cost.

## Quality checklist (verify before delivering)

- [ ] Subject leads the prompt; lighting is named concretely.
- [ ] Realism call made explicitly — `--raw` present or deliberately absent.
- [ ] `--s` chosen for the job, not left at default by accident.
- [ ] `--ar` matches the stated destination.
- [ ] No `--q`, `--cref`, or `--cw` anywhere.
- [ ] If `--oref` is used, the "runs on V7" caveat is stated in the reply.
- [ ] Prompt under ~150 tokens, one idea, English inside the block.
- [ ] Text-in-image kept to a few words, or moved to a design tool — V8.2 did not improve
      text rendering and still scrambles sentences.
