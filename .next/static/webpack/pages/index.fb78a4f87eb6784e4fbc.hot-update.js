webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/ThemeContext */ \"./contexts/ThemeContext.js\");\n/* harmony import */ var _components_LinkedList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LinkedList */ \"./components/LinkedList/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/Users/lucasraza/Desktop/react-projects/algorithm-visualizer/pages/index.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  color: \", \"\\n  // border: none;\\n  background-color: transparent;\\n  display: relative;\\n  outline: none;\\n  position: absolute;\\n  \\n  border: 2px solid \", \"\\n  // margin: 1em;\\n  border-radius: 15px;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 100%;\\n  position: absolute;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  // background-color: none;\\n\\n  color: \", \";\\n  size: 2em;\\n\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: block;\\n  // flex-direction: column;\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  bottom: 0;\\n\\n  background-color: \", \"\\n  color: \", \"\\n  outline: none;\\n  box-shadow: none;\\n  // :focus {\\n  //   outline: none;\\n  // }\\n  // &:focus{\\n  //   outline: none;\\n  //   box-shadow: none;\\n  // }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar Main_container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject(), function (props) {\n  return props.theme.backgroundColor;\n}, function (props) {\n  return props.theme.textColor;\n});\n_c = Main_container;\nvar Banner = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2(), function (props) {\n  return props.theme.textColor;\n});\n_c2 = Banner;\nvar ModeButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button(_templateObject3(), function (props) {\n  return props.theme.textColor;\n}, function (props) {\n  return props.theme.textColor;\n});\n_c3 = ModeButton;\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(false),\n      dark = _useState[0],\n      setDark = _useState[1];\n\n  var handleClick = function handleClick(e) {\n    setDark(!dark);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__[\"ThemeContext\"], {\n    dark: dark,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Banner, {\n      children: \"Algorithm Visualizer\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 6\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ModeButton, {\n      onClick: handleClick,\n      children: dark ? \"light\" : \"dark\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Main_container, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_LinkedList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 6\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 4\n  }, this);\n}\n\n_s(Home, \"SvVe3Z4Nr7rux/2pmm0cFI6QU44=\");\n\n_c4 = Home;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Main_container\");\n$RefreshReg$(_c2, \"Banner\");\n$RefreshReg$(_c3, \"ModeButton\");\n$RefreshReg$(_c4, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJNYWluX2NvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0Q29sb3IiLCJCYW5uZXIiLCJNb2RlQnV0dG9uIiwiYnV0dG9uIiwiSG9tZSIsInVzZVN0YXRlIiwiZGFyayIsInNldERhcmsiLCJoYW5kbGVDbGljayIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxJQUFNQSxjQUFjLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsb0JBUUUsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxlQUF2QjtBQUFBLENBUkYsRUFTVCxVQUFDRixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlFLFNBQXZCO0FBQUEsQ0FUUyxDQUFwQjtLQUFNTixjO0FBb0JOLElBQU1PLE1BQU0sR0FBR04seURBQU0sQ0FBQ0MsR0FBVixxQkFRRCxVQUFDQyxLQUFEO0FBQUEsU0FBVUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLFNBQXRCO0FBQUEsQ0FSQyxDQUFaO01BQU1DLE07QUFZTixJQUFNQyxVQUFVLEdBQUdQLHlEQUFNLENBQUNRLE1BQVYscUJBQ0wsVUFBQ04sS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxTQUF2QjtBQUFBLENBREssRUFRTSxVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlFLFNBQXZCO0FBQUEsQ0FSTixDQUFoQjtNQUFNRSxVO0FBYVMsU0FBU0UsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNMQyxzREFBUSxDQUFDLEtBQUQsQ0FESDtBQUFBLE1BQ3RCQyxJQURzQjtBQUFBLE1BQ2hCQyxPQURnQjs7QUFHN0IsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3pCRixXQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFQO0FBQ0QsR0FGRDs7QUFJQSxzQkFDQyxxRUFBQyxtRUFBRDtBQUFjLFFBQUksRUFBRUEsSUFBcEI7QUFBQSw0QkFDRSxxRUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRyxxRUFBQyxVQUFEO0FBQVksYUFBTyxFQUFFRSxXQUFyQjtBQUFBLGdCQUFvQ0YsSUFBSSxHQUFHLE9BQUgsR0FBYTtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkgsZUFHRSxxRUFBQyxjQUFEO0FBQUEsNkJBRUMscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVVEOztHQWpCdUJGLEk7O01BQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9UaGVtZUNvbnRleHQnXG5pbXBvcnQgTGlua2VkTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpbmtlZExpc3QnXG5cbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuY29uc3QgTWFpbl9jb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBibG9jaztcbiAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3R0b206IDA7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJhY2tncm91bmRDb2xvcn1cbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIC8vIDpmb2N1cyB7XG4gIC8vICAgb3V0bGluZTogbm9uZTtcbiAgLy8gfVxuICAvLyAmOmZvY3Vze1xuICAvLyAgIG91dGxpbmU6IG5vbmU7XG4gIC8vICAgYm94LXNoYWRvdzogbm9uZTtcbiAgLy8gfVxuYFxuY29uc3QgQmFubmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG5cbiAgY29sb3I6ICR7KHByb3BzKT0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIHNpemU6IDJlbTtcblxuYFxuY29uc3QgTW9kZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfVxuICAvLyBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiByZWxhdGl2ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBcbiAgYm9yZGVyOiAycHggc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn1cbiAgLy8gbWFyZ2luOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtkYXJrLCBzZXREYXJrXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICBzZXREYXJrKCFkYXJrKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgIDxUaGVtZUNvbnRleHQgZGFyaz17ZGFya30+XG4gICAgIDxCYW5uZXI+QWxnb3JpdGhtIFZpc3VhbGl6ZXI8L0Jhbm5lcj5cbiAgICAgIDxNb2RlQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT57IGRhcmsgPyBcImxpZ2h0XCIgOiBcImRhcmtcIn08L01vZGVCdXR0b24+XG4gICAgIDxNYWluX2NvbnRhaW5lcj5cbiAgICAgIFxuICAgICAgPExpbmtlZExpc3Q+PC9MaW5rZWRMaXN0PlxuICAgICA8L01haW5fY29udGFpbmVyPlxuICAgPC9UaGVtZUNvbnRleHQ+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})