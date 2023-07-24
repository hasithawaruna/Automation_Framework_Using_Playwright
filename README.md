## Test Automation Framework using Playwright & Typescript

The goal is to showcase various user interactions on the "https://the-internet.herokuapp.com/" web application by creating automated tests that cover specific user flows. These tests will be implemented using Playwright and TypeScript. The tests will simulate how users navigate and interact with the web application, verifying that it functions correctly and meets the desired expectations.

## Table of contents
- [Prerequisites]
- [Clone Private Project]
- [Install Dependencies]
- [Run Test]
- [Page Object Model(POM)]
- [Folder Structure]
- [Dotenv Module (.env)] 
- [Specs]
- [Pages] 
- [Test Execution Methods]
- [Reporting]
- [Release Version Guide]


## Prerequisites

```bash
 Node v18.12.0
 playwright v1.36

```

## Clone Private Project

Run the below command to clone the project

```bash
git clone https://github.com/hasithawaruna/WebAutomator_Playwrite
``` 

## Install dependencies

Follow the root directory of the cloned project and execute the below command to install node modules 
 
```bash
npm i
```

## Run Test

Use the below command to run the Playwrite test

```bash
npm test
```


## Page Object Model(POM)


The Page Object Model (POM) in Playwright is a design pattern used to organize web automation code. It abstracts web pages into classes, encapsulating their elements and actions. This approach enhances code maintainability, reusability, and readability, enabling efficient interaction with web elements while creating automated tests.


## Folder Structure

 
    ├── ...
    │
    ├── pages/                                     # Generic functionality for tests
    │   |
    │   ├── add-remove-elements-page.ts           # Specific Locators & Functions of The Page                
    │   ├── checkbox-page.ts                      # Specific Locators & Functions of The Page    
    │   ├── drag-and-drop-page.ts                 # Specific Locators & Functions of The Page         
    │   ├── dropdown-select-page.ts               # Specific Locators & Functions of The Page    
    │   ├── nestedFrame-and-iFrame-page.ts        # Specific Locators & Functions of The Page    
    │
    ├── tests/                                    # Test cases
    │    ├── add-remove-elements-test.spec.ts     # Automated Test Script               
    │    ├── checkbox-test.spec.ts                # Automated Test Script
    │    ├── drag-and-drop-test.spec.ts           # Automated Test Script
    │    ├── dropdown-select-test.spec.ts         # Automated Test Script
    │    ├── nestedFrame-and-iFrame-test.spec.ts  # Automated Test Script        
    │   
    ├── playwright-report/   
    │         ├──index.html                       #  Test report of the tests executed 
    │
    │── .env.test                                 # Confiugurations used in the test environment
    │
    ├── playwright.config.ts                      # Confiugurations of Playwright
    │  
    ├── node_modules/                             # Storing installed project dependencies
    │ 
    ├── release_notes/                            # Maintain all release notes for each version
    │ 
    ├── package.json                              # Dependency and script management     
    │ 
    └── package-lock.json                         # Dependency version locking


## Dotenv module (.env) 

 
The '.env.test' file in Playwright TypeScript web automation allows setting environment-specific variables (e.g., base URLs, credentials) for easier configuration and testing across different test environments.
More information about Dotenv can be found in official documentation [here](https://www.npmjs.com/package/dotenv).

## Specs


In Playwright's Page Object Model (POM, ".spec.ts" files are utilized for organizing automated test code separately from the application code. These files contain test specifications and scenarios written in TypeScript. Playwright recognizes ".spec.ts" files as test files and executes them using testing frameworks built on Playwright.

**Specs are written under the /tests folder. Check the above Folder structure for a better understanding**.

## Pages


In Playwright's Page Object Model (POM), "Pages" refer to the representation of web pages as classes. Each web page is abstracted into a separate class, encapsulating its elements, actions, and related methods. This approach allows testers to interact with the web elements and perform actions on the page without directly dealing with the underlying HTML or implementation details. It promotes code modularity and makes test code more organized and maintainable.

**Page files are written under the /pages folder. Check the above Folder structure for a better understanding**.


## Test Execution Methods


Tests can be executed either via the command line or from the Playwright test runner plugin in VS code. By following the below commands you can execute tests with different settings.

### Run all test cases : 

   To run all the test cases available under /test directory without visual (headless)
   ```
   npx playwright test
   ```

   To run all the test cases available under /test directory with visual (headed)
   ```
   npx playwright test --headed
   ```
   To run all the test cases available under /test directory with Trace Viewer UI
   ```
   npx playwright test --ui
   ```

    To run all the test cases available under /test directory with a specific browser
   
     Chrome :
       ```
       npx playwright test --project=chromium
       ```
    Firefox :
       ```
       npx playwright test --project=firefox
       ```
    Webkit :
       ```
       npx playwright test --project=webkit
       ```

### Run specific test cases : 

   To run specific test cases available under /test directory without visual (headless)
   ```
   npx playwright test <testcasename.spec.ts>
   ```
   To run specific test cases available under /test directory with visual (headed)
   ```
   npx playwright test <testcasename.spec.ts> --headed
   ```
   To run specific test cases available under /test directory with Trace Viewer UI
   ```
   npx playwright test <testcasename.spec.ts> --ui
   ```

    To run specific test cases available under /test directory with a specific browser
    
    Chrome :
       ```
       npx playwright test <testcasename.spec.ts> --project=chromium
       ```
    Firefox :
       ```
       npx playwright test <testcasename.spec.ts> --project=firefox
       ```
    Webkit :
       ```
       npx playwright test <testcasename.spec.ts> --project=webkit
       ```


## Reporting


Once the execution is done you can open the playwright report by running the command
```
  npx playwright show-report
```

#### To View HTML Report

```bash
├── playwright-report/   
│         ├──index.html - Right Click and Navigate to the directory to open the .HTML file via the browser    
```

## Release Version Guide

https://github.com/hasithawaruna/WebAutomator_Playwrite/releases
