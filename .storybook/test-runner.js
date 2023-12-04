const config = {
  prepare: async ({ page, browserContext, testRunnerConfig }) => {
    const targetURL = process.env.TARGET_URL;
    const iframeURL = new URL("iframe.html", targetURL).toString();

    browserContext.addCookies([
      {
        name: "asset-token",
        value:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJjaGp0X2Q1NDM4ZjZlNDczYzQwZDZiZmZiNjQ1NGYzMjQyZGFlIiwiZXhwIjoxNzAzNjkyMDU5LCJ1c2VySWQiOiI2NDk0Njg4ZDk4MDhkZWZkZDY2OTZlOGQiLCJwcm92aWRlciI6ImdpdGxhYiIsIm9ubHkiOiJhc3NldHMifQ.yOGJSISIEIYvgGqhEb2TV1r4TvsTswskeZL5boNxRX4",
        domain: ".chromatic.com",
        path: "/"
      }
    ]);

    if (testRunnerConfig?.getHttpHeaders) {
      const headers = await testRunnerConfig.getHttpHeaders(iframeURL);
      await browserContext.setExtraHTTPHeaders(headers);
    }

    await page.goto(iframeURL, { waitUntil: "load" }).catch(err => {
      if (err.message?.includes("ERR_CONNECTION_REFUSED")) {
        const errorMessage = `Could not access the Storybook instance at ${targetURL}. Are you sure it's running?\n\n${err.message}`;
        throw new Error(errorMessage);
      }

      throw err;
    });
  },
  getHttpHeaders: () => {
    return {
      Cookie: `asset-token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJjaGp0X2Q1NDM4ZjZlNDczYzQwZDZiZmZiNjQ1NGYzMjQyZGFlIiwiZXhwIjoxNzAzNjkyMDU5LCJ1c2VySWQiOiI2NDk0Njg4ZDk4MDhkZWZkZDY2OTZlOGQiLCJwcm92aWRlciI6ImdpdGxhYiIsIm9ubHkiOiJhc3NldHMifQ.yOGJSISIEIYvgGqhEb2TV1r4TvsTswskeZL5boNxRX4;`
    };
  }
};

export default config;
