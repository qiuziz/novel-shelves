(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"l/s9":function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=t("gHic"),a=t("T7LR"),i=function(){function n(n,l,t,e,o,i,u,c){this.route=n,this.router=l,this.httpService=t,this.el=e,this.message=o,this.drawerService=i,this.swUpdate=u,this.location=c,this.visible=!0,this.bookOptions={display:"flex","list-style":"none","align-items":"center","justify-content":"space-around",margin:0,padding:0},a.a.setItem("headerTitle","\u4e66\u67b6")}return Object.defineProperty(n.prototype,"shelves",{get:function(){return a.a.getItem("shelves")||[]},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){this.getShelvesBook()},n.prototype.getShelvesBook=function(){this.httpService.get("getShelvesBook").subscribe(function(n){a.a.setItem("shelves",n)})},n.prototype.showDetail=function(n,l){n.stopPropagation(),this.drawerService.create({nzClosable:!1,nzContent:u,nzPlacement:"bottom",nzHeight:200,nzZIndex:90,nzContentParams:{book:l}})},n.prototype.close=function(){this.visible=!1},n.prototype.reading=function(n){var l=this;if(n){var t=a.a.getItem("chapter"+n.id);t?this.router.navigate(["/book/"+n.id+"/"+t.id]):n.catalog&&n.catalog.length>0?this.router.navigate(["/book/"+n.id+"/"+n.catalog[0].id]):this.httpService.get("getBookCatalog",{id:n.id}).subscribe(function(t){t[0]&&t[0].id?l.router.navigate(["/book/"+n.id+"/"+t[0].id]):l.message.error("\u6682\u65e0\u5185\u5bb9")})}},n.prototype.ngOnDestroy=function(){},n}(),u=function(){function n(n,l,t,e){this.drawerRef=n,this.message=l,this.httpService=t,this.router=e}return n.prototype.close=function(){this.drawerRef.close()},n.prototype.goBook=function(n){this.close(),this.router.navigate(["/book/"+n.id])},n.prototype.goBookCatalog=function(n){this.close(),this.router.navigate(["/book/"+n.id+"/catalog"])},n.prototype.delete=function(n){var l=this;this.httpService.get("shelvesOptions",{type:"delete",bookId:n.id}).subscribe(function(n){n.status?l.message.error(n.msg):(l.close(),l.httpService.get("getShelvesBook").subscribe(function(n){a.a.setItem("shelves",n)}))})},n.prototype.download=function(n){var l=this;this.httpService.get("download",{id:n.id}).subscribe(function(n){n.status?l.message.error(n.msg):l.close()})},n}(),c=function(){},s=t("pMnS"),b=[".list[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:left;border-bottom:1px solid #f0f1f2;width:90%;margin:0 auto;padding:10px}.list[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]{width:3.375rem;height:4.5rem}.list[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.list[_ngcontent-%COMP%]:first-child{margin-top:10px}.list[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{flex:0 0 40px;height:50px;display:flex;align-items:center;background:#68aac2;justify-content:center;margin-right:10px;border-radius:8px}.list[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{text-align:left;width:calc(90% - 4.375rem);margin-left:1rem;position:relative}.list[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:16px;font-weight:700;line-height:1.4;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.list[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .list[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .last-update[_ngcontent-%COMP%]{font-size:.8rem}.list[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .last-update[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.list[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .novel-config[_ngcontent-%COMP%]{position:absolute;right:-2rem;top:0;width:50px;text-align:center;height:30px}.book-options[_ngcontent-%COMP%]{display:flex;list-style:none;align-items:center;justify-content:space-around;margin:1rem 0 0;padding:0}.book-options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.book-options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .novel-catalog[_ngcontent-%COMP%]{font-weight:700}.book-options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:300}.book-detail[_ngcontent-%COMP%]{background:#f2f7fa;display:flex;align-items:center;justify-content:left;height:5rem;z-index:90}.book-detail[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]{width:2.375rem;height:3rem;margin:0 .5rem 0 1rem}.book-detail[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.book-detail[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:16px;font-weight:700;line-height:1.4;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.book-detail[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{font-size:12px;color:#8c949f}.book-detail[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{position:absolute;right:1rem;height:25px;font-size:12px;border-color:#e85c7b;color:#e85c7b}.empty[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#c5b6b6;font-size:1rem}"],r=t("Ip0R"),d=t("ZYCi"),g=t("6Cds"),p=t("AtLt"),h=t("ebDo"),f=e.Qa({encapsulation:0,styles:[b],data:{}});function m(n){return e.mb(0,[(n()(),e.Sa(0,0,null,null,10,"div",[["class","list"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.reading(n.context.$implicit)&&e),e},null,null)),(n()(),e.Sa(1,0,null,null,1,"div",[["class","cover"]],null,null,null,null,null)),(n()(),e.Sa(2,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(n()(),e.Sa(3,0,null,null,7,"div",[["class","detail"]],null,null,null,null,null)),(n()(),e.Sa(4,0,null,null,1,"div",[["class","name"]],null,null,null,null,null)),(n()(),e.kb(5,null,["",""])),(n()(),e.Sa(6,0,null,null,0,"i",[["class","novel novel-config"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.showDetail(t,n.context.$implicit)&&e),e},null,null)),(n()(),e.Sa(7,0,null,null,1,"div",[["class","info"]],null,null,null,null,null)),(n()(),e.kb(8,null,[""," | "," | ",""])),(n()(),e.Sa(9,0,null,null,1,"div",[["class","last-update"]],null,null,null,null,null)),(n()(),e.kb(10,null,["\u6700\u65b0\uff1a",""]))],null,function(n,l){n(l,2,0,l.context.$implicit.cover||"",l.context.$implicit.name),n(l,5,0,l.context.$implicit.name),n(l,8,0,l.context.$implicit.category,l.context.$implicit.author,l.context.$implicit.state),n(l,10,0,l.context.$implicit.lastChapter)})}function v(n){return e.mb(0,[(n()(),e.Sa(0,0,null,null,1,"div",[["class","empty"]],null,null,null,null,null)),(n()(),e.kb(-1,null,[" \u4e66\u67b6\u6682\u65e0\u4e66\u7c4d\n"]))],null,null)}function k(n){return e.mb(0,[e.ib(402653184,1,{drawerTitle:0}),e.ib(402653184,2,{drawerBody:0}),(n()(),e.Sa(2,0,null,null,2,"div",[["class","app-shelves"]],null,null,null,null,null)),(n()(),e.Ja(16777216,null,null,1,null,m)),e.Ra(4,278528,null,0,r.l,[e.Q,e.M,e.r],{ngForOf:[0,"ngForOf"]},null),(n()(),e.Ja(16777216,null,null,1,null,v)),e.Ra(6,16384,null,0,r.m,[e.Q,e.M],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,4,0,t.shelves),n(l,6,0,t.shelves.length<=0)},null)}var C=e.Oa("app-shelves",i,function(n){return e.mb(0,[(n()(),e.Sa(0,0,null,null,1,"app-shelves",[],null,null,null,k,f)),e.Ra(1,245760,null,0,i,[d.a,d.o,o.a,e.k,g.e,g.d,p.c,r.i],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),O=e.Qa({encapsulation:0,styles:[b],data:{}});function P(n){return e.mb(0,[(n()(),e.Sa(0,0,null,null,11,"div",[["class","book-detail"]],null,null,null,null,null)),(n()(),e.Sa(1,0,null,null,1,"div",[["class","cover"]],null,null,null,null,null)),(n()(),e.Sa(2,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(n()(),e.Sa(3,0,null,null,4,"div",[["class","detail"]],null,null,null,null,null)),(n()(),e.Sa(4,0,null,null,1,"div",[["class","name"]],null,null,null,null,null)),(n()(),e.kb(5,null,["",""])),(n()(),e.Sa(6,0,null,null,1,"div",[["class","info"]],null,null,null,null,null)),(n()(),e.kb(7,null,["",""])),(n()(),e.Sa(8,0,null,null,3,"button",[["class","btn"],["nz-button",""]],[[1,"nz-wave",0]],[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==o.goBook(o.book)&&e),e},h.e,h.a)),e.hb(512,null,g.H,g.H,[e.D]),e.Ra(10,1294336,null,0,g.h,[e.k,e.h,e.D,g.H,e.y],null,null),(n()(),e.kb(-1,0,["\u8be6\u60c5"])),(n()(),e.Sa(12,0,null,null,12,"ul",[["class","book-options"]],null,null,null,null,null)),(n()(),e.Sa(13,0,null,null,3,"li",[],null,[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==o.goBookCatalog(o.book)&&e),e},null,null)),(n()(),e.Sa(14,0,null,null,0,"i",[["class","novel novel-catalog"]],null,null,null,null,null)),(n()(),e.Sa(15,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.kb(-1,null,["\u76ee\u5f55"])),(n()(),e.Sa(17,0,null,null,3,"li",[],null,[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==o.download(o.book)&&e),e},null,null)),(n()(),e.Sa(18,0,null,null,0,"i",[["class","novel novel-download"]],null,null,null,null,null)),(n()(),e.Sa(19,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.kb(-1,null,["\u7f13\u5b58"])),(n()(),e.Sa(21,0,null,null,3,"li",[],null,[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==o.delete(o.book)&&e),e},null,null)),(n()(),e.Sa(22,0,null,null,0,"i",[["class","novel novel-delete"]],null,null,null,null,null)),(n()(),e.Sa(23,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.kb(-1,null,["\u5220\u9664"]))],function(n,l){n(l,10,0)},function(n,l){var t=l.component;n(l,2,0,t.book.cover||"",t.book.name),n(l,5,0,t.book.name),n(l,7,0,t.book.author),n(l,8,0,e.cb(l,10).nzWave)})}var M=e.Oa("app-drawer-body",u,function(n){return e.mb(0,[(n()(),e.Sa(0,0,null,null,1,"app-drawer-body",[],null,null,null,P,O)),e.Ra(1,49152,null,0,u,[g.c,g.e,o.a,d.o],null,null)],null,null)},{book:"book"},{},[]),S=t("gIcY"),x=t("M2Lx"),_=t("eDkP"),w=t("Fzqc"),y=function(){},z=t("dWZg"),j=t("4c35"),I=t("qAlS"),D=t("PCNd");t.d(l,"ShelvesModuleNgFactory",function(){return R});var R=e.Pa(c,[],function(n){return e.Za([e.ab(512,e.j,e.Da,[[8,[s.a,C,h.i,h.j,h.k,h.l,h.m,h.n,h.o,h.p,M]],[3,e.j],e.w]),e.ab(4608,r.o,r.n,[e.t,[2,r.B]]),e.ab(4608,S.m,S.m,[]),e.ab(4608,S.c,S.c,[]),e.ab(4608,x.c,x.c,[]),e.ab(5120,g.Nd,g.Pd,[[3,g.Nd],g.Od]),e.ab(4608,r.e,r.e,[e.t]),e.ab(5120,g.Yc,g.rd,[[3,g.Yc],g.Md,g.Nd,r.e]),e.ab(4608,_.d,_.d,[_.k,_.f,e.j,_.i,_.g,e.q,e.y,r.d,w.b]),e.ab(5120,_.l,_.m,[_.d]),e.ab(5120,g.P,g.Q,[r.d,[3,g.P]]),e.ab(4608,g.Da,g.Da,[]),e.ab(4608,g.Xa,g.Xa,[]),e.ab(4608,g.Fc,g.Fc,[_.d]),e.ab(4608,g.id,g.id,[_.d,e.q,e.j,e.g]),e.ab(4608,g.od,g.od,[_.d,e.q,e.j,e.g]),e.ab(4608,g.xd,g.xd,[[3,g.xd]]),e.ab(4608,g.zd,g.zd,[_.d,g.Nd,g.xd]),e.ab(1073742336,d.q,d.q,[[2,d.w],[2,d.o]]),e.ab(1073742336,y,y,[]),e.ab(1073742336,r.c,r.c,[]),e.ab(1073742336,S.l,S.l,[]),e.ab(1073742336,S.e,S.e,[]),e.ab(1073742336,S.k,S.k,[]),e.ab(1073742336,x.d,x.d,[]),e.ab(1073742336,z.b,z.b,[]),e.ab(1073742336,g.db,g.db,[]),e.ab(1073742336,g.g,g.g,[]),e.ab(1073742336,g.Sd,g.Sd,[]),e.ab(1073742336,g.Rd,g.Rd,[]),e.ab(1073742336,g.Ud,g.Ud,[]),e.ab(1073742336,w.a,w.a,[]),e.ab(1073742336,j.e,j.e,[]),e.ab(1073742336,I.a,I.a,[]),e.ab(1073742336,_.h,_.h,[]),e.ab(1073742336,g.l,g.l,[]),e.ab(1073742336,g.ac,g.ac,[]),e.ab(1073742336,g.v,g.v,[]),e.ab(1073742336,g.A,g.A,[]),e.ab(1073742336,g.C,g.C,[]),e.ab(1073742336,g.L,g.L,[]),e.ab(1073742336,g.S,g.S,[]),e.ab(1073742336,g.N,g.N,[]),e.ab(1073742336,g.U,g.U,[]),e.ab(1073742336,g.W,g.W,[]),e.ab(1073742336,g.Ea,g.Ea,[]),e.ab(1073742336,g.Ha,g.Ha,[]),e.ab(1073742336,g.Ja,g.Ja,[]),e.ab(1073742336,g.Ma,g.Ma,[]),e.ab(1073742336,g.Pa,g.Pa,[]),e.ab(1073742336,g.Ta,g.Ta,[]),e.ab(1073742336,g.cb,g.cb,[]),e.ab(1073742336,g.Va,g.Va,[]),e.ab(1073742336,g.gb,g.gb,[]),e.ab(1073742336,g.ib,g.ib,[]),e.ab(1073742336,g.kb,g.kb,[]),e.ab(1073742336,g.mb,g.mb,[]),e.ab(1073742336,g.ob,g.ob,[]),e.ab(1073742336,g.qb,g.qb,[]),e.ab(1073742336,g.xb,g.xb,[]),e.ab(1073742336,g.Db,g.Db,[]),e.ab(1073742336,g.Fb,g.Fb,[]),e.ab(1073742336,g.Ib,g.Ib,[]),e.ab(1073742336,g.Mb,g.Mb,[]),e.ab(1073742336,g.Ob,g.Ob,[]),e.ab(1073742336,g.Rb,g.Rb,[]),e.ab(1073742336,g.Zb,g.Zb,[]),e.ab(1073742336,g.Yb,g.Yb,[]),e.ab(1073742336,g.Xb,g.Xb,[]),e.ab(1073742336,g.Ac,g.Ac,[]),e.ab(1073742336,g.Cc,g.Cc,[]),e.ab(1073742336,g.Gc,g.Gc,[]),e.ab(1073742336,g.Oc,g.Oc,[]),e.ab(1073742336,g.Sc,g.Sc,[]),e.ab(1073742336,g.Wc,g.Wc,[]),e.ab(1073742336,g.bd,g.bd,[]),e.ab(1073742336,g.dd,g.dd,[]),e.ab(1073742336,g.jd,g.jd,[]),e.ab(1073742336,g.pd,g.pd,[]),e.ab(1073742336,g.sd,g.sd,[]),e.ab(1073742336,g.ud,g.ud,[]),e.ab(1073742336,g.Ad,g.Ad,[]),e.ab(1073742336,g.Cd,g.Cd,[]),e.ab(1073742336,g.Ed,g.Ed,[]),e.ab(1073742336,g.Id,g.Id,[]),e.ab(1073742336,g.Kd,g.Kd,[]),e.ab(1073742336,g.b,g.b,[]),e.ab(1073742336,D.a,D.a,[]),e.ab(1073742336,c,c,[]),e.ab(1024,d.l,function(){return[[{path:"",component:i}]]},[]),e.ab(256,g.Od,!1,[]),e.ab(256,g.Md,void 0,[]),e.ab(256,g.fd,{nzDuration:3e3,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),e.ab(256,g.md,{nzTop:"24px",nzBottom:"24px",nzPlacement:"topRight",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[]),e.ab(256,g.a,D.b,[])])})}}]);