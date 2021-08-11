/*jshint esversion: 6 */
const bashDo = require('./v_cli_bash_do');

bashDo("ls");

bashDo("ls -al");

bashDo("git status");

bashDo("PWD");


console.log("\n+--<[ If None STDOUT return STDERR then all went well ]>-----------+\n");