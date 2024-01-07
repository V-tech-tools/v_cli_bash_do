import { exec } from 'child_process'
import { isExitAlias } from './constants'

process.stdin.setEncoding('utf8')

process.stdin.on('data', (data) => {
  /**
   * Represents the command to be executed.
   * @type {string}
   */
  const command = data.trim()

  // Process the command
  if (isExitAlias(command)) {
    console.log('Exiting Child Process.')
    process.exit(0)
  } else {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error Executing Command: ${error}`)
        return
      }

      if (stdout) {
        console.log(`${stdout}`)
        // console.log(`stdout: ${stdout}`)
      }

      if (stderr) {
        console.error(`${stderr}`)
        // console.error(`stderr: ${stderr}`)
      }
    })
  }
})

