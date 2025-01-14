import {chromium, test} from '@playwright/test'
test('Launching Browser without page class', async() => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const managerpage = await context.newPage()

    await managerpage.goto("https://ecommerce-playground.lambdatest.io/")
    await managerpage.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']")
    await managerpage.waitForTimeout(2000)
    //await page.click("text=login")
    //await page.locator("//span[normalize-space()='Login']") xpath
    await managerpage.getByText("Login").click()
    await managerpage.waitForTimeout(2000)
    await managerpage.getByPlaceholder("E-Mail Address").fill("nidhi@stockholmitacademy.org")
    await managerpage.locator("#input-password").fill("nidhi123")
    await managerpage.getByRole('button', { name: 'Login' }).click();

    // await managerpage.waitForTimeout(3000)

    const Client1page = await context.newPage() //cookies will be shared
    await Client1page.goto("https://ecommerce-playground.lambdatest.io/")
    // await Client1page.waitForTimeout(2000)
    await Client1page.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']")
    // await Client1page.waitForTimeout(3000)

    const context2 = await browser.newContext() // for generating fresh page
    const client2page = await context2.newPage() //cookies will not be shared as we have used new context
    await client2page.goto("https://ecommerce-playground.lambdatest.io/")
    await client2page.waitForTimeout(2000)
    await client2page.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']")
    await client2page.getByText("Login").click()
    await client2page.waitForTimeout(2000)
    await client2page.getByPlaceholder("E-Mail Address").fill("nidhi@stockholmitacademy.org")
    await client2page.locator("#input-password").fill("nidhi123")
    await client2page.getByRole('button', { name: 'Login' }).click();
    // await client2page.waitForTimeout(2000)











})