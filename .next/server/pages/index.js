module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/linked-list/index.js":
/*!*****************************************!*\
  !*** ./components/linked-list/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node */ \"./components/node/index.js\");\n\nvar _jsxFileName = \"/Users/lucasraza/Desktop/react-projects/algorithm-visualizer/components/linked-list/index.js\";\n\n\n\nconst LinkedList_styled = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`\n    position: relative;\n    display: flex; \n    flex-flow: row wrap;\n    justify-content: space-around;\n    align-items: stretch;\n    align-content: space-around;\n`;\nconst Input = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input`\n    background-color: ${props => props.theme.backgroundColor};\n    &:focus {\n        outline: none;\n    }\n    border: none;\n    color: transparent;\n    text-shadow: 0 0 0 ${props => props.theme.textColor};\n    text-align: center;\n    ::placeholder {\n        color: ${props => props.theme.textColor}\n        font-size: 10px;\n    }\n    border: 3px solid ${props => props.theme.textColor};;\n    border-radius: 50%;\n    height: 100px;\n    width: 100px;\n    \n    \n`;\n\nclass LinkedListClass {\n  constructor(head = null) {\n    this.head = head;\n  }\n\n}\n\nconst LinkedList = (props, children) => {\n  // const LinkedList = new LinkedList(node)\n  const {\n    0: nodes,\n    1: updateNodes\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([{\n    value: null,\n    next: {}\n  }]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LinkedList_styled, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Input, {\n      placeholder: \"Enter Node Value\",\n      type: \"text\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinkedList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xpbmtlZC1saXN0L2luZGV4LmpzP2E1ODEiXSwibmFtZXMiOlsiTGlua2VkTGlzdF9zdHlsZWQiLCJzdHlsZWQiLCJkaXYiLCJJbnB1dCIsImlucHV0IiwicHJvcHMiLCJ0aGVtZSIsImJhY2tncm91bmRDb2xvciIsInRleHRDb2xvciIsIkxpbmtlZExpc3RDbGFzcyIsImNvbnN0cnVjdG9yIiwiaGVhZCIsIkxpbmtlZExpc3QiLCJjaGlsZHJlbiIsIm5vZGVzIiwidXBkYXRlTm9kZXMiLCJ1c2VTdGF0ZSIsInZhbHVlIiwibmV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGlCQUFpQixHQUFHQyx3REFBTSxDQUFDQyxHQUFJO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUEE7QUFRQSxNQUFNQyxLQUFLLEdBQUdGLHdEQUFNLENBQUNHLEtBQU07QUFDM0Isd0JBQXdCQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxlQUFnQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCRixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxTQUFVO0FBQ3hEO0FBQ0E7QUFDQSxpQkFBaUJILEtBQUssSUFBR0EsS0FBSyxDQUFDQyxLQUFOLENBQVlFLFNBQVU7QUFDL0M7QUFDQTtBQUNBLHdCQUF3QkgsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsU0FBVTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FuQkE7O0FBb0JBLE1BQU1DLGVBQU4sQ0FBc0I7QUFDbEJDLGFBQVcsQ0FBQ0MsSUFBSSxHQUFHLElBQVIsRUFBYTtBQUNwQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDSDs7QUFIaUI7O0FBTXRCLE1BQU1DLFVBQVUsR0FBRyxDQUFDUCxLQUFELEVBQVFRLFFBQVIsS0FBcUI7QUFHcEM7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBdUJDLHNEQUFRLENBQUMsQ0FBQztBQUFDQyxTQUFLLEVBQUUsSUFBUjtBQUFjQyxRQUFJLEVBQUU7QUFBcEIsR0FBRCxDQUFELENBQXJDO0FBRUEsc0JBRUkscUVBQUMsaUJBQUQ7QUFBQSwyQkFDSSxxRUFBQyxLQUFEO0FBQU8saUJBQVcsRUFBQyxrQkFBbkI7QUFBc0MsVUFBSSxFQUFDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFPSCxDQWREOztBQWdCZU4seUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpbmtlZC1saXN0L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTm9kZUNsYXNzLCBOb2RlfSBmcm9tICcuLi9ub2RlJ1xuXG5jb25zdCBMaW5rZWRMaXN0X3N0eWxlZCA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuYFxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRleHQtc2hhZG93OiAwIDAgMCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIDo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogJHtwcm9wcz0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn1cbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbiAgICBib3JkZXI6IDNweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBcbiAgICBcbmBcbmNsYXNzIExpbmtlZExpc3RDbGFzcyB7XG4gICAgY29uc3RydWN0b3IoaGVhZCA9IG51bGwpe1xuICAgICAgICB0aGlzLmhlYWQgPSBoZWFkXG4gICAgfVxufVxuXG5jb25zdCBMaW5rZWRMaXN0ID0gKHByb3BzLCBjaGlsZHJlbikgPT4ge1xuXG5cbiAgICAvLyBjb25zdCBMaW5rZWRMaXN0ID0gbmV3IExpbmtlZExpc3Qobm9kZSlcblxuICAgIGNvbnN0IFtub2RlcywgdXBkYXRlTm9kZXNdID0gdXNlU3RhdGUoW3t2YWx1ZTogbnVsbCwgbmV4dDoge319XSlcblxuICAgIHJldHVybiAoXG4gICAgIFxuICAgICAgICA8TGlua2VkTGlzdF9zdHlsZWQ+XG4gICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciBOb2RlIFZhbHVlXCIgdHlwZT1cInRleHRcIi8+XG4gICAgICAgIDwvTGlua2VkTGlzdF9zdHlsZWQ+XG4gICAgICAgIFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua2VkTGlzdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/linked-list/index.js\n");

/***/ }),

/***/ "./components/node/index.js":
/*!**********************************!*\
  !*** ./components/node/index.js ***!
  \**********************************/
/*! exports provided: NodeClass, Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NodeClass\", function() { return NodeClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Node\", function() { return Node; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/lucasraza/Desktop/react-projects/algorithm-visualizer/components/node/index.js\";\n\n\nconst Node_styled = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`\n    background-color: ${props => props.theme.nodeColor};\n    color: ${props => props.theme.textColor}\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n`;\n\nclass NodeClass {\n  constructor(value) {\n    this.value = value;\n    this.next = null;\n  }\n\n}\n\nconst Node = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Node_styled, {\n    value: props.value,\n    next: props.next,\n    children: props.value\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 9\n  }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vZGUvaW5kZXguanM/ZTRhMyJdLCJuYW1lcyI6WyJOb2RlX3N0eWxlZCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJub2RlQ29sb3IiLCJ0ZXh0Q29sb3IiLCJOb2RlQ2xhc3MiLCJjb25zdHJ1Y3RvciIsInZhbHVlIiwibmV4dCIsIk5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBSTtBQUMvQix3QkFBeUJDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFNBQVU7QUFDekQsYUFBY0YsS0FBRCxJQUFTQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsU0FBVTtBQUM1QztBQUNBO0FBQ0E7QUFDQSxDQU5BOztBQU9BLE1BQU1DLFNBQU4sQ0FBZ0I7QUFDWkMsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDZixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNIOztBQUpXOztBQVFoQixNQUFNQyxJQUFJLEdBQUlSLEtBQUQsSUFBVztBQUNwQixzQkFDSSxxRUFBQyxXQUFEO0FBQWEsU0FBSyxFQUFFQSxLQUFLLENBQUNNLEtBQTFCO0FBQWlDLFFBQUksRUFBRU4sS0FBSyxDQUFDTyxJQUE3QztBQUFBLGNBQ0tQLEtBQUssQ0FBQ007QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFLSCxDQU5EIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ub2RlL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgTm9kZV9zdHlsZWQgPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5ub2RlQ29sb3J9O1xuICAgIGNvbG9yOiAkeyhwcm9wcyk9PnByb3BzLnRoZW1lLnRleHRDb2xvcn1cbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5gXG5jbGFzcyBOb2RlQ2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgICAgICB0aGlzLm5leHQgPSBudWxsXG4gICAgfVxuXG5cbn1cbmNvbnN0IE5vZGUgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Tm9kZV9zdHlsZWQgdmFsdWU9e3Byb3BzLnZhbHVlfSBuZXh0PXtwcm9wcy5uZXh0fT5cbiAgICAgICAgICAgIHtwcm9wcy52YWx1ZX1cbiAgICAgICAgPC9Ob2RlX3N0eWxlZD5cbiAgICApXG59XG5cbmV4cG9ydCAgeyBOb2RlQ2xhc3MsIE5vZGUgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/node/index.js\n");

/***/ }),

/***/ "./components/sections/Graph/index.js":
/*!********************************************!*\
  !*** ./components/sections/Graph/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/lucasraza/Desktop/react-projects/algorithm-visualizer/components/sections/Graph/index.js\";\n\n\nconst Graph_styled = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`\n    // position: inherit;\n    border: 1px solid white;\n    border-radius: 25%;\n    width: 100%;\n    // height: 100%;\n    color: ${props => props.theme.textColor}\n`;\n\nconst graph = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Graph_styled, {\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (graph);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlY3Rpb25zL0dyYXBoL2luZGV4LmpzP2Q4YzciXSwibmFtZXMiOlsiR3JhcGhfc3R5bGVkIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvciIsImdyYXBoIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxZQUFZLEdBQUdDLHdEQUFNLENBQUNDLEdBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWNDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFNBQVU7QUFDOUMsQ0FQQTs7QUFRQSxNQUFNQyxLQUFLLEdBQUlILEtBQUQsSUFBVztBQUNyQixzQkFDSSxxRUFBQyxZQUFEO0FBQUEsY0FDS0EsS0FBSyxDQUFDSTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUtILENBTkQ7O0FBT2VELG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zZWN0aW9ucy9HcmFwaC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IEdyYXBoX3N0eWxlZCA9IHN0eWxlZC5kaXZgXG4gICAgLy8gcG9zaXRpb246IGluaGVyaXQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIGhlaWdodDogMTAwJTtcbiAgICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn1cbmBcbmNvbnN0IGdyYXBoID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEdyYXBoX3N0eWxlZD5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9HcmFwaF9zdHlsZWQ+XG4gICAgKVxufSAgXG5leHBvcnQgZGVmYXVsdCBncmFwaFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sections/Graph/index.js\n");

/***/ }),

/***/ "./components/sections/Tree/index.js":
/*!*******************************************!*\
  !*** ./components/sections/Tree/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/lucasraza/Desktop/react-projects/algorithm-visualizer/components/sections/Tree/index.js\";\n\n\nconst Tree_styled = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`\n    border: white;\n    border-radius: 25%;\n    width: 100%;\n    height: 100%;\n`;\n\nconst tree = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Tree_styled, {\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tree);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlY3Rpb25zL1RyZWUvaW5kZXguanM/ZjYwMCJdLCJuYW1lcyI6WyJUcmVlX3N0eWxlZCIsInN0eWxlZCIsImRpdiIsInRyZWUiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxHQUFHQyx3REFBTSxDQUFDQyxHQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FMQTs7QUFPQSxNQUFNQyxJQUFJLEdBQUlDLEtBQUQsSUFBVztBQUNwQixzQkFDSSxxRUFBQyxXQUFEO0FBQUEsY0FDS0EsS0FBSyxDQUFDQztBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUtILENBTkQ7O0FBT2VGLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zZWN0aW9ucy9UcmVlL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgVHJlZV9zdHlsZWQgPSBzdHlsZWQuZGl2YFxuICAgIGJvcmRlcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbmBcblxuY29uc3QgdHJlZSA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUcmVlX3N0eWxlZD5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9UcmVlX3N0eWxlZD5cbiAgICApXG59ICBcbmV4cG9ydCBkZWZhdWx0IHRyZWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sections/Tree/index.js\n");

/***/ }),

/***/ "./components/sections/index.js":
/*!**************************************!*\
  !*** ./components/sections/index.js ***!
  \**************************************/
/*! exports provided: Graph, Tree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Graph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Graph */ \"./components/sections/Graph/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Graph\", function() { return _Graph__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tree */ \"./components/sections/Tree/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Tree\", function() { return _Tree__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlY3Rpb25zL2luZGV4LmpzP2MwOGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zZWN0aW9ucy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHcmFwaCBmcm9tICcuL0dyYXBoJ1xuaW1wb3J0IFRyZWUgZnJvbSAnLi9UcmVlJ1xuXG5leHBvcnQgeyBHcmFwaCwgVHJlZSB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sections/index.js\n");

/***/ }),

/***/ "./contexts/ThemeContext.js":
/*!**********************************!*\
  !*** ./contexts/ThemeContext.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/lucasraza/Desktop/react-projects/algorithm-visualizer/contexts/ThemeContext.js\";\n\n\nconst bgColor = {\n  dark: \"#03254c;\",\n  light: \"#fdfcfc;\"\n};\nconst nodeColor = {\n  dark: \"#ef7564;\",\n  light: \"#d3d3d3;\"\n};\nconst textColor = {\n  dark: \"#fdfcfc;\",\n  light: \"#03254c;\"\n};\n\nconst theme = darkMode => {\n  return darkMode ? {\n    backgroundColor: bgColor.dark,\n    nodeColor: nodeColor.dark,\n    textColor: textColor.dark\n  } : {\n    backgroundColor: bgColor.light,\n    nodeColor: nodeColor.light,\n    textColor: textColor.light\n  };\n};\n\nconst ThemeContext = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"ThemeProvider\"], {\n    theme: theme(props.dark),\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9UaGVtZUNvbnRleHQuanM/MTkzOSJdLCJuYW1lcyI6WyJiZ0NvbG9yIiwiZGFyayIsImxpZ2h0Iiwibm9kZUNvbG9yIiwidGV4dENvbG9yIiwidGhlbWUiLCJkYXJrTW9kZSIsImJhY2tncm91bmRDb2xvciIsIlRoZW1lQ29udGV4dCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxPQUFPLEdBQUc7QUFDWkMsTUFBSSxFQUFFLFVBRE07QUFFWkMsT0FBSyxFQUFFO0FBRkssQ0FBaEI7QUFJQSxNQUFNQyxTQUFTLEdBQUc7QUFDZEYsTUFBSSxFQUFDLFVBRFM7QUFFZEMsT0FBSyxFQUFFO0FBRk8sQ0FBbEI7QUFLQSxNQUFNRSxTQUFTLEdBQUc7QUFDZEgsTUFBSSxFQUFFLFVBRFE7QUFFZEMsT0FBSyxFQUFFO0FBRk8sQ0FBbEI7O0FBS0EsTUFBTUcsS0FBSyxHQUFJQyxRQUFELElBQWM7QUFDeEIsU0FDSUEsUUFBUSxHQUFJO0FBQ1JDLG1CQUFlLEVBQUVQLE9BQU8sQ0FBQ0MsSUFEakI7QUFFUkUsYUFBUyxFQUFFQSxTQUFTLENBQUNGLElBRmI7QUFHUkcsYUFBUyxFQUFFQSxTQUFTLENBQUNIO0FBSGIsR0FBSixHQUlKO0FBQ0FNLG1CQUFlLEVBQUVQLE9BQU8sQ0FBQ0UsS0FEekI7QUFFQUMsYUFBUyxFQUFFQSxTQUFTLENBQUNELEtBRnJCO0FBR0FFLGFBQVMsRUFBRUEsU0FBUyxDQUFDRjtBQUhyQixHQUxSO0FBV0gsQ0FaRDs7QUFlQSxNQUFNTSxZQUFZLEdBQUlDLEtBQUQsSUFBVztBQUU1QixzQkFDSSxxRUFBQywrREFBRDtBQUFlLFNBQUssRUFBRUosS0FBSyxDQUFDSSxLQUFLLENBQUNSLElBQVAsQ0FBM0I7QUFBQSxjQUNLUSxLQUFLLENBQUNDO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0gsQ0FQRDs7QUFTZUYsMkVBQWYiLCJmaWxlIjoiLi9jb250ZXh0cy9UaGVtZUNvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgYmdDb2xvciA9IHtcbiAgICBkYXJrOiBcIiMwMzI1NGM7XCIsXG4gICAgbGlnaHQ6IFwiI2ZkZmNmYztcIlxufVxuY29uc3Qgbm9kZUNvbG9yID0ge1xuICAgIGRhcms6XCIjZWY3NTY0O1wiLFxuICAgIGxpZ2h0OiBcIiNkM2QzZDM7XCJcbn1cblxuY29uc3QgdGV4dENvbG9yID0ge1xuICAgIGRhcms6IFwiI2ZkZmNmYztcIixcbiAgICBsaWdodDogXCIjMDMyNTRjO1wiXG59XG5cbmNvbnN0IHRoZW1lID0gKGRhcmtNb2RlKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgZGFya01vZGUgPyAge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiZ0NvbG9yLmRhcmssXG4gICAgICAgICAgICBub2RlQ29sb3I6IG5vZGVDb2xvci5kYXJrLFxuICAgICAgICAgICAgdGV4dENvbG9yOiB0ZXh0Q29sb3IuZGFya1xuICAgICAgICB9IDoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiZ0NvbG9yLmxpZ2h0LFxuICAgICAgICAgICAgbm9kZUNvbG9yOiBub2RlQ29sb3IubGlnaHQsXG4gICAgICAgICAgICB0ZXh0Q29sb3I6IHRleHRDb2xvci5saWdodFxuICAgICAgICB9XG4gICAgKVxufVxuXG5cbmNvbnN0IFRoZW1lQ29udGV4dCA9IChwcm9wcykgPT4ge1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZShwcm9wcy5kYXJrKX0+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQ29udGV4dFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/ThemeContext.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/ThemeContext */ \"./contexts/ThemeContext.js\");\n/* harmony import */ var _components_sections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sections */ \"./components/sections/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_linked_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/linked-list */ \"./components/linked-list/index.js\");\n\nvar _jsxFileName = \"/Users/lucasraza/Desktop/react-projects/algorithm-visualizer/pages/index.js\";\n\n\n\n\n\n\nconst DkModeToggle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button`\n  background-color: ${props => props.theme.textColor};\n  color: ${props => props.dark ? \"#03254c;\" : \"#fdfcfc;\"};\n  font-size: 1em;\n  margin: 1em;\n  padding: .25em 1em;\n  // border: 2px solid palevioletred;\n  border: none;\n  border-radius: 3px;\n  outline: none;\n\n`;\nconst Main = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  background-color: ${props => props.theme.backgroundColor}\n\n`;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1`\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  color: ${props => props.theme.textColor};\n`;\nconst Sections_container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`\n  position: absolute;\n  // align-items: center;\n  width: 100%;\n  height: 100%;\n`;\nfunction Home() {\n  const {\n    0: dark,\n    1: setDark\n  } = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(() => {\n    console.log('useEffect');\n  }, [dark]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    dark: dark,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Main, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DkModeToggle, {\n        dark: dark,\n        onClick: () => {\n          setDark(!dark);\n        },\n        children: dark ? \"LIGHT\" : \"DARK\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Title, {\n        children: \"Algorithm Visualizer\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Sections_container, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_linked_list__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkRrTW9kZVRvZ2dsZSIsInN0eWxlZCIsImJ1dHRvbiIsInByb3BzIiwidGhlbWUiLCJ0ZXh0Q29sb3IiLCJkYXJrIiwiTWFpbiIsImRpdiIsImJhY2tncm91bmRDb2xvciIsIlRpdGxlIiwiaDEiLCJTZWN0aW9uc19jb250YWluZXIiLCJIb21lIiwic2V0RGFyayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsWUFBWSxHQUFHQyx3REFBTSxDQUFDQyxNQUFPO0FBQ25DLHNCQUF1QkMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsU0FBVTtBQUN2RCxXQUFZRixLQUFELElBQVdBLEtBQUssQ0FBQ0csSUFBTixHQUFhLFVBQWIsR0FBMEIsVUFBVztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FYQTtBQVlBLE1BQU1DLElBQUksR0FBR04sd0RBQU0sQ0FBQ08sR0FBSTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUF1QkwsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUssZUFBZ0I7QUFDN0Q7QUFDQSxDQVBBO0FBUUEsTUFBTUMsS0FBSyxHQUFHVCx3REFBTSxDQUFDVSxFQUFHO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLFdBQVlSLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFNBQVU7QUFDNUMsQ0FMQTtBQU1BLE1BQU1PLGtCQUFrQixHQUFHWCx3REFBTSxDQUFDTyxHQUFJO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FMQTtBQU9lLFNBQVNLLElBQVQsR0FBZ0I7QUFFN0IsUUFBTTtBQUFBLE9BQUNQLElBQUQ7QUFBQSxPQUFPUTtBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEtBQUQsQ0FBaEM7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDRCxHQUZRLEVBRVAsQ0FBQ1osSUFBRCxDQUZPLENBQVQ7QUFJQSxzQkFDRSxxRUFBQyw4REFBRDtBQUFjLFFBQUksRUFBRUEsSUFBcEI7QUFBQSwyQkFDRSxxRUFBQyxJQUFEO0FBQUEsOEJBQ0UscUVBQUMsWUFBRDtBQUFjLFlBQUksRUFBRUEsSUFBcEI7QUFBMEIsZUFBTyxFQUFFLE1BQU07QUFBQ1EsaUJBQU8sQ0FBQyxDQUFDUixJQUFGLENBQVA7QUFBZSxTQUF6RDtBQUFBLGtCQUNDQSxJQUFJLEdBQUcsT0FBSCxHQUFhO0FBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFLHFFQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFLHFFQUFDLGtCQUFEO0FBQUEsK0JBQ0UscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBUaGVtZUNvbnRleHQgZnJvbSAnLi4vY29udGV4dHMvVGhlbWVDb250ZXh0J1xuaW1wb3J0IHsgR3JhcGgsIFRyZWUgfSBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rZWRMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlua2VkLWxpc3QnXG5cbmNvbnN0IERrTW9kZVRvZ2dsZSA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLmRhcmsgPyBcIiMwMzI1NGM7XCIgOiBcIiNmZGZjZmM7XCJ9O1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luOiAxZW07XG4gIHBhZGRpbmc6IC4yNWVtIDFlbTtcbiAgLy8gYm9yZGVyOiAycHggc29saWQgcGFsZXZpb2xldHJlZDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG91dGxpbmU6IG5vbmU7XG5cbmBcbmNvbnN0IE1haW4gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJhY2tncm91bmRDb2xvcn1cblxuYFxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG5gXG5jb25zdCBTZWN0aW9uc19jb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW2RhcmssIHNldERhcmtdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygndXNlRWZmZWN0JylcbiAgfSxbZGFya10pXG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVDb250ZXh0IGRhcms9e2Rhcmt9PlxuICAgICAgPE1haW4+XG4gICAgICAgIDxEa01vZGVUb2dnbGUgZGFyaz17ZGFya30gb25DbGljaz17KCkgPT4ge3NldERhcmsoIWRhcmspfX0+XG4gICAgICAgIHtkYXJrID8gXCJMSUdIVFwiIDogXCJEQVJLXCJ9XG4gICAgICAgIDwvRGtNb2RlVG9nZ2xlPlxuICAgICAgICA8VGl0bGU+QWxnb3JpdGhtIFZpc3VhbGl6ZXI8L1RpdGxlPlxuICAgICAgICA8U2VjdGlvbnNfY29udGFpbmVyPlxuICAgICAgICAgIDxMaW5rZWRMaXN0Lz5cbiAgICAgICAgPC9TZWN0aW9uc19jb250YWluZXI+XG4gICAgICA8L01haW4+XG4gICAgICBcbiAgICA8L1RoZW1lQ29udGV4dD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });