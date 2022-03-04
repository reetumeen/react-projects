var mongoose = require('mongoose');
var Task = mongoose.model('Datas');



exports.list_all_tasks = function(req,res)
{
    Task.find({},function(err,result)
    {
        if(err)
           throw err;
        res.json(result);
    })
}

exports.create_a_task = function(req,res)
{   var new_task = new Task(req.body);
    new_task.save(function(err,result)
    {
        if(err)
           throw err;
           if(result)
           {
            res.json({"result":"success"});
           }
           else
           {
            res.json({"result":"failed"});

           }
        
    });
};

exports.user_login = function(req,res){
    let email = req.body.email; 
    let password = req.body.password;
    console.log(req.body);
    Task.find({$and:[{"email":email},{"password":password}]},function(err,task){
        if(err) 
            res.send(err);
            if(task.length>0){
                res.json({"result":"success"})
            }
            else{
            res.json({"result":"failed"});
            }
    });
};  

exports.read_a_task = function(req,res)
{
    Task.findById(req.params.taskId,function(err,result)
    {
        if(err)
           throw err;
        res.json(result);
    })
}

exports.update_a_task = function(req,res)
{
    Task.findOneAndUpdate({_id:req.params.taskId},req.body,{new:true},function(err,result)
    {
        if(err)
           throw err;
        res.json(result);
    })
}

exports.delete_a_task = function(req,res)
{
    Task.remove({_id:req.params.taskId},function(err,result)
    {
        if(err)
           throw err;
        res.json("Task Deleted successfully");
    })
}
