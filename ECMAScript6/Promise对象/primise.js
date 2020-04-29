/**
 * 1、基本语法
 * */
const primise = new Primise(function (resolve, reject) {
    // ...
    if (异步操作成功) {
        resolve(value)
    } else {
        reject(error)
    }
})

// 例子1
let promise = new Promise(function (resolve, reject) {
    console.log('Promise!')
    resolve()
})
promise.then(function () {  // promise实例生成后，可以用then方法分别指定resolved状态和rejected状态的回调函数
    console.log('resolved')
})
console.log('Hi!')
// Promise！
// Hi!
// resolved

// 例子2 异步加载图片
loadImageAsync()
function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
        const image = new Image()

        image.onload = function () {
            resolve(image)  // 加载成功调resolve方法
        }

        image.onerror = function () {
            reject(new Error('不能加载图片'+url))  // 加载失败掉reject方法
        }
        image.src = url
    })
}
// 用Promise对象实现一个Ajax操作的实例
const getJSON = function (url) {
    const promise = new Promise(function (resolve,reject) {  // 构造Promise函数
        const handler = function () {
            if (this.readyState !== 4) {  // 服务器相应不等于4开头的数字
                return
            }
            if (this.state === 200) {  // 服务器请求成功
                resolve(this.response)
            } else {
                reject(new Error(this.statusText))  // 不等于200，则会打印错误状态码
            }
        }
        const client = new XMLHttpRequest()  // 创建XMLHttpRequest对象
        client.open('GET', url)  // 请求类型和URL
        client.onreadystatechange = handler  // onreadystatechange:存储函数名，每当 readyState 属性改变时，就会调用该函数。
        client.responseType = 'json'
        client.setRequestHeader('Accept', 'application/json')
        client.send()  // 发送请求
    })
    return promise
}
getJSON('/posts.json').then(function (json) {  // 使用ajax的HTTP请求获取JSON数据
    console.log('Contents:'+json)
}, function (error) {
    console.log('出错了', error)
})

/**
 * 2、Promise.prototype.then()
 *      than()方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数
 *      有先后顺序。
 * **/
// 例如
getJSON('/posts.json').then(function (post) {  // 第一个than()指定的回调函数，返回的是另一个Promise对象
    return getJSON(post.commentURL)
}).then(function funA(comments) {  // 第二个than()指定的回调函数，等待Promise对象的状态发生变化，如果变为resolved，就调用funcA，如果状态变为rejected，就调用funcB
    console.log("resolved: ", comments)
},function funB(err) {
    console.log("rejected: ", err)
})

// 上面代码使用箭头函数写法
getJSON("/posts.json").then(
    post => getJSON(post.commentURL)
).then(
    comments => console.log("resolved: ", comments),
    err => console.log("rejected: ", err)
)

/**
 * 3、Promise.prototype.catch()方法
 *      Promise.prototype.catch方法是.then(null, rejection)或.then(undefined, rejection)的别名，
 *      用于指定发生错误时的回调函数。
 * */
// 例如
getJSON('/posts.json').then(function(posts) {
    // ...
}).catch(function(error) {
    // 处理 getJSON 和 前一个回调函数运行时发生的错误
    console.log('发生错误！', error);
});

// 例子
const promise = new Promise(function (resolve, reject) {
    throw new Error('test')
})
promise.catch(function (error) {  // promise抛出一个错误就会被catch()的回调函数捕获
    console.log(error)
})

// 下面2种写法是等价的
// 写法一
const promise = new Promise(function (resolve, reject) {
    try {
        throw new Error('test')
    } catch (e) {
        reject(e)
    }
})
promise.catch(function (error) {
    console.log(error)
})

// 写法二
const promise = new Promise(function (resolve, reject) {
    reject(new Error('test'))  // reject方法的作用，等同于抛出错误。
})
promise.catch(function (error) {
    console.log(error)
})

/**
 * 4、Promise.prototype.finally()
 *      finally方法用于指定 Promise 对象最后结果如何，都会执行的操作。【ES2018】
 * */
// 基本语法
promise
    .then(resolve => {})
    .catch(error => {})
    .finally(() => {})

// 例子。服务器使用 Promsie 处理请求，然后finally方法关掉服务器

server.listener(port)
    .then(function () {
        // ...
    })
    .finally(server.stop)
// finally本质上是 than 方法的特例

promise
    .finally(() => {
        // ...
    })
// 等同于
promise
    .then(
        result => {
            // ...
            return result
        },
        error => {
            // ...
            throw error
        }
    )

/**
 * 5、Promise.all()
 *      Promise对象.all方法用于将多个Promise实例，包装成一个新的 Promise 实例
 * */

const p = Promise.all([p1, p2, p3])

// 例子
const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
    return getJSON('/post/'+ id + ".json")
})
Promise.all(promises).then(function (posts) { // promises包含6个Promise实例数组，只有这6个实例状态都变成fullfilled，或者其中有一个变为rejected，才会调用Promise.all方法后面的回调函数。
    // ...
}).catch(function (reason) {
    // ...
})