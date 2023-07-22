import { expect, type Locator, type Page } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config({
  path:'.env.test'
})

export class DropDownSelectPage {
    
  //Locators Listed Below  
  page: Page;
  basePageTitle: Locator;
  subPageTitle: Locator;
  dropdownPath: Locator
  selecteditemPath: Locator
  selectSubPage: Locator
  
  //Expected values Listed Below
  DropdownOption1 = 'Option 1'
  DropdownOption2 = 'Option 2'
  expectedBasePageTitile = 'Welcome to the-internet'
  expectedSubPageTitile = 'Dropdown List'
 
  constructor(page: Page) {
    this.page = page
    this.basePageTitle = page.locator("h1")
    this.subPageTitle = page.locator("h3")
    this.dropdownPath = page.locator('//*[@id="dropdown"]')
    this.selecteditemPath = page.locator('//*[@selected="selected"]')
    this.selectSubPage = page.getByRole('link', { name: 'Dropdown',exact: true})
  }
 
  async goto() {
    await this.page.goto(process.env.BASE_URL ?? '')
  }
  async goToSubPage() {
    await this.selectSubPage.click()
  }

  //Select dropdown option by given number => expected '1' or '2'.
  async selectOption(optionValue : number) {
    if(optionValue == 1){
        await this.dropdownPath.selectOption(this.DropdownOption1)
    }
    else if (optionValue == 2){
        await this.dropdownPath.selectOption(this.DropdownOption2)
    }
    else{
        console.log("Invalid Dropdown Option Provided")
    }}
}