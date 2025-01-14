import {test,expect} from "@playwright/test";

test("Handling single selection dropdown",async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
    const dropdown = page.locator("#select-demo")
    const dropdownopt = page.locator("#select-demo option")
    const dropdownoptions = await page.$$("#select-demo option") // array format


    await page.selectOption('#select-demo', {label: "Monday"})
    await page.waitForTimeout(1000)
    await page.selectOption('#select-demo', {value: "Friday"})
    await page.waitForTimeout(1000)
    await page.selectOption('#select-demo', {index: 2 })

    console.log(await dropdownopt.allInnerTexts) //to have  all the options
    console.log(dropdownopt.count()) // to count all the options
    console.log(dropdownoptions.length)

    await expect(dropdownopt).toHaveCount(8) // to assert
    expect(await dropdownopt.nth(1).allInnerTexts()).toContain("Sunday")
    await expect(dropdown).toHaveValue("Monday") //to assert (line14 and 21 assertion should match)
    //await expect (dropdown).toHaveId('5') //to assert
    //await expect (dropdown).toHaveText("Monday") //to assert

    const dropdowncontent = await dropdown.textContent()
    expect (dropdowncontent ?. includes ("Monday")).toBeTruthy()

    let status = false
    for (const opt of dropdownoptions) {
        console.log ("The object of options is: ", opt)
        let optTxt = await opt.textContent()
        if (optTxt === 'Sunday'){
            status = true
            break;
            }
    }
expect(status).toBeTruthy()

})

test("Multiple selection dropdown",async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
    const multDropDown = page.locator("#multi-select")

    await page.selectOption("#multi-select", [
        {label: "Texas"},
        {index: 2},
        {value: "Texas"}
    ])


    //await page.selectOption("#multi-select", ["Texas", "Texas"])

    await page.close()
})