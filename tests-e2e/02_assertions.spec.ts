import {expect, test} from '@playwright/test'
test ("Assertions demo", async ({page,baseURL,browserName}) => {  //need not to write browser, context and new page
    //test.slow()
    //test.slow (browserName === 'firefox')
    await page.goto(`$ {baseURL}`)
    //await page.locator("//input[@id='user-message']").fill("Hello World!!!")
    const messageText = "My message !!"
    const messagebox = page.locator("//input[@id='user-message']") //creates the object of the element
    //await messagebox.scrollIntoViewIfNeeded
    expect (messagebox).toHaveAttribute("placeholder", "Please enter your Message")
    await messagebox.fill(`${messageText}`)
    await page.waitForTimeout(2000)

    //await context.clearCookies();

    await page.click("#showInput")
    //const displayedMsg = page.locator("id=message")
    expect(page.locator("p#message")).toHaveText(`${messageText}`)
    await page.waitForTimeout(2000)

}
)
