# 01 · פרומפטים ל-GPT Image 2 — פרה-פרודקשן
## Character Sheets · קיפריימים · כרטיס "28"

> **כללים לכל הקריאות:**
> - גודל פלט: **1920×1088** (16:9, כפולות 16) אלא אם צוין אחרת.
> - Quality: **high** (קיפריימים וזהות שווים את הטוקנים).
> - רפרנסים מתויגים באינדקס בתוך הפרומפט — הסדר שבו מעלים = הסדר שבו מתייגים.
> - איטרציה: שינוי אחד קטן בכל סבב. אם הפנים סטו — מחדדים את משפט ה-"keep unchanged", לא מוסיפים תיאור חדש.
> - הלוק האחיד (PHOTO PROMPT של יקיר) מוטמע בכל פרומפט.

---

## IMG-01 · Character Sheet — הילד (גרסת מקור, פוקימון)

**רפרנסים:** Image 1 = תמונת הילדות (`443aa5e0`).
**מטרה:** דמות אחת, ממורכזת, 60–80% מהפריים, רקע שקט — הרפרנס האידיאלי ל-Seedance.
**גודל:** 1088×1920 (פורטרט — הדמות ממלאת את הפריים).

```
Image 1 is the identity reference: a real 3-year-old boy with thick tousled dark
brown hair, large warm brown eyes, full soft cheeks, wearing a gray raglan
sweatshirt with lime-green sleeves and collar featuring a Pokémon print, and gray
sweatpants.

Create a full-body character portrait of this exact boy, standing facing the
camera with a small gentle smile, arms relaxed at his sides, centered, occupying
about 70% of the frame, against a plain warm dark-gray studio backdrop with soft
even lighting. Keep his face, hair, eyes, proportions and outfit exactly as in
Image 1 — do not change his identity, age or clothing in any way.

Photo realistic, chromatic aberration, shot on film camera, 35mm grain,
documentary style, long lens, blurry background, warm white tones. A real film
still, not a render. Avoid: CGI sheen, plastic smooth skin, cartoon look.
```

**בדיקת קבלה:** הפנים = הילד מהתמונה (עיניים, לחיים, קו שיער). החולצה זהה. אין סטייליזציה מצוירת.

---

## IMG-02 · Character Sheet — הילד (Fallback גנרי, בלי פיקאצ'ו)

**מתי:** רק אם Seedance חוסם/משבש בגלל ה-IP של פוקימון.
**רפרנסים:** Image 1 = הפלט של IMG-01 (עדיף) או תמונת הילדות.

```
Image 1 is the identity reference for a real 3-year-old boy.

Edit only the print on his sweatshirt: replace the Pokémon graphic with a simple
generic cartoon lightning bolt in yellow with a soft red outline, similar energy
and placement, no recognizable characters, no text. Keep everything else exactly
unchanged — his face, hair, eyes, skin, pose, the gray raglan sweatshirt with
lime-green sleeves, the gray sweatpants, the backdrop and the lighting must stay
identical to Image 1.
```

**בדיקת קבלה:** רק ההדפס השתנה. צבעי החולצה והגזרה נשמרו — הזיהוי הרגשי ("החולצה ההיא") שרד.

---

## IMG-03 · Character Sheet — יקיר היום (מיזוג 4 זוויות)

**רפרנסים:** Image 1 = סלון (`8449786c`, פנים ראשי) · Image 2 = רכב (`3861e6ba`, 3/4) · Image 3 = סנטוריני (`d2dcab5f`, גוף מלא) · Image 4 = סירה (`bf87c5bc`, שרשרת).
**גודל:** 1088×1920 (פורטרט).

```
Images 1–4 all show the same real 28-year-old man: short dark hair with a clean
fade, a short well-groomed beard, warm brown eyes, medium athletic build. Image 1
is the primary face reference; Image 2 shows his three-quarter profile; Image 3
shows his full-body proportions; Image 4 shows his silver figaro chain necklace.

Create a full-body character portrait of this exact man standing facing the
camera, relaxed, faint sleepy half-smile, wearing a plain black t-shirt, dark
gray sweatpants and the silver figaro chain from Image 4. Centered, occupying
about 70% of the frame, plain warm dark-gray studio backdrop, soft even lighting.
Preserve his identity exactly as in Images 1–3 — same face, same beard density,
same hairline. Do not idealize or beautify.

Photo realistic, chromatic aberration, shot on film camera, 35mm grain,
documentary style, long lens, blurry background, warm white tones. A real film
still, not a render. Avoid: CGI sheen, plastic smooth skin.
```

**בדיקת קבלה:** זה יקיר — לא "גבר גנרי יפה". הזקן בצפיפות הנכונה, קו השיער נכון, השרשרת קיימת. הלבוש הוא בדיוק לבוש הסרט (טישרט שחור + טרנינג + שרשרת).

---

## IMG-04 · קיפריים — פתיחת סגמנט 3 ("THE CANDLE", הפריים הרחב) — גרסה 2

**עדכון:** רפרנסי הזהות = ה-Multi-View Sheets המלאים; הלוקיישן = "The Midnight Loft" המומצא (הבלוק הקנוני מ-`00-PRODUCTION-PLAN.md`).
**רפרנסים:** Image 1 = ADULT-MULTIVIEW-SHEET · Image 2 = CHILD-MULTIVIEW-SHEET.
**גודל:** 1920×1088.

```
Image 1 is a photographic character reference sheet of a real 28-year-old man —
use it to lock his identity exactly: compact 170 cm (5'7") medium athletic
build — average height, no fashion-model elongation — short dark hair with a
clean fade, short well-groomed beard, warm brown eyes, black t-shirt, dark gray
sweatpants, silver figaro chain, barefoot. Image 2 is a photographic character reference sheet of a
real 3-year-old boy — use it to lock his identity exactly: thick tousled dark
brown hair, large warm brown eyes, full soft cheeks, gray raglan sweatshirt with
lime-green sleeves and a Pokémon print, gray sweatpants, white velcro sneakers.

Create a cinematic wide two-shot: the man sits upright on the couch, just woken,
a wool throw blanket half fallen off his legs; the boy stands in front of him
holding a small chocolate birthday cake with a single lit candle in both hands
— use the cake-holding pose panel from Image 2 as the action reference —
ceremonial and proud. On the low coffee table beside them: an unopened champagne
bottle, one empty champagne flute, and a small chocolate-milk bottle.

LOCATION: A cinematic high-end apartment living room at midnight:
floor-to-ceiling windows with faint out-of-focus city lights and a soft haze of
moonlight, dark walnut wood floor with a large soft area rug, a deep charcoal
fabric couch with textured cushions and a wool throw blanket, a low
walnut-and-stone coffee table, a brass floor lamp (switched off), a wall of
bookshelves with books and small framed photos, a few green plants as dark
silhouettes. Quiet, lived-in, warmly expensive production design.

LIGHTING: The single candle flame is the only light source — warm glow from
below on both faces, deep shadows swallowing the room's edges, faint cool
moonlight from the windows far behind. No lamps, no ceiling light, no practical
lights on. Side angle, eye level, static frame.

Photo realistic, chromatic aberration, shot on film camera, 35mm grain,
documentary style, long lens, blurry background. Deep shadow and contrast,
shallow depth of field. A real film still, not a render. Avoid: CGI sheen,
plastic smooth skin, glowing eyes, and do not show any reference-sheet grid or
labels in the output — one single scene only.
```

**בדיקת קבלה:** שתי הזהויות נשמרו · הנר באמת מקור האור היחיד · השמפניה והשוקו כבר על השולחן (רציפות לסגמנט 4!) · הפריים "מחזיק" — זה פריים ה-wow של הסרט.

**איטרציה:** אם המודל מוסיף מקורות אור — להוסיף "no lamps, no ceiling light, no practical lights on; the candle is the only source."

---

## IMG-05 · קיפריים — פתיחת סגמנט 4 ("THE POP")

**רפרנסים:** Image 1 = **הפריים האחרון של הג'נרוט של סגמנט 3** (מייצאים פריים מהווידאו) · Image 2 = IMG-03 · Image 3 = IMG-01.
**גודל:** 1920×1088.

```
Image 1 is the exact scene, lighting and composition to continue from: the same
midnight living room a heartbeat after the birthday candle was blown out — thin
smoke ribbon still rising from the cake on the coffee table, the room almost
black, faces barely lit by residual moonlight.

Recreate this moment as a clean sharp frame: the man from Image 2 now reaching
for the champagne bottle on the coffee table, the boy from Image 3 turned toward
the wall light-switch, hand raised to it, caught mid-motion. Keep the room
layout, couch, cake, props and near-darkness exactly as in Image 1. Keep both
identities exactly as in Images 2 and 3.

Photo realistic, chromatic aberration, shot on film camera, 35mm grain,
documentary style. Deep shadow, shallow depth of field. A real film still, not a
render.
```

**בדיקת קבלה:** ממשיך בדיוק את סוף סגמנט 3 (אותו חדר, אותו חושך, אותם פרופים) · הילד ליד המתג = ההצדקה הנרטיבית להיפוך האור.

---

## IMG-06 · קיפריים — פתיחת סגמנט 5 ("THE CELEBRATION")

**רפרנסים:** Image 1 = הפריים האחרון של הג'נרוט של סגמנט 4 · Image 2 = IMG-03 · Image 3 = IMG-01 · Image 4 = תמונת הסירה (`bf87c5bc`) כרפרנס לגוון התאורה החמה על העור.
**גודל:** 1920×1088.

```
Image 1 is the exact scene to continue from: the same living room now fully lit,
warm lamplight, champagne foam still wet on the coffee table, the opened bottle
and the small chocolate-milk bottle beside the cake.

Recreate this as a clean sharp frame: the man from Image 2 laughing openly,
champagne flute in hand, sitting forward on the couch; the boy from Image 3
standing on the couch cushion beside him mid-bounce, chocolate-milk bottle in
hand, cake slightly smeared. Warm golden domestic light on their skin similar in
tone to Image 4. Keep the room, props and identities exactly consistent with
Images 1–3.

Photo realistic, chromatic aberration, shot on film camera, 35mm grain,
documentary style, warm white tones, anamorphic lens flare. A real film still,
not a render.
```

**בדיקת קבלה:** האור החם הוא ההיפך הוויזואלי של IMG-04 · אנרגיה באמצע-תנועה, לא פוזה סטטית.

---

## IMG-07 · כרטיס סיום "28" (כתב-יד ילדי)

**רפרנסים:** אין.
**גודל:** 1920×1088.

```
A minimal closing title card on a pure black background: the number "28" written
large in the center in white, in authentic messy child's crayon handwriting —
wobbly strokes, uneven pressure, slightly tilted, like a 3-year-old wrote it on
dark paper. Render the text verbatim: exactly "28", no extra characters, no
decorations except two or three tiny stray crayon marks near the digits. Subtle
35mm film grain over the whole frame.
```

**בדיקת קבלה:** בדיוק "28", קריא, באמת נראה ילדי (לא פונט "childlike" מסודר מדי).

---

## IMG-08 / IMG-09 · Multi-View Character Sheets (בוצעו ואושרו)

בשלב הביצוע הוחלט לשדרג את רפרנסי הזהות ל-character sheets רב-זוויתיים במבנה שהגדיר יקיר (front/side/back + 3 הבעות + 3 פוזות + material callouts), בסגנון **פוטוריאליסטי** — לא concept-art מאויר, כדי לא לגרור את Seedance לסטייליזציה. הפוזות וההבעות נבחרו כך שיהיו בדיוק פעולות מהסרט (עוגה עם נר, מתג אור, קפיצה על ספה / פקק שמפניה, חיבוק, squint של התעוררות).

**IMG-08 — sheet הילד:** רפרנסים: CHILD-SHEET-FULL + CHILD-FACE. ✅ בוצע ואושר.
**IMG-09 — sheet המבוגר:** רפרנסים: 4 תמונות המקור. גרסה 1 נפסלה (פאנל צד לא דומה + פרופורציות גבוהות מדי — יקיר 170 ס"מ). **v2 בביצוע**: ג'נרוט מחודש עם ה-Sheet הישן כרפרנס-שימור (Image 4), עיגון הפרופיל לתמונת הרכב, ו-"170 cm, head-to-body ~1:7, no elongation".
(הפרומפטים המלאים שמורים בשיחה; המבנה: "Create ONE professional character reference sheet… STYLE: Photorealistic — every panel is a photograph of the same real person… Avoid: line art, cartoon or concept-art stylization.")

> IMG-03 (פורטרט בודד למבוגר) התייתר — פאנל ה-front של IMG-09 נחתך במקומו כ-ADULT-FRONT.

## רישום נכסים — מצב נוכחי

| נכס | מקור | סטטוס | משמש כ- |
|---|---|---|---|
| CHILD-SHEET-FULL + CHILD-FACE | IMG-01 (נחתך לפורטרט 9:16 + קלוז-אפ) | ✅ אושר | רפרנס פריים נקי של הילד |
| CHILD-MULTIVIEW-SHEET | IMG-08 | ✅ אושר | רפרנס זהות/פוזות ראשי של הילד |
| ADULT-MULTIVIEW-SHEET | IMG-09 | ✅ אושר | רפרנס זהות/פוזות ראשי של המבוגר |
| ADULT-FRONT + ADULT-FACE-SMILE | נחתכו מ-IMG-09 | ✅ | רפרנס פריים נקי של המבוגר |
| CHILD-SHEET גנרי (IMG-02) | GPT Image 2 | ⏸ רק אם פילטר IP חוסם | fallback |
| KEYFRAME-3 (IMG-04) | GPT Image 2 | ⬜ הבא בתור | פריים ראשון לסגמנט 3 |
| KEYFRAME-4 (IMG-05) | GPT Image 2 (מפריים אחרון של סגמנט 3) | ⬜ | פריים ראשון לסגמנט 4 |
| KEYFRAME-5 (IMG-06) | GPT Image 2 (מפריים אחרון של סגמנט 4) | ⬜ | פריים ראשון לסגמנט 5 |
| TITLE-28 (IMG-07) | GPT Image 2 | ⬜ | כרטיס סיום בעריכה |
