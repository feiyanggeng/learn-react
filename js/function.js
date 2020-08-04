"use strict";
// 函数
function overloading(x) {
    if (typeof x === "object") {
        return "\u59D3\u540D\uFF1A" + x.name + "+,\u5E74\u9F84\uFF1A" + x.age;
    }
    if (typeof x === "number") {
        return x;
    }
}
console.log(overloading({ name: "", age: 0 }));
