const utility={
    uniqueArr(arr) {
        return Array.from(new Set(arr))
    }
}

var url='https://wx2.sinaimg.cn/orj360/00763XoIly1gykjjblkf2j30rs0wz0v1.jpg'

url.match(/(?<=(.+sinaimg\.(?:cn|com)\/))([\w\.]+)(?=(\/.+))/i)
let a=/(?<=(.+alicdn\.(?:cn|com)\/))([\w\.]+)(?=(\/.+))/i


var url='https://cbu01.alicdn.com/img/ibank/O1CN01pnaus91bsfGLA3GvP_!!983573521-0-cib.310x310.jpg_.webp'
url.match(/((.+alicdn\.(?:cn|com)\/.+)(\.\w+)(\.(jpg|jpeg|gif|png|bmp|webp)))/i)
var test=url.replace(/(.+alicdn\.(?:cn|com)\/.+)(\.\d+x\d+)(\.(jpg|jpeg|gif|png|bmp|webp)).+/i,
(match,p1,p2,p3)=>p1+p3)