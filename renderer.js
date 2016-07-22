// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var pad = require("one-time-pad");
var rsg = require('string-random');
window.onload = function() {
  randomize();
  var messageInput = document.getElementById("message");
  var keyInput = document.getElementById("key");
  var output = document.getElementById("output");
  messageInput.onkeyup = function(e) {
    if (document.getElementsByClassName("btn-active")[0].id === "btn-encrypt") {
      var messageInputValue = pad.encrypt(e.srcElement.value, keyInput.value);
      output.innerHTML = messageInputValue;
    } else {
      var messageInputValue = pad.decrypt(e.srcElement.value, keyInput.value);
      output.innerHTML = messageInputValue;
    }
  };
  keyInput.onkeyup = function(e) {
    if (document.getElementsByClassName("btn-active")[0].id === "btn-encrypt") {
      var messageInputValue = pad.encrypt(e.srcElement.value, keyInput.value);
      output.innerHTML = messageInputValue;
    } else {
      var messageInputValue = pad.decrypt(e.srcElement.value, keyInput.value);
      output.innerHTML = messageInputValue;
    }
  };
};

exports.encryptInput = function() {
  var messageInputValue = pad.encrypt(document.getElementById("message").value, document.getElementById("key").value);
  document.getElementById("output").innerHTML = messageInputValue;
}

exports.decryptInput = function() {
  var messageInputValue = pad.decrypt(document.getElementById("message").value, document.getElementById("key").value);
  document.getElementById("output").innerHTML = messageInputValue;
}

exports.randomize = function() {
  if (document.getElementById("message").value.length > 0) {
    document.getElementById("key").value = rsg(document.getElementById("message").value.length, {numbers: false}).toUpperCase();
    if (document.getElementsByClassName("btn-active")[0].id === "btn-encrypt") {
      console.log("Encrypting")
      var messageInputValue = pad.encrypt(document.getElementById("message").value, document.getElementById("key").value);
      document.getElementById("output").innerHTML = messageInputValue;
    } else {
      var messageInputValue = pad.decrypt(document.getElementById("message").value, document.getElementById("key").value);
      document.getElementById("output").innerHTML = messageInputValue;
    }
  } else {
    document.getElementById("key").value = rsg(40, {numbers: false}).toUpperCase();
  }

}