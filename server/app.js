const express = require('express')
const cors = require('cors')
require('dotenv').config()
const {GoogleGenerativeAI} = require('@google/generative-ai')

const genAI = new GoogleGenerativeAI(process.env.API_KEY)

const app = express()
app.use(cors())
const model = genAI.getGenerativeModel({model: 'models/gemini-pro'})
const chat = model.startChat()

app.get('/', (req, res) => {
    async function run(prompt){
        const result = await chat.sendMessage(prompt)
        const response = result.response
        const text = response.text()
        res.status(200).json({success: true, response: text})
    }
    run(req.query.prompt)
    // console.log(req.params.prompt)
})
app.listen(5050, () => {
    console.log('Listening on port 5050...');
})