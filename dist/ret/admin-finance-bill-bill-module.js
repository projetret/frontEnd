(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-finance-bill-bill-module"],{

/***/ "./src/app/admin/finance/bill/bill-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/finance/bill/bill-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: BillRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillRoutingModule", function() { return BillRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bill.component */ "./src/app/admin/finance/bill/bill.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _bill_component__WEBPACK_IMPORTED_MODULE_2__["BillComponent"]
    }
];
var BillRoutingModule = /** @class */ (function () {
    function BillRoutingModule() {
    }
    BillRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BillRoutingModule);
    return BillRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/finance/bill/bill.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/finance/bill/bill.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  bill works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/finance/bill/bill.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/finance/bill/bill.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/finance/bill/bill.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/finance/bill/bill.component.ts ***!
  \******************************************************/
/*! exports provided: BillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillComponent", function() { return BillComponent; });
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

var BillComponent = /** @class */ (function () {
    function BillComponent() {
    }
    BillComponent.prototype.ngOnInit = function () {
    };
    BillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bill',
            template: __webpack_require__(/*! ./bill.component.html */ "./src/app/admin/finance/bill/bill.component.html"),
            styles: [__webpack_require__(/*! ./bill.component.scss */ "./src/app/admin/finance/bill/bill.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BillComponent);
    return BillComponent;
}());



/***/ }),

/***/ "./src/app/admin/finance/bill/bill.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/finance/bill/bill.module.ts ***!
  \***************************************************/
/*! exports provided: BillModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillModule", function() { return BillModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bill_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bill-routing.module */ "./src/app/admin/finance/bill/bill-routing.module.ts");
/* harmony import */ var _bill_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bill.component */ "./src/app/admin/finance/bill/bill.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BillModule = /** @class */ (function () {
    function BillModule() {
    }
    BillModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _bill_routing_module__WEBPACK_IMPORTED_MODULE_2__["BillRoutingModule"]
            ],
            declarations: [_bill_component__WEBPACK_IMPORTED_MODULE_3__["BillComponent"]]
        })
    ], BillModule);
    return BillModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-finance-bill-bill-module.js.map