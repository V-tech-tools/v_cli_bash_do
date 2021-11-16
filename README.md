# 🌀 **v_execute(** <\_command\_> **)**

> Node Module that only requires a single function call to execute some bash/shell code in a child_process

## ⏩ How To Install__

Add this repo git URL into dependencies in your projects package.json.  

...
    "dependencies": {
      "v_execute":"https://github.com/V-tech-tools/v_execute.git"  
    },
...

## 💥 How to use__

Well just load it as a constant...and have fun...

...
    const v_execute = require('./v_execute');

      // Simple listing
      v_execute("ls");

      // Check git status
      v_execute("git status");
...

---

### 👻 Author: **-<[\_.⟁.\_]>-**

### ⏰ CreatedTime: 11.08.2021 @ 21:51
