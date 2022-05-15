package com.automation.pages;

import com.automation.utilites.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    public static final Logger log= LogManager.getLogger(HomePage.class.getName());
    public HomePage() {
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//a[@title='Women']")
    WebElement womenField;
    @CacheLookup
    @FindBy(xpath = "//li[@class='sfHover']//a[@title='Dresses'][normalize-space()='Dresses']']")
    WebElement dressesField;
    @CacheLookup
    @FindBy(xpath = "//li[@class='sfHover']//a[@title='T-shirts'][normalize-space()='T-shirts']']")
    WebElement tshirtField;
    @CacheLookup
    @FindBy(xpath = "//a[@title='Log in to your customer account']")
    WebElement signInLinkField;


    public void clickOnWomanField(){
        clickOnElement(womenField);
        log.info("click on women field "+ womenField.toString());
    }
    public void clickOnDressesFiled(){
        clickOnElement(dressesField);
        log.info("Click on dressed field "+ dressesField.toString());
    }
    public void tshirtField(){
        clickOnElement(tshirtField);
        log.info(" click on tshirt field :"+ tshirtField.toString());
    }
    public void clickOnsignInLinkFiled(){
        clickOnElement(signInLinkField);
        log.info(" click on signinlink :"+ signInLinkField.toString());
    }
    public boolean signOutLinkDisplayed(){
        log.info("sign in link displayed ? : "+ signInLinkField.toString());
        return signInLinkField.isDisplayed();

    }


}
