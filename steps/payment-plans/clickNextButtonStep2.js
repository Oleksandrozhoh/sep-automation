import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  paymentPlanPage,
  page,
  startApplicationPage,
} from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Given("user is on the enrollment page", async function () {
  await startApplicationPage.login();
});

Given("user has completed step one with valid information", async function () {
  await startApplicationPage.firstNameInputBox.fill("Alex");
  await startApplicationPage.lastNameInputBox.fill("Bright");
  await startApplicationPage.emailInputBox.fill("alexbright@gmail.com");
  await startApplicationPage.phoneNumberInputBox.fill("1234567890");
  await startApplicationPage.howDidYouHearAboutUsDropDown.click();
  await startApplicationPage.emailOptionFromDropDown.click();
  await startApplicationPage.nextButton.click();
});

Given("user is on step two of the enrollment process", async function () {
  await expect(paymentPlanPage.chooseAPaymentPlanText).toBeVisible();
});

When("user clicks upfront payment option", async function () {
  await paymentPlanPage.upfrontPaymentOption.click();
});

When("user clicks installments payment option", async function () {
  await paymentPlanPage.installmentsPaymentOption.click();
});

Then("the next button is disabled by default", async function () {
  await expect(paymentPlanPage.nextButton).toBeDisabled();
});

Then("the next button will be enabled", async function () {
  await expect(paymentPlanPage.nextButton).toBeEnabled();
});
