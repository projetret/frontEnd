(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-client-privateclient-privateclient-module"],{

/***/ "./src/app/admin/client/privateclient/privateclient-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/client/privateclient/privateclient-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: PrivateclientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateclientRoutingModule", function() { return PrivateclientRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _privateclient_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./privateclient.component */ "./src/app/admin/client/privateclient/privateclient.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _privateclient_component__WEBPACK_IMPORTED_MODULE_2__["PrivateclientComponent"]
    }
];
var PrivateclientRoutingModule = /** @class */ (function () {
    function PrivateclientRoutingModule() {
    }
    PrivateclientRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PrivateclientRoutingModule);
    return PrivateclientRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/client/privateclient/privateclient.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/admin/client/privateclient/privateclient.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  privateclient works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/client/privateclient/privateclient.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/admin/client/privateclient/privateclient.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/client/privateclient/privateclient.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/client/privateclient/privateclient.component.ts ***!
  \***********************************************************************/
/*! exports provided: PrivateclientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateclientComponent", function() { return PrivateclientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivateclientComponent = /** @class */ (function () {
    function PrivateclientComponent() {
    }
    PrivateclientComponent.prototype.ngOnInit = function () {
    };
    PrivateclientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privateclient',
            template: __webpack_require__(/*! ./privateclient.component.html */ "./src/app/admin/client/privateclient/privateclient.component.html"),
            styles: [__webpack_require__(/*! ./privateclient.component.scss */ "./src/app/admin/client/privateclient/privateclient.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivateclientComponent);
    return PrivateclientComponent;
}());



/***/ }),

/***/ "./src/app/admin/client/privateclient/privateclient.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/client/privateclient/privateclient.module.ts ***!
  \********************************************************************/
/*! exports provided: PrivateclientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateclientModule", function() { return PrivateclientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _privateclient_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./privateclient-routing.module */ "./src/app/admin/client/privateclient/privateclient-routing.module.ts");
/* harmony import */ var _privateclient_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./privateclient.component */ "./src/app/admin/client/privateclient/privateclient.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PrivateclientModule = /** @class */ (function () {
    function PrivateclientModule() {
    }
    PrivateclientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _privateclient_routing_module__WEBPACK_IMPORTED_MODULE_2__["PrivateclientRoutingModule"]
            ],
            declarations: [_privateclient_component__WEBPACK_IMPORTED_MODULE_3__["PrivateclientComponent"]]
        })
    ], PrivateclientModule);
    return PrivateclientModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-client-privateclient-privateclient-module.js.map