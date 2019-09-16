const mongoose=require('mongoose');

var studentschema=new mongoose.Schema({
    s_name:{
        type:String,
        required:'This field is required'
    },
    s_gender:{
        type:String,
        required:'This field is required'
    },
    s_dob:{
        type:String,
        required:'This field is required'
    },
    s_email:{
        type:String,
        required:'This field is required'
    },
    s_country:{
        type:String,
        required:'This field is required'
    },
    s_state:{
        type:String,
        required:'This field is required'
    },
    s_district:{
        type:String,
        required:'This field is required'
    },
    s_postal:{
        type:String,
        required:'This field is required'
    },
    s_password:{
        type:String,
        required:'This field is required'
    },
    s_reg:{
        type:String,
        required:'This field is required'   
    }
    
});

mongoose.model('student',studentschema);