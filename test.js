function fn(k, arr) {
  let obj = {},
    result = [],
    flag = arr.length / k;

  arr.forEach(function (item) {
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  });

  for (let key in obj) {
    if (obj[key] > flag) {
      result.push(key);
    }
  }
  return result.length > 0 ? result : -1;
}

function P(params) {
  this.name = params.name;
}

let obj = {
  a: 1,
  b: [1, 2],
  c: {
    name: "",
    ch: {},
  },
  d: new P({ name: "zhang" }),
};

console.log(JSON.stringify(obj.d));

let obj = {
  a: 1,
  b: 2,
  c: 3,
};

let { a, ...res } = obj;

console.log(res);
