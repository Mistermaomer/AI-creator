# Seedance Generation Prompts: The Duel

**The final stage of the pipeline — two ready-to-paste, @Image reference-locked Seedance 2 generation prompts that turn the character sheets and environment plates in `assets/` into the finished 15-second film of [The Duel](MESSI-YAMAL-DUEL-VIDEO-PLAN.md).**

> תקציר בעברית: זהו שלב ההנפקה הסופי. הסרטון מופק בשתי הנפקות (Generations) ב-Seedance 2: הנפקה 1 — המתח (שוטים 1-7, 9 שניות): העיניים, הזירה, הידיים, המונטאז' המתקצר והדממה. הנפקה 2 — ההכרעה-שאינה-הכרעה (שוטים 8-10, 5 שניות): השליפה בסלואו-מושן, הפריז-פריים, וחשיפת הגביע. לכל הנפקה מצרפים 4 קבצי רפרנס מ-`assets/` בסדר מדויק (הטבלה בפנים) ומדביקים את הפרומפט כמו שהוא. כרטיס הסיום (שנייה 15) נעשה בעריכה, לא בהנפקה — טיפוגרפיה של מחוללי וידאו יוצאת ג'יבריש. בסוף המסמך: הוראות הרכבה — letterbox, פסקול, ולופ.

---

## A. Attachment Registry

Each generation is a fresh Seedance request: attach **exactly these files, in this order** (upload order defines the `@Image` numbers), then paste that generation's prompt verbatim.

**GENERATION 1 — "High Noon" (Shots 1-7 of the film, 9s):**

| # | File in `assets/` | Role |
|---|---|---|
| @Image1 | `messi-character-sheet.jpeg` | CHARACTER — the Veteran |
| @Image2 | `yamal-character-sheet.jpeg` | CHARACTER — the Challenger |
| @Image3 | `env-1-street-axis.jpeg` | LOCATION — street axis master |
| @Image4 | `env-2-side-on.jpeg` | LOCATION — side-on view |

**GENERATION 2 — "The Draw & The Prize" (Shots 8-10 of the film, 5s):**

| # | File in `assets/` | Role |
|---|---|---|
| @Image1 | `messi-character-sheet.jpeg` | CHARACTER — the Veteran |
| @Image2 | `yamal-character-sheet.jpeg` | CHARACTER — the Challenger |
| @Image3 | `env-2-side-on.jpeg` | LOCATION — side-on view |
| @Image4 | `env-5-trophy-post.png` | OBJECT — the trophy on its post |

If your Seedance build accepts more than 4 references, also attach `messi-face-reference.jpeg` / `yamal-face-reference.jpeg` last — they sharpen the eye close-ups; the prompts already work without them.

---

## B. GENERATION 1 — paste as-is

```
=== GENERATION 1: High Noon ===

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
trousers, dusty leather boots with spurs. Same person in every shot.

@Image3
The duel town, street-axis view — a sun-scorched Tabernas-style western
town: one wide sandy main street, wooden porches and sun-bleached facades
on both sides, a faded Argentina flag hanging on the left side of the
street and a faded Spain flag on the right, a whitewashed adobe church
with a bell tower closing the far end of the street, a wooden water tower
above the right rooflines, and a low weathered wooden post standing alone
at the exact center of the street. Keep this exact geometry, layout and
architecture whenever the street is seen along its axis.

@Image4
The duel town, side-on view — the same town seen from one boardwalk
straight across the street: weathered porch posts in the foreground, the
whitewashed facades and the faded flag on the far side, the church and
water tower far down the street. Keep this exact geometry and layout
whenever the street is seen from the side.

STYLE & TECHNICAL
Cinematic widescreen 2.39:1 framing. High noon: harsh vertical desert
sunlight, near-white burnt sky, visible heat shimmer. Sergio Leone
spaghetti-western color grade — burnt yellow-brown dust tones, warm
blooming highlights, dusty brown shadows, subtle 35mm film grain,
anamorphic lens character. 4K Ultra HD, sharp clarity. Natural audio
only — dry desert wind, leather creak, spur jingle, boots shifting in
sand, single church bell tolls. No music, no score, no subtitles, no
on-screen text of any kind.

Shot 1 (0:00–0:01.5) — The Veteran's Eyes
Extreme close-up filling the frame: only the eyes of the Veteran from
@Image1, hat brim shadowing the brow, sun-creased skin, dust on the
lashes. Heat shimmer ripples the air between lens and face. He gives one
slow deliberate blink, then his eyes narrow. Almost imperceptible push-in.
A single church bell tolls. Hard snap cut.

Shot 2 (0:01.5–0:02.5) — The Challenger's Eyes
Mirrored extreme close-up: only the eyes of the Challenger from @Image2,
young and fearless, light from the opposite side, a strand of golden-
tipped curl moving in the hot wind across his brow. Faint amused squint.
Heat shimmer continues. Hard snap cut on a bell toll.

Shot 3 (0:02.5–0:04) — High Noon Wide
Ground-level wide locked to the street-axis geometry of @Image3: the
Veteran (@Image1, poncho and hat) and the Challenger (@Image2, bare
curls) stand facing each other twenty paces apart on the empty sandy
street, the low wooden post midway between them, Argentina flag hanging
limp on the left, Spain flag on the right, the church bell tower closing
the frame in heat haze. A tumbleweed rolls through the extreme
foreground. Slow lateral dolly right. Dust drifts. Cut as the tumbleweed
clears frame.

Shot 4 (0:04–0:05) — The Veteran's Hand
Static low-angle extreme close-up: the Veteran's right hand from @Image1
hovering one inch above the holstered revolver grip, worn brown poncho
fringe swaying at frame edge. His fingers flex once, slowly. Leather
creaks. Dust drifts through a hard shaft of noon light. Hard snap cut.

Shot 5 (0:05–0:06) — The Challenger's Hand
Mirrored static low-angle extreme close-up: the Challenger's hand from
@Image2 above his low-slung holster, red-and-gold poncho trim at frame
edge. A single bead of sweat drops from his wrist and hits the dust in
brief slow motion. His fingers drum once against his thigh. Hard snap cut.

Shot 6 (0:06–0:07.5) — The Triello
Accelerating montage of hard snap cuts, each cut faster than the last —
half-second, quarter-second, then a few frames each: the Veteran's eyes
(@Image1) — the Challenger's eyes (@Image2) — the Veteran's hand — the
Challenger's hand — boots and spurs shifting in dust — eyes — eyes. Each
successive eye close-up punches slightly tighter. Church bell tolling
faster underneath, flags snapping once in a gust. The montage slams to
black for two frames.

Shot 7 (0:07.5–0:09) — Dead Silence
Locked-off side-on wide using the exact geometry of @Image4: both men in
full profile at opposite frame edges, the empty street between them, the
far facades and faded flag behind. All sound drops to nothing. The wind
dies — dust hangs motionless in the air, a flag frozen mid-fall, only
heat shimmer moves. Both right hands frozen an inch above their guns.
Zero camera movement. Held one beat longer than comfortable.
```

---

## C. GENERATION 2 — paste as-is

```
=== GENERATION 2: The Draw & The Prize ===

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
trousers, dusty leather boots with spurs. Same person in every shot.

@Image3
The duel town, side-on view — a sun-scorched Tabernas-style western
town seen from one boardwalk straight across the wide sandy street:
weathered porch posts in the foreground, sun-bleached facades and a
faded flag on the far side, a whitewashed adobe church with a bell tower
and a wooden water tower far down the street. Keep this exact geometry
and layout whenever the street is seen from the side.

@Image4
The FIFA World Cup trophy standing on a low weathered wooden post at the
exact center of the sandy street — solid gold, immaculate, flawless
against the cracked grey wood, the street and church falling into warm
blur behind it. Use the exact trophy shape, gold finish, green base
bands, post texture and placement from the reference. One trophy only.
No added logos or text.

STYLE & TECHNICAL
Cinematic widescreen 2.39:1 framing. High noon: harsh vertical desert
sunlight, near-white burnt sky, visible heat shimmer. Sergio Leone
spaghetti-western color grade — burnt yellow-brown dust tones, warm
blooming highlights, dusty brown shadows, subtle 35mm film grain,
anamorphic lens character. 4K Ultra HD, sharp clarity. Natural audio
only — dry desert wind, leather creak, spur jingle, boots shifting in
sand, single church bell tolls. No music, no score, no subtitles, no
on-screen text of any kind.

Shot 1 (0:00–0:02) — The Draw
Extreme slow motion, roughly 15-20% speed. Side low-angle on the Veteran
(@Image1): he draws — the brown poncho flares outward, the revolver
clears leather, his thumb rolls the hammer back, dust kicked off the
holster hanging in golden light. At the exact same arm position, match
cut to the mirrored side low-angle of the Challenger (@Image2) mid-draw,
red-and-gold trim flaring, golden-tipped curls lifting. Both barrels
rise toward level. Motion blur on the fastest part of the arm swing. Cut
on the exact frame both barrels reach level.

Shot 2 (0:02–0:03.5) — The Freeze
Side-on wide locked to the geometry of @Image3: both men fully extended
in profile at opposite frame edges, two revolvers leveled at each other
across the empty street, hammers back — and the entire world FREEZES one
frame before either trigger breaks. Dust motes suspended mid-air, a
poncho hem frozen mid-flare, the far flag stopped mid-wave. No shot is
ever fired. While the world is frozen, the camera itself drifts slowly
sideways through the frozen dust — frozen-time parallax. All sound gone
except a thin wind.

Shot 3 (0:03.5–0:05) — The Prize
Continuing the frozen moment without a cut, the camera rises and pulls
back along the street's center axis — and the FIFA World Cup trophy from
@Image4 enters the foreground, standing on its weathered wooden post at
the exact midpoint between the two frozen gunslingers, solid gold and
immaculate. A hard anamorphic lens flare blooms off the gold in the
vertical noon sun. The Veteran (@Image1) and the Challenger (@Image2)
remain frozen mid-draw in the background, perfectly symmetrical on
either side of the trophy. Hold the final frame: two men, one prize, no
winner.
```

---

## D. Assembly (edit room checklist)

1. **Sequence:** GEN 1 (9s) → GEN 2 (5s) → title card (1s). Total 15.0s.
2. **Title card (14.0-15.0s) — built in the editor, never generated:** black frame, heavy film grain, distressed western slab-serif in dusty gold stamping on in three beats — "THE GOOD." / "THE KID." / "THE TROPHY." One final bell toll. 8-frame fade to black.
3. **Letterbox:** place the 2.39:1 footage centered on a 1080×1920 vertical canvas with black bars — do this in the edit; never crop to full 9:16. Keep the picture band clear of the top 15% / bottom 20% Reels UI zones.
4. **Score:** generate the Morricone-inspired cue with the Suno prompt in [MESSI-YAMAL-DUEL-VIDEO-PLAN.md §6](MESSI-YAMAL-DUEL-VIDEO-PLAN.md); duck it to silence during GEN 1 Shot 7 (the dead-silence beat) and hit a deep sub-boom on the freeze (GEN 2, 0:02).
5. **Loop:** the black end-frame cuts back to the opening eyes — verify the loop feels seamless before exporting.
6. **Retry discipline:** if a generation drifts (wrong face, wrong town), regenerate that generation only — never fix identity in the edit. The locking blocks are verbatim-repeatable on every retry.
