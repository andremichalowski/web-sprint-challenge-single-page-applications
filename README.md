# Single Page Applications Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **single page applications**. During this sprint, you studied **routing, forms, and testing in cypress**. In your challenge this week, you will demonstrate your mastery of these skills by creating **Lambda Eats**, a website designed to bring food to hungry coders.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction.

_You have **three hours** to complete this challenge. Plan your time accordingly._

## Introduction

In this challenge you will be working from the `Lambda Eats` homepage to create a functional `Pizza?` button that leads to a build your own pizza custom form.

You may use the following wireframes (also in a folder above) as guidance as you design your site but it is not required that you do so.

[Form](https://tk-assets.lambdaschool.com/d43783ef-e6a8-4154-ba68-430e2275fddc_Form.png)

[Home Page](https://tk-assets.lambdaschool.com/ed737cf5-723e-428d-9b25-192143c8b71f_HomePage.png)

[Confirmation](https://tk-assets.lambdaschool.com/a0f43a34-9fab-4d2b-89f7-e23b22d32964_Pizza.gif)

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

- [x] Initial commit

## Interview Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question.

1. In 1-2 sentences, explain what React's `useRouteMatch` hook is used for.
  <!--- useRouteMatch enables the ability to dynamically route to multiple URL's using one paramater without having to change the whole url. Instead of making redundant link or route paths, one hook can be created to match and alter the URL as it is called or referenced by different elements. --->

1. How would you explain form validation to someone who has never programmed before?
  <!--- Form validation is the process that is taken to ensure that the inputs or information that is created by a user matches the intended input purpose. A "Schema" or expectation for an input or interaction is created, the user input is created by the user, the code "validates" references this schema to see if it matches the expectations, and either allows the user to input the information or warns the user where and why the user's input information is incorrect.  ---> 

1. In 1-2 sentences, define end to end testing.
  <!--- E2E testing is the process of testing that requires an application to be tested completely or more thoroughly than static, unit or Integration testing. As it's name "End to End" implies, E2E tests from one end of an applications functionality to the other end. Looking at bugs, functions, and broader UI as a whole are giving the consumer the desired polished product that they are looking for.  >

## Instructions

### Task 1: Project Set Up

## - A
- [x] Create a forked copy of this project
- [x] Add your team lead as collaborator on Github
- [x] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [x] Create a new branch: `git checkout -b <firstName-lastName>`
- [x] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [x] Push commits: `git push origin <firstName-lastName>`

## - B
- [x] Download dependencies
  - create-react-app
    - axios
    - yup
    - styled components
    - reactstrap bootstrap
    - cypress


### Task 2: Project Requirements

Your finished project must include all of the following requirements:

## A: Homepage
- [x] A homepage that has a "/" route and links to your form (button, nav bar, or any other type of link is acceptable)
  - home component
    - route

## B: Pizza Form
- [x] A form with a "/pizza" route
  - [x] Part 1 - Form:
    - pizza component
      - route
      - form
      - [x] A name text input field
      - [x] A dropdown for pizza size
      - [x] A checklist for toppings - at least 4 (hint: name each separately!)
      - [x] Text input for special instructions
      - [x] An Add to Order button that submits form and returns a database record of name, size, toppings and special instructions
  - [x] Part 2 - Functionality:
    - [x] Empty strings
    - [x] State
    - [x] Schema
      - [x] inputChange
      - [x] validateChange
      - [x] Submit


## C: Validation
- [ ] Validation for name - name must be at least 2 characters

## D: Testing
- [ ] Testing - Implement the following tests in Cypress:
  - [ ] test that you can add text to the box
  - [ ] test that you can select multiple toppings
  - [ ] test that you can submit the form


In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.




### Task 3: Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [ ] Toggle form component for gluten free crust
- [ ] Turn form element sections into nested routes
- [ ] Test more of the application with Cypress
- [ ] Build UI for the eventuality of a network error when POSTing the order
- [ ] Add functionality to your order button that it leads to a Congrats! Pizza is on it's way! page **and** returns a database record of the whole order

## FAQs

**How do I return a database record of the order?**

One of your goals is to return a database record of the order - for this you'll need to write a post request. For more detailed steps, use the below:

1. Create a new state
2. Post to [reqres](https://reqres.in/) with `axios`
3. Log data in console

## Submission format

Follow these steps for completing your project.

- [ ] Submit a pull request to merge `<firstName-lastName>` branch into the `main` branch (student's repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull request
- [ ] Your team lead will count the project as complete after receiving your pull request
