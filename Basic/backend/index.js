const express = require("express");
const mongoose = require("mongoose");
const app= express();
const port = 8080;
const cors = require("cors");

const userSchema = mongoose.Schema({
    firstname:{
        type: String,
        required:true
    },
    lastname:{
      type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    salary:{
        type:String
    }
});
 mongoose.connect('mongodb://127.0.0.1:27017/humaradb')
 .then(()=> console.log("Connect successfully!"))
 .catch((err)=> console.log("Found Error", err));
 const Emp = mongoose.model('emp', userSchema);

//  middleware
app.use(express.json());
app.use(cors());

// Routes

app.post('/', async (req, res) =>{
    const {firstname,lastname,email,salary} = req.body
    console.log(firstname,lastname,email,req.body.firstname);
    const result = await Emp.create({
        firstname : firstname,
        lastname : lastname,
        email : email,
        salary : salary
    })
    return res.send({msg:"Success"})
})

app.get('/', async (req, res) =>{
    const result = await Emp.find()
    return res.send(result);
})

app.get('/:id', async (req, res) =>{
    const id = req.params.id;
    const result = await Emp.findById(id);
    return res.send(result);
})

app.patch('/:id', async (req, res) =>{
    const id = req.params.id;
    const result = await Emp.findByIdAndUpdate(id,req.body)
    return res.send({msg:"Success"});
})

app.delete('/:id', async (req, res) =>{
    const id = req.params.id;
    const result= await Emp.findByIdAndDelete(id)
    return res.send({msg:"Delete Successfully"});
})

app.listen(8080 , () => console.log(`your server is running on ${8080}`));