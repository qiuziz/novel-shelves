(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["book-book-module"],{

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

/***/ "./src/app/container/book/book-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/container/book/book-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: BookRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookRoutingModule", function() { return BookRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/container/book/detail/detail.component.ts");
/* harmony import */ var _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalog/catalog.component */ "./src/app/container/book/catalog/catalog.component.ts");
/* harmony import */ var _chapter_chapter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chapter/chapter.component */ "./src/app/container/book/chapter/chapter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    {
        path: ':id',
        children: [
            {
                path: '',
                component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__["BookDetailComponent"]
            },
            {
                path: 'catalog',
                component: _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_3__["CatalogComponent"]
            },
            {
                path: ':chapterId',
                component: _chapter_chapter_component__WEBPACK_IMPORTED_MODULE_4__["ChapterComponent"]
            }
        ]
    }
];
var BookRoutingModule = /** @class */ (function () {
    function BookRoutingModule() {
    }
    BookRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BookRoutingModule);
    return BookRoutingModule;
}());



/***/ }),

/***/ "./src/app/container/book/book.module.ts":
/*!***********************************************!*\
  !*** ./src/app/container/book/book.module.ts ***!
  \***********************************************/
/*! exports provided: BookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookModule", function() { return BookModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/container/book/detail/detail.component.ts");
/* harmony import */ var _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog/catalog.component */ "./src/app/container/book/catalog/catalog.component.ts");
/* harmony import */ var _chapter_chapter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chapter/chapter.component */ "./src/app/container/book/chapter/chapter.component.ts");
/* harmony import */ var _book_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-routing.module */ "./src/app/container/book/book-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var COMPONENTS = [
    _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__["BookDetailComponent"],
    _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_2__["CatalogComponent"],
    _chapter_chapter_component__WEBPACK_IMPORTED_MODULE_3__["ChapterComponent"]
];
var BookModule = /** @class */ (function () {
    function BookModule() {
    }
    BookModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _book_routing_module__WEBPACK_IMPORTED_MODULE_4__["BookRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: COMPONENTS.slice()
        })
    ], BookModule);
    return BookModule;
}());



/***/ }),

/***/ "./src/app/container/book/catalog/catalog.component.html":
/*!***************************************************************!*\
  !*** ./src/app/container/book/catalog/catalog.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"catalog\">\n  <div class=\"header\">\n    <div>共{{bookCatalog.length}}章</div>\n    <div>倒序</div>\n  </div>\n\n  <ol class=\"contents\">\n    <li class=\"chapter-bar\">正文卷</li>\n    <li *ngFor=\"let item of bookCatalog\"\n      class=\"chapter-li\"\n      (click)=\"readChapter(item.id)\">\n      {{item.chapter}}\n    </li>\n  </ol>\n</div>\n"

/***/ }),

/***/ "./src/app/container/book/catalog/catalog.component.less":
/*!***************************************************************!*\
  !*** ./src/app/container/book/catalog/catalog.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".catalog .header {\n  line-height: 28px;\n  padding: 8px 1rem;\n  display: flex;\n  justify-content: space-between;\n}\n.catalog .contents {\n  list-style: none;\n  padding: 0;\n}\n.catalog .contents .chapter-bar {\n  font-size: 13px;\n  line-height: 28px;\n  padding: 8px 1rem 0;\n  color: #969ba3;\n  background-color: #f6f7f9;\n}\n.catalog .contents .chapter-li {\n  line-height: 1.5;\n  padding-right: 2rem;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font: 14px/20px a;\n  display: block;\n  overflow: hidden;\n  padding: 12px 0;\n  margin: 0 1rem;\n  font-weight: 500;\n  color: inherit;\n  border-bottom: 1px solid #f0f1f2;\n}\n.catalog .contents .chapter-li:last-child {\n  border-bottom: 0;\n}\n"

/***/ }),

/***/ "./src/app/container/book/catalog/catalog.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/container/book/catalog/catalog.component.ts ***!
  \*************************************************************/
/*! exports provided: CatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogComponent", function() { return CatalogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/http.service */ "./src/app/core/http/http.service.ts");
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




var CatalogComponent = /** @class */ (function () {
    function CatalogComponent(route, router, httpService) {
        this.route = route;
        this.router = router;
        this.httpService = httpService;
        this.bookCatalog = [];
        this.bookId = '';
        this.book = {};
    }
    CatalogComponent.prototype.ngOnInit = function () {
        this.bookId = this.route.snapshot.params['id'];
        this.getCatalog(this.bookId);
        this.book = _common_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"].getItem('book') || {};
        document.title = this.book.name || 'NovelShelves';
    };
    CatalogComponent.prototype.getCatalog = function (id) {
        var _this = this;
        this.httpService.get('getBookCatalog', { id: id })
            .subscribe(function (res) {
            _this.bookCatalog = res;
        });
    };
    CatalogComponent.prototype.readChapter = function (chapterId) {
        this.router.navigate(["/book/" + this.bookId + "/" + chapterId]);
    };
    CatalogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-catalog',
            template: __webpack_require__(/*! ./catalog.component.html */ "./src/app/container/book/catalog/catalog.component.html"),
            styles: [__webpack_require__(/*! ./catalog.component.less */ "./src/app/container/book/catalog/catalog.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _core_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], CatalogComponent);
    return CatalogComponent;
}());



/***/ }),

/***/ "./src/app/container/book/chapter/chapter.component.html":
/*!***************************************************************!*\
  !*** ./src/app/container/book/chapter/chapter.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chapter\">\n    <div class=\"page-header\">\n      <p>{{chapter.title}}</p>\n    </div>\n    <div class=\"content\">\n      <article\n        [ngStyle]=\"{'font-size': fontSize + 'px'}\"\n        class=\"inner\"\n        [innerHTML]=\"chapter.content\">\n      </article>\n    </div>\n\n    <div class=\"page-config\" *ngIf=\"pageConfig\">\n      <header class=\"header\">\n        <a href=\"javascript:\" class=\"header-back\" (click)=\"goBack()\">\n            <i class=\"anticon anticon-left\"></i>\n        </a>\n      </header>\n\n      <div class=\"page-option\" *ngIf=\"pageSetting\">\n          <div class=\"read-set-font\">\n              <i class=\"novel novel-font-down\"></i>\n              <nz-slider\n                [nzMin]=\"12\"\n                [nzMax]=\"30\"\n                [(ngModel)]=\"fontSize\"\n                (ngModelChange)=\"changeFontSize($event)\">\n              </nz-slider>\n              <i class=\"novel novel-font-up\"></i>\n          </div>\n          <!-- <div id=\"readSetSkin\" class=\"read-set-skin\">\n              <ul class=\"btn-group\" role=\"radiogroup\">\n                  <li class=\"btn-group-cell read-set-cell\">\n                      <input type=\"radio\" id=\"skinDefault\" name=\"skin\" value=\"default\" checked=\"\" data-index=\"0\" data-eid=\"mqd_R23\" title=\"默认皮肤\">\n                      <label class=\"read-skin-default\" for=\"skinDefault\" title=\"默认皮肤\"><svg class=\"icon icon-ok center\"><use xlink:href=\"#icon-ok\"></use></svg></label>\n                  </li>\n                  <li class=\"btn-group-cell read-set-cell\">\n                      <input type=\"radio\" id=\"skinBlue\" name=\"skin\" value=\"blue\" data-index=\"1\" data-eid=\"mqd_R24\" title=\"蓝色皮肤\">\n                      <label class=\"read-skin-blue\" for=\"skinBlue\" title=\"蓝色皮肤\"><svg class=\"icon icon-ok center\"><use xlink:href=\"#icon-ok\"></use></svg></label>\n                  </li>\n                  <li class=\"btn-group-cell read-set-cell\">\n                      <input type=\"radio\" id=\"skinGreen\" name=\"skin\" value=\"green\" data-index=\"2\" data-eid=\"mqd_R25\" title=\"绿色皮肤\">\n                      <label class=\"read-skin-green\" for=\"skinGreen\" title=\"绿色皮肤\"><svg class=\"icon icon-ok center\"><use xlink:href=\"#icon-ok\"></use></svg></label>\n                  </li>\n                  <li class=\"btn-group-cell read-set-cell\">\n                      <input type=\"radio\" id=\"skinLight\" name=\"skin\" value=\"light\" data-index=\"3\" data-eid=\"mqd_R26\" title=\"浅色皮肤\">\n                      <label class=\"read-skin-light\" for=\"skinLight\" title=\"浅色皮肤\"><svg class=\"icon icon-ok center\"><use xlink:href=\"#icon-ok\"></use></svg></label>\n                  </li>\n              </ul>\n          </div>\n          <div id=\"readSetLayout\" class=\"read-set-layout\">\n              <ul class=\"btn-group\">\n                  <li class=\"btn-group-cell read-set-cell\">\n                      <input type=\"radio\" id=\"layoutV\" name=\"layout\" value=\"v\" checked=\"\" data-eid=\"mqd_R28\">\n                      <label class=\"read-btn-layout\" for=\"layoutV\">上下滑动</label>\n                  </li>\n                  <li class=\"btn-group-cell read-set-cell\">\n                      <input type=\"radio\" id=\"layoutH\" name=\"layout\" value=\"h\" data-eid=\"mqd_R27\">\n                      <label class=\"read-btn-layout\" for=\"layoutH\">左右滑动</label>\n                  </li>\n              </ul>\n          </div> -->\n      </div>\n      <footer class=\"footer\">\n        <div class=\"btn-group\">\n            <a href=\"javascript:\" (click)=\"goCatalog()\">\n                <i class=\"novel novel-catalog\"></i>\n                <h4 class=\"read-opt-footer-h\">目录</h4>\n            </a>\n            <a href=\"javascript:\">\n                <i class=\"novel novel-progress\"></i>\n                <h4 class=\"read-opt-footer-h\">进度</h4>\n            </a>\n            <a href=\"javascript:\" (click)=\"pageSet($event)\">\n                <i class=\"novel novel-font\"></i>\n                <h4 class=\"read-opt-footer-h\">设置</h4>\n            </a>\n\n            <a href=\"javascript:\" (click)=\"dayNight()\">\n                <i class=\"novel novel-night\" *ngIf=\"!day\"></i>\n                <i class=\"novel novel-day\" *ngIf=\"day\"></i>\n                <h4 class=\"read-opt-footer-h\" *ngIf=\"!day\">夜间</h4>\n                <h4 class=\"read-opt-footer-h\" *ngIf=\"day\">日间</h4>\n            </a>\n        </div>\n      </footer>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/container/book/chapter/chapter.component.less":
/*!***************************************************************!*\
  !*** ./src/app/container/book/chapter/chapter.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chapter .page-header {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 44px;\n  background: #c4b395;\n  color: rgba(0, 0, 0, 0.4);\n}\n.chapter .page-header p {\n  font-size: 0.75rem;\n  font-weight: 400;\n  position: absolute;\n  top: 15px;\n  left: 1rem;\n}\n.chapter .content {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.chapter .content article {\n  padding-top: 2.75rem;\n  font-size: 1rem;\n  line-height: 1.8;\n  min-height: calc(100vh - 44px);\n  margin: 0 16px;\n  text-align: justify;\n  overflow: visible;\n  height: 100%;\n  -webkit-columns: calc(100vw - 32px) 1;\n          columns: calc(100vw - 32px) 1;\n  -webkit-column-gap: 16px;\n          column-gap: 16px;\n  word-break: break-all;\n}\n.chapter .btn {\n  width: 100%;\n  text-align: center;\n  padding-bottom: 1rem;\n  margin-top: 0.5rem;\n}\n.chapter .btn button {\n  width: 90%;\n  color: #fff;\n  background-color: #ed424b;\n  border-color: #ed424b;\n  border-radius: 5px;\n}\n.chapter .page-config {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.chapter .page-config .header {\n  transition: opacity 0.15s, visibility 0.15s, -webkit-transform 0.15s;\n  transition: opacity 0.15s, transform 0.15s, visibility 0.15s;\n  transition: opacity 0.15s, transform 0.15s, visibility 0.15s, -webkit-transform 0.15s;\n  color: #fff;\n  border-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.9);\n  position: relative;\n  box-sizing: border-box;\n  height: 2.75rem;\n  padding-top: 0.6875rem;\n  padding-bottom: 0.625rem;\n}\n.chapter .page-config .header .header-back {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  padding: 0.625rem 0.8125rem 0.625rem 0.875rem;\n}\n.chapter .page-config .header .header-back .anticon-left {\n  font-size: 18px;\n  color: #fff;\n}\n.chapter .page-config .footer {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 3rem;\n  text-align: center;\n  transition: opacity 0.15s, visibility 0.15s, -webkit-transform 0.15s;\n  transition: opacity 0.15s, transform 0.15s, visibility 0.15s;\n  transition: opacity 0.15s, transform 0.15s, visibility 0.15s, -webkit-transform 0.15s;\n  color: #fff;\n  border-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.9);\n}\n.chapter .page-config .footer .btn-group {\n  display: table;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  table-layout: fixed;\n}\n.chapter .page-config .footer .btn-group a {\n  font-size: 16px;\n  padding-top: 0.375rem;\n  /* font-size: 100%; */\n  font-weight: 400;\n  display: table-cell;\n  text-decoration: none;\n  color: #fff;\n  outline: 0;\n}\n.chapter .page-config .footer .btn-group a .novel {\n  font-weight: 600;\n}\n.chapter .page-config .footer .btn-group h4 {\n  font-size: 10px;\n  font-weight: 200;\n  line-height: 1;\n  position: relative;\n  color: #fff;\n}\n.chapter .page-config .page-option {\n  position: absolute;\n  right: 0;\n  bottom: 3rem;\n  left: 0;\n  /* visibility: hidden; */\n  -webkit-transform: translateY(0.5px);\n  transform: translateY(0.5px);\n  opacity: 0;\n  background-clip: padding-box;\n  visibility: visible;\n  transition: none;\n  opacity: 1;\n  transition: opacity 0.15s, visibility 0.15s, -webkit-transform 0.15s;\n  transition: opacity 0.15s, transform 0.15s, visibility 0.15s;\n  transition: opacity 0.15s, transform 0.15s, visibility 0.15s, -webkit-transform 0.15s;\n  color: #fff;\n  border-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.9);\n}\n.chapter .page-config .page-option .read-set-font {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-top: 0.5rem;\n}\n.chapter .page-config .page-option nz-slider {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/container/book/chapter/chapter.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/container/book/chapter/chapter.component.ts ***!
  \*************************************************************/
/*! exports provided: ChapterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterComponent", function() { return ChapterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/http.service */ "./src/app/core/http/http.service.ts");
/* harmony import */ var _common_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/local-storage */ "./src/app/common/local-storage.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChapterComponent = /** @class */ (function () {
    function ChapterComponent(route, router, httpService, el, location) {
        this.route = route;
        this.router = router;
        this.httpService = httpService;
        this.el = el;
        this.location = location;
        this.chapter = {};
        this.pageConfig = false;
        this.fontSize = _common_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"].getItem('fontSize') || 16;
        this.pageSetting = false;
        this.day = false;
        this.page = _common_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"].getItem('page') || 0;
        this.pageSize = 0;
        this.transformX = 0;
        this.moveStart = 0;
        this.moveDistance = 0;
        this.book = {};
    }
    ChapterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var bookId = this.route.snapshot.params['id'], chapterId = this.route.snapshot.params['chapterId'];
        this.getChapter(bookId, chapterId);
        document.body.style.backgroundColor = '#c4b395';
        document.body.addEventListener('touchmove', function (e) {
            e.preventDefault(); // 阻止默认的处理方式(阻止下拉滑动的效果)
        }, { passive: false }); // passive 参数不能省略，用来兼容ios和android
        this.book = _common_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"].getItem('book') || {};
        document.title = this.book.name || 'NovelShelves';
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.el.nativeElement.querySelector('.chapter'), 'touchstart')
            .subscribe(function (event) {
            _this.moveDistance = 0;
            _this.moveStart = event.changedTouches[0].clientX;
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.el.nativeElement.querySelector('.chapter'), 'touchmove')
            .subscribe(function (event) {
            if (event.target.className === 'inner' || event.target.className === 'content') {
                _this.moveDistance = _this.moveStart - event.changedTouches[0].clientX;
                _this.el.nativeElement.querySelector('.inner').style.transform = "translateX(-" + (_this.transformX + _this.moveDistance) + "px)";
            }
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.el.nativeElement.querySelector('.chapter'), 'touchend')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (event) {
            var x = event.changedTouches[0].pageX;
            var y = event.changedTouches[0].pageY - window.scrollY;
            return (_this.pageConfig && !_this.isClickCenter(x, y)) ? { stop: true } : event;
        }))
            .subscribe(function (event) {
            if (event.stop) {
                return;
            }
            var x = event.changedTouches[0].pageX;
            var y = event.changedTouches[0].pageY - window.scrollY;
            console.log(x, y);
            if (_this.isClickCenter(x, y) && _this.moveDistance === 0) {
                console.log('点击屏幕中间');
                _this.pageConfig = !_this.pageConfig;
                if (!_this.pageConfig) {
                    _this.pageSetting = false;
                }
                document.body.style.overflow = _this.pageConfig ? 'hidden' : '';
            }
            else if (_this.isClickLeftTop(x, y)) {
                console.log('点击屏幕左上');
                _this.next('prev');
            }
            else {
                _this.next(_this.moveDistance >= 0 ? '' : 'prev');
            }
        });
    };
    ChapterComponent.prototype.isClickCenter = function (x, y) {
        var centerX = window.innerWidth / 2;
        var centerY = window.innerHeight / 2;
        var isXCenter = (x < (centerX + 40)) && (x > (centerX - 40));
        var isYCenter = (y < (centerY + 100)) && (y > (centerY - 100));
        return isXCenter && isYCenter;
    };
    ChapterComponent.prototype.isClickLeftTop = function (x, y) {
        var centerX = window.innerWidth / 2;
        var centerY = window.innerHeight / 2;
        var isXLeft = x < (centerX);
        var isYTop = y < (centerY - 40);
        return isXLeft && isYTop;
    };
    ChapterComponent.prototype.getChapter = function (bookId, chapterId, type) {
        var _this = this;
        this.el.nativeElement.querySelector('.inner').style.transition = '';
        var chapter = _common_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"].getItem('chapter' + bookId);
        if (chapter && parseInt(chapterId, 10) === chapter.id) {
            this.chapter = chapter;
            this.adjustPageSize(type);
            return;
        }
        this.httpService.get('getChapter', { bookId: bookId, chapterId: chapterId })
            .subscribe(function (res) {
            _this.chapter = res;
            _this.page = 0;
            _this.adjustPageSize(type);
            if (!_this.chapter.content) {
                _this.chapter.content = "\n\t\t\t<div>\u5F53\u524D\u7AE0\u8282\u6682\u65E0\u5185\u5BB9</div>";
            }
            _common_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"].setItem('chapter' + bookId, _this.chapter);
            _this.location.replaceState("/book/" + bookId + "/" + chapterId);
        });
    };
    ChapterComponent.prototype.changeFontSize = function (value) {
        this.el.nativeElement.querySelector('.inner').style.fontSize = value + 'px';
        _common_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"].setItem('fontSize', value);
        this.adjustPageSize();
    };
    ChapterComponent.prototype.pageSet = function (event) {
        this.pageSetting = !this.pageSetting;
    };
    ChapterComponent.prototype.goCatalog = function () {
        this.router.navigate(["/book/" + this.chapter.bookId + "/catalog"]);
    };
    ChapterComponent.prototype.goBack = function () {
        this.location.back();
    };
    ChapterComponent.prototype.dayNight = function () {
        this.day = !this.day;
        document.body.style.backgroundColor = this.day ? '#1a1a1a' : '#c4b395';
        this.el.nativeElement.querySelector('.page-header').style.backgroundColor = this.day ? '#1a1a1a' : '#c4b395';
        document.body.style.color = this.day ? 'rgba(255,255,255,.5)' : '#33373d';
        this.el.nativeElement.querySelector('.page-header').style.color = this.day ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.4)';
    };
    ChapterComponent.prototype.next = function (type) {
        if (this.page === 0 && type === 'prev') {
            if (!this.chapter.prev) {
                console.log('当前已是第一章');
                return;
            }
            this.getChapter(this.chapter.bookId, this.chapter.prev, 'prev');
            return;
        }
        type === 'prev' ? this.page-- : this.page++;
        if (this.page > this.pageSize) {
            this.getChapter(this.chapter.bookId, this.chapter.next, 'next');
            return;
        }
        this.pageTransform(this.page);
        this.el.nativeElement.querySelector('.inner').style.transition = 'transform .1s';
    };
    ChapterComponent.prototype.pageTransform = function (page) {
        console.log(this.page, this.pageSize);
        _common_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"].setItem('page', page);
        this.transformX = (window.innerWidth - 16) * page;
        this.el.nativeElement.querySelector('.inner').style.transform = "translateX(-" + this.transformX + "px)";
    };
    ChapterComponent.prototype.adjustPageSize = function (type) {
        var _this = this;
        setTimeout(function () {
            _this.pageSize = Math.floor(document.body.querySelector('.inner').scrollWidth / (window.innerWidth - 16));
            if (type === 'next') {
                _this.page = 0;
            }
            if (type === 'prev') {
                _this.page = _this.pageSize;
            }
            if (_this.page > _this.pageSize) {
                _this.page = _this.pageSize;
            }
            _this.pageTransform(_this.page);
        }, 0);
    };
    ChapterComponent.prototype.ngOnDestroy = function () {
        document.body.style.backgroundColor = '';
    };
    ChapterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapter',
            template: __webpack_require__(/*! ./chapter.component.html */ "./src/app/container/book/chapter/chapter.component.html"),
            styles: [__webpack_require__(/*! ./chapter.component.less */ "./src/app/container/book/chapter/chapter.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], ChapterComponent);
    return ChapterComponent;
}());



/***/ }),

/***/ "./src/app/container/book/detail/detail.component.html":
/*!*************************************************************!*\
  !*** ./src/app/container/book/detail/detail.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"book-detail\">\n  <div class=\"info\">\n    <img class=\"cover\" [src]=\"book.cover || ''\" alt=\"{{book.name}}\">\n    <div class=\"cell\">\n      <h2 class=\"title\">{{book.name}}</h2>\n      <p class=\"author book-meta\">{{book.author}}</p>\n      <p class=\"category book-meta\">{{book.category}}</p>\n      <p class=\"state book-meta\">{{book.state}}</p>\n    </div>\n  </div>\n  <div class=\"btn\">\n    <button nz-button nzType=\"primary\" (click)=\"read()\">开始阅读</button>\n    <button nz-button nzType=\"default\">加入书架</button>\n    <button nz-button nzType=\"default\" [routerLink]=\" '/book/' + book.id + '/catalog'\">查看目录</button>\n  </div>\n  <div class=\"intro\" [innerHTML]=\"book.intro\">\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/container/book/detail/detail.component.less":
/*!*************************************************************!*\
  !*** ./src/app/container/book/detail/detail.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book-detail .info {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  padding: 1rem;\n  transition: padding-left 0.15s;\n}\n.book-detail .info .cover {\n  width: 5.25rem;\n  height: 7rem;\n  border-radius: 2px;\n  box-shadow: none;\n  font-size: 0;\n  float: left;\n  margin-right: 0.5rem;\n}\n.book-detail .info .cell {\n  line-height: 1.4rem;\n}\n.book-detail .info .cell .title {\n  line-height: 1.4;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.book-detail .info .cell .author {\n  font-size: 0.8125rem;\n}\n.book-detail .info .cell .book-meta {\n  font-size: 0.75rem;\n  overflow: hidden;\n}\n.book-detail .btn {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 0 1rem 1rem;\n}\n.book-detail .btn button {\n  font-size: 0.8125rem;\n  line-height: 1.875rem;\n  display: inline-block;\n  padding: 0 1rem;\n  text-align: center;\n  border-radius: 0.125rem;\n}\n.book-detail .intro {\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n  position: relative;\n  overflow: hidden;\n  margin-left: 1rem;\n  padding-right: 1rem;\n  text-align: justify;\n  border-top: 1rem solid transparent;\n  border-bottom: 1rem solid transparent;\n  box-shadow: 0 1px #f0f1f2, 0 -1px #f0f1f2;\n}\n"

/***/ }),

/***/ "./src/app/container/book/detail/detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/container/book/detail/detail.component.ts ***!
  \***********************************************************/
/*! exports provided: BookDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailComponent", function() { return BookDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/http/http.service */ "./src/app/core/http/http.service.ts");
/* harmony import */ var _common_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/local-storage */ "./src/app/common/local-storage.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookDetailComponent = /** @class */ (function () {
    function BookDetailComponent(httpService, router, message, route) {
        this.httpService = httpService;
        this.router = router;
        this.message = message;
        this.route = route;
        this.book = {};
        this.chapter = {};
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        this.getBookDetail(id);
    };
    BookDetailComponent.prototype.getBookDetail = function (id) {
        var _this = this;
        var book = _common_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"].getItem('book') || {};
        if (book.id === parseInt(id, 10)) {
            this.book = book;
        }
        else {
            this.httpService.get('getBook', { id: id }).subscribe(function (res) {
                _this.book = res;
                _common_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"].setItem('book', _this.book);
            });
        }
    };
    BookDetailComponent.prototype.read = function () {
        var _this = this;
        var book = _common_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"].getItem('book');
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
    BookDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/container/book/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.less */ "./src/app/container/book/detail/detail.component.less")]
        }),
        __metadata("design:paramtypes", [_core_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BookDetailComponent);
    return BookDetailComponent;
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
        this.globals.loading = true;
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
//# sourceMappingURL=book-book-module.js.map