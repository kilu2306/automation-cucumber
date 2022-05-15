package com.automation.pages;

import com.automation.utilites.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignInPage extends Utility {
    public int num = getRendomString();
    public static final Logger log = LogManager.getLogger(SignInPage.class.getName());
    public SignInPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//input[@id='email']")
    WebElement emailField;
    @CacheLookup
    @FindBy(id = "passwd")
    WebElement passWordField;
    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Sign in']")
    WebElement signInButton;
    @CacheLookup
    @FindBy(xpath = "//h1[@class='page-heading']")
    WebElement authenticationTextField;
    @CacheLookup
    @FindBy(xpath = "//h3[normalize-space()='Create an account']")
    WebElement creatAccountTextField;
    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Create an account']")
    WebElement creatAccoutnButtonField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='email_create']")
    WebElement emailFieldInCreatAccount;

    public void enterEmailForCreatAccount() {
        sendTextToElement(emailFieldInCreatAccount,"fufu"+num+"@gmail.com");
        log.info(" Enter email "+ emailFieldInCreatAccount.toString());

    }

    public void clickOnCreatAccountButton() {
        clickOnElement(creatAccoutnButtonField);
        log.info(" click on creat account "+ creatAccountTextField.toString());
    }

    public void enterEmailForSignIn(String email) {
        sendTextToElement(emailField, email);
        log.info(" Enter email "+ email +" to email field "+ emailField.toString());
    }

    public void enterPasswordForSignIn(String password) {
        sendTextToElement(passWordField, password);
        log.info(" Enter password : "+ password + " to password field "+ passWordField.toString());
    }

    public String getAuthenticationText() {
        log.info(" Getting authentication text :"+ authenticationTextField.toString());
        return getTextFromElement(authenticationTextField);
    }

    public String getCreatAnAccountText() {
        log.info(" Getting creating account text "+ creatAccountTextField.toString());
        return getTextFromElement(creatAccountTextField);
    }

    public void clickOnSignInButton() {
        clickOnElement(signInButton);
        log.info("click on sign in button "+ signInButton.toString());
    }

    public void signInApplication(String username, String password) {
        enterEmailForSignIn(username);
        log.info(" enter email address "+ emailField.toString());
        enterPasswordForSignIn(password);
        log.info(" enter password "+ passWordField.toString());
        clickOnElement(signInButton);
        log.info("click on singin button"+ signInButton.toString());

    }

}



