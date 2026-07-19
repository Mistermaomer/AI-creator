# Seedance Generation Prompts: The Duel

**The final stage of the pipeline — three ready-to-paste, @Image reference-locked Seedance 2 generation prompts that turn the character sheets, face plates and environment plates in `assets/` into the finished 20-second film of [The Duel](MESSI-YAMAL-DUEL-VIDEO-PLAN.md).**

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
| @Image5 | `storyboard-scene-1.png` | STORYBOARD — panel-by-panel composition guide |

*Variant B — plates only (when the extra photos confuse the model or slots are limited):*

| # | File in `assets/` | Role |
|---|---|---|
| @Image1 | `messi-face-plate.jpeg` | CHARACTER FACE — the Veteran, in-costume close-up |
| @Image2 | `yamal-face-plate.jpeg` | CHARACTER FACE — the Challenger, in-costume close-up |
| @Image3 | `storyboard-scene-1.png` | STORYBOARD — panel-by-panel composition guide |

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
| @Image7 | `storyboard-scene-2.png` | STORYBOARD — panel-by-panel composition guide |

If reference slots are limited, drop in this order: the storyboard (@Image7) first, then the face plates (@Image3/@Image4, renumbering the environment plates down).

**GENERATION 3 — "The Draw & The Prize" (film Shots 8-10, 6s):**

| # | File in `assets/` | Role |
|---|---|---|
| @Image1 | `messi-character-sheet.jpeg` | CHARACTER — the Veteran |
| @Image2 | `yamal-character-sheet.jpeg` | CHARACTER — the Challenger |
| @Image3 | `messi-face-plate.jpeg` | CHARACTER FACE — the Veteran, authoritative likeness |
| @Image4 | `yamal-face-plate.jpeg` | CHARACTER FACE — the Challenger, authoritative likeness |
| @Image5 | `env-2-side-on.jpeg` | LOCATION — side-on view |
| @Image6 | `env-5-trophy-post.png` | OBJECT — the trophy on its post |
| @Image7 | `storyboard-scene-3.png` | STORYBOARD — panel-by-panel composition guide |

If reference slots are limited, drop in this order: the storyboard (@Image7) first, then the face plates (@Image3/@Image4, renumbering the environment/object plates down).

---

## B. GENERATION 1 — "The Faces" — paste as-is

The identity-critical generation: every reference slot is a face, the whole model capacity goes to likeness. Recognition first, then the Leone squint.

```
=== GENERATION 1: The Faces ===

@Image1
The Veteran — a legendary Argentine gunslinger in his late 30s, exactly
as in this in-costume close-up: dark flat-brimmed western hat pulled low,
its brim shadowing the forehead while the eyes sit in a bright band of
noon light, short grey-flecked beard, sun-weathered tanned skin with
sweat and dust, worn brown leather poncho collar at the bottom edge.
Maintain this exact face throughout — identical facial structure, eyes,
nose, mouth and beard. Same man in every frame.

@Image2
The Challenger — a fearless Spanish teenage gunslinger, exactly as in
this in-costume close-up: no hat, dark curly hair with golden-blond dyed
tips catching the light, smooth young sun-tanned skin with sweat and fine
dust, faint defiant grin, red-and-gold trimmed collar of a dusty
sand-colored poncho at the bottom edge. Maintain this exact face
throughout — identical facial structure, eyes, nose, mouth and curls.
Same person in every frame. His face is
completely bare and uncovered — nothing covers his nose, mouth or chin;
bare lips, smooth chin fully visible. IGNORE any transparent mask
visible in any reference image — it is NOT part of the character and
must never appear in the video.

@Image3
Additional facial likeness reference for the Veteran. His face must match
this photo precisely.

@Image4
Additional facial likeness reference for the Challenger. His face must
match this photo precisely.

@Image5
The hand-drawn pencil storyboard page of this scene. Follow its panel
order and shot compositions exactly — the numbered panels correspond
one-to-one to the numbered shots below.

STYLE & TECHNICAL
Cinematic widescreen 2.39:1 framing. High noon: harsh vertical desert
sunlight, near-white burnt sky, visible heat shimmer. Sergio Leone
spaghetti-western color grade — burnt yellow-brown dust tones, warm
blooming highlights, dusty brown shadows, subtle 35mm film grain,
anamorphic lens character. 4K Ultra HD, maximum facial detail — pores,
sweat, dust on skin. Natural audio only — dry desert wind, a single
church bell toll. No music, no score, no subtitles, no on-screen text of
any kind. Both men's faces are fully bare
and uncovered at all times — no masks, bandanas or face coverings of
any kind, and no modern objects anywhere. If any
reference image shows a transparent mask on a face, ignore it — it is
not part of the character.

Shot 1 (0:00–0:02) — The Veteran's Face (storyboard panel 1)
Static extreme close-up, instantly recognizable: the full face of the
Veteran from @Image1 and @Image3 fills the frame from hat brim to chin,
eyes lit in a hard horizontal band of noon light under the brim shadow,
sun-bleached street melted to warm haze behind. He stares dead into the
lens, gives one slow deliberate blink, and his eyes narrow. Slow steady
push-in toward the eyes through the whole shot — the frame tightens from
full face toward the eye line. Heat shimmer ripples the air. A single
church bell tolls. Hard snap cut.

Shot 2 (0:02–0:04) — The Challenger's Face (storyboard panel 2)
Mirrored static extreme close-up, instantly recognizable: the full face
of the Challenger from @Image2 and @Image4 fills the frame from his
golden-tipped curls to his chin, light from the opposite side, the same
sun-bleached haze behind. A hot gust moves one curl across his brow. His
faint grin fades into a fearless squint as the camera pushes in slowly
toward his eyes. Heat shimmer continues. Hard snap cut on a bell toll.
```

---

## B2. GENERATION 1 — "The Faces" (plates-only variant) — paste as-is

Same generation with only the two face plates attached (Registry Variant B). Attach `messi-face-plate.jpeg` first, `yamal-face-plate.jpeg` second.

```
=== GENERATION 1: The Faces ===

@Image1
The Veteran — a legendary Argentine gunslinger in his late 30s, exactly
as in this in-costume close-up: dark flat-brimmed western hat pulled low,
its brim shadowing the forehead while the eyes sit in a bright band of
noon light, short grey-flecked beard, sun-weathered tanned skin with
sweat and dust, worn brown leather poncho collar at the bottom edge.
Maintain this exact face throughout — identical facial structure, eyes,
nose, mouth and beard. Same man in every frame.

@Image2
The Challenger — a fearless Spanish teenage gunslinger, exactly as in
this in-costume close-up: no hat, dark curly hair with golden-blond dyed
tips catching the light, smooth young sun-tanned skin with sweat and fine
dust, faint defiant grin, red-and-gold trimmed collar of a dusty
sand-colored poncho at the bottom edge. Maintain this exact face
throughout — identical facial structure, eyes, nose, mouth and curls.
Same person in every frame. His face is
completely bare and uncovered — nothing covers his nose, mouth or chin;
bare lips, smooth chin fully visible. IGNORE any transparent mask
visible in any reference image — it is NOT part of the character and
must never appear in the video.

@Image3
The hand-drawn pencil storyboard page of this scene. Follow its panel
order and shot compositions exactly — the numbered panels correspond
one-to-one to the numbered shots below.

STYLE & TECHNICAL
Cinematic widescreen 2.39:1 framing. High noon: harsh vertical desert
sunlight, near-white burnt sky, visible heat shimmer. Sergio Leone
spaghetti-western color grade — burnt yellow-brown dust tones, warm
blooming highlights, dusty brown shadows, subtle 35mm film grain,
anamorphic lens character. 4K Ultra HD, maximum facial detail — pores,
sweat, dust on skin. Natural audio only — dry desert wind, a single
church bell toll. No music, no score, no subtitles, no on-screen text of
any kind. Both men's faces are fully bare
and uncovered at all times — no masks, bandanas or face coverings of
any kind, and no modern objects anywhere. If any
reference image shows a transparent mask on a face, ignore it — it is
not part of the character.

Shot 1 (0:00–0:02) — The Veteran's Face (storyboard panel 1)
Static extreme close-up, instantly recognizable: the full face of the
Veteran from @Image1 fills the frame from hat brim to chin, eyes lit in
a hard horizontal band of noon light under the brim shadow, sun-bleached
street melted to warm haze behind. He stares dead into the lens, gives
one slow deliberate blink, and his eyes narrow. Slow steady push-in
toward the eyes through the whole shot — the frame tightens from full
face toward the eye line. Heat shimmer ripples the air. A single church
bell tolls. Hard snap cut.

Shot 2 (0:02–0:04) — The Challenger's Face (storyboard panel 2)
Mirrored static extreme close-up, instantly recognizable: the full face
of the Challenger from @Image2 fills the frame from his golden-tipped
curls to his chin, light from the opposite side, the same sun-bleached
haze behind. A hot gust moves one curl across his brow. His faint grin
fades into a fearless squint as the camera pushes in slowly toward his
eyes. Heat shimmer continues. Hard snap cut on a bell toll.
```

---

## C. GENERATION 2 — "High Noon" — paste as-is

```
=== GENERATION 2: High Noon ===

@Image1
The Veteran — a legendary Argentine gunslinger in his late 30s. Maintain
the exact face, weathered sun-tanned skin, short grey-flecked beard, and
calm heavy-lidded eyes from the reference sheet across all shots. He
always wears: dark flat-brimmed western hat low over the eyes, worn brown
leather poncho with pale stripe banding near the hem over a striped
collarless shirt, aged gun belt with a holstered period revolver on the
right hip, dark trousers tucked into tall dusty leather boots with spurs.
Same man in every shot.

@Image2
The Challenger — a fearless Spanish teenage gunslinger. Maintain the
exact young face, dark curly hair with golden-blond dyed tips, and faint
defiant grin from the reference sheet across all shots. No hat — his
curls are always visible. He always wears: dusty sand-colored poncho with
red-and-gold woven trim at the neckline and hem, newer leather gun belt
slung low with a holstered period revolver on the right hip, dark
trousers, dusty leather boots with spurs. Same person in every shot. His face is
completely bare and uncovered — nothing covers his nose, mouth or chin;
bare lips, smooth chin fully visible. IGNORE any transparent mask
visible in any reference image — it is NOT part of the character and
must never appear in the video.

@Image3
The Veteran's face in close-up — the authoritative facial likeness for
the Veteran. Whenever his face is visible, at any distance, it must match
this plate exactly: same facial structure, eyes, nose, mouth, grey-
flecked beard, hat-brim shadow across the forehead.

@Image4
The Challenger's face in close-up — the authoritative facial likeness
for the Challenger. Whenever his face is visible, at any distance, it
must match this plate exactly: same facial structure, eyes, nose, mouth,
golden-tipped curls, faint defiant grin, bare uncovered lips and chin.
IGNORE any transparent mask visible in the reference — it is NOT part
of the character.

@Image5
The duel town, street-axis view — a sun-scorched Tabernas-style western
town: one wide sandy main street, wooden porches and sun-bleached facades
on both sides, a faded Argentina flag hanging on the left side of the
street and a faded Spain flag on the right, a whitewashed adobe church
with a bell tower closing the far end of the street, a wooden water tower
above the right rooflines, and a low weathered wooden post standing alone
at the exact center of the street. Keep this exact geometry, layout and
architecture whenever the street is seen along its axis.

@Image6
The duel town, side-on view — the same town seen from one boardwalk
straight across the street: weathered porch posts in the foreground, the
whitewashed facades and the faded flag on the far side, the church and
water tower far down the street. Keep this exact geometry and layout
whenever the street is seen from the side.

@Image7
The hand-drawn pencil storyboard page of this scene. Follow its panel
order and shot compositions exactly — the numbered panels correspond
one-to-one to the numbered shots below.

STYLE & TECHNICAL
Cinematic widescreen 2.39:1 framing. High noon: harsh vertical desert
sunlight, near-white burnt sky, visible heat shimmer. Sergio Leone
spaghetti-western color grade — burnt yellow-brown dust tones, warm
blooming highlights, dusty brown shadows, subtle 35mm film grain,
anamorphic lens character. 4K Ultra HD, sharp clarity. Natural audio
only — dry desert wind, leather creak, spur jingle, boots shifting in
sand, single church bell tolls. No music, no score, no subtitles, no
on-screen text of any kind. Both men's faces are fully bare and
uncovered at all times — no masks, bandanas or face coverings of any
kind, and no modern objects anywhere. If any
reference image shows a transparent mask on a face, ignore it — it is
not part of the character.

Shot 1 (0:00–0:02) — High Noon Wide (storyboard panel 1)
Ground-level wide locked to the street-axis geometry of @Image5: the
Veteran (@Image1, poncho and hat) and the Challenger (@Image2, bare
curls) stand facing each other twenty paces apart on the empty sandy
street, the low wooden post midway between them, Argentina flag hanging
limp on the left, Spain flag on the right, the church bell tower closing
the frame in heat haze. A tumbleweed rolls through the extreme
foreground. Slow lateral dolly right. Dust drifts. Cut as the tumbleweed
clears frame.

Shot 2 (0:02–0:03.5) — The Veteran's Hand (storyboard panel 2)
Static low-angle extreme close-up: the Veteran's right hand from @Image1
hovering one inch above the holstered revolver grip, worn brown poncho
fringe swaying at frame edge. His fingers flex once, slowly. Leather
creaks. Dust drifts through a hard shaft of noon light. Hard snap cut.

Shot 3 (0:03.5–0:05) — The Challenger's Hand (storyboard panel 3)
Mirrored static low-angle extreme close-up: the Challenger's hand from
@Image2 above his low-slung holster, red-and-gold poncho trim at frame
edge. A single bead of sweat drops from his wrist and hits the dust in
brief slow motion. His fingers drum once against his thigh. Hard snap cut.

Shot 4 (0:05–0:07) — The Triello (storyboard panel 4)
Accelerating montage of hard snap cuts, each cut faster than the last —
half-second, quarter-second, then a few frames each: the Veteran's
narrowed eyes under the hat brim (exact face from @Image3) — the
Challenger's fearless eyes under his curls (exact face from @Image4,
bare face, no mask) —
the Veteran's hand (@Image1) — the Challenger's
hand — boots and spurs shifting in dust — eyes — eyes. Each successive
eye close-up punches slightly tighter. Church bell tolling faster
underneath, flags snapping once in a gust. The montage slams to black
for two frames.

Shot 5 (0:07–0:09) — Dead Silence (storyboard panel 5)
Locked-off side-on wide using the exact geometry of @Image6: both men in
full profile at opposite frame edges — their profiles matching @Image3
and @Image4, both faces bare and uncovered — the empty street between them, the far facades and faded
flag behind. All sound drops to nothing. The wind
dies — dust hangs motionless in the air, a flag frozen mid-fall, only
heat shimmer moves. Both right hands frozen an inch above their guns.
Zero camera movement. Held one beat longer than comfortable.
```

---

## D. GENERATION 3 — "The Draw & The Prize" — paste as-is

```
=== GENERATION 3: The Draw & The Prize ===

@Image1
The Veteran — a legendary Argentine gunslinger in his late 30s. Maintain
the exact face, weathered sun-tanned skin, short grey-flecked beard, and
calm heavy-lidded eyes from the reference sheet across all shots. He
always wears: dark flat-brimmed western hat low over the eyes, worn brown
leather poncho with pale stripe banding near the hem over a striped
collarless shirt, aged gun belt with a holstered period revolver on the
right hip, dark trousers tucked into tall dusty leather boots with spurs.
Same man in every shot.

@Image2
The Challenger — a fearless Spanish teenage gunslinger. Maintain the
exact young face, dark curly hair with golden-blond dyed tips, and faint
defiant grin from the reference sheet across all shots. No hat — his
curls are always visible. He always wears: dusty sand-colored poncho with
red-and-gold woven trim at the neckline and hem, newer leather gun belt
slung low with a holstered period revolver on the right hip, dark
trousers, dusty leather boots with spurs. Same person in every shot. His face is
completely bare and uncovered — nothing covers his nose, mouth or chin;
bare lips, smooth chin fully visible. IGNORE any transparent mask
visible in any reference image — it is NOT part of the character and
must never appear in the video.

@Image3
The Veteran's face in close-up — the authoritative facial likeness for
the Veteran. Whenever his face is visible, at any distance, it must match
this plate exactly: same facial structure, eyes, nose, mouth, grey-
flecked beard, hat-brim shadow across the forehead.

@Image4
The Challenger's face in close-up — the authoritative facial likeness
for the Challenger. Whenever his face is visible, at any distance, it
must match this plate exactly: same facial structure, eyes, nose, mouth,
golden-tipped curls, faint defiant grin, bare uncovered lips and chin.
IGNORE any transparent mask visible in the reference — it is NOT part
of the character.

@Image5
The duel town, side-on view — a sun-scorched Tabernas-style western
town seen from one boardwalk straight across the wide sandy street:
weathered porch posts in the foreground, sun-bleached facades and a
faded flag on the far side, a whitewashed adobe church with a bell tower
and a wooden water tower far down the street. Keep this exact geometry
and layout whenever the street is seen from the side.

@Image6
The FIFA World Cup trophy standing on a low weathered wooden post at the
exact center of the sandy street — solid gold, immaculate, flawless
against the cracked grey wood, the street and church falling into warm
blur behind it. Use the exact trophy shape, gold finish, green base
bands, post texture and placement from the reference. One trophy only.
No added logos or text.

@Image7
The hand-drawn pencil storyboard page of this scene. Follow its panel
order and shot compositions exactly — the numbered panels correspond
one-to-one to the numbered shots below.

STYLE & TECHNICAL
Cinematic widescreen 2.39:1 framing. High noon: harsh vertical desert
sunlight, near-white burnt sky, visible heat shimmer. Sergio Leone
spaghetti-western color grade — burnt yellow-brown dust tones, warm
blooming highlights, dusty brown shadows, subtle 35mm film grain,
anamorphic lens character. 4K Ultra HD, sharp clarity. Natural audio
only — dry desert wind, leather creak, spur jingle, boots shifting in
sand, single church bell tolls, and ONE single deafening gunshot on the
very last frame of the clip. No music, no score, no subtitles, no
on-screen text of any kind. Both men's faces are fully bare and
uncovered at all times — no masks, bandanas or face coverings of any
kind, and no modern objects anywhere. If any
reference image shows a transparent mask on a face, ignore it — it is
not part of the character.

Shot 1 (0:00–0:02.5) — The Draw (storyboard panel 1)
Extreme slow motion, roughly 15-20% speed. Side low-angle on the Veteran
(@Image1, face exactly as @Image3): he draws — the brown poncho flares outward, the revolver
clears leather, his thumb rolls the hammer back, dust kicked off the
holster hanging in golden light. At the exact same arm position, match
cut to the mirrored side low-angle of the Challenger (@Image2, face
exactly as @Image4) mid-draw, red-and-gold trim flaring, golden-tipped
curls lifting. Both barrels
rise toward level. Motion blur on the fastest part of the arm swing. Cut
on the exact frame both barrels reach level.

Shot 2 (0:02.5–0:04) — The Freeze (storyboard panel 2)
Side-on wide locked to the geometry of @Image5: both men fully extended
in profile at opposite frame edges, two revolvers leveled at each other
across the empty street, hammers back — and the entire world FREEZES one
frame before either trigger breaks. Dust motes suspended mid-air, a
poncho hem frozen mid-flare, the far flag stopped mid-wave. No shot is
ever fired. While the world is frozen, the camera itself drifts slowly
sideways through the frozen dust — frozen-time parallax. All sound gone
except a thin wind.

Shot 3 (0:04–0:06) — The Prize & The Shot (storyboard panel 3)
Continuing the frozen moment without a cut, the camera rises and pulls
back along the street's center axis — and the FIFA World Cup trophy from
@Image6 enters the foreground, standing on its weathered wooden post at
the exact midpoint between the two frozen gunslingers, solid gold and
immaculate. A hard anamorphic lens flare blooms off the gold in the
vertical noon sun. The Veteran (@Image1) and the Challenger (@Image2)
remain frozen mid-draw in the background, perfectly symmetrical on
either side of the trophy — and then, on the very last frame at 0:06, a
single deafening GUNSHOT cracks and the image smash-cuts instantly to
black. Neither man is seen firing, no one falls, nothing is resolved —
the gunshot IS the final frame.
```

---

## E. Assembly (edit room checklist)

1. **Sequence:** GEN 1 (4s, used in full — both faces get their full two seconds) → GEN 2 (9s) → GEN 3 (6s) → title card (1s). Total 20.0s.
2. **The gunshot (19.0s):** GEN 3 ends on a single gunshot and an instant smash cut to black — verify the bang lands on the very last generated frame; if Seedance places it early, trim so the cut to black is frame-exact with the shot. It is the only gunshot in the film and the film's cliffhanger: no one is seen firing, no one falls.
3. **Title card (19.0-20.0s) — built in the editor, never generated:** out of the gunshot's black, distressed western slab-serif in dusty gold stamps on in three beats — "THE GOOD." / "THE KID." / "THE TROPHY." One final bell toll. 8-frame fade to black.
4. **Letterbox:** place the 2.39:1 footage centered on a 1080×1920 vertical canvas with black bars — do this in the edit; never crop to full 9:16. Keep the picture band clear of the top 15% / bottom 20% Reels UI zones.
5. **Score:** generate the Morricone-inspired cue with the Suno prompt in [MESSI-YAMAL-DUEL-VIDEO-PLAN.md §6](MESSI-YAMAL-DUEL-VIDEO-PLAN.md); duck it to silence during GEN 2 Shot 5 (the dead-silence beat) and hit a deep sub-boom on the freeze (GEN 3, 0:02.5).
6. **Loop:** the black end-frame cuts back to the opening face — the unanswered gunshot is the replay engine: "who fired?" sends viewers straight back into the loop. Verify it feels seamless before exporting.
7. **Retry discipline:** if a generation drifts (wrong face, wrong town), regenerate that generation only — never fix identity in the edit. The locking blocks are verbatim-repeatable on every retry. If GEN 1 faces still miss, regenerate the face plates themselves first (Character Sheets §E) — a stronger plate fixes every downstream shot.
