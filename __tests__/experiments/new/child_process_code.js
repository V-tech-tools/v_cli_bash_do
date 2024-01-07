const { exec } = require('child_process')
process.stdin.setEncoding('utf8') // Set encoding to UTF-8

// Listen for commands from the parent process
process.stdin.on('data', (data) => {
  const command = data.trim() // Remove trailing newline character

  // Process the command
  if (command === 'exit') {
    console.log('Exiting Child Process.')
    process.exit(0) // Exit the child process
  } else {
    // Execute the command (for demonstration purposes)
    // console.log(`Executing command: ${command}`)
    // You can handle and execute different commands as needed
    // process.stdout.write(`Command executed: ${command}\n`)

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
