import {test} from "@playwright/test"

test ("Handling JavaSript Alert - Accept", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

    page.on("dialog", async(alert) =>{
        const alertTxt = alert.message()
        console.log(alertTxt)
        await alert.accept() //click on OK 
        //await alert.dismiss() // click on CANCEL
        //await alert.accept("Nidhi Singh") // for entering text
    })
    await page.locator("(//button[contains(@class,'btn btn-dark')])[1]").click()
    await page.context().close()
    await page.close()
})

test ("Handling Confirm box Alert - Accept", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

    page.on("dialog", async(alert) =>{
        const cnfirmTxt = alert.message()
        console.log(cnfirmTxt)
        await alert.accept() //click on OK 
    
    })
    await page.locator("(//button[contains(@class,'btn btn-dark')])[2]").click()
    await page.context().close()
    await page.close()
})

test ("Handling Confirm box Alert - Cancel", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

    page.on("dialog", async(alert) =>{
        const cnfirmTxt = alert.message()
        console.log(cnfirmTxt)
        await alert.dismiss() //click on Cancel
       
    })
    await page.locator("(//button[contains(@class,'btn btn-dark')])[2]").click()
    await page.context().close()
    await page.close()

})

test("Handling Prompt box Alert", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

    page.on("dialog", async(alert) =>{
        const promptTxt = alert.message()
        console.log(promptTxt)
        await alert.accept ("Nidhi Singh") //For entering text
       
    })
    await page.locator("(//button[contains(@class,'btn btn-dark')])[3]").click()
    await page.context().close()
    await page.close()

})

test("Handling single Modal Window", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo")
    await page.locator("'Launch Modal'").nth(0).click()
    //await page.locator("'Save Changes'").nth(0).click() // to click on Save Changes button
    await page.locator("'Close'").nth(0).click() // to click on close button

})

test("Handling multiple Modal Window", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo")
    await page.locator("'Launch Modal'").nth(1).click()

    await page.locator("'Launch Modal'").nth(2).click()
    await page.locator("'Save Changes'").nth(2).click()

    //await page.locator("'Save Changes'").nth(1).click() // to click on Save Changes button
    await page.locator("'Close'").nth(1).click() // to click on close button

})

