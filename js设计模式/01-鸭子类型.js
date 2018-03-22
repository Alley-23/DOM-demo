//鸭子类型
var duck = {
    duckSinging: function() {
        console.log("ggg")
    }
}

var chicken = {
    duckSinging: function () {
        consoel.log("ggg")
    }
}

var choir = []

var joinChoir = function (animal) {
    if (animal && typeof animal.duckSinging === "function") {
        choir.push(animal);
        console.log("加入！！！")
        console.log("数量：" + choir.length)
    }
}

joinChoir(duck);  //加入！！！  数量：1  
joinChoir(chicken);  //加入！！！  数量：2
