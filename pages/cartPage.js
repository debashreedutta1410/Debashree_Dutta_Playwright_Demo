/*
**  FIS AI Code Assistant Policy Compliance
**  This file has been developed partially with the assistance of GitHub Copilot
**  AI coding assistance started: 08/01/2025
**  Developer notes: 
*/ 


/*
**  FIS AI Code Assistant Policy Compliance
**  This file has been developed fully with the assistance of GitHub Copilot
**  AI coding assistance started: 08/01/2025
**  Developer notes: 
*/ 

import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.inventoryItemName = '.inventory_item_name';
    this.checkoutButton = '[data-test="checkout"]';
    this.removeButton = '[data-test*="remove"]';
  }

  async verifyProductInCart(productName) {
    await this.verifyElementText(this.inventoryItemName, productName);
  }

  async proceedToCheckout() {
    await this.click(this.checkoutButton);
  }

  async removeProduct() {
    await this.click(this.removeButton);
  }
}
