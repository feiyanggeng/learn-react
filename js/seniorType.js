"use strict";
/* 类型保护，封装成一个 返回值为 paramatar is typeName  的函数返回 boolean 值，typescript 会根据 返回值的类型 确定在之后的 代码块里面改参数使用哪种类型去校验
也可以使用  typeof 语法去实现类型保护，不过只能是 js的基础数据类型，才会被识别为类型保护，
也可以使用 instanceof 语法实现判断 原型构造函数的方式实现类型保护



typeScript 只是在语法上的限制，并不在运行时做限制，最后编译成了 es5 所有的类型校验都没有了，除非自己手动写代码添加类型校验

typescript 中定义的 接口  类型 编译的时候都会被删除，只有在书写代码的时候对我们的代码进行约束
*/
function get(p) {
    if (isNumber(p)) {
        return 99;
    }
    else {
        return p.length;
    }
}
function isNumber(x) {
    return typeof x === "number";
}
function fixed(name) {
    function postfix(epithet) {
        return name.charAt(0) + ".  the " + epithet; // ok
    }
    name = name || "Bob";
    return postfix("great");
}
console.log(fixed(null));
function getClassName(c) { }
var person = {
    name: "Jarid",
    age: 35,
};
function getKeys(o, names) {
    return names.map(function (n) { return o[n]; });
}
console.log(getKeys(person, ["name", "age"])); // 这里根据 类型推论 知道 T 是 Person 而 K 是 T 的参数的类型 所以是 字面量类型 ’name‘ | ’age‘ 所以names 参数的数组里面自能有 name 或是 age
