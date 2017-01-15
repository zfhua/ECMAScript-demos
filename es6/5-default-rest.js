
//
// default, rest
// 默认值，

// default

    // es5
    function animal(type){
        type = type || 'cat'
        console.log(type)
    }
    animal();

    // es6
    function animal(type = 'cat'){
        console.log(type)
    }
    animal()

// rest

    // ES6
    function animals(...types){
        console.log(types)
    }
    animals('cat', 'dog', 'fish') //["cat", "dog", "fish"]

    // ES5
    // arguments 类数组对象
    function func() {
        console.log("The number of parameters is " + arguments.length);
    }
    func();
    func(1, 2);
    func(1, 2, 3);
