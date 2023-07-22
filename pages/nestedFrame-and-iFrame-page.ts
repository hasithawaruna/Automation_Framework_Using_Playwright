import { expect, FrameLocator, type Locator, type Page } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config({
  path:'.env.test'
})

export class NestedAndIframePage {
    
  //Locators Listed Below    
  page: Page;
  basePageTitle: Locator;
  framePageTitle: Locator;
  iFramePageTitile: Locator
  selectFramePage: Locator
  selectIframePage: Locator
  selectNestedFramePage: Locator
  topFramePath: FrameLocator
  bottomFramePath: FrameLocator
  iFrameParentPath: FrameLocator
  leftFramePath = 'frame[name="frame-left"]'
  middleFramePath = 'frame[name="frame-middle"]'
  righFramePath = 'frame[name="frame-right"]'
  iFrameChildId = '#tinymce'

//Expected values Listed Below
  bottomFrameBodyText = 'BOTTOM'
  leftFrameBodyText = 'LEFT'
  middleFrameBodyText = 'MIDDLE'
  righFrameBodyText = 'RIGHT'
  iFrameExpectedTitile = "An iFrame containing the TinyMCE WYSIWYG Editor"
  iFramePlaceholderExpectedText = 'Your content goes here.'
  iFrameFillText = 'Gapstars | People Powering Technology'
  expectedBasePageTitile = 'Welcome to the-internet'
  expectedFramePageTitile = 'Frames'
 
  constructor(page: Page) {
    this.page = page
    this.basePageTitle = page.locator("h1")
    this.framePageTitle = page.locator("h3")
    this.iFramePageTitile = page.locator("h3")
    this.topFramePath = page.frameLocator('//frame[@name="frame-top"]')
    this.bottomFramePath = page.frameLocator('//frame[@name="frame-bottom"]')
    this.iFrameParentPath = page.frameLocator('//*[@id="mce_0_ifr"]')
    this.selectFramePage = page.getByRole('link', { name: 'Frames',exact: true})
    this.selectNestedFramePage = page.getByRole('link', { name: 'Nested Frames',exact: true})
    this.selectIframePage = page.getByRole('link', { name: 'iFrame',exact: true}) 
  }

  async goToBasePage() {
    await this.page.goto(process.env.BASE_URL ?? '')
  }

  async goToFramesPage() {
    await this.selectFramePage.click()
  }

  //Page navigation by value => expected 'IFRAME' Or 'NESTED' text as values.
  async goToSubFramesPage(value : string) {
    const frameText = value.toUpperCase()
    if(frameText == 'IFRAME'){
        await this.selectIframePage.click()
    }
    else if(frameText == 'NESTED'){
        await this.selectNestedFramePage.click()
    }
    else{
        console.log("Invalid sub page choise provided!. Expected one frrom 'iframe','nested' values")
    }}

  //Extract the <b> text of given frame and return => expected 'MIDDLE','LEFT','RIGHT','BOTTOM' text as values.
  async getFrameText(frameTextToVerify : string) {
    const frameText = frameTextToVerify.toUpperCase()

    if(frameText == 'MIDDLE'){
        const subFrame =  this.topFramePath.frameLocator(this.middleFramePath).locator('body')
        const text = await subFrame.textContent()
        return text
    }
    else if (frameText == 'LEFT'){
        const subFrame =  this.topFramePath.frameLocator(this.leftFramePath).locator('body')
        const text = await subFrame.textContent()
        return text
    }
    else if (frameText == 'RIGHT'){
        const subFrame =  this.topFramePath.frameLocator(this.righFramePath).locator('body')
        const text = await subFrame.textContent()
        return text    
    }
    else if (frameText == 'BOTTOM'){
        const subFrame = this.bottomFramePath.locator('body')
        const text = await subFrame.textContent()
        return text
    }}

//Extract the text of given iFrame element and return => expected 'placeholder','filledvalue' text as values.
async iFrameGetExistingText(value: string) {
    if(value == 'placeholder'){
        const paraLocator = this.iFrameParentPath.locator('p')
        const text = await paraLocator.textContent()
        return text
    }
    if(value == 'filledvalue'){
        const paraLocator = this.iFrameParentPath.locator('p')
        const text = await paraLocator.textContent()
        return text
    }}

async iFrameEnterText() {
    const iframeLocator = this.iFrameParentPath.locator(this.iFrameChildId)
    await iframeLocator.fill(this.iFrameFillText)
}}