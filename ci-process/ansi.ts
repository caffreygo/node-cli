import ansiEscapes from "ansi-escapes";

process.stdout.write(ansiEscapes.cursorHide);  // 保存光标位置
process.stdout.write(ansiEscapes.cursorSavePosition);  // 保存光标位置
process.stdout.write("░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░");

setTimeout(() => {
  process.stdout.write(ansiEscapes.cursorRestorePosition);  // 恢复光标位置
  process.stdout.write("████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░");
}, 1000);

setTimeout(() => {
  process.stdout.write(ansiEscapes.cursorRestorePosition);
  process.stdout.write("███████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░");
}, 2000);

setTimeout(() => {
  process.stdout.write(ansiEscapes.cursorRestorePosition);
  process.stdout.write("██████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░");
}, 3000);
