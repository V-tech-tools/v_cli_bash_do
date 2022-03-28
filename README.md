# 🌀 **v_execute(** <\_command\_> **)**

> Node Module that only requires a single function call to execute some bash/shell code in a child_process

## ⏩ Installing\_\_

    npm i v_execute --save

## 💥 How to use\_\_

Well just load it as a constant...and have fun...

      const v_execute = require('./v_execute');

      // Simple listing
      console.log( await v_execute("ls") ); //-> { stdout, stderr }

      // Check git status
      console.log( await v_execute("git status") );

---

### 👻 Author: **-<[\_.⟁.\_]>-**

### ⏰ CreatedTime: 11.08.2021 @ 21:51
