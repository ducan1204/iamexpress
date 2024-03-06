const express = require('express')
const { readFile } = require('fs').promises
const app = express()
app.get('/', async(request, response) => {
    response.send(await readFile('./index.html', 'utf-8'))
    readFile('./index.html', 'utf-8', (err, html) => {
        if (err) {
            response.status(500).send('a')
        }

        response.send(html)
    })
})

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))