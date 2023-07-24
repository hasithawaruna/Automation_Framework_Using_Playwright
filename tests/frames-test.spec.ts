import { test, expect, Page } from '@playwright/test'
import { NestedAndIframePage } from '../pages/frames-page'

let page: Page

// Below code will run before each test
test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()
    const nestedAndiFrameObj = new NestedAndIframePage(page)
    await nestedAndiFrameObj.goToBasePage()
});

// Below code will run after each test
test.afterEach(async () => {
    await page.close()
});

test('verify left-frame text is visible on the web page', async () => {
    const nestedAndiFrameObj = new NestedAndIframePage(page)
    await expect(nestedAndiFrameObj.basePageTitle).toContainText(nestedAndiFrameObj.expectedBasePageTitile)
    await nestedAndiFrameObj.goToFramesPage()
    await expect(nestedAndiFrameObj.framePageTitle).toContainText(nestedAndiFrameObj.expectedFramePageTitile)
    await nestedAndiFrameObj.goToSubFramesPage('nested')
    await expect(nestedAndiFrameObj.topFramePath.frameLocator(nestedAndiFrameObj.leftFramePath).locator('body')).toBeVisible()
    expect(await nestedAndiFrameObj.getFrameText("left")).toContain(nestedAndiFrameObj.leftFrameBodyText)
})

test('verify middle-frame text is visible on the web page', async () => {
    const nestedAndiFrameObj = new NestedAndIframePage(page)
    await expect(nestedAndiFrameObj.basePageTitle).toContainText(nestedAndiFrameObj.expectedBasePageTitile)
    await nestedAndiFrameObj.goToFramesPage()
    await expect(nestedAndiFrameObj.framePageTitle).toContainText(nestedAndiFrameObj.expectedFramePageTitile)
    await nestedAndiFrameObj.goToSubFramesPage('nested')
    await expect(nestedAndiFrameObj.topFramePath.frameLocator(nestedAndiFrameObj.middleFramePath).locator('body')).toBeVisible()
    expect(await nestedAndiFrameObj.getFrameText("middle")).toContain(nestedAndiFrameObj.middleFrameBodyText)
})

test('verify right-frame text is visible on the web page', async () => {
    const nestedAndiFrameObj = new NestedAndIframePage(page)
    await expect(nestedAndiFrameObj.basePageTitle).toContainText(nestedAndiFrameObj.expectedBasePageTitile)
    await nestedAndiFrameObj.goToFramesPage()
    await expect(nestedAndiFrameObj.framePageTitle).toContainText(nestedAndiFrameObj.expectedFramePageTitile)
    await nestedAndiFrameObj.goToSubFramesPage('nested')
    await expect(nestedAndiFrameObj.topFramePath.frameLocator(nestedAndiFrameObj.righFramePath).locator('body')).toBeVisible()
    expect(await nestedAndiFrameObj.getFrameText("right")).toContain(nestedAndiFrameObj.righFrameBodyText)
})

test('verify bottom-frame text is visible on the web page', async () => {
    const nestedAndiFrameObj = new NestedAndIframePage(page)
    await expect(nestedAndiFrameObj.basePageTitle).toContainText(nestedAndiFrameObj.expectedBasePageTitile)
    await nestedAndiFrameObj.goToFramesPage()
    await expect(nestedAndiFrameObj.framePageTitle).toContainText(nestedAndiFrameObj.expectedFramePageTitile)
    await nestedAndiFrameObj.goToSubFramesPage('nested')
    await expect(nestedAndiFrameObj.bottomFramePath.locator('body')).toBeVisible()
    expect(await nestedAndiFrameObj.getFrameText("bottom")).toContain(nestedAndiFrameObj.bottomFrameBodyText)
})

test('verify user can switch to iFrame and fill values on the web page', async () => {
    const nestedAndiFrameObj = new NestedAndIframePage(page)
    await expect(nestedAndiFrameObj.basePageTitle).toContainText(nestedAndiFrameObj.expectedBasePageTitile)
    await nestedAndiFrameObj.goToFramesPage()
    await expect(nestedAndiFrameObj.framePageTitle).toContainText(nestedAndiFrameObj.expectedFramePageTitile)
    await nestedAndiFrameObj.goToSubFramesPage('iFrame')
    await expect(nestedAndiFrameObj.iFramePageTitile).toContainText(nestedAndiFrameObj.iFrameExpectedTitile)
    expect(await nestedAndiFrameObj.iFrameGetExistingText("placeholder")).toContain(nestedAndiFrameObj.iFramePlaceholderExpectedText)
    await nestedAndiFrameObj.iFrameEnterText()
    expect(await nestedAndiFrameObj.iFrameGetExistingText("filledValue")).toContain(nestedAndiFrameObj.iFrameFillText)
})