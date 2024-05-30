const { test, expect } = require("@playwright/test");

test('Verify All Books link is visible', async ({ page }) => {
    // Open the applicaiton
    await page.goto("http://localhost:3000");

    // locate page toolbar
    await page.waitForSelector('nav.navbar');

    // Get All Books link
    const allBooksLink = await page.$('section > a');

    // Check if element is visible
    const isElementVisible = await allBooksLink.isVisible();

    // Verify the element is visible
    expect(isElementVisible).toBe(true);

});