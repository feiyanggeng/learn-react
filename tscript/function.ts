// 函数

// 默认参数和可选参数 (有默认参数的参数类型是默认值的类型)
// function buildName(firstName: string, secondName = "word"): string {
//   return `${firstName}-${secondName}`;
// }
// function buildName2(firstName: string, secondName?: string): string {
//   return `${firstName}-${secondName}`;
// }

// console.log(buildName("hello", "0"));

/* 方法重载; 方法重载之后，对方法的类型校验会从上到下依次校验，只要符合重载中的其中一种即可，都不符合的话就会报错，重载的方法只有前面几个算是方法的重载，最后一个不算在重载之中
，它是重载方法的具体实现。
*/

function overloading(x: number): number;
function overloading(x: { name: string; age: number }): string;
function overloading(x: any): any {
  if (typeof x === "object") {
    return `姓名：${x.name}+,年龄：${x.age}`;
  }
  if (typeof x === "number") {
    return x;
  }
}

console.log(overloading({ name: "", age: 0 }));
