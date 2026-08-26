# Vault Lessons — Seedance 2 craft rules distilled from the EL COLOGNE Prompt Vault

Source: "EL COLOGNE — Prompt Vault", a Seedance 2.0-compatible library of 150
single-scene setups across 17 categories, provided by the user. This file is
the distilled craft knowledge; the full setups live in `vault-library.md`.
These rules apply to every shot line written in the house format, and they
define the standalone single-paragraph format used when a brief has no
reference images.

## 1. Seedance 2.0 clause order

Every single-scene prompt is written in this order:

**subject & action → camera move & shot size → lens → lighting → film stock /
grade → performance cues → sound cue**

Not every prompt needs every clause, but the clauses that appear keep this
order. In practice the vault often fuses the first two ("Locked 50mm looking
out the glass of a mountain cable car the second the support cable snaps"),
then layers lens/light/grade, and always lands on performance and sound last.

**Multi-shot prompts inside one paragraph** use the literal connective
`Lens switches to:` — it changes camera/framing **without breaking the
environment or continuity**. Example (three-shot cold open): "Shot 1: extreme
wide — … Lens switches to: medium — … Lens switches to: close — …". Use it
whenever one prompt must carry more than one framing.

## 2. The negative-prompt system

Negatives are pasted into Seedance's dedicated negative field, not mixed into
the prompt. The vault uses one canonical base list plus three conditional
extensions:

**BASE (verbatim, 11 terms):**
`deformed bodies, extra limbs, morphing characters, warped faces,
stutter-stepping, sliding feet, clipping through objects, floating weightless
drift, on-screen text, watermarks, subtitles`

**Extensions — append only when the scene contains the risk:**
- `unnatural liquid physics` — any water, pour, splash, rain-on-lens, underwater.
- `anatomically wrong animals` — any animal (birds, whale, horses, wildebeest).
- `off-model frames` — anime / stylized characters (keeps them on-model).

**When to include a negative at all:** only when the scene has
character-motion or physics risk. 107 of the 150 vault setups carry **no
negative** — every static tableau, lens move, light study, dialogue two-shot,
establishing shot, and product orbit runs clean. The negative is a targeted
tool for running/falling/fighting bodies, crowds, animals, liquids, and
stylized characters — not a ritual to paste everywhere.

## 3. The stabilizer sentence

Motion-heavy prompts close with this exact sentence:

`Single continuous take; characters stay consistent and singular; grounded,
stable physics throughout.`

Variant when the paragraph itself writes framing changes:
`Single continuous take unless a lens switch is written; characters stay
consistent and singular; grounded, stable physics throughout.`

It does three jobs at once: forbids cuts, forbids character duplication/drift,
and forbids floaty physics. Same rule as the negatives: action, sports, and
elemental scenes get it; static and lens-grammar scenes don't need it.

## 4. Twelve writing techniques (used across all 150 setups)

1. **Name the lens in mm and say what it buys.** "65mm, warm falloff into pure
   black corners" · "135mm, compressed perspective" · "24mm locked so the world
   drowns around a stable frame". The mm is always doing something.
2. **The camera is a rig, not an adjective.** Instead of "dynamic shot":
   "camera bolted to the edge of a subway platform", "hood-mounted through the
   windshield", "Snorricam rig locked to [SUBJECT]'s chest", "cable-cam dive
   from the rafters", "camera hard-mounted at the bow", "dash-mounted",
   "probe-lens macro", "35mm housing" (underwater). A physical mount implies
   consistent, realistic motion.
3. **Physics vocabulary sells weight.** "real weight on every step", "real
   mass, real gravity", "pure structural failure weight", "forty tons rise to
   a brief apex … then the body drops under its own weight". Describe what
   mass does, and the model animates mass.
4. **Write durations into the action.** "holds for three suspended seconds",
   "a full thirty seconds of continuous movement", "over a full minute the
   door drifts open a single inch", "the reflection remains for one full extra
   second". Timing words choreograph pacing inside the clip.
5. **Light sources are named objects, never moods.** One hanging bulb, a
   pull-string bulb, one candle, sodium vapor streetlight, green-tinted
   fluorescent tubes with one strobing fixture, stained glass, dashboard glow,
   projector bounce, under-cabinet practicals, twin green entrance lamps. The
   fixture gives the model color, direction, and falloff for free.
6. **End on a thesis sentence** that states the emotional mechanism: "The
   distance itself is the argument." · "The process is the entire story." ·
   "The composition is the story." · "The format's flaws doing the haunting."
   · "The house introduced as a character with intentions." One line telling
   the model what the shot is *about*.
7. **Sound by subtraction.** The sound cue is usually what's absent plus one
   tiny presence: "No score, only the faint hum of the bulb." · "Held silence,
   only the sound of water against the hull." · "Only wind."
8. **One quoted line of dialogue, maximum.** Dialogue scenes carry a single
   verbatim quote ("You have until the next car leaves.") and let silence,
   distance, and posture do the rest. Never write exchanges.
9. **Script micro-performance like stage directions.** "eyes drop to their own
   hands for the hardest admission, then climb back up, wet but not crying" ·
   "the first three seconds are self-conscious; then the face settles" ·
   "hands begin to fidget only on the second sentence". Beat-level directions,
   not emotion labels.
10. **Scale by recalibration, not numbers.** "surface details resolving from
    texture into canyons into cities of machinery, scale recalibrating three
    times" · "starts tight enough to see chalked hands, then pulls out until
    the climber is a speck". Nested reveals read as scale.
11. **Restraint instructions prevent AI melodrama.** "No sting, no zoom,
    nothing underlined." · "No camera move, no sound design sting." ·
    "Restraint over melodrama." Say explicitly what NOT to dramatize.
12. **Placeholders in brackets** keep setups reusable: `[SUBJECT]`,
    `[SUBJECT A]/[SUBJECT B]`, `[CHARACTER]`, `[PRODUCT]`, `[ARTIST]`,
    `[PILOT]`, `[FIGHTER]`, `[BAKER]`, `[CRAFT]`. In house-format projects
    these map onto the `@Image` anchors.

## 5. Category playbook — 17 scene grammars

Each vault category is a technique. When a brief matches one, open that
section of `vault-library.md` and adapt a proven setup.

- **Kinetic Force** (action): a *locked or physically mounted* camera against
  large-scale structural failure — cable snap, deck shear, scaffold peel,
  flood. The frame stays stable while the world fails; always BASE negative +
  stabilizer. Near-miss timing written in seconds.
- **Stylized Worlds** (anime & graphic): name the medium's own devices — soft
  bloom, painted highlight rings in eyes, hand-drawn speed lines, smear
  frames, impact frames flashing white, limited palettes ("black, white, and
  one blood-red accent"), silhouettes on a backlit screen. Add `off-model
  frames` to the negative.
- **Lens Grammar** (camera language): the move IS the story, one device per
  shot — slow 30-second dolly, dolly zoom (vertigo), crash zoom, 360° orbit,
  whip-pan match cut across locations, crane reveal from hands to valley,
  Snorricam. Usually no negative needed.
- **Product Cinema**: perfect level orbit + a light sweeping in sync;
  1000fps high-speed (shatter crowns, pour crowns, condensation racing);
  probe-lens macro across food ("appetite engineered through texture");
  "museum-grade stillness", "dust-free". Liquids → add `unnatural liquid
  physics`.
- **Spoken Frames** (dialogue): static two-shots where blocking carries
  meaning — "three meters away", "the distance between them is the shot". One
  quoted line, long held silence, named practical light. No cutting.
- **Observational** (documentary): the camera keeps "respectful distance",
  "never in the way"; process as narrative ("no interview, no voice-over,
  only the work"); portrait series with identical framing and a written
  settle-beat ("the first three seconds are self-conscious; then the face
  settles").
- **World Entry** (establishing): one frame that sets the genre contract —
  town waking, diner at 2AM, storm manor, precinct in snow, the one lit
  window. A slow push or track; the location "introduced as a character".
- **Genre Texture** (format emulation): impersonate a *capture format* and
  its flaws — 16mm grain/gate weave/focus hunting, 300mm surveillance breathing
  with heat haze, found-footage night vision with REC indicator, autofocus
  hunts and clipping mic. The flaws are the aesthetic.
- **Dread Systems** (horror by restraint): violate memorized geometry between
  light cycles (the chair closer each time the bulb comes back on); delayed
  reflections; rack focus to a figure that's gone on the return; movement
  "slower than perception, verifiable only against the frame edge". Never a
  sting; the viewer discovers it.
- **Light & Mood**: single-source studies — one candle (Rembrandt/chiaroscuro,
  "like an 18th-century oil painting"), sodium half-face through rain glass,
  cycling neon on wet skin, lightning strobe as shutter ("each flash is a
  frame of information; the darkness between is the dread"), projector bounce
  on faces.
- **Solo Performance**: one actor, one move (slow dolly/push or locked), and
  scripted micro-beats; the camera lands exactly on the final line; "the held
  gaze after the final word is longer than the speech itself".
- **Track Visuals** (music video): one-take orbit while the production builds
  itself around the artist; strobe freeze-frames on the kick drum ("motion
  exists only as the difference between frozen frames"); beat-synced infinite
  zoom through nested worlds; loopable lo-fi rooms where small things repeat
  wrongly.
- **Elemental** (nature): extreme lens choices matched to phenomenon (400mm
  whale breach from a boat, 21mm locked supercell time-lapse, 100mm dew-web
  macro); mass and consequence written out; add `anatomically wrong animals`
  for any creature, `unnatural liquid physics` for water.
- **Subjective View** (POV): first-person grammar — a hand enters the bottom
  of frame; blinks, focus-hunting, "natural micro-sway", the involuntary
  scan-and-settle of real eyes; emotional POV beats (the look-back rhythm when
  followed, vision tightening on a tapping pen).
- **Speculative** (sci-fi): sell the impossible with mundane behavior — the
  pilot "takes a sip of coffee mid-jump", "the sprinklers keep turning" under
  the sky-tear; lived-in analog cockpits; scale recalibration on
  megastructures; "the doubled shadows are the world-building; nothing needs
  explaining."
- **Athletic Force** (sports): sport-authentic rigs — water housing inside the
  barrel, 15mm fisheye follow in the bowl, cable-cam arena dive, cabin-locked
  rally 24mm, underwater housing for the flip turn; bodies at real effort
  ("form disintegrating, gait gone asymmetric"). BASE negative + stabilizer.
- **Temporal Bridges** (transitions & time): match dissolves locked on motion
  + palette (match flame → desert sunrise); locked frame while seasons/decades
  dissolve past one unmoving object; invisible cut through window glass with a
  cool-to-tungsten light handoff; archival inserts (damaged 4:3 newsreel);
  dream dissolve chains; `Lens switches to:` cold opens; map-travel that
  dissolves into the real place.

## 6. Reliability stars — scoring scene difficulty

The vault rates *scene difficulty, not prompt quality*:
- ★★★ simple and dependable
- ★★☆ some complexity — may take a few attempts
- ★☆☆ complex motion or physics — most rewarding when it lands

Use the same scale when planning generations: complex liquids, many
interacting characters, animals, and fast full-body physics are ★☆☆-type asks
— tell the user to expect a few reruns of the identical prompt, and load the
full negative + stabilizer. (Everything currently in `vault-library.md` is a
★★★ setup — that's why they're safe to adapt.)

## 7. How this composes with the house format

- **Reference-image projects** (the default flow): keep `template.md`'s PART 1
  + SEGMENT structure as the lock. Apply these lessons *inside* each shot
  line — clause order (§1), rig-not-adjective camera, named light sources,
  mm-with-purpose, physics vocabulary, sound-by-subtraction, micro-performance
  beats. Category grammars (§5) shape what the three shots of a segment do.
- **No reference images + single scene**: deliver a vault-style standalone
  paragraph (order per §1, one fenced code block), plus a separate
  `Negative prompt:` line per §2 when the scene carries motion/character risk,
  closing with the stabilizer sentence (§3) when motion-heavy.
- The house LOOK block and the vault's grade clauses serve the same slot; when
  adapting a vault setup into house format, the setup's grade words (e.g.
  "Kodak-era warm fades and grain", "desaturated jade palette") merge into
  `[LOOK]` rather than duplicating it.
