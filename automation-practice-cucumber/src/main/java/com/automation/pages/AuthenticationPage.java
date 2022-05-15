package com.automation.pages;

import com.automation.utilites.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AuthenticationPage extends Utility {
    public  static final Logger log = LogManager.getLogger(AuthenticationPage.class.getName());
    public AuthenticationPage() {
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//div[@class=\"alert alert-danger\"]/descendant::li")
    WebElement errorMessageField;

    public String getErrorMessage(){
        log.info("Get ErrorMessage : "+errorMessageField.getText()+errorMessageField.toString());
        return  getTextFromElement(errorMessageField);
    }


}
