(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["container-container-module"],{

/***/ "./src/app/container/container-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/container/container-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ContainerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerRoutingModule", function() { return ContainerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: '',
        component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: 'search', loadChildren: './search/search.module#SearchModule', data: { title: 'NovelShveles' } },
            { path: 'shelves', loadChildren: './shelves/shelves.module#ShelvesModule', data: { title: 'LocalStorage' } },
            { path: 'book', loadChildren: './book/book.module#BookModule', data: { title: 'LocalStorage' } },
        ]
    }
];
var ContainerRoutingModule = /** @class */ (function () {
    function ContainerRoutingModule() {
    }
    ContainerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ContainerRoutingModule);
    return ContainerRoutingModule;
}());



/***/ }),

/***/ "./src/app/container/container.component.ts":
/*!**************************************************!*\
  !*** ./src/app/container/container.component.ts ***!
  \**************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
    }
    ContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-container',
            template: "\n      <router-outlet></router-outlet>\n  ",
        })
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/container/container.module.ts":
/*!***********************************************!*\
  !*** ./src/app/container/container.module.ts ***!
  \***********************************************/
/*! exports provided: ContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerModule", function() { return ContainerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container.component */ "./src/app/container/container.component.ts");
/* harmony import */ var _container_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container-routing.module */ "./src/app/container/container-routing.module.ts");
/* harmony import */ var _components_layout_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/layout/layout.module */ "./src/app/components/layout/layout.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ContainerModule = /** @class */ (function () {
    function ContainerModule() {
    }
    ContainerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _container_component__WEBPACK_IMPORTED_MODULE_2__["ContainerComponent"],
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                // SearchModule,
                // ShelvesModule,
                // BookModule,
                _components_layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                _container_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContainerRoutingModule"]
            ]
        })
    ], ContainerModule);
    return ContainerModule;
}());



/***/ })

}]);
//# sourceMappingURL=container-container-module.js.map