"use strict";
(() => {
var exports = {};
exports.id = 79;
exports.ids = [79];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewsLetterSubscribe)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @version 0.1
 * Documentation for API NewsLetterSubscribe
 * Comment:
 * Use: Used to add subscriber to a list in ecomail app via POST method.
 * API Link: https://ecomailczv2.docs.apiary.io/#reference/lists/get-subscriber-by-phone/add-new-subscriber-to-list
 * -------------------------------------------------------------------------------
 *
 */ async function NewsLetterSubscribe(req, res) {
    // not adding this values to request, maybe add it later in a different List - Giveway or whatever.
    // let name = "";
    // let surname = "";
    let email = req.body.email; // getting email property from request to nextjs api
    let url = process.env.ECOMAIL_PRODUCTION_URL + "/lists/" + process.env.ECOMAIL_LIST_ID + "/subscribe"; // constructing POST method URL as it is presented in documentation
    // better save your URLS in process variables
    // for testing purposes use process.env.ECOMAIL_DEBUGGING_PROXY_URL
    // for production purposses use process.env.ECOMAIL_PRODUCTION_URL
    try {
        await axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: "post",
            headers: {
                key: process.env.ECOMAIL_API_KEY
            },
            url: url,
            data: {
                subscriber_data: {
                    email: email
                }
            }
        }).then((response)=>{
            // logging out response
            // only for testing purposes
            // console.log("Status: ", response.status);
            // console.log("Headers: ", response.headers);
            // console.log("Response: ", response.data);
            res.status(response.status).send(); // sending only status from Ecomail API response to my function which called my nextJS API
        });
    } catch (e) {
        // console.log("There was an error.");
        res.status(e.status).send(); // Sending status of Ecomail API response to my nextjs app function which called my nextjs api endpoint
    // console.log(e); // just logging out error
    }
// just for outputs for testing purposes - to show how outputs can be used
// res.status(520);
// res.send("hello there!");
// res.send("test");
// res.status(400).send();
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3965));
module.exports = __webpack_exports__;

})();