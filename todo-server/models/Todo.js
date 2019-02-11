const { Schema, model, Types } = require('mongoose')

const todoSchema = new Schema({
    id: { type: Types.ObjectId },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now }
})

module.exports = model('Todo', todoSchema)