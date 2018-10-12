(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shelves-shelves-module"],{

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

/***/ "./src/app/container/shelves/shelves-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/container/shelves/shelves-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ShelvesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShelvesRoutingModule", function() { return ShelvesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shelves_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shelves.component */ "./src/app/container/shelves/shelves.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _shelves_component__WEBPACK_IMPORTED_MODULE_2__["ShelvesComponent"]
    }
];
var ShelvesRoutingModule = /** @class */ (function () {
    function ShelvesRoutingModule() {
    }
    ShelvesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ShelvesRoutingModule);
    return ShelvesRoutingModule;
}());



/***/ }),

/***/ "./src/app/container/shelves/shelves.component.html":
/*!**********************************************************!*\
  !*** ./src/app/container/shelves/shelves.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-shelves\">\n  <div class=\"list\" (click)=\"reading(book)\" *ngFor=\"let book of shelves; index as i\">\n    <div class=\"cover\">\n      <img [src]=\"book.cover || ''\" [alt]=\"book.name\">\n    </div>\n    <div class=\"detail\">\n      <div class=\"name\">{{book.name}}</div>\n      <i class=\"novel novel-config\" (click)=\"showDetail($event, book)\"></i>\n      <div class=\"info\">{{book.category}} | {{book.author}} | {{book.state}}</div>\n      <div class=\"last-update\">最新：{{book.lastChapter}}</div>\n    </div>\n  </div>\n</div>\n<div class=\"empty\" *ngIf=\"shelves.length <= 0\">\n  书架暂无书籍\n</div>\n"

/***/ }),

/***/ "./src/app/container/shelves/shelves.component.less":
/*!**********************************************************!*\
  !*** ./src/app/container/shelves/shelves.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  border-bottom: 1px solid #f0f1f2;\n  width: 90%;\n  margin: 0 auto;\n  padding: 10px;\n}\n.list .cover {\n  width: 3.375rem;\n  height: 4.5rem;\n}\n.list .cover img {\n  width: 100%;\n  height: 100%;\n}\n.list:first-child {\n  margin-top: 10px;\n}\n.list .number {\n  flex: 0 0 40px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  background: #68aac2;\n  justify-content: center;\n  margin-right: 10px;\n  border-radius: 8px;\n}\n.list .detail {\n  text-align: left;\n  width: calc(90% - 4.375rem);\n  margin-left: 1rem;\n  position: relative;\n}\n.list .detail .name {\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 1.4;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.list .detail .info,\n.list .detail .last-update {\n  font-size: 0.8rem;\n}\n.list .detail .last-update {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.list .detail .novel-config {\n  position: absolute;\n  right: -2rem;\n  top: 0;\n  width: 50px;\n  text-align: center;\n  height: 30px;\n}\n.book-options {\n  display: flex;\n  list-style: none;\n  align-items: center;\n  justify-content: space-around;\n  margin: 1rem 0 0 0;\n  padding: 0;\n}\n.book-options li {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.book-options li .novel-catalog {\n  font-weight: bold;\n}\n.book-options li p {\n  font-size: 12px;\n  font-weight: 300;\n}\n.book-detail {\n  background: #F2F7FA;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  height: 5rem;\n}\n.book-detail .cover {\n  width: 2.375rem;\n  height: 3rem;\n  margin: 0 0.5rem 0 1rem;\n}\n.book-detail .cover img {\n  width: 100%;\n  height: 100%;\n}\n.book-detail .detail .name {\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 1.4;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.book-detail .detail .info {\n  font-size: 12px;\n  color: #8C949F;\n}\n.book-detail .btn {\n  position: absolute;\n  right: 1rem;\n  height: 25px;\n  font-size: 12px;\n  border-color: #e85c7b;\n  color: #e85c7b;\n}\n.empty {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #c5b6b6;\n  font-size: 1rem;\n}\n"

/***/ }),

/***/ "./src/app/container/shelves/shelves.component.ts":
/*!********************************************************!*\
  !*** ./src/app/container/shelves/shelves.component.ts ***!
  \********************************************************/
/*! exports provided: ShelvesComponent, NzDrawerBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShelvesComponent", function() { return ShelvesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDrawerBodyComponent", function() { return NzDrawerBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/http/http.service */ "./src/app/core/http/http.service.ts");
/* harmony import */ var _common_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/local-storage */ "./src/app/common/local-storage.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShelvesComponent = /** @class */ (function () {
    function ShelvesComponent(route, router, httpService, el, message, drawerService, location) {
        this.route = route;
        this.router = router;
        this.httpService = httpService;
        this.el = el;
        this.message = message;
        this.drawerService = drawerService;
        this.location = location;
        // tslint:disable-next-line:max-line-length
        this.shelves = _common_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"].getItem('shelves') || [];
        this.visible = true;
        this.bookOptions = {
            display: 'flex',
            'list-style': 'none',
            'align-items': 'center',
            'justify-content': 'space-around',
            margin: 0,
            padding: 0,
        };
        _common_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"].setItem('headerTitle', '书架');
    }
    ShelvesComponent.prototype.ngOnInit = function () {
        this.getShelvesBook();
    };
    ShelvesComponent.prototype.getShelvesBook = function () {
        var _this = this;
        this.httpService.get('getShelvesBook').subscribe(function (res) {
            _this.shelves = res;
            _common_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"].setItem('shelves', res);
        });
    };
    ShelvesComponent.prototype.showDetail = function (event, book) {
        event.stopPropagation();
        this.drawerService.create({
            nzClosable: false,
            nzContent: NzDrawerBodyComponent,
            nzPlacement: 'bottom',
            nzHeight: 200,
            nzContentParams: {
                book: book
            }
        });
    };
    ShelvesComponent.prototype.close = function () {
        this.visible = false;
    };
    ShelvesComponent.prototype.reading = function (book) {
        var _this = this;
        var chapter = _common_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"].getItem('chapter' + book.id);
        if (chapter) {
            this.router.navigate(["/book/" + book.id + "/" + chapter.id]);
        }
        else if (book.catalog && book.catalog.length > 0) {
            this.router.navigate(["/book/" + book.id + "/" + book.catalog[0].id]);
        }
        else {
            this.httpService.get('getBookCatalog', { id: book.id })
                .subscribe(function (res) {
                if (res[0] && res[0].id) {
                    _this.router.navigate(["/book/" + book.id + "/" + res[0].id]);
                }
                else {
                    _this.message.error("\u6682\u65E0\u5185\u5BB9");
                }
            });
        }
    };
    ShelvesComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('drawerTitle'),
        __metadata("design:type", Object)
    ], ShelvesComponent.prototype, "drawerTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('drawerBody'),
        __metadata("design:type", Object)
    ], ShelvesComponent.prototype, "drawerBody", void 0);
    ShelvesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shelves',
            template: __webpack_require__(/*! ./shelves.component.html */ "./src/app/container/shelves/shelves.component.html"),
            styles: [__webpack_require__(/*! ./shelves.component.less */ "./src/app/container/shelves/shelves.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], ShelvesComponent);
    return ShelvesComponent;
}());

var NzDrawerBodyComponent = /** @class */ (function () {
    function NzDrawerBodyComponent(drawerRef, router) {
        this.drawerRef = drawerRef;
        this.router = router;
        this.book = {};
    }
    NzDrawerBodyComponent.prototype.close = function () {
        this.drawerRef.close();
    };
    NzDrawerBodyComponent.prototype.goBook = function (book) {
        this.close();
        this.router.navigate(["/book/" + book.id]);
    };
    NzDrawerBodyComponent.prototype.goBookCatalog = function (book) {
        this.close();
        this.router.navigate(["/book/" + book.id + "/catalog"]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NzDrawerBodyComponent.prototype, "book", void 0);
    NzDrawerBodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drawer-body',
            styles: [__webpack_require__(/*! ./shelves.component.less */ "./src/app/container/shelves/shelves.component.less")],
            template: "\n    <div class=\"book-detail\" >\n      <div class=\"cover\">\n        <img [src]=\"book.cover || ''\" [alt]=\"book.name\">\n      </div>\n      <div class=\"detail\">\n        <div class=\"name\">{{book.name}}</div>\n        <div class=\"info\">{{book.author}}</div>\n      </div>\n      <button nz-button class=\"btn\" (click)=\"goBook(book)\">\u8BE6\u60C5</button>\n    </div>\n    <ul class=\"book-options\">\n      <li (click)=\"goBookCatalog(book)\">\n        <i class=\"novel novel-catalog\"></i>\n        <p>\u76EE\u5F55</p>\n      </li>\n      <li>\n        <i class=\"novel novel-download\"></i>\n        <p>\u7F13\u5B58</p>\n      </li>\n      <li>\n        <i class=\"novel novel-delete\"></i>\n        <p>\u5220\u9664</p>\n      </li>\n    </ul>\n  "
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDrawerRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NzDrawerBodyComponent);
    return NzDrawerBodyComponent;
}());



/***/ }),

/***/ "./src/app/container/shelves/shelves.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/container/shelves/shelves.module.ts ***!
  \*****************************************************/
/*! exports provided: ShelvesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShelvesModule", function() { return ShelvesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shelves_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shelves.component */ "./src/app/container/shelves/shelves.component.ts");
/* harmony import */ var _shelves_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shelves-routing.module */ "./src/app/container/shelves/shelves-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var COMPONENTS = [
    _shelves_component__WEBPACK_IMPORTED_MODULE_1__["ShelvesComponent"],
    _shelves_component__WEBPACK_IMPORTED_MODULE_1__["NzDrawerBodyComponent"]
];
var ShelvesModule = /** @class */ (function () {
    function ShelvesModule() {
    }
    ShelvesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shelves_routing_module__WEBPACK_IMPORTED_MODULE_2__["ShelvesRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: COMPONENTS.slice(),
            entryComponents: [
                _shelves_component__WEBPACK_IMPORTED_MODULE_1__["NzDrawerBodyComponent"]
            ]
        })
    ], ShelvesModule);
    return ShelvesModule;
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
    getChapter: SERVICE_NAME + "/chapter/:bookId/:chapterId",
    addShelves: SERVICE_NAME + "/addShelves/:bookId",
    getShelvesBook: SERVICE_NAME + "/getShelvesBook"
};


/***/ })

}]);
//# sourceMappingURL=shelves-shelves-module.js.map