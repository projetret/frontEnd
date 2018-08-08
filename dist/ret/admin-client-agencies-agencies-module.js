(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-client-agencies-agencies-module"],{

/***/ "./src/app/admin/client/agencies/agencies-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/client/agencies/agencies-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: AgenciesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgenciesRoutingModule", function() { return AgenciesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agencies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agencies.component */ "./src/app/admin/client/agencies/agencies.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _agencies_component__WEBPACK_IMPORTED_MODULE_2__["AgenciesComponent"]
    }
];
var AgenciesRoutingModule = /** @class */ (function () {
    function AgenciesRoutingModule() {
    }
    AgenciesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AgenciesRoutingModule);
    return AgenciesRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/client/agencies/agencies.component.html":
/*!***************************************************************!*\
  !*** ./src/app/admin/client/agencies/agencies.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  agencies works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/client/agencies/agencies.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/admin/client/agencies/agencies.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/client/agencies/agencies.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/client/agencies/agencies.component.ts ***!
  \*************************************************************/
/*! exports provided: AgenciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgenciesComponent", function() { return AgenciesComponent; });
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

var AgenciesComponent = /** @class */ (function () {
    function AgenciesComponent() {
    }
    AgenciesComponent.prototype.ngOnInit = function () {
    };
    AgenciesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agencies',
            template: __webpack_require__(/*! ./agencies.component.html */ "./src/app/admin/client/agencies/agencies.component.html"),
            styles: [__webpack_require__(/*! ./agencies.component.scss */ "./src/app/admin/client/agencies/agencies.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AgenciesComponent);
    return AgenciesComponent;
}());



/***/ }),

/***/ "./src/app/admin/client/agencies/agencies.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/client/agencies/agencies.module.ts ***!
  \**********************************************************/
/*! exports provided: AgenciesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgenciesModule", function() { return AgenciesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _agencies_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agencies-routing.module */ "./src/app/admin/client/agencies/agencies-routing.module.ts");
/* harmony import */ var _agencies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agencies.component */ "./src/app/admin/client/agencies/agencies.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AgenciesModule = /** @class */ (function () {
    function AgenciesModule() {
    }
    AgenciesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _agencies_routing_module__WEBPACK_IMPORTED_MODULE_2__["AgenciesRoutingModule"]
            ],
            declarations: [_agencies_component__WEBPACK_IMPORTED_MODULE_3__["AgenciesComponent"]]
        })
    ], AgenciesModule);
    return AgenciesModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-client-agencies-agencies-module.js.map