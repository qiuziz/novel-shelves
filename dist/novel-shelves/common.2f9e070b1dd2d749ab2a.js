(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"9KET":function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("ZYCi"),r=(n("EOig"),function(){return function(t,e,n){var r=this;this.message=e,this.titleService=n,this.isFetching=!1,this.titleService.init(),t.events.subscribe(function(t){if(!r.isFetching&&t instanceof i.m&&(r.isFetching=!0),t instanceof i.e)return r.isFetching=!1,void r.message.error("\u65e0\u6cd5\u52a0\u8f7d"+t.url+"\u8def\u7531",{nzDuration:3e3});t instanceof i.d&&setTimeout(function(){r.isFetching=!1},100)})}}())},EOig:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("VnD/"),r=n("67Y/"),o=n("psW0"),c=n("ZYCi"),u=n("T7LR"),a=function(){function t(t,e,n){this.router=t,this.activatedRoute=e,this.titleService=n}return t.prototype.init=function(){var t=this;this.router.events.pipe(Object(i.a)(function(t){return t instanceof c.d}),Object(r.a)(function(){for(var e=t.activatedRoute;e.firstChild;)e=e.firstChild;return e}),Object(i.a)(function(t){return"primary"===t.outlet}),Object(o.a)(function(t){return t.data}),Object(r.a)(function(t){return(t.title&&"LocalStorage"===t.title?u.a.getItem("title"):t.title)||"NovelShelves"})).subscribe(function(e){console.log(e),t.titleService.setTitle(""+e)})},t}()},KZlS:function(t,e,n){"use strict";n("9KET"),n("gK8K"),n("gHic"),n("FP+Z"),n.d(e,"a",function(){return i});var i=function(){}},T7LR:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=new(function(){function t(){}return t.prototype.getItem=function(t){var e=localStorage.getItem(t);return"undefined"!==e?JSON.parse(e):void 0},t.prototype.setItem=function(t,e){localStorage.setItem(t,JSON.stringify(e))},t.prototype.removeItem=function(t){localStorage.removeItem(t)},Object.defineProperty(t.prototype,"length",{get:function(){return localStorage.length},enumerable:!0,configurable:!0}),t.prototype.key=function(t){return localStorage.key(t)},t.prototype.clear=function(){localStorage.clear()},t}())},gK8K:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("T7LR"),r=function(){function t(t,e){this.router=t,this.location=e}return Object.defineProperty(t.prototype,"title",{get:function(){return i.a.getItem("headerTitle")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"noHeaderBack",{get:function(){return"/shelves"!==this.location.path()},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){},t.prototype.search=function(){this.router.navigate(["/search"])},t}()}}]);