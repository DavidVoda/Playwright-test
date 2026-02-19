import { test, expect } from '@playwright/test';
import { AktinPage } from '../page-objects/aktin.page';

test('test', async ({ page }) => {
    const aktinPage = new AktinPage(page);
    const { searchbox, cartButton, notification, cartQuantity } = aktinPage;


    await page.goto('https://aktin.cz/')

    await searchbox.fill('double trouble')
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