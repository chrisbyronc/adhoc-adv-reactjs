


## What is Unit Testing?  

<br>

An isolated and controlled measure of an individual component. Within the software development lifecycle, one of the crucial steps in an applications' development cycle is to validate the and confirm the application is working as expected. Using the unit testing methodology, we perform validation on isolated parts of an application. Some of the parts we test in unit testing includes functions, methods, responses, and components.

<br><br><br><br><br><br><br><br><br><br><br><br>

---------------------------------


### JavaScript Unit Testing  

In JavaScript, there are a lot of frameworks available to us to validate the various components of our applications


https://www.chaijs.com/guide/styles/

https://mochajs.org/#getting-started

https://jestjs.io/docs/getting-started


<br><br><br><br><br><br><br><br><br><br><br><br>

---------------------------------

### React & Redux Unit Testing  

Similarly, in React and Redux, there have been numerous frameworks developed that allows for an easier state and component validation.

https://reactjs.org/docs/testing.html

Jest

React Testing Library


<br><br><br><br><br><br><br><br><br><br><br><br>

---------------------------------

### Purpose of Unit Testing  

Ensuring code quality, application validation.

Using unit testing, we can validate each aspect our applications code.

<br><br><br><br><br><br><br><br><br><br><br><br>

---------------------------------


### Benefits of Unit Testing  

- Code quality
- Peace of mind
- Assurance
- Reduces cost
- Documentation

<br><br><br><br><br><br><br><br><br><br><br><br>

---------------------------------

### Limitations of Unit Testing  

- Speed of delivery
- Maintenance
- Feature creation time

<br><br><br><br><br><br><br><br><br><br><br><br>

---------------------------------

### Styles and Approaches of Unit Testing  

1. Black box testing

   - Testing the exact functionality of a test, validating an input with the expected output.

2. White box testing

   - Testing the structure and flow of an application

3. Gray box testing

   - Testing focused with only partial knowledge. Typically, using UML diagrams and database diagrams.

4. Integration testing

   - When testing the combined functions of an application. Not simply the unit test

5. end-to-end testing (e2e)

   - Testing the entire application, from the user interface, to the individual components

<br>

![](./goxPl-2163358022.jpg)

<br><br><br><br><br><br><br><br><br><br><br><br>

---------------------------------

### Quality Assurance

To ensure a products quality and delivered as expected.

<br><br><br><br><br><br><br><br><br><br><br><br>

---------------------------------

## JavaScript Unit Testing Tools   

Mocha / Chai

Jest

Jasmine

Selenium

Puppeteer


<br><br><br><br><br><br><br><br><br><br><br><br>

---------------------------------

## Jest API Overview  

Focusing on Jest, a few examples of the basic ways we can validate a function.

In Jest, we use expect statements to validate a functions' response. Using matchers, we can perform an assortment of validation tests. matchers allow us to validate the expected match or "return" of a Javascript function.

https://jestjs.io/


<br><br><br><br><br><br><br><br><br><br><br><br>

---------------------------------

## Organize Tests and Test Suites  

The way we organize our tests and test suites can largely depend on the application being developed.

The typical naming convention:

A top level folder called `__tests__`

Within tests, either have an `index.test.js` file, or a named file related to the file being tested

For instance, `middleware.js` would have a paired test file named `middleware.test.js`

It is recommended to follow the guidance of whichever test framework you are using.

<br><br><br><br><br><br><br><br><br><br><br><br>

---------------------------------

## Assertion Strategies  

How a component should render given state
When developing tests, it is best to think through how the application is rendered and behaves.

Given a certain state, we must devise how our component should render. From there, we can determine the best tests to validate what we expect.

Given a component a certain action, we can determine how a component should behave. Develop tests around this component, and it's expected behavior.

<br><br><br><br><br><br><br><br><br><br><br><br>

---------------------------------

### Mocks and Spies  

Mock tests are used to confirm a functions' validity when we don't have access to test a functions internal function calls.

Spies are ways for us to determine whether a function has been called or not.

<br><br><br><br><br><br><br><br><br><br><br><br>

---------------------------------

### TDD vs. BDD  

Test driven development

  - Driven by the tech team
  - Focuses on test cases to create features
  - Test case


Behavior driven development

  - Driven by users
  - How will a user interact with a feature
  - User Story

<br><br><br><br><br><br><br><br><br><br><br><br>

---------------------------------

###  Code Coverage  

- Function coverage
- Statement coverage
- Branches coverage
- Condition coverage
- Line coverage


<br><br><br><br><br><br><br><br><br><br><br><br>

---------------------------------
