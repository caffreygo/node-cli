import readline from "node:readline";

const repeatCount = process.stdout.rows - 2;  // process.stdout.rows 终端可显示的行数
const blank = repeatCount > 0 ? "\n".repeat(repeatCount) : "";  // 根据行数生成空行
console.log(blank);

readline.cursorTo(process.stdout, 0, 0);  // 将光标移动到终端的左上角
readline.clearScreenDown(process.stdout);  // 清除光标以下的所有内容