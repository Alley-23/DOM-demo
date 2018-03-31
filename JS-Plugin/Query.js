class Query {
    constructor() {
        this.init()
    }
    init() {
        //创建一个空参数对象
        this.params = {};
        //判断参数不为空并且不能直有问号
        if (window.location.search != "" && window.location.search != "?") {
            //对参数进行截取并转为数组进行循环处理
            window.location.search.substring(1).split('&').map(value => {
                //对每个字符串再次进行截取拼接键值对
                var symbol = value.split('=');
                //需要对参数进行解码
                this.params[decodeURIComponent(symbol[0])] = decodeURIComponent(symbol[1]);
            })
        }
        //返回得到的数据
        return this;
    }
    //获取参数
    get(k) {
        return this.params[k];
    }
    //设置参数
    set(k, v) {
        this.params[k] = v;
        return this;
    }
    //清除参数
    remove(k) {
        delete this.params[k]
        return this;
    }
    //清空参数
    empty() {
        this.params = {}
        return this;
    }
    //拼接URL参数字符串
    toString() {
        var strArr = [], prev = null;
        for (const k in this.params) {
            if ((prev = this.params[k]) === '' || typeof prev === 'null' || typeof prev === 'undefined') {
                delete this.params[k]
            } else {
                strArr.push(encodeURIComponent(k) + "==" + encodeURIComponent(prev))
            }
        }
        return (strArr.length > 0) ? ('?' + strArr.join('&')) : '';
    }
}

module.exports = Query;