# [Work-EZ](https://work-ez.netlify.app/)
Click to view our site!

### A tool that makes you work easier.

# 🔽Install
```bash
$ npm i work-ez
```

# ❓Usage
We simplified these modules and combined them into one package!
- Node.js Console.log
- MongoDB
- Geo-IP
- HTTP(GET)
- HTTPS(GET)

## 💲Node.js Console.log
Log to console faster!
```js
const k=require("work-ez")
var b=new wz() //init new wz object

b.c("Message To console!")
```
Output:
```
Message To console!
```

## 🍃MongoDB
Fetching data easier.
### Handle `insertMany()` command
```js
const k=require("work-ez")
k.mongodb.insert({key:process.env.CONNECTION_KEY,name:"Serverfrmme",collection:"my-collection",data:[{username:"1234"}]})
//This package use .insertMany() to handle insert command
```
### Handle `find()` command
```js
const k=require("work-ez")
k.mongodb.find({key:process.env.CONNECTION_KEY,name:"Serverfrmme",collection:"my-collection",queries:{username:"1234"}},function(callback){
    console.log(callback)
})
//Make sure to put your callback and the queries
```
Output:
```
[{
    username:"1234",
    password:"5678"
}]
```
### Handle `updateMany()` command
```js
const k=require("work-ez")
k.mongodb.update({key:process.env.CONNECTION_KEY,name:"mydb",collection:"my-collection",queries:{username:"1234"},set:{$set:{username:"1357"}}})
//This package use .updateMany() to handle update command
```
### Handle `deleteMany()` command
```js
const k=require("work-ez")
k.mongodb.del({key:process.env.CONNECTION_KEY,name:"mydb",collection:"my-collection",queries:{username:"1234"}})
//This package use .deleteMany() to handle del command
```
## 🗺️Geo-IP
Get the location!
```js
const k=require("work-ez")
console.log(k.geo.ip("222.22.21.1"))
//Use the callback data to make use of the data.
```
Output(Example):
```
{ range: [1234567, 123455667788 ],
  country: 'AB',
  region: 'CD',
  eu: '9',
  timezone: 'Example/Timezone',
  city: 'Lorem Ipsum',
  ll: [ 22.2, 33.33 ],
  metro: 123,
  area: 1000 }
```
## 🌎HTTP get(not secure)
Handle HTTP requests easily!
```js
const k=require("work-ez")
k.http.httpget("http://www.myurl.com",function(callback){
    console.log(callback)
})
```
Output:
```html
<!DOCTYPE html>
<head><title>Hello from http!</title></head>
<body><h1>HTTP!</h1></body>
```
## 🌎HTTPS get
Handle HTTPS requests easily!
```js
const k=require("work-ez")
k.https.httpsget("https://www.myurl.org",function(callback){
    console.log(callback)
})
```
Output:
```html
<!DOCTYPE html>
<head><title>Hello from https!</title></head>
<body><h1>HTTPS!</h1></body>
```

# ISSUES
Please report at our Github Page.