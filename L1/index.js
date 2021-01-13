// function fff(n){
//   var n = parseInt(n)
//   var count = 2
//   var n1 = 1
//   var n2 = 1
//   var n3 = 0
//   if(n > 0 && n <=2) {
//     return 1
//   }
//   while(count < n) {
//     n3 = n1 + n2
//     n1 = n2
//     n2 = n3
//     count++
//   }

//   return n3
// }

// console.log(fff(5))
// 1, 1, 2, 3, 5, 8, 13, 21, 34


// function fact(n) {
//   if(n <= 2) {
//     return 1
//   }
//   return fact(n - 1) + fact(n - 2)
// }

// console.log(fact(5))

/**
 * prototype 原型
 * __proto__ 原型链
 */

// prototype 函数的一个属性 对象 {}
// __proto__ 对象Object的一个属性 对象 {}
// 对象的__proto__ 保存着该对象的构造函数的prototype


// console.log(Test.prototype)

// console.log(test.__proto__ === Test.prototype)

// Test.prototype = {} 既然里面是对象
// function GrandParent() {
//   this.a = 1
// }
// const grandParent = new GrandParent()

// GrandParent.prototype.a = 1


// function Parent() {
//   this.b = 2
// }
// const parent = new Parent()
// Parent.prototype = GrandParent.prototype

// function Child() {
//   this.c = 3
// }
// Child.prototype = parent
// const child = new Child

// console.log(child)

function Test() {
  this.a = 1
}
let test = new Test()
console.log(test)
Test.prototype.b = 2
Object.prototype.c = 3
// let test = {
//   a: 1,
//   __proto__: Test.prototype = {
//     b: 2,
//     __proto__: Object.prototype = {
//       c: 3
//     }
//   }
// }
// 
console.log(test.a)
console.log(test.b)
console.log(test.c)
// 如果对象自己身上找不到该属性，就会沿着原型链上面找 有就停止，没有就往上找
// 

// Function Object 函数: 对象
// new Function 
// 用 in 可以检测 对象以及原型链上有没有该属性
// 用 hasOwnProperty 检测对象上是否有该对象，不去原型上找
console.log(test.hasOwnProperty('a'))
console.log(test.hasOwnProperty('b'))
console.log(test.hasOwnProperty('c'))
console.log('a' in test)
console.log('b' in test)
console.log('c' in test)


// npm i jquery -g // 全局安装
// npm i jquery // 本地安装

// 开发模式的安装
// npm i  jquery -S // 生产环境所需要时安装 ~= npm i jquery
// npm i jquery -D // dev 开发环境安装

// deep work
// 1.让深度工作成为一种习惯，每天分出固定的时间
// 2.手机wifi等等网络 关闭
// 3.每天在固定时间查看社交媒体（一天两次）
// 4.吃好睡好
// 5.用番茄工作法，学习25min休息5min，循环4次，来一次长时间休息