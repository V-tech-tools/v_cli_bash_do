/*jshint esversion: 6 */
const { exec } = require('child_process');
const debug = () => {
  this._value = false;

  this.value = () => {
    return this.get();
  };
  this.get = () => {
    return (typeof this._value !== 'undefined') ? this._value : null;
  };

  return this.value();
};

logMessage = (msg) =>{
  if (debug.value()) {
    console.log(msg);
    return debug.value();
  }
  return false;
};

// This is the actual function that will be called to execute the command
const bashDo=(inputCommand = '', cb = 'undefined')=>{
    exec(inputCommand, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return err;
      } else {
        //console.log({ stdout, stderr });
        var response = { stdout, stderr };
        
        (typeof cb === 'function') ? cb(response) : "" ;
        return response;
      }
    });
  };

module.exports = bashDo;
