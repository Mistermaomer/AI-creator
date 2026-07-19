# Environment Plates: The Duel Town

**Five ready-to-paste ChatGPT prompts that build the film's location — a sun-scorched Tabernas-style western town — as a consistent set of cinematic reference plates for every scene generation of [The Duel](MESSI-YAMAL-DUEL-VIDEO-PLAN.md).**

> תקציר בעברית: חמישה פרומפטים ל-ChatGPT שמייצרים את הלוקיישן של הסרטון — עיירת מערב מדברית בסגנון טברנס/אלמריה (המדבר הספרדי שבו ליאונה צילם באמת את הטרילוגיה). כל פרומפט מפיק פלטה אחת ברזולוציה מלאה מזווית אחרת של אותו רחוב: ווייד לאורך ציר הרחוב (המאסטר), מבט צד, פרטי חזיתות ודגלים, גובה קרקע, ועמוד העץ עם גביע המונדיאל. מפיקים את פלטה 1 קודם, ואז את השאר בצירוף שלה — כך העיירה נשארת אותה עיירה בכל השוטים. בסוף המסמך: טבלה שממפה כל שוט בסרטון לרפרנסים המדויקים שמצרפים לו.

---

## A. How to Use

1. Open a **fresh ChatGPT conversation** for the location. Generate **ENV-1 first** — it is the master plate that defines the town.
2. Generate ENV-2 through ENV-5 **in the same conversation** (or attach the approved ENV-1 image to each new request) so every angle shows the same town. Each prompt below already opens with the instruction to match the master plate.
3. Approved plates live in this repo (all five generated 2026-07-19 and QC-approved):
   - `assets/env-1-street-axis.jpeg` ✓ (5504×3072)
   - `assets/env-2-side-on.jpeg` ✓ (5504×3072)
   - `assets/env-3-facades-flags.png` ✓ (3840×2160)
   - `assets/env-4-ground-level.png` ✓ (3840×2160)
   - `assets/env-5-trophy-post.png` ✓ (3840×2160)

   **QC notes:** the set is coherent — same church and bell tower, same water tower, Argentina flag on the left side of the street axis and Spain on the right in every plate. Known minor flaws: semi-readable gibberish signage in ENV-1/ENV-2 and a tiny background horse near the church in ENV-1 — harmless in reference plates, but add "no readable signs, no animals" to any scene prompt where those areas end up in sharp focus.
4. If a plate drifts (different buildings, wrong flag placement), fix it with a targeted reply ("same town, but the bell tower must close the street like in the first image") instead of re-rolling from scratch.
5. When generating scenes, attach plates + character sheets per the **Per-Shot Reference Map** in Section D.

**Text warning.** Image models produce gibberish signage. Every prompt below forbids readable text — signs exist but are weathered to illegible peeling paint. Never remove that line.

---

## B. Environment Lock (canonical — quote verbatim in every plate and scene prompt)

```
LOCATION: a sun-scorched Spanish-desert western town in the style of the
Tabernas desert film sets of Almería — where the classic spaghetti
westerns were actually shot. One wide sandy main street. Sun-bleached
timber and whitewashed adobe facades line both sides, with wooden porches,
warped railings and weathered beams. A small church bell tower with a
single bell closes the far end of the street; a wooden water tower rises
behind the rooflines on one side. A low weathered wooden post stands alone
at the exact center of the street. A faded Argentina flag hangs from a
building on one side of the street, a faded Spain flag from a building on
the opposite side. Dry desert dust, drifting tumbleweed, harsh vertical
high-noon sunlight, near-white burnt hot sky, visible heat shimmer.
```

**Style block (also verbatim in every prompt):**

```
STYLE: photorealistic cinematic western film still, shot on anamorphic
35mm — warm desert color grade of burnt yellow-brown dust tones, warm
blooming highlights, dusty brown shadows, subtle film grain. Wide
landscape aspect ratio (16:9). NO people, NO characters, NO animals
anywhere in the frame. Any signage is weathered to illegible peeling
paint — NO readable text, letters, numbers, logos or watermarks anywhere.
```

---

## C. The Five Plates

### ENV-1 — Hero Wide / Street Axis (THE MASTER — generate first)

Camera axis of Shots 3 and 10: straight down the street's center line.

```
Create a photorealistic establishing plate of a western film location.

[paste ENVIRONMENT LOCK]

CAMERA: ground-level view from the exact center of the street, looking
straight down the street's central axis toward the church bell tower at
the far end. Deep perspective — porches and facades receding on both
sides, the Argentina flag hanging into frame on one side and the Spain
flag on the other, the low weathered wooden post standing alone at the
street's midpoint (nothing on it), a tumbleweed mid-roll, dust hanging in
the hard noon light, heat haze melting the far end of the street. The
street is completely empty — high noon before a duel.

[paste STYLE block]
```

### ENV-2 — Side-On View (background of Shots 7-9)

The perpendicular angle behind the profile standoff, the draw and the freeze-frame.

```
Same exact town and location as the attached master plate — identical
architecture, materials, lighting and flags.

[paste ENVIRONMENT LOCK]

CAMERA: view from one boardwalk looking straight ACROSS the street at the
facades on the opposite side — the street runs left-to-right through the
frame. Weathered porch posts and railings frame the composition, the
faded flag visible on the far building, dust drifting through shafts of
vertical noon light, heat shimmer rising off the sand. Empty street.

[paste STYLE block]
```

### ENV-3 — Facades & Flags Detail (depth and close-up backgrounds)

```
Same exact town and location as the attached master plate — identical
architecture, materials, lighting and flags.

[paste ENVIRONMENT LOCK]

CAMERA: three-quarter angle on a stretch of facades — a saloon front with
swinging doors, wooden porch, warped balcony railing above, the faded
Argentina flag hanging heavy in the still air from the balcony beam.
Peeling illegible painted signs, cracked shutters, dust on every ledge.
Shallow cinematic depth, the rest of the street falling into warm haze.

[paste STYLE block]
```

### ENV-4 — Ground Level / Dust & Light (background of Shots 4-5)

```
Same exact town and location as the attached master plate — identical
architecture, materials, lighting and flags.

[paste ENVIRONMENT LOCK]

CAMERA: extreme low angle at boot height, lens almost touching the sandy
street. Cracked sun-baked earth and fine dust in razor-sharp foreground
focus, a hard porch-beam shadow cutting diagonally across the ground, a
tumbleweed resting at frame edge, dust motes glittering in a shaft of
noon light, the sun-bleached facades rising soft and out of focus in the
background.

[paste STYLE block]
```

### ENV-5 — The Trophy Post (reference for Shot 10, the reveal)

The only plate where the prize appears.

```
Same exact town and location as the attached master plate — identical
architecture, materials, lighting and flags.

[paste ENVIRONMENT LOCK]

CAMERA: cinematic close-up on the low weathered wooden post at the exact
center of the street — and standing on it, the FIFA World Cup trophy:
solid gold, immaculate, flawless, a violent contrast against the cracked
grey wood and the dust. A hard anamorphic lens flare blooms off the gold
in the vertical noon sun; frozen dust motes glitter around it. Behind it,
the street axis falls away into warm blur toward the distant bell tower.
The trophy is pristine and unclaimed — the only perfect object in a
weathered world.

[paste STYLE block]
```

---

## D. Per-Shot Reference Map

The single source of truth for scene generation. For each shot of [MESSI-YAMAL-DUEL-VIDEO-PLAN.md](MESSI-YAMAL-DUEL-VIDEO-PLAN.md), attach exactly these references (character sheets and face references are defined in [MESSI-YAMAL-CHARACTER-SHEETS.md](MESSI-YAMAL-CHARACTER-SHEETS.md)):

| Shot | Content | Environment plate(s) | Character reference(s) |
|------|---------|----------------------|------------------------|
| 1 | Messi's eyes ECU | none (faces fill frame; ENV-3 optional for bokeh) | `messi-face-reference.jpeg` |
| 2 | Yamal's eyes ECU | none (ENV-3 optional for bokeh) | `yamal-face-reference.jpeg` |
| 3 | High-noon wide, both silhouettes | ENV-1 | both character sheets |
| 4 | Messi's hand over holster | ENV-4 | `messi-character-sheet.jpeg` |
| 5 | Yamal's hand over holster | ENV-4 | `yamal-character-sheet.jpeg` |
| 6 | Accelerating montage (eyes/hands/boots) | ENV-3 + ENV-4 | both sheets + both face refs |
| 7 | Dead-silence side two-shot | ENV-2 | both character sheets |
| 8 | The draw, extreme slow motion | ENV-2 | both character sheets |
| 9 | THE FREEZE (signature) | ENV-2 | both character sheets |
| 10 | Crane reveal of the trophy | ENV-1 + ENV-5 | both character sheets |
| 11 | Title card | none (pure typography over black) | none |

Rules of thumb:

- **Identity comes from images, costume comes from words** — alongside the attachments, keep quoting the Wardrobe Locks (character sheets §B) and the Environment Lock (§B above) verbatim in every scene prompt.
- Eye close-ups use **face references**, not sheets — they carry more facial detail at that crop.
- In two-character shots, identify each man by his sheet: "the poncho-with-hat character" (Messi) vs. "the curly-haired character" (Yamal).
