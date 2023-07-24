import { test, expect, Page } from '@playwright/test'
import { CheckboxPage } from '../pages/checkboxes-page'

let page: Page

// Below code will run before each test
test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()
    const CheckboxObj = new CheckboxPage(page)
    await CheckboxObj.goToBasePage()
});

// Below code will run after each test
test.afterEach(async () => {
    await page.close()
});

test('verify user can check a checkbox on the web page', async () => {
    const CheckboxObj = new CheckboxPage(page)
    await expect(CheckboxObj.basePageTitle).toContainText(CheckboxObj.expectedBasePageTitile)
    await CheckboxObj.goToSubPage()
    await expect(CheckboxObj.subPageTitle).toContainText(CheckboxObj.expectedSubPageTitile)
    await CheckboxObj.checkBox1.check()
    await expect(CheckboxObj.checkBox1).toBeChecked()
    await expect(CheckboxObj.checkBox2).toBeChecked()
})

test('verify user can uncheck a previously checked checkbox on the web page', async () => {
    const CheckboxObj = new CheckboxPage(page)
    await expect(CheckboxObj.basePageTitle).toContainText(CheckboxObj.expectedBasePageTitile)
    await CheckboxObj.goToSubPage()
    await expect(CheckboxObj.subPageTitle).toContainText(CheckboxObj.expectedSubPageTitile)
    await CheckboxObj.checkCheckbox()
    await expect(CheckboxObj.checkBox1).toBeChecked()
    await expect(CheckboxObj.checkBox2).toBeChecked()
    await CheckboxObj.uncheckCheckbox('checkbox1')
    await CheckboxObj.uncheckCheckbox('checkbox2')
    await expect(CheckboxObj.checkBox1).not.toBeChecked()
    await expect(CheckboxObj.checkBox2).not.toBeChecked()
})

