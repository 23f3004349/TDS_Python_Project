const { chromium } = require('playwright');

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const seeds = [11,12,13,14,15,16,17,18,19,20];
  let grandTotal = 0;

  for (let seed of seeds) {
    const url = `https://sanand0.github.io/tdsdata/datadash/seed${seed}.html`;
    await page.goto(url);

    const numbers = await page.$$eval("table td", cells =>
      cells
        .map(c => parseFloat(c.innerText))
        .filter(n => !isNaN(n))
    );

    const pageTotal = numbers.reduce((a, b) => a + b, 0);
    grandTotal += pageTotal;
  }

  console.log("FINAL_TOTAL=", grandTotal);

  await browser.close();
}

run();
