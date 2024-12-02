import chalk from "chalk"

console.log('\u001b[36;1;4mHello World!\u001b[0m 666')  // 36;1;4m 是颜色代码，0m 是重置代码

console.log(chalk.blue('Hello world!')+ chalk.red('666'));
console.log(chalk.blue.bgRed.bold('Hello world!')+ chalk.red('666'));
