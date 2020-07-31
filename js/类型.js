"use strict";
/*
1. 布尔 boolean
2. 数字 number
3. 字符串 string
*/
// 4. 数组 []
/*
let a: number[]; // 数字类型的数组  数组的每个元素必须是数字
let b: string[]; // 字符串型数组
*/
// 5. 元组
// let a: [number, string]; // 数组中的每一项有固定的类型判断
// 6. 枚举 enum 目的：定义一些固定变量名的常量 枚举类型：特性key与值得双向映射,key的值只能是number或者string, 当key的值是string, 没有双向映射的关系，编译过后就是普通的 object；
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
/**
 * 编译后的结果
 * var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
 */
// 值为 string的时候 枚举类型 就会失去反查的特性
var size;
(function (size) {
    size["small"] = "S";
    size["large"] = "L";
})(size || (size = {}));
/**
 * 编译后的结果
 *
 * var size;
(function (size) {
    size["small"] = "S";
    size["large"] = "L";
})(size || (size = {}));
 */
// 枚举类型的值可以是 string 也可以是 number 但是当有string类型的值得时候 利用自增赋值的必须在其前面
var M;
(function (M) {
    M[M["one"] = 0] = "one";
    M["text"] = "t";
})(M || (M = {}));
// 枚举类型没有做 唯一值 的限制 所以利用数字反向查找key的时候 后面的会把前面的 覆盖掉
var B;
(function (B) {
    B[B["age"] = 2] = "age";
    B[B["name"] = 1] = "name";
    B[B["height"] = 2] = "height";
})(B || (B = {}));
// 此时等于 2 的key 有两个这个时候 反查的时候 2 对应的只有 height ， age 会被覆盖掉
/**
 * 编译的结果
 * var B;
(function (B) {
    B[B["age"] = 2] = "age";
    B[B["name"] = 1] = "name";
    B[B["height"] = 2] = "height";
})(B || (B = {}));
 */
//  枚举类型的值可以是 计算结果
var C;
(function (C) {
    C[C["one"] = 0] = "one";
    C[C["two"] = 2] = "two";
})(C || (C = {}));
function getName(o) {
    return o.name;
}
var Per = /** @class */ (function () {
    function Per(name) {
        this.name = name;
    }
    Per.prototype.getName = function () {
        return this.name;
    };
    return Per;
}());
// 类型断言
var str = new Per("zhangsan");
// 在此处我明确知道 str 是P类型的，就可以将str从any转成P类型的，从而在使用str的时候有效的对其进行类型校验
console.log(str.getName());
// 泛型 泛型是我们在定义的时候不明确定义参数的类型，参数的类型在调用的时候才会明确被定义，或是显示定义，或是隐式定义
function identity(arg) {
    return arg;
}
identity("hello"); // 显示定义
identity(100); // 隐式定义  编译器会查看到参数的类型将其赋给 T
function identityPlus(arg) {
    return arg.length;
}
console.log(identityPlus({ length: 100 }));
