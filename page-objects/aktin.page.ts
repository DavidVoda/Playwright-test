import { type Page, type Locator } from '@playwright/test';

export class AktinPage {
    readonly searchbox: Locator
    readonly cartButton: Locator
    readonly cartQuantity: Locator
    readonly notification: Locator

    constructor(page: Page) {
        this.searchbox = page.getByRole('searchbox', { name: 'Hledat' })
        this.cartButton = page.locator('button[value="add_to_cart_button"]').first()
        this.cartQuantity = page.locator('input[name="quantity"]')
        this.notification = page.locator('div[id="notifications-root"]')
    }
}