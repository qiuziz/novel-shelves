(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"2obF":function(n,t,l){"use strict";l.r(t);var e=l("CcnG"),o=l("gHic"),a=l("T7LR"),i=function(){function n(n,t,l,e){this.httpService=n,this.router=t,this.message=l,this.route=e,this.book={isAdd:0},a.a.setItem("headerTitle","\u8be6\u60c5")}return n.prototype.ngOnInit=function(){this.getBookDetail(this.route.snapshot.params.id)},n.prototype.getBookDetail=function(n){var t=this,l=a.a.getItem("book")||{};l.id===parseInt(n,10)?this.book=l:this.httpService.get("getBook",{id:n}).subscribe(function(n){t.book=n,a.a.setItem("book",t.book)})},n.prototype.read=function(){var n=this,t=a.a.getItem("book"),l=a.a.getItem("chapter"+t.id);l?this.router.navigate(["/book/"+t.id+"/"+l.id]):t.catalog&&t.catalog.length>0?this.router.navigate(["/book/"+t.id+"/"+t.catalog[0].id]):this.httpService.get("getBookCatalog",{id:t.id}).subscribe(function(l){l[0]&&l[0].id?n.router.navigate(["/book/"+t.id+"/"+l[0].id]):n.message.error("\u6682\u65e0\u5185\u5bb9")})},n.prototype.addShelves=function(){var n=this,t=a.a.getItem("book")||{};t.isAdd||this.httpService.get("shelvesOptions",{type:"add",bookId:t.id}).subscribe(function(t){t.status?n.message.error(t.msg):(n.book=t,a.a.setItem("book",n.book))})},n}(),u=function(){function n(n,t,l){this.route=n,this.router=t,this.httpService=l,this.bookCatalog=[],this.bookId="",this.book={},a.a.setItem("headerTitle","\u76ee\u5f55")}return n.prototype.ngOnInit=function(){this.bookId=this.route.snapshot.params.id,this.getCatalog(this.bookId),this.book=a.a.getItem("book")||{},document.title=this.book.name||"NovelShelves"},n.prototype.getCatalog=function(n){var t=this;this.httpService.get("getBookCatalog",{id:n}).subscribe(function(n){t.bookCatalog=n})},n.prototype.readChapter=function(n){this.router.navigate(["/book/"+this.bookId+"/"+n])},n}(),c=l("bne5"),r=l("67Y/"),g=l("FP+Z"),s=function(){function n(n,t,l,e,o,i){var u=this;this.route=n,this.router=t,this.httpService=l,this.el=e,this.globals=o,this.location=i,this.chapter={id:1},this.pageConfig=!1,this.fontSize=a.a.getItem("fontSize")||16,this.pageSetting=!1,this.day=a.a.getItem("day")||!1,this.page=a.a.getItem("page")||0,this.pageSize=0,this.transformX=0,this.moveStart=0,this.moveDistance=0,this.book={},this.maskTitle="",this.progressSet=!1,this.catalog=[],this.currentTip="",this.tipFormatter=function(){return u.currentTip||u.chapter.title}}return Object.defineProperty(n.prototype,"currentChapter",{get:function(){return this.chapter.id-this.catalog[0].id||1},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){var n=this,t=this.route.snapshot.params.id;this.getChapter(t,this.route.snapshot.params.chapterId),this.getBookCatalog(t),this.changeStyle(),this.bindPreventMove=function(n){n.preventDefault()},document.body.addEventListener("touchmove",this.bindPreventMove,{passive:!1}),Object(c.a)(this.el.nativeElement.querySelector(".chapter"),"touchstart").subscribe(function(t){n.moveDistance=0,n.moveStart=t.changedTouches[0].clientX}),Object(c.a)(this.el.nativeElement.querySelector(".chapter"),"touchmove").subscribe(function(t){"inner"!==t.target.className&&"content"!==t.target.className||(n.moveDistance=n.moveStart-t.changedTouches[0].clientX,n.el.nativeElement.querySelector(".inner").style.transform="translateX(-"+(n.transformX+n.moveDistance)+"px)")}),Object(c.a)(this.el.nativeElement.querySelector(".chapter"),"touchend").pipe(Object(r.a)(function(t){var l=t.changedTouches[0].pageY-window.scrollY;return n.pageConfig&&!n.isClickCenter(t.changedTouches[0].pageX,l)?{stop:!0}:t})).subscribe(function(t){if(!t.stop){var l=t.changedTouches[0].pageX,e=t.changedTouches[0].pageY-window.scrollY;console.log(l,e),n.isClickCenter(l,e)&&0===n.moveDistance?(console.log("\u70b9\u51fb\u5c4f\u5e55\u4e2d\u95f4"),n.pageConfig=!n.pageConfig,n.pageConfig||(n.pageSetting=!1,n.progressSet=!1)):n.isClickLeftTop(l,e)?(console.log("\u70b9\u51fb\u5c4f\u5e55\u5de6\u4e0a"),n.next("prev")):n.next(n.moveDistance>=0?"":"prev")}})},n.prototype.isClickCenter=function(n,t){var l=window.innerWidth/2,e=window.innerHeight/2;return n<l+40&&n>l-40&&t<e+100&&t>e-100},n.prototype.isClickLeftTop=function(n,t){var l=window.innerWidth/2,e=window.innerHeight/2;return n<l&&t<e-40},n.prototype.getChapter=function(n,t,l){var e=this;this.el.nativeElement.querySelector(".inner").style.transition="";var o=a.a.getItem("chapter"+t);if(o&&parseInt(t,10)===o.id&&o.content)return this.chapter=o,a.a.setItem("chapter"+n,this.chapter),this.location.replaceState("/book/"+n+"/"+t),this.adjustPageSize(l),void this.getNextChapter(n,this.chapter.next);this.httpService.get("getChapter",{bookId:n,chapterId:t}).subscribe(function(o){e.chapter=o,e.page=0,e.adjustPageSize(l),e.chapter.content||(e.chapter.content="\n\t\t\t<div>\u5f53\u524d\u7ae0\u8282\u6682\u65e0\u5185\u5bb9</div>"),a.a.setItem("chapter"+t,e.chapter),e.location.replaceState("/book/"+n+"/"+t),e.getNextChapter(n,e.chapter.next)})},n.prototype.getBookCatalog=function(n){var t=this,l=a.a.getItem("book")||{};l.catalog&&l.catalog.length>0||this.httpService.get("getBookCatalog",{id:n}).subscribe(function(n){t.catalog=n})},n.prototype.getNextChapter=function(n,t){var l=this;this.globals.loadOnce=!1,this.httpService.get("getChapter",{bookId:n,chapterId:t}).subscribe(function(n){a.a.setItem("chapter"+t,n),a.a.removeItem("chapter"+(t-10)),l.globals.loadOnce=!0})},n.prototype.changeFontSize=function(n){this.el.nativeElement.querySelector(".inner").style.fontSize=n+"px",a.a.setItem("fontSize",n),this.adjustPageSize()},n.prototype.changeProgress=function(n){this.getChapter(this.route.snapshot.params.id,this.catalog[n].id)},n.prototype.changeTip=function(n){this.currentTip=this.catalog[n].chapter},n.prototype.pageSet=function(n){this.pageSetting=!this.pageSetting,this.progressSet=!1},n.prototype.goCatalog=function(){this.router.navigate(["/book/"+this.chapter.bookId+"/catalog"])},n.prototype.goBack=function(){this.location.back()},n.prototype.dayNight=function(){this.day=!this.day,this.changeStyle(),a.a.setItem("day",this.day)},n.prototype.changeStyle=function(){document.body.style.backgroundColor=this.day?"#1a1a1a":"#c4b395",this.el.nativeElement.querySelector(".page-header").style.backgroundColor=this.day?"#1a1a1a":"#c4b395",document.body.style.color=this.day?"rgba(255,255,255,.5)":"#33373d",this.el.nativeElement.querySelector(".page-header").style.color=this.day?"rgba(255,255,255,.5)":"rgba(0,0,0,.4)"},n.prototype.next=function(n){if(0===this.page&&"prev"===n)return this.chapter.prev?void this.getChapter(this.chapter.bookId,this.chapter.prev,"prev"):void console.log("\u5f53\u524d\u5df2\u662f\u7b2c\u4e00\u7ae0");"prev"===n?this.page--:this.page++,this.page>this.pageSize?this.getChapter(this.chapter.bookId,this.chapter.next,"next"):(this.pageTransform(this.page),this.el.nativeElement.querySelector(".inner").style.transition="transform .1s")},n.prototype.pageTransform=function(n){console.log(this.page,this.pageSize),a.a.setItem("page",n),this.transformX=(window.innerWidth-16)*n,this.el.nativeElement.querySelector(".inner").style.transform="translateX(-"+this.transformX+"px)"},n.prototype.adjustPageSize=function(n){var t=this;setTimeout(function(){t.pageSize=Math.floor(document.body.querySelector(".inner").scrollWidth/(window.innerWidth-16)),"next"===n&&(t.page=0),"prev"===n&&(t.page=t.pageSize),t.page>t.pageSize&&(t.page=t.pageSize),t.pageTransform(t.page)},0)},n.prototype.ngOnDestroy=function(){document.body.style.backgroundColor="",document.body.removeEventListener("touchmove",this.bindPreventMove)},n}(),p=function(){},h=l("pMnS"),d=l("ebDo"),b=l("6Cds"),f=l("ZYCi"),m=e.Qa({encapsulation:0,styles:[[".book-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{position:relative;display:block;overflow:hidden;padding:1rem;transition:padding-left .15s}.book-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]{width:5.25rem;height:7rem;border-radius:2px;box-shadow:none;font-size:0;float:left;margin-right:.5rem}.book-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]{line-height:1.4rem}.book-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{line-height:1.4;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.book-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]{font-size:.8125rem}.book-detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .book-meta[_ngcontent-%COMP%]{font-size:.75rem;overflow:hidden}.book-detail[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;padding:0 1rem 1rem}.book-detail[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:.8125rem;line-height:1.875rem;display:inline-block;padding:0 1rem;text-align:center;border-radius:.125rem}.book-detail[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.5rem;position:relative;overflow:hidden;margin-left:1rem;padding-right:1rem;text-align:justify;border-top:1rem solid transparent;border-bottom:1rem solid transparent;box-shadow:0 1px #f0f1f2,0 -1px #f0f1f2}"]],data:{}});function C(n){return e.mb(0,[(n()(),e.Sa(0,0,null,null,26,"div",[["class","book-detail"]],null,null,null,null,null)),(n()(),e.Sa(1,0,null,null,10,"div",[["class","info"]],null,null,null,null,null)),(n()(),e.Sa(2,0,null,null,0,"img",[["class","cover"]],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(n()(),e.Sa(3,0,null,null,8,"div",[["class","cell"]],null,null,null,null,null)),(n()(),e.Sa(4,0,null,null,1,"h2",[["class","title"]],null,null,null,null,null)),(n()(),e.kb(5,null,["",""])),(n()(),e.Sa(6,0,null,null,1,"p",[["class","author book-meta"]],null,null,null,null,null)),(n()(),e.kb(7,null,["",""])),(n()(),e.Sa(8,0,null,null,1,"p",[["class","category book-meta"]],null,null,null,null,null)),(n()(),e.kb(9,null,["",""])),(n()(),e.Sa(10,0,null,null,1,"p",[["class","state book-meta"]],null,null,null,null,null)),(n()(),e.kb(11,null,["",""])),(n()(),e.Sa(12,0,null,null,13,"div",[["class","btn"]],null,null,null,null,null)),(n()(),e.Sa(13,0,null,null,3,"button",[["nz-button",""],["nzType","primary"]],[[1,"nz-wave",0]],[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.read()&&e),e},d.e,d.a)),e.hb(512,null,b.H,b.H,[e.D]),e.Ra(15,1294336,null,0,b.h,[e.k,e.h,e.D,b.H,e.y],{nzType:[0,"nzType"]},null),(n()(),e.kb(-1,0,["\u5f00\u59cb\u9605\u8bfb"])),(n()(),e.Sa(17,0,null,null,3,"button",[["nz-button",""],["nzType","default"]],[[8,"disabled",0],[1,"nz-wave",0]],[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.addShelves()&&e),e},d.e,d.a)),e.hb(512,null,b.H,b.H,[e.D]),e.Ra(19,1294336,[["shelvesBtn",4]],0,b.h,[e.k,e.h,e.D,b.H,e.y],{nzType:[0,"nzType"]},null),(n()(),e.kb(20,0,["",""])),(n()(),e.Sa(21,0,null,null,4,"button",[["nz-button",""],["nzType","default"]],[[1,"nz-wave",0]],[[null,"click"]],function(n,t,l){var o=!0;return"click"===t&&(o=!1!==e.cb(n,22).onClick()&&o),o},d.e,d.a)),e.Ra(22,16384,null,0,f.p,[f.o,f.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.hb(512,null,b.H,b.H,[e.D]),e.Ra(24,1294336,null,0,b.h,[e.k,e.h,e.D,b.H,e.y],{nzType:[0,"nzType"]},null),(n()(),e.kb(-1,0,["\u67e5\u770b\u76ee\u5f55"])),(n()(),e.Sa(26,0,null,null,0,"div",[["class","intro"]],[[8,"innerHTML",1]],null,null,null,null))],function(n,t){var l=t.component;n(t,15,0,"primary"),n(t,19,0,"default"),n(t,22,0,"/book/"+l.book.id+"/catalog"),n(t,24,0,"default")},function(n,t){var l=t.component;n(t,2,0,l.book.cover||"",e.Ua(1,"",l.book.name,"")),n(t,5,0,l.book.name),n(t,7,0,l.book.author),n(t,9,0,l.book.category),n(t,11,0,l.book.state),n(t,13,0,e.cb(t,15).nzWave),n(t,17,0,l.book.isAdd,e.cb(t,19).nzWave),n(t,20,0,l.book.isAdd?"\u5df2\u5728\u4e66\u67b6":"\u52a0\u5165\u4e66\u67b6"),n(t,21,0,e.cb(t,24).nzWave),n(t,26,0,l.book.intro)})}var v=e.Oa("app-detail",i,function(n){return e.mb(0,[(n()(),e.Sa(0,0,null,null,1,"app-detail",[],null,null,null,C,m)),e.Ra(1,114688,null,0,i,[o.a,f.o,b.e,f.a],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),M=l("Ip0R"),O=e.Qa({encapsulation:0,styles:[[".catalog[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{line-height:28px;padding:8px 1rem;display:flex;justify-content:space-between}.catalog[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]{list-style:none;padding:0}.catalog[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .chapter-bar[_ngcontent-%COMP%]{font-size:13px;line-height:28px;padding:8px 1rem 0;color:#969ba3;background-color:#f6f7f9}.catalog[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .chapter-li[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;font:500 14px/20px a;display:block;overflow:hidden;padding:12px 0;margin:0 1rem;color:inherit;border-bottom:1px solid #f0f1f2}.catalog[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .chapter-li[_ngcontent-%COMP%]:last-child{border-bottom:0}"]],data:{}});function P(n){return e.mb(0,[(n()(),e.Sa(0,0,null,null,1,"li",[["class","chapter-li"]],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.readChapter(n.context.$implicit.id)&&e),e},null,null)),(n()(),e.kb(1,null,[" "," "]))],null,function(n,t){n(t,1,0,t.context.$implicit.chapter)})}function k(n){return e.mb(0,[(n()(),e.Sa(0,0,null,null,10,"div",[["class","catalog"]],null,null,null,null,null)),(n()(),e.Sa(1,0,null,null,4,"div",[["class","header"]],null,null,null,null,null)),(n()(),e.Sa(2,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e.kb(3,null,["\u5171","\u7ae0"])),(n()(),e.Sa(4,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e.kb(-1,null,["\u5012\u5e8f"])),(n()(),e.Sa(6,0,null,null,4,"ol",[["class","contents"]],null,null,null,null,null)),(n()(),e.Sa(7,0,null,null,1,"li",[["class","chapter-bar"]],null,null,null,null,null)),(n()(),e.kb(-1,null,["\u6b63\u6587\u5377"])),(n()(),e.Ja(16777216,null,null,1,null,P)),e.Ra(10,278528,null,0,M.l,[e.Q,e.M,e.r],{ngForOf:[0,"ngForOf"]},null)],function(n,t){n(t,10,0,t.component.bookCatalog)},function(n,t){n(t,3,0,t.component.bookCatalog.length)})}var _=e.Oa("app-catalog",u,function(n){return e.mb(0,[(n()(),e.Sa(0,0,null,null,1,"app-catalog",[],null,null,null,k,O)),e.Ra(1,114688,null,0,u,[f.a,f.o,o.a],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),S=l("gIcY"),y=e.Qa({encapsulation:0,styles:[[".chapter[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]{position:fixed;top:0;right:0;left:0;height:44px;background:#c4b395;color:rgba(0,0,0,.4)}.chapter[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.75rem;font-weight:400;position:absolute;top:15px;left:1rem}.chapter[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.chapter[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{padding-top:2.75rem;font-size:1rem;line-height:1.8;min-height:calc(100vh - 44px);margin:0 16px;text-align:justify;overflow:visible;height:100%;-webkit-columns:calc(100vw - 32px) 1;columns:calc(100vw - 32px) 1;-webkit-column-gap:16px;column-gap:16px;word-break:break-all;padding-bottom:3rem}.chapter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:100%;text-align:center;padding-bottom:1rem;margin-top:.5rem}.chapter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:90%;color:#fff;background-color:#ed424b;border-color:#ed424b;border-radius:5px}.chapter[_ngcontent-%COMP%]   .page-config[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.chapter[_ngcontent-%COMP%]   .page-config[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{transition:opacity .15s,transform .15s,visibility .15s,-webkit-transform .15s;color:#fff;border-bottom:0;background-color:rgba(0,0,0,.9);position:relative;box-sizing:border-box;height:2.75rem;padding-top:.6875rem;padding-bottom:.625rem}.chapter[_ngcontent-%COMP%]   .page-config[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-back[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;padding:.625rem .8125rem .625rem .875rem}.chapter[_ngcontent-%COMP%]   .page-config[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-back[_ngcontent-%COMP%]   .anticon-left[_ngcontent-%COMP%]{font-size:18px;color:#fff}.chapter[_ngcontent-%COMP%]   .page-config[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:absolute;left:3rem;color:#b3a2a2;width:80%;height:1.5rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.chapter[_ngcontent-%COMP%]   .page-config[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{position:absolute;right:0;bottom:0;left:0;height:3rem;text-align:center;transition:opacity .15s,transform .15s,visibility .15s,-webkit-transform .15s;color:#fff;border-bottom:0;background-color:rgba(0,0,0,.9)}.chapter[_ngcontent-%COMP%]   .page-config[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]{display:table;width:100%;margin-right:auto;margin-left:auto;table-layout:fixed}.chapter[_ngcontent-%COMP%]   .page-config[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:16px;padding-top:.375rem;font-weight:400;display:table-cell;text-decoration:none;color:#fff;outline:0}.chapter[_ngcontent-%COMP%]   .page-config[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .novel[_ngcontent-%COMP%]{font-weight:600}.chapter[_ngcontent-%COMP%]   .page-config[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:10px;font-weight:200;line-height:1;position:relative;color:#fff}.chapter[_ngcontent-%COMP%]   .page-config[_ngcontent-%COMP%]   .page-option[_ngcontent-%COMP%]{position:absolute;right:0;bottom:3rem;left:0;-webkit-transform:translateY(.5px);transform:translateY(.5px);opacity:0;background-clip:padding-box;visibility:visible;transition:none;opacity:1;transition:opacity .15s,transform .15s,visibility .15s,-webkit-transform .15s;color:#fff;border-bottom:0;background-color:rgba(0,0,0,.9)}.chapter[_ngcontent-%COMP%]   .page-config[_ngcontent-%COMP%]   .page-option[_ngcontent-%COMP%]   .read-set-font[_ngcontent-%COMP%]{display:flex;width:100%;flex-direction:row;justify-content:space-between;padding-top:.5rem;align-items:center}.chapter[_ngcontent-%COMP%]   .page-config[_ngcontent-%COMP%]   .page-option[_ngcontent-%COMP%]   .read-set-font[_ngcontent-%COMP%]   .next-chapter[_ngcontent-%COMP%], .chapter[_ngcontent-%COMP%]   .page-config[_ngcontent-%COMP%]   .page-option[_ngcontent-%COMP%]   .read-set-font[_ngcontent-%COMP%]   .prev-chapter[_ngcontent-%COMP%]{width:5rem}.chapter[_ngcontent-%COMP%]   .page-config[_ngcontent-%COMP%]   .page-option[_ngcontent-%COMP%]   .read-set-font[_ngcontent-%COMP%]   .next-chapter[_ngcontent-%COMP%]:active, .chapter[_ngcontent-%COMP%]   .page-config[_ngcontent-%COMP%]   .page-option[_ngcontent-%COMP%]   .read-set-font[_ngcontent-%COMP%]   .next-chapter[_ngcontent-%COMP%]:hover, .chapter[_ngcontent-%COMP%]   .page-config[_ngcontent-%COMP%]   .page-option[_ngcontent-%COMP%]   .read-set-font[_ngcontent-%COMP%]   .next-chapter[_ngcontent-%COMP%]:visited, .chapter[_ngcontent-%COMP%]   .page-config[_ngcontent-%COMP%]   .page-option[_ngcontent-%COMP%]   .read-set-font[_ngcontent-%COMP%]   .prev-chapter[_ngcontent-%COMP%]:active, .chapter[_ngcontent-%COMP%]   .page-config[_ngcontent-%COMP%]   .page-option[_ngcontent-%COMP%]   .read-set-font[_ngcontent-%COMP%]   .prev-chapter[_ngcontent-%COMP%]:hover, .chapter[_ngcontent-%COMP%]   .page-config[_ngcontent-%COMP%]   .page-option[_ngcontent-%COMP%]   .read-set-font[_ngcontent-%COMP%]   .prev-chapter[_ngcontent-%COMP%]:visited{color:#fff}.chapter[_ngcontent-%COMP%]   .page-config[_ngcontent-%COMP%]   .page-option[_ngcontent-%COMP%]   nz-slider[_ngcontent-%COMP%]{width:100%}"]],data:{}});function x(n){return e.mb(0,[(n()(),e.Sa(0,0,null,null,8,"div",[["class","read-set-font"]],null,null,null,null,null)),(n()(),e.Sa(1,0,null,null,0,"i",[["class","novel novel-font-down"]],null,null,null,null,null)),(n()(),e.Sa(2,0,null,null,5,"nz-slider",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,t,l){var e=!0,o=n.component;return"ngModelChange"===t&&(e=!1!==(o.fontSize=l)&&e),"ngModelChange"===t&&(e=!1!==o.changeFontSize(l)&&e),e},d.g,d.c)),e.Ra(3,770048,null,0,b.Wa,[b.Xa],{nzMin:[0,"nzMin"],nzMax:[1,"nzMax"]},null),e.hb(1024,null,S.f,function(n){return[n]},[b.Wa]),e.Ra(5,671744,null,0,S.i,[[8,null],[8,null],[8,null],[6,S.f]],{model:[0,"model"]},{update:"ngModelChange"}),e.hb(2048,null,S.g,null,[S.i]),e.Ra(7,16384,null,0,S.h,[[4,S.g]],null,null),(n()(),e.Sa(8,0,null,null,0,"i",[["class","novel novel-font-up"]],null,null,null,null,null))],function(n,t){var l=t.component;n(t,3,0,12,30),n(t,5,0,l.fontSize)},function(n,t){n(t,2,0,e.cb(t,7).ngClassUntouched,e.cb(t,7).ngClassTouched,e.cb(t,7).ngClassPristine,e.cb(t,7).ngClassDirty,e.cb(t,7).ngClassValid,e.cb(t,7).ngClassInvalid,e.cb(t,7).ngClassPending)})}function z(n){return e.mb(0,[(n()(),e.Sa(0,0,null,null,10,"div",[["class","read-set-font"]],null,null,null,null,null)),(n()(),e.Sa(1,0,null,null,1,"a",[["class","prev-chapter"],["href","javascript:"]],null,[[null,"click"]],function(n,t,l){var e=!0,o=n.component;return"click"===t&&(e=!1!==o.getChapter(o.chapter.bookId,o.chapter.prev)&&e),e},null,null)),(n()(),e.kb(-1,null,["\u4e0a\u4e00\u7ae0"])),(n()(),e.Sa(3,0,null,null,5,"nz-slider",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"nzOnAfterChange"]],function(n,t,l){var e=!0,o=n.component;return"ngModelChange"===t&&(e=!1!==o.changeTip(l)&&e),"nzOnAfterChange"===t&&(e=!1!==o.changeProgress(l)&&e),e},d.g,d.c)),e.Ra(4,770048,null,0,b.Wa,[b.Xa],{nzMin:[0,"nzMin"],nzMax:[1,"nzMax"],nzTipFormatter:[2,"nzTipFormatter"]},{nzOnAfterChange:"nzOnAfterChange"}),e.hb(1024,null,S.f,function(n){return[n]},[b.Wa]),e.Ra(6,671744,null,0,S.i,[[8,null],[8,null],[8,null],[6,S.f]],{model:[0,"model"]},{update:"ngModelChange"}),e.hb(2048,null,S.g,null,[S.i]),e.Ra(8,16384,null,0,S.h,[[4,S.g]],null,null),(n()(),e.Sa(9,0,null,null,1,"a",[["class","next-chapter"],["href","javascript:"]],null,[[null,"click"]],function(n,t,l){var e=!0,o=n.component;return"click"===t&&(e=!1!==o.getChapter(o.chapter.bookId,o.chapter.next)&&e),e},null,null)),(n()(),e.kb(-1,null,["\u4e0b\u4e00\u7ae0"]))],function(n,t){var l=t.component;n(t,4,0,1,l.catalog.length,l.tipFormatter),n(t,6,0,l.currentChapter)},function(n,t){n(t,3,0,e.cb(t,8).ngClassUntouched,e.cb(t,8).ngClassTouched,e.cb(t,8).ngClassPristine,e.cb(t,8).ngClassDirty,e.cb(t,8).ngClassValid,e.cb(t,8).ngClassInvalid,e.cb(t,8).ngClassPending)})}function w(n){return e.mb(0,[(n()(),e.Sa(0,0,null,null,0,"i",[["class","novel novel-night"]],null,null,null,null,null))],null,null)}function I(n){return e.mb(0,[(n()(),e.Sa(0,0,null,null,0,"i",[["class","novel novel-day"]],null,null,null,null,null))],null,null)}function T(n){return e.mb(0,[(n()(),e.Sa(0,0,null,null,1,"h4",[["class","read-opt-footer-h"]],null,null,null,null,null)),(n()(),e.kb(-1,null,["\u591c\u95f4"]))],null,null)}function j(n){return e.mb(0,[(n()(),e.Sa(0,0,null,null,1,"h4",[["class","read-opt-footer-h"]],null,null,null,null,null)),(n()(),e.kb(-1,null,["\u65e5\u95f4"]))],null,null)}function D(n){return e.mb(0,[(n()(),e.Sa(0,0,null,null,33,"div",[["class","page-config"]],null,null,null,null,null)),(n()(),e.Sa(1,0,null,null,4,"header",[["class","header"]],null,null,null,null,null)),(n()(),e.Sa(2,0,null,null,1,"a",[["class","header-back"],["href","javascript:"]],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.goBack()&&e),e},null,null)),(n()(),e.Sa(3,0,null,null,0,"i",[["class","anticon anticon-left"]],null,null,null,null,null)),(n()(),e.Sa(4,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.kb(5,null,["",""])),(n()(),e.Sa(6,0,null,null,4,"div",[["class","page-option"]],null,null,null,null,null)),(n()(),e.Ja(16777216,null,null,1,null,x)),e.Ra(8,16384,null,0,M.m,[e.Q,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.Ja(16777216,null,null,1,null,z)),e.Ra(10,16384,null,0,M.m,[e.Q,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.Sa(11,0,null,null,22,"footer",[["class","footer"]],null,null,null,null,null)),(n()(),e.Sa(12,0,null,null,21,"div",[["class","btn-group"]],null,null,null,null,null)),(n()(),e.Sa(13,0,null,null,3,"a",[["href","javascript:"]],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.goCatalog()&&e),e},null,null)),(n()(),e.Sa(14,0,null,null,0,"i",[["class","novel novel-catalog"]],null,null,null,null,null)),(n()(),e.Sa(15,0,null,null,1,"h4",[["class","read-opt-footer-h"]],null,null,null,null,null)),(n()(),e.kb(-1,null,["\u76ee\u5f55"])),(n()(),e.Sa(17,0,null,null,3,"a",[["href","javascript:"]],null,null,null,null,null)),(n()(),e.Sa(18,0,null,null,0,"i",[["class","novel novel-progress"]],null,[[null,"click"]],function(n,t,l){var e=!0,o=n.component;return"click"===t&&(o.progressSet=!o.progressSet,e=0!=(o.pageSetting=!1)&&e),e},null,null)),(n()(),e.Sa(19,0,null,null,1,"h4",[["class","read-opt-footer-h"]],null,null,null,null,null)),(n()(),e.kb(-1,null,["\u8fdb\u5ea6"])),(n()(),e.Sa(21,0,null,null,3,"a",[["href","javascript:"]],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.pageSet(l)&&e),e},null,null)),(n()(),e.Sa(22,0,null,null,0,"i",[["class","novel novel-font"]],null,null,null,null,null)),(n()(),e.Sa(23,0,null,null,1,"h4",[["class","read-opt-footer-h"]],null,null,null,null,null)),(n()(),e.kb(-1,null,["\u8bbe\u7f6e"])),(n()(),e.Sa(25,0,null,null,8,"a",[["href","javascript:"]],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.dayNight()&&e),e},null,null)),(n()(),e.Ja(16777216,null,null,1,null,w)),e.Ra(27,16384,null,0,M.m,[e.Q,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.Ja(16777216,null,null,1,null,I)),e.Ra(29,16384,null,0,M.m,[e.Q,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.Ja(16777216,null,null,1,null,T)),e.Ra(31,16384,null,0,M.m,[e.Q,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.Ja(16777216,null,null,1,null,j)),e.Ra(33,16384,null,0,M.m,[e.Q,e.M],{ngIf:[0,"ngIf"]},null)],function(n,t){var l=t.component;n(t,8,0,l.pageSetting),n(t,10,0,l.progressSet),n(t,27,0,!l.day),n(t,29,0,l.day),n(t,31,0,!l.day),n(t,33,0,l.day)},function(n,t){n(t,5,0,t.component.chapter.title)})}function R(n){return e.mb(0,[(n()(),e.Sa(0,0,null,null,9,"div",[["class","chapter"]],null,null,null,null,null)),(n()(),e.Sa(1,0,null,null,2,"div",[["class","page-header"]],null,null,null,null,null)),(n()(),e.Sa(2,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.kb(3,null,["",""])),(n()(),e.Sa(4,0,null,null,3,"div",[["class","content"]],null,null,null,null,null)),(n()(),e.Sa(5,0,null,null,2,"article",[["class","inner"]],[[8,"innerHTML",1]],null,null,null,null)),e.Ra(6,278528,null,0,M.p,[e.s,e.k,e.D],{ngStyle:[0,"ngStyle"]},null),e.fb(7,{"font-size":0}),(n()(),e.Ja(16777216,null,null,1,null,D)),e.Ra(9,16384,null,0,M.m,[e.Q,e.M],{ngIf:[0,"ngIf"]},null)],function(n,t){var l=t.component;n(t,6,0,n(t,7,0,l.fontSize+"px")),n(t,9,0,l.pageConfig)},function(n,t){var l=t.component;n(t,3,0,l.chapter.title),n(t,5,0,l.chapter.content)})}var q=e.Oa("app-chapter",s,function(n){return e.mb(0,[(n()(),e.Sa(0,0,null,null,1,"app-chapter",[],null,null,null,R,y)),e.Ra(1,245760,null,0,s,[f.a,f.o,o.a,e.k,g.a,M.i],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),H=l("M2Lx"),A=l("eDkP"),W=l("Fzqc"),E=function(){},F=l("dWZg"),N=l("4c35"),X=l("qAlS"),B=l("PCNd");l.d(t,"BookModuleNgFactory",function(){return Y});var Y=e.Pa(p,[],function(n){return e.Za([e.ab(512,e.j,e.Da,[[8,[h.a,v,_,q,d.i,d.j,d.k,d.l,d.m,d.n,d.o,d.p]],[3,e.j],e.w]),e.ab(4608,M.o,M.n,[e.t,[2,M.B]]),e.ab(4608,S.m,S.m,[]),e.ab(4608,S.c,S.c,[]),e.ab(4608,H.c,H.c,[]),e.ab(5120,b.Nd,b.Pd,[[3,b.Nd],b.Od]),e.ab(4608,M.e,M.e,[e.t]),e.ab(5120,b.Yc,b.rd,[[3,b.Yc],b.Md,b.Nd,M.e]),e.ab(4608,A.d,A.d,[A.k,A.f,e.j,A.i,A.g,e.q,e.y,M.d,W.b]),e.ab(5120,A.l,A.m,[A.d]),e.ab(5120,b.P,b.Q,[M.d,[3,b.P]]),e.ab(4608,b.Da,b.Da,[]),e.ab(4608,b.Xa,b.Xa,[]),e.ab(4608,b.Fc,b.Fc,[A.d]),e.ab(4608,b.id,b.id,[A.d,e.q,e.j,e.g]),e.ab(4608,b.od,b.od,[A.d,e.q,e.j,e.g]),e.ab(4608,b.xd,b.xd,[[3,b.xd]]),e.ab(4608,b.zd,b.zd,[A.d,b.Nd,b.xd]),e.ab(1073742336,f.q,f.q,[[2,f.w],[2,f.o]]),e.ab(1073742336,E,E,[]),e.ab(1073742336,M.c,M.c,[]),e.ab(1073742336,S.l,S.l,[]),e.ab(1073742336,S.e,S.e,[]),e.ab(1073742336,S.k,S.k,[]),e.ab(1073742336,H.d,H.d,[]),e.ab(1073742336,F.b,F.b,[]),e.ab(1073742336,b.db,b.db,[]),e.ab(1073742336,b.g,b.g,[]),e.ab(1073742336,b.Sd,b.Sd,[]),e.ab(1073742336,b.Rd,b.Rd,[]),e.ab(1073742336,b.Ud,b.Ud,[]),e.ab(1073742336,W.a,W.a,[]),e.ab(1073742336,N.e,N.e,[]),e.ab(1073742336,X.a,X.a,[]),e.ab(1073742336,A.h,A.h,[]),e.ab(1073742336,b.l,b.l,[]),e.ab(1073742336,b.ac,b.ac,[]),e.ab(1073742336,b.v,b.v,[]),e.ab(1073742336,b.A,b.A,[]),e.ab(1073742336,b.C,b.C,[]),e.ab(1073742336,b.L,b.L,[]),e.ab(1073742336,b.S,b.S,[]),e.ab(1073742336,b.N,b.N,[]),e.ab(1073742336,b.U,b.U,[]),e.ab(1073742336,b.W,b.W,[]),e.ab(1073742336,b.Ea,b.Ea,[]),e.ab(1073742336,b.Ha,b.Ha,[]),e.ab(1073742336,b.Ja,b.Ja,[]),e.ab(1073742336,b.Ma,b.Ma,[]),e.ab(1073742336,b.Pa,b.Pa,[]),e.ab(1073742336,b.Ta,b.Ta,[]),e.ab(1073742336,b.cb,b.cb,[]),e.ab(1073742336,b.Va,b.Va,[]),e.ab(1073742336,b.gb,b.gb,[]),e.ab(1073742336,b.ib,b.ib,[]),e.ab(1073742336,b.kb,b.kb,[]),e.ab(1073742336,b.mb,b.mb,[]),e.ab(1073742336,b.ob,b.ob,[]),e.ab(1073742336,b.qb,b.qb,[]),e.ab(1073742336,b.xb,b.xb,[]),e.ab(1073742336,b.Db,b.Db,[]),e.ab(1073742336,b.Fb,b.Fb,[]),e.ab(1073742336,b.Ib,b.Ib,[]),e.ab(1073742336,b.Mb,b.Mb,[]),e.ab(1073742336,b.Ob,b.Ob,[]),e.ab(1073742336,b.Rb,b.Rb,[]),e.ab(1073742336,b.Zb,b.Zb,[]),e.ab(1073742336,b.Yb,b.Yb,[]),e.ab(1073742336,b.Xb,b.Xb,[]),e.ab(1073742336,b.Ac,b.Ac,[]),e.ab(1073742336,b.Cc,b.Cc,[]),e.ab(1073742336,b.Gc,b.Gc,[]),e.ab(1073742336,b.Oc,b.Oc,[]),e.ab(1073742336,b.Sc,b.Sc,[]),e.ab(1073742336,b.Wc,b.Wc,[]),e.ab(1073742336,b.bd,b.bd,[]),e.ab(1073742336,b.dd,b.dd,[]),e.ab(1073742336,b.jd,b.jd,[]),e.ab(1073742336,b.pd,b.pd,[]),e.ab(1073742336,b.sd,b.sd,[]),e.ab(1073742336,b.ud,b.ud,[]),e.ab(1073742336,b.Ad,b.Ad,[]),e.ab(1073742336,b.Cd,b.Cd,[]),e.ab(1073742336,b.Ed,b.Ed,[]),e.ab(1073742336,b.Id,b.Id,[]),e.ab(1073742336,b.Kd,b.Kd,[]),e.ab(1073742336,b.b,b.b,[]),e.ab(1073742336,B.a,B.a,[]),e.ab(1073742336,p,p,[]),e.ab(1024,f.l,function(){return[[{path:"",redirectTo:"search",pathMatch:"full"},{path:":id",children:[{path:"",component:i},{path:"catalog",component:u},{path:":chapterId",component:s}]}]]},[]),e.ab(256,b.Od,!1,[]),e.ab(256,b.Md,void 0,[]),e.ab(256,b.fd,{nzDuration:3e3,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),e.ab(256,b.md,{nzTop:"24px",nzBottom:"24px",nzPlacement:"topRight",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[]),e.ab(256,b.a,B.b,[])])})}}]);