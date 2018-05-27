const express = require('express');
const router = express.Router();
const connect = require('../db/db-mysql-connect');
const matchdayMake = require('../conf/conf-functions');


router.get('/', (req, res) => {
    if (req.session.user) {
        connect.query('SELECT * FROM matches WHERE status=\'FINISHED\' ORDER BY date DESC', (err, result)=>{
            if (err) throw err;
            if(req.session.user.range === 'user') {
                res.render('wyniki', {
                    matches: result
                })   
            } else {
                res.render('wyniki', {
                    matches: result,
                    layout: 'admin_layout'
                })
            }
        });
    } else {
        res.redirect('/logowanie');
    }
});

module.exports = router;