const v_execute = require('../v_execute');

test('ls in this folder', async () => {
  expect(await v_execute("ls ./__tests__")).toStrictEqual({ stdout: 'git_.tests.js\n', stderr: '' });
});

test('empty exec command', async () => {
  expect(await v_execute()).toStrictEqual(false);
});

const resGitStatus = {
  stderr : "",
  stdout: "On branch main\nYour branch is up to date with 'origin/main'.\n\nnothing to commit, working tree clean\n"
};

test('git status', async () => {
  expect(await v_execute("git status")).toStrictEqual(resGitStatus);
});
