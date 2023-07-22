import { expect, type Locator, type Page } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config({
  path:'.env.test'
})

export class DragAndDropPage {
    
  //Locators Listed Below  
  page: Page
  basePageTitle: Locator;
  subPageTitle: Locator;
  element1: Locator
  element2: Locator
  selectSubPage: Locator
  
  //Expected values Listed Below
  expectedElementText = 'B'
  expectedBasePageTitile = 'Welcome to the-internet'
  expectedSubPageTitile = 'Drag and Drop'
 
  constructor(page: Page) {
    this.page = page
    this.basePageTitle = page.locator("h1")
    this.subPageTitle = page.locator("h3")
    this.element1 = page.locator('//*[@id="column-a"]')
    this.element2 = page.locator('//*[@id="column-b"]')
    this.selectSubPage = page.getByRole('link', { name: 'Drag and Drop',exact: true})

  }

  async goto() {
    await this.page.goto(process.env.BASE_URL ?? '')
  }

  async goToSubPage() {
    await this.selectSubPage.click()
  }

  async dragElement() {
    await this.element1.dragTo(this.element2)
}
}