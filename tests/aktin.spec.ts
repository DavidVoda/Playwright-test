import { test, expect } from '@playwright/test';
import { AktinPage } from '../page-objects/aktin.page';

test('Add specific product to shopping cart', async ({ page }) => {
    const aktinPage = new AktinPage(page);
    const { searchbox, cartButton, notification, cartQuantity } = aktinPage;

    const productName = 'Double Trouble'


    await page.goto('https://aktin.cz/')

    await searchbox.fill(productName)
    await searchbox.press('Enter');
    await page.waitForTimeout(2000)

    await page.locator('[data-group-id="62732"]').first().click();

    await page.waitForTimeout(2000)
    await cartButton.scrollIntoViewIfNeeded()
    await cartButton.click()
    await expect(cartQuantity).toHaveValue('1', { timeout: 10000 });
    await expect(notification).toBeVisible()

    //await expect(async () => {
    //    await cartButton.click();
    //    await expect(cartQuantity).toHaveValue('1');
    //}).toPass({ timeout: 10000 });

});

test('Remove specific product from shopping cart', async ({ page }) => {
    const aktinPage = new AktinPage(page);
    const { cartButton, cartQuantity, shoppingCartLink, removeFromCartButton, emptyShoppingCart } = aktinPage;


    await page.goto('https://aktin.cz/vilgain-double-trouble-protein-bar/arasidove-maslo-malinovy-dzem-55-g-46423')

    await page.waitForTimeout(2000)
    await cartButton.scrollIntoViewIfNeeded()
    await cartButton.click()
    await expect(cartQuantity).toHaveValue('1', { timeout: 10000 });

    await shoppingCartLink.click()

    await removeFromCartButton.click()

    await expect(emptyShoppingCart).toBeVisible()
    await expect(emptyShoppingCart).toContainText("Košík je prázdný")
});