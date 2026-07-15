# המדריך המלא: יצירת Character Sheet ריאליסטית ועקבית ב-ChatGPT

**עודכן: יולי 2026 · מבוסס על ChatGPT Images 2.0 (מודל `gpt-image-2`)**

מדריך זה נבנה ממחקר של סוכני Opus 4.8 שכל ממצא בו אומת בנפרד מול מקורות מרובים.
כל פרומפט כאן מוכן להעתקה כמו-שהוא (Copy-Paste). מלא רק את השדות שב-[סוגריים].

---

## איך זה עובד — העיקרון במשפט אחד

> **נועלים את הזהות בטקסט → מייצרים פורטרט-אב אחד מושלם → גוזרים ממנו את הגיליון → מעכשיו הגיליון הוא הרפרנס לכל תמונה. הכל בשיחה אחת.**

למה דווקא כך? כי ב-ChatGPT **אין שליטת seed אמיתית** — אי אפשר לשחזר תמונה מאותו מספר. העקביות היחידה שקיימת מגיעה משני מקורות: תמונת רפרנס שהמודל רואה, ופסקת זהות קבועה שחוזרת מילה-במילה. כל שיטה אחרת תגרום ל"סחף פנים" (face drift).

---

## ⚠️ לפני שמתחילים — מדיניות (חשוב, חוסך חסימות)

- **דמות ריאליסטית מקורית (פיקטיבית) — מותרת לחלוטין.** זה בדיוק התרחיש שהמדריך בנוי עבורו.
- **אדם אמיתי מזוהה — חסום/מוגבל.** ChatGPT לא ייצור או יערוך פנים של אדם אמיתי ספציפי, ולא יקבל תמונה של אדם אמיתי כבסיס לדמות.
- לכן: כל פרומפט במדריך פותח בהצהרה `original fictional character, not based on any real person` — אל תמחק אותה, היא מונעת חסימות שווא.
- אל תזכיר שמות מפורסמים ("שתיראה כמו...") — זה מתכון לחסימה.

---

## שלב 0 — הגדרות נכונות (2 דקות)

1. **פתח שיחה חדשה וייעודית** לדמות. כל התהליך — באותה שיחה. ChatGPT משתמש בתמונות קודמות באותה שיחה כרפרנס; שיחה חדשה = איבוד העוגן.
2. **אם יש לך מנוי בתשלום (Plus ומעלה):** ודא שמצב **Thinking** של יצירת תמונות פעיל. במצב זה gpt-image-2 מתכנן לפני שהוא מצייר ויכול לייצר **עד 8 תמונות קוהרנטיות מפרומפט אחד** עם נעילת פנים — יתרון עצום לגיליון רב-פאנלים. בחינם תקבל את מצב Instant (עדיין טוב, פחות עקבי).
3. **דע את המגבלות:** אין seeds; מכסות התמונות משתנות לפי תוכנית (בחינם — בודדות ביום); רזולוציה גבוהה ויחסי מסך גמישים נתמכים ב-gpt-image-2 (עד ~3840px, יחסים עד 3:1).

---

## שלב 1 — ה-Character Bible (נעילת הזהות בטקסט)

זה השלב שרוב האנשים מדלגים עליו — ולכן הדמויות שלהם "זזות" בין תמונות. הדבק את הפרומפט הבא בשיחה **לפני כל תמונה**. הוא מייצר גם את האישיות וגם את "עוגן הזהות הפיזית" שישמש כל פרומפט תמונה בעתיד.

### פרומפט 1A — מאסטר ליצירת הדמות (העתק הכל)

```
You are a veteran novelist and casting director known for creating characters that
feel like real, specific people — never AI stereotypes. Create a complete character
bible for an ORIGINAL FICTIONAL human character (not based on any real person).

GROUNDING (my inputs):
- Setting: [עיר + שכונה ספציפית], Year: [שנה]
- Age: [גיל], Gender: [מגדר], Occupation: [עיסוק]
- Socioeconomic class: [מעמד], Intended use: [AI influencer / fiction / brand]
- Anything I already know about them: [מה שכבר יש לך, או "nothing yet"]

OUTPUT THESE SECTIONS, with concrete, sensory, specific detail:

1. CORE IDENTITY — name, nickname, date of birth, birthplace, current neighborhood,
   education, languages.

2. FIXED PHYSICAL IDENTITY ANCHOR — one tight 60-90 word paragraph I can paste
   verbatim into image prompts. Include in order: apparent age + ethnicity/heritage
   look, face shape, jaw, cheekbones, skin tone + visible texture, eye color + shape,
   eyebrows, nose, lips, hair color/length/texture/parting, build + height, and
   EXACTLY TWO distinguishing imperfections (e.g., asymmetric freckles, a small scar,
   a slightly crooked front tooth). Do NOT include clothing, pose, mood, or lighting.
   Never use "perfect", "flawless", "stunning", "beautiful".

3. PERSONALITY — Big Five (O,C,E,A,N) scored 1-10 with one behavioral example each;
   3 strengths, 2 real flaws, core values, ONE contradiction where they act against
   a stated value, greatest fear, secret desire, and the one lie they tell themselves.

4. BACKSTORY — family, one formative childhood wound, two turning points.

5. VOICE — tone, sentence rhythm, vocabulary level, humor style, 2 verbal tics,
   one topic they overshare, one they avoid. Then 3 sample lines of dialogue.

6. DAILY LIFE — routine, home, 3 specific possessions/brands, 2 habits.

7. DEFAULT WARDROBE + one signature accessory.

RULES: Ground every trait in the specified place/time/class. No clichés (no
"mysterious past", "piercing eyes", "heart of gold"). Prefer specific nouns over
adjectives. Include at least three surprising-but-believable details.
```

> **טיפ עומק (אופציונלי):** אם התוצאה מרגישה גנרית, המשך עם: `Now interview this character in first person using the Proust Questionnaire. Answer AS the character, in their voice. Then update the bible with anything new.` ראיון איטרטיבי מייצר עומק שפרומפט בודד לא מגיע אליו.

### מה לשמור מהשלב הזה
העתק לצד את **פסקת ה-FIXED PHYSICAL IDENTITY ANCHOR** — זו "תעודת הזהות" של הדמות. היא חוזרת מילה-במילה בכל פרומפט תמונה מעכשיו.

---

## שלב 2 — פורטרט המאסטר (תמונת-האב)

מייצרים תמונה קנונית **אחת** — פרונטלית, ניטרלית, נקייה — שממנה ייגזר הכל. אל תשמור כמה "פנים מועמדות"; עוגן אחד בלבד.

### פרומפט 2A — פורטרט מאסטר (העתק, הדבק את פסקת העוגן במקום המסומן)

```
Photorealistic editorial portrait photograph of an original fictional character
named [שם הדמות] (not based on any real person).

IDENTITY (keep exactly): [הדבק כאן את פסקת ה-IDENTITY ANCHOR משלב 1]

Head-and-shoulders, front-facing, neutral relaxed expression, eyes to camera.
Neutral mid-grey seamless studio backdrop. Soft directional key light from
camera-left with gentle fill, subtle falloff — not flat ring-light. Shot on an
85mm lens, shallow depth of field, natural color grading.

Skin must look real: visible pores, fine lines, subtle uneven skin tone, natural
micro-shine on the T-zone, a few individual flyaway hairs. NOT smooth, NOT
airbrushed, NOT waxy, NOT plastic, NOT a 3D/CGI render, no beauty filter.

Portrait orientation (2:3). A photograph, not an illustration.
```

**קריטריון עצירה:** אל תמשיך לשלב 3 עד שהפנים בדיוק כמו שאתה רוצה. תקן בעריכות ממוקדות ("make the jaw slightly narrower, keep everything else identical") — לא בהתחלה מחדש.

---

## שלב 3 — יצירת ה-Character Sheet

עכשיו, **באותה שיחה**, מיד אחרי פורטרט המאסטר:

### פרומפט 3A — הגיליון המלא (העתק)

```
Using the exact character from the previous image, create a professional character
reference sheet for [שם הדמות]. Keep the exact same face, proportions, hair, and
skin in every single panel — photorealistic, identical identity throughout, same
realism level and color treatment as the reference portrait.

Layout on a clean neutral light-grey studio background, organized like a film
studio model sheet, portrait orientation:

- TOP: one large hero face close-up, plus a face-rotation strip: front, 3/4 left,
  left profile, 3/4 right.
- MIDDLE: full-body turnaround in a neutral A-pose — FRONT, SIDE, BACK views, same
  height and same outfit in all three: [תלבושת ברירת המחדל משלב 1].
- BOTTOM: expression row of face close-ups — neutral, warm smile, laughing, angry,
  sad, surprised.

Even soft three-point studio lighting, no harsh shadows, consistent scale across
panels. Label each panel with small clean text (FRONT / SIDE / BACK and the
expression names) and write "[שם הדמות]" prominently at the top of the sheet.

Photorealistic photography in every panel — no illustration, no cartoon, no
cel-shading, no 3D render. Keep realistic skin texture (visible pores, no
over-smoothing) in every panel.
```

**למה השם על הגיליון?** זה טריק מאומת: כשהשם מוטבע בתמונה, בהעלאות עתידיות המודל "רואה וקורא" מי זו הדמות — ואפשר לכתוב פשוט "[שם] is sitting at a café" בלי לתאר אותה מחדש.

**שמור את הגיליון** (הורדה מקומית) — זהו הנכס המרכזי שלך.

---

## שלב 4 — כל תמונה עתידית (השימוש השוטף)

### פרומפט 4A — תמונה חדשה עם הדמות (העתק)

```
[העלה את קובץ הגיליון המקורי]

This is the character reference sheet for [שם הדמות], my original fictional
character. Keep the face, hair, skin, and proportions perfectly consistent with
this reference sheet — do not alter identity in any way.

Now show [שם הדמות] [מה היא עושה] in [לוקיישן], [פריים: full body / waist-up /
close-up], [תאורה: e.g., golden hour sunlight / soft window light]. Outfit:
[תלבושת, או "same as reference"].

Photorealistic photograph, realistic skin texture with visible pores, shot on
[35mm / 50mm / 85mm] lens. [יחס: portrait 2:3 / square / landscape 3:2].
```

### שני חוקי ברזל
1. **תמיד לחזור לגיליון-האב המקורי.** לעולם לא לייצר תמונה מתוך תמונה מתוך תמונה — סטייה (drift) מצטברת בשרשור והפנים "בורחות" תוך 3–4 דורות.
2. **הזהות מגיעה מהרפרנס, הסצנה מגיעה מהטקסט.** בפרומפט מתארים רק מה משתנה (פעולה, מקום, תאורה, בגדים) — לא את הפנים.

---

## שלב 5 — שימור הדמות לטווח ארוך

| צורך | פתרון | זמינות |
|---|---|---|
| מרחב עבודה קבוע לדמות | **ChatGPT Project**: הדבק את ה-bible ב-Project Instructions + העלה אותו כקובץ txt + שמור שם את הגיליון. כל שיחה חדשה בפרויקט "מכירה" את הדמות. | כל התוכניות, כולל חינם |
| פרסונה לשיתוף/שימוש חוזר | **Custom GPT** עם ה-bible ב-Instructions + הגיליון ב-Knowledge | בתשלום (Plus ומעלה) |
| Memory הגלובלי של ChatGPT | **לא מומלץ** כמאגר ראשי — הוא גלובלי, לא ניתן לתיחום, והדמות "תדלוף" לשיחות אחרות | — |

**לעבודה על הטקסט (ה-bible):** בחר ידנית מודל חשיבה (GPT-5.5 Thinking או GPT-5.6), לא את ברירת המחדל — ההבדל בעומק הדמות מורגש.

---

## טבלת תקלות → תיקון מיידי

| תקלה | סיבה | תיקון |
|---|---|---|
| עור פלסטי / "מראה AI" | ברירת המחדל של המודל היא עור מרוטש | הוסף במפורש: `visible pores, fine lines, uneven skin tone, flyaway hairs` + שלילות: `not airbrushed, not waxy, no beauty filter, no CGI`. תאורה כיוונית (לא שטוחה) חושפת טקסטורה |
| הדמות יוצאת מצוירת/מאוירת | סחף סגנוני | חזור על `photorealistic photograph, not illustration, no cartoon, no 3D render` + ציין עדשה (`85mm lens`) |
| פנים שונות בין פאנלים בגיליון | המודל מייצר כל פאנל "מהראש" | ודא שהגיליון נוצר **מיד אחרי** פורטרט המאסטר באותה שיחה, עם `using the exact character from the previous image` |
| הפנים "בורחות" אחרי כמה תמונות | שרשור תוצר-על-תוצר | חזור תמיד לגיליון-האב המקורי כרפרנס יחיד |
| ג'יבריש בתוויות הטקסט | טקסט קטן וצפוף | מעט תוויות, קצרות; אם השתבש — `redo only the text labels, keep the images identical`; או הוסף תוויות בעצמך אח"כ |
| חסימת מדיניות | דמיון לאדם אמיתי / העלאת תמונת אדם אמיתי | פתח כל פרומפט ב-`original fictional character, not based on any real person`; אל תשתמש בתמונות של אנשים אמיתיים כבסיס |
| אותה תמונה לא משתחזרת | אין seeds ב-ChatGPT | זו מגבלה מובנית — העקביות מגיעה מהרפרנס + פסקת העוגן, לא משחזור |

---

## נספח: על מה המדריך מבוסס

המחקר בוצע ביולי 2026 על ידי שלושה סוכני מחקר (Opus 4.8) שסרקו עשרות מקורות, וכל טענה קריטית אומתה בנפרד מול מקורות מרובים. עיקרי האימות:

- **ChatGPT Images 2.0 / gpt-image-2** — שוחרר 21.4.2026; מצב Thinking (בתשלום) עם עד 8 תמונות קוהרנטיות, נעילת פנים מרפרנס, רינדור טקסט משופר; רזולוציה עד ~3840px ויחסים עד 3:1. מקורות: הכרזת OpenAI, [MacRumors](https://www.macrumors.com/2026/04/22/openai-chatgpt-images-2-0/), [Axios](https://www.axios.com/2026/04/21/chatgpt-images-major-update), [The New Stack](https://thenewstack.io/chatgpt-images-20-openai/), [fal.ai](https://fal.ai/learn/tools/gpt-image-2-vs-gpt-image-1-5).
- **היעדר seed control** — [Aimensa](https://aimensa.com/chatgpt-cant-generate-same-image-twice), פורום המפתחים של OpenAI.
- **מדיניות דמויות** — [OpenAI Usage Policies](https://openai.com/policies/usage-policies/): דמות מקורית ריאליסטית מותרת; אדם אמיתי מזוהה מוגבל.
- **תהליך העבודה (bible → מאסטר → גיליון → רפרנס)** — הומלץ באופן עקבי ב-10+ מדריכים עצמאיים מ-2025–2026 (selfielab, glibatree, gensgpt, martini.art, opencreator ועוד).
- **Projects/Custom GPTs/Memory** — [מרכז העזרה של OpenAI](https://help.openai.com/en/articles/10169521-using-projects-in-chatgpt).
- **טכניקות אנטי-קלישאה ו-Big Five לדמויות** — ספרות כתיבה (Reedsy, ProWritingAid, Gotham Writers) + מדריכי AI-influencer (MimicPC, Higgsfield).

הערת רענון: תחום זה משתנה מהר. אם עבר זמן — בדוק את שם מודל התמונות הנוכחי ואת מגבלות המדיניות מול OpenAI לפני קמפיין גדול.
