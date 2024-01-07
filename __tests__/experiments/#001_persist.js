const hof_cp_cli = require('./new/hof_cp_cli')

// Create a higher-order function for the specific command path
const { sendCommand } = hof_cp_cli()

// Call the higher-order function to spawn the child process
// runChildProcess()

// Example: Send multiple commands sequentially
// sendCommand('PWD')
// sendCommand('ls -l')
// sendCommand('exit') // Terminate the child process after executing commands

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
})

rl.prompt()

const exitAliases = ['exit', 'X', 'x', 'quit', 'terminate', '.exit']

rl.on('line', (input) => {
  input = input.trim()

  if (exitAliases.indexOf(input) !== -1) {
    sendCommand('exit')
    setTimeout(() => {
      rl.close()
    }, 50)
    return
  }

  sendCommand(input)

  rl.prompt()
}).on('close', () => {
  console.log('Exiting CLI.')
  process.exit(0)
})
