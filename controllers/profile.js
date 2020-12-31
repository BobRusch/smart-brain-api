const handleGetProfile = (db) => (req, res) => {
  const { id } = req.params;
  db.select('*')
    .from('users')
    .where({ id })
    .then((user) => {
      if (user.length) {
        res.send(user[0]);
      } else {
        res.status(400).json('User not found');
      }
    })
    .catch((err) => res.status(404).json('error getting user'));
}

module.exports = {
  handleGetProfile
}