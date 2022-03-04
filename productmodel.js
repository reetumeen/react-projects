let mongoose = require('mongoose');
let empSchema = mongoose.Schema(
    {
        category_id:
        {
            type: Number,
            required: true
        },
        product_name:
        {
            type: String,
            required: "name is required"
        },
        product_id:
        {
            type: Number,
            required: true
        },
        product_price:
        {
            type: String,
            required: true
        },
        product_image:
        {
            type: String,
            required: true
        },
       
    });
module.export= mongoose.model("Products",empSchema);