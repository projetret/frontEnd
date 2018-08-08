(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-full-layout-page-full-pages-module"],{

/***/ "./src/app/pages/full-layout-page/full-layout-page.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/full-layout-page/full-layout-page.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-12\">\n\t\t<!-- Kick start -->\n\t\t<div id=\"kick-start\" class=\"card\">\n\t\t\t\n\t\t</div>\n\t\t<!--/ Kick start -->\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-12\">\n\t\t<!-- Simple Card-->\n\t\t<div id=\"simple-card\" class=\"card\">\n\t\t\t\n\t\t</div>\n\t\t<!--/ Simple Card-->\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/pages/full-layout-page/full-layout-page.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/full-layout-page/full-layout-page.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/full-layout-page/full-layout-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/full-layout-page/full-layout-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: FullLayoutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutPageComponent", function() { return FullLayoutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FullLayoutPageComponent = /** @class */ (function () {
    function FullLayoutPageComponent() {
    }
    FullLayoutPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-full-layout-page',
            template: __webpack_require__(/*! ./full-layout-page.component.html */ "./src/app/pages/full-layout-page/full-layout-page.component.html"),
            styles: [__webpack_require__(/*! ./full-layout-page.component.scss */ "./src/app/pages/full-layout-page/full-layout-page.component.scss")]
        })
    ], FullLayoutPageComponent);
    return FullLayoutPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/full-layout-page/full-pages-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/full-layout-page/full-pages-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: FullPagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullPagesRoutingModule", function() { return FullPagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_full_layout_page_full_layout_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/full-layout-page/full-layout-page.component */ "./src/app/pages/full-layout-page/full-layout-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: app_pages_full_layout_page_full_layout_page_component__WEBPACK_IMPORTED_MODULE_2__["FullLayoutPageComponent"],
        data: {
            title: 'Full Layout Page'
        },
    }
];
var FullPagesRoutingModule = /** @class */ (function () {
    function FullPagesRoutingModule() {
    }
    FullPagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], FullPagesRoutingModule);
    return FullPagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/full-layout-page/full-pages.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/full-layout-page/full-pages.module.ts ***!
  \*************************************************************/
/*! exports provided: FullPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullPagesModule", function() { return FullPagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _full_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./full-pages-routing.module */ "./src/app/pages/full-layout-page/full-pages-routing.module.ts");
/* harmony import */ var _full_layout_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./full-layout-page.component */ "./src/app/pages/full-layout-page/full-layout-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FullPagesModule = /** @class */ (function () {
    function FullPagesModule() {
    }
    FullPagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _full_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["FullPagesRoutingModule"]
            ],
            declarations: [
                _full_layout_page_component__WEBPACK_IMPORTED_MODULE_3__["FullLayoutPageComponent"]
            ]
        })
    ], FullPagesModule);
    return FullPagesModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-full-layout-page-full-pages-module.js.map