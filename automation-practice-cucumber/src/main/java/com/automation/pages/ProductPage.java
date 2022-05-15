package com.automation.pages;

import com.automation.utilites.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class ProductPage extends Utility {
    public ProductPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='quantity_wanted']")
    WebElement quantityField;
    @CacheLookup
    @FindBy(xpath = "//select[@id='group_1']")
    WebElement sizeField;
    @CacheLookup
    @FindBy(xpath = "//a[contains(@class,'color_pick' )]")
    List<WebElement> coulrList;
    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Add to cart']")
    WebElement addCartField;
    @CacheLookup
    @FindBy(xpath = "//h2[normalize-space()='Product successfully added to your shopping cart']")
    WebElement successfullyAddedMessageTextField;
    @CacheLookup
    @FindBy(xpath = "//span[@title='Close window']")
    WebElement closeWindowTAb;


    public void enterQuantity(String qty) throws InterruptedException {
        quantityField.clear();
        Thread.sleep(2000);
        sendTextToElement(quantityField, qty);
        log.info(" enter quanty : " + qty + quantityField.toString());

    }

    public void selectSize(String siz) {
        selectByVisibleTextFromDropDown(sizeField, siz);
        log.info(" select size: " + siz + sizeField.toString());
    }

    public void clickOnColur(String colur) {
        for (WebElement cLists : coulrList) {
            if (cLists.getAttribute("title").equals(colur)) {
                cLists.click();
                log.info(" click on colur :" + colur + coulrList.toString());
            }
        }
    }

    public void clickOnAddCart() {
        clickOnElement(addCartField);
        log.info("click on add cart :" + addCartField.toString());
    }

    public String getSuccessFullyAddedText() {
        log.info(" Get successfully added message " + successfullyAddedMessageTextField.toString());
        return successfullyAddedMessageTextField.getAttribute("innerHTML");
    }

    public void clickOnCloseWindowTab() {
        clickOnElement(closeWindowTAb);
        log.info(" click on close window : " + closeWindowTAb.toString());
    }


}


