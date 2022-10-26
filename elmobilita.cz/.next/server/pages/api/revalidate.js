"use strict";
(() => {
var exports = {};
exports.id = 500;
exports.ids = [500];
exports.modules = {

/***/ 8892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    // Check for secret to confirm this is a valid request.
    if (req.query.key !== process.env.REVALIDATE_API_KEY) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
    try {
        // this should be the actual path not a rewritten path
        await res.revalidate("/news"); // revalidate page with posts displayed
        await res.revalidate("/news/" + req.body.post.current.slug); // revalidate current post (current is needed for ghost structure)
        return res.json({
            revalidated: true
        });
    } catch (err) {
        // If there was an error, Next.js will continue
        // to show the last successfully generated page
        console.log(err);
        return res.status(500).send("Error revalidating");
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8892));
module.exports = __webpack_exports__;

})();