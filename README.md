# 🌀 V_CLI :: **bashDo(** <\_command\_> **)**
> **[.v.]** *Node Module* that only requires a single function call to execute some bash/shell code in a child_process

#
## ⏩ How To Install:
Add this repo git URL into dependencies in your projects package.json.  

	...
	"dependencies": {
		"v_cli_bash_do":"https://github.com/V-tech-tools/v_cli_bash_do.git"  
	}, 
	...

## 💥 How to use:
Well just load it as a constant...and have fun... 

	const bashDo = require('./v_cli_bash_do');

	// Simple listing
	bashDo("ls");

	// Check git status
	bashDo("git status");

	...



### 👻 Author: **-<[\_.⟁.\_]>-**   
### ⏰ CreatedTime: 11.08.2021 @ 21:51