//@obj
//@ att  fixed
function adsorbTop(obj, att) {
    var ot = obj.offsetTop;
    document.onscroll = function() {
        var st = document.body.scrollTop || document.documentElement.scrollTop;
        obj.setAttribute(att, st >= ot && "fixed")
    }
}