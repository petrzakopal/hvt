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

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n/**\n *\n * Documentation for component FooterLink\n * Comment: Used as a default footer link.\n * -------------------------------------------------------------------------------\n * linkName - name of the link text - example: \"Lorem Ipsum\"\n * linkUrl - url link to linking page - example: \"/foobar\"\n */ // Footer basic link\nvar FooterLink = function(param) {\n    var linkName = param.linkName, linkUrl = param.linkUrl, rel = param.rel, target = param.target;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: linkUrl,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: \"cursor-pointer lg:text-2xl text-2xl text-zinc-900 dark:text-zinc-50 dark:hover:text-platinum dark:hover:text-primary-accent hover:text-primary-accent font-semibold transition-colors easy-in-out\",\n            rel: rel,\n            target: target,\n            children: linkName\n        }, void 0, false, {\n            fileName: \"/Users/petrzakopal/Documents/Git/hvt/elmobilita.cz/components/footer.js\",\n            lineNumber: 16,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/petrzakopal/Documents/Git/hvt/elmobilita.cz/components/footer.js\",\n        lineNumber: 15,\n        columnNumber: 3\n    }, _this);\n};\n_c = FooterLink;\n/**\n *\n * Documentation for component FooterLinkList\n * Comment: Basically FooterLink wrapped in <li> component\n * -------------------------------------------------------------------------------\n * linkName - name of the link text - example: \"Lorem Ipsum\"\n * linkUrl - url link to linking page - example: \"/foobar\"\n */ // Footer basic link wrapped in a list to get cleaner text in Footer()\nvar FooterLinkList = function(param) {\n    var linkName = param.linkName, linkUrl = param.linkUrl, rel = param.rel, target = param.target;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterLink, {\n            linkName: linkName,\n            linkUrl: linkUrl,\n            rel: rel,\n            target: target\n        }, void 0, false, {\n            fileName: \"/Users/petrzakopal/Documents/Git/hvt/elmobilita.cz/components/footer.js\",\n            lineNumber: 40,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/petrzakopal/Documents/Git/hvt/elmobilita.cz/components/footer.js\",\n        lineNumber: 39,\n        columnNumber: 3\n    }, _this);\n};\n_c1 = FooterLinkList;\nvar ScrollToTopHandler = function() {\n    window.scrollTo({\n        top: 0,\n        behavior: \"smooth\"\n    });\n};\n_c2 = ScrollToTopHandler;\n/**\n *\n * Documentation for component Footer\n * Comment: Used as a default page footer.\n * -------------------------------------------------------------------------------\n */ // Main exported function\nfunction Footer() {\n    return(// Main footer container\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: \"flex flex-col w-full items-center lg:py-10 py-10 dark:bg-rich-black-lighter z-[99998]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            \"aria-label\": \"Footer Navigation\",\n            role: \"navigation\",\n            className: \"mx-auto lg:w-fit px-5 lg:px-0 flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"columns-container w-full mx-auto flex flex-row items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid lg:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-x-5 gap-y-8 justify-center justify-items-start lg:w-inside-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"footer-column\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"footer-navigation-list mt-3 leading-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterLinkList, {\n                                            linkName: \"T\\xe9mata →\",\n                                            linkUrl: \"/vyber-temat\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/petrzakopal/Documents/Git/hvt/elmobilita.cz/components/footer.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 9\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterLinkList, {\n                                            linkName: \"Autoři →\",\n                                            linkUrl: \"/autori\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/petrzakopal/Documents/Git/hvt/elmobilita.cz/components/footer.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 9\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterLinkList, {\n                                            linkName: \"Zdroje →\",\n                                            linkUrl: \"/zdroje\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/petrzakopal/Documents/Git/hvt/elmobilita.cz/components/footer.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 9\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"cursor-pointer lg:text-2xl text-2xl text-zinc-900 dark:text-zinc-50 dark:hover:text-platinum dark:hover:text-primary-accent hover:text-primary-accent font-semibold transition-colors easy-in-out\",\n                                                onClick: ScrollToTopHandler,\n                                                children: \"Scroll ↑\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/petrzakopal/Documents/Git/hvt/elmobilita.cz/components/footer.js\",\n                                                lineNumber: 86,\n                                                columnNumber: 10\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/petrzakopal/Documents/Git/hvt/elmobilita.cz/components/footer.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 9\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/petrzakopal/Documents/Git/hvt/elmobilita.cz/components/footer.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 8\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/petrzakopal/Documents/Git/hvt/elmobilita.cz/components/footer.js\",\n                                lineNumber: 79,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"footer-column\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"footer-navigation-list mt-3 leading-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterLinkList, {\n                                            linkName: \"GitHub ↗\",\n                                            linkUrl: \"https://github.com/petrzakopal/hvt\",\n                                            rel: \"external\",\n                                            target: \"_blank\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/petrzakopal/Documents/Git/hvt/elmobilita.cz/components/footer.js\",\n                                            lineNumber: 97,\n                                            columnNumber: 9\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterLinkList, {\n                                            linkName: \"ČVUT FEL ↗\",\n                                            linkUrl: \"https://fel.cvut.cz/cz/\",\n                                            rel: \"external\",\n                                            target: \"_blank\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/petrzakopal/Documents/Git/hvt/elmobilita.cz/components/footer.js\",\n                                            lineNumber: 103,\n                                            columnNumber: 9\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/petrzakopal/Documents/Git/hvt/elmobilita.cz/components/footer.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 8\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/petrzakopal/Documents/Git/hvt/elmobilita.cz/components/footer.js\",\n                                lineNumber: 95,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"footer-column items-end flex flex-col justify-end\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterLink, {\n                                    linkName: \"← Domů\",\n                                    linkUrl: \"/\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/petrzakopal/Documents/Git/hvt/elmobilita.cz/components/footer.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 8\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/petrzakopal/Documents/Git/hvt/elmobilita.cz/components/footer.js\",\n                                lineNumber: 112,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/petrzakopal/Documents/Git/hvt/elmobilita.cz/components/footer.js\",\n                        lineNumber: 77,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/petrzakopal/Documents/Git/hvt/elmobilita.cz/components/footer.js\",\n                    lineNumber: 75,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                    className: \"text-left text-zinc-400 text-base mt-5\",\n                    children: [\n                        \"elmobilita.cz 2022 | Všechna\\xa0pr\\xe1va\\xa0vyhrazena.\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/petrzakopal/Documents/Git/hvt/elmobilita.cz/components/footer.js\",\n                            lineNumber: 120,\n                            columnNumber: 6\n                        }, this),\n                        \"Tato str\\xe1nka nevyuž\\xedv\\xe1 Cookies.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/petrzakopal/Documents/Git/hvt/elmobilita.cz/components/footer.js\",\n                    lineNumber: 118,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/petrzakopal/Documents/Git/hvt/elmobilita.cz/components/footer.js\",\n            lineNumber: 68,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/petrzakopal/Documents/Git/hvt/elmobilita.cz/components/footer.js\",\n        lineNumber: 66,\n        columnNumber: 3\n    }, this));\n}\n_c3 = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"FooterLink\");\n$RefreshReg$(_c1, \"FooterLinkList\");\n$RefreshReg$(_c2, \"ScrollToTopHandler\");\n$RefreshReg$(_c3, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvb3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQTZCO0FBQ0s7QUFDbEM7Ozs7Ozs7Q0FPQyxHQUVELG9CQUFvQjtBQUNwQixJQUFNRSxVQUFVLEdBQUcsZ0JBQXdDO1FBQXJDQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLEdBQUcsU0FBSEEsR0FBRyxFQUFFQyxNQUFNLFNBQU5BLE1BQU07SUFDbkQscUJBQ0MsOERBQUNOLGtEQUFJO1FBQUNPLElBQUksRUFBRUgsT0FBTztrQkFDbEIsNEVBQUNJLEdBQUM7WUFDREMsU0FBUyxFQUFDLG1NQUFtTTtZQUM3TUosR0FBRyxFQUFFQSxHQUFHO1lBQ1JDLE1BQU0sRUFBRUEsTUFBTTtzQkFFYkgsUUFBUTs7Ozs7aUJBQ047Ozs7O2FBQ0UsQ0FDTjtBQUNILENBQUM7QUFaS0QsS0FBQUEsVUFBVTtBQWNoQjs7Ozs7OztDQU9DLEdBRUQsc0VBQXNFO0FBQ3RFLElBQU1RLGNBQWMsR0FBRyxnQkFBd0M7UUFBckNQLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsR0FBRyxTQUFIQSxHQUFHLEVBQUVDLE1BQU0sU0FBTkEsTUFBTTtJQUN2RCxxQkFDQyw4REFBQ0ssSUFBRTtrQkFDRiw0RUFBQ1QsVUFBVTtZQUNWQyxRQUFRLEVBQUVBLFFBQVE7WUFDbEJDLE9BQU8sRUFBRUEsT0FBTztZQUNoQkMsR0FBRyxFQUFFQSxHQUFHO1lBQ1JDLE1BQU0sRUFBRUEsTUFBTTs7Ozs7aUJBQ2I7Ozs7O2FBQ0UsQ0FDSjtBQUNILENBQUM7QUFYS0ksTUFBQUEsY0FBYztBQVlwQixJQUFNRSxrQkFBa0IsR0FBRyxXQUFNO0lBQ2hDQyxNQUFNLENBQUNDLFFBQVEsQ0FBQztRQUNmQyxHQUFHLEVBQUUsQ0FBQztRQUNOQyxRQUFRLEVBQUUsUUFBUTtLQUNsQixDQUFDLENBQUM7QUFDSixDQUFDO0FBTEtKLE1BQUFBLGtCQUFrQjtBQU14Qjs7Ozs7Q0FLQyxHQUVELHlCQUF5QjtBQUN6QixTQUFTSyxNQUFNLEdBQUc7SUFDakIsT0FDQyx3QkFBd0I7a0JBQ3hCLDhEQUFDQyxRQUFNO1FBQUNULFNBQVMsRUFBQyx1RkFBdUY7a0JBRXhHLDRFQUFDVSxLQUFHO1lBQ0hDLFlBQVUsRUFBQyxtQkFBbUI7WUFDOUJDLElBQUksRUFBQyxZQUFZO1lBQ2pCWixTQUFTLEVBQUMsNkNBQTZDOzs4QkFJdkQsOERBQUNhLEtBQUc7b0JBQUNiLFNBQVMsRUFBQyw2REFBNkQ7OEJBRTNFLDRFQUFDYSxLQUFHO3dCQUFDYixTQUFTLEVBQUMsb0hBQW9IOzswQ0FFbEksOERBQUNhLEtBQUc7Z0NBQUNiLFNBQVMsRUFBQyxlQUFlOzBDQUM3Qiw0RUFBQ2MsSUFBRTtvQ0FBQ2QsU0FBUyxFQUFDLHVDQUF1Qzs7c0RBQ3BELDhEQUFDQyxjQUFjOzRDQUFDUCxRQUFRLEVBQUUsYUFBVTs0Q0FBRUMsT0FBTyxFQUFDLGNBQWM7Ozs7O2dEQUFHO3NEQUMvRCw4REFBQ00sY0FBYzs0Q0FBQ1AsUUFBUSxFQUFFLFVBQVU7NENBQUVDLE9BQU8sRUFBQyxTQUFTOzs7OztnREFBRztzREFDMUQsOERBQUNNLGNBQWM7NENBQUNQLFFBQVEsRUFBRSxVQUFVOzRDQUFFQyxPQUFPLEVBQUMsU0FBUzs7Ozs7Z0RBQUc7c0RBRTFELDhEQUFDTyxJQUFFO3NEQUNGLDRFQUFDYSxNQUFJO2dEQUNKZixTQUFTLEVBQUMsbU1BQW1NO2dEQUM3TWdCLE9BQU8sRUFBRWIsa0JBQWtCOzBEQUMzQixVQUVEOzs7OztvREFBTzs7Ozs7Z0RBQ0g7Ozs7Ozt3Q0FDRDs7Ozs7b0NBQ0E7MENBQ04sOERBQUNVLEtBQUc7Z0NBQUNiLFNBQVMsRUFBQyxlQUFlOzBDQUM3Qiw0RUFBQ2MsSUFBRTtvQ0FBQ2QsU0FBUyxFQUFDLHVDQUF1Qzs7c0RBQ3BELDhEQUFDQyxjQUFjOzRDQUNkUCxRQUFRLEVBQUUsVUFBVTs0Q0FDcEJDLE9BQU8sRUFBQyxvQ0FBb0M7NENBQzVDQyxHQUFHLEVBQUUsVUFBVTs0Q0FDZkMsTUFBTSxFQUFFLFFBQVE7Ozs7O2dEQUNmO3NEQUNGLDhEQUFDSSxjQUFjOzRDQUNkUCxRQUFRLEVBQUUsWUFBWTs0Q0FDdEJDLE9BQU8sRUFBQyx5QkFBeUI7NENBQ2pDQyxHQUFHLEVBQUUsVUFBVTs0Q0FDZkMsTUFBTSxFQUFFLFFBQVE7Ozs7O2dEQUNmOzs7Ozs7d0NBQ0U7Ozs7O29DQUNBOzBDQUVOLDhEQUFDZ0IsS0FBRztnQ0FBQ2IsU0FBUyxFQUFDLG1EQUFtRDswQ0FFakUsNEVBQUNQLFVBQVU7b0NBQUNDLFFBQVEsRUFBRSxRQUFRO29DQUFFQyxPQUFPLEVBQUUsR0FBRzs7Ozs7d0NBQUk7Ozs7O29DQUMzQzs7Ozs7OzRCQUNEOzs7Ozt3QkFDRDs4QkFDTiw4REFBQ3NCLE9BQUs7b0JBQUNqQixTQUFTLEVBQUMsd0NBQXdDOzt3QkFBQyx3REFFekQ7c0NBQUEsOERBQUNrQixJQUFFOzs7O2dDQUFHO3dCQUFBLDBDQUVQOzs7Ozs7d0JBQVE7Ozs7OztnQkFDSDs7Ozs7WUFDRSxFQUNSO0FBQ0gsQ0FBQztBQS9EUVYsTUFBQUEsTUFBTTtBQWlFZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9vdGVyLmpzP2IxNTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG4vKipcbiAqXG4gKiBEb2N1bWVudGF0aW9uIGZvciBjb21wb25lbnQgRm9vdGVyTGlua1xuICogQ29tbWVudDogVXNlZCBhcyBhIGRlZmF1bHQgZm9vdGVyIGxpbmsuXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBsaW5rTmFtZSAtIG5hbWUgb2YgdGhlIGxpbmsgdGV4dCAtIGV4YW1wbGU6IFwiTG9yZW0gSXBzdW1cIlxuICogbGlua1VybCAtIHVybCBsaW5rIHRvIGxpbmtpbmcgcGFnZSAtIGV4YW1wbGU6IFwiL2Zvb2JhclwiXG4gKi9cblxuLy8gRm9vdGVyIGJhc2ljIGxpbmtcbmNvbnN0IEZvb3RlckxpbmsgPSAoeyBsaW5rTmFtZSwgbGlua1VybCwgcmVsLCB0YXJnZXQgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxMaW5rIGhyZWY9e2xpbmtVcmx9PlxuXHRcdFx0PGFcblx0XHRcdFx0Y2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgbGc6dGV4dC0yeGwgdGV4dC0yeGwgdGV4dC16aW5jLTkwMCBkYXJrOnRleHQtemluYy01MCBkYXJrOmhvdmVyOnRleHQtcGxhdGludW0gZGFyazpob3Zlcjp0ZXh0LXByaW1hcnktYWNjZW50IGhvdmVyOnRleHQtcHJpbWFyeS1hY2NlbnQgZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uLWNvbG9ycyBlYXN5LWluLW91dFwiXG5cdFx0XHRcdHJlbD17cmVsfVxuXHRcdFx0XHR0YXJnZXQ9e3RhcmdldH1cblx0XHRcdD5cblx0XHRcdFx0e2xpbmtOYW1lfVxuXHRcdFx0PC9hPlxuXHRcdDwvTGluaz5cblx0KTtcbn07XG5cbi8qKlxuICpcbiAqIERvY3VtZW50YXRpb24gZm9yIGNvbXBvbmVudCBGb290ZXJMaW5rTGlzdFxuICogQ29tbWVudDogQmFzaWNhbGx5IEZvb3Rlckxpbmsgd3JhcHBlZCBpbiA8bGk+IGNvbXBvbmVudFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogbGlua05hbWUgLSBuYW1lIG9mIHRoZSBsaW5rIHRleHQgLSBleGFtcGxlOiBcIkxvcmVtIElwc3VtXCJcbiAqIGxpbmtVcmwgLSB1cmwgbGluayB0byBsaW5raW5nIHBhZ2UgLSBleGFtcGxlOiBcIi9mb29iYXJcIlxuICovXG5cbi8vIEZvb3RlciBiYXNpYyBsaW5rIHdyYXBwZWQgaW4gYSBsaXN0IHRvIGdldCBjbGVhbmVyIHRleHQgaW4gRm9vdGVyKClcbmNvbnN0IEZvb3RlckxpbmtMaXN0ID0gKHsgbGlua05hbWUsIGxpbmtVcmwsIHJlbCwgdGFyZ2V0IH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8bGk+XG5cdFx0XHQ8Rm9vdGVyTGlua1xuXHRcdFx0XHRsaW5rTmFtZT17bGlua05hbWV9XG5cdFx0XHRcdGxpbmtVcmw9e2xpbmtVcmx9XG5cdFx0XHRcdHJlbD17cmVsfVxuXHRcdFx0XHR0YXJnZXQ9e3RhcmdldH1cblx0XHRcdC8+XG5cdFx0PC9saT5cblx0KTtcbn07XG5jb25zdCBTY3JvbGxUb1RvcEhhbmRsZXIgPSAoKSA9PiB7XG5cdHdpbmRvdy5zY3JvbGxUbyh7XG5cdFx0dG9wOiAwLFxuXHRcdGJlaGF2aW9yOiBcInNtb290aFwiLFxuXHR9KTtcbn07XG4vKipcbiAqXG4gKiBEb2N1bWVudGF0aW9uIGZvciBjb21wb25lbnQgRm9vdGVyXG4gKiBDb21tZW50OiBVc2VkIGFzIGEgZGVmYXVsdCBwYWdlIGZvb3Rlci5cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4vLyBNYWluIGV4cG9ydGVkIGZ1bmN0aW9uXG5mdW5jdGlvbiBGb290ZXIoKSB7XG5cdHJldHVybiAoXG5cdFx0Ly8gTWFpbiBmb290ZXIgY29udGFpbmVyXG5cdFx0PGZvb3RlciBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBpdGVtcy1jZW50ZXIgbGc6cHktMTAgcHktMTAgZGFyazpiZy1yaWNoLWJsYWNrLWxpZ2h0ZXIgei1bOTk5OThdXCI+XG5cdFx0XHR7LyogTmF2aWdhdGlvbiBmb290ZXIgYmxvY2sgKi99XG5cdFx0XHQ8bmF2XG5cdFx0XHRcdGFyaWEtbGFiZWw9XCJGb290ZXIgTmF2aWdhdGlvblwiXG5cdFx0XHRcdHJvbGU9XCJuYXZpZ2F0aW9uXCJcblx0XHRcdFx0Y2xhc3NOYW1lPVwibXgtYXV0byBsZzp3LWZpdCBweC01IGxnOnB4LTAgZmxleCBmbGV4LWNvbFwiXG5cdFx0XHRcdC8vIG90aGVyIG9wdGlvbiBpcyB0byB1c2UgYW5vdGhlciBtb2JpbGUgbGF5b3V0IHdpdGggY2xhc05hbWUgPSBcIm14LWF1dG8gdy04LzEyIGxnOnctYXV0b1wiIGFuZCBpbiBncmlkIG9mIGJsb2NrIG9mIGxpbmtzIGxnOmdhcDoyNCBnYXAtMTRcblx0XHRcdD5cblx0XHRcdFx0ey8qIENvbHVtbnMgY29udGFpbmVyICovfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMtY29udGFpbmVyIHctZnVsbCBteC1hdXRvIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0ey8qIEdyaWQgb2YgYmxvY2sgb2YgbGlua3MgKi99XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy0zIG1kOmdyaWQtY29scy00IGdyaWQtY29scy0yIGdhcC14LTUgZ2FwLXktOCBqdXN0aWZ5LWNlbnRlciBqdXN0aWZ5LWl0ZW1zLXN0YXJ0IGxnOnctaW5zaWRlLWZ1bGxcIj5cblx0XHRcdFx0XHRcdHsvKiBGb290ZXIgZ3JvdXBzIC0gY29sdW1ucyAqL31cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbHVtblwiPlxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZm9vdGVyLW5hdmlnYXRpb24tbGlzdCBtdC0zIGxlYWRpbmctOFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxGb290ZXJMaW5rTGlzdCBsaW5rTmFtZT17XCJUw6ltYXRhIOKGklwifSBsaW5rVXJsPVwiL3Z5YmVyLXRlbWF0XCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9vdGVyTGlua0xpc3QgbGlua05hbWU9e1wiQXV0b8WZaSDihpJcIn0gbGlua1VybD1cIi9hdXRvcmlcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDxGb290ZXJMaW5rTGlzdCBsaW5rTmFtZT17XCJaZHJvamUg4oaSXCJ9IGxpbmtVcmw9XCIvemRyb2plXCIgLz5cblxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGxnOnRleHQtMnhsIHRleHQtMnhsIHRleHQtemluYy05MDAgZGFyazp0ZXh0LXppbmMtNTAgZGFyazpob3Zlcjp0ZXh0LXBsYXRpbnVtIGRhcms6aG92ZXI6dGV4dC1wcmltYXJ5LWFjY2VudCBob3Zlcjp0ZXh0LXByaW1hcnktYWNjZW50IGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbi1jb2xvcnMgZWFzeS1pbi1vdXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtTY3JvbGxUb1RvcEhhbmRsZXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFNjcm9sbCDihpFcblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb2x1bW5cIj5cblx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImZvb3Rlci1uYXZpZ2F0aW9uLWxpc3QgbXQtMyBsZWFkaW5nLThcIj5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9vdGVyTGlua0xpc3Rcblx0XHRcdFx0XHRcdFx0XHRcdGxpbmtOYW1lPXtcIkdpdEh1YiDihpdcIn1cblx0XHRcdFx0XHRcdFx0XHRcdGxpbmtVcmw9XCJodHRwczovL2dpdGh1Yi5jb20vcGV0cnpha29wYWwvaHZ0XCJcblx0XHRcdFx0XHRcdFx0XHRcdHJlbD17XCJleHRlcm5hbFwifVxuXHRcdFx0XHRcdFx0XHRcdFx0dGFyZ2V0PXtcIl9ibGFua1wifVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PEZvb3RlckxpbmtMaXN0XG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5rTmFtZT17XCLEjFZVVCBGRUwg4oaXXCJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5rVXJsPVwiaHR0cHM6Ly9mZWwuY3Z1dC5jei9jei9cIlxuXHRcdFx0XHRcdFx0XHRcdFx0cmVsPXtcImV4dGVybmFsXCJ9XG5cdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ9e1wiX2JsYW5rXCJ9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb2x1bW4gaXRlbXMtZW5kIGZsZXggZmxleC1jb2wganVzdGlmeS1lbmRcIj5cblx0XHRcdFx0XHRcdFx0ey8qIDx1bCBjbGFzc05hbWU9XCJmb290ZXItbmF2aWdhdGlvbi1saXN0IG10LTMgbGVhZGluZy04XCI+PC91bD4gKi99XG5cdFx0XHRcdFx0XHRcdDxGb290ZXJMaW5rIGxpbmtOYW1lPXtcIuKGkCBEb23Fr1wifSBsaW5rVXJsPXtcIi9cIn0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbGVmdCB0ZXh0LXppbmMtNDAwIHRleHQtYmFzZSBtdC01XCI+XG5cdFx0XHRcdFx0ZWxtb2JpbGl0YS5jeiAyMDIyIHwgVsWhZWNobmHCoHByw6F2YcKgdnlocmF6ZW5hLlxuXHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFRhdG8gc3Ryw6Fua2EgbmV2eXXFvsOtdsOhIENvb2tpZXMuXG5cdFx0XHRcdDwvc21hbGw+XG5cdFx0XHQ8L25hdj5cblx0XHQ8L2Zvb3Rlcj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VFZmZlY3QiLCJGb290ZXJMaW5rIiwibGlua05hbWUiLCJsaW5rVXJsIiwicmVsIiwidGFyZ2V0IiwiaHJlZiIsImEiLCJjbGFzc05hbWUiLCJGb290ZXJMaW5rTGlzdCIsImxpIiwiU2Nyb2xsVG9Ub3BIYW5kbGVyIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsIkZvb3RlciIsImZvb3RlciIsIm5hdiIsImFyaWEtbGFiZWwiLCJyb2xlIiwiZGl2IiwidWwiLCJzcGFuIiwib25DbGljayIsInNtYWxsIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/footer.js\n"));

/***/ })

});