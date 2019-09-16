const express= require('express');
var router=express.Router();
//var mongoconnection=require('./models/db');
const mongoose=require('mongoose');
const Student=mongoose.model('student');

router.get('/',(req,res)=>{
    res.render("dip.hbs",{
        viewtitle:"Insert Student details"
    
    });
});

router.get('/users',(req,res)=>{
    Student.find((err,docs)=>{
        if(!err)
        {
            res.render("dip",{
                data:docs
            });
        }
    })
});

router.get('/insert',(req,res)=>{
    var email=0;
    res.render("insert.hbs")
    
})

router.post('/insertuser',(req,res)=>{
    insertrecord(req,res)
})

router.get('/delete/:id',(req,res)=>{
    Student.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err)
        {
            res.redirect("/users");
        }
        else{
            console.log("delete error");
        }
    });

})

router.get('/update/:id',(req,res)=>{
    Student.findById(req.params.id,(err,doc)=>{;
        if(!err)
        {
    res.render("update.hbs",{
        data:doc
    });
}
else{
console.log("error at update finbyid");
}
    });
})


var insertrecord=function(req,res){
    var stu=new Student();
    stu.s_reg=req.body.sreg;
    stu.s_name=req.body.sname;
    stu.s_gender=req.body.sgender;
    stu.s_email=req.body.semail;
    stu.s_dob=req.body.sdob;
    stu.s_country=req.body.scountry;
    stu.s_state=req.body.sstate;
    stu.s_district=req.body.sdistrict;
    stu.s_postal=req.body.spostal;
    stu.s_password=req.body.spasswd;
    stu.save((err,doc)=>
    {
        if(!err)
        {
            console.log("starting to insert");
            res.redirect('users');
        }
        else{
            console.log(err);
        }
    });
} 
module.exports=router;
