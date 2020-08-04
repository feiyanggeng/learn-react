// // 类的练习 使用class 定义类,类名首字母必须大写
// /**
//  * public 类和子类以及实例都可以访问
//  * private 私有的只有在类和子类里面可以访问 实例里面不可以访问
//  * protected
//  */
class Parent {
  private name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public eat() {
    console.log(`${this.name}在吃`);
  }
  public say() {
    console.log(`我叫${this.name}，今年${this.age}岁`);
  }
  //   静态方法
  static run() {
    console.log("run");
  }
}

// let p = new Parent("zhangsan", 12);
// // p.name;   错误写法
// // p.age

// // p.eat();
// p.say();

// // 继承
class San extends Parent {
  constructor(name: string, age: number) {
    super(name, age);
  }
}

// let s = new San("lisi", 10);
// // console.log(s.age);

/* 抽象类 （抽象类和普通的类只是ts在语法上给我门做了限制，实际的编译结构是一样的，利用function生成构造函数，将方法挂载到 prototype 上）
抽象类不能被实例化，只能用来被继承，所以可以当成其他类的基类
*/
abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("roaming the earch...");
  }
}
