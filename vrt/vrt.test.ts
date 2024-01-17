// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
// import { StoryIndex } from '@storybook/store';

// const storybookDir = resolve(__dirname, './storybook-static');
// const data: StoryIndex = JSON.parse(
//   readFileSync(resolve(storybookDir, 'stories.json')).toString(),
// );

// const DISMISS_ID = 'sb-dismiss';
// const CLICK_ID = 'sb-button';

// const sleep = (timeout = 1000) =>
//   new Promise((res) => {
//     setTimeout(res, timeout);
//   });

// test.describe.parallel('visual regression testing', () => {
//   Object.values(data.stories).forEach((story) => {
//     test(`snapshot test ${story.title}: ${story.name}`, async ({ page }) => {
//       await page.goto(`file://${storybookDir}/iframe.html?id=${story.id}`);
//       await sleep();

//       // dismiss要素が存在するならスキップ
//       const dismiss = page.locator(`data-test-id=${DISMISS_ID}`);
//       if ((await dismiss.count()) > 0) return;

//       // click要素が存在するならクリック
//       const button = page.locator(`data-test-id=${CLICK_ID}`);
//       if ((await button.count()) > 0) await button.click();

//       const path = `vrt/playwright-actual/${story.title}/${story.id}.png`;

//       expect(
//         await page.screenshot({ fullPage: true, animations: 'disabled', path }),
//       ).toMatchSnapshot([`./${story.title}/${story.id}.png`]);
//     });
//   });
// });
