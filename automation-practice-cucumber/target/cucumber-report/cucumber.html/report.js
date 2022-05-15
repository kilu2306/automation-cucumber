$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("WomenCategory.feature");
formatter.feature({
  "line": 2,
  "name": "Women Category page test",
  "description": "\r\nAs user i want to buy a product on automation practice website",
  "id": "women-category-page-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@womenpage"
    }
  ]
});
formatter.before({
  "duration": 6558600900,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "user is on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage for buying products",
  "keyword": "Given "
});
formatter.match({
  "location": "WomenCategoryProductSteps.iAmOnHomepageForBuyingProducts()"
});
formatter.result({
  "duration": 91543900,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "verify User Should Navigate To WomenCategory Page Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-navigate-to-womencategory-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should be successfully navigated to Womencategory page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "WOMWN text should be visible",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryProductSteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 1417578800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryProductSteps.iShouldBeSuccessfullyNavigatedToWomencategoryPage()"
});
formatter.result({
  "duration": 24000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryProductSteps.womwnTextShouldBeVisible()"
});
formatter.result({
  "duration": 33658100,
  "error_message": "org.junit.ComparisonFailure: displayed message is wrong  expected:\u003cWOM[W]N\u003e but was:\u003cWOM[E]N\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.automation.cucumber.steps.WomenCategoryProductSteps.womwnTextShouldBeVisible(WomenCategoryProductSteps.java:29)\r\n\tat ✽.And WOMWN text should be visible(WomenCategory.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 975810000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@sanity"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on  the product \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I change Quantity \"\u003cqty\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select size \"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select colour \"\u003ccolour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Pop menu will displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I can see Product successfully added to your shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on xbutton and close the popup",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "colour"
      ],
      "line": 29,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 30,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 31,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 32,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress",
        "2",
        "M",
        "Blue"
      ],
      "line": 33,
      "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4171939800,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "user is on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage for buying products",
  "keyword": "Given "
});
formatter.match({
  "location": "WomenCategoryProductSteps.iAmOnHomepageForBuyingProducts()"
});
formatter.result({
  "duration": 20200,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@regression"
    },
    {
      "line": 15,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@womenpage"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on  the product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I change Quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Pop menu will displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I can see Product successfully added to your shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on xbutton and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryProductSteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 1633092900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 25
    }
  ],
  "location": "WomenCategoryProductSteps.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 4949823400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomenCategoryProductSteps.iChangeQuantity(String)"
});
formatter.result({
  "duration": 2102350300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategoryProductSteps.iSelectSize(String)"
});
formatter.result({
  "duration": 97928400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 17
    }
  ],
  "location": "WomenCategoryProductSteps.iSelectColour(String)"
});
formatter.result({
  "duration": 143064700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryProductSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 51008500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryProductSteps.popMenuWillDisplayed()"
});
formatter.result({
  "duration": 40500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryProductSteps.iCanSeeProductSuccessfullyAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 34885200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryProductSteps.iClickOnXbuttonAndCloseThePopup()"
});
formatter.result({
  "duration": 1798232800,
  "status": "passed"
});
formatter.after({
  "duration": 735247200,
  "status": "passed"
});
formatter.before({
  "duration": 5772720800,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "user is on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage for buying products",
  "keyword": "Given "
});
formatter.match({
  "location": "WomenCategoryProductSteps.iAmOnHomepageForBuyingProducts()"
});
formatter.result({
  "duration": 33100,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@regression"
    },
    {
      "line": 15,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@womenpage"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on  the product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I change Quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Pop menu will displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I can see Product successfully added to your shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on xbutton and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryProductSteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 1485414500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 25
    }
  ],
  "location": "WomenCategoryProductSteps.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 1329353400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "WomenCategoryProductSteps.iChangeQuantity(String)"
});
formatter.result({
  "duration": 2087133600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 15
    }
  ],
  "location": "WomenCategoryProductSteps.iSelectSize(String)"
});
formatter.result({
  "duration": 81360000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 17
    }
  ],
  "location": "WomenCategoryProductSteps.iSelectColour(String)"
});
formatter.result({
  "duration": 86907700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryProductSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 77927300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryProductSteps.popMenuWillDisplayed()"
});
formatter.result({
  "duration": 20500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryProductSteps.iCanSeeProductSuccessfullyAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 32011500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryProductSteps.iClickOnXbuttonAndCloseThePopup()"
});
formatter.result({
  "duration": 818438200,
  "status": "passed"
});
formatter.after({
  "duration": 737271200,
  "status": "passed"
});
formatter.before({
  "duration": 4190008300,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "user is on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage for buying products",
  "keyword": "Given "
});
formatter.match({
  "location": "WomenCategoryProductSteps.iAmOnHomepageForBuyingProducts()"
});
formatter.result({
  "duration": 28900,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@regression"
    },
    {
      "line": 15,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@womenpage"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on  the product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I change Quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Pop menu will displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I can see Product successfully added to your shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on xbutton and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryProductSteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 1687498800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 25
    }
  ],
  "location": "WomenCategoryProductSteps.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 1632844300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 19
    }
  ],
  "location": "WomenCategoryProductSteps.iChangeQuantity(String)"
});
formatter.result({
  "duration": 2084290600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 15
    }
  ],
  "location": "WomenCategoryProductSteps.iSelectSize(String)"
});
formatter.result({
  "duration": 42987000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 17
    }
  ],
  "location": "WomenCategoryProductSteps.iSelectColour(String)"
});
formatter.result({
  "duration": 115796200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryProductSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 48821900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryProductSteps.popMenuWillDisplayed()"
});
formatter.result({
  "duration": 38600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryProductSteps.iCanSeeProductSuccessfullyAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 43956500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryProductSteps.iClickOnXbuttonAndCloseThePopup()"
});
formatter.result({
  "duration": 617797300,
  "status": "passed"
});
formatter.after({
  "duration": 690409900,
  "status": "passed"
});
formatter.before({
  "duration": 4658208400,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "user is on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage for buying products",
  "keyword": "Given "
});
formatter.match({
  "location": "WomenCategoryProductSteps.iAmOnHomepageForBuyingProducts()"
});
formatter.result({
  "duration": 24400,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page-test;verify-user-should-add-product-to-the-cart-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@regression"
    },
    {
      "line": 15,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@womenpage"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on  the product \"Printed Summer Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I change Quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Pop menu will displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I can see Product successfully added to your shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on xbutton and close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryProductSteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 1492968700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress",
      "offset": 25
    }
  ],
  "location": "WomenCategoryProductSteps.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 1317133000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomenCategoryProductSteps.iChangeQuantity(String)"
});
formatter.result({
  "duration": 2099718200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "WomenCategoryProductSteps.iSelectSize(String)"
});
formatter.result({
  "duration": 82885400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 17
    }
  ],
  "location": "WomenCategoryProductSteps.iSelectColour(String)"
});
formatter.result({
  "duration": 129184400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryProductSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 61860600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryProductSteps.popMenuWillDisplayed()"
});
formatter.result({
  "duration": 31500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryProductSteps.iCanSeeProductSuccessfullyAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 31638500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryProductSteps.iClickOnXbuttonAndCloseThePopup()"
});
formatter.result({
  "duration": 1519165700,
  "status": "passed"
});
formatter.after({
  "duration": 732280400,
  "status": "passed"
});
formatter.uri("creataccount.feature");
formatter.feature({
  "line": 2,
  "name": "creat Account page test",
  "description": "\r\nAs user i want to creat account",
  "id": "creat-account-page-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@creatpage"
    }
  ]
});
formatter.before({
  "duration": 4550144100,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User is on home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage for creat account",
  "keyword": "Given "
});
formatter.match({
  "location": "CreatAccountSteps.iAmOnHomepageForCreatAccount()"
});
formatter.result({
  "duration": 54100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "verify That User Should Create Account Successfully",
  "description": "",
  "id": "creat-account-page-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I click on Sign in Link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email to address field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on creat an account button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Enter first name \"pahal\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Enter Last name \"patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter First name in address \"pahal\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Last name in Address \"patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter password \"prime1234\" for address",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter adrees in address field \"6 ramnagar \"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter city in city field \"surat\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select State \"Florida\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter code \"23456\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select country \"United States\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter Homephone number \"011234567\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter mobile numbe \"07998736547\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Alias reffrence \"payal\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on register",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should be able to register successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "My account message should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "CreatAccountSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1609161900,
  "status": "passed"
});
formatter.match({
  "location": "CreatAccountSteps.iEnterEmailToAddressField()"
});
formatter.result({
  "duration": 88835600,
  "status": "passed"
});
formatter.match({
  "location": "CreatAccountSteps.iClickOnCreatAnAccountButton()"
});
formatter.result({
  "duration": 81218800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pahal",
      "offset": 20
    }
  ],
  "location": "CreatAccountSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 1553013200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel",
      "offset": 19
    }
  ],
  "location": "CreatAccountSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 99717100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pahal",
      "offset": 31
    }
  ],
  "location": "CreatAccountSteps.iEnterFirstNameInAddress(String)"
});
formatter.result({
  "duration": 83056800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel",
      "offset": 30
    }
  ],
  "location": "CreatAccountSteps.iEnterLastNameInAddress(String)"
});
formatter.result({
  "duration": 71920200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime1234",
      "offset": 18
    }
  ],
  "location": "CreatAccountSteps.iEnterPasswordForAddress(String)"
});
formatter.result({
  "duration": 68838300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6 ramnagar ",
      "offset": 33
    }
  ],
  "location": "CreatAccountSteps.iEnterAdreesInAddressField(String)"
});
formatter.result({
  "duration": 79941700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surat",
      "offset": 28
    }
  ],
  "location": "CreatAccountSteps.iEnterCityInCityField(String)"
});
formatter.result({
  "duration": 83227100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Florida",
      "offset": 16
    }
  ],
  "location": "CreatAccountSteps.iSelectState(String)"
});
formatter.result({
  "duration": 113695700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23456",
      "offset": 14
    }
  ],
  "location": "CreatAccountSteps.iEnterCode(String)"
});
formatter.result({
  "duration": 75331900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 18
    }
  ],
  "location": "CreatAccountSteps.iSelectCountry(String)"
});
formatter.result({
  "duration": 43268400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "011234567",
      "offset": 26
    }
  ],
  "location": "CreatAccountSteps.iEnterHomephoneNumber(String)"
});
formatter.result({
  "duration": 78854500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07998736547",
      "offset": 22
    }
  ],
  "location": "CreatAccountSteps.iEnterMobileNumbe(String)"
});
formatter.result({
  "duration": 3099599100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "payal",
      "offset": 25
    }
  ],
  "location": "CreatAccountSteps.iEnterAliasReffrence(String)"
});
formatter.result({
  "duration": 65311100,
  "status": "passed"
});
formatter.match({
  "location": "CreatAccountSteps.iClickOnRegister()"
});
formatter.result({
  "duration": 1380858700,
  "status": "passed"
});
formatter.match({
  "location": "CreatAccountSteps.iShouldBeAbleToRegisterSuccessfully()"
});
formatter.result({
  "duration": 22600,
  "status": "passed"
});
formatter.match({
  "location": "CreatAccountSteps.myAccountMessageShouldBeDisplayed()"
});
formatter.result({
  "duration": 27708400,
  "error_message": "org.junit.ComparisonFailure: displayed messsage is wrong: expected:\u003cM[y Account]\u003e but was:\u003cM[Y ACCOUNT]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.automation.cucumber.steps.CreatAccountSteps.myAccountMessageShouldBeDisplayed(CreatAccountSteps.java:121)\r\n\tat ✽.And My account message should be displayed(creataccount.feature:29)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 909754400,
  "status": "passed"
});
formatter.uri("signpage.feature");
formatter.feature({
  "line": 1,
  "name": "sign page test",
  "description": "As a user i want to sign in on automation practice website",
  "id": "sign-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4964456100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "user is on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 111000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "user Should Navigate To SignIn Page SuccessFully",
  "description": "",
  "id": "sign-page-test;user-should-navigate-to-signin-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on Signin Link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be navigated to signIn page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "AUTHENTICATION message should be visible",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 4410248500,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iShouldBeNavigatedToSignInPageSuccessfully()"
});
formatter.result({
  "duration": 16600,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.authenticationMessageShouldBeVisible()"
});
formatter.result({
  "duration": 30995600,
  "status": "passed"
});
formatter.after({
  "duration": 749792500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "verify The ErrorMessage With InValid Credentials",
  "description": "",
  "id": "sign-page-test;verify-the-errormessage-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@sanity"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I click on Signin Link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "\"\u003cerrorMessage\u003e\" error should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "sign-page-test;verify-the-errormessage-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ],
      "line": 21,
      "id": "sign-page-test;verify-the-errormessage-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 22,
      "id": "sign-page-test;verify-the-errormessage-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 23,
      "id": "sign-page-test;verify-the-errormessage-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 24,
      "id": "sign-page-test;verify-the-errormessage-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 25,
      "id": "sign-page-test;verify-the-errormessage-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4407127700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "user is on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 53300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verify The ErrorMessage With InValid Credentials",
  "description": "",
  "id": "sign-page-test;verify-the-errormessage-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@regression"
    },
    {
      "line": 13,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I click on Signin Link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "\"An email address required.\" error should be displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 2130039200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 70553900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 80879500,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 750180700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 1
    }
  ],
  "location": "SignInSteps.errorshouldBeDisplayed(String)"
});
formatter.result({
  "duration": 32015700,
  "status": "passed"
});
formatter.after({
  "duration": 670089800,
  "status": "passed"
});
formatter.before({
  "duration": 4546276500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "user is on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "verify The ErrorMessage With InValid Credentials",
  "description": "",
  "id": "sign-page-test;verify-the-errormessage-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@regression"
    },
    {
      "line": 13,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I click on Signin Link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "\"Password is required.\" error should be displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 1356347100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 99590300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 66758700,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 777340200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 1
    }
  ],
  "location": "SignInSteps.errorshouldBeDisplayed(String)"
});
formatter.result({
  "duration": 32566000,
  "status": "passed"
});
formatter.after({
  "duration": 688128000,
  "status": "passed"
});
formatter.before({
  "duration": 4429688500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "user is on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 32100,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "verify The ErrorMessage With InValid Credentials",
  "description": "",
  "id": "sign-page-test;verify-the-errormessage-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@regression"
    },
    {
      "line": 13,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I click on Signin Link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter username \"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "\"Invalid email address.\" error should be displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 2381724400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 74725700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 85439400,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 1600094400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 1
    }
  ],
  "location": "SignInSteps.errorshouldBeDisplayed(String)"
});
formatter.result({
  "duration": 32378200,
  "status": "passed"
});
formatter.after({
  "duration": 749450100,
  "status": "passed"
});
formatter.before({
  "duration": 4409885700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "user is on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "verify The ErrorMessage With InValid Credentials",
  "description": "",
  "id": "sign-page-test;verify-the-errormessage-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@regression"
    },
    {
      "line": 13,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I click on Signin Link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "\"Authentication failed.\" error should be displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 1453650800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 78411400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 82049300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 1058756200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 1
    }
  ],
  "location": "SignInSteps.errorshouldBeDisplayed(String)"
});
formatter.result({
  "duration": 29884300,
  "status": "passed"
});
formatter.after({
  "duration": 697189400,
  "status": "passed"
});
formatter.before({
  "duration": 4841800900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "user is on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SignInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 19800,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "verify That User Should LogIn SuccessFully With Valid Credentials",
  "description": "",
  "id": "sign-page-test;verify-that-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I click on Signin Link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I enter \"priya1234@gmail.com\" in email field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter valid password \"patel123\" in passwordfield",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on signin Button with valid credential",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "sing out link should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 2277877200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "priya1234@gmail.com",
      "offset": 9
    }
  ],
  "location": "SignInSteps.iEnterInEmailField(String)"
});
formatter.result({
  "duration": 87512800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel123",
      "offset": 24
    }
  ],
  "location": "SignInSteps.iEnterValidPasswordInPasswordfield(String)"
});
formatter.result({
  "duration": 97588300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iClickOnSigninButtonWithValidCredential()"
});
formatter.result({
  "duration": 2285275100,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 20700,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.singOutLinkShouldBeDisplayed()"
});
formatter.result({
  "duration": 50164500,
  "status": "passed"
});
formatter.after({
  "duration": 737451300,
  "status": "passed"
});
});