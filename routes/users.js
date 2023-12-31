const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/user-list', (req, res) => {
  const sql = 'SELECT * from user_list1';
  db.query(sql, (err, data) => {
    console.log(data);
    if (err) throw err;
    res.render('user-list', { title: 'User List', userData: data });
  });
});

module.exports = router;