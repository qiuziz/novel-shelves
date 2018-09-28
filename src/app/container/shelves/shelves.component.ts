import { Component, OnInit, ElementRef, OnDestroy, AfterViewChecked, HostListener, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpService } from '../../core/http/http.service';
import { LocalStorage } from '../../common/local-storage';
import { touch, move, click } from '../../common/touch';
import {Location} from '@angular/common';
import { fromEvent } from 'rxjs';
import { throttleTime, debounceTime, tap, map } from 'rxjs/operators';
import { NzMessageService, NzDrawerService, NzDrawerRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-shelves',
  templateUrl: './shelves.component.html',
  styleUrls: ['./shelves.component.less']
})
export class ShelvesComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line:max-line-length
  shelves = [
    {
        'id': 3759,
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'name': '无敌奶爸',
        'author': '步枪',
        'updateTime': '2017-08-02 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '后记中的前传-不是你的错\n                    '
    },
    {
        'id': 49562,
        'name': '美食奶爸',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'author': '踩雨',
        'updateTime': '2017-11-08 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '本书到此结束.\n                    '
    },
    {
        'id': 66463,
        'name': '智尊奶爸',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'author': '儒疯',
        'updateTime': '2018-03-03 00:00:00',
        'state': '连载',
        'category': '[武侠仙侠]',
        'lastChapter': '第六十章又遭雷劈了\n                    '
    },
    {
        'id': 70164,
        'name': '全职奶爸',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'author': '段庚',
        'updateTime': '2018-03-02 00:00:00',
        'state': '连载',
        'category': '[玄幻奇幻]',
        'lastChapter': '258 大结局\n                    '
    },
    {
        'id': 77948,
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'name': '全能奶爸',
        'author': '贼牛',
        'updateTime': '2018-09-11 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '朋友们,发新书了\n                    '
    },
    {
        'id': 3531,
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'name': '仙城奶爸',
        'author': '盘古混沌',
        'updateTime': '2017-04-29 00:00:00',
        'state': '连载',
        'category': '[武侠仙侠]',
        'lastChapter': '后记\n                    '
    },
    {
        'id': 3912,
        'name': '王牌奶爸',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'author': '小头马',
        'updateTime': '2017-04-29 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '第187章 伪善的父亲\n                    '
    },
    {
        'id': 9871,
        'name': '逆天奶爸',
        'author': '冰在心',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'updateTime': '2017-05-01 00:00:00',
        'state': '连载',
        'category': '[玄幻奇幻]',
        'lastChapter': '157. 没有完成的部分\n                    '
    },
    {
        'id': 13157,
        'name': '巨星奶爸',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'author': '青藤葫芦',
        'updateTime': '2017-04-29 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '第262章:我只是一名奶爸 大结局\n                    '
    },
    {
        'id': 19173,
        'name': '洪荒奶爸',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'author': '华夏小生',
        'updateTime': '2017-04-29 00:00:00',
        'state': '连载',
        'category': '[武侠仙侠]',
        'lastChapter': '第二百零二章 孽缘!\n                    '
    },
    {
        'id': 33655,
        'name': '奶爸刀客',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'author': '五九一',
        'updateTime': '2017-08-19 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '第三十章 终章\n                    '
    },
    {
        'id': 34807,
        'name': '奶爸明星',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'author': '赟老爷',
        'updateTime': '2017-10-17 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '第二百二十六章 试戏\n                    '
    },
    {
        'id': 66081,
        'name': '神级奶爸',
        'author': '单王张',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'updateTime': '2018-09-26 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '第六百四十三章 来自于父亲的消息\n                    '
    },
    {
        'id': 67174,
        'name': '魔君奶爸',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'author': '龙胆枪',
        'updateTime': '2018-02-14 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '第六十二章 100亿酬劳\n                    '
    },
    {
        'id': 67698,
        'name': '全职奶爸',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'author': '竹子花',
        'updateTime': '2018-07-09 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '第八百八十五章 河心洲的别墅 落幕\n                    '
    },
    {
        'id': 85475,
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'name': '逆天奶爸',
        'author': '晚晚熊',
        'updateTime': '2018-09-26 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '第二九八章,进入核心区域\n                    '
    },
    {
        'id': 93480,
        'name': '奶爸萌娃',
        'author': '火合羽',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'updateTime': '2018-09-19 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '第一百八十七章 李亦凡的决定\n                    '
    },
    {
        'id': 103246,
        'name': '律政奶爸',
        'author': '盘古混沌',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'updateTime': '2018-07-09 00:00:00',
        'state': '连载',
        'category': '[科幻灵异]',
        'lastChapter': '第1485章 1427.胜利凯旋\n                    '
    },
    {
        'id': 106935,
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'name': '氪金奶爸',
        'author': '汉风浪子',
        'updateTime': '2018-07-22 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '第三十五章 再次交锋\n                    '
    },
    {
        'id': 107021,
        'name': '笨蛋奶爸',
        'author': '白告禾',
        'updateTime': '2018-07-22 00:00:00',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '第五章 回海城啦\n                    '
    },
    {
        'id': 108898,
        'name': '神医奶爸',
        'author': '童飞扬',
        'updateTime': '2018-09-26 00:00:00',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '第二百四十五章 遇上恩人了\n                    '
    },
    {
        'id': 5390,
        'name': '极品奶爸',
        'author': '三道坎',
        'updateTime': '2017-07-10 00:00:00',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'state': '完成',
        'category': '[都市言情]',
        'lastChapter': '第0895章 决战 全文终\n                    '
    },
    {
        'id': 8136,
        'name': '超级奶爸',
        'author': '骨骼惊奇啊',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'updateTime': '2017-04-29 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '第五十六章 十世之痛 一朝泪流\n                    '
    },
    {
        'id': 38400,
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'name': '奶爸的1993',
        'author': '不胜人间一醉',
        'updateTime': '2017-11-08 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '第一百三十章内涵\n                    '
    },
    {
        'id': 49753,
        'name': '文娱奶爸',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'author': '山楂小三',
        'updateTime': '2017-12-08 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '第一百零六章 天王天后加萌新\n                    '
    },
    {
        'id': 82489,
        'name': '一拳奶爸',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'author': '梦梦卫星',
        'updateTime': '2018-09-27 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '185 吓屎你八哥,我了\n                    '
    },
    {
        'id': 84077,
        'name': '哆啦奶爸',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'author': '极客书生',
        'updateTime': '2018-05-03 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '第二十章 大召唤术:爸爸!\n                    '
    },
    {
        'id': 93180,
        'name': '奶爸戏精',
        'author': '面包不如馒头',
        'updateTime': '2018-09-27 00:00:00',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '第五百九十九章 还是人太少了\n                    '
    },
    {
        'id': 100324,
        'name': '龙骑奶爸',
        'author': '开森now',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'updateTime': '2018-08-05 00:00:00',
        'state': '连载',
        'category': '[玄幻奇幻]',
        'lastChapter': '第六十三章 出战资格\n                    '
    },
    {
        'id': 100975,
        'name': '奶爸传奇',
        'author': '戴氏守月',
        'updateTime': '2018-07-01 00:00:00',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'state': '连载',
        'category': '[玄幻奇幻]',
        'lastChapter': '第十七章 接受调查\n                    '
    },
    {
        'id': 20753,
        'name': '奶爸巨星',
        'author': '三更半夜',
        'updateTime': '2017-11-20 00:00:00',
        'state': '连载',
        'category': '[玄幻奇幻]',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'lastChapter': '190 牛三自述\n                    '
    },
    {
        'id': 95520,
        'name': '奶爸农场',
        'author': '酸辣萝卜干',
        'updateTime': '2018-06-12 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'lastChapter': '第十三章 改标签\n                    '
    },
    {
        'id': 104868,
        'name': '奶爸修仙',
        'author': '独醉这杯茶',
        'updateTime': '2018-07-15 00:00:00',
        'state': '连载',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'category': '[都市言情]',
        'lastChapter': '第二十二章 血阵\n                    '
    },
    {
        'id': 17032,
        'name': '超品奶爸',
        'author': '痞子二叔.QD',
        'updateTime': '2017-04-29 00:00:00',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '第九十八章 我的内裤什么颜色?\n                    '
    },
    {
        'id': 108888,
        'name': '女神的终极奶爸',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'author': '奶爸森先生',
        'updateTime': '2018-07-29 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '第两百七十五章 结局\n                    '
    },
    {
        'id': 67510,
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'name': '末日奶爸',
        'author': '撑死的熊猫_塔读文学网',
        'updateTime': '2018-02-16 00:00:00',
        'state': '连载',
        'category': '[科幻灵异]',
        'lastChapter': '第六百一十三章:大结局\n                    '
    },
    {
        'id': 106834,
        'name': '奶爸的传说',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'author': '龙赢',
        'updateTime': '2018-07-21 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '第6章粑粑抱抱\n                    '
    },
    {
        'id': 121730,
        'name': '奶爸大魔头',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'author': '尚膳',
        'updateTime': '2018-09-11 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '103 五十高阶异能者\n                    '
    },
    {
        'id': 4155,
        'name': '大唐超级奶爸',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'author': '洛山山',
        'updateTime': '2017-04-29 00:00:00',
        'state': '完成',
        'category': '[历史军事]',
        'lastChapter': '第九百四十七章 中.华帝国 大结局\n                    '
    },
    {
        'id': 19915,
        'name': '大明超级奶爸',
        'author': '洛山山',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'updateTime': '2017-08-25 00:00:00',
        'state': '连载',
        'category': '[历史军事]',
        'lastChapter': '第五百八十五章 大结局 下\n                    '
    },
    {
        'id': 29821,
        'name': '最强虚拟奶爸',
        'author': '黑油白菜',
        'updateTime': '2017-06-09 00:00:00',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'state': '连载',
        'category': '[网游竞技]',
        'lastChapter': '第39章 坐在雕像上看日出的小姑娘 下\n                    '
    },
    {
        'id': 30209,
        'name': '超级巨星奶爸',
        'author': '温七郎',
        'updateTime': '2018-01-31 00:00:00',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'state': '完成',
        'category': '[玄幻奇幻]',
        'lastChapter': '第693章 终章之幸福生活\n                    '
    },
    {
        'id': 38718,
        'name': '奶爸闯文娱',
        'author': 'ydhhdy',
        'updateTime': '2017-09-21 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'lastChapter': '第四十五章:买奖\n                    '
    },
    {
        'id': 48405,
        'name': '嫁给奶爸吧',
        'author': '水色红衣',
        'updateTime': '2017-11-01 00:00:00',
        'state': '连载',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'category': '[女生频道]',
        'lastChapter': '第32章 糟糕的一天\n                    '
    },
    {
        'id': 49581,
        'name': '总统单亲奶爸',
        'author': '黑岛菜',
        'updateTime': '2018-01-18 00:00:00',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'state': '连载',
        'category': '[女生频道]',
        'lastChapter': '第199章 终章:献给唐翰年、姜暮烟\n                    '
    },
    {
        'id': 60695,
        'name': '奶爸会法术',
        'author': '松坪山人',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'updateTime': '2018-06-18 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '第三四一章 第10082号档案\n                    '
    },
    {
        'id': 66209,
        'name': '黑科技奶爸',
        'author': '宝石妖',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'updateTime': '2018-09-05 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '31.我劝你要有敬畏之心\n                    '
    },
    {
        'id': 84535,
        'name': '娱乐超级奶爸',
        'author': '洛山山',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'updateTime': '2018-09-26 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '第三百五十章 你是不是得罪人了?\n                    '
    },
    {
        'id': 101557,
        'name': '奶爸说西游',
        'author': '呼呛哥',
        'updateTime': '2018-07-03 00:00:00',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'state': '连载',
        'category': '[玄幻奇幻]',
        'lastChapter': '白骨葬歌 上\n                    '
    },
    {
        'id': 124196,
        'name': '奶爸都市行',
        'author': '墨文渊',
        'cover': 'https://bookcover.yuewen.com/qdbimg/349573/1003312907/300',
        'updateTime': '2018-09-20 00:00:00',
        'state': '连载',
        'category': '[都市言情]',
        'lastChapter': '第九章 功德\n                    '
    }
];
  visible = true;
  @ViewChild('drawerTitle') drawerTitle;
  @ViewChild('drawerBody') drawerBody;

  bookOptions = {
    display: 'flex',
    'list-style': 'none',
    'align-items': 'center',
    'justify-content': 'space-around',
    margin: 0,
    padding: 0,
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    private el: ElementRef,
    private message: NzMessageService,
    private drawerService: NzDrawerService,
    private location: Location
   ) { }

  ngOnInit() {

  }

  showDetail(event, book) {
    event.stopPropagation();
    console.log(event);
    this.visible = true;
    this.drawerService.create<NzDrawerBodyComponent, {shelves: Array<object>}, Array<object>>({
      nzClosable: false,
      nzContent: NzDrawerBodyComponent,
      nzPlacement: 'bottom',
      nzHeight: 200,
      nzContentParams: {
        shelves: this.shelves
      }
    });
  }

  close() {
    this.visible = false;
  }

  reading(book) {
    const chapter = LocalStorage.getItem('chapter' + book.id);
    if (chapter) {
      this.router.navigate([`/book/${book.id}/${chapter.id}`]);
    } else if (book.catalog && book.catalog.length > 0) {
      this.router.navigate([`/book/${book.id}/${book.catalog[0].id}`]);
    } else {
      this.httpService.get('getBookCatalog', {id: book.id})
        .subscribe(res => {
          if (res[0] && res[0].id) {
            this.router.navigate([`/book/${book.id}/${res[0].id}`]);
          } else {
            this.message.error(`暂无内容`);
          }
        });
    }
  }

  ngOnDestroy() {

  }
}

@Component({
  selector: 'app-drawer-body',
  styleUrls: ['./shelves.component.less'],
  template: `
    <div class="book-detail" >
      <div class="cover">
        <img [src]="shelves[0].cover || ''" [alt]="shelves[0].name">
      </div>
      <div class="detail">
        <div class="name">{{shelves[0].name}}</div>
        <div class="info">{{shelves[0].author}}</div>
      </div>
      <button nz-button class="btn">详情</button>
    </div>
    <ul class="book-options">
      <li>
        <i class="novel novel-catalog"></i>
        <p>目录</p>
      </li>
      <li>
        <i class="novel novel-download"></i>
        <p>缓存</p>
      </li>
      <li>
        <i class="novel novel-delete"></i>
        <p>删除</p>
      </li>
    </ul>
  `
})
export class NzDrawerBodyComponent {
  @Input() shelves = [{}];

  constructor(
    private drawerRef: NzDrawerRef<string>
  ) {
  }

  close(): void {
    this.drawerRef.close();
  }
}
