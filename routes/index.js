const express = require('express');
const expressSession = require('express-session');
const router = express.Router();
const connect = require('../db/db-mysql-connect');

router.get('/', (req,res)=>{
    if (req.session.user) {
        if (req.session.user.range === 'user') {
            connect.query('SELECT * FROM news ORDER BY id DESC LIMIT 5', (err, result, fields)=>{
                if (err) throw err;
                if (result.length) {
                    res.render('index', {
                        news: result 
                    });
                } else {
                    res.render('404')
                }
            });    
        } else {
            res.redirect('/admin/posty')
        }  
    } else {
        res.redirect('/logowanie')
    }
});

module.exports = router;