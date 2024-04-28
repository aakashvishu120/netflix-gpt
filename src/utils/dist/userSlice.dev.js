"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.removeUser = exports.addUser = void 0;

var _toolkit = require("@reduxjs/toolkit");

var userSlice = (0, _toolkit.createSlice)({
  name: 'user',
  initialState: null,
  reducers: {
    addUser: function addUser(state, action) {
      return action.payload;
    },
    removeUser: function removeUser(state, action) {
      return null;
    }
  }
});
var _userSlice$actions = userSlice.actions,
    addUser = _userSlice$actions.addUser,
    removeUser = _userSlice$actions.removeUser;
exports.removeUser = removeUser;
exports.addUser = addUser;
var _default = userSlice.reducer;
exports["default"] = _default;