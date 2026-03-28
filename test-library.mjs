import { chromium } from 'playwright';

const BASE = 'http://localhost:5173';
const SCREENSHOTS_DIR = '/Users/kuan/Project/packing-checklist/test-screenshots';

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function run() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();

  // Setup: 2 spaces
  await page.goto(BASE);
  await page.evaluate(() => {
    localStorage.clear();
    const data = {
      itemLibrary: [
        { id: 1, name: '錢包', category: '必備', note: '', location: '玄關抽屜', spaceId: 'space_default', photoURL: 'https://picsum.photos/100' },
        { id: 2, name: '鑰匙', category: '必備', note: '大門+機車', location: '', spaceId: 'space_default' },
        { id: 3, name: '手機', category: '必備', note: '', location: '', spaceId: 'space_default' },
        { id: 4, name: '悠遊卡', category: '必備', note: '', location: '', spaceId: 'space_default' },
        { id: 5, name: '耳機', category: '電子產品', note: '', location: '書桌', spaceId: 'space_default' },
      ],
      lists: [{ id: 1, name: '日常出門', icon: 'footprints', items: [1, 2, 3], checkedItems: [] }],
      activeListId: 1,
      templates: [],
      spaces: [
        { id: 'space_default', name: '個人空間' },
        { id: 'space_family', name: '家庭共享空間' }
      ],
      activeSpaceId: 'space_default'
    };
    localStorage.setItem('packing-checklist-data', JSON.stringify(data));
  });
  await page.reload();
  await sleep(1000);

  // Navigate to 物品庫
  await page.click('text=物品庫');
  await sleep(500);

  // === Test: Add item sheet ===
  console.log('=== Add Item Sheet Tests ===\n');

  await page.click('button[aria-label="新增物品"]');
  await sleep(500);

  // 1. Title centered, no X button
  const titles = await page.$$('div.text-center.text-lg.font-bold');
  let hasTitle = false;
  for (const t of titles) {
    const text = await t.textContent();
    if (text === '新增物品') { hasTitle = true; break; }
  }
  console.log(hasTitle ? '✅ Title "新增物品" centered' : '❌ Title not centered');

  // Check no X close button in sheet
  const sheetButtons = await page.$$('.fixed.inset-0 .rounded-t-2xl button');
  let hasXButton = false;
  for (const btn of sheetButtons) {
    const label = await btn.getAttribute('aria-label');
    if (label === '關閉' || label === 'close') hasXButton = true;
    const html = await btn.innerHTML();
    // Check for X icon that is a close button (not the photo remove X)
    if (html.includes('text-slate-400') && !html.includes('bg-rose-500')) {
      // Could be close button, but let's check position
    }
  }

  // 2. "物品名稱" label above input
  const nameLabel = await page.$('label:has-text("物品名稱")');
  console.log(nameLabel ? '✅ "物品名稱" label visible' : '❌ No "物品名稱" label');

  // 3. Camera icon visible (no photo yet)
  const cameraBtn = await page.$('button[aria-label="拍照"]');
  console.log(cameraBtn ? '✅ Camera icon visible (no photo)' : '❌ No camera icon');

  // 4. Space radio always visible
  const spaceLabel = await page.$('label:has-text("空間")');
  console.log(spaceLabel ? '✅ Space section visible' : '❌ No space section');

  // 5. 存放位置 always visible as textarea
  const locLabel = await page.$('label:has-text("存放位置")');
  const locTextarea = await page.$('textarea');
  console.log((locLabel && locTextarea) ? '✅ 存放位置 always visible as textarea' : '❌ 存放位置 not visible/not textarea');

  // 6. 備註 always visible as textarea
  const noteLabel = await page.$('label:has-text("備註")');
  const textareas = await page.$$('textarea');
  console.log((noteLabel && textareas.length >= 2) ? '✅ 備註 always visible as textarea' : '❌ 備註 not visible/not textarea');

  // 7. 新增 button is rounded pill (rounded-full), centered
  const addBtns = await page.$$('button.rounded-full');
  let pillBtn = null;
  for (const btn of addBtns) {
    const text = await btn.textContent();
    if (text.trim() === '新增') { pillBtn = btn; break; }
  }
  console.log(pillBtn ? '✅ 新增 button is rounded pill' : '❌ 新增 button not pill shape');

  // 8. 新增 button disabled when empty
  if (pillBtn) {
    const disabled = await pillBtn.isDisabled();
    console.log(disabled ? '✅ 新增 button disabled when empty' : '❌ 新增 button not disabled');
  }

  // Screenshot: empty state
  await page.screenshot({ path: `${SCREENSHOTS_DIR}/v3-01-add-empty.png` });

  // 9. Fill name, check button becomes enabled
  await page.fill('input[placeholder="輸入完整以利搜尋"]', 'Evorie吸管水杯');
  await sleep(200);

  // Select 家庭共享空間
  const familyBtn = await page.$('button:has-text("家庭共享空間")');
  if (familyBtn) await familyBtn.click();
  await sleep(200);

  // Re-check button enabled
  const addBtns2 = await page.$$('button.rounded-full');
  let pillBtn2 = null;
  for (const btn of addBtns2) {
    const text = await btn.textContent();
    if (text.trim() === '新增') { pillBtn2 = btn; break; }
  }
  if (pillBtn2) {
    const enabled = !(await pillBtn2.isEnabled() === false);
    console.log(enabled ? '✅ 新增 button enabled when name filled' : '❌ 新增 still disabled');

    const cls = await pillBtn2.getAttribute('class');
    console.log(cls?.includes('bg-indigo-') ? '✅ 新增 button indigo when enabled' : '❌ 新增 not indigo');
  }

  // Screenshot: filled state
  await page.screenshot({ path: `${SCREENSHOTS_DIR}/v3-02-add-filled.png` });

  // === Test: Photo thumbnail inline ===
  // We can't easily trigger file upload in test, so just verify layout structure

  // Close and verify main list
  // Click backdrop
  await page.click('.fixed.inset-0.bg-black', { position: { x: 10, y: 50 } });
  await sleep(300);

  // Take main list screenshot for reference
  await page.screenshot({ path: `${SCREENSHOTS_DIR}/v3-03-main-list.png` });

  // Test space switcher
  const spaceSubBtn = await page.$('.safe-top button');
  if (spaceSubBtn) {
    await spaceSubBtn.click();
    await sleep(500);

    // No "關閉" button
    const closeBtn = await page.$('button:has-text("關閉")');
    console.log(!closeBtn ? '✅ Space switcher: no "關閉" button' : '❌ Space switcher still has "關閉"');

    await page.screenshot({ path: `${SCREENSHOTS_DIR}/v3-04-space-switcher.png` });

    // Close by clicking backdrop
    await page.click('.fixed.inset-0.bg-black', { position: { x: 10, y: 50 } });
    await sleep(300);
  }

  // Item without photo should NOT show placeholder
  const itemRows = await page.$$('.divide-y > div');
  if (itemRows.length >= 2) {
    // Second item (鑰匙) has no photo
    const secondRow = itemRows[1];
    const imgs = await secondRow.$$('img');
    const placeholders = await secondRow.$$('.w-12.h-12');
    console.log(imgs.length === 0 && placeholders.length === 0
      ? '✅ No photo = no image area at all'
      : `❌ Item without photo shows something (imgs=${imgs.length}, placeholders=${placeholders.length})`);
  }

  console.log('\n=== Done ===');
  console.log(`Screenshots saved to: ${SCREENSHOTS_DIR}/`);

  await sleep(2000);
  await browser.close();
}

run().catch(e => { console.error('Test failed:', e); process.exit(1); });
