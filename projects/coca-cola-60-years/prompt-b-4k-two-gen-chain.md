# Prompt B — 4K master: two chained 10s generations (hidden seam at :10)

Seedance 2.5 caps at 1080p; this path gets a **4K** master from Seedance 2.0 by
splitting the take into two 10s generations joined **behind the couple's heads at
flare peak**, where the frame is silhouette + bloom and the join cannot be seen.

**Both generations:** Seedance 2.0 · mode `std` · duration **10** · **4k** ·
`bitrate_mode: high` · `genre: drama` · `generate_audio: true` · aspect `auto`.
Same model + resolution for both, or the grain won't match across the seam.

| | Attach in this order | Roles |
|---|---|---|
| **Gen 1** (:00–:10) | 1) young couple → `@Image 1` · 2) old couple → `@Image 2` | `@Image 1` = **start_image** · `@Image 2` = image reference only |
| **Gen 2** (:10–:20) | 1) young couple → `@Image 1` · 2) old couple → `@Image 2` · 3) final frame of Gen 1 → `@Image 3` | `@Image 3` = **start_image** · `@Image 2` = **end_image** · `@Image 1` = identity reference only |

**Between the gens:** grab the final frame of Gen 1 at full resolution (platform frame
grab). Verify it before continuing: lens fully behind both heads, flare at peak, hair
still dark, orbit still moving clockwise. If not — re-roll Gen 1; never fix it in Gen 2.

**In the edit:** butt-join the clips at the seam (zero overlap), crossfade the two
audio beds over ~1s centered on the cut. Seam QC in `README.md`.

PART 1 is identical to Prompt A and is reused verbatim in both generations. The only
changes are the endpoint line at the end of Shot 1C (Gen 1) and the opening line of
Shot 2A (Gen 2).

## Gen 1 prompt (:00 – :10)

```
PART 1 · Keep it locked in for one entire scene.

[CHAR A]: @Image 1 A young woman in her early twenties, petite, fair skin with a natural flush, short dark curled hair with flyaway strands, red lipstick, slightly uneven teeth. Pale yellow knit cardigan. She laughs with her whole body — eyes closing, shoulders shaking, the back of her hand covering her mouth. In @Image 2 she is the same woman about sixty years later: short white curls, the same cardigan and red lipstick, the same closed-eyes laugh, finely lined hands.

[CHAR B]: @Image 1 A young man of about twenty, lean, dark hair combed back, light canvas jacket open over a white t-shirt. He grins first, then laughs out loud with his head back, and wipes the corner of his eye with a knuckle. In @Image 2 he is the same man about sixty years later: white hair combed back the same way, the same jacket and t-shirt, deeper lines, the same grin aimed at her.

[PROP]: @Image 1 One glass contour Coca-Cola bottle on the table between them, red-and-white label facing the lens, two white paper straws leaning toward her, condensation beads and fingerprints on the glass. Identical in every frame of the film and in @Image 2 — it never moves, never empties, the label never turns.

[LOCATION]: @Image 1 A 1962 American roadside diner booth — red vinyl bench, cream Formica table with a chrome napkin holder, a glass sugar shaker and a chrome tabletop jukebox selector; venetian blinds behind the couple slicing low afternoon sun into warm slats; a waitress in a 1960s uniform at the far end, a 1962 Chevrolet parked outside the window. In @Image 2 the same booth six decades later, lovingly preserved: same bench, same table, same chrome pieces in the same spots, only the vinyl a little more creased.

[LOOK]: Shot on 35mm film, hyper-realistic, photographic realism with fine natural grain and true skin texture and imperfection — pores, fine lines, flyaway hairs, no beauty retouching. Shallow depth of field: the couple sharp, the diner falling softly out of focus. Natural window light only — one low late-afternoon sun through venetian blinds, soft bounce fill off the table, gentle halation on highlights. Three lighting states, blended only by camera position, never by a visible switch: 1962 GOLD (faded warm reversal — creamy highlights, soft blacks, warm reds) on the opening front arc; WINDOW FLARE (contre-jour — the couple near-silhouette, rim light in their hair, the sun striking the lens through the blind slats, a controlled bloom) while the lens is behind them; 2026 NEGATIVE (clean modern color negative — neutral highlights, slightly cooler shadows, a faint cool practical spill from deep in the room, finer grain) on the return arc. The sun itself never moves and exposure never jumps. A real film still, not a render.
Avoid: CGI sheen, plastic smooth skin, glowing eyes, neon VFX, video-game look, cuts, dissolves, speed ramps, zooms, exposure jumps, hard grade switches, faces morphing on screen, on-screen text.

CONTINUITY RULES (apply to every shot — fill with what's constant for this project):

Pace / tempo: One slow, constant-speed steadicam orbit at table height — clockwise, one full 360° circle over the whole film, only a faint organic sway; unhurried from first frame to last.

Weight & consequence: Fully physical — the vinyl creaks as they lean, her swat lands on his sleeve, the straws bend at their lips, condensation stays beaded on the bottle, the sun slats rake across shoulders and Formica as the lens moves.

Scale of motion: Small, human, continuous — leans, shoulder shakes, a forehead bump, a thumb over knuckles; nobody ever looks at the lens.

What to cut to: Nothing — one unbroken take; shot lines A/B/C are consecutive phases of the same continuous move and must join invisibly mid-motion.

Progression over the scene: The film opens exactly on @Image 1 and closes exactly on @Image 2. All change happens only while the lens is behind the couple's heads: the light crossfades 1962 GOLD → WINDOW FLARE → 2026 NEGATIVE, the Chevrolet outside becomes a parked electric SUV, the waitress becomes a young barista with a tablet, the jukebox tune dissolves into quiet modern room tone — and the couple is revealed already aged as the lens comes back around. Faces never transform on screen. The booth, the table, the chrome pieces and [PROP] never change.

Recurring camera motif: The orbit is the film — one continuous clockwise circle at table height, held for all 20 seconds; it never stops, never cuts, never zooms.

═ PART 2 · SEGMENT (the 3 shots — fill these in) ═

SEGMENT 01 — :00 – :10 · 1962 GOLD

Shot 1A (front, static easing into tracking, ~4s): Open locked on @Image 1. [CHAR A] laughs through her nose with both straws of [PROP] at her lips, snorts, pulls back, covers her mouth with the back of her hand, shoulders shaking; [CHAR B] grins, then laughs out loud with his head back and wipes the corner of his eye with a knuckle; she swats his upper arm once; they lean back in and their foreheads bump. The camera eases off its mark and begins the slow clockwise orbit. Lighting state 1962 GOLD — warm slat bands across their faces and [LOCATION]'s table. [LOOK]. Audio: a muffled jukebox tune from the far end, her snort and laugh, his laugh, straws in the glass bottle, a dish set down; no dialogue.

Shot 1B (tracking profile, ~3s): Continuous same move, no cut — the lens arcs past [CHAR A]'s side toward the window; the couple in profile leaning on each other, laughter settling into giggles; through the blinds the 1962 Chevrolet sits at the curb in the sun, the waitress carries a tray across the far end of [LOCATION]. The warm slat bands slide slowly across the booth as the lens travels. [LOOK]. Audio: giggles, the jukebox, a coffee cup set on a saucer.

Shot 1C (tracking behind, ~3s): Continuous same move, no cut — the lens slides in between the couple and the window, their heads and shoulders filling the frame; lighting state crossfades into WINDOW FLARE: they fall into near-silhouette, rim light in her dark curls and his combed-back hair, the low sun strikes the lens through the blind slats and the bloom rises toward its peak as their heads fully cover the room. End the clip holding exactly here — lens fully behind both heads, flare at its peak, still moving clockwise at the same speed, hair still dark, still 1962; @Image 2 is the film's eventual final state and is NOT reached in this clip. [LOOK]. Audio: giggles softening under one jukebox note held slightly too long, room tone swelling underneath.
```

## Gen 2 prompt (:10 – :20)

```
PART 1 · Keep it locked in for one entire scene.

[CHAR A]: @Image 1 A young woman in her early twenties, petite, fair skin with a natural flush, short dark curled hair with flyaway strands, red lipstick, slightly uneven teeth. Pale yellow knit cardigan. She laughs with her whole body — eyes closing, shoulders shaking, the back of her hand covering her mouth. In @Image 2 she is the same woman about sixty years later: short white curls, the same cardigan and red lipstick, the same closed-eyes laugh, finely lined hands.

[CHAR B]: @Image 1 A young man of about twenty, lean, dark hair combed back, light canvas jacket open over a white t-shirt. He grins first, then laughs out loud with his head back, and wipes the corner of his eye with a knuckle. In @Image 2 he is the same man about sixty years later: white hair combed back the same way, the same jacket and t-shirt, deeper lines, the same grin aimed at her.

[PROP]: @Image 1 One glass contour Coca-Cola bottle on the table between them, red-and-white label facing the lens, two white paper straws leaning toward her, condensation beads and fingerprints on the glass. Identical in every frame of the film and in @Image 2 — it never moves, never empties, the label never turns.

[LOCATION]: @Image 1 A 1962 American roadside diner booth — red vinyl bench, cream Formica table with a chrome napkin holder, a glass sugar shaker and a chrome tabletop jukebox selector; venetian blinds behind the couple slicing low afternoon sun into warm slats; a waitress in a 1960s uniform at the far end, a 1962 Chevrolet parked outside the window. In @Image 2 the same booth six decades later, lovingly preserved: same bench, same table, same chrome pieces in the same spots, only the vinyl a little more creased.

[LOOK]: Shot on 35mm film, hyper-realistic, photographic realism with fine natural grain and true skin texture and imperfection — pores, fine lines, flyaway hairs, no beauty retouching. Shallow depth of field: the couple sharp, the diner falling softly out of focus. Natural window light only — one low late-afternoon sun through venetian blinds, soft bounce fill off the table, gentle halation on highlights. Three lighting states, blended only by camera position, never by a visible switch: 1962 GOLD (faded warm reversal — creamy highlights, soft blacks, warm reds) on the opening front arc; WINDOW FLARE (contre-jour — the couple near-silhouette, rim light in their hair, the sun striking the lens through the blind slats, a controlled bloom) while the lens is behind them; 2026 NEGATIVE (clean modern color negative — neutral highlights, slightly cooler shadows, a faint cool practical spill from deep in the room, finer grain) on the return arc. The sun itself never moves and exposure never jumps. A real film still, not a render.
Avoid: CGI sheen, plastic smooth skin, glowing eyes, neon VFX, video-game look, cuts, dissolves, speed ramps, zooms, exposure jumps, hard grade switches, faces morphing on screen, on-screen text.

CONTINUITY RULES (apply to every shot — fill with what's constant for this project):

Pace / tempo: One slow, constant-speed steadicam orbit at table height — clockwise, one full 360° circle over the whole film, only a faint organic sway; unhurried from first frame to last.

Weight & consequence: Fully physical — the vinyl creaks as they lean, her swat lands on his sleeve, the straws bend at their lips, condensation stays beaded on the bottle, the sun slats rake across shoulders and Formica as the lens moves.

Scale of motion: Small, human, continuous — leans, shoulder shakes, a forehead bump, a thumb over knuckles; nobody ever looks at the lens.

What to cut to: Nothing — one unbroken take; shot lines A/B/C are consecutive phases of the same continuous move and must join invisibly mid-motion.

Progression over the scene: The film opens exactly on @Image 1 and closes exactly on @Image 2. All change happens only while the lens is behind the couple's heads: the light crossfades 1962 GOLD → WINDOW FLARE → 2026 NEGATIVE, the Chevrolet outside becomes a parked electric SUV, the waitress becomes a young barista with a tablet, the jukebox tune dissolves into quiet modern room tone — and the couple is revealed already aged as the lens comes back around. Faces never transform on screen. The booth, the table, the chrome pieces and [PROP] never change.

Recurring camera motif: The orbit is the film — one continuous clockwise circle at table height, held for all 20 seconds; it never stops, never cuts, never zooms.

═ PART 2 · SEGMENT (the 3 shots — fill these in) ═

SEGMENT 02 — :10 – :20 · 2026 NEGATIVE

Shot 2A (tracking behind, ~3s): Open exactly on @Image 3 — the lens fully behind the couple's heads at flare peak — and continue the same clockwise orbit at the same speed, no cut. While their faces are hidden, [LOCATION] quietly advances sixty years behind them: the Chevrolet outside is now a parked electric SUV, the waitress is now a young barista with a tablet, the red vinyl shows worn creases; the flare settles and the light resolves into 2026 NEGATIVE — same sun, same slats, cleaner neutral highlights, a faint cool spill from deep in the room. Her curls seen from behind are already white, his hair already white, her hand on the table already finely lined. [LOOK]. Audio: the jukebox tune dissolves into quiet modern room tone, a phone buzzing somewhere far away, a distant espresso machine.

Shot 2B (tracking profile, ~3s): Continuous same move, no cut — the lens arcs past [CHAR B]'s side and comes around toward the front; the aged couple still laughing softly, the same lean, his hand now under hers on the table beside [PROP]; he wipes the corner of his eye again with a knuckle. 2026 NEGATIVE holds; the warm slat bands unchanged. [LOOK]. Audio: her soft laugh, the straws, the quiet diner.

Shot 2C (front, settling to static, ~4s): Continuous same move, no cut — the lens settles into the exact framing of @Image 2 and locks off: [CHAR A] laughs with her eyes closed at the straws of [PROP], [CHAR B] grins at her and does not look away, her hand rests on his, her thumb crosses his knuckles once; hold perfectly still to the end. [LOOK]. Audio: over the hold a warm, low, unhurried female voice-over, close-miked, no music: "Same taste. Same love. Coca-Cola." Then room tone.
```
