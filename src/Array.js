/**
 * Created by caozheng on 2016/5/9.
 */

/*二维数组扁平化*/
Array.prototype.flattening = function(){
    var _this = this;
    var tempArray = [];
    for(var i =0;i<_this.length;i++){
        tempArray = tempArray.concat(_this[i])
    }
    return tempArray
};
/*多维数组扁平化*/
Array.prototype.flattenings = function(){
    var _this = this;
    return recursion(_this);
};
/**/
function recursion (arr){
    var tempArray = [];
    if(arr instanceof Array){
        for(var i =0;i<arr.length;i++){
            if(arr instanceof Array){
                tempArray = recursionConcat(tempArray,arr[i])
            }else{
                tempArray = tempArray.concat(arr[i]);
            }
        }
        return tempArray
    }else{
        return tempArray
    }
}
function recursionConcat (tempArray,array){
    if(array instanceof Array){
        /*当前循环对象为数组*/
        for(var i = 0; i<array.length;i++){
            if(array[i] instanceof Array){
                /*触发递归*/
                tempArray = recursionConcat(tempArray,array[i]);
            }else{
                tempArray = tempArray.concat(array[i]);
            }
        }
        return tempArray
    }else{
        return tempArray
    }
}