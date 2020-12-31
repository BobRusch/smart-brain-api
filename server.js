const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

require('dotenv').config();

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: 'smart-brain'
  },
});

db.select('*')
  .from('users')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/', (erq, res) => {
  res.json(database.users);
});

app.post('/signin', signin.handleSignin(db, bcrypt));
app.post('/register', register.handleRegistration(db, bcrypt));
app.get('/profile/:id', profile.handleGetProfile(db));
app.put('/image', image.handleImage(db));
app.listen(3050, () => {
  console.log('APPServer running on PORT 3050');
});
