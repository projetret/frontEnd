(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-management-management-module"],{

/***/ "./src/app/admin/management/management-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/management/management-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementRoutingModule", function() { return ManagementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./management.component */ "./src/app/admin/management/management.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _management_component__WEBPACK_IMPORTED_MODULE_2__["ManagementComponent"]
    }
];
var ManagementRoutingModule = /** @class */ (function () {
    function ManagementRoutingModule() {
    }
    ManagementRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ManagementRoutingModule);
    return ManagementRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/management/management.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/management/management.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  management works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/management/management.component.scss":
/*!************************************************************!*\
  !*** ./src/app/admin/management/management.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/management/management.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/management/management.component.ts ***!
  \**********************************************************/
/*! exports provided: ManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementComponent", function() { return ManagementComponent; });
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

var ManagementComponent = /** @class */ (function () {
    function ManagementComponent() {
    }
    ManagementComponent.prototype.ngOnInit = function () {
    };
    ManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-management',
            template: __webpack_require__(/*! ./management.component.html */ "./src/app/admin/management/management.component.html"),
            styles: [__webpack_require__(/*! ./management.component.scss */ "./src/app/admin/management/management.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ManagementComponent);
    return ManagementComponent;
}());



/***/ }),

/***/ "./src/app/admin/management/management.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/management/management.module.ts ***!
  \*******************************************************/
/*! exports provided: ManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementModule", function() { return ManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _management_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./management-routing.module */ "./src/app/admin/management/management-routing.module.ts");
/* harmony import */ var _management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./management.component */ "./src/app/admin/management/management.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ManagementModule = /** @class */ (function () {
    function ManagementModule() {
    }
    ManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _management_routing_module__WEBPACK_IMPORTED_MODULE_2__["ManagementRoutingModule"]
            ],
            declarations: [_management_component__WEBPACK_IMPORTED_MODULE_3__["ManagementComponent"]]
        })
    ], ManagementModule);
    return ManagementModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-management-management-module.js.map