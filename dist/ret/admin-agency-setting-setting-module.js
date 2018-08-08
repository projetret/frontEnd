(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-agency-setting-setting-module"],{

/***/ "./src/app/admin/agency/setting/setting-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/agency/setting/setting-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: SettingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingRoutingModule", function() { return SettingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _setting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting.component */ "./src/app/admin/agency/setting/setting.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _setting_component__WEBPACK_IMPORTED_MODULE_2__["SettingComponent"]
    }
];
var SettingRoutingModule = /** @class */ (function () {
    function SettingRoutingModule() {
    }
    SettingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SettingRoutingModule);
    return SettingRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/agency/setting/setting.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/agency/setting/setting.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  setting works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/agency/setting/setting.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/admin/agency/setting/setting.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/agency/setting/setting.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/agency/setting/setting.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
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

var SettingComponent = /** @class */ (function () {
    function SettingComponent() {
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    SettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.component.html */ "./src/app/admin/agency/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.scss */ "./src/app/admin/agency/setting/setting.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/admin/agency/setting/setting.module.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/agency/setting/setting.module.ts ***!
  \********************************************************/
/*! exports provided: SettingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingModule", function() { return SettingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting-routing.module */ "./src/app/admin/agency/setting/setting-routing.module.ts");
/* harmony import */ var _setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting.component */ "./src/app/admin/agency/setting/setting.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingModule = /** @class */ (function () {
    function SettingModule() {
    }
    SettingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _setting_routing_module__WEBPACK_IMPORTED_MODULE_2__["SettingRoutingModule"]
            ],
            declarations: [_setting_component__WEBPACK_IMPORTED_MODULE_3__["SettingComponent"]]
        })
    ], SettingModule);
    return SettingModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-agency-setting-setting-module.js.map