var hexoHadesLive2d = hexoHadesLive2d || {};
module.exports = hexoHadesLive2d;
(function () {

    /** Used as a safe reference for `undefined` in pre-ES5 environments. */
    var undefined;

    /** Used as the semantic version number. */
    var VERSION = '1.0.2';

    function add0(m) {
        return m < 10 ? '0' + m : m
    }

    function dateFormat(date, type) {
        //shijianchuo是整数，否则要parseInt转换
        var date_temp = 0;
        if (Number.isInteger(date)) {
            date_temp = date;
        } else {
            date_temp = parseInt(date);
        }
        // 年 月 日 //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var temp_t = date_temp.toString().length === 10 ? date_temp * 1000 : date_temp;
        var time = new Date(temp_t);
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        //  格式自定义
        switch (type) {
            case 1://2018.5.28
                return y + '.' + this.add0(m) + '.' + this.add0(d);
            case 2://05-05 5月5号
                return this.add0(m) + '-' + this.add0(d);
            case 3:// 12:01  12点零1分
                return this.add0(h) + ':' + this.add0(mm);
            case 4:// 2018-03-07
                return y + '-' + this.add0(m) + '-' + this.add0(d);
            case 5:// 12:30:30  12点30分30秒
                return h + ':' + this.add0(mm) + ':' + this.add0(s);
            case 6:// 2018-5-28
                return y + '-' + m + '-' + d;

            case 7:// 2018-5-28
            {
                var hours = time.getHours();
                var minutes = time.getMinutes();
                var ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0' + minutes : minutes;
                var strTime = hours + ':' + minutes + ' ' + ampm;
                return strTime;
            }
        }
    }
    hexoHadesLive2d.add0 = add0;
    hexoHadesLive2d.dateFormat = dateFormat;
    hexoHadesLive2d.VERSION = VERSION;
}.call(this));