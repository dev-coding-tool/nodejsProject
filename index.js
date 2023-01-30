const express = require('express')
const app = express()
const port = 5000

const { User } = require('./model/User');
const bodyParser = require('body-parser');

//application/x-www-=form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://jinhyuk:jinhyuk@mongodb.ifx2wdn.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req, res) => {
  //회원가입시 필요한 정보들을 client 에서 가져오면
  //그것들을 DB에 넣음
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  });


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})