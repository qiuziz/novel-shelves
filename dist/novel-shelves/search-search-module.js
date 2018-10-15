(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./src/app/container/search/book-list/book-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/container/search/book-list/book-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"book-list\">\n  <div class=\"list\" (click)=\"lookBookDetail(item)\" *ngFor=\"let item of bookList; index as i\">\n    <div class=\"number\">{{i + 1}}</div>\n    <div class=\"detail\">\n      <div class=\"name\">{{item.name}}</div>\n      <div class=\"info\">{{item.category}} | {{item.author}} | {{item.state}}</div>\n      <div class=\"last-update\">最新：{{item.lastChapter}}</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/container/search/book-list/book-list.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/container/search/book-list/book-list.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book-list .list {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  margin: 0 0 10px 0;\n  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);\n  border-radius: 8px;\n  padding: 10px;\n}\n.book-list .list:first-child {\n  margin-top: 10px;\n}\n.book-list .list .number {\n  flex: 0 0 40px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  background: #68aac2;\n  justify-content: center;\n  margin-right: 10px;\n  border-radius: 8px;\n}\n.book-list .list .detail {\n  text-align: left;\n  width: calc(90% - 20px);\n}\n.book-list .list .detail .name {\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 1.4;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.book-list .list .detail .info,\n.book-list .list .detail .last-update {\n  font-size: 0.8rem;\n}\n.book-list .list .detail .last-update {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n"

/***/ }),

/***/ "./src/app/container/search/book-list/book-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/container/search/book-list/book-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/local-storage */ "./src/app/common/local-storage.ts");
/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-06 18:16:48
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-10-12 17:13:04
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



var BookListComponent = /** @class */ (function () {
    function BookListComponent(router) {
        this.router = router;
    }
    BookListComponent.prototype.lookBookDetail = function (data) {
        _common_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorage"].setItem('title', data.name);
        this.router.navigate(["/book/" + data.id]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BookListComponent.prototype, "bookList", void 0);
    BookListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-list',
            template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/container/search/book-list/book-list.component.html"),
            styles: [__webpack_require__(/*! ./book-list.component.less */ "./src/app/container/search/book-list/book-list.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/container/search/home.component.html":
/*!******************************************************!*\
  !*** ./src/app/container/search/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content\">\n  <div class=\"main\" >\n    <div class=\"logo\">\n      <h1>Novel</h1>\n    </div>\n    <div class=\"search\">\n      <nz-input-group nzSearch nzSize=\"large\" [nzSuffix]=\"suffixIconButton\">\n        <input type=\"text\"\n          [(ngModel)]=\"value\"\n          nz-input\n          #searchInput\n          placeholder=\"输入书籍名称或作者名搜索\"\n          (keydown.enter)=\"onEnter($event)\"\n          (focus)=\"searchFocus($event)\">\n      </nz-input-group>\n      <ng-template #suffixIconButton>\n        <button nz-button\n          nzType=\"primary\"\n          nzSize=\"large\"\n          (click)=\"search()\"\n          nzSearch>\n          <i class=\"anticon anticon-search\"></i>\n        </button>\n      </ng-template>\n    </div>\n    <div class=\"result\">\n        <app-book-list [bookList]=\"bookList\"></app-book-list>\n    </div>\n  </div>\n  <app-tabbar></app-tabbar>\n</div>\n"

/***/ }),

/***/ "./src/app/container/search/home.component.less":
/*!******************************************************!*\
  !*** ./src/app/container/search/home.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-content {\n  text-align: center;\n  width: 100%;\n}\n.app-content .main {\n  margin-top: 130px;\n}\n.app-content .main .logo {\n  font-size: 20px;\n}\n.app-content .main .search {\n  width: 90%;\n  display: inline-block;\n}\n.app-content .main .result {\n  width: 90%;\n  display: inline-block;\n}\n.app-content .main .loading {\n  left: 0;\n  top: 0;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n}\n"

/***/ }),

/***/ "./src/app/container/search/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/container/search/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/http/http.service */ "./src/app/core/http/http.service.ts");
/* harmony import */ var _common_globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/globals.service */ "./src/app/common/globals.service.ts");
/* harmony import */ var _common_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/local-storage */ "./src/app/common/local-storage.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(httpService, globals) {
        this.httpService = httpService;
        this.globals = globals;
        this.bookList = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.bookList = _common_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"].getItem('bookList') || [];
        this.value = _common_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"].getItem('serachKey');
    };
    HomeComponent.prototype.search = function () {
        var _this = this;
        this.httpService.get('search', { name: this.value }).subscribe(function (res) {
            _this.bookList = res;
            _common_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"].setItem('bookList', res);
            _common_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"].setItem('serachKey', _this.value);
        });
    };
    HomeComponent.prototype.searchFocus = function () {
        window.scrollTo(0, 130);
    };
    HomeComponent.prototype.onEnter = function (event) {
        this.search();
        this.searchInput.nativeElement.blur();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchInput'),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "searchInput", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/container/search/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.less */ "./src/app/container/search/home.component.less")]
        }),
        __metadata("design:paramtypes", [_core_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _common_globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/container/search/search-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/container/search/search-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/container/search/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        data: {
            header: false
        }
    }
];
var SearchRoutingModule = /** @class */ (function () {
    function SearchRoutingModule() {
    }
    SearchRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SearchRoutingModule);
    return SearchRoutingModule;
}());



/***/ }),

/***/ "./src/app/container/search/search.module.ts":
/*!***************************************************!*\
  !*** ./src/app/container/search/search.module.ts ***!
  \***************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/app/container/search/home.component.ts");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/container/search/book-list/book-list.component.ts");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/container/search/search-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/layout/layout.module */ "./src/app/components/layout/layout.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var COMPONENTS = [
    _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
    _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_2__["BookListComponent"]
];
var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _search_routing_module__WEBPACK_IMPORTED_MODULE_3__["SearchRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _components_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"]
            ],
            declarations: COMPONENTS.slice()
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ })

}]);
//# sourceMappingURL=search-search-module.js.map