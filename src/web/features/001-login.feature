Feature: Login

  @web
  Scenario: Negative User login alert
    Given User visit SHAFIQ page and access login form
    When User provide invalid email format and password too length
    Then Appear error alert message