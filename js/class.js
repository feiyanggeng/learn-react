"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// // 类的练习 使用class 定义类,类名首字母必须大写
// /**
//  * public 类和子类以及实例都可以访问
//  * private 私有的只有在类和子类里面可以访问 实例里面不可以访问
//  * protected
//  */
var Parent = /** @class */ (function () {
    function Parent(name, age) {
        this.name = name;
        this.age = age;
    }
    Parent.prototype.eat = function () {
        console.log(this.name + "\u5728\u5403");
    };
    Parent.prototype.say = function () {
        console.log("\u6211\u53EB" + this.name + "\uFF0C\u4ECA\u5E74" + this.age + "\u5C81");
    };
    //   静态方法
    Parent.run = function () {
        console.log("run");
    };
    return Parent;
}());
// let p = new Parent("zhangsan", 12);
// // p.name;   错误写法
// // p.age
// // p.eat();
// p.say();
// // 继承
var San = /** @class */ (function (_super) {
    __extends(San, _super);
    function San(name, age) {
        return _super.call(this, name, age) || this;
    }
    return San;
}(Parent));
// let s = new San("lisi", 10);
// // console.log(s.age);
/* 抽象类 （抽象类和普通的类只是ts在语法上给我门做了限制，实际的编译结构是一样的，利用function生成构造函数，将方法挂载到 prototype 上）
抽象类不能被实例化，只能用来被继承，所以可以当成其他类的基类
*/
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("roaming the earch...");
    };
    return Animal;
}());
