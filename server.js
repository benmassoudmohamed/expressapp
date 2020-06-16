const express=require('express')

const app=express()



 app.get('/Home',(req,res)=>{
   res.sendFile(__dirname+'/public/Home page.html')
 })
// app.get('/Services',(req,res)=>{
//     res.sendFile(__dirname+'/public/Our Services.html')
// })
// app.get('/Contact',(req,res)=>{
//     res.sendFile(__dirname+'/public/Contact us.html')
// })


app.use((req,res,next)=>{
    let date=new Date();
    let n = date.getHours();
   if(n<6 || n>7){
    res.send('our office is closed')
        }
next()    
      
})


app.use(express.static(__dirname+'/public'))









app.listen(4000,(err)=>{
    if(err) console.log("server is not runnnig")
    else console.log("server is runnig in port 4000")
})




