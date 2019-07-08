const express = require('express')
const app = express()

app.use(express.static('/index.html'));

app.get('/', (req, res) => {
  res.send('HEY yo!')
})

app.listen(3456, () => console.log('Server running on port 3456'))