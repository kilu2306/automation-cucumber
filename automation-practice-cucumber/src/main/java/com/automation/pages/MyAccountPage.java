package com.automation.pages;

import com.automation.utilites.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MyAccountPage extends Utility {
    public static final Logger log= LogManager.getLogger(MyAccountPage.class.getName());
    public MyAccountPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//h1[@class='page-heading']")
    WebElement myaccountTextField;
    @CacheLookup
    @FindBy(xpath = "//a[@title='Log me out']")
    WebElement signOutLinkFiled;

    public String getMyaccountText() {
        log.info(" Getting my account text : "+ myaccountTextField.toString());
        return getTextFromElement(myaccountTextField);
    }
    public Boolean signOutLinkDisplayed(){
        log.info(" sign out link displayed ? "+ signOutLinkFiled.toString());
        return signOutLinkFiled.isDisplayed();
    }
    public void clickOnSignOutLink(){
        log.info("click on sign out link :"+ signOutLinkFiled.toString());
        clickOnElement(signOutLinkFiled);

    }
}
