@womenpage
Feature: Women Category page test

  As user i want to buy a product on automation practice website

  Background: user is on homepage
    Given  I am on homepage for buying products

  @smoke @regression
  Scenario: verify User Should Navigate To WomenCategory Page Successfully
    When I click on women tab
    Then I should be successfully navigated to Womencategory page
    And  WOMWN text should be visible

  @sanity @regression
  Scenario Outline: verify User Should Add Product To The Cart Successfully
    When I click on women tab
    And  I click on  the product "<product>"

    And  I change Quantity "<qty>"
    And  I select size "<size>"
    And  I select colour "<colour>"
    And  I click on add to cart button
    Then Pop menu will displayed
    And  I can see Product successfully added to your shopping cart
    And  I click on xbutton and close the popup

    Examples:
      | product               | qty | size | colour |
      | Blouse                | 2   | M    | White  |
      | Printed Dress         | 3   | L    | Orange |
      | Printed Chiffon Dress | 4   | S    | Green  |
      | Printed Summer Dress  | 2   | M    | Blue   |


