# carousel-图文轮播
### 效果图
![image](https://github.com/Alley23/images-sources/blob/master/images/carousel-01.png)

### 用法


```
//new一个Carousel实例
//传值： { data: arr , changeTime: num}
var data = [
        {
            "picUrl": "images/banner01.jpg",
            "text": "01，测试文本测试文本测试文本！",
            "author": "LIAKI01",
            "authorUrl": "images/a01.png"
        },
        {
            "picUrl": "images/banner02.jpg",
            "text": "02，测试文本测试文本测试文本！",
            "author": "LIAKI02",
            "authorUrl": "images/a02.png"
        },
        {
            "picUrl": "images/banner03.jpg",
            "text": "03，测试文本测试文本测试文本！",
            "author": "LIAKI03",
            "authorUrl": "images/a03.png"
        },
        {
            "picUrl": "images/banner04.jpg",
            "text": "04，测试文本测试文本测试文本！",
            "author": "LIAKI04",
            "authorUrl": "images/a01.png"
        },
        {
            "picUrl": "images/banner05.jpg",
            "text": "05，测试文本测试文本测试文本！",
            "author": "LIAKI05",
            "authorUrl": "images/a02.png"
        } 
    ]

var carousel = new Carousel({
    data,
    changeTime: 4000
})
```
