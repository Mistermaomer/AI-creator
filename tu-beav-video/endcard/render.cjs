const { chromium } = require('playwright');

const FPS = 30, DUR = 4.5; // seconds
const FRAMES = Math.round(FPS * DUR);
const dir = __dirname + '/';

(async () => {
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1080, height: 1920 },
  deviceScaleFactor: 1,
});
await page.goto('file://' + dir + 'endcard.html');
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(300);

// Freeze every animation, then scrub the timeline manually.
// Negative-delay ambience loops keep their stagger: natural time at wall-clock
// t is (t - delay), so we scrub each animation to (ms - min(delay, 0)).
await page.evaluate(() => {
  window.__anims = document.getAnimations();
  window.__off = window.__anims.map(a => {
    const d = a.effect.getTiming().delay;
    return d < 0 ? -d : 0;
  });
  for (const a of window.__anims) a.pause();
});

for (let i = 0; i < FRAMES; i++) {
  const t = (i / FPS) * 1000;
  await page.evaluate((ms) => {
    window.__anims.forEach((a, k) => { a.currentTime = ms + window.__off[k]; });
  }, t);
  await page.screenshot({ path: `${dir}frames/f${String(i).padStart(4, '0')}.png` });
  if (i % 30 === 0) console.log(`frame ${i}/${FRAMES}`);
}
await browser.close();
console.log('done', FRAMES, 'frames');
})();
