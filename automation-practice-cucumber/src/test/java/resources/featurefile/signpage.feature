Feature: sign page test
  As a user i want to sign in on automation practice website

  Background: user is on homepage
    Given  I am on homepage

  @smoke @regression
  Scenario: user Should Navigate To SignIn Page SuccessFully
    When  I click on Signin Link
    Then  I should be navigated to signIn page successfully
    And   AUTHENTICATION message should be visible

  @sanity @regression
  Scenario Outline: verify The ErrorMessage With InValid Credentials
    When  I click on Signin Link
    And   I enter username "<username>"
    And   I enter password "<password>"
    And   I click on signin Button
    Then  "<errorMessage>" error should be displayed
    Examples:
      | username       | password | errorMessage               |
      |                | 123456   | An email address required. |
      | abcd@gmail.com |          | Password is required.      |
      | adfdfgfg       | 123456   | Invalid email address.     |
      | abcd@gmail.com | 123456   | Authentication failed.     |

  @regression
  Scenario: verify That User Should LogIn SuccessFully With Valid Credentials
    When  I click on Signin Link
    And   I enter "priya1234@gmail.com" in email field
    And   I enter valid password "patel123" in passwordfield
    And   I click on signin Button with valid credential
    Then  I should login successfully
    And   sing out link should be displayed

  Scenario: verify That User Should LogOut SuccessFully
    When  I click on Signin Link
    And   I enter "priya1234@gmail.com" in email field
    And   I enter valid password "patel123" in passwordfield
    And   I click on signin Button with valid credential
    And   I click on sign Out link
    Then  I should be able to log out successfully
    And   SignIn link should be displayed

