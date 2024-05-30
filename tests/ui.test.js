const { test, expect } = require("@playwright/test");
const appUrl = "http://localhost:3000"

test('Verify All Books link is visible', async ({ page }) => {
    // Open the applicaiton
    await page.goto(appUrl);

    // locate page toolbar
    await page.waitForSelector('nav.navbar');

    // Get All Books link
    const allBooksLink = await page.$('section > a');

    // Check if element is visible
    const isElementVisible = await allBooksLink.isVisible();

    // Verify the element is visible
    expect(isElementVisible).toBe(true);
});

test('Verify Login link is visible', async ({ page }) => {
    await page.goto(appUrl);
    await page.waitForSelector('nav.navbar');
    const loginLink = await page.$('a[href="/login"]');
    const isElementVisible = await loginLink.isVisible();

    expect(isElementVisible).toBe(true);
});

test('Verify Register link is visible', async ({ page }) => {
    await page.goto(appUrl);
    await page.waitForSelector('nav.navbar');
    const registerLink = await page.$('a[href="/register"]');
    const isElementVisible = await registerLink.isVisible();

    expect(isElementVisible).toBe(true);
});

test('Verify Register link text', async ({ page }) => {
    await page.goto(appUrl);
    await page.waitForSelector('nav.navbar');
    const registerLink = await page.$('a[href="/register"]');
    const registerLinkText = await registerLink.textContent();

    expect(registerLinkText).toEqual("Register");
});

test('Verify valid user can login', async ({ page }) => {
    await page.goto(appUrl);
    await page.waitForSelector('nav.navbar');

    // Navigate to Login page
    const loginLink = await page.$('a[href="/login"]');
    await loginLink.click();

    // Fill the user data
    await page.fill('#email', "peter@abv.bg");
    await page.fill('#password', "123456");

    // Click on Login button
    const loginButton = await page.$('xpath=//*[@id="login-form"]/fieldset/input');
    await loginButton.click();

    // Verify the Logout button is present
    // await page.waitForURL('http://localhost:3000/catalog');
    const logoutButton = await page.$('#logoutBtn');
    const logoutButtonText = await logoutButton.textContent();

    expect(logoutButtonText).toEqual("Logout");

});