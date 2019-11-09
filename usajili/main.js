(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_services/after-login.service.ts":
/*!**************************************************!*\
  !*** ./src/app/_services/after-login.service.ts ***!
  \**************************************************/
/*! exports provided: AfterLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterLoginService", function() { return AfterLoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/_services/token.service.ts");



var AfterLoginService = /** @class */ (function () {
    function AfterLoginService(token) {
        this.token = token;
    }
    AfterLoginService.prototype.canActivate = function (route, state) {
        return this.token.loggedIn();
    };
    AfterLoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
    ], AfterLoginService);
    return AfterLoginService;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.service */ "./src/app/_services/token.service.ts");





var AuthService = /** @class */ (function () {
    function AuthService(http, token) {
        this.http = http;
        this.token = token;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.token.loggedIn());
        this.authStatus = this.loggedIn.asObservable();
        this.api_url = 'http://3.122.199.78:8001/api/auth/';
    }
    AuthService.prototype.changeAuthStatus = function (value) {
        this.loggedIn.next(value);
    };
    AuthService.prototype.login = function (formData) {
        return this.http.post(this.api_url + 'login', formData);
    };
    AuthService.prototype.register = function (formData) {
        return this.http.post(this.api_url + 'register', formData);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/before-login.service.ts":
/*!***************************************************!*\
  !*** ./src/app/_services/before-login.service.ts ***!
  \***************************************************/
/*! exports provided: BeforeLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeLoginService", function() { return BeforeLoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/_services/token.service.ts");



var BeforeLoginService = /** @class */ (function () {
    function BeforeLoginService(token) {
        this.token = token;
    }
    BeforeLoginService.prototype.canActivate = function (route, state) {
        return !this.token.loggedIn();
    };
    BeforeLoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
    ], BeforeLoginService);
    return BeforeLoginService;
}());



/***/ }),

/***/ "./src/app/_services/opening.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/opening.service.ts ***!
  \**********************************************/
/*! exports provided: OpeningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpeningService", function() { return OpeningService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.service */ "./src/app/_services/token.service.ts");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'here',
    })
};
var OpeningService = /** @class */ (function () {
    function OpeningService(http, tokenservice) {
        this.http = http;
        this.tokenservice = tokenservice;
    }
    OpeningService.prototype.getCategories = function () {
        // get the token
        this.token = 'bearer ' + this.tokenservice.get();
        // add token to http headers
        httpOptions.headers = httpOptions.headers.set('Authorization', this.token);
        // get data from api
        return this.http.get('http://3.122.199.78:8001/api/categories/list', httpOptions);
    };
    OpeningService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], OpeningService);
    return OpeningService;
}());



/***/ }),

/***/ "./src/app/_services/token.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/token.service.ts ***!
  \********************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TokenService = /** @class */ (function () {
    function TokenService() {
    }
    TokenService.prototype.handle = function (token) {
        // set token in localstorage
        this.set(token);
    };
    TokenService.prototype.set = function (token) {
        localStorage.setItem('token', token);
    };
    TokenService.prototype.get = function () {
        return localStorage.getItem('token');
    };
    TokenService.prototype.remove = function () {
        localStorage.removeItem('token');
    };
    TokenService.prototype.checkToken = function () {
        var token = this.get();
        if (token) {
            var payload = this.payload(token);
            if (payload) {
                return payload.iss === 'http://3.122.199.78:8001/api/auth/login' ? true : false;
            }
        }
        return false;
    };
    TokenService.prototype.payload = function (token) {
        var payload = token.split('.')[1];
        return this.decode(payload);
        // return payload;
    };
    TokenService.prototype.decode = function (payload) {
        return JSON.parse(atob(payload));
    };
    TokenService.prototype.loggedIn = function () {
        return this.checkToken();
    };
    TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _error_error404_error404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error/error404/error404.component */ "./src/app/error/error404/error404.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _services_before_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_services/before-login.service */ "./src/app/_services/before-login.service.ts");
/* harmony import */ var _services_after_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_services/after-login.service */ "./src/app/_services/after-login.service.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");












var routes = [
    {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    {
        path: 'categories',
        component: _category_category_component__WEBPACK_IMPORTED_MODULE_11__["CategoryComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    {
        path: 'auth/sign-in',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        canActivate: [_services_before_login_service__WEBPACK_IMPORTED_MODULE_8__["BeforeLoginService"]],
    },
    {
        path: 'auth/sign-up',
        component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]],
    },
    { path: '**', component: _error_error404_error404_component__WEBPACK_IMPORTED_MODULE_4__["Error404Component"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'usajili';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _incs_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./incs/navbar/navbar.component */ "./src/app/incs/navbar/navbar.component.ts");
/* harmony import */ var _incs_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./incs/footer/footer.component */ "./src/app/incs/footer/footer.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _error_error404_error404_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./error/error404/error404.component */ "./src/app/error/error404/error404.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _incs_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./incs/sidebar/sidebar.component */ "./src/app/incs/sidebar/sidebar.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _incs_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _incs_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _auth_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _error_error404_error404_component__WEBPACK_IMPORTED_MODULE_13__["Error404Component"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_14__["MainComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
                _incs_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_17__["CategoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sign-up-link{\n    font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWduLXVwLWxpbmt7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<section>\n\n    <div class=\"container\">\n      <div class=\"row no-gutters justify-content-between align-items-center min-vh-100 min-vh-100-ie-hack \">\n\n          <div class=\"col-12 col-md-5 align-self-stretch\">\n\n              <!-- Image (mobile) -->\n            <img src=\"assets/img/photos/photo-5.jpg\" class=\"d-md-none img-cover\" alt=\"...\">\n\n            <!-- Image -->\n            <div class=\"d-none d-md-block vw-50 h-100 float-right bg-cover\" style=\"background-image: url(assets/img/covers/cover-10.jpg);\"></div>\n\n          </div>\n\n          <div class=\"col-12 col-md-6 py-8 py-md-11\">\n            <!-- divider -->\n            <hr class=\"hr-sm my-6 my-md-8 border-gray-300\">\n\n            <div class=\"alert alert-danger\" [hidden]=\"!error\">\n              {{ error }}\n            </div>\n            <form #loginForm=ngForm (ngSubmit)=\"onSubmit()\">\n\n\n\n              <div class=\"form-group mb-5\">\n\n              <!-- email -->\n              <input type=\"email\"\n                    name=\"email\"\n                    id=\"email\"\n                    required\n                    placeholder=\"Email Address\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"form.email\">\n              </div>\n              <span class=\"text-error\" [hidden]=\"!errorEmail\">\n                  {{ errorEmail }}\n              </span>\n\n              <div class=\"form-group mb-5\">\n\n              <!-- password -->\n              <input type=\"password\"\n                    name=\"password\"\n                    id=\"password\"\n                    required\n                    placeholder=\"Password\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"form.password\">\n\n              </div>\n\n\n              \n\n\n              <div class=\"form-group mb-5 \">\n                <!-- submit button -->\n                <input type=\"submit\" class=\"btn btn-primary lift\" [disabled]=\"!loginForm.valid\">\n\n              </div>\n            </form>\n\n            <hr>\n\n            <div class=\"form-group center\">\n                <div class=\"sign-up-link text-center\">\n                  Don't have an account? <a routerLink=\"/auth/sign-up\">Sign Up</a>\n                </div>\n              </div>\n          </div>\n\n      </div>\n    </div>\n</section>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/token.service */ "./src/app/_services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, token, router) {
        this.auth = auth;
        this.token = token;
        this.router = router;
        this.form = {
            email: null,
            password: null,
        };
        this.error = null;
        this.errorEmail = null;
        this.results = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        // change login button to loading
        var _this = this;
        // remove all errors from the page
        this.errorEmail = null;
        this.error = '';
        // post data to the login page
        this.auth.login(this.form).subscribe(function (data) {
            _this.handleResponse(data);
        }, 
        // handle any error
        function (error) { return _this.handleError(error); });
    };
    LoginComponent.prototype.handleResponse = function (data) {
        this.results = data;
        // handle the token
        this.token.handle(data.access_token);
        // change auth status
        this.auth.changeAuthStatus(true);
        //  navigate to home
        this.router.navigateByUrl('/home');
        console.log('remove loader');
    };
    LoginComponent.prototype.handleError = function (error) {
        this.error = error.error.message;
        this.errorEmail = error.error.email;
        console.log(this.error);
        this.form.password = '';
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<section>\n\n    <div class=\"container\">\n      <div class=\"row no-gutters justify-content-between align-items-center min-vh-100 min-vh-100-ie-hack \">\n\n          <div class=\"col-12 col-md-5 align-self-stretch\">\n\n              <!-- Image (mobile) -->\n            <img src=\"assets/img/photos/photo-5.jpg\" class=\"d-md-none img-cover\" alt=\"...\">\n\n            <!-- Image -->\n            <div class=\"d-none d-md-block vw-50 h-100 float-right bg-cover\" style=\"background-image: url(assets/img/covers/cover-10.jpg);\"></div>\n\n          </div>\n\n          <div class=\"col-12 col-md-6 py-8 py-md-11\">\n            <!-- divider -->\n            <hr class=\"hr-sm my-6 my-md-8 border-gray-300\">\n            <form #registerForm=ngForm (ngSubmit)=\"onSubmit()\">\n\n\n              <div class=\"form-group mb-5\">\n                <!-- username -->\n                <input type=\"text\" \n                      name=\"username\"\n                      id=\"username\"\n                      required\n                      autofocus\n                      placeholder=\"Username\"\n                      class=\"form-control\"\n                      [(ngModel)]=\"form.username\">\n                      <span class=\"text-error\" [hidden]=\"!errorUsername\">\n                          {{ errorUsername }}\n                      </span>\n              </div>\n\n              <div class=\"form-group mb-5\">\n\n              <!-- email -->\n              <input type=\"email\"\n                    name=\"email\"\n                    id=\"email\"\n                    required\n                    placeholder=\"Email Address\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"form.email\">\n                    <span class=\"text-error\" [hidden]=\"!errorEmail\">\n                        {{ errorEmail }}\n                    </span>\n              </div>\n\n              <div class=\"form-group mb-5\">\n\n              <!-- password -->\n              <input type=\"password\"\n                    name=\"password\"\n                    id=\"password\"\n                    required\n                    placeholder=\"Password\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"form.password\">\n                    <span class=\"text-error\" [hidden]=\"!errorPassword\">\n                        {{ errorPassword }}\n                    </span>\n\n              </div>\n\n             \n\n\n              <div class=\"form-group mb-5\">\n                <!-- submit button -->\n                <input type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!registerForm.valid\">\n\n              </div>\n            </form>\n          </div>\n\n      </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.form = {
            username: null,
            email: null,
            password: null,
        };
        this.errorEmail = null;
        this.errorUsername = null;
        this.errorPassword = null;
        this.results = null;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.errorEmail = null;
        this.errorUsername = null;
        this.errorPassword = null;
        this.auth.register(this.form).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handleError(error); });
        console.log("submit");
    };
    RegisterComponent.prototype.handleResponse = function (data) {
        this.results = data;
        // redirect user to login page
        this.router.navigate(['/auth/sign-in']);
        console.table(this.results);
    };
    RegisterComponent.prototype.handleError = function (error) {
        this.errorEmail = error.error.email;
        this.errorUsername = error.error.username;
        this.errorPassword = error.error.password;
        this.form.password = '';
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".small-image{\n    /* width: 100px; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc21hbGwtaW1hZ2V7XG4gICAgLyogd2lkdGg6IDEwMHB4OyAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n\n<section class=\"py-8 py-md-11 border-bottom\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-12 col-md-10 col-lg-8 text-center\">\n        \n        <!-- Headin -->\n        <h1 class=\"display-2\">\n          Categories\n        </h1>\n\n        <!-- Text -->\n        <p class=\"lead text-muted mb-7 mb-md-9\">\n        List of categories\n        </p>\n\n      </div>\n    </div> <!-- / .row -->\n    </div>\n  \n</section>\n\n\n<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n       <div class=\"mb-5\" *ngFor=\"let category of data\">\n         <h2>\n            {{ category.title }}\n         </h2>\n         <p>\n           {{ category.description }}\n         </p>\n\n         <div class=\"row\">\n\n         <div class=\"col-12 col-md-3 d-flex\"  *ngFor=\"let opens of category.opening\">\n\n          <div class=\"card shadow-light-lg\">\n              <img src=\"{{ opens.poster }}\" alt=\"...\" class=\"card-img-top img-responsive small-image\">\n\n            <div class=\"card-body\">\n              <p>\n                {{ opens.title }}\n              </p>\n              <small>\n                {{ opens.vacancy }} Vacancies left\n              </small>\n            </div>\n          </div>\n\n\n         </div>\n\n         </div>\n\n         <a href=\"\" class=\"text-center\">\n           View all\n         </a>\n\n         <hr>\n        \n       </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n\n\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_opening_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/opening.service */ "./src/app/_services/opening.service.ts");



var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(openingSevice) {
        this.openingSevice = openingSevice;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.openingSevice.getCategories().subscribe(function (data) {
            _this.data = data;
            console.table(_this.data);
        });
    };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_opening_service__WEBPACK_IMPORTED_MODULE_2__["OpeningService"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/error/error404/error404.component.css":
/*!*******************************************************!*\
  !*** ./src/app/error/error404/error404.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yNDA0L2Vycm9yNDA0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error/error404/error404.component.html":
/*!********************************************************!*\
  !*** ./src/app/error/error404/error404.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  error404 works!\n</p>\n"

/***/ }),

/***/ "./src/app/error/error404/error404.component.ts":
/*!******************************************************!*\
  !*** ./src/app/error/error404/error404.component.ts ***!
  \******************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error404',
            template: __webpack_require__(/*! ./error404.component.html */ "./src/app/error/error404/error404.component.html"),
            styles: [__webpack_require__(/*! ./error404.component.css */ "./src/app/error/error404/error404.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<section>\n  Home page\n</section>\n\nLorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae mollitia, suscipit dolore iusto nobis quasi placeat sunt voluptates eum maxime ipsam asperiores sequi modi voluptas excepturi odit quidem totam possimus?\nQuasi cupiditate tempora, necessitatibus illum tempore modi amet dolores totam autem aperiam suscipit earum provident, facere praesentium libero. Dolorum nobis labore praesentium nam? Veritatis autem perspiciatis explicabo voluptates voluptatum ipsa.\nNihil quaerat, cupiditate quas earum similique dicta sit officiis tenetur hic optio expedita recusandae doloremque fugit incidunt rem. Eaque similique maiores veniam repellendus ad repellat. Debitis consectetur pariatur quasi deleniti!\nMagnam non iusto vitae, illo repellat deserunt. Natus fuga, inventore quam ratione nobis minus fugiat deserunt ipsam ea alias dolorem perferendis ipsum, quas vero. Laboriosam error libero exercitationem consequuntur animi.\nAssumenda quasi ab eligendi! Recusandae voluptate expedita vel. Consectetur laborum similique ipsum explicabo et, cum laboriosam quos accusamus ipsa non facilis, enim qui eos? Quaerat odio reiciendis repudiandae sit illum.\nIure consequatur sit aut! Sit in quod reiciendis cumque perspiciatis accusamus saepe vero! Illo sint blanditiis explicabo, possimus voluptates, nulla inventore vitae necessitatibus obcaecati quam provident! Ipsum aut et incidunt?\nVeniam praesentium corrupti laboriosam. Dolores assumenda consequuntur cum eaque optio temporibus, eius excepturi, dolorem sapiente nesciunt adipisci, debitis inventore natus dignissimos reprehenderit officia ipsam magni maxime laudantium ipsa. Placeat, eveniet.\nVoluptas reprehenderit tempora ad eos distinctio tempore praesentium, a recusandae perferendis itaque? Id libero consequatur nesciunt praesentium debitis quas odio dolor mollitia numquam minima ducimus sequi, nemo fugit ut quaerat!\nFacilis modi, dolore itaque quos dolores cupiditate, quis eum quia dicta, voluptate obcaecati. Inventore doloribus quo accusamus modi provident voluptas laborum. Sequi excepturi laboriosam esse rem dolorem odit sed voluptas.\nIllum incidunt possimus asperiores cupiditate consequuntur iure. Asperiores at cum minima ipsam qui perspiciatis aut blanditiis provident laudantium cupiditate. Sapiente beatae voluptatem quasi velit porro quos molestias, placeat vel necessitatibus?\nQuae, ad voluptas. Alias tenetur officia, repudiandae sed nesciunt commodi voluptatem exercitationem culpa. Reprehenderit maxime, dolor perferendis repudiandae placeat, saepe quibusdam nesciunt maiores veritatis dolores modi aliquid, tempora ullam consequuntur!\nDistinctio reprehenderit velit dolor placeat? Vel necessitatibus libero cum eaque ab perferendis inventore voluptas quisquam eius ut deserunt, repudiandae facilis dignissimos labore officiis, delectus quidem voluptate quibusdam reprehenderit? Repellat, animi?\nLorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat qui earum ipsam unde laudantium aspernatur possimus neque eveniet doloremque officiis magni fugiat, ab magnam sit repellendus rerum? Eum, cumque voluptate.\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/incs/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/incs/footer/footer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luY3MvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/incs/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/incs/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- FOOTER\n    ================================================== -->\n    <footer class=\"py-8 py-md-11 bg-white\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4 col-lg-3\">\n          \n              <!-- Brand -->\n              <img src=\"assets/img/logo/logo.png\" alt=\"Usajili\" class=\"footer-brand img-fluid mb-2\">\n  \n              <!-- Text -->\n              <p class=\"text-gray-700 mb-2\">\n                Where enrollment happens.\n              </p>\n  \n              <!-- Social -->\n              <ul class=\"list-unstyled list-inline list-social mb-6 mb-md-0\">\n                <li class=\"list-inline-item list-social-item mr-3\">\n                  <a href=\"#!\" class=\"text-decoration-none\">\n                    <img src=\"assets/img/icons/social/instagram.svg\" class=\"list-social-icon\" alt=\"...\">\n                  </a>\n                </li>\n                <li class=\"list-inline-item list-social-item mr-3\">\n                  <a href=\"#!\" class=\"text-decoration-none\">\n                    <img src=\"assets/img/icons/social/facebook.svg\" class=\"list-social-icon\" alt=\"...\">\n                  </a>\n                </li>\n                <li class=\"list-inline-item list-social-item mr-3\">\n                  <a href=\"#!\" class=\"text-decoration-none\">\n                    <img src=\"assets/img/icons/social/twitter.svg\" class=\"list-social-icon\" alt=\"...\">\n                  </a>\n                </li>\n                <li class=\"list-inline-item list-social-item\">\n                  <a href=\"#!\" class=\"text-decoration-none\">\n                    <img src=\"assets/img/icons/social/pinterest.svg\" class=\"list-social-icon\" alt=\"...\">\n                  </a>\n                </li>\n              </ul>\n  \n            </div>\n            <div class=\"col-6 col-md-4 col-lg-2\">\n          \n              <!-- Heading -->\n              <h6 class=\"font-weight-bold text-uppercase text-gray-700\">\n                Products\n              </h6>\n  \n              <!-- List -->\n              <ul class=\"list-unstyled text-muted mb-6 mb-md-8 mb-lg-0\">\n                <li class=\"mb-3\">\n                  <a href=\"#!\" class=\"text-reset\">\n                    Page Builder\n                  </a>\n                </li>\n                <li class=\"mb-3\">\n                  <a href=\"#!\" class=\"text-reset\">\n                    UI Kit\n                  </a>\n                </li>\n                <li class=\"mb-3\">\n                  <a href=\"#!\" class=\"text-reset\">\n                    Styleguide\n                  </a>\n                </li>\n                <li class=\"mb-3\">\n                  <a href=\"#!\" class=\"text-reset\">\n                    Documentation\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#!\" class=\"text-reset\">\n                    Changelog\n                  </a>\n                </li>\n              </ul>\n  \n            </div>\n            <div class=\"col-6 col-md-4 col-lg-2\">\n          \n              <!-- Heading -->\n              <h6 class=\"font-weight-bold text-uppercase text-gray-700\">\n                Services\n              </h6>\n  \n              <!-- List -->\n              <ul class=\"list-unstyled text-muted mb-6 mb-md-8 mb-lg-0\">\n                <li class=\"mb-3\">\n                  <a href=\"#!\" class=\"text-reset\">\n                    Documentation\n                  </a>\n                </li>\n                <li class=\"mb-3\">\n                  <a href=\"#!\" class=\"text-reset\">\n                    Changelog\n                  </a>\n                </li>\n                <li class=\"mb-3\">\n                  <a href=\"#!\" class=\"text-reset\">\n                    Pagebuilder\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#!\" class=\"text-reset\">\n                    UI Kit\n                  </a>\n                </li>\n              </ul>\n  \n            </div>\n            <div class=\"col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0\">\n          \n              <!-- Heading -->\n              <h6 class=\"font-weight-bold text-uppercase text-gray-700\">\n                test it\n              </h6>\n  \n              <!-- List -->\n              <ul class=\"list-unstyled text-muted mb-0\">\n                <li class=\"mb-3\">\n                  <a href=\"#!\" class=\"text-reset\">\n                    Page Builder\n                  </a>\n                </li>\n                <li class=\"mb-3\">\n                  <a href=\"#!\" class=\"text-reset\">\n                    UI Kit\n                  </a>\n                </li>\n                <li class=\"mb-3\">\n                  <a href=\"#!\" class=\"text-reset\">\n                    Styleguide\n                  </a>\n                </li>\n                <li class=\"mb-3\">\n                  <a href=\"#!\" class=\"text-reset\">\n                    Documentation\n                  </a>\n                </li>\n                <li class=\"mb-3\">\n                  <a href=\"#!\" class=\"text-reset\">\n                    Changelog\n                  </a>\n                </li>\n                <li class=\"mb-3\">\n                  <a href=\"#!\" class=\"text-reset\">\n                    Documentation\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#!\" class=\"text-reset\">\n                    Changelog\n                  </a>\n                </li>\n              </ul>\n  \n            </div>\n            <div class=\"col-6 col-md-4 col-lg-2\">\n          \n              <!-- Heading -->\n              <h6 class=\"font-weight-bold text-uppercase text-gray-700\">\n                Show it\n              </h6>\n  \n              <!-- List -->\n              <ul class=\"list-unstyled text-muted mb-0\">\n                <li class=\"mb-3\">\n                  <a href=\"#!\" class=\"text-reset\">\n                    Documentation\n                  </a>\n                </li>\n                <li class=\"mb-3\">\n                  <a href=\"#!\" class=\"text-reset\">\n                    Changelog\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#!\" class=\"text-reset\">\n                    Pagebuilder\n                  </a>\n                </li>\n              </ul>\n  \n            </div>\n          </div> <!-- / .row -->\n        </div> <!-- / .container -->\n      </footer>"

/***/ }),

/***/ "./src/app/incs/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/incs/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/incs/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/incs/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/incs/navbar/navbar.component.css":
/*!**************************************************!*\
  !*** ./src/app/incs/navbar/navbar.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luY3MvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/incs/navbar/navbar.component.html":
/*!***************************************************!*\
  !*** ./src/app/incs/navbar/navbar.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-light bg-white border-bottom\">\n\n  <div class=\"container\">\n  \n\n    <!-- Brand -->\n    <a class=\"navbar-brand\" routerLink=\"/\">\n      Usajili\n    </a>\n\n    <!-- Toggler -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <!-- Collapse -->\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n\n      <!-- Toggler -->\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fe fe-x\"></i>\n      </button>\n\n    \n      <!-- Navigation -->\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" *ngIf=\"loggedIn\">\n            <a routerLink=\"/\" class=\"nav-link\">Home</a>\n          </li>\n\n          <li class=\"nav-item\" *ngIf=\"loggedIn\">\n              <a routerLink=\"/categories\" class=\"nav-link\">Categories</a>\n            </li>\n\n  \n\n        <li class=\"nav-item\" *ngIf=\"!loggedIn\">\n            <a routerLink=\"/auth/sign-in\" class=\"nav-link\">Sign In</a>\n        </li>\n\n        <li class=\"nav-item\" *ngIf=\"!loggedIn\">\n            <a routerLink=\"/auth/sign-up\" class=\"btn btn-primary nav-btn\">Sign Up</a>\n        </li>\n\n        <li class=\"nav-item\" ngbDropdown>\n            <div ngbDropdown class=\"d-inline-block\">\n                <a class=\"nav-link\" href=\"#\" id=\"dropdownBasic1\" ngbDropdownToggle>Account</a>\n                <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                  <a class=\"dropdown-item\" routerLink='/profile'>Profile</a>\n                  <a class=\"dropdown-item\" routerLink='/settings'>Settings</a>\n                  <a class=\"dropdown-item\" routerLink='/settings'>Enrollments</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <button class=\"dropdown-item\" (click)=\"logout()\">Logout</button>\n                </div>\n              </div>\n        </li>\n\n        \n           \n      \n      </ul>\n\n\n\n    </div>\n\n    </div>\n\n  \n</nav>"

/***/ }),

/***/ "./src/app/incs/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/incs/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/token.service */ "./src/app/_services/token.service.ts");





// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, router, token) {
        this.auth = auth;
        this.router = router;
        this.token = token;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authStatus.subscribe(function (value) { return _this.loggedIn = value; });
    };
    NavbarComponent.prototype.logout = function (Event) {
        event.preventDefault();
        this.token.remove();
        this.auth.changeAuthStatus(false);
        this.router.navigateByUrl('/auth/sign-in');
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/incs/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/incs/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/incs/sidebar/sidebar.component.css":
/*!****************************************************!*\
  !*** ./src/app/incs/sidebar/sidebar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luY3Mvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/incs/sidebar/sidebar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/incs/sidebar/sidebar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-vertical\" id=\"sidenav-main\">\n\n</nav>"

/***/ }),

/***/ "./src/app/incs/sidebar/sidebar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/incs/sidebar/sidebar.component.ts ***!
  \***************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/incs/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/incs/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<section class=\"pt-4 pt-md-11\">\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-12 col-md-5 col-lg-6 order-md-2\">\n        \n        <!-- Image -->\n        <img src=\"assets/img/illustrations/illustration-2.png\" class=\"img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0\" alt=\"...\" data-aos=\"fade-up\" data-aos-delay=\"100\">\n\n      </div>\n      <div class=\"col-12 col-md-7 col-lg-6 order-md-1\" data-aos=\"fade-up\">\n        \n        <!-- Heading -->\n        <h1 class=\"display-3 text-center text-md-left\">\n          Welcome to <span class=\"text-primary\">Usajili</span>. <br>\n        </h1>\n\n        <!-- Text -->\n        <p class=\"lead text-center text-md-left text-muted mb-6 mb-lg-8\">\n          Enroll fast and with ease, enroll at the speed of your fingers\n        </p>\n            \n        <!-- Buttons -->\n        <div class=\"text-center text-md-left\">\n          <a href=\"/profile\" class=\"btn btn-primary shadow lift mr-1\">\n            Get started <i class=\"fe fe-arrow-right d-none d-md-inline ml-3\"></i>\n          </a>\n        </div>\n\n      </div>\n    </div> <!-- / .row -->\n  </div> <!-- / .container -->\n</section>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n\n<section class=\"py-8 py-md-11 border-bottom\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h2>Profile</h2>\n      </div>\n    </div>\n\n\n\n    <div class=\"row\">\n\n      <!-- profile part -->\n      <div class=\"col-md-4\">\n        <div class=\"card shadow-light-lg\">\n          <!-- Image -->\n            <img src=\"/assets/img/photos/photo-2.jpg\" alt=\"...\" class=\"card-img-top\">\n\n          <div class=\"card-body\">\n              <!-- Heading -->\n              <h3>\n                 @Userame\n              </h3>\n        \n                <!-- Text -->\n                <p class=\"text-muted mb-5\">\n                 email@gmail.com\n                </p>\n          </div>\n        </div>\n      </div>\n\n\n      <!-- the wide part -->\n\n      <div class=\"col-md-8\">\n        <div class=\"card shadow-light-lg\">\n          <div class=\"card-body\">\n              <ngb-tabset>\n                  <ngb-tab title=\"Personal\">\n                    <ng-template ngbTabContent>\n                      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab>\n                    <ng-template ngbTabTitle><b>Location</b></ng-template>\n                    <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n                      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n                      sint qui sapiente accusamus tattooed echo park.</p>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"Status\">\n                    <ng-template ngbTabContent>\n                      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\n                    </ng-template>\n                  </ngb-tab>\n                </ngb-tabset>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/don/Code/Projects/Angular/usajili/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map