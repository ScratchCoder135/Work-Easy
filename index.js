const g=require("./shell/httpsres")
const n=require("./shell/httpres")
const m=require("./shell/mongodb")
const C=require("./shell/console")
const a=require("./shell/geo")









const pkg=function(){}
pkg.prototype.c=function(value){
    C.l(value)
}
module.exports={
    https:g,
    http:n,
    mongodb:m,
    wz:pkg,
    geo:a,
}
