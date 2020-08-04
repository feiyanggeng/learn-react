// function fn(k, arr) {
//   let obj = {},
//     result = [],
//     flag = arr.length / k;

//   arr.forEach(function (item) {
//     if (obj[item]) {
//       obj[item]++;
//     } else {
//       obj[item] = 1;
//     }
//   });

//   for (let key in obj) {
//     if (obj[key] > flag) {
//       result.push(key);
//     }
//   }
//   return result.length > 0 ? result : -1;
// }

// function P(params) {
//   this.name = params.name;
// }

// let obj = {
//   a: 1,
//   b: [1, 2],
//   c: {
//     name: "",
//     ch: {},
//   },
//   d: new P({ name: "zhang" }),
// };

// console.log(JSON.stringify(obj.d));

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// let { a, ...res } = obj;

// console.log(res);

// Promise.allSettled([
//   Promise.resolve(33),
//   new Promise((resolve) => setTimeout(() => resolve(66), 0)),
//   99,
//   Promise.reject(new Error("an error")),
// ]).then((values) => console.log(values));

// let a1 = 1;
// let a = ((a1 = 2), a1);
// console.log(a);

// console.log(Object.setPrototypeOf);

/* 设计一个程序可以对给定一个音乐列表（长度为n）进行随机播放：要求如下，所有音乐在n次内必须至少被播放一次，不能有连续播放同一首歌。

加分项：可以‘返回上一首’并且按顺序
*/
let musicList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
let oldM = [];
let musicHistory = [];

let cur = musicHistory.length - 1;

function next() {
  if (cur === musicHistory.length - 1) {
    randomMusic(musicList);
    cur = musicHistory.length - 1;
  } else {
    cur += 1;
  }
  console.log(musicHistory);
  return musicList[musicHistory[cur]];
}

function pre() {
  if (cur < 0) {
    return "到头了";
  }
  cur--;
  return musicList[musicHistory[cur]];
}

function randomMusic(arr) {
  let index = Math.floor(Math.random() * arr.length);
  if (oldM.length === arr.length) {
    while (index === oldM[oldM.length - 1]) {
      index = Math.floor(Math.random() * arr.length);
    }
    oldM = [];
  }
  while (oldM.includes(index)) {
    index = Math.floor(Math.random() * arr.length);
  }
  oldM.push(index);
  musicHistory.push(index);
}


