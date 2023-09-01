# playwright-javascript

## Requirements

- Install playwright with `npm init playwright@latest`
- VS Code is recommended.

## Description

Automate "Dogs" and "Cats" Google searches in `google-search.spec.js`

## Execute tests

Inside that directory, you can run several commands:

  `npx playwright test`
    Runs all tests specified in the playwright.config.js `testDir`.

  `npx playwright test --ui`
    Starts the interactive UI mode.

  `npx playwright test --project=chromium`
    Runs the tests only on Desktop Chrome.

  `npx playwright test example`
    Runs the tests in a specific file.

  `npx playwright test --debug`
    Runs the tests in debug mode.

  `npx playwright codegen`
    Auto generate tests with Codegen.

### Open Latest Report

Open latest indext.html report in playwright-report/ directory `npx playwright show-report`