"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkValidData = void 0;

var checkValidData = function checkValidData(email, password) {
  var isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  var isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password ID is not valid";
  return null;
};

exports.checkValidData = checkValidData;