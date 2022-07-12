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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _clickHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickHandler */ \"./src/clickHandler.ts\");\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ \"./src/globals.ts\");\n\r\n\r\n_globals__WEBPACK_IMPORTED_MODULE_1__.selectX.addEventListener(\"click\", (e) => (0,_clickHandler__WEBPACK_IMPORTED_MODULE_0__.clickHandler)(_globals__WEBPACK_IMPORTED_MODULE_1__.disabledElements, _globals__WEBPACK_IMPORTED_MODULE_1__.popup, e));\r\n_globals__WEBPACK_IMPORTED_MODULE_1__.selectO.addEventListener(\"click\", (e) => (0,_clickHandler__WEBPACK_IMPORTED_MODULE_0__.clickHandler)(_globals__WEBPACK_IMPORTED_MODULE_1__.disabledElements, _globals__WEBPACK_IMPORTED_MODULE_1__.popup, e));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnRzLmpzIiwibWFwcGluZ3MiOiI7OztBQUE2QztBQUN3QjtBQUVyRSw4REFBd0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLDJEQUFZLENBQUMsc0RBQWdCLEVBQUUsMkNBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsRiw4REFBd0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLDJEQUFZLENBQUMsc0RBQWdCLEVBQUUsMkNBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpY190YWNfdG9lLy4vc3JjL2FwcC50cz8wNjZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsaWNrSGFuZGxlciB9IGZyb20gXCIuL2NsaWNrSGFuZGxlclwiXHJcbmltcG9ydCB7IGRpc2FibGVkRWxlbWVudHMsIHBvcHVwLCBzZWxlY3RPLCBzZWxlY3RYIH0gZnJvbSBcIi4vZ2xvYmFsc1wiXHJcblxyXG5zZWxlY3RYLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gY2xpY2tIYW5kbGVyKGRpc2FibGVkRWxlbWVudHMsIHBvcHVwLCBlKSlcclxuc2VsZWN0Ty5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGNsaWNrSGFuZGxlcihkaXNhYmxlZEVsZW1lbnRzLCBwb3B1cCwgZSkpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/clickHandler.ts":
/*!*****************************!*\
  !*** ./src/clickHandler.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clickHandler\": () => (/* binding */ clickHandler)\n/* harmony export */ });\n/* harmony import */ var _enableScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enableScreen */ \"./src/enableScreen.ts\");\n/* harmony import */ var _playerSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerSelector */ \"./src/playerSelector.ts\");\n\r\n\r\nconst clickHandler = (disabledElements, popup, e) => {\r\n    const target = e.target;\r\n    (0,_enableScreen__WEBPACK_IMPORTED_MODULE_0__.enableScreen)(disabledElements, popup);\r\n    (0,_playerSelector__WEBPACK_IMPORTED_MODULE_1__.playerSelector)(target);\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpY2tIYW5kbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUNJO0FBRTFDLE1BQU0sWUFBWSxHQUFHLENBQUMsZ0JBQTRDLEVBQUUsS0FBcUIsRUFBRSxDQUFRLEVBQVEsRUFBRTtJQUNoSCxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBMEI7SUFFM0MsMkRBQVksQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUM7SUFDckMsK0RBQWMsQ0FBQyxNQUFNLENBQUM7QUFDMUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpY190YWNfdG9lLy4vc3JjL2NsaWNrSGFuZGxlci50cz9lMWUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVuYWJsZVNjcmVlbiB9IGZyb20gXCIuL2VuYWJsZVNjcmVlblwiXHJcbmltcG9ydCB7IHBsYXllclNlbGVjdG9yIH0gZnJvbSBcIi4vcGxheWVyU2VsZWN0b3JcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGNsaWNrSGFuZGxlciA9IChkaXNhYmxlZEVsZW1lbnRzOiBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PiwgcG9wdXA6IEhUTUxEaXZFbGVtZW50LCBlOiBFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudFxyXG5cclxuICAgIGVuYWJsZVNjcmVlbihkaXNhYmxlZEVsZW1lbnRzLCBwb3B1cClcclxuICAgIHBsYXllclNlbGVjdG9yKHRhcmdldClcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/clickHandler.ts\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cpu\": () => (/* binding */ cpu),\n/* harmony export */   \"disabledElements\": () => (/* binding */ disabledElements),\n/* harmony export */   \"popup\": () => (/* binding */ popup),\n/* harmony export */   \"selectO\": () => (/* binding */ selectO),\n/* harmony export */   \"selectX\": () => (/* binding */ selectX),\n/* harmony export */   \"setTokens\": () => (/* binding */ setTokens),\n/* harmony export */   \"user\": () => (/* binding */ user)\n/* harmony export */ });\nconst disabledElements = document.querySelectorAll(\".disabled\");\r\nconst popup = document.querySelector(\"#popup\");\r\nconst selectX = document.getElementById(\"playerX\");\r\nconst selectO = document.getElementById(\"playerO\");\r\nlet user;\r\nlet cpu;\r\nconst setTokens = (value) => {\r\n    user = value;\r\n    if (value === \"X\") {\r\n        cpu = \"O\";\r\n    }\r\n    else {\r\n        cpu = \"X\";\r\n    }\r\n    console.log(`user: ${user} | cpu: ${cpu}`);\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2xvYmFscy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRU8sTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUErQjtBQUM3RixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBbUI7QUFDaEUsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQXNCO0FBQ3ZFLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFzQjtBQUV2RSxJQUFJLElBQVk7QUFDaEIsSUFBSSxHQUFXO0FBQ2YsTUFBTSxTQUFTLEdBQUcsQ0FBQyxLQUFhLEVBQVEsRUFBRTtJQUM3QyxJQUFJLEdBQUcsS0FBSztJQUNaLElBQUksS0FBSyxLQUFLLEdBQUcsRUFBRTtRQUNmLEdBQUcsR0FBRyxHQUFHO0tBQ1o7U0FBTTtRQUNILEdBQUcsR0FBRyxHQUFHO0tBQ1o7SUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQzlDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aWNfdGFjX3RvZS8uL3NyYy9nbG9iYWxzLnRzPzI3YzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9rZW5zIH0gZnJvbSBcIi4vdHlwZXMvVG9rZW5zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZGlzYWJsZWRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGlzYWJsZWRcIikgYXMgTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD5cclxuZXhwb3J0IGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cFwiKSBhcyBIVE1MRGl2RWxlbWVudFxyXG5leHBvcnQgY29uc3Qgc2VsZWN0WCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyWFwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudFxyXG5leHBvcnQgY29uc3Qgc2VsZWN0TyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyT1wiKSBhcyBIVE1MQnV0dG9uRWxlbWVudFxyXG5cclxuZXhwb3J0IGxldCB1c2VyOiBUb2tlbnNcclxuZXhwb3J0IGxldCBjcHU6IFRva2Vuc1xyXG5leHBvcnQgY29uc3Qgc2V0VG9rZW5zID0gKHZhbHVlOiBUb2tlbnMpOiB2b2lkID0+IHtcclxuICAgIHVzZXIgPSB2YWx1ZVxyXG4gICAgaWYgKHZhbHVlID09PSBcIlhcIikge1xyXG4gICAgICAgIGNwdSA9IFwiT1wiXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNwdSA9IFwiWFwiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coYHVzZXI6ICR7dXNlcn0gfCBjcHU6ICR7Y3B1fWApXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/globals.ts\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"playerSelector\": () => (/* binding */ playerSelector)\n/* harmony export */ });\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ \"./src/globals.ts\");\n\r\nconst playerSelector = (target) => {\r\n    if (target.textContent === \"X\") {\r\n        (0,_globals__WEBPACK_IMPORTED_MODULE_0__.setTokens)(\"X\");\r\n    }\r\n    else {\r\n        (0,_globals__WEBPACK_IMPORTED_MODULE_0__.setTokens)(\"O\");\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxheWVyU2VsZWN0b3IudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBc0M7QUFFL0IsTUFBTSxjQUFjLEdBQUcsQ0FBQyxNQUF3QixFQUFRLEVBQUU7SUFDN0QsSUFBSSxNQUFNLENBQUMsV0FBVyxLQUFLLEdBQUcsRUFBRTtRQUM1QixtREFBUyxDQUFDLEdBQUcsQ0FBQztLQUNqQjtTQUFNO1FBQ0gsbURBQVMsQ0FBQyxHQUFHLENBQUM7S0FDakI7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGljX3RhY190b2UvLi9zcmMvcGxheWVyU2VsZWN0b3IudHM/NGI4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXRUb2tlbnMgfSBmcm9tIFwiLi9nbG9iYWxzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcGxheWVyU2VsZWN0b3IgPSAodGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCA9PiB7XHJcbiAgICBpZiAodGFyZ2V0LnRleHRDb250ZW50ID09PSBcIlhcIikge1xyXG4gICAgICAgIHNldFRva2VucyhcIlhcIilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VG9rZW5zKFwiT1wiKVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/playerSelector.ts\n");

/***/ }),

/***/ "./src/removePopup.ts":
/*!****************************!*\
  !*** ./src/removePopup.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removePopup\": () => (/* binding */ removePopup)\n/* harmony export */ });\n/* harmony import */ var _handleClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleClasses */ \"./src/handleClasses.ts\");\n\r\nconst removePopup = (popup) => {\r\n    (0,_handleClasses__WEBPACK_IMPORTED_MODULE_0__.handleClasses)(popup, \"translate\", \"add\");\r\n    setTimeout(() => popup.style.display = \"none\", 1000);\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVtb3ZlUG9wdXAudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0M7QUFFeEMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFxQixFQUFRLEVBQUU7SUFDdkQsNkRBQWEsQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQztJQUN4QyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQztBQUN4RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGljX3RhY190b2UvLi9zcmMvcmVtb3ZlUG9wdXAudHM/NDk3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVDbGFzc2VzIH0gZnJvbSBcIi4vaGFuZGxlQ2xhc3Nlc1wiXHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUG9wdXAgPSAocG9wdXA6IEhUTUxEaXZFbGVtZW50KTogdm9pZCA9PiB7XHJcbiAgICBoYW5kbGVDbGFzc2VzKHBvcHVwLCBcInRyYW5zbGF0ZVwiLCBcImFkZFwiKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIsIDEwMDApXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/removePopup.ts\n");

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