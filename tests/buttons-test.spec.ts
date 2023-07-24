import { test, expect, Page } from '@playwright/test'
import { AddRemoveElemetsPage } from '../pages/buttons-page'

let page: Page

// Below code will run before each test
test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()
    const addRemoveElementPageObj = new AddRemoveElemetsPage(page)
    await addRemoveElementPageObj.goToBasePage()
});

// Below code will run after each test
test.afterEach(async () => {
    await page.close()
});


test('verify user can add a button on the web page', async () => {
    const addRemoveElementPageObj = new AddRemoveElemetsPage(page)
    await expect(addRemoveElementPageObj.basePageTitle).toContainText(addRemoveElementPageObj.expectedBasePageTitile)
    await addRemoveElementPageObj.goToSubPage()
    await expect(addRemoveElementPageObj.subPageTitle).toContainText(addRemoveElementPageObj.expectedSubPageTitile)
    await addRemoveElementPageObj.addButton()
    await expect(addRemoveElementPageObj.addButtonName).toBeVisible()
});

test('verify user can remove a button on the web page', async () => {
    const addRemoveElementPageObj = new AddRemoveElemetsPage(page)
    await expect(addRemoveElementPageObj.basePageTitle).toContainText(addRemoveElementPageObj.expectedBasePageTitile)
    await addRemoveElementPageObj.goToSubPage()
    await expect(addRemoveElementPageObj.subPageTitle).toContainText(addRemoveElementPageObj.expectedSubPageTitile)
    await addRemoveElementPageObj.addButton()
    await expect(addRemoveElementPageObj.addButtonName).toBeVisible()
    await addRemoveElementPageObj.removeButton()
    await expect(addRemoveElementPageObj.deleteButtonName).not.toBeVisible()
});


