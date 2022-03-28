const v_execute = require('..');

test('ls in this folder', async () => {
  expect(await v_execute(`ls ./__tests__`)).toEqual({ stdout: 'git_.tests.js\n', stderr: '' });
});

test('empty exec command', async () => {
  expect(await v_execute()).toEqual(false);
});

test('echo something', async () => {
  expect(await v_execute(`echo "YEA"`)).toEqual({ stdout: '"YEA"\r\n', stderr: '' });
});

test('echo something', async () => {
  expect(await v_execute(`printenv USERDOMAIN`)).toEqual({ stdout: process.env.COMPUTERNAME + '\n', stderr: '' });
});


const resGitStatus = {
  stderr: "",
  stdout: "On branch DEV/fixes001\nnothing to commit, working tree clean\n"
};

test('git status', async () => {
  expect(await v_execute("git status")).toStrictEqual(resGitStatus);
});

