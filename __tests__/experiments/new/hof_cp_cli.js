const { spawn } = require('child_process')
const path = require('path')

function hof_cp_cli(commandPath = path.resolve(__dirname, 'child_process_code.js')) {
  // Spawn the child process
  const child = spawn('node', [commandPath], {
    stdio: 'pipe' // Use pipe for stdin, stdout, stderr
  })

  // Handle child process events
  child.stdout.on('data', (data) => {
    console.log(`CP_OUT: ${data}`) // Child process says something on stdout
  })

  child.stderr.on('data', (data) => {
    console.error(`CP_ERROR: ${data}`) // Child process error
  })

  return {
    // Function to send a command to the child process
    sendCommand: (command) => child.stdin.write(command + '\n'), // Send the command with a newline
    runCmd: (cmd) => sendCommand(cmd)
  }
}

module.exports = hof_cp_cli
