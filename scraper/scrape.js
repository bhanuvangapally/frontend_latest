const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://craftifai.com', { waitUntil: 'networkidle2' });
  
  const text = await page.evaluate(() => document.body.innerText);
  const html = await page.evaluate(() => document.body.innerHTML);
  
  fs.writeFileSync('craftifai_text.txt', text);
  fs.writeFileSync('craftifai_html.txt', html);
  
  await browser.close();
  console.log('Scraping done!');
})();
