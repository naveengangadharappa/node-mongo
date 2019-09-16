const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/studentdb',{ useUnifiedTopology: true, useNewUrlParser: true},(err)=>{
if(!err)
{
    console.log('MongoDB connection successful');
}
else{
    console.log('MongoDB connection error : '+err);
}
});
require('./student.model');