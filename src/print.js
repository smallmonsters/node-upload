import chalk from "chalk"

export const errorLog = (error) => console.log(chalk.red(`---------------> ${error}`));
export const defaultLog = (log) => console.log(chalk.blue(`---------------> ${log}`));
export const successLog = (log) => console.log(chalk.green(`---------------> ${log}`));