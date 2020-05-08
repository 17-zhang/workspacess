/**
 * 例子
* */
// 有只猫叫小黑，小黑会吃鱼
const cat = {
    name: '小黑',
    eatFish(...args){
        console.log('this指向=>', this)
        console.log('...args',args)
        console.log(this.name + '吃鱼')
    }
}
// 有条狗叫大毛，大毛会吃骨头
const dog = {
    name: '大毛',
    eatBone(...args){
        console.log('this指向=>',this)
        console.log('...args',args)
        console.log(this.name + '吃骨头')
    }
}
console.log('================= call ==============')
// 有一天大毛想吃鱼了，可是它不知道怎么吃。小黑说我吃的时候喂你吃
cat.eatFish.call(dog, '汪汪汪', 'call')
// 大毛为了表示感谢，决定下次吃骨头的时候也喂小黑吃
dog.eatBone.call(cat, '喵喵喵', 'call')

console.log('================= apply ==============')
cat.eatFish.apply(dog, ['汪汪汪','apply'])
dog.eatBone.apply(cat, ['喵喵喵','apply'])

console.log('================= bind ==============')
// 有一天它们觉得每次吃的时候再喂太麻烦，干脆教对方怎么吃
const test1 = cat.eatFish.bind(dog, '汪汪汪', 'bind')
const test2 = dog.eatBone.bind(cat, '喵喵喵', 'bind')
test1()
test2()


/*
================= call ==============
this指向=> {name: "大毛", eatBone: ƒ}
...args (2) ["汪汪汪", "call"]
大毛吃鱼
this指向=> {name: "小黑", eatFish: ƒ}
...args (2) ["喵喵喵", "call"]
小黑吃骨头
================= apply ==============
this指向=> {name: "大毛", eatBone: ƒ}
...args (2) ["汪汪汪", "apply"]
大毛吃鱼
this指向=> {name: "小黑", eatFish: ƒ}
...args (2) ["喵喵喵", "apply"]
小黑吃骨头
================= bind ==============
this指向=> {name: "大毛", eatBone: ƒ}
...args (2) ["汪汪汪", "bind"]
大毛吃鱼
this指向=> {name: "小黑", eatFish: ƒ}
...args (2) ["喵喵喵", "bind"]
小黑吃骨头
*/

/**
 * 总结：
 *      1、当我们使用一个函数需要改变this指向的时候才会用到call/apply/bind
 *      2、如果传递的参数不多，则可以使用 fn.call(thisObj, arg1, arg2...)
 *      3、如果传递的参数很多，则可以使用数组将参数整理好调用 fn.apply(thisObj, [arg1,arg2...])
 *      4、如果想生成一个新的函数长期绑定某个函数给某个对象用，则可以使用: const newFn = fn.bind(thisObj);  newFn(arg1,arg2...)
 * */