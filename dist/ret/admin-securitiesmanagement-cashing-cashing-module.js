(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-securitiesmanagement-cashing-cashing-module"],{

/***/ "./src/app/admin/securitiesmanagement/cashing/cashing-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/securitiesmanagement/cashing/cashing-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: CashingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashingRoutingModule", function() { return CashingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cashing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cashing.component */ "./src/app/admin/securitiesmanagement/cashing/cashing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _cashing_component__WEBPACK_IMPORTED_MODULE_2__["CashingComponent"]
    }
];
var CashingRoutingModule = /** @class */ (function () {
    function CashingRoutingModule() {
    }
    CashingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CashingRoutingModule);
    return CashingRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/securitiesmanagement/cashing/cashing.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/securitiesmanagement/cashing/cashing.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  cashing works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/securitiesmanagement/cashing/cashing.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/admin/securitiesmanagement/cashing/cashing.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/securitiesmanagement/cashing/cashing.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/securitiesmanagement/cashing/cashing.component.ts ***!
  \*************************************************************************/
/*! exports provided: CashingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashingComponent", function() { return CashingComponent; });
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

var CashingComponent = /** @class */ (function () {
    function CashingComponent() {
    }
    CashingComponent.prototype.ngOnInit = function () {
    };
    CashingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cashing',
            template: __webpack_require__(/*! ./cashing.component.html */ "./src/app/admin/securitiesmanagement/cashing/cashing.component.html"),
            styles: [__webpack_require__(/*! ./cashing.component.scss */ "./src/app/admin/securitiesmanagement/cashing/cashing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CashingComponent);
    return CashingComponent;
}());



/***/ }),

/***/ "./src/app/admin/securitiesmanagement/cashing/cashing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/securitiesmanagement/cashing/cashing.module.ts ***!
  \**********************************************************************/
/*! exports provided: CashingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashingModule", function() { return CashingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cashing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cashing-routing.module */ "./src/app/admin/securitiesmanagement/cashing/cashing-routing.module.ts");
/* harmony import */ var _cashing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashing.component */ "./src/app/admin/securitiesmanagement/cashing/cashing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CashingModule = /** @class */ (function () {
    function CashingModule() {
    }
    CashingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _cashing_routing_module__WEBPACK_IMPORTED_MODULE_2__["CashingRoutingModule"]
            ],
            declarations: [_cashing_component__WEBPACK_IMPORTED_MODULE_3__["CashingComponent"]]
        })
    ], CashingModule);
    return CashingModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-securitiesmanagement-cashing-cashing-module.js.map