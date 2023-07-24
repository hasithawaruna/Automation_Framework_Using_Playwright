import { type Locator, type Page } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config({
  path: '.env.test'
})

export class CheckboxPage {

  //Locators
  page: Page
  basePageTitle: Locator;
  subPageTitle: Locator;
  checkBox1: Locator
  checkBox2: Locator
  selectSubPage: Locator

  //Expected values
  expectedBasePageTitile = 'Welcome to the-internet'
  expectedSubPageTitile = 'Checkboxes'

  constructor(page: Page) {
    this.page = page
    this.basePageTitle = page.locator("h1")
    this.subPageTitle = page.locator("h3")
    this.checkBox1 = page.locator("//*[@type='checkbox'][1]")
    this.checkBox2 = page.locator("//*[@type='checkbox'][2]")
    this.selectSubPage = page.getByRole('link', { name: 'Checkboxes', exact: true })
  }

  async goToBasePage() {
    await this.page.goto(process.env.BASE_URL ?? '')
  }

  async goToSubPage() {
    await this.selectSubPage.click()
  }

  async checkCheckbox() {
    await this.checkBox1.check()
  }

  // Deselect checkbox by value. Expected 'checkbox1' or 'checkbox2' as values.
  async uncheckCheckbox(checkboxName: string) {
    const checkboxValue = checkboxName.toUpperCase()
    if (checkboxValue == 'CHECKBOX1') {
      await this.checkBox1.uncheck()
    }
    else if (checkboxValue == 'CHECKBOX2') {
      await this.checkBox2.uncheck()
    }
    else {
      console.log("Invalid checkbox value provided. Expected 'checkbox1' or 'checkbox2' as values")
    }
  }
}