# V8.2 Recipes — known-good parameter sets per job

Each recipe is a starting point, not a rule. The pattern is always: **pick the recipe that
matches the job, then turn exactly one knob** if the first batch misses.

Placeholders in `[brackets]` get replaced. Everything else is deliberate.

---

## 1. Photoreal portrait

V8.2's strongest territory. `--raw` plus a real lens does most of the work.

```
[age + build + defining feature] [person], [expression and pose], [location], [specific light source and direction], shot on [camera body], [focal length] f/[aperture], [mood] --raw --s 75 --c 5 --ar 4:5
```

Worked example:

```
A weathered fisherman in his sixties mending a net, hands mid-knot, eyes down on the work, on a concrete harbour wall at dawn, hard low sun raking from camera left, shot on Sony A7R V, 85mm f/1.4, quiet and unposed --raw --s 75 --c 5 --ar 4:5
```

- **Too flat / lifeless** → `--s 150` or add `--exp 15`.
- **Too "AI-perfect" skin** → add a specific imperfection to the prompt ("visible pores,
  stubble, a shaving nick"), not another parameter.
- **Face keeps changing across the set** → `--oref` + `--ow 400` *(renders on V7 — the
  whole set must then use it)*, or build a personalization profile.

---

## 2. Product / e-commerce

The case where V8.2's boldness is a liability. Suppress hard.

```
[product, described physically], [placement/surface], [background], [lighting setup in studio terms], shot on [camera], [focal length] f/[aperture], commercial product photography --raw --s 50 --c 0 --ar 1:1
```

Worked example:

```
A brushed-steel espresso tamper standing upright on a matte black stone slab, seamless mid-grey background, large softbox from upper left with a white bounce card filling the shadow side, shot on Canon EOS R5, 100mm macro f/8, commercial product photography --raw --s 50 --c 0 --ar 1:1
```

- **Over-graded, moody, "editorial"** → drop `--s` toward 25, confirm `--raw` is present.
- **Material reads wrong** → generate the correct *shape* first, then use the Editor's
  **Retexture** to swap materials. Far more reliable than re-prompting.
- **Need variants (colorways, finishes)** → approve one frame, then Retexture the rest.
  Same composition, guaranteed.

---

## 3. Editorial / fashion / poster

Let V8.2 do what it was built for.

```
[subject + wardrobe], [pose], [environment], [bold light description], [color palette], [art-direction reference in words, not artist names] --s 650 --ar 4:5
```

Worked example:

```
A model in an oversized crimson trench coat, arms out, caught mid-turn, in an empty concrete underpass, single hard flash from below with deep falling shadows, crimson and cold grey palette, high-contrast fashion editorial --s 650 --ar 4:5
```

- **Too chaotic** → `--s 400`.
- **Too tame** → `--s 800`, or `--exp 25`.
- **Want variety across the four results** → `--c 25`. Above 50 they stop being siblings.

---

## 4. Cinematic frame / concept art

```
[subject in scene], [action], [world detail that implies a story], [lighting + atmosphere], [lens language: wide/anamorphic/telephoto], [color grade] --s 600 --ar 21:9
```

Worked example:

```
A lone surveyor walking a ridge of black volcanic sand, scale dwarfed by a fog bank rolling in behind, a broken antenna mast half-buried to one side, overcast diffuse light with heavy atmospheric haze, wide anamorphic framing, desaturated cyan grade --s 600 --ar 21:9
```

- Use `--ar 21:9` or `2.39:1` for film language; `16:9` reads like television.
- **Needs to match other frames in a sequence** → lock `--sref` (see §7) before generating
  the rest.

---

## 5. Illustration / graphic style

Drop the camera language entirely — it fights illustration.

```
[subject], [composition], [medium and technique], [palette], [line and shading treatment] --s 400 --ar 3:2
```

Worked example:

```
A red fox curled asleep among ferns, centred composition, screen-printed poster in four flat inks, burnt orange and forest green, heavy grain and visible registration offset --s 400 --ar 3:2
```

- **Drifting toward photographic** → name the medium harder ("flat vector," "gouache on
  cold-press paper," "riso print") and remove any depth-of-field words.
- **Never name a living artist** for style. Describe the technique instead — it works, and
  it avoids copying a working artist's style.

---

## 6. Text on an image

V8.2 did not improve text rendering. Plan around it.

- **Up to ~3 words** — put them in quotes: `a neon sign reading "OPEN LATE"`.
- **Anything longer** — generate a clean plate with deliberate empty space, then set the
  type in a design tool. Do not burn GPU minutes fighting this.
- `--no text, watermark, signature` when stray lettering keeps appearing (one concept per
  word — each is judged separately).

---

## 7. Locking a style across a set

The full workflow, in order:

1. **Draft + random styles** — explore 24 directions for ~0.4 GPU minutes:

   ```
   [your prompt] --draft --sref random --ar 3:2
   ```

2. **Read the winner's sref code** — after submission, `random` resolves to a real code.
   Save it.

3. **Commit at full quality:**

   ```
   [your prompt] --sref [code] --sw 100 --ar 3:2
   ```

4. **Tune the style's grip** with `--sw`: below 100 lets the prompt lead, above 100 lets
   the style lead. The usable band is 65–175 — outside it, results get unpredictable.

5. **Reuse `--sref [code] --sw [value]` verbatim** on every image in the set. Change only
   the subject clause.

Combine with `--p` (personalization or moodboard) when the set also needs to look like
*your* work and not just internally consistent.

---

## 8. Reproducing and iterating

- **Same image, small change** → keep `--seed [n]` fixed and edit one clause.
- **Local fix on a good frame** → Editor inpaint. Never reroll a composition you like.
- **Whole-image mood change, same layout** → Editor retexture.
- **Final delivery** → HD re-render at 2048px, once, at the end (~1.3 GPU min).

---

## Quick parameter cheat sheet

| Goal | Set |
|---|---|
| Maximum realism | `--raw --s 50–100 --c 0–10` |
| Maximum V8.2 aesthetic | `--s 500–800` (no `--raw`) |
| Enhanced but controlled | `--exp 10–25 --s 100–200` |
| Cheap exploration | `--draft --sref random` |
| Style locked across a set | `--sref [code] --sw 65–175` |
| Your personal look | `--p` or `--p pCODE` / `--p mCODE` |
| Identity locked | `--oref [url] --ow 400–600` ⚠ renders on V7 |
| Variety within one batch | `--c 25–50` |
| Reproducible | `--seed [n]` |

Never: `--q` (gone), `--cref` / `--cw` (gone), `--raw` with high `--s` (self-cancelling),
`--exp 50+` alongside a tuned `--stylize` (exp wins), moodboard with `--sw` / `--sv`
(incompatible).
