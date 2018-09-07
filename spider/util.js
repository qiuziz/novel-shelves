/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2018-09-07 19:19:13
 * @Last Modified by: qiuz
 * @Last Modified time: 2018-09-07 22:50:32
 */

// 产生m 到 n 之间的随机数
function random(m, n) {
	const i = n - m;
	return Math.floor(Math.random() * i + m);
}

module.exports = {
  random
};
