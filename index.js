const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });

  // YOUR CODE STARTS
  // test Netflix, cannot sign in with invalid credentials
  // (async () => {
  //   const page = await browser.newPage();
  //   await page.goto("https://www.netflix.com");
  //   await page.click('button:has-text("Close")');
  //   await page.click('a:has-text("Sign In")');
  //   await page.fill('input[name="userLoginId"]', "fakeUsername");
  //   await page.fill('input[name="password"]', "abc123");
  //   await page.click('button:has-text("Sign In")');
  //   await page.waitForSelector("div:has-text('Please try again')");
  // })();
  // test React todos
  (async () => {
    const page = await browser.newPage();
    // navigate to page
    await page.goto("https://todomvc.com/examples/react/#/");
  })();
  // YOUR CODE ENDS
})();
