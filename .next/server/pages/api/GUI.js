"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/GUI";
exports.ids = ["pages/api/GUI"];
exports.modules = {

/***/ "(api)/./pages/api/GUI/index.js":
/*!********************************!*\
  !*** ./pages/api/GUI/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    const fetchOptions = {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Access-Control-Request-Headers\": \"*\",\n            \"api-key\": \"gfVZxqWHUgLfnRox7AkuzwZKIirRiCUCIfE31dKvGUPO6N3Gc2cb4LMwd6rT2f4\"\n        }\n    };\n    const fetchBody = {\n        dataSource: process.env.MONGODB_DATA_SOURCE,\n        database: \"BAJAsecDB\",\n        collection: \"ThreatConfidence\"\n    };\n    const baseUrl = \"https://us-east-2.aws.data.mongodb-api.com/app/data-mkrnx/endpoint/data/v1\";\n    try {\n        switch(req.method){\n            case \"GET\":\n                const readData = await fetch(\"https://us-east-2.aws.data.mongodb-api.com/app/data-mkrnx/endpoint/data/v1/find\");\n        }\n    } catch (error) {\n        console.error(error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvR1VJL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxlQUFlQSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFDO0lBQzNDLE1BQU1DLFlBQVksR0FBRTtRQUNoQkMsTUFBTSxFQUFFLE1BQU07UUFDZEMsT0FBTyxFQUFFO1lBQ0wsY0FBYyxFQUFFLGtCQUFrQjtZQUNsQyxnQ0FBZ0MsRUFBRSxHQUFHO1lBQ3JDLFNBQVMsRUFBRSxpRUFBaUU7U0FDL0U7S0FDSjtJQUNELE1BQU1DLFNBQVMsR0FBRztRQUNkQyxVQUFVLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxtQkFBbUI7UUFDM0NDLFFBQVEsRUFBRSxXQUFXO1FBQ3JCQyxVQUFVLEVBQUUsa0JBQWtCO0tBQ2pDO0lBQ0QsTUFBTUMsT0FBTyxHQUFHLDRFQUE0RTtJQUU1RixJQUFHO1FBQ0MsT0FBUVosR0FBRyxDQUFDRyxNQUFNO1lBQ2QsS0FBSyxLQUFLO2dCQUNOLE1BQU1VLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsaUZBQWlGLENBQUc7U0FHeEg7SUFDTCxFQUFDLE9BQU9DLEtBQUssRUFBQztRQUNWQyxPQUFPLENBQUNELEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUM7SUFFekIsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWphLXNlY3VyaXR5Ly4vcGFnZXMvYXBpL0dVSS9pbmRleC5qcz85YTE4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpe1xyXG4gICAgY29uc3QgZmV0Y2hPcHRpb25zPSB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLVJlcXVlc3QtSGVhZGVyc1wiOiBcIipcIixcclxuICAgICAgICAgICAgXCJhcGkta2V5XCI6IFwiZ2ZWWnhxV0hVZ0xmblJveDdBa3V6d1pLSWlyUmlDVUNJZkUzMWRLdkdVUE82TjNHYzJjYjRMTXdkNnJUMmY0XCIsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb25zdCBmZXRjaEJvZHkgPSB7XHJcbiAgICAgICAgZGF0YVNvdXJjZTogcHJvY2Vzcy5lbnYuTU9OR09EQl9EQVRBX1NPVVJDRSxcclxuICAgICAgICBkYXRhYmFzZTogJ0JBSkFzZWNEQicsXHJcbiAgICAgICAgY29sbGVjdGlvbjogJ1RocmVhdENvbmZpZGVuY2UnXHJcbiAgICB9O1xyXG4gICAgY29uc3QgYmFzZVVybCA9ICdodHRwczovL3VzLWVhc3QtMi5hd3MuZGF0YS5tb25nb2RiLWFwaS5jb20vYXBwL2RhdGEtbWtybngvZW5kcG9pbnQvZGF0YS92MSc7XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICAgIHN3aXRjaCAocmVxLm1ldGhvZCl7XHJcbiAgICAgICAgICAgIGNhc2UgXCJHRVRcIjpcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWREYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtZWFzdC0yLmF3cy5kYXRhLm1vbmdvZGItYXBpLmNvbS9hcHAvZGF0YS1ta3JueC9lbmRwb2ludC9kYXRhL3YxL2ZpbmQnICwpO1xyXG4gICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9XHJcbiAgICB9Y2F0Y2ggKGVycm9yKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJmZXRjaE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiZmV0Y2hCb2R5IiwiZGF0YVNvdXJjZSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX0RBVEFfU09VUkNFIiwiZGF0YWJhc2UiLCJjb2xsZWN0aW9uIiwiYmFzZVVybCIsInJlYWREYXRhIiwiZmV0Y2giLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/GUI/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/GUI/index.js"));
module.exports = __webpack_exports__;

})();