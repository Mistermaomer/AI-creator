# 02 · פרומפטים ל-Seedance 2.0 + מפרט פוסט
## ארבעה ג'נרוטים · טמפלט מחייב · קריטריוני קבלה

> **כללים לכל הג'נרוטים:**
> - Standard tier, **1080p**, 24/25fps אחיד לכל הסגמנטים.
> - כל ג'נרוט ≤ 12 שניות (התקרה השמרנית).
> - כל פרומפט הוא הטמפלט המלא: PART 1 (עוגנים + LOOK) → CONTINUITY RULES → PART 2 (שלושה שוטים).
> - סדר העלאת הקבצים = מספור ה-@Image. לוודא לפני כל ג'נרוט.
> - עקיפות drift מובנות בשוטים: ידיים לא חוצות פנים, סיבובי ראש איטיים, רקע פשוט וכהה.
> - מאשרים סגמנט לפני שעוברים לבא (הפריים האחרון שלו נדרש לקיפריים הבא).
>
> **עדכון נכסי רפרנס (אחרי שלב הפרה-פרודקשן):** בכל מקום שכתוב CHILD-SHEET הכוונה ל-**CHILD-SHEET-FULL**; בכל מקום שכתוב ADULT-SHEET (IMG-03) הכוונה ל-**ADULT-FRONT** (פאנל ה-front שנחתך מ-ADULT-MULTIVIEW-SHEET). כשיש בסגמנט פעולה שמופיעה כפוזה ב-multi-view sheet (עוגה/מתג/פקק/חיבוק), אפשר לצרף את ה-sheet המלא כ-@Image נוסף ולציין: "use the matching pose panel from @ImageN as action reference" — אבל לא לעבור 3–4 רפרנסים סה"כ לג'נרוט.

---

## SEGMENT 1 — 0:00–0:06 · THE DREAM — פוטג' אמיתי, פוסט בלבד

**אין ג'נרוט.** מפרט הטיפול נמצא בסעיף הפוסט בסוף המסמך (§POST-1).

---

## SEGMENT 2 — 0:06–0:12 · THE WAKING (POV) — האפקט החתום

**מצב:** Reference-to-Video (R2V).
**העלאות:** `@Image1` = CHILD-SHEET (IMG-01) · `@Image2` = KEYFRAME-3 (IMG-04, רפרנס תאורה/סט בלבד).
**אודיו:** נטיבי — נשימות + "מזל טוב". *הימור מנוהל: אם הליפ-סינק העברי נשבר — ראו fallback.*

```
[CHAR B]: @Image1 — A real 3-year-old boy, thick tousled dark brown hair, large
warm brown eyes, full soft cheeks, wearing a gray raglan sweatshirt with
lime-green sleeves and gray sweatpants. Gentle, proud, a little mischievous. He
holds a small chocolate birthday cake with one lit candle in both hands.

[LOCATION]: @Image2 shows the lighting and set mood only — a midnight-dark living
room, the single candle flame as the only light source, warm glow from below,
deep shadows, faint cool moonlight far behind.

[LOOK]: Shot on 35mm film, hyper-realistic, photographic realism with fine
natural grain and true skin texture and imperfection. Deep shadow and contrast,
shallow depth of field, soft out-of-focus elements in the foreground.
Desaturated tones, a deliberate, evocative cinematic color palette. A real film
still, not a render. Avoid: CGI sheen, plastic smooth skin, glowing eyes, neon
VFX, video-game look.

CONTINUITY RULES:
- Pace: unhurried midnight stillness; nothing rushes.
- Weight & consequence: the candle flame trembles with the boy's breath; his
  small hands genuinely carry the cake's weight.
- Scale of motion: grounded, domestic, human.
- What to cut to: the boy's face, the flame.
- Progression: total darkness resolves into one warm face.
- Camera motif: locked, breathing only as much as a waking head would.

This entire segment is first-person POV — the camera is the eyes of a man waking
up. The boy's hands never cross his own face; his head stays steady facing
camera.

Shot 2A (POV, ~2s): [0s] Black frame. Eyelids open like a horizontal slit
revealing an extreme defocused blur — a small backlit silhouette with a single
warm flame — then blink shut again halfway and reopen. Handheld micro-sway, as
if the camera is a head lifting slightly from a couch cushion. [LOOK]. Audio:
muffled room tone, a slow sleepy inhale.

Shot 2B (POV, ~2s): Slow rack focus over two full seconds: the blur resolves
into [CHAR B]'s face, lit warmly from below by the single candle on the small
cake he holds. He waits patiently, eyes fixed on camera, tiny smile growing.
No camera movement beyond a faint breathing sway. [LOOK]. Audio: room tone
sharpens, the tiny crackle of a candle flame.

Shot 2C (close, ~2s): Cut to a clean close-up of [CHAR B] behind the cake, the
flame between him and camera. He softly says "Mazal tov" — a short, warm,
two-word Hebrew greeting — almost a whisper, then grins. His head stays still;
only the mouth and eyes move. [LOOK]. Audio: the spoken line "Mazal tov" in a
small child's voice, soft and intimate, over near-silence.
```

**קריטריוני קבלה:** המצמוץ הכפול מורגש כעפעפיים, לא כפייד · ה-rack focus אורך ~2s מלאות · הפנים = הילד מה-sheet · הלהבה מקור אור יחיד · "מזל טוב" נשמע טבעי.

**Fallbacks:**
- *ליפ-סינק עברי שבור:* לג'נרט מחדש את 2C עם "he mouths a short greeting, barely audible" ולהקליט "מזל טוב" של ילד בפוסט.
- *פילטר פנים/IP חוסם:* להחליף `@Image1` ל-IMG-02 (הגרסה הגנרית) — קודם לנסות עם המקור.
- *המצמוץ לא עובד:* לחתוך את הג'נרוט ל-2B+2C בלבד ולבנות את המצמוץ בפוסט (מסכת עפעפיים + בלור) על הפריימים הראשונים.

---

## SEGMENT 3 — 0:12–0:18 · THE CANDLE — הפריים הרחב והנשיפה

**מצב:** R2V עם קיפריים כפריים ראשון.
**העלאות:** `@Image1` = KEYFRAME-3 (IMG-04) · `@Image2` = ADULT-SHEET (IMG-03) · `@Image3` = CHILD-SHEET (IMG-01).
**אודיו:** נטיבי — דממה, נשיפה, עשן. בלי דיאלוג.

```
Use @Image1 as the exact first frame — continue this scene without changing its
lighting, layout or props.

[CHAR A]: @Image2 — A real 28-year-old man, short dark hair with a clean fade,
short well-groomed beard, warm brown eyes, black t-shirt, dark gray sweatpants,
silver figaro chain. Just woken, moved, present.

[CHAR B]: @Image3 — A real 3-year-old boy, tousled dark brown hair, big brown
eyes, gray raglan sweatshirt with lime-green sleeves, holding a small chocolate
birthday cake with one lit candle.

[PROP]: The small chocolate cake with a single candle; on the coffee table an
unopened champagne bottle, one flute, a small chocolate-milk bottle.

[LOCATION]: The midnight living room from @Image1 — couch, low coffee table,
candle as the only light source, deep shadows, faint cool window moonlight.

[LOOK]: Shot on 35mm film, hyper-realistic, photographic realism with fine
natural grain and true skin texture and imperfection. Deep shadow and contrast,
shallow depth of field, soft out-of-focus elements in the foreground.
Desaturated tones, a deliberate, evocative cinematic color palette. A real film
still, not a render. Avoid: CGI sheen, plastic smooth skin, glowing eyes, neon
VFX, video-game look.

CONTINUITY RULES:
- Pace: the quietest stretch of the film; deliberate stillness.
- Weight & consequence: couch cushion compresses as the man leans forward; the
  flame bends with their breath before dying; smoke rises and drifts.
- Scale of motion: grounded, minimal, domestic.
- What to cut to: the flame, then their faces above it.
- Progression: one light in the dark → shared breath → darkness again.
- Camera motif: locked static frames; no handheld yet.

Both faces stay clear of hands at all times; heads turn slowly.

Shot 3A (wide, ~2.5s): [0s] Exactly the composition of @Image1 — static side
angle, the man sitting up on the couch, the boy standing before him with the lit
cake. Nobody moves except the flame and slow breathing. Hold the frame, let it
land. [LOOK]. Audio: deep room tone, distant night ambience, candle crackle.

Shot 3B (mid, ~1.5s): Both lean slowly toward the candle between them, faces
gathering around the small flame, the boy raising three small fingers one by one
— a silent 1, 2, 3 — hand held low beside the cake, away from both faces.
[LOOK]. Audio: one shared inhale.

Shot 3C (macro close on the flame, ~2s): Slow motion, 40–50% speed: they blow
together, the flame stretches, dies, and a single thin smoke ribbon curls up
through the darkness as both faces dim to near-black. [LOOK]. Audio: the soft
puff of breath, then a beat of true silence.
```

**קריטריוני קבלה:** פריים 3A זהה לקיפריים · הספירה במחוות ידיים בלבד (ילד בן 3 — בלי דיבור) · הסלואו על הנשיפה 40–50% · הפריים האחרון כמעט שחור עם עשן — הוא הבסיס ל-KEYFRAME-4.

**Fallback:** אם הפריים האחרון בהיר/עמוס מדי לקיפריים הבא — לייצא פריים מ-3C באמצע דעיכת האור במקום מהסוף.

---

## SEGMENT 4 — 0:18–0:24 · THE POP — היפוך האנרגיה

**מצב:** R2V עם קיפריים כפריים ראשון.
**העלאות:** `@Image1` = KEYFRAME-4 (IMG-05) · `@Image2` = ADULT-SHEET · `@Image3` = CHILD-SHEET.
**אודיו:** נטיבי — קליק מתג, פקק, קצף, צחוק ילד. בלי דיאלוג.

```
Use @Image1 as the exact first frame — continue this scene without changing its
layout or props.

[CHAR A]: @Image2 — A real 28-year-old man, short dark hair with a fade, short
beard, black t-shirt, dark gray sweatpants, silver figaro chain. Energy shifting
from tender to playful.

[CHAR B]: @Image3 — A real 3-year-old boy, tousled dark brown hair, gray raglan
sweatshirt with lime-green sleeves. Standing by the wall light-switch, hand
raised to it.

[PROP]: The champagne bottle in the man's hands; the cake with its smoking
candle, the flute and the small chocolate-milk bottle on the coffee table.

[LOCATION]: The same living room from @Image1, near-black, a heartbeat after the
candle went out.

[LOOK]: Shot on 35mm film, hyper-realistic, photographic realism with fine
natural grain and true skin texture and imperfection. Deep shadow and contrast,
shallow depth of field. Desaturated tones warming as the practical light comes
on. A real film still, not a render. Avoid: CGI sheen, plastic smooth skin,
glowing eyes, neon VFX, video-game look.

CONTINUITY RULES:
- Pace: this is the hinge — stillness snaps into festivity mid-segment.
- Weight & consequence: the switch clicks and real lamplight floods the room;
  the cork flies and foam arcs, lands and stays wet on the table.
- Scale of motion: grounded but suddenly alive.
- What to cut to: the boy's startled-then-delighted face.
- Progression: darkness → warm full light → fizz and laughter.
- Camera motif: the locked frame finally starts breathing handheld after the
  light comes on.

Hands never cross faces; the cork flies away from both characters.

Shot 4A (mid, ~1.5s): [0s] The boy flicks the wall switch — warm lamplight
snaps on mid-shot, the room revealed in an instant, the man mid-reach with the
champagne bottle blinking at the sudden light. [LOOK]. Audio: a crisp switch
click, room tone blooming warm.

Shot 4B (slow-motion mid-close, ~2.5s): Speed ramp decelerating to ~30% as the
man pops the champagne — the cork flies up and away from everyone, foam arcs
out of the bottle catching the lamplight in golden droplets. The boy flinches,
then bursts out laughing. [LOOK]. Audio: the deep pop, fizzing foam, a child's
sudden bright laugh.

Shot 4C (macro, ~2s): Extreme close-up on the coffee table: a champagne flute
meets the small chocolate-milk bottle in a ceremonial clink, then focus pulls
from the glasses to the boy's proud beaming face behind them, chin up, utterly
serious about his chocolate milk. [LOOK]. Audio: a bright glass clink over
settling fizz.
```

**קריטריוני קבלה:** היפוך האור קורה *בתוך* השוט (לא בין שוטים) · הפקק עף מכיוון הדמויות והחוצה · הקלינק: כוס מול בקבוק שוקו, הפוקוס עובר לפני הילד · הצחוק נשמע אמיתי.

**Fallback:** אם היפוך האור בתוך-שוט נכשל (חשיפה קופצת מכוער) — לפצל: 4A מסתיים על היד על המתג, ו-4B נפתח כבר באור, עם white-flash של 2 פריימים בעריכה.

---

## SEGMENT 5 — 0:24–0:33 · THE CELEBRATION — הנחיתה

**מצב:** R2V עם קיפריים כפריים ראשון. **הג'נרוט הארוך (~9s).**
**העלאות:** `@Image1` = KEYFRAME-5 (IMG-06) · `@Image2` = ADULT-SHEET · `@Image3` = CHILD-SHEET.
**אודיו:** נטיבי — צחוק, אווירה חמה. בלי דיאלוג.

```
Use @Image1 as the exact first frame — continue this scene without changing its
layout, lighting or props.

[CHAR A]: @Image2 — A real 28-year-old man, short dark hair with a fade, short
beard, black t-shirt, silver figaro chain, champagne flute in hand. Fully awake
now, laughing freely.

[CHAR B]: @Image3 — A real 3-year-old boy, tousled dark brown hair, gray raglan
sweatshirt with lime-green sleeves, chocolate-milk bottle in hand, a smudge of
chocolate cake at the corner of his mouth.

[PROP]: The half-eaten cake, the opened champagne bottle, wet foam traces on the
coffee table.

[LOCATION]: The same living room from @Image1, now fully lit in warm golden
domestic light — the visual opposite of the film's opening darkness.

[LOOK]: Shot on 35mm film, hyper-realistic, photographic realism with fine
natural grain and true skin texture and imperfection. Warm white tones, gentle
anamorphic lens flare from the lamp, shallow depth of field. A real film still,
not a render. Avoid: CGI sheen, plastic smooth skin, glowing eyes, neon VFX,
video-game look.

CONTINUITY RULES:
- Pace: loose, joyful, slightly quickened (~105% liveliness), then releasing
  into calm for the final frame.
- Weight & consequence: couch cushions bounce under the boy's feet; cake crumbs
  scatter; the flute's champagne sways.
- Scale of motion: playful but grounded and safe.
- What to cut to: shared laughter, the arm around the boy.
- Progression: peak joy → embrace → the camera lets go of the moment.
- Camera motif: handheld energy settling back into one final steady frame.

Hands never cross faces; the hug lands on the shoulder, faces stay open to
camera.

Shot 5A (handheld mid, ~3s): [0s] Quick joyful beats in one continuous handheld
move: the boy bounces on the couch cushion holding his chocolate milk, the man
raises his flute in a mock-solemn toast, a bit of cake gets smeared, both crack
up. [LOOK]. Audio: overlapping warm laughter, a couch spring creak, night-time
apartment ambience.

Shot 5B (two-shot mid, ~3s): The energy softens — the man wraps one arm around
the boy's shoulders, pulling him gently to his side on the couch, the cake
between them on the table, both laughing at each other and then settling into
matching grins toward camera. [LOOK]. Audio: laughter easing into a warm hum of
ambience.

Shot 5C (slow push-out, ~3s): From the two-shot, the camera drifts slowly
backward and slightly up in a gentle continuous pull-out, the warm pool of
lamplight shrinking into the surrounding dark apartment as the frame lets go of
the moment. They stay nestled together, still smiling. [LOOK]. Audio: ambience
fading, one last small chuckle from the boy.
```

**קריטריוני קבלה:** ה-handheld מורגש אבל לא רועד · החיבוק לא מכסה אף פנים · ה-push-out רציף ואיטי — הוא נושא את הפייד לשחור בעריכה · הזהויות מחזיקות עד הפריים האחרון (הסיכון הגדול בג'נרוט ארוך — ראו fallback).

**Fallback:** אם יש identity drift בסוף ה-9 שניות — לפצל לשני ג'נרוטים: 5A+5B (6s) ו-5C לבד (3s, מקיפריים שמיוצא מסוף 5B).

---

# POST — מפרט הפוסט-פרודקשן המלא

## POST-1 · טיפול הארכיון (SEGMENT 1, הפוטג' האמיתי)

| פרמטר | ערך |
|---|---|
| מהירות | 75–80% (slow-mo עדין) |
| גרעיניות | 35mm heavy grain overlay |
| וינייטה | רכה, פינות מוחשכות |
| צבע | VHS chroma bleed קל, ריכוך קצוות פריים |
| 0:04–0:06 | frame warp/wobble מתגבר + jitter + מריחת צבע בקצוות |
| 0:055 בערך | קאט קשה לשחור ~0.5s — דממה מוחלטת חוץ מנשימה רכה |
| אודיו | סאונד הפוטג' המקורי עמום, low-pass מתחת ~1kHz, תחושת "מתחת למים" |

## POST-2 · שכבת הקול

| אלמנט | מקור | מיקום |
|---|---|---|
| לחישה "יאקיר... יאקיר..." | הקלטה בפוסט (ילד/פיץ' מעובד), ריוורב מרוחק, ללא מקור | מתחת לשוט 1 |
| "קום קום!" | אותה הקלטה — חדה, קרובה, אינטימית | 0:04–0:05, חותכת את העמימות |
| "מזל טוב" | נטיבי מ-Seedance (2C); fallback: הקלטה מסונכרנת לפה | 0:10 בערך |
| צחוק סיום (audio tail) | הצחוק של הילד מסגמנט 4/5, הד קצר על שחור | אחרי הפייד, מראה ללחישה של הפתיחה |

## POST-3 · חיבור והשלמות

1. **חיבור סגמנטים:** 1→2 דרך השחור (הקאט הקשה הוא התפר) · 2→3 match cut על חיוך הילד · 3→4 דרך האפלה אחרי הנשיפה · 4→5 על תנועת הקצף/צחוק. אם תפר נראה — 2 פריימים של שחור/פלאש לבן (רק ב-4→5).
2. **גריידינג אחיד:** LUT קולנועי אחד על סגמנטים 2–5 כדי לאחות הבדלי גוון בין ג'נרוטים; הארכיון (סגמנט 1) נשאר בטיפול הנפרד שלו — הניגוד מכוון.
3. **כרטיס "28":** TITLE-28 (IMG-07) נכנס אחרי פייד לשחור, 1.5–2s, עם ה-audio tail.
4. **מוזיקה (אופציונלי):** אם מוסיפים — נכנסת רק מ-4A (היפוך האור) והלאה; הפתיחה חיה על סאונד-דיזיין בלבד.

## סדר ביצוע ותלויות

```
IMG-01 → IMG-03 → IMG-04 ──→ GEN SEG-2 (במקביל)
                    │
                    └──→ GEN SEG-3 → export last frame → IMG-05 → GEN SEG-4
                                                            │
                                      export last frame → IMG-06 → GEN SEG-5
IMG-07 (בלתי תלוי, בכל שלב)
IMG-02 (רק אם פילטר IP חוסם)
```

**צ'קליסט לפני כל ג'נרוט:** סדר ההעלאות תואם למספור @Image בפרומפט · אין שילוב של first-frame API עם reference-images באותה קריאה (בממשק R2V — הקיפריים מוגדר דרך "@Image1 as the exact first frame") · הדמות מופיעה ראשונה בפרומפט · רקע פשוט, ידיים רחוקות מפנים.
