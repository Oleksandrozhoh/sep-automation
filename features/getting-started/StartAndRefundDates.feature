@sep11
Feature: Program start dates and Refund dates

    As a customer, I want to see the program start dates and refund policy details before enrolling
    so that I can make informed decisions.

    #* AC1: Program Start date and refund dates must be displayed in Step 1 in Test Automation with Selenium Program.

    Background:
        Given User is on the self enrollment page

    Scenario: Verify that the program start date and refund date are displayed
        Then Program start date is displayed
        And Program refund date is displayed

    Scenario: Verify that the program start date and refund date are correct
        Then Program start date is correct
        And Program refund date is correct






