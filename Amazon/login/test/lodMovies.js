const mongoose=requrire('mongoose')

mongoose.connect("mongodb://localhost:27017/user")
.then(()=>{
    console.log('connected');
})
.catch(()=>{
    console.log('error');
})

const tutSchema=new mongoose.Schema({

    name:{
        type:String,
        requrire:true
    },
    password:{
        type:String,
        requrire:true
    },
})

const collection=new mongoose.model('user data',tutSchema)
 