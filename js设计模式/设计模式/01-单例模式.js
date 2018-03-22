/* 
要实现一个标准的单例模式并不复杂，无非是用一个变量来标志当前是否已经为某个类创建过对象，如果是则在下一次获取该类的实例时直接返回之前创建的对象
*/
var Singleton = function(name) {
    this.name = name;
    this.instance = null;
}
Singleton.prototype.getName = function() {
    console.log(this.name)
}
Singleton.getInstance = function(name) {
    if (!this.instance) {
        this.instance = new Singleton(name)
    }
    return this.instance
}

var a = Singleton.getInstance("k1");
var b = Singleton.getInstance("k2");

console.log(a === b)  //true


//1.使用命名空间
var nameSpace = {
    a: function() {
        console.log("aaaa")
    },
    b: function () {
        console.log("bbbb")
    }
}
//动态创建命名空间
var MyApp = {}
MyApp.nameSpace = function (name) {
    var parts = name.split(".");
    var current = MyApp;
    for (var i in parts) {
        if (!current[parts[i]]) {
            current[ parts[i] ] = {}
        }
        current = current[ parts[i] ];
    }
}

MyApp.nameSpace("v1")
MyApp.nameSpace("v2.vv1")
console.log(MyApp)   //{v1: {}, v2: { vv1: {} }
