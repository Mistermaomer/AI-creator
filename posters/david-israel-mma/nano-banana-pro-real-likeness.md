# דוד ישראל MMA – פוסטר "סופר אמיתי" בשלושה שלבים (Nano Banana Pro)

## למה הפנים לא יצאו כמוהו, ומה עושים אחרת

- כשמבקשים מהמודל **לייצר** את דוד בפוזה חדשה, בבגדים חדשים, עם עוד אנשים ובתוך כרטיסים קטנים, הוא בונה פנים "בהשראת" הרפרנס. זה תמיד יזוז.
- כשמבקשים ממנו **לערוך** תמונה אמיתית של דוד (להחליף רקע, להוסיף חולצה, לשנות תאורה), הפנים נשארות הפיקסלים המקוריים. זה נראה כמוהו כי זה הוא.
- לכן: קודם מייצרים **2 תמונות גמורות** בנפרד (כל אחת עריכה של צילום אמיתי), ורק אז מרכיבים פוסטר עם טקסט. בשלב ההרכבה אוסרים על המודל לגעת בפנים.

## איזו תמונה של דוד לקחת

לשלב 1 ולשלב 2 להשתמש **בצילום החזיתי מול השקים** (הוא עומד, מסתכל למצלמה, תאורה טובה, פנים חדות). זה הרפרנס הכי חזק שיש. לא לקחת את התמונה מהגב ולא את הישיבה מלמעלה.

---

## שלב 1 – תמונת הגיבור: דוד בתור מאמן

**להעלות:** Image 1 = הצילום החזיתי של דוד מול השקים.

```
This is a photo EDIT, not a new generation. Image 1 is a real photo of David, an MMA coach. Keep his face, hair, beard, expression, skin texture, body proportions, tattoos and pose EXACTLY as in the photo – pixel-identical face, do not beautify, do not slim, do not change his eyes or jaw, do not change the camera angle or distance.

Make only these changes:
1. Dress him in a plain fitted black crew-neck t-shirt (no logo, no text). Keep his arms and shoulders in the same position.
2. Add black boxing hand wraps on both hands.
3. Relight the scene for a cinematic look: keep the existing key light on his face, add a subtle warm rim light on his shoulders from the top-right, deepen the shadows slightly. Keep the real gym behind him (the tan heavy bags, the ceiling lights) but darken and desaturate the background about 40% so he pops.
4. Add a very light haze in the background.

Output: portrait 4:5, 2K, photoreal, real-camera look: natural skin pores, slight sensor grain, no plastic AI smoothing, no over-sharpening. It must look like a professional photographer shot this exact moment.
```

**בדיקה לפני שממשיכים:** לשים את התוצאה ליד המקור. אם הפנים זזו, לא להמשיך. להריץ שוב עם התוספת:
`Reduce the edit: keep the original background as-is, only change the shirt and the wraps.`

---

## שלב 2 – הסצנה: דוד מחזיק פדים ומאמן את האישה

**להעלות:** Image 1 = אותו צילום חזיתי של דוד. Image 2 = תמונת האישה (עדיף גוף מלא או חצי גוף, פנים ברורות, תאורה דומה).

```
Create ONE photoreal candid photo of a boxing pad-work session, built from the two real people in the reference images.

IDENTITY LOCK (most important):
- David is the man in Image 1. His face must match Image 1 exactly: same eyes, brows, nose, beard shape and density, hairline, skin tone. Do not invent a new face. Keep his head at roughly the same size and camera distance as in Image 1 so his features stay accurate.
- The woman is the person in Image 2. Her face, hair and body must match Image 2 exactly. She is portrayed athletic, strong and respectful, never sexualized.
- Do not beautify, slim, age or de-age either of them.

SCENE: Inside a real MMA studio (grey rubber floor, black heavy bags on chains, floor-to-ceiling windows with a hazy city view, daylight). David, in a plain fitted black t-shirt, black training pants and black hand wraps, holds two red focus mitts up at chest height, slightly angled toward the woman, weight on his front foot, watching her hands with a focused coach's expression (calm, mouth closed or slightly open, no exaggerated shouting). The woman, in a black sports top and black leggings with black boxing gloves, is landing a straight right into his left mitt, her body rotated into the punch, chin tucked, eyes on the mitt. The pad shows a slight impact deformation. They are about one arm's length apart.

CAMERA: Shot from the side at a slight three-quarter angle so BOTH faces are clearly visible, 35mm lens, eye level, both people in sharp focus, background softly blurred. Natural window light from the left, soft shadows, light sweat on both. Frame from mid-thigh up, both people fully inside the frame.

REALISM RULES: This must look like a real photo taken on a professional camera during an actual session, not an ad render. Natural skin texture, slight motion blur only on the punching glove, real sensor grain, imperfect real-world details (chalk marks on the floor, a water bottle by the wall, a towel on the bag), muted natural colors, no cinematic haze, no dramatic rim lights, no HDR look, no plastic smoothing, no extra people.

Output: landscape 3:2, 2K.
```

**אם הפנים של דוד זזו:** להריץ עריכה על התוצאה עם Image 1 מצורפת:
`Keep everything identical. Replace only the coach's face with the face from Image 1, matched to the same head angle and lighting. Do not touch anything else.`
אותו דבר לאישה עם Image 2.

---

## שלב 3 – הרכבת הפוסטר (טקסט בלבד, בלי לגעת בפנים)

**להעלות:** Image 1 = התוצאה משלב 1 (דוד המאמן). Image 2 = התוצאה משלב 2 (סצנת הפדים).

```
Compose a vertical advertising poster from the two finished photos. THE PHOTOS ARE FINAL: do not regenerate, repaint, retouch or alter any face, body or clothing in Image 1 or Image 2. You may only crop, scale, position, feather the edges and adjust overall brightness so they blend with the background. If any face changes even slightly, the result is wrong.

HEBREW TEXT RULES: Render every Hebrew string EXACTLY as written, character for character, right-to-left, correct letterforms, no invented words, no extra or missing letters. "MMA" and "davidisrael.mma" stay in Latin letters. Headline: heavy condensed bold Hebrew display font with a rough grunge texture overlay. Body: clean bold Hebrew sans-serif (like Heebo Bold). All text crisp and legible. Safe margins of at least 5%.

OUTPUT: vertical poster 2:3, 2K, no watermark, no gibberish text, no extra images, no invented logos.

STYLE: Dark premium gym poster. Background: near-black textured concrete. Two diagonal dry-brush stripes sweep from the top-left corner toward the center – one blood red (#C8102E), one off-white – with rough edges and light paint splatter. Palette strictly black, off-white and blood red.

LAYOUT (top to bottom):

1. TOP-LEFT, small: thin red vertical bar with two lines of small white text:
   "קבוצות קטנות של עד 5 מתאמנים"
   "אווירה משפחתית | ליווי אישי"

2. TOP-RIGHT, emblem: a small white line-art crown, below it "MMA" in big bold white letters with a thin red outline, and beneath it "דוד ישראל" in bold white Hebrew.

3. HERO: Image 1 (David the coach), large, occupying roughly the top 50% of the poster, centered, cut out from its background and blended into the brush stripes with a soft feathered edge at the bottom so it fades into the dark background. Do not alter him.

4. HEADLINE, centered, directly under the hero, three stacked lines, each huge and full-width:
   Line 1, off-white: "הגרסה הכי חזקה שלך"
   Line 2, blood red, the largest: "לא מחכה למחר."
   Line 3, off-white: "מתחילים עכשיו."

5. SCENE PANEL: Image 2 (the pad-work session), one wide panel across the full width below the headline, about 22% of the poster height, with a thin red border. Above the panel on the right, a red boxing-glove line icon with two text lines beside it: title in bold white "MMA ואגרוף", subtitle in bold red "כוח | הגנה עצמית | עיצוב וחיטוב". Do not alter the photo.

6. BOTTOM CONTACT BAR, right-aligned rows, each with a red circular icon on the right, small red label above a bold white value:
   Phone icon – "התקשרו" – "[מספר טלפון]"
   Instagram icon – "עקבו" – "davidisrael.mma"
   Location pin icon – "כתובת" – "[כתובת הסטודיו]"
   Bottom-left corner: red pill button with white bold text "שיעור ניסיון – שלחו הודעה".

FINAL CHECK: both photos unchanged apart from cropping and edge blending, every Hebrew word spelled exactly as given, no extra text.
```

**לפני ההרצה:** להחליף `[מספר טלפון]` ו‑`[כתובת הסטודיו]` בערכים אמיתיים, או למחוק את השורה.

---

## אם עדיין לא דומה: כלים נוספים

1. **לוותר על שלב 1 לגמרי** ולהשתמש בצילום החזיתי המקורי כמו שהוא בתור הגיבור. דוד בלי חולצה עם השקים מאחוריו זה צילום טוב. רק לחתוך ולשלב בשלב 3. אפס סיכון לפנים.
2. **לצלם את שלב 2 באמת.** 10 דקות בסטודיו עם טלפון: דוד עם פדים, האישה מכה, זווית צד, אור מהחלון. תמונה אמיתית תמיד תנצח, והמודל יעשה רק את שלב 3. זו הדרך הכי בטוחה ל"סופר אמיתי".
3. **תאורה ומרחק דומים לרפרנס.** ככל שהראש בתמונה המיוצרת בגודל וזווית דומים לרפרנס, הפנים מדויקות יותר. לכן בשלב 2 ביקשתי זווית צד קרובה ולא שוט רחב.
4. **לא לבקש הבעות פנים חדשות.** "צועק", "מחייך" גורמים למודל לצייר פנים מחדש. "focused, mouth closed" שומר על הפנים.
