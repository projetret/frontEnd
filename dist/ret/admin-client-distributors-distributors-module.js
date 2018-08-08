(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-client-distributors-distributors-module"],{

/***/ "./src/app/admin/client/distributors/distributors-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/client/distributors/distributors-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: DistributorsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributorsRoutingModule", function() { return DistributorsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _distributors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./distributors.component */ "./src/app/admin/client/distributors/distributors.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _distributors_component__WEBPACK_IMPORTED_MODULE_2__["DistributorsComponent"]
    }
];
var DistributorsRoutingModule = /** @class */ (function () {
    function DistributorsRoutingModule() {
    }
    DistributorsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DistributorsRoutingModule);
    return DistributorsRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/client/distributors/distributors.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/admin/client/distributors/distributors.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  distrubitors works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/client/distributors/distributors.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/admin/client/distributors/distributors.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/client/distributors/distributors.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/client/distributors/distributors.component.ts ***!
  \*********************************************************************/
/*! exports provided: DistributorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributorsComponent", function() { return DistributorsComponent; });
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

var DistributorsComponent = /** @class */ (function () {
    function DistributorsComponent() {
    }
    DistributorsComponent.prototype.ngOnInit = function () {
    };
    DistributorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-distributors',
            template: __webpack_require__(/*! ./distributors.component.html */ "./src/app/admin/client/distributors/distributors.component.html"),
            styles: [__webpack_require__(/*! ./distributors.component.scss */ "./src/app/admin/client/distributors/distributors.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DistributorsComponent);
    return DistributorsComponent;
}());



/***/ }),

/***/ "./src/app/admin/client/distributors/distributors.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/client/distributors/distributors.module.ts ***!
  \******************************************************************/
/*! exports provided: DistributorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributorsModule", function() { return DistributorsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _distributors_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./distributors-routing.module */ "./src/app/admin/client/distributors/distributors-routing.module.ts");
/* harmony import */ var _distributors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./distributors.component */ "./src/app/admin/client/distributors/distributors.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DistributorsModule = /** @class */ (function () {
    function DistributorsModule() {
    }
    DistributorsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _distributors_routing_module__WEBPACK_IMPORTED_MODULE_2__["DistributorsRoutingModule"]
            ],
            declarations: [_distributors_component__WEBPACK_IMPORTED_MODULE_3__["DistributorsComponent"]]
        })
    ], DistributorsModule);
    return DistributorsModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-client-distributors-distributors-module.js.map