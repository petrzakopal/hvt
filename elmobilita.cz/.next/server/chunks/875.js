"use strict";
exports.id = 875;
exports.ids = [875];
exports.modules = {

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
    return text.toLowerCase().normalize("NFD")// .replace(/[\u0300-\u036f]/g, "") // same as following but in ascii probably
    .replace(/[^a-z0-9 ]/g, "").replace(/[ ]/g, "-");
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


/***/ })

};
;