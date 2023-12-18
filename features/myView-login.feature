Feature: MyView app test

  Scenario Outline: As a user, I can log into the myView app

    Given I am in the login view
    When I login with <username> and <password>
    Then I should see the message saying <message>

    Examples:
      | username | password  | message    |
      | CGMAN    | 1234      | Welcome CG |