import express from 'express'
import path from 'path'
import template from './template'
import server from './server'

const app = express()

app.use('/assets', express.static(path.resolve(__dirname, '../assets')));

app.disable('x-powered-by');
app.listen(process.env.PORT || 3000);

app.get('/', (req, res) => {
  const { content}  = server()
  const response = template("Server Rendered Page", content)
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});

app.get('/client', (req, res) => {
  let response = template('Client Side Rendered page')
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response)
});