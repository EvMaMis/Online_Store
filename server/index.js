require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')
const ApiError = require('./error/ApiError')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/static', express.static(path.resolve(__dirname, 'static')))
console.log(path.resolve(__dirname, 'static'))
app.use(fileUpload({}))
app.use('/api', router)
app.use(errorHandler)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(5000, callback => console.log(`Server started on port ${5000}`))
    } catch (e) {
        console.log(e)
    }
}

start()