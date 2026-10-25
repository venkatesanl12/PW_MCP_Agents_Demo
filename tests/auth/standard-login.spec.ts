import { test, expect } from '../../src/fixtures/base';
import { InventoryPage } from '../../src/pages/InventoryPage';
import { LoginPage } from '../../src/pages/LoginPage';
import users from '../data/users.json';

test.describe('SauceDemo standard login', () => {
  test('logs in with standard_user @smoke @critical', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await test.step('Open the login form', async () => {
      await loginPage.goto();
      await expect(loginPage.usernameInput).toBeVisible();
      await expect(loginPage.passwordInput).toBeVisible();
      await expect(loginPage.loginButton).toBeVisible();
    });

    await test.step('Authenticate as the standard user', async () => {
      await loginPage.fillCredentials(
        users.standard.username,
        users.standard.password,
      );
      await expect(loginPage.usernameInput).toHaveValue(users.standard.username);
      await expect(loginPage.passwordInput).toHaveValue(users.standard.password);
      await loginPage.submit();
    });

    await test.step('Verify the inventory page', async () => {
      await expect(inventoryPage.pageHeading).toBeVisible();
      await expect(page).toHaveURL(/\/inventory\.html$/);
    });
  });
});