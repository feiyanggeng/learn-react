/* 类型保护，封装成一个 返回值为 paramatar is typeName  的函数返回 boolean 值，typescript 会根据 返回值的类型 确定在之后的 代码块里面改参数使用哪种类型去校验
也可以使用  typeof 语法去实现类型保护，不过只能是 js的基础数据类型，才会被识别为类型保护，
也可以使用 instanceof 语法实现判断 原型构造函数的方式实现类型保护



typeScript 只是在语法上的限制，并不在运行时做限制，最后编译成了 es5 所有的类型校验都没有了，除非自己手动写代码添加类型校验

typescript 中定义的 接口  类型 编译的时候都会被删除，只有在书写代码的时候对我们的代码进行约束
*/
function get(p: number | string): number {
  if (isNumber(p)) {
    return 99;
  } else {
    return p.length;
  }
}

function isNumber(x: any): x is number {
  return typeof x === "number";
}

function fixed(name: string | null): string {
  function postfix(epithet: string) {
    return name!.charAt(0) + ".  the " + epithet; // ok
  }
  name = name || "Bob";
  return postfix("great");
}

console.log(fixed(null));

/**
 * 类型别名 可以与 接口 interface 相似 但是不能被继承也不能被implement，自己也不能继承别的，会被识别成为字面量类型
 */
type SN = string | number;

type Ob = {
  value: number;
};

/**
 * 字符串字面量类型
 *
 * 可以定义一系列的字符串作为一种类型，参数被定义为这种类型之后就只能是这些字符串中的一种
 */

type className = "open" | "close" | "waiting";

function getClassName(c: className) {}

// getClassName('123')   // 此时只能传入 上面三种中的一种

/**
 * 多态，和继承一起出现的，比如父类函数中的this会在子类继承之后实例化之后就会指向子类实例，这样 this 会在不同的子类中有不同的表现
 */

/**
 * 索引参数：校验动态参数的类型，将泛型的类型定义为某个参数 key 值得类型利用 extends keyof
 */

interface Person {
  name: string;
  age: number;
}
let person: Person = {
  name: "Jarid",
  age: 35,
};
function getKeys<T, k extends keyof T>(o: T, names: k[]): T[k][] {
  return names.map((n) => o[n]);
}

console.log(getKeys(person, ["name", "age"])); // 这里根据 类型推论 知道 T 是 Person 而 K 是 T 的参数的类型 所以是 字面量类型 ’name‘ | ’age‘ 所以names 参数的数组里面自能有 name 或是 age

/**
 * 映射类型  将一个已知的类型根据一定的规则转化成一个新的类型， 新的类型用 type 定义
 */

//  比如讲一个已知类型中的每一项都转变成可选的
interface IPerson {
  name: string;
  age: number;
}

type selectType<T> = {
  [P in keyof T]?: T[P];
};

type ISelectPerson = selectType<IPerson>;

function showPerson(per: IPerson) {}

function showSPerson(per: ISelectPerson) {}

showPerson({ name: "", age: 1 }); // 两个参数都要传入
showSPerson({}); // 两个参数都是可选参数
