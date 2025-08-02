/*
**  FIS AI Code Assistant Policy Compliance
**  This file has been developed fully with the assistance of GitHub Copilot
**  AI coding assistance started: 08/01/2025
**  Developer notes: 
*/ 

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';

test.use({ 
  browserName: 'chromium' 
});

test.describe('Checkout Flow', () => {
  test('Standard user completes checkout', {
    tag: '@smoke @checkout @critical'
  }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Navigate to login page
    await loginPage.goto();

    // Login with standard user credentials
    await loginPage.login('standard_user', 'secret_sauce');

    const productName = 'Sauce Labs Backpack';
    
    // Add product to cart
    await inventoryPage.addProductToCart(productName);

    // Verify cart badge shows 1 item
    const cartBadge = inventoryPage.getCartBadge();
    await expect(cartBadge).toHaveText('1');

    // Navigate to cart
    await inventoryPage.goToCart();

    // Verify product is in cart and proceed to checkout
    await cartPage.verifyProductInCart(productName);
    await cartPage.proceedToCheckout();

    // Fill checkout information
    await checkoutPage.fillCheckoutInfo('John', 'Doe', '12345');

    // Verify total amount and finish order
    await checkoutPage.verifyTotalAmount('$32.39');
    await checkoutPage.finishOrder();

    // Verify order completion
    await checkoutPage.verifyOrderComplete();
  });
});
