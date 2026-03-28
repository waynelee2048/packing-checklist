# PRD: 打包清單 App — UI 全面改版

## Introduction

根據新設計稿，對「物品庫」、「打包清單列表」及「清單詳情」三大畫面進行全面 UI 重構，並新增「物品頻率標籤」功能。目標是改善操作流暢度，讓常用動作減少點擊次數。

對應截圖：`ui/Xnip2026-02-24_23-1*.jpg`（共 9 張）

---

## Goals

- 物品庫改用分類 filter chips，取代純依賴搜尋列的互動模式
- 新增物品表單改用 chips 選取分類，操作更直覺
- 打包清單列表加入「我的清單 / 與我共用」tab 篩選
- 「加入物品」流程加入已選計數器與 +/− 切換按鈕，一目了然
- 清單詳情新增**頻率標籤**（每日、每週一⋯）—— 全新功能
- 排序改為 bottom sheet 選單，選項更完整
- 整體 UI 保持與現有 design system（Tailwind + indigo 主色）一致

---

## User Stories

### US-001: 物品庫 — 分類 Filter Chips

**Description:** As a user, I want to filter items by category using chips so I can browse without typing.

**Acceptance Criteria:**
- [ ] 搜尋列下方顯示「全部 + 各分類名稱」chip 列（橫向捲動）
- [ ] 預設選中「全部」；「全部」有 checkmark 樣式
- [ ] 點擊分類 chip 後只顯示該分類的物品（section header 仍顯示）
- [ ] Active chip 樣式：`bg-indigo-600 text-white`；inactive：`border border-slate-200 text-slate-700`
- [ ] Chips 與搜尋列可同時生效（先 chip 過濾，再對結果搜尋）
- [ ] Typecheck/lint passes

---

### US-002: 物品庫 — 物品列 UI 改版

**Description:** As a user, I want item notes displayed as a compact pill tag so I can scan items faster.

**Acceptance Criteria:**
- [ ] 備註（note）顯示為灰色小 pill tag，位於物品名稱右側同一行（e.g., `玄關抽屜`）
- [ ] 移除「編輯」「刪除」兩個並排按鈕，改為 `⋯` three-dot icon 按鈕
- [ ] `⋯` 點擊後顯示選單（dropdown 或 action sheet）：**編輯**、**刪除**
- [ ] 物品無備註時不顯示 pill
- [ ] 物品相片縮圖維持顯示於名稱左側（物品庫維持現有位置）
- [ ] Typecheck/lint passes

---

### US-003: 新增物品 — 類別 Chip Selector

**Description:** As a user, I want to select item category using chips instead of a dropdown so it's faster to tap.

**Acceptance Criteria:**
- [ ] 類別欄位改為橫向 chip 列（取代現有 `<select>`）
- [ ] 最後一個 chip 固定為「⚙ 設定」，點擊開啟現有 category manager
- [ ] 預設選中第一個分類
- [ ] Active 分類 chip 樣式：`bg-indigo-600 text-white`
- [ ] Typecheck/lint passes

---

### US-004: 新增物品 — Barcode / Camera 圖示

**Description:** As a user, I want scan and camera icons in the name input so I can quickly find items by scanning.

**Acceptance Criteria:**
- [ ] 物品名稱輸入框右側顯示兩個 icon：barcode scan icon、camera icon（以 `|` 分隔）
- [ ] Camera icon 點擊行為：觸發 `<input type="file">` 上傳照片（同現有「附加照片」邏輯）
- [ ] Barcode icon 點擊後：`alert('掃描功能即將推出')` 作為 stub（暫不實作實際掃描）
- [ ] Typecheck/lint passes

---

### US-005: 打包清單列表 — 篩選 Tabs

**Description:** As a user, I want to filter between my lists and shared lists using tabs so I can find what I need quickly.

**Acceptance Criteria:**
- [ ] 列表頂部標題下方顯示三個 tabs：**全部** / **我的清單** / **與我共用**
- [ ] 「我的清單」：只顯示 `data.lists`（不含 shared-with-me）
- [ ] 「與我共用」：只顯示 `shared.sharedWithMe` 的清單
- [ ] Tab 切換即時更新，不影響其他狀態
- [ ] Active tab 有底部 underline 或 filled 樣式
- [ ] Typecheck/lint passes

---

### US-006: 新增打包清單 Modal 改版

**Description:** As a user, I want a redesigned create-list modal with radio buttons so the options are clearer.

**Acceptance Criteria:**
- [ ] 清單類型改為 radio buttons 樣式（取代現有 checkbox）
  - 選項一：重複使用
  - 選項二：一次性（完成自動封存）
- [ ] 圖示選擇器改為橫向可捲動的 icon grid，搭配 pagination dots
- [ ] 確認按鈕文字改為「新增並添加物品」
- [ ] 點擊後：建立清單 → 立即導向 `AddItemsView`（傳入新清單 ID）
- [ ] Typecheck/lint passes

---

### US-007: 加入物品 — 已選計數器

**Description:** As a user, I want to see how many items I've selected so I know my progress without counting.

**Acceptance Criteria:**
- [ ] 搜尋列下方顯示「已選 N 個 ▼」文字（N 初始為 0）
- [ ] 每次選取/取消後 N 即時更新
- [ ] 點擊展開後以列表顯示已選物品名稱
- [ ] Typecheck/lint passes

---

### US-008: 加入物品 — +/− 切換按鈕

**Description:** As a user, I want items to toggle between + and − buttons so I can add and remove in the same flow.

**Acceptance Criteria:**
- [ ] 未選取物品右側顯示藍色圓框 `+` 按鈕
- [ ] 已選取物品右側顯示紅色圓框 `−` 按鈕
- [ ] 點擊 `+` 加入選取；點擊 `−` 取消選取；狀態即時切換（不需確認）
- [ ] 樣式：`+` 為 `border-2 border-indigo-500 text-indigo-500`；`−` 為 `border-2 border-rose-500 text-rose-500`
- [ ] Typecheck/lint passes

---

### US-009: 加入物品 — 建立新物品 CTA

**Description:** As a user, I want a "Create new item" shortcut when my search has no exact match so I can add new items inline.

**Acceptance Criteria:**
- [ ] 搜尋結果底部顯示「+ 建立新物品「{query}」」文字按鈕（藍色）
- [ ] 只在搜尋詞不為空時顯示
- [ ] 若已有完全相同名稱的物品，此 CTA 不顯示
- [ ] 點擊後：新增物品至 `itemLibrary`（名稱為 query，分類為「其他」）並自動加入選取
- [ ] Typecheck/lint passes

---

### US-010: 清單詳情 — 頻率標籤（全新功能）

**Description:** As a user, I want to tag each checklist item with a frequency so I know which items to bring on which days.

**Acceptance Criteria:**
- [ ] 清單物品列顯示頻率 pill（e.g., `每日`、`每週一`），位於物品名稱上方或左側
- [ ] 未設定頻率的物品不顯示 pill
- [ ] 頻率 pill 樣式：`bg-indigo-100 text-indigo-600 text-xs rounded-full px-2 py-0.5`
- [ ] 點擊物品列右側 `>` chevron 開啟頻率設定 bottom sheet
- [ ] 可設定選項：每日 / 每週一 / 每週二 / 每週三 / 每週四 / 每週五 / 每週六 / 每週日 / 不設定
- [ ] 頻率儲存至 `list.itemSettings[itemId].frequency`（string or undefined）
- [ ] Shared-with-me 模式下頻率 pill 只讀顯示，chevron 不顯示
- [ ] Typecheck/lint passes

**資料結構範例：**
```json
{
  "id": 1700000000,
  "name": "寶貝上學",
  "items": [101, 102, 103],
  "itemSettings": {
    "101": { "frequency": "daily" },
    "102": { "frequency": "weekly-mon" }
  }
}
```

**頻率 key 對照：**
| 顯示文字 | key |
|---------|-----|
| 每日 | `daily` |
| 每週一 | `weekly-mon` |
| 每週二 | `weekly-tue` |
| 每週三 | `weekly-wed` |
| 每週四 | `weekly-thu` |
| 每週五 | `weekly-fri` |
| 每週六 | `weekly-sat` |
| 每週日 | `weekly-sun` |

---

### US-011: 清單詳情 — 相片縮圖移至右側

**Description:** As a user, I want item photos shown on the right side of the row so text stays aligned on the left.

**Acceptance Criteria:**
- [ ] 物品相片縮圖從左側移至右側（`>` chevron 左邊）
- [ ] 無相片的物品右側只顯示 chevron
- [ ] 縮圖尺寸：`w-10 h-10 rounded-lg object-cover`（維持現有尺寸）
- [ ] Typecheck/lint passes

---

### US-012: 清單詳情 — 排序 Bottom Sheet

**Description:** As a user, I want to pick sort order from a bottom sheet so I can see all available options at once.

**Acceptance Criteria:**
- [ ] 現有循環排序 icon 按鈕改為顯示「{當前排序名稱} ↓」的文字 + icon 按鈕
- [ ] 點擊後從底部滑出排序選單（使用現有 `animate-slide-up` 動畫）
- [ ] 選項分兩組（以分隔線隔開）：
  - **排序欄位**：名稱 / 已完成 / 自訂排序
  - **排序方向**：A 到 Z / Z 到 A
- [ ] 目前選中的選項顯示 checkmark（`✓`）
- [ ] 選取後關閉 bottom sheet，立即套用
- [ ] Typecheck/lint passes

---

## Functional Requirements

- **FR-1:** 物品庫加入 category filter chips；物品依所選分類過濾
- **FR-2:** 物品庫物品列：備註改 pill tag；操作改 three-dot 選單（編輯 / 刪除）
- **FR-3:** 新增物品：類別欄位改 chip selector（含「⚙ 設定」跳轉）
- **FR-4:** 新增物品：名稱輸入框加入 barcode stub icon + camera icon
- **FR-5:** 打包清單列表加入三 tabs（全部 / 我的清單 / 與我共用）
- **FR-6:** 新增清單 modal：類型改 radio、圖示改捲動 grid、CTA 改「新增並添加物品」
- **FR-7:** 加入物品：頂部顯示「已選 N 個」計數器（可展開查看清單）
- **FR-8:** 加入物品：+/− 按鈕切換選取狀態
- **FR-9:** 加入物品：搜尋無完全匹配時顯示「+ 建立新物品」CTA
- **FR-10:** 清單物品支援 `frequency` 屬性，儲存至 `list.itemSettings[itemId].frequency`
- **FR-11:** 清單詳情：頻率 pill 顯示於物品名稱旁；chevron 開啟頻率設定
- **FR-12:** 清單詳情：相片縮圖移至列右側
- **FR-13:** 清單詳情：排序改為 bottom sheet，選項含名稱 / 已完成 / 自訂排序 / A-Z / Z-A

---

## Non-Goals

- 不實作 barcode 掃描的 OCR 邏輯（UI stub 即可）
- 不新增物品的 emoji picker（名稱欄可手動輸入 emoji）
- 不實作依頻率「自動過濾」清單（只做標示顯示）
- 不改動 Firebase schema 的 `checkedItems`、`sharedWithMe`、`sharedByMe` 結構
- 不改動設定頁（`ProfileView.jsx`）
- 不改動 `UndoToast`、`SharePanel` 元件邏輯

---

## Design Considerations

- 主色系維持 `indigo-600`，dark mode 對應 `indigo-500`
- Bottom sheet 動畫沿用現有 `animate-slide-up` class
- Pill tags（備註）：`bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs rounded-full px-2 py-0.5`
- 頻率 pill：`bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs rounded-full px-2 py-0.5`
- Filter chips active：`bg-indigo-600 text-white`；inactive：`border border-slate-200 text-slate-700`
- Chevron icon：使用 `lucide-react` 的 `ChevronRight`

---

## Technical Considerations

- **頻率資料**：在 `list` 物件新增 `itemSettings: { [itemId]: { frequency?: string } }`，不影響現有 `items` 陣列
- **Firebase 相容**：`itemSettings` 為可選欄位，舊清單不含此欄位時視為無頻率設定
- **Shared 模式**：頻率設定為 list owner 專屬；shared-with-me 使用者只能查看不能修改
- **現有元件**：`LibraryView.jsx`、`Checklist.jsx`、`ListsView.jsx`、`AddItemsView.jsx` 皆需更新

---

## Success Metrics

- 物品庫按分類瀏覽：從搜尋 2 步驟 → 點擊 1 下
- 加入物品選取：從逐一點擊確認 → +/− 即時切換
- 頻率標籤設定：點擊 chevron → 選擇 → 完成，≤ 3 步驟

---

## Open Questions

1. 頻率標籤的設定 UI：點擊 chevron 後是獨立頁面（`onNavigate`）還是 bottom sheet？
2. 「已選 N 個 ▼」展開後的 UI：dropdown 氣泡還是 bottom sheet？
3. 加入物品完成後的按鈕：是否需要「完成」按鈕，或直接 X 關閉？
4. 物品庫的搜尋列：filter chips 啟用後是否仍保留搜尋列（預設隱藏，需點擊搜尋 icon 展開）？
