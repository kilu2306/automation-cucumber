@creatpage
Feature: creat Account page test

  As user i want to creat account

  Background: User is on home page
    Given  I am on homepage for creat account

  @regression
  Scenario: verify That User Should Create Account Successfully
    When I click on Sign in Link
    And  I enter email to address field
    And  I click on creat an account button
    And  I Enter first name "pahal"
    And  I Enter Last name "patel"
    And  I enter First name in address "pahal"
    And  I enter Last name in Address "patel"
    And  I enter password "prime1234" for address
    And  I enter adrees in address field "6 ramnagar "
    And  I enter city in city field "surat"
    And  I select State "Florida"
    And  I enter code "23456"
    And  I select country "United States"
    And  I enter Homephone number "011234567"
    And  I enter mobile numbe "07998736547"
    And  I enter Alias reffrence "payal"
    And  I click on register
    Then I should be able to register successfully
    And  My account message should be displayed




