Steps to reproduce:
- `yarn`
- `yarn build`
- `yarn serve`. The application lives at port 5000.
- In a different terminal window: `yarn test` (non-interactive) or `yarn cypress:open` (interactive).

This is how the app should behave:

| Clicking on | URL should be | Content should show  |
|-------------|---------------|----------------------|
| Link Home   | `/`           | Content of home route|
| Link One    | `/one`        | Content of route /one|
| Link Two    | `/two`        | Content of route /two|

## Expected behavior:
The test should pass.

## Actual behavior
- In non-interactive mode, the test fails every time.
- In interactive mode, the test fails about 1 out of 10 or 20 runs.
