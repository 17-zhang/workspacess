/**
 * 1、set：类似于数组，但是成员值都是唯一的，没有重复的值。
 *
 * */
// 基本语法
const s = new Set()
    [2, 3, 4, 4, 7, 11, 7, 2, 2].forEach(x => s.add(x))
for (let i of s) {
    console.log(i)
}
// Set函数可以接受一个数组作为参数，用来初始化
// 例一
const set = new Set([1,2,3,4,4])
    [...set]   // 1 2 3 4
// 例二
const items = new Set([1,2,3,4,5,5,5,5,5])
items.size  // 5

// 例三
const set = new Set(document.querySelectorAll('div'))
set.size // 56
// 类似于
const set = new Set()
document
    .querySelectorAll('div')
    .forEach(div => set.add(div))
set.size  // 56

// 例一 例二都是set函数接受数组作为参数，例三接受类似数组的对象作为参数

/**
 * 2、Set实例的属性和方法
 *  属性：
 *      Set.prototype.constructor: 构造函数，默认是set函数
 *      Set.prototype.size: 返回Set实例的成员个数
 * 操作方法（用于操作数据）和遍历方法（用于遍历成员）：
 *      Set.prototype.add(value): 添加某个值，返回set结构本身
 *      Set.prototype.delete(value): 删除某个值，返回一个布尔值，表示删除是否成功。
 *      Set.prototype.has(value): 返回一个布尔值，表示该值是否为set成员
 *      Set.prototype.clear(): 清楚所有成员，没有返回值
 * */
232337
/**
 * 3、遍历操作
 *      Set.prototype.keys(): 返回健名的遍历器
 *      Set.prototype.values(): 返回键值的遍历器
 *      Set.prototype.entries(): 返回键值对的遍历器
 *      Set.prototype.forEach(): 使用回调函数遍历每个成员
 * */





