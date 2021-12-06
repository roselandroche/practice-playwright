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
    // new todo 1
    await page.fill(".new-todo", "practice practice practice");
    await page.press(".new-todo", "Enter");
    // new todo 2
    await page.fill(".new-todo", "get familiar with playwright");
    await page.press(".new-todo", "Enter");
    // new todo 3
    await page.fill(".new-todo", "have great kickoff/trial run");
    await page.press(".new-todo", "Enter");
    // new todo 4
    await page.fill(".new-todo", "begin amazing new job");
    await page.press(".new-todo", "Enter");
    // check that hover reveals delete button
    await page.hover(".todo-list li:nth-child(1)");
    await page.waitForSelector(".destroy");
    // check delete functionality works
    await page.click(".destroy");
    // check completing todo functional
    await page.click(".todo-list li:nth-child(1) .toggle");
    await page.isChecked("li:nth-child(1) .toggle");
    // check all filter
    await page.click("li:has-text('All')");
    await page.isVisible("li.completed");
    await page.isVisible("li:has-text('have great kickoff/trial run')");
    await page.isVisible("li:has-text('begin amazing new job')");
    // check incomplete filter
    await page.click("li:has-text('Active')");
    await page.isVisible("li:has-text('have great kickoff/trial run')");
    await page.isVisible("li:has-text('begin amazing new job')");
    await page.isHidden("li.completed");
    // check completed filter
    await page.click("li:has-text('Completed')");
    await page.isVisible("li.completed");
    await page.isHidden("li:has-text('have great kickoff/trial run')");
    await page.isHidden("li:has-text('begin amazing new job')");
  })();
  // YOUR CODE ENDS
})();
