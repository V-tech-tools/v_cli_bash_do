/*jshint esversion: 6 */
const { exec } = require('child_process');
const vdebug = () => {
  this._value = true;

  this.value = () => {
    return this.get();
  };
  this.get = () => {
    return (typeof this._value !== 'undefined') ? this._value : null;
  };

  return this.value();
};

async function logMessage  (msg) {
  if (vdebug()) {
    console.log(msg);
    return vdebug();
  }
  return false;
};

// This is the actual function that will be called to execute the command
async function bashDo(inputCommand = '', cb = 'undefined'){
    exec(inputCommand, (err, stdout, stderr) => {
      if (err) {
        logMessage(err);
        return err;
      } else {
        var response =  logMessage({ stdout, stderr });
        
        (typeof cb === 'function') ? cb(response) : "" ;
        var helper2 =  response;
      }
    });
  };

module.exports = bashDo;
