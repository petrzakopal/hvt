"use strict";
(() => {
var exports = {};
exports.id = 94;
exports.ids = [94];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 7413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SlackNotificationHandler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @version 0.1
 * Documentation for API SlackNotificationHandler
 * Comment: API endpoint for contacting Slack Webhook to send messages.
 * Use:
 * -------------------------------------------------------------------------------
 *
 */ async function SlackNotificationHandler(req, res) {
    try {
        await axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            url: process.env.SLACK_NOTIFICATION_WEBHOOK_URL,
            data: req.body
        }).then((response)=>{
        // console.log(response);
        });
    } catch (e) {
    // console.log(e);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7413));
module.exports = __webpack_exports__;

})();