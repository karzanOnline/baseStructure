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
    var tempArray = [];
    return recursion(tempArray,_this);
};
/**/
function recursion (tempArray,arr){
    //TODO后期性能优化
    if(arr instanceof Array){
        for(var i =0;i<arr.length;i++){
            if(arr[i] instanceof Array){
                tempArray = recursion(tempArray,arr[i])
            }else{
                tempArray = tempArray.concat(arr[i]);
            }
        }
    }
    return tempArray
}