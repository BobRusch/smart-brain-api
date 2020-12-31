const handleSignin = (db, bcrypt) => (req, res) => {
  const { email, password } = req.body;

  db.select('email', 'hash')
    .from('login')
    .where('email', '=', email)
    .then((data) => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        db.select('*')
          .from('users')
          .where('email', '=', email)
          .then((user) => {
            res.json(user[0]);
          })
          .catch((err) => res.status(404).json('no login found'));
      } else {
        res.status(404).json('wrong credentials');
      }
    })
    .catch((err) => res.status(404).json('wrong credentials'));
}

module.exports = {
  handleSignin
}