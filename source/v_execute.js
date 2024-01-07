const exec = require('util').promisify(require('child_process').exec)

export default async function v_execute(command) {
  try {
    return await exec(command)
  } catch (error) {
    return false
  }
}

