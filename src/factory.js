/**
 * Created by caozheng on 2016/6/6.
 */

var TrafficLight = function () {
    var count = 0;
    var currentState = new Red(this);

    this.change = function (state) {
        // limits number of changes
      if (count++ >= 10) return;
       currentState = state;
       currentState.go();
    };
    this.start = function () {
        currentState.go();
    };
};
var Red = function (light) {
     this.light = light;

     this.go = function () {
         log.add("Red --> for 1 minute");
         light.change(new Green(light));
     }
};
 var Yellow = function (light) {
     this.light = light;

     this.go = function () {
         log.add("Yellow --> for 10 seconds");
         light.change(new Red(light));}
     };
 var Green = function (light) {
     this.light = light;

     this.go = function () {
         log.add("Green --> for 1 minute");
         light.change(new Yellow(light));}
     };
var log = (function () {
    var log = "";
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();
function run() {
     var light = new TrafficLight();
     light.start();

     log.show();
}
//run();
/*添加状态管理机制*/
var StateManagement = function(){
    var currState = 'wait';
    var status = {
        jump : function(state){

        },
        wait : function(state){

        },
        run : function(state){

        },
        attack : function(state){

        },
        crouch : function(state){

        },
        defense : function(state){
            if(currState=='jump'){
                return false; //跳跃的时候不能防御
            }
            currState = 'defense';
        }
    };
    var changeState = function(state){
        status[state] && status[state]();
    };
    return {
        changeState : changeState
    }
};
var stateManagement = StateManagement();
stateManagement.changeState('defense');
/*比较low的写法、没有逼格、性能差、阅读费劲
*  dome
* */
/*空调都用过吧
* */
var switches = (function(){  //auto->hot->cold->wind->dry->auto
    var state = "auto";
    console.log(state+"2");
    return function(){
        if(state === "auto"){
            console.log("制热");
            state = "hot";
        }else if(state === "hot"){
            console.log("制冷");

            state = "cold";
        }else if(state === "cold"){
            console.log("送风");
            state = "wind";
        }else if(state === "wind"){
            console.log("除湿");
            state = "dry";
        }else if(state === "dry"){
            console.log("自动");
            state = "auto";
        }
    }
})();

