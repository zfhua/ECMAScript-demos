
//
//

// javascript中的每个对象都有prototype属性;
// Javascript中对象的prototype属性的
// 解释是：返回对象类型原型的引用;
//
// 每一个构造函数都有一个属性叫做原型。这个属性非常有用：为一个特定类声明通用的变量或者函数;
//
    function Test(){}
    alert(Test.prototype); // 输出 "Object"


//
// 闭包( closure )：
// 子对象会一级一级地向上寻找所有父对象的变量
