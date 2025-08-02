/*
**  FIS AI Code Assistant Policy Compliance
**  This file has been developed fully with the assistance of GitHub Copilot
**  AI coding assistance started: 08/01/2025
**  Developer notes: 
*/ 

import { expect } from '@playwright/test';

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  // Common navigation methods
  async goto(url) {
    await this.page.goto(url);
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  // Common element interaction methods
  async click(selector) {
    await this.page.locator(selector).click();
  }

  async fill(selector, text) {
    await this.page.locator(selector).fill(text);
  }

  async getText(selector) {
    return await this.page.locator(selector).textContent();
  }

  // Common wait methods
  async waitForSelector(selector, timeout = 30000) {
    await this.page.waitForSelector(selector, { timeout });
  }

  async waitForElement(selector) {
    await this.page.locator(selector).waitFor();
  }

  // Common assertion methods
  async verifyElementVisible(selector) {
    await expect(this.page.locator(selector)).toBeVisible();
  }

  async verifyElementText(selector, expectedText) {
    await expect(this.page.locator(selector)).toHaveText(expectedText);
  }

  async verifyUrl(expectedUrl) {
    await expect(this.page).toHaveURL(expectedUrl);
  }

  async verifyUrlContains(urlPart) {
    await expect(this.page).toHaveURL(new RegExp(urlPart));
  }

  // Utility methods
  async takeScreenshot(name) {
    await this.page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
  }

  async scrollToElement(selector) {
    await this.page.locator(selector).scrollIntoViewIfNeeded();
  }
}
