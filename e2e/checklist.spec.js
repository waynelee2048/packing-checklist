import { test, expect } from '@playwright/test';

test.describe('Packing Checklist E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the app
    await page.goto('/');
    // Clear local storage to start fresh (avoids default persistent states across tests if necessary, though incognito context helps)
    await page.evaluate(() => window.localStorage.clear());
    // Reload to apply empty state
    await page.reload();
  });

  test('should create a standard list, add an item, check it, and delete the list', async ({ page }) => {
    // Wait for the app to load
    await expect(page.locator('text=我的清單')).toBeVisible();

    // Click "新增清單"
    await page.click('button:has-text("新增清單")');

    // Fill list name
    await page.fill('input[placeholder="清單名稱..."]', 'Standard List E2E');

    // Click create
    await page.click('button:has-text("建立")');

    // Should be on checklist view for the new list
    await expect(page.locator('text=Standard List E2E').first()).toBeVisible();

    // Quick add an item
    await page.click('button[aria-label="新增項目"]');
    await page.fill('input[placeholder="物品名稱"]', 'Passport E2E');
    await page.click('button:has-text("新增並加入清單")');

    // Item should be visible
    await expect(page.locator('text=Passport E2E')).toBeVisible();

    // Check the item
    await page.click('text=Passport E2E');

    // Wait for toast
    await expect(page.locator('text=✓ 已勾選 Passport E2E')).toBeVisible();

    // Go back to lists
    await page.click('button[aria-label="返回所有清單"]');

    // Verify list is there
    await expect(page.locator('text=Standard List E2E')).toBeVisible();

    // Delete the list
    // Click more vertical on this specific list row
    const listRow = page.locator('div.flex.items-center', { hasText: 'Standard List E2E' });
    await listRow.locator('button[aria-label="更多操作"]').click();
    
    // Click delete
    await page.click('button:has-text("刪除")');
    
    // Confirm delete
    await page.click('button:has-text("確定")');

    // The list should be removed
    await expect(page.locator('text=Standard List E2E')).not.toBeVisible();
  });

  test('should create a disposable list, add an item, check it and trigger completion', async ({ page }) => {
    // Wait for app
    await expect(page.locator('text=我的清單')).toBeVisible();

    // Click "新增清單"
    await page.click('button:has-text("新增清單")');

    // Toggle disposable switch by locating the role="switch"
    await page.click('button[role="switch"]');

    // Fill in the list name
    await page.fill('input[placeholder="清單名稱..."]', 'Disposable List E2E');

    // Click create
    await page.click('button:has-text("建立")');

    // Should be on checklist view
    await expect(page.locator('text=Disposable List E2E').first()).toBeVisible();
    await expect(page.locator('text=一次性').first()).toBeVisible();

    // Quick add an inline item
    await page.click('button[aria-label="新增項目"]');
    await page.fill('input[placeholder="項目名稱"]', 'Water Bottle E2E');
    
    // Click Add
    await page.click('button:has-text("新增")');

    // Close panel
    await page.click('button[aria-label="關閉新增表單"]');

    await expect(page.locator('text=Water Bottle E2E')).toBeVisible();

    // Check the item
    await page.click('text=Water Bottle E2E');

    // Disposables trigger celebration, wait for the confirm delete dialog
    // It pops up around 2.6s after being checked
    await expect(page.locator('text=清單完成！要刪除嗎？')).toBeVisible({ timeout: 5000 });
    
    // Confirm delete
    await page.click('button:has-text("確定")');

    // Back to lists view, the list should be gone
    await expect(page.locator('text=我的清單').first()).toBeVisible();
    await expect(page.locator('text=Disposable List E2E')).not.toBeVisible();
  });
});
