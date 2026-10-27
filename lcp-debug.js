const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 412, height: 823, isMobile: true });
  
  await page.evaluateOnNewDocument(() => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      for (const entry of entries) {
        console.log('LCP Entry:', entry.element ? entry.element.tagName + '.' + entry.element.className : entry.url, 'Size:', entry.size);
      }
    });
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  });

  page.on('console', msg => console.log('LOG:', msg.text()));
  await page.goto('https://hausarztpraxis-duebendorf.ch/', { waitUntil: 'networkidle0' });
  await browser.close();
})();
