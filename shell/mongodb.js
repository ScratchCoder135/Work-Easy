const mongodb=require('mongodb').MongoClient
function find(data,callback){
    var key=data.key
    var name=data.name
    var col=data.collection
    var q=data.queries
    mongodb.connect(key,async function(err,client){
        const dbo=client.db(name)
        const rslt=await dbo.collection(col).find(q).toArray()
        callback(rslt)
    })
}
function insert(data){
    var key=data.key
    var name=data.name
    var col=data.collection
    var q=data.data
    mongodb.connect(key,async function(err,client){
        const dbo=client.db(name)
        dbo.collection(col).insertMany(q)
    })
}
function update(data){
    var key=data.key
    var name=data.name
    var col=data.collection
    var q=data.queries
    var a=data.set
    mongodb.connect(key,async function(err,client){
        const dbo=client.db(name)
        dbo.collection(col).updateMany(q,a)
    })
}
function del(data){
    var key=data.key
    var name=data.name
    var col=data.collection
    var q=data.queries
    mongodb.connect(key,async function(err,client){
        const dbo=client.db(name)
        dbo.collection(col).deleteMany(q)
    })
}
exports.find=find
exports.insert=insert
exports.update=update
exports.del=del