const express = require('express')
const fs = require('fs')
const path = require('path')
const vm = require('vm')

const app = express()
const PORT = 3000

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { App } from '../components/App'

app.get('/favicon.ico', function(req, res){
    res.writeHead(200)
    res.end()
})

const processRoute = (req, res) => {
    const template = fs.readFileSync(__dirname + '/../build/indexSvr.html')
    const content = ReactDOMServer.renderToString(<App IsServer={true} Localtion={req.path}/>)
    const result = vm.runInNewContext('`' + template + '`', { 'reactDom': content})

    res.writeHead(200, {"Content-Type": "text/html"})
    res.end(result)
}

app.get('/', processRoute)
app.get('/about', processRoute)

app.use(express.static(path.resolve(__dirname, "../build")))

app.listen(PORT, () => {
    console.log(`Start express server and listening at http://localhost:${PORT}`)
})