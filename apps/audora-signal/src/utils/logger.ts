import chalk from "chalk";

export const logger = {
  info: (message: string, ...args: unknown[]) => {
    console.log(chalk.blue("[INFO]"), message, ...args);
  },

  warn: (message: string, ...args: unknown[]) => {
    console.warn(chalk.yellow("[WARN]"), message, ...args);
  },

  error: (message: string, ...args: unknown[]) => {
    console.error(chalk.red("[ERROR]"), message, ...args);
  },

  debug: (message: string, ...args: unknown[]) => {
    if (process.env.DEBUG === "true") {
      console.log(chalk.magenta("[DEBUG]"), message, ...args);
    }
  },
};
