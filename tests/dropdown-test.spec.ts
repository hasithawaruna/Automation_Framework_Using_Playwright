import { test, expect, Page } from '@playwright/test'
import { DropDownSelectPage } from '../pages/dropdown-page'

let page: Page

// Below code will run before each test
test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()
    const dropDownObj = new DropDownSelectPage(page)
    await dropDownObj.goToBasePage()
});

// Below code will run after each test
test.afterEach(async () => {
    await page.close()
});

test('verify user can select the first option from a dropdown on the web page', async () => {
    const dropDownObj = new DropDownSelectPage(page)
    await expect(dropDownObj.basePageTitle).toContainText(dropDownObj.expectedBasePageTitile)
    await dropDownObj.goToSubPage()
    await expect(dropDownObj.subPageTitle).toContainText(dropDownObj.expectedSubPageTitile)
    await dropDownObj.selectOption(1)
    expect(await dropDownObj.selecteditemPath.textContent()).toContain(dropDownObj.DropdownOption1)
})

test('verify user can select the second option from a dropdown on the web page', async () => {
    const dropDownObj = new DropDownSelectPage(page)
    await expect(dropDownObj.basePageTitle).toContainText(dropDownObj.expectedBasePageTitile)
    await dropDownObj.goToSubPage()
    await expect(dropDownObj.subPageTitle).toContainText(dropDownObj.expectedSubPageTitile)
    await dropDownObj.selectOption(2)
    expect(await dropDownObj.selecteditemPath.textContent()).toContain(dropDownObj.DropdownOption2)
})