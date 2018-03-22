/* 
apply: 接受两个参数，第一个参数指定了函数体this对象的指向，第二个参数为一个带下标的集合；

call：接受两个参数，第一个参数指定了函数体this对象的指向，从第二个开始往后，每个参数依次被传入函数

如果传入的第一个参数为null, 函数体内this会指向默认的宿主对象；


用途：
    1.改变this指向
*/

var func = function(a,b,c){
    console.log([a,b,c])  //[1,2,3]
}
func.apply(null, [1,2,3])

var func = function(a,b,c) {
    console.log([a,b,c])  //[2,3,4]
}

func.call(null, 2,3,4)


//改变this指向
var obj1 = {name: "likai"}
var obj2 = {name: "xiaoming"}

var name = "win"

var getName = function() {
    console.log(this.name)
}

getName.call(obj1)
getName.apply(obj1)


// 例2

var A = function(name) {
    this.name = name
}

var B = function() {
    A.apply(this, arguments)
}

B.prototype.getName = function() {
    return this.name
}

var b = new B("bbbb")
console.log(b.getName())  //bbbb