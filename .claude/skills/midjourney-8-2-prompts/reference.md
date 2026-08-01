# Midjourney V8.2 — Reference

State of the world as of **1 August 2026**. Midjourney ships fast and does not publish a
technical changelog, so treat version-specific behavior as verifiable-in-app rather than
permanent. Where a claim comes from community testing rather than Midjourney's own
announcement, it is marked *(community)*.

## 1. Version state

| | |
|---|---|
| Current default | **V8.2**, default since **24 Jul 2026** |
| Preview period | `--preview` flag from **25 Jun 2026**; refreshed early July (the aesthetic shifted mid-preview) |
| Force a version | `--v 8.2`, `--v 8.1`, `--v 7` … or set the default in settings |
| Previous default | V8.1, default from 10 Jun 2026 |
| Docs published | No system card, no benchmark, no detailed changelog |

Midjourney's own framing of 8.2: an update to **aesthetics, image quality, and
personalization** — images that are "more creative, bold, sophisticated, edgy and fresh,"
with fewer random low-quality generations, and personalization that reads a user's taste
more accurately when the profile carries substantial rating data.

## 2. What actually changed vs V8.1

| Axis | V8.1 | V8.2 |
|---|---|---|
| Aesthetic posture | Clean, safe, technically accurate, sometimes conservative | Visually confident — more contrast, more dramatic lighting, bolder grading, more dynamic composition |
| Photographic realism | Good | **The standout win** *(community)* — cleaner detail, better natural light, better depth-of-field handling |
| Texture / materials | Good | Better; product close-ups read more convincingly *(community)* |
| Failure rate | Occasional random duds | Noticeably fewer *(Midjourney's claim, corroborated by testers)* |
| Personalization | Works | Reads rated preferences substantially better; larger/improved image pool behind profiles |
| Text rendering | Weak past a few words | **Unchanged.** Short words fine; sentences still scramble, misspell, and merge strokes |

The honest summary from testers: across a full batch the aesthetics read as *different*
rather than uniformly *better* — with photographic realism as the clear exception. The
boldness suits editorial photography, fashion, cinematic concept art and mood work; it
actively hurts product photography and technical illustration unless suppressed.

## 3. Parameter table (V8 family)

| Parameter | Range | Default | Notes |
|---|---|---|---|
| `--v` | `8.2`, `8.1`, `7`, `6.1`… | `8.2` | `--v 8.1` to A/B against the previous default |
| `--ar` | up to `14:1` (`4:1` for HD) | `1:1` | Web slider presets include 6:11, 4:5, 5:4, 21:9 |
| `--raw` | flag | off | **V8 syntax.** V7 used `--style raw`. Suppresses the house aesthetic |
| `--s` / `--stylize` | 0–1000 | 100 | Literal → artistic dial. See §4 |
| `--exp` | 0–100 | 0 | More detailed, dynamic, tone-mapped. Suggested steps: 5, 10, 25, 50, 100 |
| `--c` / `--chaos` | 0–100 | 0 | Variety *across the 4 results*. 0–10 keeps a batch coherent |
| `--weird` | 0–3000 | 0 | Unconventional/offbeat aesthetics |
| `--no` | word list | — | Equivalent to a −0.5 weight. **Each word is judged separately** — `--no water trees` = "no water" + "no trees" |
| `--sref` | code, image URL, or `random` | — | Style reference. `random` assigns a code, revealed after submission |
| `--sw` | 0–1000 | 100 | Style-reference strength. Usable band ≈ **65–175** |
| `--p` | flag, `pCODE`, `mCODE` | — | Personalization profile (`p…`) or moodboard (`m…`). Bare `--p` = default profile |
| `--oref` | image URL | — | Omni reference — people, animals, vehicles, objects. **⚠ runs on V7** |
| `--ow` | 1–1000 | 100 | Omni weight. 400–600 = hard identity lock; 25–75 = vibe only. Keep <400 unless stylize is very high |
| `--iw` | 0–2 | 1 | Weight of an image prompt against the text |
| `--draft` | flag | off | Draft Mode. **Web only, not Discord** |
| `--tile` | flag | off | Seamless tiling patterns |
| `--seed` | integer | random | Reproducibility across runs |
| `::` / `::2` / `::-1` | — | 1 | Multi-prompt weights; negative values subtract a concept |

### Not available in V8.2

| Parameter | Status | Substitute |
|---|---|---|
| `--q` / `--quality` | **Unsupported** in V8.1 and V8.2 | Editor's 2048px HD re-render; or `--v 7` for `--q 2` / `--q 4` workflows |
| `--cref` / `--cw` | **Unsupported** in V7 *and* V8 | `--oref` + `--ow` (accepting the V7 render), or a personalization profile |

### The `--oref` trap

`--oref` and `--ow` are annotated *"(Uses V7)"* in the V8 column. They are not rejected —
the job simply executes on V7. Character consistency works; V8.2's aesthetic does not
come with it. Any set mixing `--oref` frames with plain V8.2 frames will not match. Plan
around it: either run the whole set through `--oref`, or hold identity with a
personalization profile / sref and accept looser likeness.

## 4. Stylize, raw, exp — how to actually set them

**`--s` on V8.2** *(community)*:

| Value | Result |
|---|---|
| 0–100 | Literal, prompt-obedient, clean. The photoreal and product range |
| 100–200 | Still literal; slight polish. Safe default when unsure |
| 500–800 | **Where 8.2's aesthetic improvements show best** — editorial, poster, concept |
| 800–1000 | Midjourney drives; expect it to add elements to satisfy its own taste |

**`--exp`**: behaves like a second stylize with a tone-mapping bias. Default 0. Keep it at
**25 or below when combined with other parameters** — past that it overwhelms `--stylize`
and you lose the ability to tune.

**Combinations that work:**

- `--raw --s 0–100 --c 0–10` → maximum photorealism, maximum control
- `--exp 10–25 --s 100–200` → enhanced detail and tone, still controlled
- `--s 500–800` (no raw) → V8.2 at full aesthetic strength

**Combinations to avoid:**

- `--raw` + high `--s` — contradictory; raw suppresses the style, stylize re-invites it
- `--exp 50+` + a tuned `--stylize` — exp swamps it
- Moodboard + `--sw` or `--sv` — incompatible

## 5. Draft Mode

| | |
|---|---|
| Output | **24 images at 512px** per prompt |
| Cost | **~0.4 GPU minutes** — six times the images at roughly half the GPU cost of a standard 4-image job |
| Access | Web only (midjourney.com). **Not on Discord** |
| Trigger | Lightning-bolt toggle beside the prompt bar, or `--draft` |
| Promote | Vary / Remix a draft image to regenerate it at full resolution (SD or HD per settings) |

**`--sref random` inside a draft** gives each of the 24 images a *different* randomized
style code — Midjourney describes this as up to **24× faster style-space exploration**.
This is the highest-value combination in the product right now: one cheap job scans the
entire style space, then you commit GPU minutes only to the direction that won.

## 6. Editor

Web editor, applied to an existing image:

- **Inpaint (Vary Region)** — freehand or rectangular selection, describe just that region,
  regenerate only there. The correct fix for one bad hand in an otherwise good frame.
- **Retexture** — re-skins the scene: estimates its shapes, then reapplies materials,
  surface qualities and lighting while holding structure and composition. This is how you
  produce material or colorway variants of an approved layout.
- **Pan / Zoom Out / Remix** — extend or re-interpret the frame.
- **HD re-render** — 2048px, 4× the pixel area of standard output, ~1.3 GPU minutes,
  ~12 seconds.

Standard production loop: generate a base with the right *structure* → inpaint local
flaws → retexture for variants → HD once at the end.

## 7. Personalization and moodboards

| | Personalization profile | Moodboard |
|---|---|---|
| Built from | Your image ratings, accumulated | Images you hand-pick (upload, URL, or from your gallery) |
| Code prefix | `p…` | `m…` |
| Applied via | `--p` (default) or `--p pCODE` | `--p mCODE` |
| Best for | "Everything I make should feel like me" | A specific, deliberate target look |
| Compatibility | V8 family | v6 and later; **not** with `--sv` or `--sw` |

Both override Midjourney's default style, after which **`--stylize` scales *your* style**
rather than the house one. Multiple profiles are supported — keep separate ones per client
or per project instead of polluting one.

V8.2's personalization improvement is real but conditional: it rewards profiles with
substantial rating data. A thin profile gets a thin benefit.

## 8. Plans, speed, cost

| Plan | Price/mo | Fast GPU hours | Relax |
|---|---|---|---|
| Basic | $10 | 3.3 | ✗ |
| Standard | $30 | 15 | ✓ |
| Pro | $60 | 30 | ✓ |
| Mega | $120 | 60 | ✓ |

20% discount annually. **Fast hours do not roll over** — they reset each billing cycle
whether used or not.

| Mode | Speed | Cost |
|---|---|---|
| Fast | ~1 min per standard job (default) | 1× |
| Relax | Queued, 0–30 min wait, unlimited | Free (Standard+) |
| Turbo | Up to 4× faster than Fast | 2× GPU time |

Rough costs: standard 4-image job ≈ 1 GPU minute · draft job ≈ 0.4 · HD re-render ≈ 1.3.
Non-standard aspect ratios, upscales, and older model versions cost more time.

## 9. Known limits

- **Text in images** — unchanged from 8.1. A few words survive; sentences scramble. Put
  real typography in a design tool over a clean generated plate.
- **`--oref` renders on V7** — see §3.
- **Draft Mode is web-only** — Discord users can't reach the cheapest exploration path.
- **The aesthetic is opinionated** — 8.2's contrast and grading are a default you opt out
  of with `--raw` and low `--s`, not a neutral starting point.
- **No official benchmarks** — every quality claim here is either Midjourney's stated
  intent or community testing, not measured.

## Sources

- [Midjourney docs — Version](https://docs.midjourney.com/hc/en-us/articles/32199405667853-Version) ·
  [Parameter List](https://docs.midjourney.com/hc/en-us/articles/32859204029709-Parameter-List) ·
  [Stylize](https://docs.midjourney.com/hc/en-us/articles/32196176868109-Stylize) ·
  [Raw](https://docs.midjourney.com/hc/en-us/articles/32634113811853-Raw) ·
  [Draft & Conversational Modes](https://docs.midjourney.com/hc/en-us/articles/35577175650957-Draft-Conversational-Modes) ·
  [Omni Reference](https://docs.midjourney.com/hc/en-us/articles/36285124473997-Omni-Reference) ·
  [Style Reference](https://docs.midjourney.com/hc/en-us/articles/32180011136653-Style-Reference) ·
  [Personalization](https://docs.midjourney.com/hc/en-us/articles/32433330574221-Personalization) ·
  [Moodboards](https://docs.midjourney.com/hc/en-us/articles/39193335040013-Moodboards) ·
  [Editor](https://docs.midjourney.com/hc/en-us/articles/32764383466893-Editor) ·
  [Multi-Prompts & Weights](https://docs.midjourney.com/hc/en-us/articles/32658968492557-Multi-Prompts-Weights) ·
  [GPU Speed](https://docs.midjourney.com/hc/en-us/articles/32016412137741-GPU-Speed-Fast-Relax-Turbo)
- [Midjourney V8.2: Changes and Practical Creator Guide — Quasa](https://quasa.io/media/midjourney-v8-2-what-changed-and-how-creators-should-use-it)
- [Midjourney 8.2: What's New and How to Use It — Vidmuse](https://vidmuse.ai/blog/midjourney-8-2)
- [MJ 8.2 Tested: 6 Major Changes and the Upgrade Decision Guide — Apiyi](https://help.apiyi.com/en/midjourney-8-2-mj8-2-review-guide-en.html)
- [Midjourney V8.2 is a quiet win for photographic images — Geeky Curiosity](https://geekycuriosity.substack.com/p/midjourney-v82-is-a-quiet-win-for)
- [Midjourney 8.1 Guide: Prompts, Omni Reference & Parameters — Blake Crosley](https://blakecrosley.com/guides/midjourney)
- [What Is Midjourney 8.2? The --preview Flag Explained — Kie.ai](https://kie.ai/blog/what-is-midjourney-8-2)
- [Midjourney June 2026 Update: Scanner, Bigger Batches, V8.2 Preview — Woollyfern](https://www.woollyferncreative.com/blog/midjourney-june-2026-update-scanner-bigger-batches-v82-preview-amp-more)
- [Midjourney Random Style Draft Mode — Remio](https://www.remio.ai/post/midjourney-random-style-draft-mode-pushes-design-tools-toward-faster-exploration)
- [Midjourney pricing in 2026 — eesel AI](https://www.eesel.ai/blog/midjourney-pricing)
- [A Deep Dive into Midjourney SREF codes — Midlibrary](https://midlibrary.io/midguide/deep-dive-into-midjourney-sref-codes)
