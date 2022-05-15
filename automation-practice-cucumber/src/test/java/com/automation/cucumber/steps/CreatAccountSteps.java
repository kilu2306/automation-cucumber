package com.automation.cucumber.steps;

import com.automation.pages.CreateAccountPage;
import com.automation.pages.HomePage;
import com.automation.pages.MyAccountPage;
import com.automation.pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class CreatAccountSteps {
    @Given("^I am on homepage for creat account$")
    public void iAmOnHomepageForCreatAccount() {

    }

    @When("^I click on Sign in Link$")
    public void iClickOnSignInLink() {
        new HomePage().clickOnsignInLinkFiled();
    }

    @And("^I enter email to address field$")
    public void iEnterEmailToAddressField() {
        new SignInPage().enterEmailForCreatAccount();
    }

    @And("^I click on creat an account button$")
    public void iClickOnCreatAnAccountButton() {
        new SignInPage().clickOnCreatAccountButton();
    }

    @And("^I Enter first name \"([^\"]*)\"$")
    public void iEnterFirstName(String firstname) {
        new CreateAccountPage().enterFirstNameInInfo(firstname);

    }

    @And("^I Enter Last name \"([^\"]*)\"$")
    public void iEnterLastName(String lastname) {
        new CreateAccountPage().enterlastNameInInfo(lastname);

    }
    @And("^I enter password \"([^\"]*)\" for address$")
    public void iEnterPasswordForAddress(String password) {
        new CreateAccountPage().enterPasswordInInfo(password);

    }

    @And("^I enter First name in address \"([^\"]*)\"$")
    public void iEnterFirstNameInAddress(String fname) {
        new CreateAccountPage().enterFirstNameInAddress(fname);

    }

    @And("^I enter Last name in Address \"([^\"]*)\"$")
    public void iEnterLastNameInAddress(String lname) {
        new CreateAccountPage().enterLastNameInAddress(lname);

    }

    @And("^I enter adrees in address field \"([^\"]*)\"$")
    public void iEnterAdreesInAddressField(String address) {
        new CreateAccountPage().enterAddress(address);

    }

    @And("^I enter city in city field \"([^\"]*)\"$")
    public void iEnterCityInCityField(String city) {
        new CreateAccountPage().enterCity(city);

    }

    @And("^I select State \"([^\"]*)\"$")
    public void iSelectState(String state) {
        new CreateAccountPage().selectStateFromDropDown(state);

    }

    @And("^I enter code \"([^\"]*)\"$")
    public void iEnterCode(String code) {
        new CreateAccountPage().enterZipCode(code);

    }

    @And("^I select country \"([^\"]*)\"$")
    public void iSelectCountry(String country) {
        new CreateAccountPage().selectCountryFromDropDown(country);

    }

    @And("^I enter Homephone number \"([^\"]*)\"$")
    public void iEnterHomephoneNumber(String num) {
        new CreateAccountPage().enterHomePhoneNumber(num);
    }

    @And("^I enter mobile numbe \"([^\"]*)\"$")
    public void iEnterMobileNumbe(String num) throws InterruptedException {
        new CreateAccountPage().enterMobilePhone(num);

    }

    @And("^I enter Alias reffrence \"([^\"]*)\"$")
    public void iEnterAliasReffrence(String ref) {
        new CreateAccountPage().enterAliasAddress(ref);

    }

    @And("^I click on register$")
    public void iClickOnRegister() {
        new CreateAccountPage().clickOnRegisterField();
    }

    @Then("^I should be able to register successfully$")
    public void iShouldBeAbleToRegisterSuccessfully() {
    }

    @And("^My account message should be displayed$")
    public void myAccountMessageShouldBeDisplayed() {
        Assert.assertEquals("displayed messsage is wrong:", "My Account", new MyAccountPage().getMyaccountText());
    }

}
