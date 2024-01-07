const { spawn } = require('child_process')
import path from 'path'

/**
 * Executes a command using a child process and returns an object with the child process, a function to send commands to the child process, and a function to run a command.
 * @param {string} [cmdPath=base_cp_code] - The path of the command to be executed.
 * @returns {Object} - An object containing the child process, a function to send commands, and a function to run a command.
 */
export default function hof_v_cp(cmdPath = './cp.code.js') {
  const child = spawn('node', [path.join(__dirname, cmdPath)], {
    stdio: 'pipe' // Use pipe for stdin, stdout, stderr
  })

  child.stdout.on('data', (data) => {
    console.log(`CP_OUT: ${data}`)
  })

  child.stderr.on('data', (data) => {
    console.error(`CP_ERROR: ${data}`)
  })

  // Function to send a command to the child process
  const sendCommand = (command) => child.stdin.write(command + '\n')
  const runCmd = (cmd) => sendCommand(cmd)

  return {
    child,
    sendCommand,
    runCmd
  }
}

