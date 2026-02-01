# 📦 打包清單 PWA

個人出門前確認隨身物品的清單工具。

## 功能
- ✅ 多清單管理（日常、上班、旅行...）
- ✅ 物品庫共用
- ✅ 備註功能
- ✅ 離線使用
- ✅ 可安裝到手機桌面

---

## 🚀 部署方式

### 方法一：GitHub Pages（推薦，免費）

1. **建立 GitHub 帳號**（如果還沒有）
   - 前往 https://github.com 註冊

2. **建立新 Repository**
   - 點擊右上角 `+` → `New repository`
   - 名稱輸入：`packing-checklist`
   - 選擇 `Public`
   - 點擊 `Create repository`

3. **上傳檔案**
   - 點擊 `uploading an existing file`
   - 將這個資料夾內的所有檔案拖曳上傳：
     - `index.html`
     - `manifest.json`
     - `sw.js`
     - `icon-192.png`
     - `icon-512.png`
   - 點擊 `Commit changes`

4. **啟用 GitHub Pages**
   - 進入 Repository → `Settings` → `Pages`
   - Source 選擇 `Deploy from a branch`
   - Branch 選擇 `main` → `/ (root)`
   - 點擊 `Save`

5. **取得網址**
   - 等待約 1-2 分鐘
   - 網址格式：`https://你的帳號.github.io/packing-checklist/`

---

### 方法二：Netlify（拖曳部署）

1. 前往 https://app.netlify.com/drop
2. 將整個 `packing-pwa` 資料夾拖曳到網頁上
3. 自動產生網址

---

### 方法三：本機測試

1. 在這個資料夾執行：
   ```bash
   python3 -m http.server 8080
   ```
2. 開啟瀏覽器前往 http://localhost:8080

---

## 📱 安裝到手機

部署完成後：

### iPhone
1. 用 Safari 開啟網址
2. 點擊「分享」按鈕（底部中間的方框+箭頭）
3. 選擇「加入主畫面」
4. 點擊「新增」

### Android
1. 用 Chrome 開啟網址
2. 點擊網址列旁的「安裝」按鈕
3. 或：點擊右上角選單 → 「新增至主畫面」

---

## 📝 未來擴充

當需要雲端同步時，可以考慮：
- **Firebase**：免費額度足夠個人使用
- **Supabase**：開源替代方案

---

## 檔案結構

```
packing-pwa/
├── index.html      # 主程式
├── manifest.json   # PWA 配置
├── sw.js          # Service Worker（離線支援）
├── icon-192.png   # APP 圖示
├── icon-512.png   # APP 圖示
└── README.md      # 本說明檔
```
