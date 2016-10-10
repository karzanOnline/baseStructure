/**
 * Created by caozheng on 2016/5/9.
 */

/* 二维数组扁平化*/
Array.prototype.flattening = function () {

    let _this = this,
        tempArray = [];

    for (let i = 0; i < _this.length; i++) {

        tempArray = tempArray.concat(_this[i]);
    }

    return tempArray;
};

/* 多维数组扁平化*/
Array.prototype.flattenings = function () {

    let _this = this,
        tempArray = [];

    return recursion(tempArray, _this);
};
/**/

function recursion(tempArray, arr) { 

    // TODO后期性能优化
    if (arr instanceof Array) {
        for (let i = 0; i < arr.length; i++) {

            arr[i] instanceof Array?(tempArray = recursion(tempArray, arr[i])):
                (tempArray = tempArray.concat(arr[i]));     
        }
    }

    return tempArray;
}


/* 数组深度拷贝*/
// 数组扁平化+去重
Array.prototype.deepCopy = function () {

    /* 参数数组化*/
    let _this = this;
    let resultArr = [];
    let index = _this.length;
    let args = [].slice.call(arguments);

    /* 数组本身值copy*/
    for (let i = 0; i < index; i++) {

        resultArr[i] = _this[i];
    }

    args = args.flattenings();

    for (let j = 0; j < args.length; j++) {

        resultArr[index + j] = args[j];
    }

    /* 数组去重*/
    for (let z = resultArr.length - 1; z >= 0; z--) {

        for (let m = z - 1; m >= 0; m--) {
            
            resultArr[z] == resultArr[m]&&resultArr.splice(m, 1);
        }
    }
    return resultArr;
};

// 不限层级数组深度拷贝
// 重新开辟一块内存
Array.prototype.extendArray = function (arr) {
    
    return function circulation(arr) {

        let newArr = [];
        if (arr instanceof Array) {
            for (let i = 0; i < arr.length; i++) {
                
                arr[i] instanceof Array?(newArr[i] = circulation(arr[i])):(newArr[i] = arr[i])
            }
            return newArr;
        }
    };
};

