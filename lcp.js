const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 412, height: 823, isMobile: true });
  
  await page.evaluateOnNewDocument(() => {
    window.lcpElement = null;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      window.lcpElement = lastEntry.element ? lastEntry.element.outerHTML : lastEntry.url;
      console.log('LCP:', window.lcpElement);
    });
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  });

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  await page.goto('https://hausarztpraxis-duebendorf.ch/', { waitUntil: 'networkidle0' });
  
  await browser.close();
})();
