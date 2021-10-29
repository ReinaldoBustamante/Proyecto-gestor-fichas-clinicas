const express = require('express');
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// FIX CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// MYSQL

const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'password',
    database        : 'clinica_fedent'
})

// GET PACIENTES

app.get('/paciente', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from paciente', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })
})

// GET PACIENTES ID
app.get('/paciente/:id', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from paciente WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })

})

// GET ODONTOLOGO
app.get('/odontologo', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from odontologo', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })
})


//GET TONS

app.get('/tons', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from tons', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })
})   


//GET ODONTOGRAMA

app.get('/odontograma', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from odontograma', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })
})



//GET HISTORIAL CLINICO

app.get('/historial_clinico', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from odontologo', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })
})


//GET FICHA CLINICA

app.get('/ficha_clinica', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from ficha_clinica', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })
})

// GET DATOS CLINICOS

app.get('/datos_clinicos', (req, res) => {

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log(`conected as id ${connection.threadId}`)

        connection.query('SELECT * from datos_clinicos', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err){
                res.send(rows)
            } else{
                console.log(err)
            }
        })
    })
})

// Listen on enviroment port or 5000

app.listen(port,() => console.log(`Listen on port ${port}`))