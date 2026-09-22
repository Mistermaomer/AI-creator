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

## שלב 2 – הסצנה: דוד מחזיק פדים ומאמן את האישה (3 תמונות)

**להעלות בסדר הזה:**

| # | מה | תפקיד |
|---|---|---|
| Image 1 | הצילום החזיתי של דוד מול השקים | נעילת הפנים של דוד |
| Image 2 | תמונת האישה | נעילת הפנים והגוף של האישה |
| Image 3 | צילום אמיתי של דוד מאמן אישה עם פדים | עוגן הסצנה: פוזה, מרחק, זווית, תאורה, מקום |

### אופציה A (מומלץ): עריכה של Image 3 עצמה

זו הדרך עם הכי הרבה סיכוי שהוא ייראה הוא, כי הפנים בסצנה הן הפיקסלים האמיתיים שלו מהצילום.

```
This is a photo EDIT of Image 3, not a new generation. Image 3 is a real photo of David (the coach) holding focus mitts and training a woman in boxing.

KEEP FROM IMAGE 3, untouched: David's face, head angle, expression, hair, beard, body, hands, the mitts, his pose, the camera angle, the framing and the studio. Use Image 1 only to confirm his identity – his face must stay exactly the real face from Image 3.

CHANGE ONLY:
1. Replace the woman in Image 3 with the woman from Image 2: her face, hair, skin tone and body must match Image 2 exactly, placed in the same position, pose and scale as the woman in Image 3, gloves up, landing a punch into David's mitt. Match the lighting and shadows of the scene so she looks photographed in the same moment. She is athletic and strong, never sexualized.
2. Clean up the frame: remove clutter or people in the background that distract, keep the real studio (bags, floor, windows).
3. Light retouch only: balance exposure, slightly deepen contrast, keep natural skin texture and sensor grain. No cinematic haze, no plastic smoothing, no HDR look.

If the woman in Image 3 is already the woman from Image 2, skip step 1 and only do steps 2-3.

Output: landscape 3:2, 2K, photoreal, real-camera look. It must look like the original photo, just cleaner.
```

### אופציה B: שחזור הסצנה מ‑Image 3 (אם הצילום המקורי חלש: מטושטש, זווית רעה, תאורה גרועה)

```
Create ONE photoreal candid photo of a boxing pad-work session, built from the three reference images.

ROLES OF THE IMAGES:
- Image 1 = David's identity. His face must match Image 1 exactly: same eyes, brows, nose, beard shape and density, hairline, skin tone. Do not invent a new face, do not beautify, slim, age or de-age him.
- Image 2 = the woman's identity. Her face, hair, skin tone and body must match Image 2 exactly. Athletic and strong, portrayed with respect, never sexualized.
- Image 3 = the scene anchor. Recreate the exact composition of Image 3: the same positions of coach and trainee, the same distance between them, the same camera angle and height, the same framing, the same studio and the same direction of light. Image 3 shows what David actually looks like when he coaches: copy his posture, how he holds the mitts and his body language from it. Only the two faces come from Images 1 and 2.

SCENE DETAILS (to fill in what Image 3 does not show clearly): David in a plain fitted black t-shirt, black training pants and black hand wraps, holding two red focus mitts up at chest height, weight on the front foot, watching the woman's hands with a calm focused coach's expression, mouth closed or slightly open, no exaggerated shouting. The woman in a black sports top and black leggings with black boxing gloves, landing a straight punch into his mitt, body rotated into the punch, chin tucked, eyes on the mitt, the pad slightly deformed by the impact. Real MMA studio: grey rubber floor, black heavy bags on chains, big windows with a hazy city view, daylight.

CAMERA: same angle as Image 3, but make sure BOTH faces are clearly visible and in sharp focus; if Image 3 hides a face, rotate the viewpoint by the smallest amount needed. 35mm lens, eye level, background softly blurred. Keep both heads at a similar size to the reference photos so the features stay accurate.

REALISM RULES: This must look like a real photo from an actual session on a professional camera, not an ad render. Natural skin texture, slight motion blur only on the punching glove, real sensor grain, imperfect real-world details (chalk marks on the floor, a water bottle by the wall, a towel on the bag), muted natural colors, no cinematic haze, no dramatic rim lights, no HDR look, no plastic smoothing, no extra people, no text.

Output: landscape 3:2, 2K.
```

**אם הפנים של דוד זזו (בשתי האופציות):** להריץ עריכה על התוצאה עם Image 1 מצורפת:
`Keep everything identical. Replace only the coach's face with the face from Image 1, matched to the same head angle and lighting. Do not touch anything else.`
אותו דבר לאישה עם Image 2.

**טיפ:** אם ב‑Image 3 דוד לבוש אחרת (בלי חולצה, חולצה אחרת), באופציה A לא לבקש להחליף לו בגדים. כל שינוי על הגוף שלו מגדיל את הסיכון לפנים. את הלוק אפשר לאחד בשלב 3 עם פילטר צבע על כל הפוסטר.

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

---

## שלב 2, גרסה סופית: הרחבת הצילום האמיתי (outpaint)

יש צילום אמיתי של דודי מאמן את האישה עם פדים, אבל דודי חתוך בקצה השמאלי. הפתרון: להרחיב את הפריים שמאלה ולהשלים אותו מהרפרנס. כל השאר נשאר מקורי.

**להעלות בסדר הזה:**

| # | מה |
|---|---|
| Image 1 | הצילום האמיתי (האישה מכה, דודי חתוך משמאל) |
| Image 2 | הצילום החזיתי של דודי מול השקים |
| Image 3 | תמונת רפרנס של האישה (פנים ברורות) |

```
This is an OUTPAINT / frame-extension edit of Image 1. Image 1 is a real photo: a woman landing a punch into red focus mitts held by her coach David, who is cut off at the left edge of the frame.

GOAL: extend the canvas to the LEFT so that David is fully inside the frame, standing across from her, and both people are visible in the studio together. Effectively, shift the whole scene to the right and reveal the part of David that the original crop lost.

KEEP PIXEL-IDENTICAL, do not regenerate or retouch: the woman (face, hair, body, gloves, shin guards, pose – she is the real person from Image 3), the floor, the heavy bags, the windows, the city view, the lighting and the colors. Everything that already exists in Image 1 stays exactly as it is.

RECONSTRUCT ONLY the missing left part of the image:
- Complete David's body naturally from what is already visible at the left edge: the same black t-shirt, black pants, black-and-white sneakers, the tattooed forearm, and the red focus mitts held up in exactly the same position – his hands and the mitts must not move, since her glove is touching them.
- His pose: a coach's stance, feet staggered, weight slightly forward, torso turned toward her, head up, eyes on her hands, calm focused expression, mouth closed.
- His face and head must match Image 2 exactly: same face shape, eyes, brows, nose, beard shape and density, curly dark hair, skin tone. Seen in profile or three-quarter view, consistent with the sliver of beard already visible at the left edge. Do not invent a different man. Do not beautify.
- Continue the studio to the left seamlessly: the same grey rubber floor tiles with the same perspective, the same window frames and glass, the same outdoor city view and sky, the black battle rope on the floor continuing naturally. Match the exact daylight, white balance, shadows and the same slight sensor grain so the new area is indistinguishable from the original photo.

COMPOSITION: extend the canvas by roughly 35-40% on the left. Final framing: David on the left third, the woman in the center-right, both fully in frame from head to feet, heavy bags on the right. Keep the camera height and lens perspective of Image 1.

REALISM: this must look like the same photo taken with a slightly wider lens, not a composite. No visible seam, no change in sharpness or color between old and new areas, no extra people, no text, no logos added.

Output: portrait 4:5, 2K.
```

**אם הפנים של דודי לא יצאו הוא:** להריץ עריכה על התוצאה עם התמונה החזיתית מצורפת:
`Keep everything identical. Replace only the coach's face with the face from Image 2, matched to the same head angle, size and lighting. Do not touch anything else.`

**אם המודל שינה את האישה או את הרקע:** לחזור לפרומפט ולהוסיף בשורה הראשונה:
`Treat Image 1 as a locked layer. Generate pixels only in the newly added area on the left.`

**הערה על ציפיות:** הפנים של דודי כאן מיוצרות (הן לא היו בצילום), אז זה הדבר היחיד בתמונה שיכול לא להיות מדויק. כל השאר אמיתי. אם זה לא מספיק, הפתרון הכי טוב הוא לצלם את אותו רגע שוב עם המצלמה שני צעדים אחורה, ואז אין בכלל צורך בשלב הזה.
