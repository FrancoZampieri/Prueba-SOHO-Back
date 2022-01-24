const Schema = require('mongoose').Schema
const model = require('mongoose').model

const projectSchema = new Schema(
    {
        title:{
            type: String,
            required: true,
            trim: true
        },
        logo:{
            type: String,
            required: true,
        },
        image:{
            type: String,
            required: true,
        },
        bgColor:{
            type: String,
            required: true,
        },
        tags:{
            type: JSON,
            required: true
        },
        buttonColor:{
            type: String,
            required: true,
        },
        text:{
            type: String,
            required: true
        },
        textColor:{
            type: String,
            required: true
        }
    },
    {timestamps:true}
)

module.exports = model('Project', projectSchema)