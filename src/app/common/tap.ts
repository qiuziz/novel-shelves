/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-21 13:32:49
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-09-25 20:55:17
 */

import { fromEvent } from 'rxjs';
import { throttleTime, debounceTime } from 'rxjs/operators';

export const tap = (ele = document, callback) => {
  let moved = false, start = 0;
  const delay = 200;
  fromEvent(ele, 'touchstart')
    .pipe(throttleTime(200))
    .subscribe(event => {
      moved = false; // 滑动标识置为false
      start = +new Date(); // 开始计时
    });
  fromEvent(ele, 'touchmove')
    .subscribe(event => {
      moved = true; // 滑动标识置为false
    });
  fromEvent(ele, 'touchend')
    .subscribe(event => {
      if (moved) { return; } // 滑动则不触发tap
      const cur = +new Date();
      if (cur - start > delay) { return; } // 长按超时则不触发tap
      callback(event);
    });
};

export const move = (ele = document, callback) => {
  let moved = false, start = 0;
  const delay = 200;
  fromEvent(ele, 'touchstart')
    .pipe(throttleTime(200))
    .subscribe(event => {
      moved = false; // 滑动标识置为false
      start = +new Date(); // 开始计时
    });
  fromEvent(ele, 'touchmove')
    .subscribe(event => {
      moved = true; // 滑动标识置为false
    });
  fromEvent(ele, 'touchend')
    .subscribe(event => {
      if (!moved) { return; } // 没有滑动则不触发tap
      const cur = +new Date();
      // if (cur - start > delay) { return; } // 长按超时则不触发tap
      callback(event);
    });
};
