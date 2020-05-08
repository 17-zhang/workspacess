/**
 * 实现浅拷贝的第一种方法
 * */
function simpleClone(initalObj) {
    var obj = {}
    for(var i in initalObj) {
        obj[i] = initalObj[i]
    }
    return obj
}
var obj = {
    a: 'hello',
    b:{
        a: 'world',
        b: 21
    },
    c: ['Bob','Tom','Jenny'],
    d: function () {
        alert('hello world')
    }
}
var cloneObj = simpleClone(obj)

console.log(cloneObj.a)  // hello
console.log(cloneObj.b)  // {a: 'world',b: '21'}
console.log(cloneObj.c)  // ['Bob','Tom','Jenny']
console.log(cloneObj.d)  // f(){alert('hello world')}

// 更改原对象中的a,b,c,d 看看拷贝过来的对象是否变化
cloneObj.a = 'changed'
cloneObj.b.a = 'changed'
cloneObj.b.b = 25
cloneObj.c = [1,2,3]
cloneObj.d = function () {
    alert('changed')
}
console.log(obj.a)  // hello
console.log(obj.b)  // {a: 'changed',b: '25'}
console.log(obj.c)  // ['Bob','Tom','Jenny']
console.log(obj.d)  // f(){alert('hello world')}

/**
 * 实现浅拷贝的第二种方法
 *     ES6中的Object.assign方法：可以把任意多个源对象自身可枚举属性拷贝给目标对象，然后返回给目标对象。
 *     Object.assign(target,...sources)
 *     参数： target: 目标对象
 *           sources: 任意多个源对象
 *           返回值：目标对象会被返回
 * */
var obj1 = {
    a: 'hello',
    b: {
        a: 'hello',
        b: 21
    }
}
var cloneObj1 = Object.assign({},obj1)
cloneObj1.a = 'changed'
cloneObj1.b = 'changed'
console.log(obj1.a)  // hello
console.log(obj.b.a)  // changed


