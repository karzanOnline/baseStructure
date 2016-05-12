/**
 * Created by caozheng on 2016/5/10.
 */
/*函数编程柯里化*/
/*看了张鑫旭的柯里化讲解 来动动小手 =。=*/

var log = console.log.bind(console);
var Currying = function(fn){
    var args = [].slice.call(arguments,1);
    return function(){
        var newArgs = args.concat([].slice.call(arguments));
        //执行回调
        return fn.apply(null,newArgs)
    }
};

var getWife = Currying(function(){
    var allArgs = [].slice.call(arguments);
    log(allArgs.join(','));
},'默认参数');


getWife('参数1','参数2','参数3');