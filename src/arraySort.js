
//插入排序算法

var insertSort = function (array){
    var len = array.length,
        i, j, temp, result;
    
    result = array.slice(0);

    for (i=1; i < len; i++ ){
        //指针指向的值
        temp = result[i];
        //当前指针指向的值的前一个数组下标
        j = i - 1;

        //每一次插入都进行一次排序

        while(j>=0 && temp < result[j]){
            result[j+1] = result[j];
            j--;
        }

        result[j+1] = temp;

    }
    return result
    
    
}

// 优化数组遍历去重

/**
 * 需要的是去重后的数组 => result => 
 * 遍历的时候如果出现重复就把当前的指针往后跳,直到后面没有重复的数值出现了在把它保存到result
 */

var optArray = function (array){
    
    var len = array.length,
        result = [];
    
    for(var i = 0; i<len; i++){
        
        for(var j = i+1; j<len; j++){
            // 出现重复的数值 指针向后走
            array[j] === array[i] && (j = ++i) 
        }
        
        result.push(array[i]);
    }
    return result

}

// 数组去重(非对象去重) 
// 思想：最近在正则用的比较多所以利用的遍历的速度快的优势来去重

/**
 * 这里有一个缺点是没法匹配数组的元素是对象
 */

var reArray = function (array){
    
    var str = array.split(''),
        arr = [];

    while(str.length >= 0){

        var temp = str.charAt(0)

        arr.push(temp)

        str.replace(eval("/"+temp+"/g"), "")

    };

    return arr

}





