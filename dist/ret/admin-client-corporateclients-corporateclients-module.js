(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-client-corporateclients-corporateclients-module"],{

/***/ "./src/app/admin/client/corporateclients/corporateclients-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/client/corporateclients/corporateclients-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CorporateclientsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporateclientsRoutingModule", function() { return CorporateclientsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _corporateclients_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./corporateclients.component */ "./src/app/admin/client/corporateclients/corporateclients.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _corporateclients_component__WEBPACK_IMPORTED_MODULE_2__["CorporateclientsComponent"]
    }
];
var CorporateclientsRoutingModule = /** @class */ (function () {
    function CorporateclientsRoutingModule() {
    }
    CorporateclientsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CorporateclientsRoutingModule);
    return CorporateclientsRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/client/corporateclients/corporateclients.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/client/corporateclients/corporateclients.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  corporateclients works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/client/corporateclients/corporateclients.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/client/corporateclients/corporateclients.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/client/corporateclients/corporateclients.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/client/corporateclients/corporateclients.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CorporateclientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporateclientsComponent", function() { return CorporateclientsComponent; });
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

var CorporateclientsComponent = /** @class */ (function () {
    function CorporateclientsComponent() {
    }
    CorporateclientsComponent.prototype.ngOnInit = function () {
    };
    CorporateclientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-corporateclients',
            template: __webpack_require__(/*! ./corporateclients.component.html */ "./src/app/admin/client/corporateclients/corporateclients.component.html"),
            styles: [__webpack_require__(/*! ./corporateclients.component.scss */ "./src/app/admin/client/corporateclients/corporateclients.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CorporateclientsComponent);
    return CorporateclientsComponent;
}());



/***/ }),

/***/ "./src/app/admin/client/corporateclients/corporateclients.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/client/corporateclients/corporateclients.module.ts ***!
  \**************************************************************************/
/*! exports provided: CorporateclientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporateclientsModule", function() { return CorporateclientsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _corporateclients_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./corporateclients-routing.module */ "./src/app/admin/client/corporateclients/corporateclients-routing.module.ts");
/* harmony import */ var _corporateclients_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./corporateclients.component */ "./src/app/admin/client/corporateclients/corporateclients.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CorporateclientsModule = /** @class */ (function () {
    function CorporateclientsModule() {
    }
    CorporateclientsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _corporateclients_routing_module__WEBPACK_IMPORTED_MODULE_2__["CorporateclientsRoutingModule"]
            ],
            declarations: [_corporateclients_component__WEBPACK_IMPORTED_MODULE_3__["CorporateclientsComponent"]]
        })
    ], CorporateclientsModule);
    return CorporateclientsModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-client-corporateclients-corporateclients-module.js.map