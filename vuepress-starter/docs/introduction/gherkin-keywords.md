# Gherkin Keywords

## Feature

**Definition**: Describes the feature being tested.

- **Purpose**: Provides a high-level description of the functionality being tested. It helps stakeholders understand the scope and purpose of the tests.
- **Example**:

  ```gherkin
  Feature: User Login
    This feature allows users to log into the system using their credentials.
  ```

## Scenario

**Definition**: Represents a specific situation or test case within the feature.

- **Purpose**: Describes a particular use case or behavior that needs to be tested. It includes a series of steps to verify that the feature works as expected.
- **Example**:

  ```gherkin
  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters a valid username and password
    And clicks the login button
    Then the user should be redirected to the dashboard
  ```

## Given

**Definition**: Sets up the initial context or preconditions.

- **Purpose**: Establishes the starting state of the scenario. It prepares the environment and sets any necessary preconditions.
- **Example**:

  ```gherkin
  Given the user is on the login page
  ```

## When

**Definition**: Describes the action or event that triggers the scenario.

- **Purpose**: Specifies the event or action that causes the system to change state. It typically represents user interactions or system events.
- **Example**:

  ```gherkin
  When the user enters a valid username and password
  ```

## Then

**Definition**: Defines the expected outcome or result.

- **Purpose**: Verifies that the system behaves as expected after the action specified in the `When` step. It checks the results and ensures they match the expected outcome.
- **Example**:

  ```gherkin
  Then the user should be redirected to the dashboard
  ```

## And/But

**Definition**: Used to add additional steps to `Given`, `When`, or `Then` statements.

- **Purpose**: Allows for the addition of multiple conditions or actions within a scenario, enhancing readability and clarity.
- **Example**:

  ```gherkin
  Given the user is on the login page
  And the user has entered their username
  When the user enters their password
  And clicks the login button
  Then the user should be redirected to the dashboard
  But if the credentials are incorrect, an error message should be displayed
  ```

These keywords form the foundation of Gherkin syntax, enabling the creation of clear, structured, and executable specifications for software behavior.