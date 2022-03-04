let mongoose = require('mongoose');
let empSchema = mongoose.Schema(
    {
        category_id:
        {
            type: Number,
            required: true
        },
        category_name:
        {
            type: String,
            required: "name is required"
        },
        category_image:
        {
            type: String,
            required: true
        },
       
    });
module.export= mongoose.model("Categories",empSchema);