# Character Sheets: The Veteran & The Challenger

**Ready-to-paste ChatGPT image prompts that turn the two face references in `assets/` into 3-angle western character turnaround sheets — the identity anchors for every scene generation in [The Duel](MESSI-YAMAL-DUEL-VIDEO-PLAN.md).**

> תקציר בעברית: שני פרומפטים מוכנים להדבקה ב-ChatGPT. כל פרומפט, יחד עם תמונת הפנים מ-`assets/`, מפיק character sheet אחד — תמונה אחת עם 3 זוויות גוף מלא (חזית, פרופיל, 3/4 אחורי) של הדמות בתלבושת המערבון המלאה שלה. את ה-sheets האלה מצרפים אחר כך כרפרנסים לכל הנפקת סצנה מתוכנית הווידאו, כדי שהפנים והבגדים יישארו זהים בכל שוט.

---

## A. How to Use

1. Open a **fresh ChatGPT conversation** per character (a clean context keeps the likeness from drifting).
2. Attach the character's face reference from this repo:
   - Messi → `assets/messi-face-reference.jpeg`
   - Yamal → `assets/yamal-face-reference.jpeg`
3. Paste the character's **Master Prompt** from Section C below. Generate.
4. Inspect the result against the checklist in Section C. If an angle is off, reply with a targeted fix ("regenerate, keep everything identical but make the side profile a true 90° profile") rather than re-rolling from scratch.
5. The approved sheets live in this repo (both generated 2026-07-19 and QC-approved):
   - `assets/messi-character-sheet.jpeg` ✓ (5504×3072 — front / right profile / back, full wardrobe incl. hat, serape stripes and holster)
   - `assets/yamal-character-sheet.jpeg` ✓ (5504×3072 — front / profile / back, red-and-gold trimmed poncho, golden-tipped curls, holster and spurs)

   QC note: both sheets came out with a full back view rather than a 3/4 back — equally usable as a turnaround reference.
6. These two sheets (plus the face references) are what you attach when generating the scenes — see Section D.

**Likeness note.** ChatGPT may decline photorealistic depictions of real public figures. If it refuses, use the **Fallback Prompt** at the end of each character block — it drops the name and instead anchors identity purely to "the man in the attached photo." If it still refuses, add: "a fictional western movie character merely inspired by the attached photo" — the costume and framing stay identical, so the sheets remain usable as scene references.

---

## B. Wardrobe Locks (canonical — must match every scene)

These specs are copied from the video plan's *Wardrobe & characters* section. Never paraphrase them in prompts; consistency comes from repetition.

**THE VETERAN (Messi)**
- Worn brown leather poncho with a faint sky-blue-and-white striped serape pattern (Argentina echo)
- Dark flat-brimmed western hat, worn low over the eyes
- Aged leather gun belt with holstered period revolver, right hip
- Dark canvas trousers, dusty leather riding boots with spurs
- Short grey-flecked beard, calm heavy-lidded eyes, sun-weathered skin
- Desert dust on shoulders and boots

**THE CHALLENGER (Yamal)**
- Dusty poncho with red-and-gold trim (Spain echo)
- No hat — dark curly hair with dyed golden tips fully visible
- Newer leather gun belt worn low on the hips, holstered period revolver, right hip
- Dark trousers, leather boots with spurs
- Young sharp features, fearless eyes, a faint defiant grin
- Desert dust on hem and boots

---

## C. Master Prompts

### C.1 — THE VETERAN (attach `assets/messi-face-reference.jpeg`)

```
Create a photorealistic character turnaround sheet as ONE single image.

CHARACTER: Lionel Messi as a weathered veteran gunslinger in a Sergio
Leone-style spaghetti western. His face must precisely match the attached
photo — same facial structure, eyes, nose, short grey-flecked beard, and
skin tone — aged naturally into a sun-weathered frontier gunfighter.

THE SHEET: exactly three full-body views of this same character standing
side by side against a plain light sand-grey studio background, soft even
studio lighting, no shadows on the backdrop:
1. LEFT — full front view, arms relaxed at his sides, right hand near the
   holster
2. CENTER — true 90-degree right-side profile view
3. RIGHT — three-quarter back view (seen from behind at roughly 45
   degrees), showing the back of the poncho, hat and gun belt

Identical height, proportions, costume and grooming in all three views.

WARDROBE (identical in all three views):
- Worn brown leather poncho with a faint sky-blue-and-white striped serape
  pattern
- Dark flat-brimmed western hat, worn low over the eyes
- Aged leather gun belt with a holstered period revolver on the right hip
- Dark canvas trousers, dusty leather riding boots with spurs
- Desert dust on shoulders and boots

STYLE: photorealistic cinematic western film character sheet, warm desert
color grade (burnt yellow-brown tones, warm highlights), subtle 35mm film
grain. Landscape 3:2 aspect ratio.

DO NOT include any text, labels, captions, logos, borders, or watermarks
anywhere in the image.
```

**Fallback (if likeness is refused):** replace the CHARACTER paragraph with:

```
CHARACTER: the man in the attached photo as a weathered veteran gunslinger
in a Sergio Leone-style spaghetti western. His face must precisely match
the attached photo — same facial structure, eyes, nose, short grey-flecked
beard, and skin tone.
```

**Approval checklist:** face reads as the reference from all 3 angles · hat + poncho + serape stripes present in all views · revolver on right hip · same height in all views · clean neutral background · zero text.

### C.2 — THE CHALLENGER (attach `assets/yamal-face-reference.jpeg`)

```
Create a photorealistic character turnaround sheet as ONE single image.

CHARACTER: Lamine Yamal as a fearless teenage challenger gunslinger in a
Sergio Leone-style spaghetti western. His face must precisely match the
attached photo — same facial structure, eyes, dark curly hair with dyed
golden tips, and skin tone — with a faint defiant grin.

THE SHEET: exactly three full-body views of this same character standing
side by side against a plain light sand-grey studio background, soft even
studio lighting, no shadows on the backdrop:
1. LEFT — full front view, arms relaxed at his sides, right hand near the
   holster
2. CENTER — true 90-degree right-side profile view
3. RIGHT — three-quarter back view (seen from behind at roughly 45
   degrees), showing the back of the poncho, his curly hair and gun belt

Identical height, proportions, costume and grooming in all three views.

WARDROBE (identical in all three views):
- Dusty poncho with red-and-gold trim
- No hat — dark curly hair with golden tips fully visible
- Newer leather gun belt worn low on the hips, holstered period revolver
  on the right hip
- Dark trousers, leather boots with spurs
- Desert dust on the poncho hem and boots

STYLE: photorealistic cinematic western film character sheet, warm desert
color grade (burnt yellow-brown tones, warm highlights), subtle 35mm film
grain. Landscape 3:2 aspect ratio.

DO NOT include any text, labels, captions, logos, borders, or watermarks
anywhere in the image.
```

**Fallback (if likeness is refused):** replace the CHARACTER paragraph with:

```
CHARACTER: the young man in the attached photo as a fearless teenage
challenger gunslinger in a Sergio Leone-style spaghetti western. His face
must precisely match the attached photo — same facial structure, eyes,
dark curly hair with dyed golden tips, and skin tone.
```

**Approval checklist:** face reads as the reference from all 3 angles · NO hat, curls with golden tips visible · red-and-gold trim on poncho in all views · revolver on right hip · same height in all views · clean neutral background · zero text.

---

## D. Scene-Generation Handoff

The full shot-by-shot attachment table (which sheets + which environment plates per shot) is the **Per-Shot Reference Map** in [MESSI-YAMAL-ENVIRONMENT-PLATES.md §D](MESSI-YAMAL-ENVIRONMENT-PLATES.md) — that table is the single source of truth. The principles:

- **Single-character shots** (Shots 1, 4 — Veteran; Shots 2, 5 — Challenger): attach that character's sheet + his face reference, and instruct: "match the character in the attached character sheet exactly — face, costume, and proportions."
- **Two-character shots** (Shots 3, 6, 7, 8, 9, 10): attach **both** sheets and identify each man by his sheet ("the poncho-with-hat character on the left of frame, the curly-haired character on the right").
- **Eye close-ups** (Shots 1, 2, 6): prefer the face references over the sheets — they carry more facial detail at that crop.
- Keep quoting the wardrobe lines from Section B verbatim inside scene prompts; reference images anchor identity, repeated wording anchors costume.

---

## E. Face Plates (dedicated references for the opening face shots)

The full-body sheets hold costume and proportions, but their faces are too small to drive an extreme close-up — eye shots generated from them come out low-detail and unrecognizable. These two prompts produce a **cinematic in-costume face plate** per character: a 2.39:1 close-up film still with exact likeness, used as the primary reference for the film's opening shots (Seedance GEN 1).

Workflow: fresh ChatGPT conversation per character → attach the character's **original face reference** from `assets/` → paste the prompt → check against the checklist → save as:
- `assets/messi-face-plate.jpeg`
- `assets/yamal-face-plate.jpeg`

### E.1 — THE VETERAN face plate (attach `assets/messi-face-reference.jpeg`)

```
Create a photorealistic cinematic film still: an extreme close-up
portrait of Lionel Messi as a weathered veteran gunslinger in a Sergio
Leone-style spaghetti western.

FACE: his face must precisely match the attached photo — identical facial
structure, eyes, nose, mouth, and short grey-flecked beard — rendered
with maximum photographic detail: sun-weathered tanned skin with visible
pores, a sheen of sweat, fine dust caught in the beard and eyelashes.
Calm, heavy-lidded, unblinking stare straight into the lens.

FRAMING: widescreen 2.39:1 close-up filling the frame from the hat brim
to the chin. He wears a dark flat-brimmed western hat pulled low — the
brim casts a hard shadow across the forehead while the eyes sit in a
bright horizontal band of harsh noon light (classic Leone duel framing).
The collar of a worn brown leather poncho is just visible at the bottom
edge. Background: sun-bleached western street melted into warm out-of-
focus haze with heat shimmer.

STYLE: photorealistic cinematic western film still, shot on anamorphic
35mm — warm desert color grade of burnt yellow-brown tones, warm blooming
highlights, dusty brown shadows, subtle film grain. NO text, labels,
logos, borders or watermarks anywhere in the image.
```

**Fallback (if likeness is refused):** replace the first paragraph with "an extreme close-up portrait of the man in the attached photo as a weathered veteran gunslinger in a Sergio Leone-style spaghetti western."

**Approval checklist:** instantly recognizable as the reference · eyes lit in a band, brim shadow above · beard, pores and sweat in sharp detail · poncho collar visible · warm desert grade · zero text.

### E.2 — THE CHALLENGER face plate (attach `assets/yamal-face-reference.jpeg`)

```
Create a photorealistic cinematic film still: an extreme close-up
portrait of Lamine Yamal as a fearless teenage challenger gunslinger in
a Sergio Leone-style spaghetti western.

FACE: his face must precisely match the attached photo — identical facial
structure, eyes, nose, mouth, and dark curly hair with dyed golden tips —
rendered with maximum photographic detail: smooth young sun-tanned skin
with a sheen of sweat, fine desert dust on the cheekbones, a faint
defiant grin. Fearless direct stare straight into the lens.

FRAMING: widescreen 2.39:1 close-up filling the frame from the curls to
the chin. No hat — his golden-tipped curls fill the top of the frame and
catch the hard noon light. The red-and-gold trimmed collar of a dusty
sand-colored poncho is just visible at the bottom edge. Background:
sun-bleached western street melted into warm out-of-focus haze with heat
shimmer.

STYLE: photorealistic cinematic western film still, shot on anamorphic
35mm — warm desert color grade of burnt yellow-brown tones, warm blooming
highlights, dusty brown shadows, subtle film grain. NO text, labels,
logos, borders or watermarks anywhere in the image.
```

**Fallback (if likeness is refused):** replace the first paragraph with "an extreme close-up portrait of the young man in the attached photo as a fearless teenage challenger gunslinger in a Sergio Leone-style spaghetti western."

**Approval checklist:** instantly recognizable as the reference · golden-tipped curls sharp and lit · defiant grin · red-and-gold collar trim visible · warm desert grade · zero text.
