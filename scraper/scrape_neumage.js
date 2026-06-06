const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://neumage.ai/', { waitUntil: 'networkidle2' });
  
  const text = await page.evaluate(() => document.body.innerText);
  
  fs.writeFileSync('neumage_text.txt', text);
  
  await browser.close();
  console.log('Scraping done!');
})();
