"use strict";
// Getting the History Value
function getHistory() {
  return document.querySelector("#history-value").innerText;
}
// Printing the History Value
function printHistory(num) {
  document.querySelector("#history-value").innerText = num;
}
// Getting the Output Value
function getOutput() {
  return document.querySelector("#output-value").innerText;
}
// Printing the Output Value
function printOutput(num) {
  if (num == "") {
    document.querySelector("#output-value").innerText = num;
  } else {
    document.querySelector("#output-value").innerText = getFormatedNumber(num);
  }
}
// Print the Numbers with Format ( , )
function getFormatedNumber(num) {
  if (num == "-") {
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}
function reverseNumber(num) {
  return Number(num.replace(/,/g, ""));
}
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "backspace") {
      let output = reverseNumber(getOutput()).toString();
      if (output) {
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    } else {
      var output = getOutput();
      var history = getHistory();
      // console.log(output);
      // console.log(history);
      if (output == "" && history != "") {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }
      if (output != "" || history != "") {
        output = output == "" ? output : reverseNumber(output);
        history = history + output;
        // console.log(history);
        if (this.id == "=") {
          var result = eval(history);
          // console.log(result);
          printOutput(result);
          printHistory("");
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}
var number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    let output = reverseNumber(getOutput());
    if (output != NaN) {
      output = output + this.id;
      printOutput(output);
    }
  });
}
