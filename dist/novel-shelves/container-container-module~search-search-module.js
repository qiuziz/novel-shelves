(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["container-container-module~search-search-module"],{

/***/ "./src/app/common/local-storage.ts":
/*!*****************************************!*\
  !*** ./src/app/common/local-storage.ts ***!
  \*****************************************/
/*! exports provided: LocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return LocalStorage; });
/*
 * @Author: qiuziz
 * @Date: 2017-08-18 15:26:27
 * */
var LocalStorageTools = /** @class */ (function () {
    function LocalStorageTools() {
    }
    LocalStorageTools.prototype.getItem = function (key) {
        var value = localStorage.getItem(key);
        return value !== 'undefined' ? JSON.parse(value) : undefined;
    };
    LocalStorageTools.prototype.setItem = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    LocalStorageTools.prototype.removeItem = function (key) {
        localStorage.removeItem(key);
    };
    Object.defineProperty(LocalStorageTools.prototype, "length", {
        get: function () {
            return localStorage.length;
        },
        enumerable: true,
        configurable: true
    });
    LocalStorageTools.prototype.key = function (number) {
        return localStorage.key(number);
    };
    LocalStorageTools.prototype.clear = function () {
        localStorage.clear();
    };
    return LocalStorageTools;
}());
var LocalStorage = new LocalStorageTools();


/***/ }),

/***/ "./src/app/common/title.service.ts":
/*!*****************************************!*\
  !*** ./src/app/common/title.service.ts ***!
  \*****************************************/
/*! exports provided: TitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleService", function() { return TitleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage */ "./src/app/common/local-storage.ts");
/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-10-10 16:08:43
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-10-10 16:48:04
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var APP_TITLE = 'NovelShelves';
var SEPARATOR = ' > ';
var TitleService = /** @class */ (function () {
    function TitleService(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
    }
    TitleService.prototype.init = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            var route = _this.activatedRoute;
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (route) { return route.outlet === 'primary'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (route) { return route.data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            return (data.title === 'LocalStorage' ? _local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"].getItem('title') : data.title) || APP_TITLE;
        })).subscribe(function (title) {
            console.log(title);
            _this.titleService.setTitle("" + title);
        });
    };
    TitleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], TitleService);
    return TitleService;
}());



/***/ }),

/***/ "./src/app/components/layout/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <a href=\"javascript:history.go(-1)\" class=\"header-back\">\n    <i class=\"novel novel-rightarrow\"></i>\n  </a>\n  <h1 class=\"header-back-title\">{{title}}</h1>\n\n  <div class=\"header-operate\">\n    <a href=\"javascript:\" class=\"icon icon-more\" title=\"更多\">\n      <i class=\"novel novel-more\"></i>\n    </a>\n  </div>\n\n</header>\n"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.less":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  position: relative;\n  box-sizing: border-box;\n  height: 2.75rem;\n  padding-top: 0.6875rem;\n  padding-bottom: 0.625rem;\n  border-bottom: 1px solid #f0f1f2;\n  background-color: #fff;\n}\n.header .header-back {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  padding: 0.625rem 0.8125rem 0.625rem 0.875rem;\n}\n.header .novel-rightarrow {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  display: inline-block;\n}\n.header h1 {\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.375rem;\n  position: absolute;\n  left: 2.6875rem;\n  overflow: hidden;\n  max-width: 60%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.header .header-operate {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.25rem 0.375rem;\n}\n.header .header-operate .icon-more {\n  position: relative;\n  width: 2.25rem;\n  height: 2.25rem;\n  float: left;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header .header-operate .icon-more .novel-more {\n  font-size: 20px;\n}\n"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/http/http.service */ "./src/app/core/http/http.service.ts");
/* harmony import */ var _common_globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/globals.service */ "./src/app/common/globals.service.ts");
/* harmony import */ var _common_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/local-storage */ "./src/app/common/local-storage.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(httpService, globals) {
        this.httpService = httpService;
        this.globals = globals;
    }
    Object.defineProperty(HeaderComponent.prototype, "title", {
        get: function () {
            return _common_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"].getItem('title');
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.ngOnInit = function () {
        // const book = LocalStorage.getItem('book') || {};
        // this.title = book.name || '';
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.less */ "./src/app/components/layout/header/header.component.less")]
        }),
        __metadata("design:paramtypes", [_core_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _common_globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/layout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/layout/layout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"router-progress-bar\" *ngIf=\"isFetching\"></div>\n  <layout-header *ngIf=\"location.path() !== '/search'\" class=\"header\" style=\"background-color: #1862AC\"></layout-header>\n  <section class=\"content\">\n    <router-outlet></router-outlet>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/components/layout/layout.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/layout/layout.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  width: 100vw;\n  height: calc(100vh - 2.75rem);\n}\n"

/***/ }),

/***/ "./src/app/components/layout/layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _common_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/title.service */ "./src/app/common/title.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(router, _message, location, titleService) {
        var _this = this;
        this._message = _message;
        this.location = location;
        this.titleService = titleService;
        this.isFetching = false;
        this.titleService.init();
        // scroll to top in change page
        router.events.subscribe(function (evt) {
            if (!_this.isFetching && evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"]) {
                _this.isFetching = true;
            }
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                _this.isFetching = false;
                _message.error("\u65E0\u6CD5\u52A0\u8F7D" + evt.url + "\u8DEF\u7531", { nzDuration: 1000 * 3 });
                return;
            }
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            setTimeout(function () {
                _this.isFetching = false;
            }, 100);
        });
    }
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-default',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/components/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.less */ "./src/app/components/layout/layout.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _common_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/layout.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/layout/layout.module.ts ***!
  \****************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _common_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/title.service */ "./src/app/common/title.service.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _tabbar_tabbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabbar/tabbar.component */ "./src/app/components/layout/tabbar/tabbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var COMPONENTS = [
    _layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
    _tabbar_tabbar_component__WEBPACK_IMPORTED_MODULE_5__["TabbarComponent"]
];
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
            providers: [_common_title_service__WEBPACK_IMPORTED_MODULE_2__["TitleService"]],
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/components/layout/tabbar/tabbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/tabbar/tabbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-tabbar\">\n  <div class=\"tabbar\">\n      <div *ngFor=\"let tab of tabs\" [routerLink]=\"tab.path\">\n          <div class=\"tab-icon\">\n            <i class=\"{{'novel novel-' + tab.icon}}\"></i>\n          </div>\n          <p>{{tab.title}}</p>\n        </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/layout/tabbar/tabbar.component.less":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/tabbar/tabbar.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-tabbar {\n  flex-shrink: 0;\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.app-tabbar .tabbar {\n  background-color: #fafafa;\n  position: relative;\n  box-sizing: border-box;\n  height: 50px;\n  width: 100%;\n  display: flex;\n  transition-duration: 0.2s;\n  transition-property: height bottom;\n  z-index: 100;\n  justify-content: space-around;\n  align-items: center;\n  bottom: 0;\n  border-top: none;\n  color: #a5adb5;\n}\n"

/***/ }),

/***/ "./src/app/components/layout/tabbar/tabbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/tabbar/tabbar.component.ts ***!
  \**************************************************************/
/*! exports provided: TabbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabbarComponent", function() { return TabbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/http/http.service */ "./src/app/core/http/http.service.ts");
/* harmony import */ var _common_globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/globals.service */ "./src/app/common/globals.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabbarComponent = /** @class */ (function () {
    function TabbarComponent(httpService, globals) {
        this.httpService = httpService;
        this.globals = globals;
        this.tabs = [
            { title: '书架', icon: 'shelf', path: '/shelves' },
            { title: '我的', icon: 'user' }
        ];
    }
    TabbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabbar',
            template: __webpack_require__(/*! ./tabbar.component.html */ "./src/app/components/layout/tabbar/tabbar.component.html"),
            styles: [__webpack_require__(/*! ./tabbar.component.less */ "./src/app/components/layout/tabbar/tabbar.component.less")]
        }),
        __metadata("design:paramtypes", [_core_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _common_globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"]])
    ], TabbarComponent);
    return TabbarComponent;
}());



/***/ }),

/***/ "./src/app/core/http/http.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/http/http.service.ts ***!
  \*******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _resource_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resource-api */ "./src/app/core/resource-api.ts");
/* harmony import */ var _common_globals_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/globals.service */ "./src/app/common/globals.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var matchUrlSearchParams = function (url, urlSearchParams) {
    if (!urlSearchParams) {
        return url.replace(/\/:[^?]+/g, '');
    }
    var u = new URLSearchParams();
    var _url = Object.keys(urlSearchParams).reduce(function (pre, next) {
        if (pre.includes(':' + next)) {
            return pre.replace(':' + next, urlSearchParams[next]);
        }
        else {
            if (urlSearchParams[next] && urlSearchParams[next].constructor === Array) {
                urlSearchParams[next].forEach(function (value) {
                    u.append(next, value);
                });
            }
            else {
                u.append(next, urlSearchParams[next]);
            }
            return pre;
        }
    }, url);
    _url = _url.replace(/\/:[^?]+/g, '');
    return _url + (u.toString() === '' ? '' : '?' + u);
};
var HttpService = /** @class */ (function () {
    function HttpService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.options = { headers: this.headers };
    }
    HttpService.prototype.get = function (url, urlSearchParams, options) {
        var _this = this;
        this.globals.loading = this.globals.loadOnce;
        return this.http.request('GET', matchUrlSearchParams(_resource_api__WEBPACK_IMPORTED_MODULE_3__["Resource"][url], urlSearchParams), __assign({}, this.options, options))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
            _this.globals.loading = false;
        }));
    };
    HttpService.prototype.post = function (url, urlSearchParams, bodyParams, options) {
        var _this = this;
        return this.http.request('POST', matchUrlSearchParams(_resource_api__WEBPACK_IMPORTED_MODULE_3__["Resource"][url], urlSearchParams), Object.assign(__assign({}, this.options, options), {
            body: JSON.stringify(bodyParams)
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () { return _this.globals.loading = false; }));
    };
    HttpService.prototype.delete = function (url, urlSearchParams, options) {
        var _this = this;
        return this.http.request('DELETE', matchUrlSearchParams(_resource_api__WEBPACK_IMPORTED_MODULE_3__["Resource"][url], urlSearchParams), __assign({}, this.options, options))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () { return _this.globals.loading = false; }));
    };
    HttpService.prototype.put = function (url, urlSearchParams, bodyParams, options) {
        var _this = this;
        return this.http.request('PUT', matchUrlSearchParams(_resource_api__WEBPACK_IMPORTED_MODULE_3__["Resource"][url], urlSearchParams), Object.assign(__assign({}, this.options, options), {
            body: JSON.stringify(bodyParams)
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () { return _this.globals.loading = false; }));
    };
    HttpService.prototype.patch = function (url, urlSearchParams, bodyParams, options) {
        var _this = this;
        return this.http.request('PATCH', matchUrlSearchParams(_resource_api__WEBPACK_IMPORTED_MODULE_3__["Resource"][url], urlSearchParams), Object.assign(__assign({}, this.options, options), {
            body: JSON.stringify(bodyParams)
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () { return _this.globals.loading = false; }));
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_globals_service__WEBPACK_IMPORTED_MODULE_4__["GlobalsService"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/core/resource-api.ts":
/*!**************************************!*\
  !*** ./src/app/core/resource-api.ts ***!
  \**************************************/
/*! exports provided: Resource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return Resource; });
/*
 * @Author: qiuziz
 * @Date: 2017-08-15 10:12:02
 * */
var API_HOST = '';
var SERVICE_NAME = '/api';
var Resource = {
    search: SERVICE_NAME + "/search/:name",
    getBook: SERVICE_NAME + "/book/:id",
    getBookCatalog: SERVICE_NAME + "/catalog/:id",
    getChapter: SERVICE_NAME + "/chapter/:bookId/:chapterId"
};


/***/ })

}]);
//# sourceMappingURL=container-container-module~search-search-module.js.map