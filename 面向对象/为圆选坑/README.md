# 面向对象demo
### 效果图
![image](https://github.com/Alley23/images-sources/blob/master/images/oop.gif)
### 用法
```
//参数可以自行配置,实例化三个对象
new ChangeItem(
    {
        "diameter" : 50,
        "num" : 3,
        "bgcolor" : "#2196f3"
    }
)

//循环生成多个实例
for (let i = 0; i < 8; i++) {
    new ChangeItem(
        {
            "diameter": 100,
            "num": 5,
            "bgcolor": "#ff9800"
        }
    ) 
}
```