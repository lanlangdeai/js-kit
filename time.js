/*
Description: 时间相关方法
Author     : X-Wolf
Date-Time  : 2018-9-17 14:36:15
 */

// 获取当前时间戳
function nowTimestamp()
{
	return Date.parse(new Date)/1000;
}

// 将日期转化成时间戳	 2014-01-01 20:20:20	
function datetimeToUnix(datetime)
{
	var f = datetime.split(' ', 2);
    var d = (f[0] ? f[0] : '').split('-', 3);
    var t = (f[1] ? f[1] : '').split(':', 3);
    // return (new Date(
    var now = (new Date(
            parseInt(d[0], 10) || null,
            (parseInt(d[1], 10) || 1) - 1,
            parseInt(d[2], 10) || null,
            parseInt(t[0], 10) || null,
            parseInt(t[1], 10) || null,
            parseInt(t[2], 10) || null
            )).getTime() / 1000;
    console.log(now);
}

// 将时间戳转化成便于阅读的时间格式 
function unixToDatetime(unixTime, isFull, timeZone)
{
	if (typeof (timeZone) == 'number')
    {
        unixTime = parseInt(unixTime) + parseInt(timeZone) * 60 * 60;
    }
    var time = new Date(unixTime * 1000);
    var ymdhis = "";
    ymdhis += time.getUTCFullYear() + "-";
    ymdhis += (time.getUTCMonth()+1) + "-";
    ymdhis += time.getUTCDate();
    if (isFull === true)
    {
        ymdhis += " " + time.getUTCHours() + ":";
        ymdhis += time.getUTCMinutes() + ":";
        ymdhis += time.getUTCSeconds();
    }
    return ymdhis;
}