import readline from "node:readline";

const repeatCount = process.stdout.rows - 2;  // process.stdout.rows 终端可显示的行数
const blank = repeatCount > 0 ? "\n".repeat(repeatCount) : "";
console.log(blank);

readline.cursorTo(process.stdout, 0, 0);
readline.clearScreenDown(process.stdout);