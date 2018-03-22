/*

多肽： 同一操作作用雨不同的对象上面，可以产生不同的解释和不同的执行结果；

比如：主人养了一直鸭子和一只公鸡，主人发出让他们“叫”的命令时，鸭子会“嘎嘎嘎”，公鸡会“咯咯咯”地叫；同样是动物，但是根据主人的指令他们会各自发出不同的叫声。


*/


var makeSound = function(animal) {
    if (animal instanceof Duck) {
        console.log("gagaga")
    } else if (animal instanceof Chicken){
        console.log("gegege")
    }
}

var Duck = function () { }
var Chicken = function () {  }

makeSound( new Duck() )  //gagaga
makeSound( new Chicken() ) //gegege

/* ----------------------------------------- */
/* 

思想：多肽背后的思想是将“做什么”和“谁去做以及怎么做”分离开来，也就是将“可能改变的事物”与“不可能改变的事物”分离开来。

把不变的部分隔离开来，把可变的部分封装起来，给予扩展程序的能力，也是符合 “开放-封闭” 原则

*/

/* 改写代码，将不变的和可变的分离开 */


var makeSound = function (animal) {
    animal.sound();
}

var Duck = function() {}
Duck.prototype.sound = function(){
    console.log("gagaga")
}


var Chicken = function() {}
Chicken.prototype.sound = function() {
    console.log("gegege")
}

makeSound(new Duck())   //gagaga
makeSound(new Chicken())  //gegege

//可扩展性，我们在添加一个或多个别的动物叫
var Dog = function() {}
Dog.prototype.sound = function() {
    console.log("wwww")
}

makeSound( new Dog() )  //wwww




/**--------  例2:  ------------------------ */
var googleMap = {
    show: function(){
        console.log("渲染谷歌地图")
    }
}

var baiduMap = {
    show: function() {
        console.log("渲染百度地图")
    }
}

var sogoMap = {
    show: function() {
        console.log("渲染搜狗地图")
    }
}

var renderMap = function(map){
    if (map.show instanceof Function) {
        map.show()
    }
}

renderMap(googleMap)
renderMap(baiduMap)
renderMap(sogoMap)