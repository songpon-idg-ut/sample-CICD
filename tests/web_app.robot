*** Settings ***
Library           SeleniumLibrary
Suite Setup       Open Browser To Application
Suite Teardown    Close Browser

*** Variables ***
${SERVER}         http://localhost:4200
${BROWSER}        Chrome
${DELAY}          0
${HOME URL}       ${SERVER}/

*** Test Cases ***
Verify Page Title
    [Documentation]    Check if the page title is correct
    Title Should Be    Sample CICD App

Verify Login Form Present
    [Documentation]    Check if the login form is visible
    Page Should Contain Element    id:login-form

Verify Username Input
    [Documentation]    Check if the username input field exists
    Page Should Contain Element    id:username

Verify Password Input
    [Documentation]    Check if the password input field exists
    Page Should Contain Element    id:password

Verify Submit Button
    [Documentation]    Check if the submit button exists
    Page Should Contain Element    id:submit-btn

Verify Welcome Message
    [Documentation]    Check for a welcome message on the landing page
    Page Should Contain    Welcome to Sample CICD App

Verify Navigation Menu
    [Documentation]    Check if the navigation menu exists
    Page Should Contain Element    id:nav-menu

Verify Feature A Section
    [Documentation]    Check if 'Feature A' section is present
    Page Should Contain Element    id:feature-a
    Element Should Contain    id:feature-a    Feature A Content

Verify Feature B Section
    [Documentation]    Check if 'Feature B' section is present
    Page Should Contain Element    id:feature-b
    Element Should Contain    id:feature-b    Feature B Content

Verify Footer Content
    [Documentation]    Check if the footer contains copyright info
    Page Should Contain Element    id:footer
    Element Should Contain    id:footer    © 2024 Sample CICD

*** Keywords ***
Open Browser To Application
    ${options}=    Evaluate    sys.modules['selenium.webdriver'].ChromeOptions()    sys, selenium.webdriver
    Call Method    ${options}    add_argument    --headless
    Call Method    ${options}    add_argument    --no-sandbox
    Call Method    ${options}    add_argument    --disable-dev-shm-usage
    Create WebDriver    Chrome    options=${options}
    Go To    ${HOME URL}
    Maximize Browser Window
    Set Selenium Speed    ${DELAY}
