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
5. Save the approved sheet back into this repo as:
   - `assets/messi-character-sheet.png`
   - `assets/yamal-character-sheet.png`
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
