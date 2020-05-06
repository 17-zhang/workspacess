/**
* 1 利用Map对象和数组的filter方法
* */
var arr1 = [1,'1',1,2,3,undefined,undefined,NaN,NaN,4,8,8]
function unique(arr) {
    const res = new Map()
    return arr.filter((a)=> !res.has(a) && res.set(a,1)  // has方法返回一个布尔值，判断这个值是否存在于Map()对象中，set方法给Map对象设置kay/value
    )
}
var newArr = unique(arr1)
console.log(newArr)
//   [1, "1", 2, 3, undefined, NaN, 4, 8]

/**
 * 2 利用Set对象和数组的Array.from方法
 * */
var arr1 = [1,'1',1,2,3,undefined,undefined,NaN,NaN,4,8,8]
function unique(arr) {
    return Array.from(new Set(arr))
}
var newArr = unique(arr1)
console.log(newArr)
//   [1, "1", 2, 3, undefined, NaN, 4, 8]

/**
 * 3 利用Set+扩展运算符 (常用)
 * */
var arr1 = [1,'1',1,2,3,undefined,undefined,NaN,NaN,4,8,8]
var newArr = [...new Set(arr1)]
console.log(newArr)
//   [1, "1", 2, 3, undefined, NaN, 4, 8]
