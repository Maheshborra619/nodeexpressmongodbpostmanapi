const express=require('express');
const mongoose= require('mongoose');
const app = express();
const employee = require('./routes/employees')

mongoose.connect('mongodb://localhost/maheshdatabase',{useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=>{
      console.log("connected")
  })
  .catch((err)=>{
      console.log(err)
  })

const connection = mongoose.connection

//middleware
app.use(express.json());
app.use('/mahesh',employee);



connection.on('open',()=>{
    console.log("mongodb connecetd")
})

const PORT = 8000;

app.listen(PORT,()=>{
    console.log("server is listening at piort==8000")
})
  