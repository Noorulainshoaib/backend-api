const {Schema,model} = require('mongoose')

const CategorySchema = new Schema (
    {
        CategoryName:{
            type: String,
            unique: true,
            required: true
        },
        CategoryImage:{
            type: String,
            required: true
        }
    }
) 

const Category=model('çategory' ,CategorySchema)
module.exports = Category