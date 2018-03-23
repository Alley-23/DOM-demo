/**
 * 代理模式
 * 
 * 客户  -->  代理 --> 主体
 */

 //例1
 //小明让MM的好友完成送花

/**-----不用代理模式------- */
var Flower = function(){}

var xiaoming = {
    sendFlower : function(target){
        var flower = new Flower()
        target.receiveFlower(flower)
    }
}

var A = {
    receiveFlower: function(flower){
        console.log("收到了！！！")
    }
}

xiaoming.sendFlower(A)


/**-------使用代理---------- */
var Flower =  function() {}

//代理者
var B = {
    receiveFlower: function(flower){
        A.receiveFlower(flower)
    }
}
//接收者
var A = {
    receiveFlower: function(flower) {
        console.log("收到花了！！！")
    }
}
var xiaoming = {
    sendFlower: function(target) {
        var flower = new Flower()
        target.receiveFlower(flower)
    }
}
//小明将花让B代理送出
xiaoming.sendFlower(B)


/**-----优化：根据A的情况判断是否可以送花 ----- */
var Flower = function() {}
var xiaoming = {
    sendFlower: function(target) {
        target.receiveFlower()
    }
}
var B = {
    receiveFlower: function(){
        //监听A的状况是否可以送花
        A.listenGoodMood( function(){
            var flower = new Flower()
            A.receiveFlower( flower )
        } )
    }
}
var A = {
    receiveFlower: function(flower) {
        console.log("收到花了！！")
    },
    listenGoodMood: function(fn) {
        setTimeout(() => {
            fn()
        }, 10);
    }
}
xiaoming.sendFlower( B )