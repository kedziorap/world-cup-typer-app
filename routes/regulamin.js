const express = require('express');
const router = express.Router();
const connect = require('../db/db-mysql-connect');

router.get('/', (req, res) => {
    connect.query('SELECT * FROM pages WHERE name="regulamin"', (error, result)=>{
        if (error) res.send('<h1>Błąd połaczenia z bazą danych</h1>');
       if (!result.length) {
           res. render('404');
       } else {
           if (req.session.user) {
               res.render('regulamin', {
                   content: result[0].content 
               });
           } else {
               res.render('regulamin', {
                   content: result[0].content,
                   layout: 'nologin'
               });
           }
       }
    });
});

module.exports = router;