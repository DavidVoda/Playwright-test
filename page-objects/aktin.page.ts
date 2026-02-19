import { type Page, type Locator } from '@playwright/test';

export class AktinPage {
    readonly searchbox: Locator
    readonly cartButton: Locator
    readonly cartQuantity: Locator
    readonly notification: Locator
    readonly shoppingCartLink: Locator
    readonly removeFromCartButton: Locator
    readonly emptyShoppingCart: Locator

    constructor(page: Page) {
        this.searchbox = page.getByRole('searchbox', { name: 'Hledat' })
        this.cartButton = page.locator('button[value="add_to_cart_button"]').first()
        this.cartQuantity = page.locator('input[name="quantity"]')
        this.notification = page.locator('div[id="notifications-root"]')
        this.shoppingCartLink = page.locator('a[href="/objednavka"]').first()
        this.removeFromCartButton = page.locator('button[name="remove"]')
        this.emptyShoppingCart = page.locator('div[class="shopping-list-empty"]')
    }
}