const express=require('express')
const app=express()
const crypto=require('crypto')
app.use((req, res, next) => {
	res.set({ "Access-Control-Allow-Origin": "*" })
	next()
})
app.get('/profile_search',(req,res)=>{
    const temp={}
    for (let index = 0; index < 20; index++) {
        temp[crypto.randomBytes(10).toString('hex')]='test'
    }
    res.json(temp)
})
app.get('/home_search',(req,res)=>{
    const temp={}
    for (let index = 0; index < 50; index++) {
        temp[crypto.randomBytes(10).toString('hex')]='test'
    }
    res.json(temp)
})
app.listen(8080)