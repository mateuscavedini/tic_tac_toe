/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addToken.ts":
/*!*************************!*\
  !*** ./src/addToken.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToken\": () => (/* binding */ addToken)\n/* harmony export */ });\nconst addToken = (square, token) => {\r\n    square.textContent = token;\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWRkVG9rZW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVPLE1BQU0sUUFBUSxHQUFHLENBQUMsTUFBc0IsRUFBRSxLQUFhLEVBQVEsRUFBRTtJQUNwRSxNQUFNLENBQUMsV0FBVyxHQUFHLEtBQUs7QUFDOUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpY190YWNfdG9lLy4vc3JjL2FkZFRva2VuLnRzP2E0NzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9rZW5zIH0gZnJvbSBcIi4vdHlwZXMvVG9rZW5zXCJcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRUb2tlbiA9IChzcXVhcmU6IEhUTUxEaXZFbGVtZW50LCB0b2tlbjogVG9rZW5zKTogdm9pZCA9PiB7XHJcbiAgICBzcXVhcmUudGV4dENvbnRlbnQgPSB0b2tlblxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/addToken.ts\n");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _begginingHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./begginingHandler */ \"./src/begginingHandler.ts\");\n/* harmony import */ var _squareHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./squareHandler */ \"./src/squareHandler.ts\");\n\r\n\r\nconst disabledElements = document.querySelectorAll(\".disabled\");\r\nconst popup = document.querySelector(\"#popup\");\r\nconst squares = document.querySelectorAll(\".square\");\r\nconst selectX = document.getElementById(\"playerX\");\r\nconst selectO = document.getElementById(\"playerO\");\r\nselectX.addEventListener(\"click\", e => (0,_begginingHandler__WEBPACK_IMPORTED_MODULE_0__.begginingHandler)(disabledElements, popup, e));\r\nselectO.addEventListener(\"click\", e => (0,_begginingHandler__WEBPACK_IMPORTED_MODULE_0__.begginingHandler)(disabledElements, popup, e));\r\nsquares.forEach(square => {\r\n    square.addEventListener(\"click\", e => (0,_squareHandler__WEBPACK_IMPORTED_MODULE_1__.squareHandler)(e));\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnRzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFxRDtBQUNOO0FBRS9DLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBK0I7QUFDN0YsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQW1CO0FBRWhFLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQStCO0FBRWxGLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFzQjtBQUN2RSxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBc0I7QUFFdkUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLG1FQUFnQixDQUFDLGdCQUFnQixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwRixPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsbUVBQWdCLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXBGLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDckIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLDZEQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0QsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGljX3RhY190b2UvLi9zcmMvYXBwLnRzPzA2NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmVnZ2luaW5nSGFuZGxlciB9IGZyb20gXCIuL2JlZ2dpbmluZ0hhbmRsZXJcIlxyXG5pbXBvcnQgeyBzcXVhcmVIYW5kbGVyIH0gZnJvbSBcIi4vc3F1YXJlSGFuZGxlclwiXHJcblxyXG5jb25zdCBkaXNhYmxlZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kaXNhYmxlZFwiKSBhcyBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PlxyXG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXBcIikgYXMgSFRNTERpdkVsZW1lbnRcclxuXHJcbmNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNxdWFyZVwiKSBhcyBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PlxyXG5cclxuY29uc3Qgc2VsZWN0WCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyWFwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudFxyXG5jb25zdCBzZWxlY3RPID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJPXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50XHJcblxyXG5zZWxlY3RYLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IGJlZ2dpbmluZ0hhbmRsZXIoZGlzYWJsZWRFbGVtZW50cywgcG9wdXAsIGUpKVxyXG5zZWxlY3RPLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IGJlZ2dpbmluZ0hhbmRsZXIoZGlzYWJsZWRFbGVtZW50cywgcG9wdXAsIGUpKVxyXG5cclxuc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XHJcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4gc3F1YXJlSGFuZGxlcihlKSlcclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/begginingHandler.ts":
/*!*********************************!*\
  !*** ./src/begginingHandler.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"begginingHandler\": () => (/* binding */ begginingHandler)\n/* harmony export */ });\n/* harmony import */ var _enableScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enableScreen */ \"./src/enableScreen.ts\");\n/* harmony import */ var _playerSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerSelector */ \"./src/playerSelector.ts\");\n\r\n\r\nconst begginingHandler = (disabledElements, popup, e) => {\r\n    const target = e.target;\r\n    (0,_enableScreen__WEBPACK_IMPORTED_MODULE_0__.enableScreen)(disabledElements, popup);\r\n    (0,_playerSelector__WEBPACK_IMPORTED_MODULE_1__.playerSelector)(target);\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmVnZ2luaW5nSGFuZGxlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFDSTtBQUUxQyxNQUFNLGdCQUFnQixHQUFHLENBQUMsZ0JBQTRDLEVBQUUsS0FBcUIsRUFBRSxDQUFRLEVBQVEsRUFBRTtJQUNwSCxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBMEI7SUFFM0MsMkRBQVksQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUM7SUFDckMsK0RBQWMsQ0FBQyxNQUFNLENBQUM7QUFDMUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpY190YWNfdG9lLy4vc3JjL2JlZ2dpbmluZ0hhbmRsZXIudHM/MjcxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbmFibGVTY3JlZW4gfSBmcm9tIFwiLi9lbmFibGVTY3JlZW5cIlxyXG5pbXBvcnQgeyBwbGF5ZXJTZWxlY3RvciB9IGZyb20gXCIuL3BsYXllclNlbGVjdG9yXCJcclxuXHJcbmV4cG9ydCBjb25zdCBiZWdnaW5pbmdIYW5kbGVyID0gKGRpc2FibGVkRWxlbWVudHM6IE5vZGVMaXN0T2Y8SFRNTERpdkVsZW1lbnQ+LCBwb3B1cDogSFRNTERpdkVsZW1lbnQsIGU6IEV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50XHJcblxyXG4gICAgZW5hYmxlU2NyZWVuKGRpc2FibGVkRWxlbWVudHMsIHBvcHVwKVxyXG4gICAgcGxheWVyU2VsZWN0b3IodGFyZ2V0KVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/begginingHandler.ts\n");

/***/ }),

/***/ "./src/checkSquare.ts":
/*!****************************!*\
  !*** ./src/checkSquare.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkSquare\": () => (/* binding */ checkSquare)\n/* harmony export */ });\nconst checkSquare = (target) => {\r\n    if (target.textContent === \"\") {\r\n        return true;\r\n    }\r\n    else {\r\n        return false;\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2hlY2tTcXVhcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU0sV0FBVyxHQUFHLENBQUMsTUFBc0IsRUFBVyxFQUFFO0lBQzNELElBQUksTUFBTSxDQUFDLFdBQVcsS0FBSyxFQUFFLEVBQUU7UUFDM0IsT0FBTyxJQUFJO0tBQ2Q7U0FBTTtRQUNILE9BQU8sS0FBSztLQUNmO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpY190YWNfdG9lLy4vc3JjL2NoZWNrU3F1YXJlLnRzPzhjNTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNoZWNrU3F1YXJlID0gKHRhcmdldDogSFRNTERpdkVsZW1lbnQpOiBib29sZWFuID0+IHtcclxuICAgIGlmICh0YXJnZXQudGV4dENvbnRlbnQgPT09IFwiXCIpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/checkSquare.ts\n");

/***/ }),

/***/ "./src/enableScreen.ts":
/*!*****************************!*\
  !*** ./src/enableScreen.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"enableScreen\": () => (/* binding */ enableScreen)\n/* harmony export */ });\n/* harmony import */ var _handleClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleClasses */ \"./src/handleClasses.ts\");\n/* harmony import */ var _removePopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removePopup */ \"./src/removePopup.ts\");\n\r\n\r\nconst enableScreen = (disabledElements, popup) => {\r\n    disabledElements.forEach(element => {\r\n        (0,_handleClasses__WEBPACK_IMPORTED_MODULE_0__.handleClasses)(element, \"disabled\", \"remove\");\r\n        (0,_handleClasses__WEBPACK_IMPORTED_MODULE_0__.handleClasses)(element, \"enabled\", \"add\");\r\n    });\r\n    (0,_removePopup__WEBPACK_IMPORTED_MODULE_1__.removePopup)(popup);\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW5hYmxlU2NyZWVuLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUNKO0FBRXBDLE1BQU0sWUFBWSxHQUFHLENBQUMsZ0JBQTRDLEVBQUUsS0FBcUIsRUFBUSxFQUFFO0lBQ3RHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUMvQiw2REFBYSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDO1FBQzVDLDZEQUFhLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUM7SUFDNUMsQ0FBQyxDQUFDO0lBRUYseURBQVcsQ0FBQyxLQUFLLENBQUM7QUFDdEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpY190YWNfdG9lLy4vc3JjL2VuYWJsZVNjcmVlbi50cz9kNWNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZUNsYXNzZXMgfSBmcm9tIFwiLi9oYW5kbGVDbGFzc2VzXCJcclxuaW1wb3J0IHsgcmVtb3ZlUG9wdXAgfSBmcm9tIFwiLi9yZW1vdmVQb3B1cFwiXHJcblxyXG5leHBvcnQgY29uc3QgZW5hYmxlU2NyZWVuID0gKGRpc2FibGVkRWxlbWVudHM6IE5vZGVMaXN0T2Y8SFRNTERpdkVsZW1lbnQ+LCBwb3B1cDogSFRNTERpdkVsZW1lbnQpOiB2b2lkID0+IHtcclxuICAgIGRpc2FibGVkRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBoYW5kbGVDbGFzc2VzKGVsZW1lbnQsIFwiZGlzYWJsZWRcIiwgXCJyZW1vdmVcIilcclxuICAgICAgICBoYW5kbGVDbGFzc2VzKGVsZW1lbnQsIFwiZW5hYmxlZFwiLCBcImFkZFwiKVxyXG4gICAgfSlcclxuXHJcbiAgICByZW1vdmVQb3B1cChwb3B1cClcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/enableScreen.ts\n");

/***/ }),

/***/ "./src/globals.ts":
/*!************************!*\
  !*** ./src/globals.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cpu\": () => (/* binding */ cpu),\n/* harmony export */   \"setTokens\": () => (/* binding */ setTokens),\n/* harmony export */   \"user\": () => (/* binding */ user)\n/* harmony export */ });\nlet user;\r\nlet cpu;\r\nconst setTokens = (token) => {\r\n    user = token;\r\n    if (user === \"X\") {\r\n        cpu = \"O\";\r\n    }\r\n    else {\r\n        cpu = \"X\";\r\n    }\r\n    console.log(`user: ${user} | cpu: ${cpu}`);\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2xvYmFscy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFTyxJQUFJLElBQVk7QUFDaEIsSUFBSSxHQUFXO0FBQ2YsTUFBTSxTQUFTLEdBQUcsQ0FBQyxLQUFhLEVBQVEsRUFBRTtJQUM3QyxJQUFJLEdBQUcsS0FBSztJQUNaLElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRTtRQUNkLEdBQUcsR0FBRyxHQUFHO0tBQ1o7U0FBTTtRQUNILEdBQUcsR0FBRyxHQUFHO0tBQ1o7SUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQzlDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aWNfdGFjX3RvZS8uL3NyYy9nbG9iYWxzLnRzPzI3YzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9rZW5zIH0gZnJvbSBcIi4vdHlwZXMvVG9rZW5zXCI7XHJcblxyXG5leHBvcnQgbGV0IHVzZXI6IFRva2Vuc1xyXG5leHBvcnQgbGV0IGNwdTogVG9rZW5zXHJcbmV4cG9ydCBjb25zdCBzZXRUb2tlbnMgPSAodG9rZW46IFRva2Vucyk6IHZvaWQgPT4ge1xyXG4gICAgdXNlciA9IHRva2VuXHJcbiAgICBpZiAodXNlciA9PT0gXCJYXCIpIHtcclxuICAgICAgICBjcHUgPSBcIk9cIlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjcHUgPSBcIlhcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGB1c2VyOiAke3VzZXJ9IHwgY3B1OiAke2NwdX1gKVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/globals.ts\n");

/***/ }),

/***/ "./src/handleClasses.ts":
/*!******************************!*\
  !*** ./src/handleClasses.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleClasses\": () => (/* binding */ handleClasses)\n/* harmony export */ });\nconst handleClasses = (element, wantedClass, action) => {\r\n    if (action === \"add\") {\r\n        element.classList.add(wantedClass);\r\n    }\r\n    else {\r\n        element.classList.remove(wantedClass);\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlQ2xhc3Nlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTSxhQUFhLEdBQUcsQ0FBQyxPQUF1QixFQUFFLFdBQW1CLEVBQUUsTUFBd0IsRUFBUSxFQUFFO0lBQzFHLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtRQUNsQixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7S0FDckM7U0FBTTtRQUNILE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztLQUN4QztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aWNfdGFjX3RvZS8uL3NyYy9oYW5kbGVDbGFzc2VzLnRzPzk1MjkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGhhbmRsZUNsYXNzZXMgPSAoZWxlbWVudDogSFRNTERpdkVsZW1lbnQsIHdhbnRlZENsYXNzOiBzdHJpbmcsIGFjdGlvbjogXCJhZGRcIiB8IFwicmVtb3ZlXCIpOiB2b2lkID0+IHtcclxuICAgIGlmIChhY3Rpb24gPT09IFwiYWRkXCIpIHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQod2FudGVkQ2xhc3MpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh3YW50ZWRDbGFzcylcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/handleClasses.ts\n");

/***/ }),

/***/ "./src/playerSelector.ts":
/*!*******************************!*\
  !*** ./src/playerSelector.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"playerSelector\": () => (/* binding */ playerSelector)\n/* harmony export */ });\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ \"./src/globals.ts\");\n\r\nconst playerSelector = (target) => {\r\n    if (target.dataset.token === \"X\") {\r\n        (0,_globals__WEBPACK_IMPORTED_MODULE_0__.setTokens)(\"X\");\r\n    }\r\n    else {\r\n        (0,_globals__WEBPACK_IMPORTED_MODULE_0__.setTokens)(\"O\");\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxheWVyU2VsZWN0b3IudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBc0M7QUFFL0IsTUFBTSxjQUFjLEdBQUcsQ0FBQyxNQUF3QixFQUFRLEVBQUU7SUFDN0QsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSyxHQUFHLEVBQUU7UUFDOUIsbURBQVMsQ0FBQyxHQUFHLENBQUM7S0FDakI7U0FBTTtRQUNILG1EQUFTLENBQUMsR0FBRyxDQUFDO0tBQ2pCO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpY190YWNfdG9lLy4vc3JjL3BsYXllclNlbGVjdG9yLnRzPzRiODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0VG9rZW5zIH0gZnJvbSBcIi4vZ2xvYmFsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBsYXllclNlbGVjdG9yID0gKHRhcmdldDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQgPT4ge1xyXG4gICAgaWYgKHRhcmdldC5kYXRhc2V0LnRva2VuID09PSBcIlhcIikge1xyXG4gICAgICAgIHNldFRva2VucyhcIlhcIilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VG9rZW5zKFwiT1wiKVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/playerSelector.ts\n");

/***/ }),

/***/ "./src/removePopup.ts":
/*!****************************!*\
  !*** ./src/removePopup.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removePopup\": () => (/* binding */ removePopup)\n/* harmony export */ });\n/* harmony import */ var _handleClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleClasses */ \"./src/handleClasses.ts\");\n\r\nconst removePopup = (popup) => {\r\n    (0,_handleClasses__WEBPACK_IMPORTED_MODULE_0__.handleClasses)(popup, \"translate\", \"add\");\r\n    setTimeout(() => popup.style.display = \"none\", 1000);\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVtb3ZlUG9wdXAudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0M7QUFFeEMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFxQixFQUFRLEVBQUU7SUFDdkQsNkRBQWEsQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQztJQUN4QyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQztBQUN4RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGljX3RhY190b2UvLi9zcmMvcmVtb3ZlUG9wdXAudHM/NDk3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVDbGFzc2VzIH0gZnJvbSBcIi4vaGFuZGxlQ2xhc3Nlc1wiXHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUG9wdXAgPSAocG9wdXA6IEhUTUxEaXZFbGVtZW50KTogdm9pZCA9PiB7XHJcbiAgICBoYW5kbGVDbGFzc2VzKHBvcHVwLCBcInRyYW5zbGF0ZVwiLCBcImFkZFwiKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIsIDEwMDApXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/removePopup.ts\n");

/***/ }),

/***/ "./src/squareHandler.ts":
/*!******************************!*\
  !*** ./src/squareHandler.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"squareHandler\": () => (/* binding */ squareHandler)\n/* harmony export */ });\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ \"./src/globals.ts\");\n/* harmony import */ var _addToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addToken */ \"./src/addToken.ts\");\n/* harmony import */ var _checkSquare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkSquare */ \"./src/checkSquare.ts\");\n\r\n\r\n\r\nconst squareHandler = (e) => {\r\n    const target = e.target; // HTMLInputElement\r\n    const isEmpty = (0,_checkSquare__WEBPACK_IMPORTED_MODULE_2__.checkSquare)(target);\r\n    if (isEmpty) {\r\n        (0,_addToken__WEBPACK_IMPORTED_MODULE_1__.addToken)(target, _globals__WEBPACK_IMPORTED_MODULE_0__.user);\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3F1YXJlSGFuZGxlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDO0FBQ0s7QUFDTTtBQUVwQyxNQUFNLGFBQWEsR0FBRyxDQUFDLENBQVEsRUFBUSxFQUFFO0lBQzVDLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUF3QixFQUFDLG1CQUFtQjtJQUM3RCxNQUFNLE9BQU8sR0FBWSx5REFBVyxDQUFDLE1BQU0sQ0FBQztJQUU1QyxJQUFJLE9BQU8sRUFBRTtRQUNULG1EQUFRLENBQUMsTUFBTSxFQUFFLDBDQUFJLENBQUM7S0FDekI7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGljX3RhY190b2UvLi9zcmMvc3F1YXJlSGFuZGxlci50cz80ZTFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZXIgfSBmcm9tIFwiLi9nbG9iYWxzXCJcclxuaW1wb3J0IHsgYWRkVG9rZW4gfSBmcm9tIFwiLi9hZGRUb2tlblwiXHJcbmltcG9ydCB7IGNoZWNrU3F1YXJlIH0gZnJvbSBcIi4vY2hlY2tTcXVhcmVcIlxyXG5cclxuZXhwb3J0IGNvbnN0IHNxdWFyZUhhbmRsZXIgPSAoZTogRXZlbnQpOiB2b2lkID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50IC8vIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgIGNvbnN0IGlzRW1wdHk6IGJvb2xlYW4gPSBjaGVja1NxdWFyZSh0YXJnZXQpXHJcblxyXG4gICAgaWYgKGlzRW1wdHkpIHtcclxuICAgICAgICBhZGRUb2tlbih0YXJnZXQsIHVzZXIpXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/squareHandler.ts\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;