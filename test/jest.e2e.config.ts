// jest.config.ts
import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  preset: "jest-playwright-preset",
  transform: {
    "^.+\\.ts$": "<rootDir>/node_modules/ts-jest",
  },
  globalSetup: "<rootDir>/utils/globalSetup.ts",
  testEnvironmentOptions: {
    "jest-playwright": {
      // TODO(@jsjoeio) enable on webkit and firefox
      // waiting on next playwright release
      // - https://github.com/microsoft/playwright/issues/6009#event-4536210890
      // - https://github.com/microsoft/playwright/issues/6020
      browsers: ["chromium"],
      // If there's a page error, we don't exit
      // i.e. something logged in the console
      exitOnPageError: false,
      contextOptions: {
        recordVideo: {
          dir: "./test/e2e/videos",
        },
      },
    },
  },
  testPathIgnorePatterns: ["/node_modules/", "/lib/", "/out/", "test/unit"],
  testTimeout: 30000,
  modulePathIgnorePatterns: [
    "<rootDir>/../lib/vscode",
    "<rootDir>/../release-packages",
    "<rootDir>/../release",
    "<rootDir>/../release-standalone",
    "<rootDir>/../release-npm-package",
    "<rootDir>/../release-gcp",
    "<rootDir>/../release-images",
  ],
}
export default config
