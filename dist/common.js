(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = __webpack_require__(/*! ./user */ "./src/constants/user.js");

Object.keys(_user).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _user[key];
    }
  });
});

var _post = __webpack_require__(/*! ./post */ "./src/constants/post.js");

Object.keys(_post).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _post[key];
    }
  });
});

/***/ }),

/***/ "./src/constants/post.js":
/*!*******************************!*\
  !*** ./src/constants/post.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_POSTS = exports.SET_POSTS = 'SET_POSTS';
var SET_POST_FORM_IS_OPENED = exports.SET_POST_FORM_IS_OPENED = 'SET_POST_FORM_IS_OPENED';

/***/ }),

/***/ "./src/constants/user.js":
/*!*******************************!*\
  !*** ./src/constants/user.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_IS_OPENED = exports.SET_IS_OPENED = 'MODIFY_IS_OPENED';
var SET_LOGIN_INFO = exports.SET_LOGIN_INFO = 'SET_LOGIN_INFO';

/***/ })

}]);