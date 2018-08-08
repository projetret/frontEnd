(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/agency/agencyprofile/agencyprofile.module": [
		"./src/app/admin/agency/agencyprofile/agencyprofile.module.ts",
		"admin-agency-agencyprofile-agencyprofile-module"
	],
	"./admin/agency/setting/setting.module": [
		"./src/app/admin/agency/setting/setting.module.ts",
		"admin-agency-setting-setting-module"
	],
	"./admin/agency/users/users.module": [
		"./src/app/admin/agency/users/users.module.ts",
		"admin-agency-users-users-module"
	],
	"./admin/client/agencies/agencies.module": [
		"./src/app/admin/client/agencies/agencies.module.ts",
		"admin-client-agencies-agencies-module"
	],
	"./admin/client/corporateclients/corporateclients.module": [
		"./src/app/admin/client/corporateclients/corporateclients.module.ts",
		"admin-client-corporateclients-corporateclients-module"
	],
	"./admin/client/distributors/distributors.module": [
		"./src/app/admin/client/distributors/distributors.module.ts",
		"admin-client-distributors-distributors-module"
	],
	"./admin/client/privateclient/privateclient.module": [
		"./src/app/admin/client/privateclient/privateclient.module.ts",
		"admin-client-privateclient-privateclient-module"
	],
	"./admin/finance/bill/bill.module": [
		"./src/app/admin/finance/bill/bill.module.ts",
		"admin-finance-bill-bill-module"
	],
	"./admin/management/management.module": [
		"./src/app/admin/management/management.module.ts",
		"admin-management-management-module"
	],
	"./admin/securitiesmanagement/cashing/cashing.module": [
		"./src/app/admin/securitiesmanagement/cashing/cashing.module.ts",
		"admin-securitiesmanagement-cashing-cashing-module"
	],
	"./admin/securitiesmanagement/securitiesinstances/securitiesinstances.module": [
		"./src/app/admin/securitiesmanagement/securitiesinstances/securitiesinstances.module.ts",
		"admin-securitiesmanagement-securitiesinstances-securitiesinstances-module"
	],
	"./changelog/changelog.module": [
		"./src/app/changelog/changelog.module.ts",
		"changelog-changelog-module"
	],
	"./pages/content-layout-page/content-pages.module": [
		"./src/app/pages/content-layout-page/content-pages.module.ts",
		"pages-content-layout-page-content-pages-module"
	],
	"./pages/full-layout-page/full-pages.module": [
		"./src/app/pages/full-layout-page/full-pages.module.ts",
		"pages-full-layout-page-full-pages-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/routes/full-layout.routes */ "./src/app/shared/routes/full-layout.routes.ts");
/* harmony import */ var _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/routes/content-layout.routes */ "./src/app/shared/routes/content-layout.routes.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full',
    },
    { path: '', component: _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_2__["FullLayoutComponent"], data: { title: 'full Views' }, children: _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_4__["Full_ROUTES"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: '', component: _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_3__["ContentLayoutComponent"], data: { title: 'content Views' }, children: _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_5__["CONTENT_ROUTES"] } /* ,
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'logout',component: LogoutComponent } ,
    { path: 'lockscreen',component: LockScreenComponent } ,
    { path: 'error', loadChildren: './system/server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './system/access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './system/not-found/not-found.module#NotFoundModule' } */
    /* { path: '**', redirectTo: 'not-found' }   */
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var createTranslateLoader = function (http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_13__["FullLayoutComponent"],
                _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_12__["ContentLayoutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot()
            ],
            providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _auth_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/auth/forgot-password/forgot-password.component.ts");
/* harmony import */ var _lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lock-screen/lock-screen.component */ "./src/app/auth/lock-screen/lock-screen.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        children: [
            {
                path: 'forgotpassword',
                component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"],
                data: {
                    title: 'Forgot Password'
                }
            },
            {
                path: 'lockscreen',
                component: _lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_3__["LockScreenComponent"],
                data: {
                    title: 'Lock Screen '
                }
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                data: {
                    title: 'Login '
                }
            },
            {
                path: 'logout',
                component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"]
            }
        ]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router, user) {
        this.auth = auth;
        this.router = router;
        this.user = user;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        //debugger
        if (this.auth.isLoggedIn) {
            return true;
        }
        return this.user.isLoggedIn().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (res.status) {
                _this.auth.setLoggedIn(true);
                return true;
            }
            else {
                _this.router.navigate(['login']);
                return false;
            }
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lock-screen/lock-screen.component */ "./src/app/auth/lock-screen/lock-screen.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/auth/forgot-password/forgot-password.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"]
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_5__["LockScreenComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.loggedInStatus = false;
    }
    AuthService.prototype.setLoggedIn = function (value) {
        this.loggedInStatus = value;
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedInStatus;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getUserDetails = function (CompanyCode, inputEmail, inputPass) {
        // post these details to API server return user info if correct
        return this.http.post('http://localhost/api/auth.php', {
            CompanyCode: CompanyCode,
            inputEmail: inputEmail,
            inputPass: inputPass
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input, textarea, select, button {\n    text-rendering: auto;\n    color: initial;\n    letter-spacing: normal;\n    word-spacing: normal;\n    text-transform: none;\n    text-indent: 0px;\n    text-shadow: none;\n    display: inline-block;\n\n    margin: 0em;\n    font: 400 13.3333px Arial;\n}\n/* remove canvas default margin */\ncanvas{\n       display:block;\n     \n   }\n#particles-js{\n       width:100%;\n       height:100%;\n   }\nh1{\n   font-size: 7rem;\n   position: absolute;\n   top: 35%;\n   left: 35%;\n   color: #FFF;\n   font-family: teko;\n   font-weight: 400;\n   text-shadow: 5px 5px #5F6D72;\n   text-transform: uppercase;\n   }\n.background {\n       background-image: url(\"https://images4.alphacoders.com/485/48578.jpg\");\n   \n        filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius=2); \n    \n   }\n/* BACKGROUND */\n.background, .backdrop {\n   \n       position: fixed;\n       top: 0;\n       left: 0;\n       right: 0;\n       bottom: 0;\n       background-size: cover;\n   }\n/* CONTAINER */\n.forgot-password-form-container { \n       max-width: 400px;\n       width: 100%;\n       z-index: 1;\n       position: absolute;\n       top: 50%;\n       left: 50%;\n       margin-left: -200px;\n       margin-top: -286px;  \n   }\n.forgot-password-form-container a{\n       text-decoration:none;\n   }\n/* CONTENT */\n.forgot-password-form-content {\n       background-color: #FFFFFF;\n       padding: 25px 25px;\n   }\n.forgot-password-form-content i{\n       width: 30px;\n       text-align: center;\n       vertical-align: bottom;\n   }\n/* HEADER */\n.forgot-password-form-header {\n       text-align: center;\n   }\n.forgot-password-form-header img {\n      /*  border: 1px solid #CCCCCC; */\n       padding: 10px;\n       border-radius: 50px;\n   }\n.forgot-password-form-header h3 {\n       font-weight: lighter;\n       font-size: 25px;\n       margin: 10px 0;\n   }\n/* FROM INPUT */\n.forgot-password-form .input-container {\n       border-bottom: 1px solid #CCCCCC;\n       margin-top: 15px;\n       font-size: 20px;\n       color: #9e9e9e;\n       padding-bottom: 5px;\n   }\n.forgot-password-form .input {\n       border: 0;\n       width: 200px;\n\t   input, textarea, select, button {\n    text-rendering: auto;\n    color: initial;\n    letter-spacing: normal;\n    word-spacing: normal;\n    text-transform: none;\n    text-indent: 0px;\n    text-shadow: none;\n    display: inline-block;\n    text-align: start;\n    margin: 0em;\n    font: 400 13.3333px Arial;\n}\n\n   }\n.forgot-password-form .input:focus {\n       outline: none;\n   }\n#show-password {\n       float: right;\n       vertical-align: bottom;\n       text-align: center;\n       margin-top: 7px;\n       cursor: pointer;\n   }\n.forgot-password-form .forgot-password {\n       float: right;\n   }\n.forgot-password-form .rememberme-container {\n       margin-top: 15px;\n       padding: 0;\n   }\n.forgot-password-form .rememberme-container input {\n       margin-left: 0;\n   }\n.forgot-password-form .rememberme span {\n       vertical-align: top;\n   }\n.forgot-password-form .button {\n       margin-top: 15px;\n       width: 100%;\n       background: #2e7ec7;\n       border: 0;\n       color: #FFFFFF;\n       padding: 10px;\n       font-size: 15px;\n       cursor: pointer;\n       transition: background .3s;\n   }\n.forgot-password-form .button:hover {\n       background: #1f6eb7;\n   }\n.forgot-password-form .button:focus {\n       outline: none;\n   }\n.forgot-password-form .register {\n       margin-top: 5px;\n       background: #dadada;\n       border: 0;\n       color: #676464;\n       padding: 9px;\n       font-size: 15px;\n       display: block;\n       text-align: center;\n   }\n.forgot-password-form .register:hover\t{\n       background: #d0d0d0;\n   }\n/* ACTIVATION LINK */\n.resend-activation {\n       text-align: center;\n       margin-top: 15px;\n       margin-top: 10px;\n       color: #425384;\n       line-height: 22px;\n   }\n.attibution {\n       text-align: center;\n       margin-top: 7px;\n       color: #FFFFFF;\n       line-height: 25px;\n   }\n/* SEPARATOR */\n.forgot-password-form-content .separator {\n       margin: 20px 0;\n       border-top: 1px solid #CCCCCC;\n       position: relative;\n   }\n.forgot-password-form-content .separator-text {\n       display: block;\n       position: absolute;\n       top: -10px;\n       left: 50%;\n       margin-left: -22px;\n       padding: 0px 10px;\n       background: #FFFFFF;\n       color: #8a8a8a;\n   }\n/* RESPONSIVE */\n@media screen and (max-height: 600px) {\n       .forgot-password-form-container {\n           margin-top: 0 !important;\n           top: 10px !important;\n       }\n   }\n@media screen and (max-width: 400px) {\n       .forgot-password-form-container {\n           left: 5px;\n           margin-left: 5px;\n           min-width: 283px;\n           right: 10px;\n           margin-bottom: 10px;\n           width: auto;\n       }\n       .forgot-password-form .input {\n           width: 140px;\n       }\n       .socmed-login .socmed-btn i {\n           margin-right: 5px;\n           width: 19px;\n       }\n   }"

/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"particles-js\">\n        <section id=\"forgot-password\">\n                <div class=\"background\" id=\"background\" style=\"left: -4.18424%; right: -4.18424%; top: -5.59548%; bottom: -5.59548%; z-index: -1;\"></div>     \n                <div class=\"forgot-password-form-container\" id=\"forgot-password-form\">\n                    <div class=\"forgot-password-form-content\">\n                        <div class=\"forgot-password-form-header\">\n                            <div class=\"logo\">\n                                <img width=\"200\" height=\"200\" src=\"../../../assets/img/portrait/avatars/avatar-08.png\">\n                            </div>\n                            <h3>Forgot Password</h3>\n                        </div>\n                        <form class=\"forgot-password-form\" novalidate=\"\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n        <!-- code company -->\t\t\t\t\n                                  <div class=\"input-container\">\n                                    <i class=\"fa fa-hashtag\"></i>\n                                    <input type=\"text\" class=\"input\" name=\"CompanyCode\" id=\"CompanyCode\" placeholder=\"Company Code\" ngModel required>\n\t\t\t\t\t\t\t\t\t\n                                  </div>\n        <!-- Email -->\n                                 <div class=\"input-container\">\n                                    <i class=\"fa fa-envelope\"></i>\n                                    <input type=\"Email\" class=\"input\" name=\"inputEmail\" id=\"inputEmail\" placeholder=\"Email\" ngModel required Email>\n                                  </div>\n\t\t\t\t\t\t\t\t  <div >\n                                  </div>\n                                       <input type=\"submit\" name=\"reset\" value=\"Your e-mail address\"  class=\"button\" />\n                                       \n\t\t\t\t\t\t\t\t\n\n                             \n\t\t\t\t\t\t\t \n                            </form>\n                <div>\n                \n                <script type=\"text/javascript\">\n                            $('#background').mouseParticles({ moveFactor: 5 });\n                        </script>\n                </div>\n        </div>\n        <div class=\"attibution\">\n                    &copy; {{dateNow | date: 'yyyy'}} aero-it.net\n                </div>\n                </div>\n        </section>\n\t\t</div>\n      "

/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(router, route) {
        this.router = router;
        this.route = route;
        this.dateNow = new Date();
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        $.getScript('./assets/js/Particles.js');
    };
    // On submit click, reset form fields
    ForgotPasswordComponent.prototype.onSubmit = function () {
        this.forogtPasswordForm.reset();
    };
    // On login link click
    ForgotPasswordComponent.prototype.onLogin = function () {
        this.router.navigate(['login'], { relativeTo: this.route.parent });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ForgotPasswordComponent.prototype, "forogtPasswordForm", void 0);
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/auth/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/auth/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/auth/lock-screen/lock-screen.component.css":
/*!************************************************************!*\
  !*** ./src/app/auth/lock-screen/lock-screen.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input, textarea, select, button {\n    text-rendering: auto;\n    color: initial;\n    letter-spacing: normal;\n    word-spacing: normal;\n    text-transform: none;\n    text-indent: 0px;\n    text-shadow: none;\n    display: inline-block;\n\n    margin: 0em;\n    font: 400 13.3333px Arial;\n}\n/* remove canvas default margin */\ncanvas{\n       display:block;\n     \n   }\n#particles-js{\n       width:100%;\n       height:100%;\n   }\nh1{\n   font-size: 7rem;\n   position: absolute;\n   top: 35%;\n   left: 35%;\n   color: #FFF;\n   font-family: teko;\n   font-weight: 400;\n   text-shadow: 5px 5px #5F6D72;\n   text-transform: uppercase;\n   }\n.background {\n       background-image: url(\"https://images4.alphacoders.com/485/48578.jpg\");\n   \n        filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius=2); \n    \n   }\n/* BACKGROUND */\n.background, .backdrop {\n   \n       position: fixed;\n       top: 0;\n       left: 0;\n       right: 0;\n       bottom: 0;\n       background-size: cover;\n   }\n/* CONTAINER */\n.lock-screen-form-container { \n       max-width: 400px;\n       width: 100%;\n       z-index: 1;\n       position: absolute;\n       top: 50%;\n       left: 50%;\n       margin-left: -200px;\n       margin-top: -286px;  \n   }\n.lock-screen-form-container a{\n       text-decoration:none;\n   }\n/* CONTENT */\n.lock-screen-form-content {\n       background-color: #FFFFFF;\n       padding: 25px 25px;\n   }\n.lock-screen-form-content i{\n       width: 30px;\n       text-align: center;\n       vertical-align: bottom;\n   }\n/* HEADER */\n.lock-screen-form-header {\n       text-align: center;\n   }\n.lock-screen-form-header img {\n      /*  border: 1px solid #CCCCCC; */\n       padding: 10px;\n       border-radius: 50px;\n   }\n.lock-screen-form-header h3 {\n       font-weight: lighter;\n       font-size: 25px;\n       margin: 10px 0;\n   }\n/* FROM INPUT */\n.lock-screen-form .input-container {\n       border-bottom: 1px solid #CCCCCC;\n       margin-top: 15px;\n       font-size: 20px;\n       color: #9e9e9e;\n       padding-bottom: 5px;\n   }\n.lock-screen-form .input {\n       border: 0;\n       width: 200px;\n\t   input, textarea, select, button {\n    text-rendering: auto;\n    color: initial;\n    letter-spacing: normal;\n    word-spacing: normal;\n    text-transform: none;\n    text-indent: 0px;\n    text-shadow: none;\n    display: inline-block;\n    text-align: start;\n    margin: 0em;\n    font: 400 13.3333px Arial;\n}\n\n   }\n.lock-screen-form .input:focus {\n       outline: none;\n   }\n#show-password {\n       float: right;\n       vertical-align: bottom;\n       text-align: center;\n       margin-top: 7px;\n       cursor: pointer;\n   }\n.lock-screen-form .forgot-password {\n       float: right;\n   }\n.lock-screen-form .rememberme-container {\n       margin-top: 15px;\n       padding: 0;\n   }\n.lock-screen-form .rememberme-container input {\n       margin-left: 0;\n   }\n.lock-screen-form .rememberme span {\n       vertical-align: top;\n   }\n.lock-screen-form .button {\n       margin-top: 15px;\n       width: 100%;\n       background: #2e7ec7;\n       border: 0;\n       color: #FFFFFF;\n       padding: 10px;\n       font-size: 15px;\n       cursor: pointer;\n       transition: background .3s;\n   }\n.lock-screen-form .button:hover {\n       background: #1f6eb7;\n   }\n.lock-screen-form .button:focus {\n       outline: none;\n   }\n.lock-screen-form .register {\n       margin-top: 5px;\n       background: #dadada;\n       border: 0;\n       color: #676464;\n       padding: 9px;\n       font-size: 15px;\n       display: block;\n       text-align: center;\n   }\n.lock-screen-form .register:hover\t{\n       background: #d0d0d0;\n   }\n/* ACTIVATION LINK */\n.resend-activation {\n       text-align: center;\n       margin-top: 15px;\n       margin-top: 10px;\n       color: #425384;\n       line-height: 22px;\n   }\n.attibution {\n       text-align: center;\n       margin-top: 7px;\n       color: #FFFFFF;\n       line-height: 25px;\n   }\n/* SEPARATOR */\n.lock-screen-form-content .separator {\n       margin: 20px 0;\n       border-top: 1px solid #CCCCCC;\n       position: relative;\n   }\n.lock-screen-form-content .separator-text {\n       display: block;\n       position: absolute;\n       top: -10px;\n       left: 50%;\n       margin-left: -22px;\n       padding: 0px 10px;\n       background: #FFFFFF;\n       color: #8a8a8a;\n   }\n/* RESPONSIVE */\n@media screen and (max-height: 600px) {\n       .lock-screen-form-container {\n           margin-top: 0 !important;\n           top: 10px !important;\n       }\n   }\n@media screen and (max-width: 400px) {\n       .lock-screen-form-container {\n           left: 5px;\n           margin-left: 5px;\n           min-width: 283px;\n           right: 10px;\n           margin-bottom: 10px;\n           width: auto;\n       }\n       .lock-screen-form .input {\n           width: 140px;\n       }\n       .socmed-login .socmed-btn i {\n           margin-right: 5px;\n           width: 19px;\n       }\n   }"

/***/ }),

/***/ "./src/app/auth/lock-screen/lock-screen.component.html":
/*!*************************************************************!*\
  !*** ./src/app/auth/lock-screen/lock-screen.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"particles-js\"> \n<section id=\"lock-screen\">\n        <div class=\"background\" id=\"background\" style=\"left: -4.18424%; right: -4.18424%; top: -5.59548%; bottom: -5.59548%; z-index: -1;\"></div>     \n        <div class=\"lock-screen-form-container\" id=\"lock-screen-form\">\n            <div class=\"lock-screen-form-content\">\n                <div class=\"lock-screen-form-header\">\n                    <div class=\"logo\">\n                        <img width=\"200\" height=\"200\" src=\"../../../assets/img/portrait/avatars/avatar-08.png\">\n                    </div>\n                    <h3>Your are in lock screen.</h3>\n                    <span class=\"blue\">Main app was shut down and you need to enter your passwor to go back to app.</span>\n                </div>\n                <form class=\"lock-screen-form\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\" novalidate=\"\">\n<!-- Password -->\n                    <div class=\"input-container\">\n                        <i class=\"fa fa-lock\"></i>\n                        <input type=\"password\" id=\"inputPass\" class=\"input\" name=\"inputPass\" placeholder=\"*********\" ngModel required>\n                        <i id=\"show-password\" class=\"fa fa-eye\"></i>\n                    </div>\n\n                    <input type=\"submit\" name=\"Unlock\" value=\"Unlock\" class=\"button\" [routerLink]=\"['/full-layout']\"/>\n  \n\t\t\t\t\t</form>\n\t\t<div>\n\t\t\n\t\t<script type=\"text/javascript\">\n                    $('#background').mouseParticles({ moveFactor: 5 });\n                </script>\n        </div>\n</div>\n<div class=\"attibution\">\n            &copy; {{dateNow | date: 'yyyy'}} aero-it.net\n\t\t</div>\n\t\t</div>\n</section>\n</div>"

/***/ }),

/***/ "./src/app/auth/lock-screen/lock-screen.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/auth/lock-screen/lock-screen.component.ts ***!
  \***********************************************************/
/*! exports provided: LockScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockScreenComponent", function() { return LockScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LockScreenComponent = /** @class */ (function () {
    function LockScreenComponent() {
        this.dateNow = new Date();
    }
    LockScreenComponent.prototype.ngOnInit = function () {
        $.getScript('./assets/js/Particles.js');
        $('#show-password').click(function () {
            if ($(this).hasClass('fa-eye')) {
                $('#inputPass').attr('type', 'text');
                $(this).removeClass('fa-eye');
                $(this).addClass('fa-eye-slash');
            }
            else {
                $('#inputPass').attr('type', 'password');
                $(this).removeClass('fa-eye-slash');
                $(this).addClass('fa-eye');
            }
        });
    };
    LockScreenComponent.prototype.onSubmit = function () {
        this.lockScreenForm.reset();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], LockScreenComponent.prototype, "lockScreenForm", void 0);
    LockScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lock-screen',
            template: __webpack_require__(/*! ./lock-screen.component.html */ "./src/app/auth/lock-screen/lock-screen.component.html"),
            styles: [__webpack_require__(/*! ./lock-screen.component.css */ "./src/app/auth/lock-screen/lock-screen.component.css")]
        })
    ], LockScreenComponent);
    return LockScreenComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input, textarea, select, button {\n    text-rendering: auto;\n    color: initial;\n    letter-spacing: normal;\n    word-spacing: normal;\n    text-transform: none;\n    text-indent: 0px;\n    text-shadow: none;\n    display: inline-block;\n\n    margin: 0em;\n    font: 400 13.3333px Arial;\n}\n/* remove canvas default margin */\ncanvas{\n       display:block;\n     \n   }\n#particles-js{\n       width:100%;\n       height:100%;\n   }\nh1{\n   font-size: 7rem;\n   position: absolute;\n   top: 35%;\n   left: 35%;\n   color: #FFF;\n   font-family: teko;\n   font-weight: 400;\n   text-shadow: 5px 5px #5F6D72;\n   text-transform: uppercase;\n   }\n.background {\n       background-image: url(\"https://images4.alphacoders.com/485/48578.jpg\");\n   \n        filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius=2); \n    \n   }\n/* BACKGROUND */\n.background, .backdrop {\n   \n       position: fixed;\n       top: 0;\n       left: 0;\n       right: 0;\n       bottom: 0;\n       background-size: cover;\n   }\n/* CONTAINER */\n.login-form-container {\n       max-width: 400px;\n       width: 100%;\n       z-index: 1;\n       position: absolute;\n       top: 50%;\n       left: 50%;\n       margin-left: -200px;\n       margin-top: -286px;  \n   }\n.login-form-container a{\n       text-decoration:none;\n   }\n/* CONTENT */\n.login-form-content {\n       background-color: #FFFFFF;\n       padding: 25px 25px;\n   }\n.login-form-content i{\n       width: 30px;\n       text-align: center;\n       vertical-align: bottom;\n   }\n/* HEADER */\n.login-form-header {\n       text-align: center;\n   }\n.login-form-header img {\n      /*  border: 1px solid #CCCCCC; */\n       padding: 10px;\n       border-radius: 50px;\n   }\n.login-form-header h3 {\n       font-weight: lighter;\n       font-size: 25px;\n       margin: 10px 0;\n   }\n/* FROM INPUT */\n.login-form .input-container {\n       border-bottom: 1px solid #CCCCCC;\n       margin-top: 15px;\n       font-size: 20px;\n       color: #9e9e9e;\n       padding-bottom: 5px;\n   }\n.login-form .input {\n       border: 0;\n       width: 200px;\n   }\n.login-form .input:focus {\n       outline: none;\n   }\n#show-password {\n       float: right;\n       vertical-align: bottom;\n       text-align: center;\n       margin-top: 7px;\n       cursor: pointer;\n   }\n.login-form .forgot-password {\n       float: right;\n   }\n.login-form .rememberme-container {\n       margin-top: 15px;\n       padding: 0;\n   }\n.login-form .rememberme-container input {\n       margin-left: 0;\n   }\n.login-form .rememberme span {\n       vertical-align: top;\n   }\n.login-form .button {\n       margin-top: 15px;\n       width: 100%;\n       background: #2e7ec7;\n       border: 0;\n       color: #FFFFFF;\n       padding: 10px;\n       font-size: 15px;\n       cursor: pointer;\n       transition: background .3s;\n   }\n.login-form .button:hover {\n       background: #1f6eb7;\n   }\n.login-form .button:focus {\n       outline: none;\n   }\n.login-form .register {\n       margin-top: 5px;\n       background: #dadada;\n       border: 0;\n       color: #676464;\n       padding: 9px;\n       font-size: 15px;\n       display: block;\n       text-align: center;\n   }\n.login-form .register:hover\t{\n       background: #d0d0d0;\n   }\n/* ACTIVATION LINK */\n.resend-activation {\n       text-align: center;\n       margin-top: 15px;\n       margin-top: 10px;\n       color: #425384;\n       line-height: 22px;\n   }\n.attibution {\n       text-align: center;\n       margin-top: 7px;\n       color: #FFFFFF;\n       line-height: 25px;\n   }\n/* SEPARATOR */\n.login-form-content .separator {\n       margin: 20px 0;\n       border-top: 1px solid #CCCCCC;\n       position: relative;\n   }\n.login-form-content .separator-text {\n       display: block;\n       position: absolute;\n       top: -10px;\n       left: 50%;\n       margin-left: -22px;\n       padding: 0px 10px;\n       background: #FFFFFF;\n       color: #8a8a8a;\n   }\n/* RESPONSIVE */\n@media screen and (max-height: 600px) {\n       .login-form-container {\n           margin-top: 0 !important;\n           top: 10px !important;\n       }\n   }\n@media screen and (max-width: 400px) {\n       .login-form-container {\n           left: 5px;\n           margin-left: 5px;\n           min-width: 283px;\n           right: 10px;\n           margin-bottom: 10px;\n           width: auto;\n       }\n       .login-form .input {\n           width: 140px;\n       }\n       .socmed-login .socmed-btn i {\n           margin-right: 5px;\n           width: 19px;\n       }\n   }"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"particles-js\"> \n<section id=\"login\">\n        <div class=\"background\" id=\"background\" style=\"left: -4.18424%; right: -4.18424%; top: -5.59548%; bottom: -5.59548%; z-index: -1;\"></div>     \n        <div class=\"login-form-container\" id=\"login-form\">\n            <div class=\"login-form-content\">\n                <div class=\"login-form-header\">\n                    <div class=\"logo\">\n                        <img width=\"200\" height=\"200\" src=\"../../../assets/img/portrait/avatars/avatar-08.png\">\n                    </div>\n                    <h3>Login to Your Account</h3>\n                </div>\n               <!--  (ngSubmit)=\"onSubmit()\" -->\n                <form class=\"login-form\" novalidate=\"\"  #f=\"ngForm\" (submit)=\"loginUser($event)\">\n<!-- code company -->\t\t\t\t\n\t\t\t\t\t\t  <div class=\"input-container\">\n\t\t\t\t\t\t\t<i class=\"fa fa-hashtag\"></i>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"input\" name=\"CompanyCode\" id=\"CompanyCode\" placeholder=\"Company Code\" autocomplete=\"organization\" ngModel required>\n\t\t\t\t\t\t  </div>\n<!-- Email -->\n\t\t\t\t\t\t <div class=\"input-container\">\n\t\t\t\t\t\t\t<i class=\"fa fa-envelope\"></i>\n\t\t\t\t\t\t\t<input type=\"Email\" class=\"input\" name=\"inputEmail\" id=\"inputEmail\" placeholder=\"Email\" autocomplete=\"email\" ngModel required Email>\n\t\t\t\t\t\t  </div>\n<!-- Password -->\n                    <div class=\"input-container\">\n                        <i class=\"fa fa-lock\"></i>\n                        <input type=\"password\" id=\"inputPass\" class=\"input\" name=\"inputPass\" placeholder=\"Password\" autocomplete=\"current-password\" ngModel required>\n                        <i id=\"show-password\" class=\"fa fa-eye\"></i>\n                    </div>\n<!-- rememberme -->\t\t\t\t\n                    <div class=\"rememberme-container\">\n                        <input type=\"checkbox\" name=\"rememberme\" id=\"rememberme\">\n                        <label for=\"rememberme\" class=\"rememberme\"><span>Remember me</span></label>\n                        <a class=\"forgot-password\" [routerLink]=\"['/forgot-password']\" >Forgot Password?</a>\n                    </div>\n                    <input type=\"submit\" name=\"login\" value=\"Login\" class=\"button\" [routerLink]=\"['/full-layout']\" />\n  \n\t\t\t\t\t</form>\n\t\t<div>\n\t\t\n\t\t<script type=\"text/javascript\">\n                    $('#background').mouseParticles({ moveFactor: 5 });\n                </script>\n        </div>\n</div>\n<div class=\"attibution\">\n            &copy; {{dateNow | date: 'yyyy'}} aero-it.net\n\t\t</div>\n\t\t</div>\n</section>\n</div> "

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(Auth, router) {
        this.Auth = Auth;
        this.router = router;
        this.dateNow = new Date();
    }
    LoginComponent.prototype.ngOnInit = function () {
        $.getScript('./assets/js/Particles.js');
        $('#show-password').click(function () {
            if ($(this).hasClass('fa-eye')) {
                $('#inputPass').attr('type', 'text');
                $(this).removeClass('fa-eye');
                $(this).addClass('fa-eye-slash');
            }
            else {
                $('#inputPass').attr('type', 'password');
                $(this).removeClass('fa-eye-slash');
                $(this).addClass('fa-eye');
            }
        });
    };
    LoginComponent.prototype.loginUser = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var CompanyCode = target.querySelector('#CompanyCode').value;
        var inputEmail = target.querySelector('#inputEmail').value;
        var inputPass = target.querySelector('#inputPass').value;
        this.Auth.getUserDetails(CompanyCode, inputEmail, inputPass).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['full-layout']);
                _this.Auth.setLoggedIn(true);
            }
            else {
                window.alert(data.message);
            }
        });
        // console.log(CompanyCode, inputEmail,inputPass)
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/logout/logout.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/logout/logout.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input, textarea, select, button {\n    text-rendering: auto;\n    color: initial;\n    letter-spacing: normal;\n    word-spacing: normal;\n    text-transform: none;\n    text-indent: 0px;\n    text-shadow: none;\n    display: inline-block;\n\n    margin: 0em;\n    font: 400 13.3333px Arial;\n}\n/* remove canvas default margin */\ncanvas{\n       display:block;\n     \n   }\n#particles-js{\n       width:100%;\n       height:100%;\n   }\nh1{\n   font-size: 7rem;\n   position: absolute;\n   top: 35%;\n   left: 35%;\n   color: #FFF;\n   font-family: teko;\n   font-weight: 400;\n   text-shadow: 5px 5px #5F6D72;\n   text-transform: uppercase;\n   }\n.background {\n       background-image: url(\"https://images4.alphacoders.com/485/48578.jpg\");\n   \n        filter: blur(15px);\n        -webkit-filter: blur(10px);\n        -moz-filter: blur(5px);\n        -o-filter: blur(5px);\n        -ms-filter: blur(5px);\n        filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius=2); \n    \n   }\n/* BACKGROUND */\n.background, .backdrop {\n   \n       position: fixed;\n       top: 0;\n       left: 0;\n       right: 0;\n       bottom: 0;\n       background-size: cover;\n   }\n/* CONTAINER */\n.login-form-container {\n       max-width: 400px;\n       width: 100%;\n       z-index: 1;\n       position: absolute;\n       top: 50%;\n       left: 50%;\n       margin-left: -200px;\n       margin-top: -286px;  \n   }\n.login-form-container a{\n       text-decoration:none;\n   }\n/* CONTENT */\n.login-form-content {\n       background-color: #FFFFFF;\n       padding: 25px 25px;\n   }\n.login-form-content i{\n       width: 30px;\n       text-align: center;\n       vertical-align: bottom;\n   }\n/* HEADER */\n.login-form-header {\n       text-align: center;\n   }\n.login-form-header img {\n      /*  border: 1px solid #CCCCCC; */\n       padding: 10px;\n       border-radius: 50px;\n   }\n.login-form-header h3 {\n       font-weight: lighter;\n       font-size: 25px;\n       margin: 10px 0;\n   }\n/* FROM INPUT */\n.login-form .input-container {\n       border-bottom: 1px solid #CCCCCC;\n       margin-top: 15px;\n       font-size: 20px;\n       color: #9e9e9e;\n       padding-bottom: 5px;\n   }\n.login-form .input {\n       border: 0;\n       width: 200px;\n   }\n.login-form .input:focus {\n       outline: none;\n   }\n#show-password {\n       float: right;\n       vertical-align: bottom;\n       text-align: center;\n       margin-top: 7px;\n       cursor: pointer;\n   }\n.login-form .forgot-password {\n       float: right;\n   }\n.login-form .rememberme-container {\n       margin-top: 15px;\n       padding: 0;\n   }\n.login-form .rememberme-container input {\n       margin-left: 0;\n   }\n.login-form .rememberme span {\n       vertical-align: top;\n   }\n.login-form .button {\n       margin-top: 15px;\n       width: 100%;\n       background: #2e7ec7;\n       border: 0;\n       color: #FFFFFF;\n       padding: 10px;\n       font-size: 15px;\n       cursor: pointer;\n       transition: background .3s;\n   }\n.login-form .button:hover {\n       background: #1f6eb7;\n   }\n.login-form .button:focus {\n       outline: none;\n   }\n.login-form .register {\n       margin-top: 5px;\n       background: #dadada;\n       border: 0;\n       color: #676464;\n       padding: 9px;\n       font-size: 15px;\n       display: block;\n       text-align: center;\n   }\n.login-form .register:hover\t{\n       background: #d0d0d0;\n   }\n/* ACTIVATION LINK */\n.resend-activation {\n       text-align: center;\n       margin-top: 15px;\n       margin-top: 10px;\n       color: #425384;\n       line-height: 22px;\n   }\n.attibution {\n       text-align: center;\n       margin-top: 7px;\n       color: #FFFFFF;\n       line-height: 25px;\n   }\n/* SEPARATOR */\n.login-form-content .separator {\n       margin: 20px 0;\n       border-top: 1px solid #CCCCCC;\n       position: relative;\n   }\n.login-form-content .separator-text {\n       display: block;\n       position: absolute;\n       top: -10px;\n       left: 50%;\n       margin-left: -22px;\n       padding: 0px 10px;\n       background: #FFFFFF;\n       color: #8a8a8a;\n   }\n/* RESPONSIVE */\n@media screen and (max-height: 600px) {\n       .login-form-container {\n           margin-top: 0 !important;\n           top: 10px !important;\n       }\n   }\n@media screen and (max-width: 400px) {\n       .login-form-container {\n           left: 5px;\n           margin-left: 5px;\n           min-width: 283px;\n           right: 10px;\n           margin-bottom: 10px;\n           width: auto;\n       }\n       .login-form .input {\n           width: 140px;\n       }\n       .socmed-login .socmed-btn i {\n           margin-right: 5px;\n           width: 19px;\n       }\n   }\n/* remove canvas default margin */\ncanvas{\n    display:block;\n  \n}\n#particles-js{\n    width:100%;\n    height:100%;\n}\nh1{\nfont-size: 7rem;\n\ntop: 35%;\nleft: 35%;\ncolor: #FFF;\nfont-family: teko;\nfont-weight: 400;\ntext-shadow: 5px 5px #5F6D72;\ntext-transform: uppercase;\n}\n.background {\n    background-image: url(\"https://images4.alphacoders.com/485/48578.jpg\");\n\n     filter: blur(15px);\n     -webkit-filter: blur(10px);\n     -moz-filter: blur(5px);\n     -o-filter: blur(5px);\n     -ms-filter: blur(5px);\n     filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius=2); \n \n}\n/* BACKGROUND */\n.background, .backdrop {\n\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-size: cover;\n}\n@font-face {\n font-family: 'Source Sans Pro';\n font-style: normal;\n font-weight: 300;\n src: local('Source Sans Pro Light'), local('SourceSansPro-Light'), url('sourcesanspro-light.woff') format('woff');\n}\n@font-face {\n font-family: 'Source Sans Pro';\n font-style: normal;\n font-weight: 400;\n src: local('Source Sans Pro'), local('SourceSansPro-Regular'), url('sourcesanspro.woff') format('woff');\n}\n@font-face {\n font-family: 'Source Sans Pro';\n font-style: normal;\n font-weight: 700;\n src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url('sourcesanspro-bold.woff') format('woff');\n}\n.text-shadow {\n font-size: 100px;\n text-shadow: 0 1px 0 #dee5e7, 0 2px 0 #fcfdfd, 0 5px 10px rgba(0, 0, 0, 0.125), 0 10px 20px rgba(0, 0, 0, 0.2);\n text-align: center;\n}\n.text-white {\n color: #fff;\n text-align: center;\n}\n.attibution {\n text-align: center;\n margin-top: 7px;\n color: #FFFFFF;\n line-height: 25px;\n}\n.truc-a-centrer {\n position: absolute; /* postulat de départ */\n top: 50%; left: 50%; /* à 50%/50% du parent référent */\n -webkit-transform: translate(-50%, -50%);\n         transform: translate(-50%, -50%); /* décalage de 50% de sa propre taille */\n}"

/***/ }),

/***/ "./src/app/auth/logout/logout.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/logout/logout.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <section id=\"logout\">\n          <div class=\"background\" id=\"background\" style=\"left: -4.18424%; right: -4.18424%; top: -5.59548%; bottom: -5.59548%; z-index: -1;\"></div>     \n\n                  <div >\n                  <!--     <div class=\"logo\">\n                          <img width=\"200\" height=\"200\" src=\"../../../assets/img/portrait/avatars/avatar-08.png\">\n                      </div> -->\n                      <h3 class=\"text-shadow text-white\">You are Logged Out</h3>\n                  </div>\n                  \n                \n      <div>\n      \n      <script type=\"text/javascript\">\n                      $('#background').mouseParticles({ moveFactor: 5 });\n                  </script>\n          </div>\n  \n  <div class=\"attibution\">\n              &copy; {{dateNow | date: 'yyyy'}} aero-it.net\n      </div>\n     \n  </section>\n\n"

/***/ }),

/***/ "./src/app/auth/logout/logout.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/logout/logout.component.ts ***!
  \*************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(user, router, auth) {
        this.user = user;
        this.router = router;
        this.auth = auth;
        this.dateNow = new Date();
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.logout().subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['']);
                _this.auth.setLoggedIn(false);
            }
            else {
                window.alert('Some problem');
            }
        });
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/auth/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/auth/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/auth/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getSomeData = function () {
        return this.http.get('http://localhost/api/database.php');
    };
    UserService.prototype.isLoggedIn = function () {
        return this.http.get('http://localhost/api/isloggedin.php');
    };
    UserService.prototype.logout = function () {
        return this.http.get('http://localhost/api/logout.php');
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"content-wrapper\">\n        <div class=\"container-fluid\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: ContentLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLayoutComponent", function() { return ContentLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContentLayoutComponent = /** @class */ (function () {
    function ContentLayoutComponent() {
    }
    ContentLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-layout',
            template: __webpack_require__(/*! ./content-layout.component.html */ "./src/app/layouts/content/content-layout.component.html"),
            styles: [__webpack_require__(/*! ./content-layout.component.scss */ "./src/app/layouts/content/content-layout.component.scss")]
        })
    ], ContentLayoutComponent);
    return ContentLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\"> \n\n   <div class=\"app-sidebar\" data-active-color=\"white\" data-background-color=\"black\" data-image=\"assets/img/sidebar-bg/01.jpg\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n\n        <div class=\"main-content\">\n            <div class=\"content-wrapper\">\n                <div class=\"container-fluid\">\n                    <router-outlet></router-outlet>\n                </div>\n            </div>\n        </div>\n        <app-footer></app-footer>\n    </div>\n<app-customizer></app-customizer>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent() {
    }
    FullLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-full-layout',
            template: __webpack_require__(/*! ./full-layout.component.html */ "./src/app/layouts/full/full-layout.component.html"),
            styles: [__webpack_require__(/*! ./full-layout.component.scss */ "./src/app/layouts/full/full-layout.component.scss")]
        })
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/customizer/customizer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Theme customizer Starts-->\n<div class=\"customizer border-left-blue-grey border-left-lighten-4 d-none d-sm-none d-md-block \">\n\t<a class=\"customizer-close\">\n\t\t<i class=\"ft-x font-medium-3\"></i>\n\t</a>\n\t<a class=\"customizer-toggle bg-info\" id=\"customizer-toggle-icon\">\n\t\t<i class=\"ft-settings font-medium-4 fa fa-spin white align-middle\"></i>\n\t</a>\n\t<div class=\"customizer-content p-3 ps-container ps-theme-dark\" data-ps-id=\"df6a5ce4-a175-9172-4402-dabd98fc9c0a\">\n\t\t<h4 style=\"text-align: center\" class=\"text-uppercase mb-0 text-bold-400\">{{ 'THEME_CUSTOMIZER' | translate }}</h4>\n\t\t<p style=\"text-align: center\">{{ 'THEME_CUSTOMIZER1' | translate }}</p>\n\t\t<hr>\n\t\t<!--Sidebar Options Starts-->\n\t\t<h6 class=\"text-center text-bold-500 mb-3 text-uppercase\">{{ 'Sidebar_Color_Options' | translate }}</h6>\n\t\t<div class=\"cz-bg-color\">\n\t\t\t<div class=\"row p-1\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<span class=\"gradient-pomegranate d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"pomegranate\"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<span class=\"gradient-king-yna d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"king-yna\"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<span class=\"gradient-ibiza-sunset d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"ibiza-sunset\"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<span class=\"gradient-flickr d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"flickr\"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<span class=\"gradient-purple-bliss d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"purple-bliss\"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<span class=\"gradient-man-of-steel d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"man-of-steel\"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<span class=\"gradient-purple-love d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"purple-love\"></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row p-1\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<span class=\"bg-black d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"black\"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<span class=\"bg-grey d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"white\"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<span class=\"bg-primary d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"primary\"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<span class=\"bg-success d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"success\"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<span class=\"bg-warning d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"warning\"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<span class=\"bg-info d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"info\"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<span class=\"bg-danger d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"danger\"></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--Sidebar Options Ends-->\n\t\t<hr>\n\n\t\t<!--Sidebar BG Image Starts-->\n\t\t<h6 class=\"text-center text-bold-500 mb-3 text-uppercase\">{{ 'Sidebar_Bg_Image' | translate }}</h6>\n\t\t<div class=\"cz-bg-image row\">\n\t\t\t<div class=\"col mb-3\">\n\t\t\t\t<img src=\"assets/img/sidebar-bg/01.jpg\" class=\"rounded\" width=\"90\">\n\t\t\t</div>\n\t\t\t<div class=\"col mb-3\">\n\t\t\t\t<img src=\"assets/img/sidebar-bg/02.jpg\" class=\"rounded\" width=\"90\">\n\t\t\t</div>\n\t\t\t<div class=\"col mb-3\">\n\t\t\t\t<img src=\"assets/img/sidebar-bg/03.jpg\" class=\"rounded\" width=\"90\">\n\t\t\t</div>\n\t\t\t<div class=\"col mb-3\">\n\t\t\t\t<img src=\"assets/img/sidebar-bg/04.jpg\" class=\"rounded\" width=\"90\">\n\t\t\t</div>\n\t\t\t<div class=\"col mb-3\">\n\t\t\t\t<img src=\"assets/img/sidebar-bg/05.jpg\" class=\"rounded\" width=\"90\">\n\t\t\t</div>\n\t\t\t<div class=\"col mb-3\">\n\t\t\t\t<img src=\"assets/img/sidebar-bg/06.jpg\" class=\"rounded\" width=\"90\">\n\t\t\t</div>\n\t\t</div>\n\t\t<!--Sidebar BG Image Ends-->\n\t\t<hr>\n\n\t\t<!--Sidebar BG Image Toggle Starts-->\n\t\t<div class=\"togglebutton\">\n\t\t\t<div class=\"switch\">\n\t\t\t\t<span>{{ 'Sidebar_Bg_Image' | translate }}</span>\n\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t  <label class=\"switch_wrap\" >\n\t\t\t\t\t\t<input class=\"cz-bg-image-display\" type=\"checkbox\" value=\"1\" checked />\n\t\t\t\t\t\t<div class=\"switch\">\n\t\t\t\t\t\t\t<span class=\"bullet\"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--Sidebar BG Image Toggle Ends-->\n\t\t<hr>\n\n\t\t<!--Compact Menu Starts-->\n\t\t<div class=\"togglebutton\">\n\t\t\t<div class=\"switch\">\n\t\t\t\t<span>{{ 'Compact_Menu' | translate }}</span>\n\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t<label class=\"switch_wrap\" for=\"cz-compact-menu\">\n\t\t\t\t\t\t<input id=\"cz-compact-menu\" class=\"cz-compact-menu\" type=\"checkbox\" value=\"1\" />\n\t\t\t\t\t\t\t<div class=\"switch\">\n\t\t\t\t\t\t\t\t<span class=\"bullet\"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t  </label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--Compact Menu Ends-->\n\t\t<hr>\n\n\t\t<!--Sidebar Width Starts-->\n\t\t<div>\n\t\t\t<label for=\"cz-sidebar-width\">{{ 'Sidebar_Width' | translate }}</label>\n\t\t\t<select id=\"cz-sidebar-width\" class=\"custom-select cz-sidebar-width float-right\">\n\t\t\t\t<option value=\"small\">{{ 'Small' | translate }}</option>\n\t\t\t\t<option value=\"medium\" selected>{{ 'Medium' | translate }}</option>\n\t\t\t\t<option value=\"large\">{{ 'Large' | translate }}</option>\n\t\t\t</select>\n\t\t</div>\n\t\t<!--Sidebar Width Ends-->\n\t</div>\n</div>\n\n<!--Theme customizer Ends-->"

/***/ }),

/***/ "./src/app/shared/customizer/customizer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customizer {\n  width: 400px;\n  right: -400px;\n  padding: 0;\n  background-color: #FFF;\n  z-index: 1051;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); }\n  .customizer.open {\n    right: 0; }\n  .customizer .customizer-content {\n    position: relative;\n    height: 100%; }\n  .customizer a.customizer-toggle {\n    background: #FFF;\n    color: theme-color(\"primary\");\n    display: block;\n    box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1); }\n  .customizer a.customizer-close {\n    color: #000; }\n  .customizer .customizer-close {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    padding: 7px;\n    width: auto;\n    z-index: 10; }\n  .customizer .customizer-toggle {\n    position: absolute;\n    top: 35%;\n    width: 54px;\n    height: 50px;\n    left: -54px;\n    text-align: center;\n    line-height: 50px;\n    cursor: pointer; }\n  .customizer .color-options a {\n    white-space: pre; }\n  .customizer .cz-bg-color {\n    margin: 0 auto; }\n  .customizer .cz-bg-color span:hover {\n      cursor: pointer; }\n  .customizer .cz-bg-color span.white {\n      color: #ddd !important; }\n  .customizer .cz-bg-color .selected {\n      border: 3px solid #314fe5; }\n  .customizer .cz-bg-image:hover {\n    cursor: pointer; }\n  .customizer .cz-bg-image img.rounded {\n    border-radius: 1rem !important;\n    border: 2px solid #e6e6e6; }\n  .customizer .cz-bg-image img.rounded.selected {\n      border: 2px solid #1cbcd8; }\n  .switch_wrap input[type=\"checkbox\"] {\n  display: none; }\n  .switch_wrap input[type=\"checkbox\"]:checked + .switch {\n  background-color: #6cbc43; }\n  .switch_wrap input[type=\"checkbox\"]:checked + .switch::before {\n  display: block; }\n  .switch_wrap input[type=\"checkbox\"]:checked + .switch::after {\n  display: none; }\n  .switch_wrap input[type=\"checkbox\"]:checked + .switch .bullet {\n  left: 33px; }\n  .switch_wrap .switch {\n  position: relative;\n  display: inline-block;\n  width: 65px;\n  height: 24px;\n  line-height: 24px;\n  margin-right: 1em;\n  margin-top: -3px;\n  vertical-align: middle;\n  background-color: #c1272d;\n  border-radius: 3px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25) inset, 0 1px 0 white; }\n  .switch_wrap .switch::before,\n.switch_wrap .switch::after {\n  content: 'ON';\n  display: none;\n  width: 50%;\n  position: absolute;\n  top: 0;\n  font-size: 11px;\n  font-weight: bold;\n  color: white;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n  text-align: center; }\n  .switch_wrap .switch::after {\n  content: 'OFF';\n  display: block;\n  right: 0; }\n  .switch_wrap .switch .bullet {\n  position: relative;\n  display: block;\n  width: 32px;\n  height: 26px;\n  top: -2px;\n  left: -2px;\n  background-color: #f0f0f0;\n  background-image: -o-linear-gradient(top, #f0f0f0, #e6e6e6);\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-radius: 3px;\n  box-shadow: 0 1px 0 white inset, 0 1px 1px rgba(0, 0, 0, 0.25);\n  transition: left 0.1s linear; }\n  .switch_wrap .switch .bullet::before,\n.switch_wrap .switch .bullet::after {\n  content: '';\n  display: block;\n  height: 15px;\n  width: 3px;\n  position: absolute;\n  top: 5px;\n  left: 50%;\n  margin-left: -6px;\n  border: 1px solid #cccccc;\n  border-width: 0 1px;\n  box-shadow: 1px 0 0 white, 1px 0 0 white inset; }\n  .switch_wrap .switch .bullet::after {\n  margin-left: 2px; }\n"

/***/ }),

/***/ "./src/app/shared/customizer/customizer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerComponent", function() { return CustomizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent() {
    }
    CustomizerComponent.prototype.ngOnInit = function () {
        // Customizer JS File
        $.getScript('./assets/js/customizer.js');
    };
    CustomizerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customizer',
            template: __webpack_require__(/*! ./customizer.component.html */ "./src/app/shared/customizer/customizer.component.html"),
            styles: [__webpack_require__(/*! ./customizer.component.scss */ "./src/app/shared/customizer/customizer.component.scss")]
        })
    ], CustomizerComponent);
    return CustomizerComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/toggle-fullscreen.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/toggle-fullscreen.directive.ts ***!
  \******************************************************************/
/*! exports provided: ToggleFullscreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullscreenDirective", function() { return ToggleFullscreenDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToggleFullscreenDirective = /** @class */ (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_1__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_1__["toggle"]();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToggleFullscreenDirective.prototype, "onClick", null);
    ToggleFullscreenDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appToggleFullscreen]'
        })
    ], ToggleFullscreenDirective);
    return ToggleFullscreenDirective;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer Starts-->\n<footer>\n    <div class=\"container-fluid\">\n        <p class=\"copyright text-center\">\n                Copyright &copy; {{currentDate | date: 'yyyy'}} <a href=\"www.aero-it.net\"> aero.it</a>, All rights reserved.\n     \n        </p>\n    </div>\n</footer>\n<!--Footer Ends-->\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.currentDate = new Date();
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // moduleId: module.id,
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-faded\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle d-lg-none float-left\" data-toggle=\"collapse\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <!-- <form class=\"navbar-form navbar-right mt-1\" role=\"search\">\n                <div class=\"position-relative has-icon-right\">\n                    <input type=\"text\" class=\"form-control round\" placeholder=\"Search\">\n                    <div class=\"form-control-position\">\n                        <i class=\"ft-search\"></i>\n                    </div>\n                </div>\n            </form> -->\n        </div>\n        <div class=\"navbar-container\">\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                <ul class=\"navbar-nav\">\n                    <li class=\"nav-item mr-2\">\n                        <a href=\"javascript:;\" class=\"nav-link\" appToggleFullscreen>                            \n                            <i class=\"ft-maximize font-medium-3 blue-grey darken-4\"></i>\n                            <p class=\"d-none\">fullscreen</p>\n                        </a>\n                    </li>\n                   <!--  <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic2\" ngbDropdownToggle>\n                            <i class=\"ft-bell font-medium-3 blue-grey darken-4\"></i>\n                            <span class=\"notification badge badge-pill badge-info\">4</span>\n                            <p class=\"d-none\">Notifications</p>\n                        </a>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\" class=\"notification-dropdown\">\n                            <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\n                                <i class=\"ft-bell blue-grey lighten-3 float-left d-block font-large-1 mt-1 mr-2\"></i>\n                                <span class=\"noti-wrapper\">\n                                    <span class=\"noti-title line-height-1 d-block text-bold-400\">New Order Received</span>\n                                    <span class=\"noti-text\">Lorem ipsum dolor sit ametitaque in, et!</span>\n                                </span>\n                            </a>\n                            <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\n                                <i class=\"ft-bell blue-grey lighten-3 float-left d-block font-large-1 mt-1 mr-2\"></i>\n                                <span class=\"noti-wrapper\">\n                                    <span class=\"noti-title line-height-1 d-block text-bold-400\">New User Registered</span>\n                                    <span class=\"noti-text\">Lorem ipsum dolor sit ametitaque in </span>\n                                </span>\n                            </a>\n                            <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\n                                <i class=\"ft-bell blue-grey lighten-3 float-left d-block font-large-1 mt-1 mr-2\"></i>\n                                <span class=\"noti-wrapper\">\n                                    <span class=\"noti-title line-height-1 d-block text-bold-400\">New Order Received</span>\n                                    <span class=\"noti-text\">Lorem ipsum dolor sit ametest?</span>\n                                </span>\n                            </a>\n                            <a class=\"dropdown-item noti-container py-3\">\n                                <i class=\"ft-bell blue-grey lighten-3 float-left d-block font-large-1 mt-1 mr-2\"></i>\n                                <span class=\"noti-wrapper\">\n                                    <span class=\"noti-title line-height-1 d-block text-bold-400\">New User Registered</span>\n                                    <span class=\"noti-text\">Lorem ipsum dolor sit ametnatus aut.</span>\n                                </span>\n                            </a>\n                            <a class=\"noti-footer primary text-center d-block border-top border-top-blue-grey border-top-lighten-4 text-bold-400 py-1\">Read All Notifications</a>\n                        </div>\n                    </li> -->\n                   \n                        <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic3\" ngbDropdownToggle>\n                            <i class=\"fa fa-language font-medium-3 blue-grey darken-4\"></i>\n                            <p class=\"d-none\"> {{ 'Languages'  | translate }}</p>\n                        </a>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic3\">\n                            <a class=\"dropdown-item py-1\"  href=\"javascript:void(0)\" (click)=\"changeLang('en')\">\n\t\t\t\t\t\t\t\t<img class=\" mr-2\" src=\"assets/flags/US.png\">\n                                <span>&nbsp;{{ 'English'  | translate }}  </span>\n                            </a>\n\t\t\t\t\t\t\t\n                            <a class=\"dropdown-item py-1\"  href=\"javascript:void(0)\"  (click)=\"changeLang('fr')\">\n                                <img class=\" mr-2\" src=\"assets/flags/FR.png\">\n                                <span>&nbsp;{{ 'French'  | translate }}</span>\n                            </a>\n                        </div>\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic3\" ngbDropdownToggle>\n                            <i class=\"ft-user font-medium-3 blue-grey darken-4\"></i>\n                            <p class=\"d-none\">{{ 'User-Settings'  | translate }}</p>\n                        </a>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic3\">\n                            <a class=\"dropdown-item py-1\" href=\"javascript:;\">\n                                <i class=\"ft-settings mr-2\"></i>\n                                <span>{{ 'Settings'  | translate }}</span>\n                            </a>\n                            <a class=\"dropdown-item py-1\" href=\"javascript:;\">\n                                <i class=\"ft-edit mr-2\"></i>\n                                <span>{{ 'Edit-Profile'  | translate }}</span>\n                            </a>\n                            <a class=\"dropdown-item py-1\" href=\"javascript:;\">\n                                <i class=\"ft-mail mr-2\"></i>\n                                <span>{{ 'My-Inbox'  | translate }}</span>\n                            </a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a class=\"dropdown-item\" href=\"javascript:;\" routerLink=\"/logout\">\n                                <i class=\"ft-power mr-2\"></i>\n                                <span>{{ 'Logout'  | translate }}</span>\n                                \n                            </a>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate, router, route) {
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.translate.addLangs(['en', 'fr']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/routes/content-layout.routes.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/routes/content-layout.routes.ts ***!
  \********************************************************/
/*! exports provided: CONTENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_ROUTES", function() { return CONTENT_ROUTES; });
//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
var CONTENT_ROUTES = [
    {
        path: 'content-layout',
        loadChildren: './pages/content-layout-page/content-pages.module#ContentPagesModule'
    }
];


/***/ }),

/***/ "./src/app/shared/routes/full-layout.routes.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/routes/full-layout.routes.ts ***!
  \*****************************************************/
/*! exports provided: Full_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Full_ROUTES", function() { return Full_ROUTES; });
//Route for content layout with sidebar, navbar and footer
var Full_ROUTES = [
    {
        path: 'changelog',
        loadChildren: './changelog/changelog.module#ChangeLogModule'
    },
    // Agency  
    {
        path: 'agencyprofile',
        loadChildren: './admin/agency/agencyprofile/agencyprofile.module#AgencyprofileModule'
    },
    {
        path: 'users',
        loadChildren: './admin/agency/users/users.module#UsersModule'
    },
    {
        path: 'setting',
        loadChildren: './admin/agency/setting/setting.module#SettingModule'
    },
    //Client
    {
        path: 'agencies',
        loadChildren: './admin/client/agencies/agencies.module#AgenciesModule'
    },
    {
        path: 'corporateclients',
        loadChildren: './admin/client/corporateclients/corporateclients.module#CorporateclientsModule'
    },
    {
        path: 'distributors',
        loadChildren: './admin/client/distributors/distributors.module#DistributorsModule'
    },
    {
        path: 'privateclient',
        loadChildren: './admin/client/privateclient/privateclient.module#PrivateclientModule'
    },
    //Finance
    {
        path: 'bill',
        loadChildren: './admin/finance/bill/bill.module#BillModule'
    },
    //Management
    {
        path: 'management',
        loadChildren: './admin/management/management.module#ManagementModule'
    },
    //SecuritiesManagement
    {
        path: 'cashing',
        loadChildren: './admin/securitiesmanagement/cashing/cashing.module#CashingModule'
    },
    {
        path: 'securitiesinstances',
        loadChildren: './admin/securitiesmanagement/securitiesinstances/securitiesinstances.module#SecuritiesinstancesModule'
    },
    //
    {
        path: 'full-layout',
        loadChildren: './pages/full-layout-page/full-pages.module#FullPagesModule'
    }
];


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customizer/customizer.component */ "./src/app/shared/customizer/customizer.component.ts");
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/toggle-fullscreen.directive */ "./src/app/shared/directives/toggle-fullscreen.directive.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_7__["CustomizerComponent"],
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_8__["ToggleFullscreenDirective"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_7__["CustomizerComponent"],
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_8__["ToggleFullscreenDirective"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar-routes.config.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar-routes.config.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
var ROUTES = [
    {
        path: '/full-layout', title: 'Dashboard', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    /* {
        path: 'full-layout/content-layout', title: 'Content Layout', icon: 'ft-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    }, */
    {
        path: 'javascript:;', title: 'Agency', icon: 'ft-globe', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/agencyprofile', title: 'Agency Profile', icon: 'fa fa-vcard-o', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/users', title: 'Users', icon: 'fa fa-user', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/setting', title: 'Setting', icon: 'fa fa-cogs', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '/Client ', title: 'Client ', icon: 'fa fa-user', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/agencies', title: 'Agencies', icon: 'ft-globe', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/distributors', title: 'Distributors', icon: 'fa fa-sitemap', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/corporateclients', title: 'Corporate clients', icon: 'fa fa-handshake-o', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/privateclient', title: 'Private clients', icon: 'fa fa-user-secret', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    /*  {
         path: '/Fournisseurs ', title: 'Fournisseurs ', icon: 'fa fa-user', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
         submenu: [
             { path: 'javascript:;', title: '', icon: 'ft-globe', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
         ]
      
     }, */
    {
        path: '/Securitiesmanagement ', title: 'Gestion des Titres ', icon: 'fa fa-exchange', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/cashing', title: 'Encaissements', icon: 'ft-globe', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/securitiesinstances', title: 'Titres en Instances', icon: 'fa fa-history', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '/Finance  ', title: 'Finance ', icon: 'fa fa-line-chart', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/bill', title: 'Bill', icon: 'fa fa-money', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '/Gestions  ', title: 'Gestions  ', icon: 'fa fa-tasks', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/management', title: 'Suivie Clients', icon: 'fa fa-connectdevelop', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    /*   path: '', title: 'PNR', icon: 'fa fa-plane', class: 'has-sub', badge: '1', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
       submenu: [
           { path: 'javascript:;', title: 'Second Level', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
           {
               path: '', title: 'Second Level Child', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
               submenu: [
                   { path: 'javascript:;', title: 'Third Level 1.1', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                   { path: 'javascript:;', title: 'Third Level 1.2', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
               ]
           },
       ]*/
    {
        path: '/changelog', title: 'ChangeLog', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    { path: 'https://www.aero-it.net/ret-projet/documentation', title: 'Documentation', icon: 'ft-folder', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    { path: 'https://support.aero-it.net/', title: 'Support', icon: 'ft-life-buoy', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
];


/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.css":
/*!******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar Header starts -->\n<div class=\"sidebar-header\">\n    <div class=\"logo\">\n        <a [routerLink]=\"['/']\" class=\"logo-text\">\n            <div class=\"logo-img\">\n                <img src=\"assets/img/logo.png\" />\n            </div>\n            <span class=\"text align-middle\">AERO.IT</span>\n        </a>\n        <a class=\"nav-toggle hidden-sm hidden-xs\" href=\"javascript:;\">\n            <i class=\"ft-toggle-right toggle-icon\" data-toggle=\"expanded\"></i>\n        </a>\n    </div>\n</div>\n<!-- Sidebar Header Ends -->\n\n<!-- Sidebar Content starts -->\n<div class=\"sidebar-content\">\n    <div class=\"nav-container\">\n        <ul class=\"navigation\">\n            <!-- First level menu -->\n            <li *ngFor=\"let menuItem of menuItems\" [ngClass]=\"[menuItem.class]\" [routerLinkActive]=\"menuItem.submenu.length != 0 ? '' : 'active'\"\n                [routerLinkActiveOptions]=\"{exact: true}\">\n                <a [routerLink]=\"menuItem.class === '' ? [menuItem.path] : null\" *ngIf=\"!menuItem.isExternalLink; else externalLinkBlock\">\n                    <i [ngClass]=\"[menuItem.icon]\"></i>\n                    <span class=\"menu-title\">{{ menuItem.title | translate }}</span>\n                    <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\n                </a>\n                <ng-template #externalLinkBlock>\n                    <a [href]=\"[menuItem.path]\" target=\"_blank\">\n                        <i [ngClass]=\"[menuItem.icon]\"></i>\n                        <span class=\"menu-title\">{{ menuItem.title | translate }}</span>\n                        <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\n                    </a>\n                </ng-template>\n                <!-- Second level menu -->\n                <ul class=\"menu-content\" *ngIf=\"menuItem.submenu.length > 0\">\n                    <li *ngFor=\"let menuSubItem of menuItem.submenu\" [routerLinkActive]=\"menuSubItem.submenu.length > 0 ? '' : 'active'\" [ngClass]=\"[menuSubItem.class]\">\n                        <a [routerLink]=\"menuSubItem.submenu.length > 0 ? null : [menuSubItem.path]\" *ngIf=\"!menuSubItem.isExternalLink; else externalSubLinkBlock\">\n                            <i [ngClass]=\"[menuSubItem.icon]\"></i>\n                            <span class=\"menu-title\">{{ menuSubItem.title | translate }}</span>\n                            <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\n                        </a>\n                        <ng-template #externalSubLinkBlock>\n                            <a [href]=\"[menuSubItem.path]\">\n                                <i [ngClass]=\"[menuSubItem.icon]\"></i>\n                                <span class=\"menu-title\">{{ menuSubItem.title | translate }}</span>\n                                <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\n                            </a>\n                        </ng-template>\n                        <!-- Third level menu -->\n                        <ul class=\"menu-content\" *ngIf=\"menuSubItem.submenu.length > 0\">\n                            <li *ngFor=\"let menuSubsubItem of menuSubItem.submenu\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"\n                                [ngClass]=\"[menuSubsubItem.class]\">\n                                <a [routerLink]=\"[menuSubsubItem.path]\" *ngIf=\"!menuSubsubItem.isExternalLink; else externalSubSubLinkBlock\">\n                                    <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\n                                    <span class=\"menu-title\">{{ menuSubsubItem | translate }}</span>\n                                    <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\n                                </a>\n                                <ng-template #externalSubSubLinkBlock>\n                                    <a [href]=\"[menuSubsubItem.path]\">\n                                        <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\n                                        <span class=\"menu-title\">{{ menuSubsubItem | translate }}</span>\n                                        <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\n                                    </a>\n                                </ng-template>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar-routes.config */ "./src/app/shared/sidebar/sidebar-routes.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(translate, router, route) {
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.translate.addLangs(['en', 'fr']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    SidebarComponent.prototype.ngOnInit = function () {
        // Customizer JS File
        $.getScript('./assets/js/app-sidebar.js');
        this.menuItems = _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // moduleId: module.id,
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/shared/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");



Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
/* if (environment.production) {
  enableProdMode();
} */
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\aero.it\Desktop\projet\frontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map