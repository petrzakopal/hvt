"use strict";
exports.id = 382;
exports.ids = [382];
exports.modules = {

/***/ 4809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Fact)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__);


const Fact = ({ children , color , header , description , copyToClipboard , enableCopyToClipboard ,  })=>{
    let FactDesign;
    let ToolTipDesign;
    let ClipBoardContent;
    if (copyToClipboard == "content") {
        ClipBoardContent = children.props.children;
    } else {
        ClipBoardContent = copyToClipboard;
    }
    switch(color){
        case "primary":
            FactDesign = "bg-primary-accent/30 border-2 border-primary-accent";
            ToolTipDesign = "border-[1px] border-zinc-50";
            break;
        case "secondary":
            FactDesign = "bg-secondary-accent/30 border-2 border-secondary-accent";
            ToolTipDesign = "border-2 border-secondary-accent";
            break;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `relative fact-wrapper grid grid-cols-1 gap-y-2 w-full text-zinc-900 dark:text-zinc-50 rounded-lg px-4 py-3 ${FactDesign}`,
            children: [
                enableCopyToClipboard == "true" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute right-4 top-2 cursor-pointer peer",
                            onClick: ()=>{
                                navigator.clipboard.writeText(ClipBoardContent);
                                console.log(ClipBoardContent);
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__.DocumentDuplicateIcon, {
                                className: "w-5 h-5"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `absolute -right-2 top-8 hidden peer-hover:block z-10 py-2 px-3 text-sm font-medium text-zinc-50 dark:text-zinc-50 bg-zinc-900 dark:bg-zinc-900 rounded-lg shadow-sm opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ${ToolTipDesign} flex flex-col items-center justify-center z-[2] mt-1`,
                            children: "Kop\xedrovat"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            className: "absolute w-6 h-6 z-[1] text-zinc-900 dark:text-zinc-900 fill-current stroke-zinc-50 right-5 top-7 hidden peer-hover:block opacity-0 peer-hover:opacity-100 transition-opacity duration-300",
                            width: "8",
                            height: "8",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                x: "12",
                                y: "-10",
                                width: "8",
                                height: "8",
                                transform: "rotate(45)"
                            })
                        })
                    ]
                }) : "",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "fact-header flex flex-col",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-2xl font-bold",
                            children: header
                        }),
                        description ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-sm italic text-zinc-200 dark:text-zinc-200",
                                children: description
                            })
                        }) : ""
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fact-text",
                    children: children
                })
            ]
        })
    });
};


/***/ }),

/***/ 6875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H2": () => (/* binding */ H2),
/* harmony export */   "H3": () => (/* binding */ H3),
/* harmony export */   "H4": () => (/* binding */ H4),
/* harmony export */   "H5": () => (/* binding */ H5),
/* harmony export */   "H6": () => (/* binding */ H6)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function getAnchor(text) {
    return text.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/[ ]/g, "-");
}
const H2 = ({ children  })=>{
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        id: anchor,
        children: children
    });
};
const H3 = ({ children  })=>{
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
        id: anchor,
        children: children
    });
};
const H4 = ({ children  })=>{
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
        id: anchor,
        children: children
    });
};
const H5 = ({ children  })=>{
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
        id: anchor,
        children: children
    });
};
const H6 = ({ children  })=>{
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
        id: anchor,
        children: children
    });
};


/***/ }),

/***/ 2879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ Post),
/* harmony export */   "T": () => (/* binding */ Citation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8871);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Post = ({ children  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const highlight = async ()=>{
            prismjs__WEBPACK_IMPORTED_MODULE_1___default().highlightAll(); // <--- prepare Prism
        };
        highlight(); // <--- call the async function
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "post w-full",
            children: children
        })
    });
};
const Citation = ({ children , href  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: href,
            className: "citation",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "",
                children: children
            })
        })
    });
};


/***/ })

};
;