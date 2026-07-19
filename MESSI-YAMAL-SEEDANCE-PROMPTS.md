# Seedance Generation Prompts: The Duel

**The final stage of the pipeline — three ready-to-paste, @Image reference-locked Seedance 2 generation prompts (each under 2,500 characters to fit prompt-length limits) that turn the character sheets, face plates and environment plates in `assets/` into the finished 20-second film of [The Duel](MESSI-YAMAL-DUEL-VIDEO-PLAN.md).**

> תקציר בעברית: הסרטון מופק בשלוש הנפקות ב-Seedance 2. הנפקה 1 — "הפנים" (שוטי הפתיחה, ~4 שניות): הנפקה ייעודית רק לקלוז-אפים של הפנים, עם רפרנסי פנים בלבד — השוט נפתח בפנים מלאות ומזוהות של מסי ורק אז נדחף פנימה לעיניים; 4 השניות נכנסות לסרט במלואן. הנפקה 2 — "High Noon" (שוטים 3-7, 9 שניות): הזירה, הידיים, המונטאז' והדממה. הנפקה 3 — "השליפה והפרס" (שוטים 8-10, 6 שניות). סה"כ עם כרטיס הסיום: 20 שניות. לכל הנפקה טבלת צירוף משלה. כרטיס הסיום נעשה בעריכה. כל הרפרנסים כבר מאושרים ב-assets — שלוש ההנפקות מוכנות להרצה.

**Prerequisite — fulfilled:** the two face plates (Character Sheets [§E](MESSI-YAMAL-CHARACTER-SHEETS.md)) are generated, QC-approved and stored as `assets/messi-face-plate.jpeg` / `assets/yamal-face-plate.jpeg`. All references for all three generations are in place — every generation is ready to run.

---

## A. Attachment Registry

Each generation is a fresh Seedance request: attach **exactly these files, in this order** (upload order defines the `@Image` numbers), then paste that generation's prompt verbatim.

**GENERATION 1 — "The Faces" (film Shots 1-2, 4s — used in full).** Two variants — pick one:

*Variant A — four references (default: plates for the look + originals as identity anchors):*

| # | File in `assets/` | Role |
|---|---|---|
| @Image1 | `messi-face-plate.jpeg` | CHARACTER FACE — the Veteran, in-costume close-up |
| @Image2 | `yamal-face-plate.jpeg` | CHARACTER FACE — the Challenger, in-costume close-up |
| @Image3 | `messi-face-reference.jpeg` | CHARACTER FACE — the Veteran, raw likeness |
| @Image4 | `yamal-face-reference.jpeg` | CHARACTER FACE — the Challenger, raw likeness |

*Variant B — plates only (when the extra photos confuse the model or slots are limited):*

| # | File in `assets/` | Role |
|---|---|---|
| @Image1 | `messi-face-plate.jpeg` | CHARACTER FACE — the Veteran, in-costume close-up |
| @Image2 | `yamal-face-plate.jpeg` | CHARACTER FACE — the Challenger, in-costume close-up |

For Variant B, use the prompt in [§B2](#b2-generation-1--the-faces--plates-only-variant--paste-as-is) (identical except the @Image3/@Image4 blocks are removed and in-shot references updated).

**GENERATION 2 — "High Noon" (film Shots 3-7, 9s):**

| # | File in `assets/` | Role |
|---|---|---|
| @Image1 | `messi-character-sheet.jpeg` | CHARACTER — the Veteran |
| @Image2 | `yamal-character-sheet.jpeg` | CHARACTER — the Challenger |
| @Image3 | `messi-face-plate.jpeg` | CHARACTER FACE — the Veteran, authoritative likeness |
| @Image4 | `yamal-face-plate.jpeg` | CHARACTER FACE — the Challenger, authoritative likeness |
| @Image5 | `env-1-street-axis.jpeg` | LOCATION — street axis master |
| @Image6 | `env-2-side-on.jpeg` | LOCATION — side-on view |

If your build is limited to 4 reference slots, drop @Image3/@Image4 (the face plates) and renumber the environment plates back to @Image3/@Image4 in the prompt.

**GENERATION 3 — "The Draw & The Prize" (film Shots 8-10, 6s):**

| # | File in `assets/` | Role |
|---|---|---|
| @Image1 | `messi-character-sheet.jpeg` | CHARACTER — the Veteran |
| @Image2 | `yamal-character-sheet.jpeg` | CHARACTER — the Challenger |
| @Image3 | `messi-face-plate.jpeg` | CHARACTER FACE — the Veteran, authoritative likeness |
| @Image4 | `yamal-face-plate.jpeg` | CHARACTER FACE — the Challenger, authoritative likeness |
| @Image5 | `env-2-side-on.jpeg` | LOCATION — side-on view |
| @Image6 | `env-5-trophy-post.png` | OBJECT — the trophy on its post |

If your build is limited to 4 reference slots, drop @Image3/@Image4 (the face plates) and renumber the environment/object plates back to @Image3/@Image4 in the prompt.

---

## B. GENERATION 1 — "The Faces" — paste as-is

The identity-critical generation: every reference slot is a face, the whole model capacity goes to likeness. Recognition first, then the Leone squint.

```
=== GENERATION 1: The Faces ===

@Image1
The Veteran — an Argentine gunslinger in his late 30s, exactly as in
this close-up: dark flat-brimmed hat pulled low, brim shadowing the
forehead, eyes in a bright band of noon light, short grey-flecked beard,
sun-weathered skin, brown leather poncho collar. Keep this exact face in
every frame.

@Image2
The Challenger — a Spanish teenage gunslinger, exactly as in this
close-up: no hat, dark curls with golden-blond tips, young sun-tanned
skin, faint defiant grin, red-and-gold trimmed poncho collar. Keep this
exact face in every frame.

@Image3
Additional true-likeness photo of the Veteran. His face must match it
precisely.

@Image4
Additional true-likeness photo of the Challenger. His face must match
it precisely.

STYLE & TECHNICAL
Cinematic 2.39:1 widescreen. High noon, harsh vertical desert light,
near-white burnt sky, heat shimmer. Sergio Leone spaghetti-western
grade: burnt yellow-brown tones, warm blooming highlights, 35mm film
grain, anamorphic look. 4K, maximum facial detail — pores, sweat, dust.
Natural audio only: dry wind, a single church bell. No music, no
subtitles, no on-screen text.

Shot 1 (0:00–0:02) — The Veteran's Face
Static extreme close-up: the Veteran's full face from @Image1 and @Image3 fills
the frame, hat brim to chin, eyes lit in a hard band under the brim
shadow, street melted to warm haze behind. He stares into the lens, one
slow blink, eyes narrow. Slow push-in toward the eyes through the whole
shot. Heat shimmer. One bell toll. Hard cut.

Shot 2 (0:02–0:04) — The Challenger's Face
Mirrored extreme close-up: the Challenger's full face from @Image2 and @Image4,
curls to chin, light from the opposite side, same hazy street behind. A
gust moves one curl. His grin fades to a fearless squint as the camera
pushes in toward his eyes. Hard cut on a bell toll.
```

---

## B2. GENERATION 1 — "The Faces" (plates-only variant) — paste as-is

Same generation with only the two face plates attached (Registry Variant B). Attach `messi-face-plate.jpeg` first, `yamal-face-plate.jpeg` second.

```
=== GENERATION 1: The Faces ===

@Image1
The Veteran — an Argentine gunslinger in his late 30s, exactly as in
this close-up: dark flat-brimmed hat pulled low, brim shadowing the
forehead, eyes in a bright band of noon light, short grey-flecked beard,
sun-weathered skin, brown leather poncho collar. Keep this exact face in
every frame.

@Image2
The Challenger — a Spanish teenage gunslinger, exactly as in this
close-up: no hat, dark curls with golden-blond tips, young sun-tanned
skin, faint defiant grin, red-and-gold trimmed poncho collar. Keep this
exact face in every frame.

STYLE & TECHNICAL
Cinematic 2.39:1 widescreen. High noon, harsh vertical desert light,
near-white burnt sky, heat shimmer. Sergio Leone spaghetti-western
grade: burnt yellow-brown tones, warm blooming highlights, 35mm film
grain, anamorphic look. 4K, maximum facial detail — pores, sweat, dust.
Natural audio only: dry wind, a single church bell. No music, no
subtitles, no on-screen text.

Shot 1 (0:00–0:02) — The Veteran's Face
Static extreme close-up: the Veteran's full face from @Image1 fills
the frame, hat brim to chin, eyes lit in a hard band under the brim
shadow, street melted to warm haze behind. He stares into the lens, one
slow blink, eyes narrow. Slow push-in toward the eyes through the whole
shot. Heat shimmer. One bell toll. Hard cut.

Shot 2 (0:02–0:04) — The Challenger's Face
Mirrored extreme close-up: the Challenger's full face from @Image2,
curls to chin, light from the opposite side, same hazy street behind. A
gust moves one curl. His grin fades to a fearless squint as the camera
pushes in toward his eyes. Hard cut on a bell toll.
```

---

## C. GENERATION 2 — "High Noon" — paste as-is

```
=== GENERATION 2: High Noon ===

@Image1
The Veteran — Argentine gunslinger, late 30s. Exact face and outfit
from this sheet in every shot: dark flat-brimmed hat low over the eyes,
worn brown leather poncho, aged gun belt, revolver on the right hip,
dark trousers, dusty boots with spurs, grey-flecked beard.

@Image2
The Challenger — Spanish teenage gunslinger. Exact face and outfit from
this sheet in every shot: no hat, dark curls with golden tips, sand
poncho with red-and-gold trim, low gun belt, revolver on the right hip,
boots with spurs.

@Image3
The Veteran's face — authoritative likeness; match whenever visible.

@Image4
The Challenger's face — authoritative likeness; match whenever visible.

@Image5
The duel town, street-axis view: sandy main street, wooden porches,
sun-bleached facades, faded Argentina flag on the left, Spain flag on
the right, adobe church with bell tower closing the street, water
tower, a low weathered wooden post alone at the street's center. Keep
this geometry on axis views.

@Image6
The duel town, side-on view from a boardwalk straight across the
street. Keep this geometry on side views.

STYLE & TECHNICAL
Cinematic 2.39:1. High noon, harsh vertical light, burnt sky, heat
shimmer. Leone western grade: burnt yellow-brown tones, warm
highlights, 35mm grain, anamorphic. 4K. Natural audio: wind, leather,
spurs, bell. No music, no on-screen text.

Shot 1 (0:00–0:02) — Wide
Ground-level wide on @Image5: the Veteran and the Challenger face each
other twenty paces apart, the post midway, flags on both sides, bell
tower in heat haze. A tumbleweed crosses. Slow lateral dolly. Cut.

Shot 2 (0:02–0:03.5) — Veteran's Hand
Static low-angle ECU: his right hand an inch above the revolver grip,
poncho fringe at frame edge. Fingers flex once. Leather creaks. Hard
cut.

Shot 3 (0:03.5–0:05) — Challenger's Hand
Mirrored low-angle ECU: his hand over the low holster. A sweat bead
drops into the dust in slow motion. Fingers drum once. Hard cut.

Shot 4 (0:05–0:07) — The Triello
Accelerating montage, each cut faster: the Veteran's eyes (face from
@Image3) — the Challenger's eyes (face from @Image4) — hands — boots
and spurs — eyes — eyes, each cut tighter. Bell tolls faster. Slams to
black for two frames.

Shot 5 (0:07–0:09) — Dead Silence
Locked-off side-on wide on @Image6: both men in full profile at
opposite frame edges, hands frozen above their guns. The wind dies,
dust hangs motionless, all sound gone. Camera locked, held one beat too
long.
```

---

## D. GENERATION 3 — "The Draw & The Prize" — paste as-is

```
=== GENERATION 3: The Draw & The Prize ===

@Image1
The Veteran — Argentine gunslinger, late 30s. Exact face and outfit
from this sheet: dark flat-brimmed hat, worn brown leather poncho, aged
gun belt, revolver on the right hip, dark trousers, dusty boots with
spurs, grey-flecked beard.

@Image2
The Challenger — Spanish teenage gunslinger. Exact face and outfit from
this sheet: no hat, dark curls with golden tips, sand poncho with
red-and-gold trim, low gun belt, revolver on the right hip, boots with
spurs.

@Image3
The Veteran's face — authoritative likeness; match whenever visible.

@Image4
The Challenger's face — authoritative likeness; match whenever visible.

@Image5
The duel town, side-on view from a boardwalk straight across the sandy
street: porch posts foreground, sun-bleached facades and a faded flag
opposite, church bell tower and water tower far down the street. Keep
this geometry on side views.

@Image6
The FIFA World Cup trophy on a low weathered wooden post at the
street's center — solid gold, immaculate against cracked grey wood.
Exact trophy shape, gold finish, green base bands. One trophy only. No
logos or text.

STYLE & TECHNICAL
Cinematic 2.39:1. High noon, harsh vertical light, burnt sky, heat
shimmer. Leone western grade: burnt yellow-brown tones, warm
highlights, 35mm grain, anamorphic. 4K. Natural audio: wind, leather,
spurs, bell. No music, no on-screen text.

Shot 1 (0:00–0:02.5) — The Draw
Extreme slow motion, ~15-20% speed. Side low-angle: the Veteran (face
as @Image3) draws — poncho flares, revolver clears leather, hammer
rolls back, dust in golden light. Match cut at the same arm position to
the mirrored Challenger (face as @Image4) mid-draw, curls lifting. Both
barrels rise. Cut on the frame they reach level.

Shot 2 (0:02.5–0:04) — The Freeze
Side-on wide on @Image5: both fully extended in profile, revolvers
leveled at each other — and the world FREEZES one frame before either
trigger breaks. Dust motes suspended, a poncho hem frozen mid-flare. No
shot is fired. The camera alone drifts slowly sideways through the
frozen dust. Only thin wind.

Shot 3 (0:04–0:06) — The Prize
Same frozen moment, no cut: the camera rises and pulls back along the
street's axis — the World Cup trophy from @Image6 enters the
foreground on its post, midway between the frozen gunslingers.
Anamorphic lens flare off the gold. Both men remain frozen mid-draw,
symmetrical behind it. Hold the final frame: two men, one prize, no
winner.
```

---

## E. Assembly (edit room checklist)

1. **Sequence:** GEN 1 (4s, used in full — both faces get their full two seconds) → GEN 2 (9s) → GEN 3 (6s) → title card (1s). Total 20.0s.
2. **Title card (19.0-20.0s) — built in the editor, never generated:** black frame, heavy film grain, distressed western slab-serif in dusty gold stamping on in three beats — "THE GOOD." / "THE KID." / "THE TROPHY." One final bell toll. 8-frame fade to black.
3. **Letterbox:** place the 2.39:1 footage centered on a 1080×1920 vertical canvas with black bars — do this in the edit; never crop to full 9:16. Keep the picture band clear of the top 15% / bottom 20% Reels UI zones.
4. **Score:** generate the Morricone-inspired cue with the Suno prompt in [MESSI-YAMAL-DUEL-VIDEO-PLAN.md §6](MESSI-YAMAL-DUEL-VIDEO-PLAN.md); duck it to silence during GEN 2 Shot 5 (the dead-silence beat) and hit a deep sub-boom on the freeze (GEN 3, 0:02.5).
5. **Loop:** the black end-frame cuts back to the opening face — verify the loop feels seamless before exporting.
6. **Retry discipline:** if a generation drifts (wrong face, wrong town), regenerate that generation only — never fix identity in the edit. The locking blocks are verbatim-repeatable on every retry. If GEN 1 faces still miss, regenerate the face plates themselves first (Character Sheets §E) — a stronger plate fixes every downstream shot.
