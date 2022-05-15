package com.automation.cucumber.steps;

import com.automation.pages.HomePage;
import com.automation.pages.ProductPage;
import com.automation.pages.WomenCategoryPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class WomenCategoryProductSteps {
    @Given("^I am on homepage for buying products$")
    public void iAmOnHomepageForBuyingProducts() {
    }

    @When("^I click on women tab$")
    public void iClickOnWomenTab() {
        new HomePage().clickOnWomanField();
    }

    @Then("^I should be successfully navigated to Womencategory page$")
    public void iShouldBeSuccessfullyNavigatedToWomencategoryPage() {
    }

    @And("^WOMWN text should be visible$")
    public void womwnTextShouldBeVisible() {
        String expactedText="WOMWN";
        Assert.assertEquals("displayed message is wrong ",expactedText,new WomenCategoryPage().getWomenText());
    }

    @And("^I click on  the product \"([^\"]*)\"$")
    public void iClickOnTheProduct(String product)  {
       new WomenCategoryPage().clickOnProduct(product);
    }

    @And("^I change Quantity \"([^\"]*)\"$")
    public void iChangeQuantity(String qty) throws InterruptedException {
        new ProductPage().enterQuantity(qty);

    }

    @And("^I select size \"([^\"]*)\"$")
    public void iSelectSize(String size)  {
        new ProductPage().selectSize(size);

    }

    @And("^I select colour \"([^\"]*)\"$")
    public void iSelectColour(String colour)  {
        new ProductPage().clickOnColur(colour);
    }

    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() {
        new ProductPage().clickOnAddCart();
    }

    @Then("^Pop menu will displayed$")
    public void popMenuWillDisplayed() {
    }

    @And("^I can see Product successfully added to your shopping cart$")
    public void iCanSeeProductSuccessfullyAddedToYourShoppingCart() {
        String expactedMessage ="Product successfully added to your shopping cart";
        Assert.assertTrue( new ProductPage().getSuccessFullyAddedText().contains(expactedMessage));
    }

    @And("^I click on xbutton and close the popup$")
    public void iClickOnXbuttonAndCloseThePopup() {
        new ProductPage().clickOnCloseWindowTab();
    }
}
