const d=require('geoip-lite')
function ip(ip){
    var s=d.lookup(ip)
    return s;
}
exports.ip=ip