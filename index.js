const exec = require('util').promisify(require('child_process').exec);

const v_execute = async (command) => {
  try {
    return await exec(command);
  } catch (error) {
    return false;
  }
};

module.exports = v_execute;

