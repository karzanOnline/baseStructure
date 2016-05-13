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
/*数组深度拷贝*/
Array.prototype.deepCopy = function(){
    /*参数数组化*/
    var _this = this;
    var resultArr = [];
    var index = _this.length;
    var args = [].slice.call(arguments);
    var newArray = [];
    /*数组本身值copy*/
    for(var i =0;i<index;i++){
        resultArr[i] = _this[i];
    }
    args = args.flattenings();
    for(var j = 0;j<args.length;j++){
        resultArr[index+j] = args[j];
    }
    /*数组去重*/
    for(var z=resultArr.length;z>=0;i--){
        /*标记是否遇到重复的*/
        for(var m =resultArr.length-1;m>=0;i--){
            if(resultArr[z]==resultArr[m]){
                resultArr.splice(m,1);
            }
        }
    }
    return resultArr
};