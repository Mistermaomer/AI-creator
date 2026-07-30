# Source-video object swap — proven playbook

Battle-tested workflow (July 2026, the "Kotel scroll" project) for replacing ONE
object in a real source video using Seedance 2.0 with video + image references.
Six failed iterations were distilled into these rules — follow them before
improvising. When a request matches this use case (user brings a real video and
wants one object in it swapped), these rules OVERRIDE the skill's defaults.

## The rules (each one earned by a failure)

1. **Two references only**: the source video (`@Video`) + one image of the
   replacement object (`@Image 1`). A third reference (storyboard sheet, edited
   target frame) confuses reference priority and brings the original object back.
2. **Source video ≤ 9 seconds.** Trim to the essential beats before generating.
   Longer reference clips make the model less certain what to prioritize.
3. **Whole prompt under ~200 words.** Long prompts made the model satisfy half
   the instructions and revert the rest to the source — the original object
   appeared IN ADDITION to the replacement. Use the skill's compact format:
   every PART 1 field one sentence, one segment, three short shots.
4. **Never describe the removed object positively.** State it exactly twice:
   once inside [PROP] ("it completely replaces the black phone") and once in
   the Avoid list. Describing how the actor "held the phone" teaches the model
   to keep the phone.
5. **The replacement stays physically connected to the actor**: "her hands hold
   only this roll, start to finish". Without this, the new object detaches,
   floats away, or lands as a separate item while the original returns.
6. **Concrete physical targets, not adjectives**: "unrolls forward 30 meters …
   until its far end touches the base of the Wall", "lying completely flat on
   the stone". "Very long" produced 2-3 meters; "30 meters, touches the Wall"
   delivered.
7. **The Avoid list names the exact failures already observed**, not generic
   fears: "any phone or black object in her hands at any moment, stiff
   cardboard-like paper standing upright, a short trail ending mid-plaza".
8. **Rerun the identical prompt 2-3 times.** Variance between identical runs is
   large; the winning take was a rerun of an unchanged prompt.
9. **Generate with `Audio: none`**, then lay the original audio track back in
   editing (CapCut) — mouth timing is preserved, so sync is trivial.

## Winning prompt (worked example — adapt the bracketed specifics per project)

```
PART 1 · Keep it locked in for one entire scene.

[CHAR A]: @Video The woman from the source video — face, hair, white outfit,
beige bag, movements and timing unchanged.

[PROP]: @Image 1 A giant megillah-style parchment note — thick roll of aged
tan parchment, dense handwritten Hebrew script, ragged edges. It completely
replaces the black phone; her hands hold only this roll, start to finish.

[LOCATION]: @Video The Western Wall plaza at night, unchanged.

[LOOK]: Match @Video exactly — handheld vertical night footage, warm
floodlight, natural film grain.
Avoid: any phone or black object in her hands at any moment, stiff
cardboard-like paper standing upright, a short trail ending mid-plaza, CGI
sheen, altering her face or the background.

CONTINUITY RULES (apply to every shot):

Pace / tempo: Source timing, one continuous take, no cuts.

Weight & consequence: The loose end drops, thuds and unrolls along the ground.

Scale of motion: Real and grounded; only the unroll is comically long.

What to cut to: Nothing.

Progression over the scene: Casual answer → absurd reveal → trail reaches the Wall.

Recurring camera motif: The source video's own handheld pan.

═ PART 2 · SEGMENT (the 3 shots — fill these in) ═

SEGMENT 01 — :00 – :09 · THE NOTE (one continuous take)

Shot A (mid, ~2s): She answers the camera open-armed and opens her small bag,
identical to the source. [LOOK]. Audio: none.

Shot B (close-mid, ~2s): Her hands lift [PROP] straight out of the bag — only
aged tan parchment in her hands, nothing black anywhere; its loose end drops
and starts unrolling. [LOOK]. Audio: none.

Shot C (wide, ~5s): The soft parchment ribbon unrolls forward 30 meters,
lying completely flat on the stone, all the way across the plaza until its
far end touches the base of the Wall; she turns after it, then stands
half-turned holding the roll, smiling back, the full-length trail flat on the
ground until the last frame. [LOOK]. Audio: none.
```

## Run settings

Attach the source video FIRST (= `@Video`), the object image SECOND
(= `@Image 1`). Duration = source length (e.g. 9s), aspect 9:16 for vertical
phone footage, mode `std`. Convert MOV→MP4 by remux (`ffmpeg -c copy`) — never
re-encode the source.

## Failure modes observed (diagnose new failures against these first)

| Symptom | Cause → fix |
|---|---|
| Original object appears IN ADDITION to the replacement | Prompt too long / too many references → shorten, drop to 2 refs |
| Replacement flies or floats away on its own | Missing "never leaves her hands" connection rule |
| Physical consequence too small (short trail) | No concrete distance target → give meters + a named endpoint |
| Original object hides in fingers behind the replacement | Strengthen the reveal beat: "nothing black anywhere" inside that shot |
| Paper/cloth behaves stiff like cardboard | Add "soft", "lying completely flat" to the consequence shot |

## Platform notes (Higgsfield / Seedance 2.0, July 2026)

- The platform has NO true video-edit mode: an attached video is a
  `video_references` guide (motion/identity), and the model re-generates every
  frame. "Reproduce exactly" is imitation, not editing — plan prompts
  accordingly.
- `start_image` / `end_image` roles exist as hard pixel anchors; a fallback
  lever if a swap refuses to hold in the final tableau.
- The model may invent close-up beats not present in the source. Often an
  upgrade — review before rejecting.
