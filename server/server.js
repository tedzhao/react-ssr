const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = 3000

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { App } from '../components/App'

import { Provider as ReduxProvider } from "react-redux";
import createStore from "../redux/store"

app.get('/favicon.ico', function(req, res){
    res.writeHead(200)
    res.end()
})

const processRoute = (req, res) => {
    const template = fs.readFileSync(__dirname + '/../build/indexSvr.html', 'utf-8')

    const defaultData = { "count": 10000 }
    const store = createStore(defaultData)

    const content = ReactDOMServer.renderToString(
        <ReduxProvider store={store}>
            <App IsServer={true} Localtion={req.path}/>
        </ReduxProvider>
    )

    const dataStr = JSON.stringify(defaultData)
    const result = template.replace('<!--HTML_PLACEHOLDER-->',         content)
                           .replace('<!--INITIAL_DATA_PLACEHOLDER-->', `<script>window.__initial_data=${dataStr}</script>`)

    res.writeHead(200, {"Content-Type": "text/html"})
    res.end(result)
}

app.get('/', processRoute)
app.get('/about', processRoute)

app.use(express.static(path.resolve(__dirname, "../build")))

app.listen(PORT, () => {
    console.log(`Start express server and listening at http://localhost:${PORT}`)
})