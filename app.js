// Include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generate_trash_talk')
const app = express()
const port = 3000

const occupations = [
  {
    'chineseTitle': '工程師',
    'englishTitle': 'engineer',
    'image': 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5668/angry-developer.jpg',
    'id': '1'
  },
  {
    'chineseTitle': '設計師',
    'englishTitle': 'designer',
    'image': 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5667/angry-designer.jpg',
    'id': '2'
  },
  {
    'chineseTitle': '創業家',
    'englishTitle': 'entrepreneur',
    'image': 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5669/angry-founder.jpg',
    'id': '3'
  }
]


// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index', { occupations })
})

app.post('/', (req, res) => {
  const option = req.body
  const trashTalk = generateTrashTalk(option)
  res.render('index', { occupations, trashTalk })
})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on http://localhost: ${port}`)
})