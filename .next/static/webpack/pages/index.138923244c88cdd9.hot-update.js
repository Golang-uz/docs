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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    logo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Golang Uzbekistan\"\n    }, void 0, false, {\n        fileName: \"/Users/doston/Developer/website/theme.config.tsx\",\n        lineNumber: 7,\n        columnNumber: 11\n    }, undefined),\n    project: {\n        link: \"https://github.com/golang-uz\"\n    },\n    useNextSeoProps () {\n        const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n        if (asPath !== \"/\") {\n            return {\n            };\n        }\n    },\n    search: {\n        emptyResult: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: \"Hech narsa topilmadi\"\n        }, void 0, false, {\n            fileName: \"/Users/doston/Developer/website/theme.config.tsx\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, undefined),\n        loading: \"Qidirilmoqda...\",\n        placeholder: \"Dokumentatsiyadan qidirish\"\n    },\n    editLink: {\n        text: \"GitHub da o'zgartirish kiritish →\"\n    },\n    feedback: {\n        content: \"Savollar? Bizga xat qoldiring →\",\n        labels: \"feedback\"\n    },\n    docsRepositoryBase: \"https://github.com/golang-uz\",\n    // sidebar: {\n    //     titleComponent({ title, type }) {\n    //         if (type === \"separator\") {\n    //             return <span className=\"cursor-default\">{title}</span>;\n    //         }\n    //         return <>{title}</>;\n    //     },\n    //     defaultMenuCollapseLevel: 1,\n    //     toggleButton: true,\n    // },\n    footer: {\n        text: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full text-center\",\n            children: \"\\uD83D\\uDC99️ ila ⌨️ yordamida siz uchun!\"\n        }, void 0, false, {\n            fileName: \"/Users/doston/Developer/website/theme.config.tsx\",\n            lineNumber: 48,\n            columnNumber: 13\n        }, undefined)\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZS5jb25maWcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUt0QywrREFBZTtJQUNYQyxvQkFBTSw4REFBQ0M7a0JBQUs7Ozs7OztJQUNaQyxTQUFTO1FBQ0xDLE1BQU07SUFDVjtJQUNBQyxtQkFBa0I7UUFDZCxNQUFNLEVBQUVDLE9BQU0sRUFBRSxHQUFHTixzREFBU0E7UUFDNUIsSUFBSU0sV0FBVyxLQUFLO1lBQ2hCLE9BQU87WUFFUDtRQUNKLENBQUM7SUFDTDtJQUVBQyxRQUFRO1FBQ0pDLDJCQUNJLDhEQUFDQztZQUFJQyxXQUFVO3NCQUFjOzs7Ozs7UUFHakNDLFNBQVM7UUFDVEMsYUFBYTtJQUNqQjtJQUNBQyxVQUFVO1FBQ05DLE1BQU07SUFDVjtJQUNBQyxVQUFVO1FBQ05DLFNBQVM7UUFDVEMsUUFBUTtJQUNaO0lBQ0FDLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLHNDQUFzQztJQUN0QyxzRUFBc0U7SUFDdEUsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixTQUFTO0lBQ1QsbUNBQW1DO0lBQ25DLDBCQUEwQjtJQUMxQixLQUFLO0lBQ0xDLFFBQVE7UUFDSkwsb0JBQ0ksOERBQUNMO1lBQUlDLFdBQVU7c0JBQXFCOzs7Ozs7SUFJNUM7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3RoZW1lLmNvbmZpZy50c3g/Yjg4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBsb2dvOiA8c3Bhbj5Hb2xhbmcgVXpiZWtpc3Rhbjwvc3Bhbj4sXG4gICAgcHJvamVjdDoge1xuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2dvbGFuZy11eicsXG4gICAgfSxcbiAgICB1c2VOZXh0U2VvUHJvcHMoKSB7XG4gICAgICAgIGNvbnN0IHsgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKTtcbiAgICAgICAgaWYgKGFzUGF0aCAhPT0gXCIvXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLy8gdGl0bGVUZW1wbGF0ZTogXCIlLUdvXCIsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNlYXJjaDoge1xuICAgICAgICBlbXB0eVJlc3VsdDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkhlY2ggbmFyc2EgdG9waWxtYWRpPC9kaXY+XG4gICAgICAgICksXG5cbiAgICAgICAgbG9hZGluZzogXCJRaWRpcmlsbW9xZGEuLi5cIixcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiRG9rdW1lbnRhdHNpeWFkYW4gcWlkaXJpc2hcIixcbiAgICB9LFxuICAgIGVkaXRMaW5rOiB7XG4gICAgICAgIHRleHQ6IFwiR2l0SHViIGRhIG8nemdhcnRpcmlzaCBraXJpdGlzaCDihpJcIixcbiAgICB9LFxuICAgIGZlZWRiYWNrOiB7XG4gICAgICAgIGNvbnRlbnQ6IFwiU2F2b2xsYXI/IEJpemdhIHhhdCBxb2xkaXJpbmcg4oaSXCIsXG4gICAgICAgIGxhYmVsczogXCJmZWVkYmFja1wiLFxuICAgIH0sXG4gICAgZG9jc1JlcG9zaXRvcnlCYXNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2dvbGFuZy11eicsXG4gICAgLy8gc2lkZWJhcjoge1xuICAgIC8vICAgICB0aXRsZUNvbXBvbmVudCh7IHRpdGxlLCB0eXBlIH0pIHtcbiAgICAvLyAgICAgICAgIGlmICh0eXBlID09PSBcInNlcGFyYXRvclwiKSB7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1kZWZhdWx0XCI+e3RpdGxlfTwvc3Bhbj47XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICByZXR1cm4gPD57dGl0bGV9PC8+O1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBkZWZhdWx0TWVudUNvbGxhcHNlTGV2ZWw6IDEsXG4gICAgLy8gICAgIHRvZ2dsZUJ1dHRvbjogdHJ1ZSxcbiAgICAvLyB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgICB0ZXh0OiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIPCfkpnvuI8gaWxhIOKMqO+4jyB5b3JkYW1pZGEgc2l6IHVjaHVuIVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICksXG4gICAgfSxcbn1cblxuXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwibG9nbyIsInNwYW4iLCJwcm9qZWN0IiwibGluayIsInVzZU5leHRTZW9Qcm9wcyIsImFzUGF0aCIsInNlYXJjaCIsImVtcHR5UmVzdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwibG9hZGluZyIsInBsYWNlaG9sZGVyIiwiZWRpdExpbmsiLCJ0ZXh0IiwiZmVlZGJhY2siLCJjb250ZW50IiwibGFiZWxzIiwiZG9jc1JlcG9zaXRvcnlCYXNlIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./theme.config.tsx\n"));

/***/ })

});