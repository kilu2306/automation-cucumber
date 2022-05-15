package com.automation.pages;

import com.automation.utilites.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class CreateAccountPage extends Utility {
public  static  final Logger log = LogManager.getLogger(CreateAccountPage.class.getName());
    @CacheLookup
    @FindBy(id = "id_gender2")
    WebElement mrsRadioButton;
    @CacheLookup
    @FindBy(xpath = "//input[@id='customer_firstname']")
    WebElement infoFirstNameField;
    @CacheLookup
    @FindBy(id = "customer_lastname")
    WebElement infoLastNameField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement infoPassWordField;
    @CacheLookup
    @FindBy(xpath = "//select[@id='days']")
    WebElement dateDropDownField;
    @CacheLookup
    @FindBy(xpath = "//select[@id='months']")
    WebElement monthdropDownField;
    @CacheLookup
    @FindBy(xpath = "//select[@id='years']")
    WebElement yearDropDownField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='firstname']")
    WebElement addressFirstNameField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='lastname']")
    WebElement addressLastNameFeild;
    @CacheLookup
    @FindBy(xpath = "//input[@id='company']")
    WebElement companyField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='address1']")
    WebElement addressField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='address2']")
    WebElement addressLine2Field;
    @CacheLookup
    @FindBy(id = "city")
    WebElement cityField;
    @CacheLookup
    @FindBy(xpath = "//select[@id='id_state']")
    WebElement stateDropDownField;
    @CacheLookup
    @FindBy(id = "postcode")
    WebElement zipCodeField;
    @CacheLookup
    @FindBy(xpath = "//select[@id='id_country']")
    WebElement countryDropDownField;
    @CacheLookup
    @FindBy(xpath = "//textarea[@id='other']")
    WebElement additionalField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='phone']")
    WebElement homePhoneField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='phone_mobile']")
    WebElement mobileNumberField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='alias']")
    WebElement addressAliasField;
    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Register']")
    WebElement registerButtonField;


    public void clickOnMrsRadioButton(){
        clickOnElement(mrsRadioButton);
        log.info("Click on mrs Radio button : "+mrsRadioButton.toString());
    }
    public void enterFirstNameInInfo(String fName){
        sendTextToElement(infoFirstNameField,fName);
        log.info(" Enter first name : "+ fName+ " to first name field "+ infoFirstNameField.toString());
    }
    public void enterlastNameInInfo(String lName){
        sendTextToElement(infoLastNameField,lName);
        log.info(" Enter last name : "+ lName+ " to last name field "+ infoLastNameField.toString());
    }
    public void enterPasswordInInfo(String password){
        sendTextToElement(infoPassWordField,password);
        log.info(" Enter password : "+ password+ " to password field "+ infoPassWordField.toString());
    }
    public void clickOnDatedropDown() {
        clickOnElement(dateDropDownField);
        log.info("click on date drop down:  "+dateDropDownField.toString());
    }
    public void selectDateFromDropDown(String text){
        selectByVisibleTextFromDropDown(dateDropDownField,text);
        log.info("select visible date : "+ text + " from drop down field "+ dateDropDownField.toString());
    }
    public void clickOnMonthDropDown(){
        clickOnElement(monthdropDownField);
        log.info("click on month drop down "+ monthdropDownField.toString());
    }
    public void selectMonthFromDropDown(String text){
        selectByVisibleTextFromDropDown(monthdropDownField,text);
        log.info("select  month : "+ text+ " from month drop down "+ monthdropDownField.toString());
    }
    public void clickOnYearDropDown(){
        clickOnElement(yearDropDownField);
        log.info("click on year "+ yearDropDownField.toString());
    }
    public void selectYearFromDropDown(String text){
        selectByVisibleTextFromDropDown(yearDropDownField,text);
        log.info("select year  :"+text+" fromm year drop down "+ yearDropDownField.toString());
    }
    public void enterFirstNameInAddress(String fName){
        sendTextToElement(addressFirstNameField,fName);
        log.info("Enter first name : "+ fName + addressFirstNameField.toString());

    }
    public void enterLastNameInAddress(String lName){
        sendTextToElement(addressLastNameFeild,lName);
        log.info("Enter last name : "+ lName+ addressLastNameFeild.toString());
    }
    public void enterCompanyName(String name){
        sendTextToElement(companyField,name);
        log.info("Enter compnay name : "+ companyField.toString());
    }
    public void enterAddress(String address){
        sendTextToElement(addressField,address);
        log.info(" enter address :"+ address+ addressField.toString());
    }
    public void enterAddressLine2(String line2){
        sendTextToElement(addressLine2Field,line2);
        log.info("enter address line 2 :"+ line2+ addressLine2Field.toString());
    }
    public void enterCity(String city ){
        sendTextToElement(cityField,city);
        log.info("Enter city : "+ city + cityField.toString());
    }
    public void clickOnStateDropDown(){
        clickOnElement(stateDropDownField);
        log.info("click on state dropdown field  "+ stateDropDownField.toString());
    }
    public void selectStateFromDropDown(String text){
        selectByVisibleTextFromDropDown(stateDropDownField,text);
        log.info(" select state: "+ text + " from state drop down field "+ stateDropDownField.toString());
    }
    public void enterZipCode(String code){
        sendTextToElement(zipCodeField,code);
        log.info(" Enter zipCode : "+ code + zipCodeField.toString());
    }
    public void clickOnCountrydropDownField(){
        clickOnElement(countryDropDownField);
        log.info(" click on country drowp down field "+ countryDropDownField.toString());
    }
    public void selectCountryFromDropDown(String country){
        selectByVisibleTextFromDropDown(countryDropDownField,country);
        log.info(" select country : "+country+ countryDropDownField.toString());
    }
    public void enterAdditionalField(String text){
        sendTextToElement(additionalField,text);
        log.info("Enter additional field "+ additionalField.toString());
    }
    public void enterHomePhoneNumber(String num){
        sendTextToElement(homePhoneField,num);

    }
    public void enterMobilePhone(String mobileNum) throws InterruptedException {
        Thread.sleep(3000);
        sendTextToElement(mobileNumberField,mobileNum);
        log.info("Enter mobile number : "+ mobileNum+ mobileNumberField.toString());
    }
    public void enterAliasAddress(String add){
        sendTextToElement(addressAliasField,add);
        log.info("Enter address : "+ add + addressField.toString());
    }
    public void clickOnRegisterField(){
        clickOnElement(registerButtonField);
        log.info(" click on register field "+ registerButtonField.toString());
    }


}
