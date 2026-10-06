import { defineConfig, devices } from "@playwright/test";
const port = Number(process.env.PORT ?? 4177);
export default defineConfig({
  testDir: "tests/e2e", outputDir: ".local-work/test-results",
  fullyParallel: true, forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0, workers: process.env.CI ? 1 : undefined,
  reporter: "list", use: { baseURL: `http://127.0.0.1:${port}`, trace: "on-first-retry" },
  webServer: { command: `pnpm run preview --port ${port} --ignore-lock`, env: { ASTRO_PREVIEW_BACKGROUND: "1" }, url: `http://127.0.0.1:${port}`, reuseExistingServer: false, timeout: 120000 },
  projects: [
    { name: "desktop-chromium", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 1100 } } },
    { name: "mobile-chromium", use: { ...devices["Pixel 7"] } },
  ],
});
