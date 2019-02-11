const express = require('express')
const router = express.Router()

const Todo = require('../models/Todo')

router.post('/add-item', async (req, res) => {
    const { text } = req.body

    await new Todo({
        text: text
    }).save((error, result) => {
        if (error) {
            console.log(`Error at save todo: ${error.message}`)
            res.status(500).json({
                message: `Error at save todo: ${error.message}`
            })
        }
        if (result) {
            console.log(`Save success`)
            res.status(200).json({
                message: 'Save success'
            })
        }
    })
})

router.get('/todos', async (req, res) => {
    const todosData = await Todo.find()
    res.status(200).json({ todos: todosData })
})

module.exports = router    