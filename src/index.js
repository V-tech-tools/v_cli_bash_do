
const util = require('util');
const exec = util.promisify(require('child_process').exec);

vBash = async (command) => {
  try {
    const { stdout, stderr } = await exec(command);
    // console.log('stdout:', stdout);
    // console.error('stderr:', stderr);
    return { stdout, stderr };
  } catch (error) {
    //console.error(error);
    return false;
  }
};


module.exports = vBash;
