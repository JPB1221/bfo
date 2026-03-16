const puppeteer = require('/home/ubuntu/bfo/frontend/node_modules/puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');
const handler = require('serve-handler');

const BUILD_DIR = '/home/ubuntu/bfo/frontend/build';
const PORT = 9876;

const ROUTES = [
  '/',
  '/government',
  '/enterprise',
  '/local-business',
  '/capabilities',
  '/case-studies',
  '/about',
  '/contact',
  '/request-proposal',
  '/insights',
  '/insights/government-software-modernization-guide',
  '/insights/enterprise-workflow-automation-roi',
  '/insights/secure-cloud-architecture-best-practices',
  '/insights/small-business-website-investment-guide',
  '/insights/ai-automation-for-government-and-enterprise',
  '/insights/mobile-app-development-for-field-teams',
  '/insights/custom-software-vs-off-the-shelf-local-business',
  '/insights/navigating-government-software-contracts',
  '/insights/digital-transformation-enterprise-legacy-systems',
];

async function main() {
  // Start a local static server
  const server = http.createServer((req, res) => {
    return handler(req, res, {
      public: BUILD_DIR,
      rewrites: [{ source: '**', destination: '/index.html' }],
    });
  });
  
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`Server started on port ${PORT}`);

  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    headless: true,
  });

  for (const route of ROUTES) {
    try {
      const page = await browser.newPage();
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });
      
      // Wait a bit for React to render
      await new Promise(r => setTimeout(r, 1000));
      
      const html = await page.content();
      await page.close();

      // Save to the correct path
      let savePath;
      if (route === '/') {
        savePath = path.join(BUILD_DIR, 'index.html');
      } else {
        const dir = path.join(BUILD_DIR, route);
        fs.mkdirSync(dir, { recursive: true });
        savePath = path.join(dir, 'index.html');
      }

      fs.writeFileSync(savePath, html);
      console.log(`✓ Prerendered: ${route} → ${savePath}`);
    } catch (err) {
      console.error(`✗ Failed: ${route} — ${err.message}`);
    }
  }

  await browser.close();
  server.close();
  console.log('Done!');
}

main().catch(console.error);
