const vBash = require('../v_bash');

test('ls in this folder', async () => {
  expect(await vBash("ls ./__tests__")).toStrictEqual({ stdout: 'git_.tests.js\n', stderr: '' });
});

test('empty exec command', async () => {
  expect(await vBash()).toStrictEqual(false);
});

test('git status', async () => {
  expect(await vBash("git status")).toStrictEqual({ stdout: 'git_.tests.js\n', stderr: '' });
});
