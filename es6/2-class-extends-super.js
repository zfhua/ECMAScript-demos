
// es6
// class extend super
//
// 对应 es5 部分：原型、构造函数，继承
//

//
class Animal {
    constructor(){
        this.type = 'animal'
    }
    says(say){
        console.log(this.type + ' says ' + say)
    }
}

let animal = new Animal()
animal.says('hello') //animal says hello

class Cat extends Animal {
    constructor(){
        super()
        this.type = 'cat'
    }
}

let cat = new Cat()
cat.says('hello') //cat says hello

//
// 1. class定义了一个“类”; constructor方法，这就是构造方法; this关键字则代表实例对象;
// 2. Class之间可以通过extends关键字实现继承;
// 3. super关键字，它指代父类的实例（即父类的this对象）;
//    子类必须在constructor方法中调用super方法，否则新建实例时会报错。
//    这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。
//    如果不调用super方法，子类就得不到this对象。

//  ES6的继承机制，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。





//
