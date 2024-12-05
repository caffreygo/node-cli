import https from "node:https";
import fs from "node:fs";
import { ProgressBar } from "./my-process.js";

const downloadURLs = {
  linux:
    "https://storage.googleapis.com/chromium-browser-snapshots/Linux_x64/970501/chrome-linux.zip",
  darwin:
    "https://storage.googleapis.com/chromium-browser-snapshots/Mac/970501/chrome-mac.zip",
  win32:
    "https://storage.googleapis.com/chromium-browser-snapshots/Win/970501/chrome-win32.zip",
  win64:
    "https://storage.googleapis.com/chromium-browser-snapshots/Win_x64/970501/chrome-win32.zip",
};

const bar = new ProgressBar();
let value = 0;

// 使用合适的 URL 进行下载
const url = downloadURLs.darwin;

https
  .get(url, (response) => {
    const file = fs.createWriteStream("./chromium.zip");

    // 获取 totalBytes 信息
    const totalBytes = parseInt(response.headers["content-length"]!, 10);

    // 如果没有 content-length，可以选择设置一个默认值或跳过进度条
    if (!totalBytes) {
      console.warn("警告：无法获取文件大小，无法显示进度条。");
    } else {
      bar.start(totalBytes, 0);
    }

    response.pipe(file);

    // 监听数据流
    response.on("data", (chunk) => {
      value += chunk.length;

      if (totalBytes) {
        bar.update(value);
      }
    });

    response.on("end", () => {
      // 下载完成
         if (totalBytes) {
        bar.stop();
      } else {
        console.log("下载完成，但无法计算进度条。");
      }
    });

    response.on("error", (err) => {
      // 处理下载错误
      console.error("下载错误:", err);
      bar.stop(); // 在错误发生时停止进度条
    });
  })
  .on("error", (err) => {
    // 处理请求错误
    console.error("请求错误:", err);
  });
