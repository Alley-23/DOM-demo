/* 
高阶函数至少满足下列条件之一
    1.函数可以作为参数被传递
    2.函数可以作为返回值输出
*/

//函数作为参数被传递
//1.回调函数
var getInfo = function(id, callback) {
    $.ajax("XXXXXX?"+id, function(data){
        if (typeof callback === "function") {
            callback(data)
        }
    })
}
getInfo(123, function(data){
    console.log(data)
})

//比如在页面创建100个div节点，然后设置为隐藏，我们将隐藏样式抽离出来作为回掉函数传入
var appendDiv = function(callback) {
    for(var i = 0; 1 < 100; i++){
        var div = document.createElement("div");
        div.innerHTML = 1;
        document.body.appendChild(div);
        if (typeof callback === "function") {
            callback(div)
        }
    }
}
appendDiv(function(node){
    node.style.display = "none";
})


//2.作为返回值输出
