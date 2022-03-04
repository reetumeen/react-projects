var mongoose = require('mongoose');
var Task = mongoose.model('Categories');

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
        res.json(result);
    })
}

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
