/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameBoardArr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoardArr */ \"./src/gameBoardArr.js\");\n/* harmony import */ var _gameLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameLogic */ \"./src/gameLogic.js\");\n\r\n\r\n\r\nfunction gameBoard(){\r\n\r\n    const innerBoard = document.createElement('div');\r\n        innerBoard.classList.add('game-board');\r\n\r\n    _gameBoardArr__WEBPACK_IMPORTED_MODULE_0__.default.forEach((boardSquare, idx)=>{\r\n        const squareDiv = document.createElement('div');\r\n            squareDiv.dataset.index = idx;\r\n            squareDiv.classList.add('board-square-div');\r\n            squareDiv.addEventListener('click', _gameLogic__WEBPACK_IMPORTED_MODULE_1__.default);\r\n        innerBoard.appendChild(squareDiv);\r\n    });\r\n\r\n    const outerBoard = document.createElement('div');\r\n        outerBoard.classList.add('outer-board');\r\n\r\n        outerBoard.appendChild(innerBoard);\r\n    \r\n    return outerBoard;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoard);\n\n//# sourceURL=webpack://javascript-tetris/./src/gameBoard.js?");

/***/ }),

/***/ "./src/gameBoardArr.js":
/*!*****************************!*\
  !*** ./src/gameBoardArr.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet boardArr = [\r\n    [],[],[],[],[],[],[],[],[],[],\r\n    [],[],[],[],[],[],[],[],[],[],\r\n    [],[],[],[],[],[],[],[],[],[],\r\n    [],[],[],[],[],[],[],[],[],[],\r\n    [],[],[],[],[],[],[],[],[],[],\r\n    [],[],[],[],[],[],[],[],[],[],\r\n    [],[],[],[],[],[],[],[],[],[],\r\n    [],[],[],[],[],[],[],[],[],[],\r\n    [],[],[],[],[],[],[],[],[],[],\r\n    [],[],[],[],[],[],[],[],[],[],\r\n    [],[],[],[],[],[],[],[],[],[],\r\n    [],[],[],[],[],[],[],[],[],[],\r\n    [],[],[],[],[],[],[],[],[],[],\r\n    [],[],[],[],[],[],[],[],[],[],\r\n    [],[],[],[],[],[],[],[],[],[],\r\n    [],[],[],[],[],[],[],[],[],[],\r\n    [],[],[],[],[],[],[],[],[],[],\r\n    [],[],[],[],[],[],[],[],[],[],\r\n    [],[],[],[],[],[],[],[],[],[],\r\n    [],[],[],[],[],[],[],[],[],[],\r\n];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (boardArr);\n\n//# sourceURL=webpack://javascript-tetris/./src/gameBoardArr.js?");

/***/ }),

/***/ "./src/gameLogic.js":
/*!**************************!*\
  !*** ./src/gameLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameBoardArr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoardArr */ \"./src/gameBoardArr.js\");\n\r\n\r\nfunction clickBox(e){\r\n    e.target.style.backgroundColor = 'red';\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clickBox);\n\n//# sourceURL=webpack://javascript-tetris/./src/gameLogic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score */ \"./src/score.js\");\n\r\n\r\n\r\nconst contentDiv = document.querySelector('#content');\r\nconst title = document.createElement('h1');\r\n    title.innerText = 'JavaScript Tetris';\r\n    title.classList.add('title');\r\n\r\nconst footer = document.createElement('footer');\r\n    footer.innerText = 'Michael Hamilton 2021';\r\n    footer.classList.add('footer');\r\n\r\ncontentDiv.appendChild(title);\r\ncontentDiv.appendChild((0,_score__WEBPACK_IMPORTED_MODULE_1__.default)());\r\ncontentDiv.appendChild((0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.default)());\r\n\r\ncontentDiv.appendChild(footer);\n\n//# sourceURL=webpack://javascript-tetris/./src/index.js?");

/***/ }),

/***/ "./src/score.js":
/*!**********************!*\
  !*** ./src/score.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _scoreTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scoreTracker */ \"./src/scoreTracker.js\");\n\r\n\r\nfunction score(){\r\n    const scoreBoard = document.createElement('h3');\r\n        scoreBoard.classList.add('score');\r\n        scoreBoard.innerText = `Total Score: ${_scoreTracker__WEBPACK_IMPORTED_MODULE_0__.default}`;\r\n    \r\n    return scoreBoard;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (score);\n\n//# sourceURL=webpack://javascript-tetris/./src/score.js?");

/***/ }),

/***/ "./src/scoreTracker.js":
/*!*****************************!*\
  !*** ./src/scoreTracker.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet scoreNum = 0;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scoreNum);\n\n//# sourceURL=webpack://javascript-tetris/./src/scoreTracker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;