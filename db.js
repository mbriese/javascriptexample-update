const dotenv = require('dotenv')
dotenv.config()

const mongodb = require('mongodb')

const connectionString = 'mongodb+srv://todoAppUser:Il0v3J03y@cluster0-8rhuk.mongodb.net/complexapp?retryWrites=true&w=majority'

mongodb.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
    module.exports = client.db()
    const app = require('./app')
    app.listen(process.env.PORT)
  })