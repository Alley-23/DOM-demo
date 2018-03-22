/**
 *  绩效类型   |  年终奖倍数
 * -------------------------
 *  S         |  4
 * -------------------------
 *  A         |  3
 * -------------------------
 *  B         |  2
 * -------------------------
 */

 var bouns = function(level, salary) {
     if (level === "S") {
         return salary * 4
     }
     if (level === "A") {
         return salary * 3
     }
     if (level === "B") {
         return salary * 2
     }
 }

console.log(bouns("S", 2000))  //8000
console.log(bouns("A", 2000))  //6000
console.log(bouns("B", 2000))  //4000

/**
 * 缺点：大量if-else判断，缺乏弹性，算法复用性差
 */

//  使用策略模式重构
var strategies = {
    "S": function(salary){
        return salary * 4
    },
    "A": function(salary){
        return salary * 3
    },
    "B": function(salary){
        return salary * 2
    }
}

var bouns = function (level, salary) {
    return strategies[level](salary);
}

console.log(bouns("S", 4000)) //16000
console.log(bouns("A", 4000)) //12000
console.log(bouns("B", 4000)) //8000