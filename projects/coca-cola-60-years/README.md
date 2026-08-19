# Coca-Cola · "Same Taste. Same Love." — Production Playbook

A 20-second one-take emotional commercial: a slow 360° steadicam orbit around a couple
sharing one Coca-Cola with two straws in a diner booth; while the lens passes behind
their heads the world quietly advances from 1962 to 2026, and the couple comes back
around sixty years older, laughing the same laugh.

This playbook is the result of researching how to actually get that shot out of the
Seedance family on our platform, with special attention to the **lighting states and a
seamless transition between them** — the two things most likely to break the illusion.

## Assets

| Asset | Role |
|---|---|
| Young couple in the 1962 booth (portrait PNG) | `@Image 1` — the film's **first frame** + defines both characters, the bottle and the diner |
| Old couple in the same booth (portrait PNG) | `@Image 2` — the film's **last frame** + defines the aged characters |
| Red brand end card "Same taste. Same love." (PNG) | **Post only.** Appended in the edit for ~2s after the live-action clip. Never attached to the video generation — the clip itself must carry no on-screen text. |

Both anchor frames are portrait (~9:16). Generate with aspect `auto` (follows the start
frame). For a 16:9 TV master, first re-crop/outpaint *both* anchors to 16:9 and only
then generate — never let the model invent the wider framing on one end only.

## Generation paths (platform findings)

Platform constraints that decide the pipeline:

| Model | Max duration | Start+end frame | Max res | Notes |
|---|---|---|---|---|
| Seedance 2.5 (`seedance_2_5`, mode `omni_reference`) | **30s** | yes | 1080p | also has `video_extension` (forward/backward) |
| Seedance 2.0 (`seedance_2_0`, mode `std`) | **15s** | yes | **4K** | `genre` hint, native audio |
| Seedance 2.0 Mini | 15s | yes | 720p | drafts only |

### Path 1 — primary: one 20s generation (zero seams)

**Seedance 2.5, `omni_reference`, duration 20, 1080p, `bitrate_mode: high`,
`generate_audio: true`.** Attach: young couple = `@Image 1` (role `start_image`),
old couple = `@Image 2` (role `end_image`). Prompt: `prompt-a-single-take-20s.md`.

This is the best answer to "seamless": there is no seam at all. The whole orbit, the
whole lighting crossfade and the era change happen inside one diffusion pass, so motion
speed, grain, sun position and exposure stay physically continuous by construction.

### Path 2 — 4K master: two chained 10s generations (one hidden seam)

Seedance 2.5 tops out at 1080p. For a 4K master use **Seedance 2.0 `std`, 2×10s**, and
hide the join exactly where the film hides everything else — **behind the couple's
heads, at the peak of the window flare (~:10)**, where the frame is silhouettes + bloom
and carries almost no identity detail. Prompt + chain mechanics:
`prompt-b-4k-two-gen-chain.md`.

### Path 3 — compromise: one 15s generation on Seedance 2.0

If 2.5 underperforms on identity and you refuse a seam: compress the film to 15s in a
single 2.0 `std` pass (4K, no seam). Retime: front 1962 arc :00–:04 → :00–:03, behind
:08–:13 → :05–:09, return :13–:20 → :09–:15 (hold ≥2.5s at the end for the VO). Same
prompt A with timecodes rescaled; everything else unchanged.

### Repair tool

A take that is right but ends short (e.g. the model settles into the end frame early):
**Seedance 2.5 `video_extension`** (`extension_mode: forward` to lengthen the final
hold for the VO, `backward` to lengthen the 1962 opening) instead of re-rolling.

## The lighting design (the heart of the film)

One physical sun, three *renderings* of it. The states are **named** and used verbatim
in the prompt so the model treats them as three looks of one continuous world:

| State | Orbit position | Character of light |
|---|---|---|
| **1962 GOLD** | front arc, :00–:06 | Low late-afternoon sun slatted through venetian blinds; warm bands raking faces and Formica; bounce off the red vinyl; faded warm reversal grade — creamy highlights, soft blacks, warm reds, gentle halation. |
| **WINDOW FLARE** | behind the couple, :07–:13 | Contre-jour: the lens moves between the couple and the window; they fall into near-silhouette, rim light in their hair; the sun strikes the lens through the blind slats and a controlled bloom rises to its peak exactly when their heads fully cover the room. |
| **2026 NEGATIVE** | return arc, :13–:20 | The same sun, same elevation, same slats — rendered as clean modern color negative: neutral highlights, slightly cooler shadows, a faint cool practical spill from deep in the diner, finer grain, subtler halation. |

### Why the transition reads as seamless

1. **The sun is the constant; the grade and practicals are the variables.** Sun
   position, elevation, intensity and the slat geometry never change across the film.
   Exposure never jumps. What changes is the *film stock's response* and a whisper of
   modern ambient fill — so the eye reads one continuous afternoon, not a relight.
2. **Change is driven by camera position, not by time.** Every degree of orbit shifts
   the balance a little; the crossfade is monotonic and progressive across the whole
   back arc. There is never a frame where a switch could be pointed at.
3. **The flare is the wipe.** The bloom at the fully-behind point is a *motivated,
   in-world* highlight wash — it briefly lifts the frame, and when it settles the
   image is already in 2026 NEGATIVE. It also makes hair color unreadable at exactly
   the moment hair color changes, and (in Path 2) swallows the edit seam.
4. **Faces are off-lens for 100% of the grade shift.** The states only crossfade while
   the frame holds the backs of heads and window glare.
5. **Audio mirrors light.** The jukebox tune dissolves into modern room tone on the
   same curve as GOLD → NEGATIVE, so the ear confirms what the eye is told.

## End-frame consistency rule (changes vs the original draft prompt)

**Nothing visible in `@Image 2` may be described as changed.** The end-frame reference
shows the 2026 table with the *same* chrome jukebox selector, sugar shaker and napkin
holder, and no neon sign in the window — so two beats of the original draft contradict
the anchor and were cut:

- ~~"the chrome jukebox selector becomes a small digital menu stand"~~ — the selector
  stays. (Stronger for the brand story anyway: the diner is preserved; only the people
  aged. "Same" everywhere.)
- ~~"a neon OPEN sign now hangs in the window"~~ — dropped.

Era cues now live **only where the end frame can't see them**: the parked car outside
(1962 Chevrolet → electric SUV, glimpsed mid-orbit through the blinds), the staff at
the far end (60s waitress → young barista with a tablet), the grade, and the audio bed.
This is standard FLF practice: the last frame is a hard visual target — the prompt must
converge on it, never fight it.

## The hidden seam (Path 2 mechanics)

- **Gen 1** (:00–:10): starts on `@Image 1`, ends *holding fully behind their heads at
  flare peak, hair still dark, still 1962*. The endpoint is stated in the prompt as a
  concrete frame (FLF guidance: state the endpoint, never a mood).
- Grab the **final frame of Gen 1** at full resolution — this is the seam frame.
- **Gen 2** (:10–:20): seam frame as `start_image`, old couple as `end_image`, young
  couple attached as an identity reference only. The whitening of the hair and the set
  changes all happen *inside Gen 2* while the lens is still behind the heads — the
  seam frame itself is era-ambiguous (silhouette + bloom), which is what makes the
  join invisible.
- **Audio across the seam**: keep native audio on in both gens; in the edit, crossfade
  the two beds over ~1s centered on the cut. The prompt places a held jukebox note at
  the end of Gen 1 and a room-tone swell at the top of Gen 2 so the beds want to blend.

**Seam QC** (reject the pair if any fails): orbit direction and angular speed match
across the join; bloom intensity matches; grain/resolution match (same model + res for
both gens); no visible pop in the blinds pattern or booth geometry.

## Generation settings

| | Path 1 | Path 2 (×2) | Path 3 |
|---|---|---|---|
| model | `seedance_2_5` | `seedance_2_0` | `seedance_2_0` |
| mode | `omni_reference` | `std` | `std` |
| duration | 20 | 10 + 10 | 15 |
| resolution | 1080p | 4k | 4k |
| bitrate_mode | high | high | high |
| genre | — | drama | drama |
| generate_audio | true | true | true |
| aspect_ratio | auto | auto | auto |

## QC checklist — reject a take on any of these

1. A face visibly transforms/morphs on screen (aging must be *revealed*, never shown).
2. Any cut, dissolve, speed ramp, zoom, or the orbit stalling/reversing.
3. An exposure jump or a hard grade switch (the states must crossfade).
4. The sun moves, or the blind-slat pattern changes direction/angle between eras.
5. Bottle drift: label turning, straws changing count/side, bottle emptying or moving.
6. The final frame doesn't converge on `@Image 2` (pose, framing, hand on hand).
7. Table props change (selector/shaker/napkin holder must survive both eras).
8. Anyone looks at the lens; laughter reads posed instead of embarrassing-real.
9. VO garbled or off-tone → mute native VO and lay a post VO instead (see below).

**Rerun policy** (house practice): run the *identical* prompt 2–3 times per path and
pick; don't rewrite the prompt after a single bad roll. Only rewrite on a repeated,
specific failure — and then change one layer only (add it to `Avoid:` or sharpen one
beat), never restructure.

## Post

1. Trim any pre-roll/post-roll drift so frame 1 = `@Image 1`, final frame = `@Image 2`.
2. Path 2 only: butt-join at the seam, 1s audio crossfade, zero-frame video overlap.
3. VO ("Same taste. Same love. Coca-Cola.") — native if clean; else a warm, low,
   unhurried female VO recorded/generated in post over :17–:20. No music ever.
4. Append the red end card for ~2s after the hold; room tone continues under it.
5. Master: 1080p (Path 1) or 4K (Path 2/3); add nothing else — no titles, no logos
   over the live action, no watermark.
