const { hof_v_cp } = require('../..')

describe('hof_v_cp', () => {
  let cp

  beforeEach(() => {
    cp = hof_v_cp()
    // console.log('BeforeEach | CP: ', cp)
  })

  afterEach(() => {
    cp.child.kill()
  })

  test('should execute a command and capture stdout', (done) => {
    const expectedOutput = 'Hello, World!'
    cp.child.stdout.on('data', (data) => {
      expect(data.toString().trim()).toBe(expectedOutput)
      done()
    })
    cp.runCmd('echo ' + expectedOutput)
  })

  test('should execute a command and capture stderr', (done) => {
    const expectedError = 'Something went wrong!'
    cp.child.stderr.on('data', (data) => {
      expect(data.toString().trim()).toBe(expectedError)
      done()
    })
    cp.runCmd('echo ' + expectedError + ' >&2')
  })

  test('should execute a custom command', (done) => {
    const expectedOutput = 'Custom command executed!'
    cp.child.stdout.on('data', (data) => {
      expect(data.toString().trim()).toBe(expectedOutput)
      done()
    })
    cp.runCmd('echo ' + expectedOutput)
  })
})
