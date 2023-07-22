import { expect, type Locator, type Page } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config({
  path:'.env.test'
})

export class CheckboxPage {
    
  //Locators Listed Below  
  page: Page
  basePageTitle: Locator;
  subPageTitle: Locator;
  checkBox1: Locator
  checkBox2: Locator
  selectSubPage: Locator

  //Expected values Listed Below
  expectedBasePageTitile = 'Welcome to the-internet'
  expectedSubPageTitile = 'Checkboxes'

  constructor(page: Page) {
    this.page = page
    this.basePageTitle = page.locator("h1")
    this.subPageTitle = page.locator("h3")
    this.checkBox1 = page.locator("//*[@type='checkbox'][1]")
    this.checkBox2 = page.locator("//*[@type='checkbox'][2]")
    this.selectSubPage = page.getByRole('link', { name: 'Checkboxes',exact: true})
  }

  //Page Navigation
  async goto() {
    await this.page.goto(process.env.BASE_URL ?? '')
  }

  async goToSubPage() {
    await this.selectSubPage.click()
  }

  async checkCheckbox() {
    await this.checkBox1.check()
}

//Select and check checkbox by given value => expected 'checkbox1' or 'checkbox2' text as values.
  async uncheckCheckbox(checkboxName : string) {
if(checkboxName == 'checkbox1'){
    await this.checkBox1.uncheck() 
}
else if (checkboxName == 'checkbox2'){
    await this.checkBox2.uncheck() 
}
else{
console.log("Invalid Checkbox Name")
}}
}