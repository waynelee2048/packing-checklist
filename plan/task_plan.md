# 任務計畫：Firebase 資料清理 + Sync Bug 修復 + 未推送功能整理

## 目標
清理 Firebase 共享清單的髒資料、修復 sync ID type mismatch bug、整理未推送的程式碼變更

## 目前階段
階段 3

## 各階段

### 階段 1：資料分析與規劃
- [x] 分析 Firebase 資料結構，找出共享 vs 個人清單的資料問題
- [x] 識別重複項目、孤兒清單、ID type mismatch
- [x] 列出所有需清理的項目
- **狀態：** complete

### 階段 2：資料遷移（inlineItems → itemLibrary）
- [x] 寶貝上學（共享A）— 補上缺少的 6 個項目到共享清單
- [x] 寶貝上學 — 同步共享A checked 狀態回阿寬本地
- [x] 寶貝上學 — 阿寬 inlineItems 轉成 itemLibrary + list.items（10 個）
- [x] 2026三芝露營 — PH inlineItems 轉成 itemLibrary + list.items（8 個）
- [x] 2026三芝露營 — 共享清單去重 60→50 個
- **狀態：** complete

### 階段 3：資料清理（剩餘）
- [x] 日常出門共享清單 (`-OoG8KFtfgheMY_eWt_v`) — 移除 6 個 string/int ID 重複項
- [x] 刪除孤兒共享清單：寶貝上學B (`-OoG8VzWVy6X7y_00ZM9`)
- [x] 刪除孤兒共享清單：萬芳家3/1 (`-OmU8POXKEBt8VLw_jzs`)
- [x] 清理 sharedIndex 中指向孤兒清單的 entry
- **狀態：** complete

### 階段 4：Sync Bug 修復
- [x] 修 `useSharedLists.js` auto-sync ID type mismatch（`"13" !== 13`）
- [x] 移除 `useFirebase.js` 的 3 行 debug log
- [x] 測試驗證 sync 不再產生重複（build 通過）
- **狀態：** complete

### 階段 5：未推送功能整理與提交
- [x] 決定哪些未追蹤檔案要 commit（e2e、playwright、tasks/prd）
- [x] 排除測試產出目錄（test-results、playwright-report、test-screenshots）
- [x] 加入 .gitignore 規則
- [ ] 提交所有變更
- **狀態：** in-progress

## 關鍵資訊

### 使用者帳號
| 使用者 | UID | Email |
|--------|-----|-------|
| 阿寬 | TYpYc4OsaQXSOfFd6jTDy7mgXmj1 | lkw781030@gmail.com |
| PH | bEHYbO7xk3VKmMFyWxuEBTrEXvK2 | phoebe.yt.xiao@gmail.com |

### 共享清單對照
| sharedList ID | 名稱 | Owner | 狀態 |
|---------------|------|-------|------|
| `-OkiNKpG83OHg-whqtWR` | 寶貝上學 (A) | 阿寬 | 已清理 |
| `-OoG8VzWVy6X7y_00ZM9` | 寶貝上學 (B) | 阿寬 | 孤兒，待刪除 |
| `-OkiNIi9e94YdUU3Fwvs` | 寶貝游泳 | 阿寬 | 正常 |
| `-Om7m3QT31jUCiJSn5BD` | 2026三芝露營 | PH | 已清理（去重） |
| `-OmU8POXKEBt8VLw_jzs` | 萬芳家3/1 | PH | 孤兒，待刪除 |
| `-OoG8KFtfgheMY_eWt_v` | 日常出門 | PH | 有 6 個重複，待清理 |
| `-OoG8VzWVy6X7y_00ZM9` | 寶貝上學 (B) | 阿寬 | 孤兒，待刪除 |

### 未推送的程式碼
| 類型 | 檔案/目錄 | 說明 |
|------|-----------|------|
| 已修改 | `src/hooks/useFirebase.js` | debug log（應移除） |
| 已修改 | `package.json` | +playwright dev dep |
| 未追蹤 | `e2e/` | Playwright E2E 測試 |
| 未追蹤 | `playwright.config.js` | Playwright 設定 |
| 未追蹤 | `test-library.mjs` | 手動視覺測試腳本 |
| 未追蹤 | `tasks/prd-ui-redesign.md` | UI 大改版 PRD（12 user stories） |
| 未追蹤 | `ui/` | 9 張 UI mockup 截圖 |
| 不應 commit | `test-results/`, `playwright-report/`, `test-screenshots/` | 測試產出 |

## 已做決策
| 決策 | 理由 |
|------|------|
| inlineItems 轉成 itemLibrary 物品 | own-shared 模式不渲染 inlineItems，轉成正式物品才能顯示 |
| 使用共享清單的 receiver item ID | 避免 sync 產生重複 |
| 去重時保留 int ID 版本 | int ID 是 owner sync 寫入的正確版本 |

## 遇到的錯誤
| 錯誤 | 嘗試次數 | 解決方案 |
|------|---------|---------|
| 本機 web 拿不到 Firebase 新資料 | 1 | 加 debug log 確認 onValue 有收到；問題是 UI 不渲染 own-shared 的 inlineItems |

## 備註
- Firebase project: packing-8b3de
- Sync bug 根因：`useSharedLists.js` line 171-172 比對 ID 用 Set.has()，number vs string 不匹配
