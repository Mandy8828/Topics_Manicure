const express = require("express");
const path = require("path");

const app = express();

// 設定靜態資源目錄
app.use(express.static(path.join(__dirname, "public")));

// 設定對 CSS 檔案的 Content-Type
app.use(
  "/assets/css",
  (req, res, next) => {
    res.setHeader("Content-Type", "text/css");
    next();
  },
  express.static(path.join(__dirname, "public/css"))
);

// 設定對 JS 檔案的 Content-Type
app.use(
  "/assets/js",
  (req, res, next) => {
    res.setHeader("Content-Type", "text/javascript");
    next();
  },
  express.static(path.join(__dirname, "src/js"))
);

// 設定路由 - 這是一個基本的首頁路由
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 其他的路由和中間件設定
// ...

// 啟動伺服器
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
