# 發現與決策

## Firebase 資料問題

### 1. ID Type Mismatch 導致重複
- `useSharedLists.js` auto-sync 用 `Set.has()` 比對 ID
- owner 的 `list.items` 含 number ID（如 `13`）
- 共享清單 items 的 ID 被 Firebase 轉成 string（如 `"13"`）
- `Set.has("13")` 對 number `13` 回傳 false → 被當作新 item 重複加入
- 影響：日常出門（6 個重複）、三芝露營（10 個重複）

### 2. 孤兒共享清單
- `-OoG8VzWVy6X7y_00ZM9`（寶貝上學B）：阿寬的本地清單只指向 A，B 無人引用
- `-OmU8POXKEBt8VLw_jzs`（萬芳家3/1）：PH 本地清單無 sharedListId 指向它

### 3. inlineItems 不參與共享 sync
- `own-shared` 模式的 UI 只渲染 `list.items`（itemLibrary 物品）
- `inlineItems` 完全不顯示
- auto-sync 也不處理 inlineItems（只有 disposable 模式才同步）
- 解法：將 inlineItems 轉為正式 itemLibrary 物品

## 技術決策
| 決策 | 理由 |
|------|------|
| 資料遷移用共享清單的 receiver item ID | 讓 sync 認得這些物品，不會重複加入 |
| 去重保留 int ID 版本 | int 是 owner sync 寫入的，有完整 category/note |
| 新增物品分類用「露營」 | 露營清單的 inline 物品語意上屬於露營 |
| 新增物品分類用「必備」 | 寶貝上學的 inline 物品語意上是每日必備 |

## Sync Bug 修復方向
- `useSharedLists.js:171`: `currentItemIds = new Set(currentItems.map(i => i.id))`
- `useSharedLists.js:172`: `ownerItemIds = new Set(list.items)`
- 修法：比對時統一轉 string，或用 `==` 而非 `===`
- 建議：統一轉 string 比較安全（`String(id)`）

---
*每執行2次查看/瀏覽器/搜尋操作後更新此檔案*
