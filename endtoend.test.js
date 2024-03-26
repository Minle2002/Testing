const { expect, test, chromium } = require('@playwright/test');

test.describe('USER NAVIGATION', () => {
  let page;
  let browser;

  test.beforeAll(async () => {
    browser = await chromium.launch();
  });

  test.beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000/videogames');
  });

  test.afterEach(async () => {
    await page.close();
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('ADD GAME PAGE', async () => {
    await page.click('a[href="/videogames/new"]');
    await page.waitForLoadState();
  });
});