"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./theme.config.tsx":
/*!**************************!*\
  !*** ./theme.config.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    logo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n        children: \"Golang Uzbekistan\"\n    }, void 0, false, {\n        fileName: \"/Users/doston/Developer/website/theme.config.tsx\",\n        lineNumber: 8,\n        columnNumber: 11\n    }, undefined),\n    project: {\n        link: \"https://github.com/golang-uz\"\n    },\n    useNextSeoProps () {\n        const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n        if (asPath !== \"/\") {\n            return {};\n        }\n    },\n    search: {\n        emptyResult: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: \"Hech narsa topilmadi\"\n        }, void 0, false, {\n            fileName: \"/Users/doston/Developer/website/theme.config.tsx\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, undefined),\n        loading: \"Qidirilmoqda...\",\n        placeholder: \"Dokumentatsiyadan qidirish\"\n    },\n    editLink: {\n        text: \"GitHub da o'zgartirish kiritish →\"\n    },\n    feedback: {\n        content: \"Savollar? Bizga xat qoldiring →\",\n        labels: \"feedback\"\n    },\n    docsRepositoryBase: \"https://github.com/golang-uz\",\n    sidebar: {\n        titleComponent (param) {\n            let { title , type  } = param;\n            if (type === \"separator\") {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"cursor-default\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/doston/Developer/website/theme.config.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 24\n                }, this);\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: title\n            }, void 0, false);\n        },\n        defaultMenuCollapseLevel: 1,\n        toggleButton: true\n    },\n    footer: {\n        text: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full text-center\",\n            children: \"\\uD83D\\uDC99️ ila ⌨️ yordamida siz uchun!\"\n        }, void 0, false, {\n            fileName: \"/Users/doston/Developer/website/theme.config.tsx\",\n            lineNumber: 49,\n            columnNumber: 13\n        }, undefined)\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZS5jb25maWcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUN0QyxNQUFPQyxRQUFRQSxtQkFBT0EsQ0FBQyw0Q0FBTztBQUs5QiwrREFBZTtJQUNYQyxvQkFBTSw4REFBQ0M7a0JBQU87Ozs7OztJQUNkQyxTQUFTO1FBQ0xDLE1BQU07SUFDVjtJQUNBQyxtQkFBa0I7UUFDZCxNQUFNLEVBQUVDLE9BQU0sRUFBRSxHQUFHUCxzREFBU0E7UUFDNUIsSUFBSU8sV0FBVyxLQUFLO1lBQ2hCLE9BQU8sQ0FFUDtRQUNKLENBQUM7SUFDTDtJQUVBQyxRQUFRO1FBQ0pDLDJCQUNJLDhEQUFDQztZQUFJQyxXQUFVO3NCQUFjOzs7Ozs7UUFHakNDLFNBQVM7UUFDVEMsYUFBYTtJQUNqQjtJQUNBQyxVQUFVO1FBQ05DLE1BQU07SUFDVjtJQUNBQyxVQUFVO1FBQ05DLFNBQVM7UUFDVEMsUUFBUTtJQUNaO0lBQ0FDLG9CQUFvQjtJQUNwQkMsU0FBUztRQUNMQyxnQkFBZSxLQUFlLEVBQUU7Z0JBQWpCLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFLEdBQWY7WUFDWCxJQUFJQSxTQUFTLGFBQWE7Z0JBQ3RCLHFCQUFPLDhEQUFDQztvQkFBS2IsV0FBVTs4QkFBa0JXOzs7Ozs7WUFDN0MsQ0FBQztZQUNELHFCQUFPOzBCQUFHQTs7UUFDZDtRQUNBRywwQkFBMEI7UUFDMUJDLGNBQWMsSUFBSTtJQUN0QjtJQUNBQyxRQUFRO1FBQ0paLG9CQUNJLDhEQUFDTDtZQUFJQyxXQUFVO3NCQUFxQjs7Ozs7O0lBSTVDO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi90aGVtZS5jb25maWcudHN4P2I4ODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbG9nbzogPHN0cm9uZz5Hb2xhbmcgVXpiZWtpc3Rhbjwvc3Ryb25nPixcbiAgICBwcm9qZWN0OiB7XG4gICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vZ29sYW5nLXV6JyxcbiAgICB9LFxuICAgIHVzZU5leHRTZW9Qcm9wcygpIHtcbiAgICAgICAgY29uc3QgeyBhc1BhdGggfSA9IHVzZVJvdXRlcigpO1xuICAgICAgICBpZiAoYXNQYXRoICE9PSBcIi9cIikge1xuICAgICAgICAgICAgcmV0dXJuIHtcblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzZWFyY2g6IHtcbiAgICAgICAgZW1wdHlSZXN1bHQ6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5IZWNoIG5hcnNhIHRvcGlsbWFkaTwvZGl2PlxuICAgICAgICApLFxuXG4gICAgICAgIGxvYWRpbmc6IFwiUWlkaXJpbG1vcWRhLi4uXCIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIkRva3VtZW50YXRzaXlhZGFuIHFpZGlyaXNoXCIsXG4gICAgfSxcbiAgICBlZGl0TGluazoge1xuICAgICAgICB0ZXh0OiBcIkdpdEh1YiBkYSBvJ3pnYXJ0aXJpc2gga2lyaXRpc2gg4oaSXCIsXG4gICAgfSxcbiAgICBmZWVkYmFjazoge1xuICAgICAgICBjb250ZW50OiBcIlNhdm9sbGFyPyBCaXpnYSB4YXQgcW9sZGlyaW5nIOKGklwiLFxuICAgICAgICBsYWJlbHM6IFwiZmVlZGJhY2tcIixcbiAgICB9LFxuICAgIGRvY3NSZXBvc2l0b3J5QmFzZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9nb2xhbmctdXonLFxuICAgIHNpZGViYXI6IHtcbiAgICAgICAgdGl0bGVDb21wb25lbnQoeyB0aXRsZSwgdHlwZSB9KSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJzZXBhcmF0b3JcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItZGVmYXVsdFwiPnt0aXRsZX08L3NwYW4+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDw+e3RpdGxlfTwvPjtcbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdE1lbnVDb2xsYXBzZUxldmVsOiAxLFxuICAgICAgICB0b2dnbGVCdXR0b246IHRydWUsXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgICAgdGV4dDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICDwn5KZ77iPIGlsYSDijKjvuI8geW9yZGFtaWRhIHNpeiB1Y2h1biFcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApLFxuICAgIH0sXG59XG5cblxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwibG9nbyIsInN0cm9uZyIsInByb2plY3QiLCJsaW5rIiwidXNlTmV4dFNlb1Byb3BzIiwiYXNQYXRoIiwic2VhcmNoIiwiZW1wdHlSZXN1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJsb2FkaW5nIiwicGxhY2Vob2xkZXIiLCJlZGl0TGluayIsInRleHQiLCJmZWVkYmFjayIsImNvbnRlbnQiLCJsYWJlbHMiLCJkb2NzUmVwb3NpdG9yeUJhc2UiLCJzaWRlYmFyIiwidGl0bGVDb21wb25lbnQiLCJ0aXRsZSIsInR5cGUiLCJzcGFuIiwiZGVmYXVsdE1lbnVDb2xsYXBzZUxldmVsIiwidG9nZ2xlQnV0dG9uIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./theme.config.tsx\n"));

/***/ })

});