import { expect, type Locator, type Page } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config({
  path:'.env.test'
})

export class AddRemoveElemetsPage {

  //Locators Listed Below  
  page: Page;
  basePageTitle: Locator;
  subPageTitle: Locator;
  addButtonName: Locator
  deleteButtonName: Locator
  selectSubPage: Locator

  //Expected values Listed Below
  expectedBasePageTitile = 'Welcome to the-internet'
  expectedSubPageTitile = 'Add/Remove Elements'
 
  constructor(page: Page) {
    this.page = page
    this.basePageTitle = page.locator("h1")
    this.subPageTitle = page.locator("h3")
    this.addButtonName = page.getByRole('button',{ name :'Add Element'})
    this.selectSubPage = page.getByRole('link', { name: 'Add/Remove Elements',exact: true})
    this.deleteButtonName = page.getByRole('button',{ name :'Delete'})
  }

  async goTo() {
    await this.page.goto(process.env.BASE_URL ?? '')
  }

  async goToSubPage() {
    await this.selectSubPage.click()
  }

  async addButton() {
    await this.addButtonName.click()
  }

  async removeButton() {
    await this.deleteButtonName.click()
  }
}