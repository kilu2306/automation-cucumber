package com.automation.cucumber.steps;

import com.automation.pages.AuthenticationPage;
import com.automation.pages.HomePage;
import com.automation.pages.MyAccountPage;
import com.automation.pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SignInSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {

    }

    @When("^I click on Signin Link$")
    public void iClickOnSigninLink() {
        new HomePage().clickOnsignInLinkFiled();
    }

    @Then("^I should be navigated to signIn page successfully$")
    public void iShouldBeNavigatedToSignInPageSuccessfully() {

    }

    @And("^AUTHENTICATION message should be visible$")
    public void authenticationMessageShouldBeVisible() {
        String expactedTest="AUTHENTICATION";
        Assert.assertEquals("displayed message is wrong :",expactedTest,new SignInPage().getAuthenticationText());
    }

    @And("^I enter username \"([^\"]*)\"$")
    public void iEnterUsername(String username) {
        new SignInPage().enterEmailForSignIn(username);


    }
    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password)  {
        new SignInPage().enterPasswordForSignIn(password);

    }

    @And("^I click on signin Button$")
    public void iClickOnSigninButton() {
        new SignInPage().clickOnSignInButton();
    }

    @Then("^\"([^\"]*)\" error should be displayed$")
    public void errorshouldBeDisplayed(String errorMessage) {
        Assert.assertEquals("displayed message is wrong ",errorMessage,new AuthenticationPage().getErrorMessage());


    }

    @And("^I enter \"([^\"]*)\" in email field$")
    public void iEnterInEmailField(String email) {
        new SignInPage().enterEmailForSignIn(email);

    }


    @And("^I enter valid password \"([^\"]*)\" in passwordfield$")
    public void iEnterValidPasswordInPasswordfield(String password)  {
        new SignInPage().enterPasswordForSignIn(password);

    }

    @And("^I click on signin Button with valid credential$")
    public void iClickOnSigninButtonWithValidCredential() {
        new SignInPage().clickOnSignInButton();
    }

    @Then("^I should login successfully$")
    public void iShouldLoginSuccessfully() {

    }

    @And("^sing out link should be displayed$")
    public void singOutLinkShouldBeDisplayed() {
        Assert.assertTrue(new MyAccountPage().signOutLinkDisplayed());
    }

    @And("^I click on sign Out link$")
    public void iClickOnSignOutLink() {
        new MyAccountPage().clickOnSignOutLink();
    }

    @Then("^I should be able to log out successfully$")
    public void iShouldBeAbleToLogOutSuccessfully() {

    }

    @And("^SignIn link should be displayed$")
    public void signinLinkShouldBeDisplayed() {
        Assert.assertTrue(new HomePage().signOutLinkDisplayed());
    }


}
