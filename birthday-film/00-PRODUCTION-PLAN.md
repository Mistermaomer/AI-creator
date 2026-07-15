# סרט יום הולדת 28 — "הילד שהעיר אותי"
## מסמך הפקה ראשי (Production Bible)

> סרט של ~33 שניות: יקיר נרדם, הילד שהוא היה מעיר אותו בחצות עם עוגה ונר, והם חוגגים יחד — נר, שמפניה מול בקבוק שוקו, צחוק, וכרטיס סיום "28".
>
> **צנרת ההפקה:** GPT Image 2 = מנוע הזהות (character sheets + קיפריימים) · Seedance 2.0 = מנוע התנועה והסאונד · עריכה = הדבק שמחבר הכל.

---

## 1. הכרעות מאושרות

| # | נושא | הכרעה |
|---|------|--------|
| 1 | פוטג' ילדות | **קיים וידאו אמיתי** → שוטים 1–2 (0:00–0:06) הם פוטג' אמיתי בטיפול פוסט בלבד. אין ג'נרוט. |
| 2 | חולצת הפוקימון | מנסים עם המקור כרפרנס. אם פילטר ה-IP של Seedance חוסם/משבש — עוברים ל-fallback הגנרי (ראגלן אפור + ירוק ליים, בלי פיקאצ'ו) שכתוב מראש ב-`01-IMAGE-PROMPTS.md`. |
| 3 | גיל הילד | **כמו בתמונה (~3)**. הפעולות הותאמו: עוגה קטנה שילד בן 3 מחזיק בשתי ידיים, ספירה במחוות ידיים במקום דיבור. |
| 4 | סאונד | **היברידי**: לחישות "יאקיר... קום קום" בפוסט (על הפוטג' האמיתי ממילא). "מזל טוב" — ניסיון נטיבי ב-Seedance עם fallback להקלטה בפוסט. אווירה, פולי ואפקטים — נטיביים. |

---

## 2. המתודה המחייבת (הטמפלט של יקיר)

כל פרומפט וידאו נכתב במבנה הקבוע הזה — הידע על המודלים מוזג *לתוכו*, לא במקומו:

### PART 1 — עוגנים (נעולים לכל הסצנה)
```
[CHAR A]: @Image_ — מי הוא: גיל, מבנה גוף, מאפיינים אמיתיים, לבוש, הלך רוח. כאדם מצולם, לא רשימת אפקטים.
[CHAR B]: @Image_ — אותם שדות.
[PROP]:   @Image_ — חפץ מפתח: חומר, צורה, קנה מידה, פרטים מזהים.
[LOCATION]: @Image_ — הסט: מבנה, קנה מידה, איך אור נכנס, אטמוספרה.
[LOOK]: Shot on 35mm film, hyper-realistic, photographic realism with fine natural
grain and true skin texture and imperfection. Deep shadow and contrast, shallow
depth of field, soft out-of-focus elements in the foreground. Desaturated tones,
a deliberate, evocative cinematic color palette. A real film still, not a render.
Avoid: CGI sheen, plastic smooth skin, glowing eyes, neon VFX, video-game look.
```

### CONTINUITY RULES — קבועים לכל הסרט
| כלל | ערך לפרויקט הזה |
|------|------------------|
| Pace / tempo | דממת חצות אינטימית ולא ממהרת בסגמנטים 2–3 → מתהפכת לאנרגיה חגיגית מסגמנט 4 |
| Weight & consequence | הלהבה מגיבה לנשימה; כריות הספה נלחצות; קצף שמפניה נוחת ונשאר רטוב; פירורי עוגה אמיתיים |
| Scale of motion | מקורקע, ביתי, אנושי — שום דבר על-טבעי |
| What to cut to | פנים וידיים, הלהבה, ריאקשנים של הילד |
| Progression | חושך מוחלט → להבה יחידה → אור חם מלא → צחוק משוחרר |
| Recurring camera motif | פריימים סטטיים נעולים שמתחילים "לנשום" handheld ברגע שהאור נדלק (4A ואילך) |

### PART 2 — סגמנט = 3 שוטים
```
Shot [#][A/B/C] ([framing], ~_s): [פעולה + מצלמה, בהפניה לעוגנים]. [LOOK]. Audio: [sfx + דיאלוג].
```
רוטציית פריימינג בין השלושה; הפריימינג הנועז ביותר שמור לביט המרכזי.

### PHOTO PROMPT — לוק הסטילס (GPT Image 2)
```
Photo realistic, chromatic aberration, shot on film camera, 35mm grain,
documentary style, long lens, blurry background, warm white tones,
anamorphic lens flare, swirly blur.
```

---

## 3. מיפוי תמונות הרפרנס

| קובץ שהועלה | תוכן | תפקיד בהפקה |
|---|---|---|
| `443aa5e0-…JPG` (ילדות) | יקיר בן ~3: שיער חום כהה פרוע, עיניים חומות גדולות, לחיים מלאות, סווטשירט ראגלן אפור עם שרוולים ירוק-ליים והדפס פוקימון/פיקאצ'ו, על בימבה קרם-אדומה | **[CHAR B] הילד** — עוגן זהות + לבוש |
| `8449786c-…JPG` (סלון) | יקיר היום: פרונטלי, חיוך מלא, שיער כהה קצר עם פייד, זקן מעוצב קצר, טישרט שחור | **[CHAR A] המבוגר** — עוגן פנים ראשי |
| `3861e6ba-…JPG` (רכב) | 3/4 פרופיל, טישרט זית | [CHAR A] זווית משלימה (פרופיל/אוזן/קו לסת) |
| `d2dcab5f-IMG_0735` (סנטוריני) | גוף מלא, חיוך רחב | [CHAR A] פרופורציות גוף |
| `bf87c5bc-IMG_3221` (סירה) | תאורת שקיעה חמה, שרשרת כסף פיגרו | רפרנס תאורה חמה לאקט החגיגה + פריט השרשרת |

**לבוש המבוגר בסרט:** טישרט שחור (כמו רפרנס הסלון — נועל זהות) + מכנסי טרנינג אפורים כהים + שרשרת הכסף. מוגדר זהה בכל הפרומפטים.

**הסט הקנוני — "The Midnight Loft" (הוכרע בשלב הביצוע):** הסצנה מתרחשת בלוקיישן מומצא קולנועי, לא בסלון האמיתי. הבלוק הבא הוא [LOCATION] הרשמי ומועתק מילה-במילה לכל פרומפט (תמונה ווידאו):

```
[LOCATION — THE MIDNIGHT LOFT]: A cinematic high-end apartment living room at
midnight: floor-to-ceiling windows with faint out-of-focus city lights and a
soft haze of moonlight, dark walnut wood floor with a large soft area rug, a
deep charcoal fabric couch with textured cushions and a wool throw blanket, a
low walnut-and-stone coffee table, a brass floor lamp (switched off), a wall of
bookshelves with books and small framed photos, a few green plants as dark
silhouettes. Quiet, lived-in, warmly expensive production design.
```

**רפרנסי זהות רשמיים (הוכרע):** ה-Multi-View Sheets המלאים של שתי הדמויות הם רפרנסי הזהות בכל ג'נרוט — לא החיתוכים הבודדים.

**פרופים קבועים (רציפות!):** עוגת שוקולד קטנה עם נר "2" ו-"8" או נר יחיד · בקבוק שמפניה + כוס פלוט · בקבוק שוקו קטן · שניהם מונחים על שולחן הסלון כבר מהקיפריים של סגמנט 3, כדי שלא "יופיעו משום מקום" בסגמנט 4.

---

## 4. מבנה הסרט → סגמנטים של ג'נרוט

| סגמנט | טיים | תוכן | מקור | אורך ג'נרוט |
|---|---|---|---|---|
| **1 · THE DREAM** | 0:00–0:06 | הפוטג' האמיתי בטיפול חלום + השבירה | פוטג' אמיתי + פוסט | — |
| **2 · THE WAKING** | 0:06–0:12 | POV מצמוץ → rack focus → "מזל טוב" | Seedance, Reference mode | ~6s |
| **3 · THE CANDLE** | 0:12–0:18 | ווייד שניהם → רכינה לנר → נשיפה בסלואו | Seedance, קיפריים ראשון | ~6s |
| **4 · THE POP** | 0:18–0:24 | אור נדלק → פקק שמפניה → קלינק שוקו | Seedance, קיפריים ראשון | ~6s |
| **5 · THE CELEBRATION** | 0:24–0:33 | חגיגה → חיבוק → push-out ופייד | Seedance, קיפריים ראשון | ~9s |

כל סגמנט = ג'נרוט אחד ≤ 12 שניות (התקרה השמרנית בין הפלטפורמות). הפריים האחרון של כל סגמנט משמש בסיס לקיפריים של הבא — רציפות תאורה, לבוש ופרופים.

---

## 5. תקציר מומחיות המודלים (ממצאי המחקר)

### Seedance 2.0 (ByteDance)
- **אורך/רזולוציה:** קליפים 4–15s (חלק מהפלטפורמות מגבילות ל-12s), עד 1080p ב-Standard (Fast עד 720p).
- **אודיו נטיבי:** Dual-Branch Diffusion — וידאו ואודיו נוצרים יחד: דיאלוג עם ליפ-סינק (8+ שפות; **חלש יותר בשפות לא-אנגליות** → עברית = סיכון מנוהל), SFX פיזיקליים (צעדים, מים, פקק), אווירה ומוזיקה.
- **רפרנסים:** עד 9 תמונות / 3 וידאו / 3 אודיו בג'נרוט, בתחביר `@Image1`, `@Video1`, `@Audio1`. תמונה = זהות; וידאו = תנועה/מצלמה; אודיו = קצב/קול.
- **מצבים:** T2V / I2V / R2V / V2V. **First-Frame/Last-Frame ו-Reference-Images בלעדיים הדדית בג'נרוט אחד** (ב-API: `first_frame_url` vs `reference_images`). בממשקי R2V אפשר לכתוב "@Image1 as the first frame" ולשמור רפרנסים נוספים — זו הדרך שלנו.
- **מולטי-שוט:** תחביר `Shot 1: / Shot 2:` + טיימליין `[0s] [3s] [6s]` לקצב מבוקר.
- **נוסחת פרומפט:** Subject → Action → Environment → Camera → Lighting → Style. המודל נועל את הסאבג'קט מתחילת הפרומפט — הדמות תמיד ראשונה.
- **קונסיסטנטיות (קריטי):** 2–3 רפרנסים נקיים לדמות (דמות אחת, ממורכזת, 60–80% מהפריים) מנצחים 6+ מעורבבים (~60% פחות drift). טריגרים ל-drift: ידיים חוצות את הפנים, סיבובי ראש מהירים, טקסטורות חוזרות בבגדים, רקע עמוס. דפוסי כשל: שחיקת פרטים קטנים, היפוך צד, סחף סגנוני, מיזוג זהויות בין שני רפרנסים.
- **חולשות:** טקסט בווידאו = "מרק אותיות" → כרטיס "28" בפוסט. ידיים בקלוז-אפ קיצוני. פיזיקת מראות. **פילטרים מחמירים על פנים אמיתיות ו-IP מוגן** → תוכנית fallback לחולצת הפוקימון.

### GPT Image 2 (OpenAI)
- **רפרנסים:** עד 16 תמונות בקריאה (בפועל 3–5 נבחרות > 16 מעורבבות). תמיד high-fidelity — אין פרמטר `input_fidelity` (שליחתו מפילה את הבקשה).
- **זהות:** שימור פנים חזק בין וריאציות ועריכות — זה מנוע הזהות של הפרויקט.
- **עריכה:** "change X, keep Y unchanged" — לנעול במפורש זהות, פוזה, פריימינג, תאורה כשצריך שיישארו.
- **ריבוי רפרנסים:** לתייג באינדקס — "Image 1: the boy's identity. Image 2: the living-room set." ולתאר את האינטראקציה.
- **טקסט:** מדויק כשנתון במרכאות + דרישת verbatim + מיקום/סגנון. מושלם לכרטיס "28".
- **גדלים:** כפולות של 16; אמין עד 2560×1440. הפרויקט: **1920×1088** (16:9 תואם-וידאו).

### מקורות
- [Seedance 2.0 on PixVerse](https://pixverse.ai/en/blog/seedance-2-0-now-available-on-pixverse) · [Seedance 2.0 best settings — MagicHour](https://magichour.ai/blog/seedance-20-best-settings) · [Seedance 2.0 docs](https://seedance2.app/docs)
- [Timeline prompting — MindStudio](https://www.mindstudio.ai/blog/timeline-prompting-seedance-2-cinematic-ai-video) · [First/Last frame guide](https://seedance-2ai.org/blog/ai-video-first-last-frame-guide) · [Segmind API](https://www.segmind.com/models/seedance-2.0)
- [Character consistency — WaveSpeed](https://wavespeed.ai/blog/posts/blog-character-consistency-seedance-2-0/) · [Identity drift — CrePal](https://crepal.ai/blog/aivideo/blog-seedance-2-0-character-consistency/) · [Limitations — VideoAI.me](https://videoai.me/blog/seedance-2-0-limitations) · [Content restrictions — MindStudio](https://www.mindstudio.ai/blog/seedance-2-0-content-restrictions-workarounds)
- [GPT Image prompting guide — OpenAI Cookbook](https://developers.openai.com/cookbook/examples/multimodal/image-gen-models-prompting-guide) · [GPT Image 2 — Replicate](https://replicate.com/openai/gpt-image-2) · [API guide — WaveSpeed](https://wavespeed.ai/blog/posts/gpt-image-2-api-guide/) · [Reference tutorial — WisGate](https://wisgate.ai/blogs/gpt-image-2-reference-image-prompt-tutorial-for-consistent-visuals)

---

## 6. סדר עבודה

1. **פרה-פרודקשן (GPT Image 2)** — `01-IMAGE-PROMPTS.md`: character sheets → קיפריימים → כרטיס "28".
2. **ג'נרוטים (Seedance 2.0)** — `02-VIDEO-PROMPTS.md`: סגמנט 2 → 3 → 4 → 5, כשכל סגמנט מאושר לפני שממשיכים (הפריים האחרון שלו נדרש לבא).
3. **פוסט** — טיפול הארכיון על הפוטג' האמיתי, לחישות, חיבור, גריידינג, "28", audio tail.
