import { chromium } from "playwright";

function theme(page) {
  return page.evaluate(() => {
    const html = document.documentElement;
    const body = document.body;
    const cs = getComputedStyle(body);
    const work = document.getElementById("work");
    const team = document.getElementById("team");
    const header = document.querySelector("header");
    const hero = document.getElementById("hero");
    const card = document.querySelector("#work article");
    return {
      night: html.classList.contains("night"),
      afterHero: body.classList.contains("after-hero"),
      bg: cs.backgroundColor,
      fg: cs.color,
      pageBg: cs.getPropertyValue("--page-bg").trim(),
      pageFg: cs.getPropertyValue("--page-fg").trim(),
      workFg: work ? getComputedStyle(work).color : null,
      workBg: work ? getComputedStyle(work).backgroundColor : null,
      teamFg: team ? getComputedStyle(team).color : null,
      headerFg: header ? getComputedStyle(header).color : null,
      headerBg: header ? getComputedStyle(header).backgroundColor : null,
      heroBg: hero ? getComputedStyle(hero).backgroundColor : null,
      cardBg: card ? getComputedStyle(card).backgroundColor : null,
      scrollY: Math.round(window.scrollY),
    };
  });
}

const browser = await chromium.launch({
  channel: "chrome",
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://127.0.0.1:3000/?v=night1", {
  waitUntil: "networkidle",
  timeout: 25000,
});
await page.waitForTimeout(800);

const top = await theme(page);
await page.screenshot({ path: "/tmp/jenafy-top.png" });

await page.evaluate(() =>
  document.getElementById("work")?.scrollIntoView({ behavior: "instant", block: "start" }),
);
await page.waitForTimeout(900);
const work = await theme(page);
await page.screenshot({ path: "/tmp/jenafy-work.png" });

await page.evaluate(() =>
  document.getElementById("team")?.scrollIntoView({ behavior: "instant", block: "start" }),
);
await page.waitForTimeout(900);
const team = await theme(page);
await page.screenshot({ path: "/tmp/jenafy-team.png" });

await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
await page.waitForTimeout(900);
const back = await theme(page);
await page.screenshot({ path: "/tmp/jenafy-back.png" });

await page.goto("http://127.0.0.1:3000/Portfolio?v=night1", {
  waitUntil: "networkidle",
});
await page.waitForTimeout(700);
const port = await theme(page);
await page.screenshot({ path: "/tmp/jenafy-portfolio.png" });

await page.goto("http://127.0.0.1:3000/?v=night1#work", {
  waitUntil: "networkidle",
});
await page.waitForTimeout(700);
const hashWork = await theme(page);
await page.click('a[href="/Portfolio"]');
await page.waitForTimeout(900);
const fromHashToPort = await theme(page);

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto("http://127.0.0.1:3000/?v=night1", {
  waitUntil: "networkidle",
});
await mobile.waitForTimeout(700);
const mobileTop = await theme(mobile);
await mobile.screenshot({ path: "/tmp/jenafy-mobile-top.png" });
await mobile.evaluate(() =>
  document.getElementById("work")?.scrollIntoView({ behavior: "instant", block: "start" }),
);
await mobile.waitForTimeout(900);
const mobileWork = await theme(mobile);
await mobile.screenshot({ path: "/tmp/jenafy-mobile-work.png" });
await mobile.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
await mobile.waitForTimeout(900);
const mobileBack = await theme(mobile);

console.log(
  JSON.stringify(
    { top, work, team, back, port, hashWork, fromHashToPort, mobileTop, mobileWork, mobileBack },
    null,
    2,
  ),
);
await browser.close();
