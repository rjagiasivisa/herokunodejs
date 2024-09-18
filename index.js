const express = require('express')
const path = require('path')
const apioutput = require('./apioutput.js')

const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .post('/callback/:appId/:apiType', (req, res) => {
    data = apioutput.output(req);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
