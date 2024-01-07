# 🌀 **v_execute(** <\_command\_> **)**

> Node Module that only requires a single function call to execute some bash/shell code in a child_process

## ⏩ Installing\_\_

    npm i v_execute --save

## 💥 How to use\_\_

Well just load it as a constant...and have fun...

### Common JS

```js
  const { v_execute, hof_v_cp } = require('./v_execute')
  import { v_execute, hof_v_cp } from 'v_execute'

  // Simple listing
  console.log( await v_execute("ls") ) //-> { stdout, stderr }

  // Check git status
  console.log( await v_execute("git status") )
```

### ES Modules

```js
  import { v_execute, hof_v_cp } from 'v_execute'
  
  // Simple listing
  console.log( await v_execute("ls") ) //-> { stdout, stderr }

  // Check git status
  console.log( await v_execute("git status") )
  
  // Create a child_process
  const cp = hof_v_cp()

  cp.runCmd("ls")
  cp.sendCommand("ls")

  console.log(cp.child) //-> child_process instance
```

---

### 👻 Author: **-<[\_.⟁.\_]>-**

### ⏰ CreatedTime: 07.01.2023 @ 15:44
