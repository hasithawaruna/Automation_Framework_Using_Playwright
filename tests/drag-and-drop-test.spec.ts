import {test,expect, Page} from '@playwright/test'
import { DragAndDropPage } from '../pages/drag-and-drop-page'

let page:Page

// Below code will run before each test
test.beforeEach(async({browser})=>{
    page = await browser.newPage()
    const dragAndDropObj = new DragAndDropPage(page)
    await dragAndDropObj.goto()
});

// Below code will run after each test
test.afterEach(async () => {
    await page.close()
  });

test('verify user can drag and drop an item on the web page',async()=>{
    const dragAndDropObj = new DragAndDropPage(page)
    await expect(dragAndDropObj.basePageTitle).toContainText(dragAndDropObj.expectedBasePageTitile)
    await dragAndDropObj.goToSubPage()
    await expect(dragAndDropObj.subPageTitle).toContainText(dragAndDropObj.expectedSubPageTitile)
    await expect(dragAndDropObj.element1).toBeVisible()
    await expect(dragAndDropObj.element2).toBeVisible()
    await dragAndDropObj.dragElement()
    await expect(dragAndDropObj.element1).toHaveText(dragAndDropObj.expectedElementText)
})