const { exec } = require('child_process')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
})

rl.prompt()

rl.on('line', (input) => {
  input = input.trim()

  if (input === 'exit') {
    rl.close()
    return
  }

  exec(input, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error}`)
      return
    }

    if (stdout) {
      console.log(`stdout: ${stdout}`)
    }

    if (stderr) {
      console.error(`stderr: ${stderr}`)
    }

    rl.prompt()
  })
}).on('close', () => {
  console.log('Exiting CLI.')
  process.exit(0)
})
