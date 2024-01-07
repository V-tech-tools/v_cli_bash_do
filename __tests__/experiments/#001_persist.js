const { hof_v_cp } = require('../..')

// Create a higher-order function for the specific command path
const { runCmd } = hof_v_cp()

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
    runCmd('exit')
    setTimeout(() => {
      rl.close()
    }, 50)
    return
  }

  runCmd(input)

  rl.prompt()
}).on('close', () => {
  console.log('Exiting CLI.')
  process.exit(0)
})
