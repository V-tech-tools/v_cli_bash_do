const readline = require('readline')
const v_execute = require('../..')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function processInput(input) {
  // Do something with the input
  console.log(`Received input: ${input}`)
  console.log(await v_execute(input))
}

function startLoop() {
  rl.question('Enter a cmd: ', async (input) => {
    await processInput(input)
    startLoop()
  })
}

startLoop()
