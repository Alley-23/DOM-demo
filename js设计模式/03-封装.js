/* 
封装的目的就是将信息隐藏；
封装应该被视为“任何形式的封装”，不仅仅是数据，还包括实现细节，设计细节，以及隐藏对象的类型等等；

其他对象或用户都不关心它的内部实现，封装使得对象之间解耦，对象之间只通过暴露的API来通信。
*/

var Plane = function() {
    this.blood = 100;
    this.attackLevel = 1;
    this.defenseLevel = 1;
}

var plane = new Plane();
