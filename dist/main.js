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

/***/ "./src/changeDirection.js":
/*!********************************!*\
  !*** ./src/changeDirection.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"move\": () => (/* binding */ move),\n/* harmony export */   \"moveLeft\": () => (/* binding */ moveLeft),\n/* harmony export */   \"moveRight\": () => (/* binding */ moveRight)\n/* harmony export */ });\n/* harmony import */ var _gameLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLogic */ \"./src/gameLogic.js\");\n/* harmony import */ var _gamePieceIdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamePieceIdx */ \"./src/gamePieceIdx.js\");\n\r\n\r\n\r\nconst move = (e) => {\r\n    if(e.key === \"ArrowRight\"){\r\n        moveRight();\r\n    } else if (e.key === \"ArrowLeft\"){\r\n        moveLeft();\r\n    }\r\n}\r\n\r\nconst moveRight = () => {\r\n    console.log('moving right');\r\n}\r\n\r\nconst moveLeft = () => {\r\n    console.log('moving left');\r\n}\r\n\r\n\n\n//# sourceURL=webpack://javascript-tetris/./src/changeDirection.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameBoardArr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoardArr */ \"./src/gameBoardArr.js\");\n\r\n\r\nfunction gameBoard(){\r\n\r\n    const innerBoard = document.createElement('div');\r\n        innerBoard.classList.add('game-board');\r\n\r\n    _gameBoardArr__WEBPACK_IMPORTED_MODULE_0__.default.forEach((boardSquare, idx)=>{\r\n        const squareDiv = document.createElement('div');\r\n            squareDiv.dataset.index = idx;\r\n            squareDiv.classList.add('board-square-div');\r\n        innerBoard.appendChild(squareDiv);\r\n    });\r\n\r\n    const outerBoard = document.createElement('div');\r\n        outerBoard.classList.add('outer-board');\r\n\r\n        outerBoard.appendChild(innerBoard);\r\n    \r\n    return outerBoard;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoard);\n\n//# sourceURL=webpack://javascript-tetris/./src/gameBoard.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameBoardArr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoardArr */ \"./src/gameBoardArr.js\");\n/* harmony import */ var _gamePieceL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamePieceL */ \"./src/gamePieceL.js\");\n/* harmony import */ var _gamePieceIdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gamePieceIdx */ \"./src/gamePieceIdx.js\");\n\r\n\r\n\r\n\r\nfunction changeSquare(){\r\n    const squaresDivArr = Array.from(document.querySelectorAll('.board-square-div'));\r\n    \r\n    _gamePieceIdx__WEBPACK_IMPORTED_MODULE_2__.currentPieceIdx.I.forEach((idx)=>{\r\n        const boardIdx = parseInt(squaresDivArr[idx].dataset.index);\r\n        squaresDivArr[idx].style.backgroundColor = 'red';\r\n        squaresDivArr[idx].classList.add('taken');\r\n        _gameBoardArr__WEBPACK_IMPORTED_MODULE_0__.default[boardIdx] = 'x';\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeSquare);\n\n//# sourceURL=webpack://javascript-tetris/./src/gameLogic.js?");

/***/ }),

/***/ "./src/gamePiece.js":
/*!**************************!*\
  !*** ./src/gamePiece.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass gamePiece{\r\n    constructor(shape){\r\n        this.shape = shape;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gamePiece);\n\n//# sourceURL=webpack://javascript-tetris/./src/gamePiece.js?");

/***/ }),

/***/ "./src/gamePieceIdx.js":
/*!*****************************!*\
  !*** ./src/gamePieceIdx.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"currentPieceIdx\": () => (/* binding */ currentPieceIdx),\n/* harmony export */   \"previousPieceIdx\": () => (/* binding */ previousPieceIdx)\n/* harmony export */ });\nlet currentPieceIdx = {\r\n    \"I\": [1, 11, 21, 31],\r\n    \"L\": [1, 11, 21, 22],\r\n    \"reverseL\": [],\r\n    \"O\": [],\r\n    \"T\": [],\r\n    \"Z\": [],\r\n    \"reverseZ\": []\r\n};\r\nlet previousPieceIdx = [];\r\n\r\n\n\n//# sourceURL=webpack://javascript-tetris/./src/gamePieceIdx.js?");

/***/ }),

/***/ "./src/gamePieceL.js":
/*!***************************!*\
  !*** ./src/gamePieceL.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gamePiece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamePiece */ \"./src/gamePiece.js\");\n\r\n\r\nconst gamePieceL = new _gamePiece__WEBPACK_IMPORTED_MODULE_0__.default('L');\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gamePieceL);\n\n//# sourceURL=webpack://javascript-tetris/./src/gamePieceL.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score */ \"./src/score.js\");\n/* harmony import */ var _gameLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameLogic */ \"./src/gameLogic.js\");\n/* harmony import */ var _startBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startBtn */ \"./src/startBtn.js\");\n/* harmony import */ var _changeDirection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./changeDirection */ \"./src/changeDirection.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst contentDiv = document.querySelector('#content');\r\nconst title = document.createElement('h1');\r\n    title.innerText = 'JavaScript Tetris';\r\n    title.classList.add('title');\r\n\r\nconst footer = document.createElement('footer');\r\n    footer.innerText = 'Michael Hamilton 2021';\r\n    footer.classList.add('footer');\r\n\r\ncontentDiv.appendChild(title);\r\ncontentDiv.appendChild((0,_startBtn__WEBPACK_IMPORTED_MODULE_3__.default)());\r\ncontentDiv.appendChild((0,_score__WEBPACK_IMPORTED_MODULE_1__.default)());\r\ncontentDiv.appendChild((0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.default)());\r\ncontentDiv.appendChild(footer);\r\n\r\ndocument.addEventListener('keydown', _changeDirection__WEBPACK_IMPORTED_MODULE_4__.move);\n\n//# sourceURL=webpack://javascript-tetris/./src/index.js?");

/***/ }),

/***/ "./src/makeBlank.js":
/*!**************************!*\
  !*** ./src/makeBlank.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameBoardArr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoardArr */ \"./src/gameBoardArr.js\");\n\r\n\r\nconst makeBlank = (idx) => {\r\n    const squareArray = Array.from(document.querySelectorAll('.board-square-div'));\r\n    squareArray.forEach((div)=>{\r\n        if(parseInt(div.dataset.index) === idx){\r\n            div.style.backgroundColor = '#fff';\r\n            div.classList.remove('taken');\r\n            const boardIdx = parseInt(div.dataset.index);\r\n            _gameBoardArr__WEBPACK_IMPORTED_MODULE_0__.default[boardIdx] = '';\r\n        }\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeBlank);\n\n//# sourceURL=webpack://javascript-tetris/./src/makeBlank.js?");

/***/ }),

/***/ "./src/pieceFallingInterval.js":
/*!*************************************!*\
  !*** ./src/pieceFallingInterval.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initiatePieceFallingInterval\": () => (/* binding */ initiatePieceFallingInterval),\n/* harmony export */   \"startGame\": () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var _gameLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLogic */ \"./src/gameLogic.js\");\n/* harmony import */ var _gameBoardArr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoardArr */ \"./src/gameBoardArr.js\");\n/* harmony import */ var _gamePieceIdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gamePieceIdx */ \"./src/gamePieceIdx.js\");\n/* harmony import */ var _makeBlank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./makeBlank */ \"./src/makeBlank.js\");\n/* harmony import */ var _scoreTracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scoreTracker */ \"./src/scoreTracker.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet pieceFallingInterval;\r\n\r\nlet currentPiece = _gamePieceIdx__WEBPACK_IMPORTED_MODULE_2__.currentPieceIdx.I;\r\n\r\nconst pieceFalling = () => {\r\n    if(currentPiece[3]+10 < _gameBoardArr__WEBPACK_IMPORTED_MODULE_1__.default.length){\r\n        (0,_makeBlank__WEBPACK_IMPORTED_MODULE_3__.default)(currentPiece[0]);\r\n        for(let i = 0; i < currentPiece.length; i++){\r\n            currentPiece[i] = currentPiece[i]+10;\r\n        }\r\n        (0,_gameLogic__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n    } else {\r\n        const scoreBoard = document.querySelector('.score');\r\n        scoreBoard.innerText = `Total Score: 100`;\r\n        console.log('end reached');\r\n        // currentPiece = currentPieceIdx[\"L\"];\r\n        clearInterval(pieceFallingInterval);\r\n    } \r\n}\r\n\r\nconst startGame = () => {\r\n    ;(0,_gameLogic__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n    initiatePieceFallingInterval();\r\n};\r\n\r\nconst initiatePieceFallingInterval = () => pieceFallingInterval = setInterval(pieceFalling, 1000);\r\n\r\n\r\n\n\n//# sourceURL=webpack://javascript-tetris/./src/pieceFallingInterval.js?");

/***/ }),

/***/ "./src/score.js":
/*!**********************!*\
  !*** ./src/score.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _scoreTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scoreTracker */ \"./src/scoreTracker.js\");\n\r\n\r\nfunction score(){\r\n    const scoreBoard = document.createElement('h3');\r\n        scoreBoard.classList.add('score');\r\n        scoreBoard.innerText = `Total Score: ${_scoreTracker__WEBPACK_IMPORTED_MODULE_0__.scoreNum}`;\r\n    \r\n    return scoreBoard;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (score);\n\n//# sourceURL=webpack://javascript-tetris/./src/score.js?");

/***/ }),

/***/ "./src/scoreTracker.js":
/*!*****************************!*\
  !*** ./src/scoreTracker.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scoreNum\": () => (/* binding */ scoreNum)\n/* harmony export */ });\nlet scoreNum = 0;\r\n\r\n\n\n//# sourceURL=webpack://javascript-tetris/./src/scoreTracker.js?");

/***/ }),

/***/ "./src/startBtn.js":
/*!*************************!*\
  !*** ./src/startBtn.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLogic */ \"./src/gameLogic.js\");\n/* harmony import */ var _pieceFallingInterval__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pieceFallingInterval */ \"./src/pieceFallingInterval.js\");\n\r\n\r\n\r\nconst startBtn = () =>{\r\n    const start = document.createElement('button');\r\n        start.innerText = 'Start';\r\n        start.classList.add('start-btn');\r\n        start.addEventListener('click', _pieceFallingInterval__WEBPACK_IMPORTED_MODULE_1__.startGame);\r\n    \r\n    return start;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startBtn);\n\n//# sourceURL=webpack://javascript-tetris/./src/startBtn.js?");

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