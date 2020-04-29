// 数组合并、去重和排序

/***
 * 1 两个数组合并去重
 *
 */
var arr1 = ['1','2','3']
var arr2 = ['2','3','4','5']

var Data = function (arr1,arr2) {
    var arr = arr1.concat();
    for(var i=0;i<arr2.length;i++){
        arr.indexOf(arr2[i]) === -1 ? arr.push(arr2[i]) : 0
    }
    return arr
}
console.log(Data(arr1,arr2))
// ['1','2','3','4','5']
/***
 * 2 多个数组合并去重
 *
 */
var arr1 = ['a','b'];
var arr2 = ['a','c','d'];
var arr3 = [1,'d',undefined,true,null];
//合并多个数组，去重
var concat_ = function(arr1,arr2,arr3){
    if(arguments.length <= 1){
        return false;
    }
    var concat_ = function(arr1,arr2){
        var arr = arr1.concat();
        for(var i=0;i<arr2.length;i++){
            arr.indexOf(arr2[i]) === -1 ? arr.push(arr2[i]) : 0;
        }
        return arr;
    }
    var result = concat_(arr1,arr2);
    for(var i=2;i<arguments.length;i++){
        result = concat_(result,arguments[i]);
    }
    return result;
}
console.log(concat_(arr1,arr2,arr3));//["a", "b", "c", "d", 1, undefined, true, null]

/***
 * 3 多个数组合并去重排序
 *
 */
var arr1 = [1, 6, 4, 0]
var arr2 = [8, 20, 7, 4.5]
var arr3 = [6, 0, 7, 80, 2]

var concat_ = function (arr1,arr2,arr3) {
    if(arguments.length <= 1){
        return false;
    }
    var concat_ = function (arr1,arr2) {
        var arr = arr1.concat();
        for(var i=0;i<arr2.length;i++){
            arr.indexOf(arr2[i]) === 1 ? arr.push(arr2[i]) : 0
        }
        return arr
    }
    var result = concat_(arr1,arr2)
    for (var i=2;i<arguments.length;i++){
        result = concat_(result,arguments[i])
    }
    // 排序
    function sortNum(a,b) {
        return a - b
    }
    return result.sort(sortNum)
}
console.log(concat_(arr1,arr2,arr3))