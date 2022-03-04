var mongoose = require('mongoose');
var Task = mongoose.model('Carts');
var Product = mongoose.model('Products');

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
{   
    var email = req.body.email;
    var ID = req.body.id;
    console.log(req.body);

    Product.find({"product_id":ID},function(err,result)
    {
        if(err)
           throw err;
        addToCart(req,res,email,ID,result[0].product_name,result[0].product_price,result[0].product_image);
    })
}

function addToCart(req,res,email,id,name,price,image)
{
    let cartData = {"email":email,"product_id":id,"product_name":name,"product_price":price,"product_image":image};
    console.log(cartData);

    var new_task = new Task(cartData);
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
            res.json({"result":"error"});
        }
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
