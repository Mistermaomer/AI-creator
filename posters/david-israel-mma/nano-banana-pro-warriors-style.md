# דוד ישראל MMA – פוסטר בסגנון "Warriors" (Nano Banana Pro, 4 תמונות רפרנס)

## סדר העלאת התמונות (חשוב, הפרומפט מתייחס למספרים)

| # | מה להעלות | לאיזה שימוש |
|---|---|---|
| Image 1 | פורטרט של דוד (הפנים ברורות) | נעילת זהות |
| Image 2 | תמונה שנייה של דוד (זווית אחרת) | נעילת זהות |
| Image 3 | דוד מתאמן | הכרטיס האמצעי (כוח ופונקציונלי) |
| Image 4 | הבחורה | הגיבורה בתמונה הראשית ובכרטיס האגרוף |

## למלא לפני ההרצה

- `[מספר טלפון]`
- `[כתובת הסטודיו]`

אם אין, למחוק את השורה מהפרומפט (לא להשאיר סוגריים, המודל ידפיס אותם).

## הפרומפט המלא

```
REFERENCE LOCK:
- Image 1 and Image 2 are the same real person, David, the studio owner and head coach. Reproduce his face, curly dark hair, full beard, skin tone, physique and tattoos exactly as in these two photos. Do not change his age, face shape or body.
- Image 3 is David training. Recreate this exact pose, outfit and setting inside the middle card of the poster (see CARDS below), keeping his identity from Images 1-2.
- Image 4 is a real woman who trains at the studio. Reproduce her face, hair, skin tone and body exactly as in Image 4. She must be clearly recognizable, portrayed with respect, athletic and strong, never sexualized.
- Both David and the woman must be in sharp focus with fully recognizable faces wherever they appear. No other real people; any extra person is a generic realistic Israeli adult.

HEBREW TEXT RULES: Render every Hebrew string EXACTLY as written, character for character, right-to-left, correct letterforms, no invented words, no extra or missing letters, no spelling changes. "MMA" and "davidisrael.mma" stay in Latin letters. Headline font: a heavy, distressed, brush-stroke Hebrew display font (rough dry-brush edges, like the reference poster style). Body font: clean bold Hebrew sans-serif (like Heebo Bold). All text crisp, perfectly legible, on high-contrast areas. Safe margins of at least 5% on every side.

OUTPUT: Vertical advertising poster, 2:3 aspect ratio, 2K resolution, professional gym-ad design, photoreal photography inside a designed layout, no watermark, no gibberish text.

OVERALL STYLE: Dark, aggressive, premium gym poster. Background: near-black textured concrete with grunge speckles. Two big diagonal dry-brush stripes sweep from the top-left corner toward the center – one blood red, one off-white – with paint splatter and rough edges. A smaller matching red-and-white brush stroke sits behind the headline on the right side. Color palette strictly black, off-white and blood red (#C8102E). High contrast, cinematic, sharp.

LAYOUT (top to bottom):

1. TOP-LEFT, small: a thin red vertical bar with two lines of small white uppercase-style text beside it:
   "קבוצות קטנות של עד 5 מתאמנים"
   "אווירה משפחתית | ליווי אישי"

2. TOP-RIGHT, logo: a small white line-art crown, below it the word "MMA" in big bold white letters with a red outline, and beneath it "דוד ישראל" in bold white Hebrew. Compact, like a gym emblem.

3. HERO IMAGE, center of the upper half, cut out and blended into the background with the brush stripes behind it: a dramatic two-shot inside the studio. The woman from Image 4, in black sports top and black leggings with black boxing gloves, lands a hard cross into a red focus mitt held by David. David (from Images 1-2) wears a fitted black t-shirt and black hand wraps, holds red focus mitts up, leans slightly forward, eyes locked on her, mouth open mid-instruction, intense and encouraging. Both faces sharp and lit by a hard rim light from above and a soft key light from the front. Sweat highlights, light haze, black heavy bags on chains soft in the background. Their bodies form a strong diagonal.

4. HEADLINE, directly under the hero, centered, three stacked lines in the distressed brush font, each line huge and full-width:
   Line 1, off-white: "הגרסה הכי חזקה שלך"
   Line 2, blood red, the largest: "לא מחכה למחר."
   Line 3, off-white: "מתחילים עכשיו."

5. THREE CARDS in a row below the headline, each a tall rectangle with a thin red border and a subtle dark inner frame, each with a red circular line icon at the top-left and two text lines beside it (title in bold white, subtitle in bold red), and a photo filling the rest of the card:
   Card 1 (right): icon = boxing glove. Title "MMA ואגרוף". Subtitle "גם לנשים". Photo: the woman from Image 4, gloves up in a guard stance, hitting a black heavy bag in the studio, focused, David visible beside her holding the bag and correcting her stance.
   Card 2 (center): icon = dumbbell. Title "כוח ופונקציונלי". Subtitle "עיצוב וחיטוב". Photo: recreate Image 3 – David training exactly as in that photo, same pose, outfit and studio, sharp and recognizable.
   Card 3 (left): icon = shield. Title "הגנה עצמית". Subtitle "יוגה | קבוצות של עד 5". Photo: David demonstrating a self-defense wrist escape to a small mixed group of three adults (two women, one man) on the black mats by the big windows with the city view, daylight.

6. BOTTOM CONTACT BAR, on the dark background under the cards, right-aligned rows, each with a red circular icon on the right and text to its left, small red label above bold white value:
   Phone icon – label "התקשרו" – value "[מספר טלפון]"
   Instagram icon – label "עקבו" – value "davidisrael.mma"
   Location pin icon – label "כתובת" – value "[כתובת הסטודיו]"
   Bottom-left corner: a red pill button with white bold text "שיעור ניסיון – שלחו הודעה".

FINAL CHECK: every Hebrew word spelled exactly as given, both real people recognizable, no extra text, no invented logos, no English words other than "MMA" and "davidisrael.mma".
```

## וריאציה: הגיבור הוא דוד לבד (במקום השניים)

להחליף את סעיף HERO IMAGE ב:

```
3. HERO IMAGE, center of the upper half, cut out and blended into the background with the brush stripes behind it: David (from Images 1-2), shirtless, black hand wraps, fists raised in a boxing guard, staring straight into the camera with the calm intense expression from Image 1, tattoos visible, hard rim light from above, sweat highlights, light haze, black heavy bags soft behind him.
```

ואז הבחורה מופיעה בכרטיס 1 בלבד.

## טיפים

1. אם המודל מטשטש או משנה את הפנים של אחד מהם: להריץ עריכה על התוצאה עם `Keep everything identical, only make the coach's face match Image 1 exactly` (או `the woman's face match Image 4`).
2. אם הכותרת במברשת יוצאת לא קריאה: להחליף בשורת HEBREW TEXT RULES את "distressed, brush-stroke" ב‑"heavy condensed sans-serif with a rough grunge texture overlay". קל יותר למודל.
3. עברית שבורה: `Fix only the Hebrew text so it reads exactly: "..." – keep everything else identical`.
4. לסטורי: להחליף `2:3` ב‑`9:16` ולהוסיף "stack the three cards vertically".
5. הפוסטר שהבאת כרפרנס מכיל שגיאת כתיב ("TOMOORROW"). לא לצרף אותו כתמונת רפרנס למודל, כדי שלא יעתיק ממנו טקסט. הפרומפט כבר מתאר את הסגנון שלו.
