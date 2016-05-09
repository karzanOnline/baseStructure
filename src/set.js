
/*
* 创建一个集合的构造函数
* set数据类型
* by caozheng
* */
function Set(){
    /*
    * 用数组模拟集合*/
    var items = {};
    /*
    * 检测集合中是否有某元素*/
    this.has = function(value){
        return items.hasOwnProperty(value)
    };
    /*
    * 向集合中添加不重复的元素*/
    this.add = function(value){
        /*检测不存在*/
        if(!this.has(value)){
            items[value] = value;
            return true
        }
        return false
    };
    /*从集合中去除某元素*/
    this.remove = function(value){
        /*检测存在*/
        if(this.has(value)){
            delete items[value];
            return true
        }
        return false
    };
    /*清空集合*/
    this.clear = function(){
        var arr = Object.keys(items)||[];
        /*第一种方法*/
        arr.forEach(function(value,index){
            delete items[value]
        });
        /*第二种方法
        *  -.-直接清空 爱咋咋地
        * */
        //this.items ={}
    };
    /*集合大小*/
    this.size =  function(){
        var arr = Object.keys(items)||[];
        return arr.length
    };
    /*获取集合所有属性*/
    this.keys = function(){
        var _this = this;
        return Object.keys(_this.items)
    };
    /*获取集合所有的值*/
    this.values = function(){
        var array = Object.keys(items).map(function(val){
            return items[val]
        });
        return array
    };
    /*获取两个集合的并集*/
    this.union = function(otherSet){
        var result = new Set();
        this.keys().forEach(function(value,index){
            result.add(value)
        });
        otherSet.keys().forEach(function(value){
            result.add(value)
        });
        return result
    };
    /*获取两个集合的交集*/
    this.intersection = function(otherSet){
        var _this = this;
        var tempArray = [];
        var tempSet = new Set();
        /*赋值给最大的数组*/
        (_this.size()>=otherSet.size())?(tempArray = _this.keys()): (tempArray = otherSet.keys());
        tempArray.forEach(function(val){
            if(otherSet.has(val)){
                tempSet.add(val);
            }
        });
        return tempSet
    };
    /*获取两个集合的差集*/
    this.difference = function(otherSet){
        var _this = this;
        var tempArray = [];
        var tempSet = new Set();
        /*赋值给最大的数组*/
        (_this.size()>=otherSet.size())?(tempArray = _this.keys()): (tempArray = otherSet.keys());
        tempArray.forEach(function(val){
            if(!otherSet.has(val)){
                tempSet.add(val);
            }
        });
        return tempSet
    };
    /*判断传入集合是否为当前集合的子集*/
    this.subset = function(otherSet){
        var _this = this;
        var otherSetKeys = otherSet.keys();
        if(otherSetKeys<_this.keys()){
            return false
        }else{
            for(var i =0;i<otherSetKeys;i++){
                if(!_this.items.has(otherSetKeys[i])){
                    return false
                }
            }
        }
        return true
    }

}