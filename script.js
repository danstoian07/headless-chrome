const puppeteer = require('puppeteer');

(async() => {
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({width: 794, height: 1122, deviceScaleFactor: 2});
await page.goto('https://www.chartjs.org/samples/latest/charts/line/basic.html', {waitUntil: 'networkidle2'});
await page.pdf({path: 'page.pdf', format: 'A4', printBackground: true });

await browser.close();
})();