(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 454:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js):\nCssSyntaxError\n\n(1:1) Selector \"body\" is not pure (pure selectors must contain at least one local class or id)\n\n\u001b[1m\u001b[31m>\u001b[39m\u001b[22m\u001b[90m 1 | \u001b[39mbody\u001b[33m{\u001b[39mbackground-color\u001b[33m:\u001b[39m\u001b[35m#000\u001b[39m\u001b[33m;\u001b[39mdisplay\u001b[33m:\u001b[39mflex\u001b[33m;\u001b[39mjustify-content\u001b[33m:\u001b[39mcenter\u001b[33m;\u001b[39malign-items\u001b[33m:\u001b[39mcenter\u001b[33m;\u001b[39mheight\u001b[33m:\u001b[39m100vh\u001b[33m;\u001b[39mmargin\u001b[33m:\u001b[39m0\u001b[33m;\u001b[39moverflow\u001b[33m:\u001b[39mhidden\u001b[33m}\u001b[39m\u001b[35m#animationCanvas\u001b[39m\u001b[33m{\u001b[39mdisplay\u001b[33m:\u001b[39mblock\u001b[33m}\u001b[39m\n \u001b[90m   | \u001b[39m\u001b[1m\u001b[31m^\u001b[39m\u001b[22m\n");

/***/ }),

/***/ 217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// NAMESPACE OBJECT: ./utils/dynamicGridTypography.tsx
var dynamicGridTypography_namespaceObject = {};
__webpack_require__.r(dynamicGridTypography_namespaceObject);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Layout.tsx
var Layout = __webpack_require__(391);
;// CONCATENATED MODULE: ./utils/dynamicGridTypography.tsx
const canvas = document.getElementById("animationCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 200;
canvas.height = 200;
const gridWidth = 5;
const gridHeight = 10;
const cellSize = 20;
const letterU = (/* unused pure expression or super */ null && ([
    [
        1,
        1,
        1,
        1,
        1
    ],
    [
        1,
        0,
        0,
        0,
        1
    ],
    [
        1,
        0,
        0,
        0,
        1
    ],
    [
        1,
        0,
        0,
        0,
        1
    ],
    [
        1,
        0,
        0,
        0,
        1
    ],
    [
        1,
        0,
        0,
        0,
        1
    ],
    [
        1,
        0,
        0,
        0,
        1
    ],
    [
        1,
        0,
        0,
        0,
        1
    ],
    [
        1,
        0,
        0,
        0,
        1
    ],
    [
        1,
        1,
        1,
        1,
        1
    ]
]));
function drawCell(x, y, cellState) {
    ctx.fillStyle = cellState ? "#ffffff" : "#000000";
    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
}
function animateLetter() {
    for(let y = 0; y < gridHeight; y++){
        for(let x = 0; x < gridWidth; x++){
            const cellState = Math.random() > 0.5 ? letterU[y][x] : 0;
            drawCell(x, y, cellState);
        }
    }
}
/* harmony default export */ const dynamicGridTypography = ((/* unused pure expression or super */ null && (animateLetter)));

// EXTERNAL MODULE: ./styles/dynamicGridTypography.module.scss
var dynamicGridTypography_module = __webpack_require__(454);
var dynamicGridTypography_module_default = /*#__PURE__*/__webpack_require__.n(dynamicGridTypography_module);
;// CONCATENATED MODULE: ./pages/index.tsx






const IndexPage = ()=>{
    external_react_default().useEffect(()=>{
        (0,dynamicGridTypography_namespaceObject.dynamicGridTypography)();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        title: "Home | Next.js + TypeScript Example",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: (dynamicGridTypography_module_default()).header,
                children: /*#__PURE__*/ jsx_runtime_.jsx("canvas", {
                    id: "animationCanvas"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Hello Next.js \uD83D\uDC4B"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/about",
                    children: "About"
                })
            })
        ]
    });
};
/* harmony default export */ const pages = (IndexPage);


/***/ }),

/***/ 280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [664,391], () => (__webpack_exec__(217)));
module.exports = __webpack_exports__;

})();