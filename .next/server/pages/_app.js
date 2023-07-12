(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 323:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Inter_0ec1f4', '__Inter_Fallback_0ec1f4'","fontStyle":"normal"},
	"className": "__className_0ec1f4",
	"variable": "__variable_0ec1f4"
};


/***/ }),

/***/ 2434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/pages/_app.tsx","import":"Inter","arguments":[{"subsets":["latin"],"display":"swap","variable":"--font-inter"}],"variableName":"inter"}
var _app_tsx_import_Inter_arguments_subsets_latin_display_swap_variable_font_inter_variableName_inter_ = __webpack_require__(323);
var _app_tsx_import_Inter_arguments_subsets_latin_display_swap_variable_font_inter_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(_app_tsx_import_Inter_arguments_subsets_latin_display_swap_variable_font_inter_variableName_inter_);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: ./src/styles/globals.sass
var globals = __webpack_require__(5802);
;// CONCATENATED MODULE: ./src/pages/_app.tsx




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: style_default().dynamic([
            [
                "b38027c8d51dcc52",
                [
                    (_app_tsx_import_Inter_arguments_subsets_latin_display_swap_variable_font_inter_variableName_inter_default()).style.fontFamily
                ]
            ]
        ]) + " " + `${(_app_tsx_import_Inter_arguments_subsets_latin_display_swap_variable_font_inter_variableName_inter_default()).variable} font-sans`,
        children: [
            jsx_runtime_.jsx((style_default()), {
                id: "b38027c8d51dcc52",
                dynamic: [
                    (_app_tsx_import_Inter_arguments_subsets_latin_display_swap_variable_font_inter_variableName_inter_default()).style.fontFamily
                ],
                children: `html{font-family:${(_app_tsx_import_Inter_arguments_subsets_latin_display_swap_variable_font_inter_variableName_inter_default()).style.fontFamily}}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps,
                className: style_default().dynamic([
                    [
                        "b38027c8d51dcc52",
                        [
                            (_app_tsx_import_Inter_arguments_subsets_latin_display_swap_variable_font_inter_variableName_inter_default()).style.fontFamily
                        ]
                    ]
                ]) + " " + (pageProps && pageProps.className != null && pageProps.className || "")
            })
        ]
    });
}


/***/ }),

/***/ 5802:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2434));
module.exports = __webpack_exports__;

})();