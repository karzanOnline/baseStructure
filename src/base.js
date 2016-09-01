/**
 * Created by caozheng on 2016/9/1.
 */
(function (win) {
    win.toolArg = {
        /*
        * 当遇到/socialManagement/infoEntryApproval?detailArgs="{"orderNum":"12331321","d":"asdfsd"}"
        * JSON.parse 会报错 Uncaught SyntaxError: missing ) after argument list
        * 因为项目比较急临时想出解决方案
        * */
        getUrlToJson :function (arg) {
            var _this = this;
            return JSON.parse(_this.getQueryString(arg).replace(/(^\")|(\"$)/g,''));
        },
        /*
        * 适用于/socialManagement/infoEntryApproval?name='karzan'&age='23'
        * 直接调用函数传key
        * */
        getQueryString:function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        }

    }
})(this);