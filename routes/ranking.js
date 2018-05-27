const express = require('express');
const expressSession = require('express-session');
const router = express.Router();
const connect = require('../db/db-mysql-connect');

router.get('/', (req, res) => {
    if (req.session.user) {
        connect.query('SELECT sum(t.points) as punkty, u.login, u.id from types t, users u WHERE t.id_user=u.id AND u.range="user" GROUP BY u.login ORDER BY punkty desc, login asc', (err, result) =>{
            if (err) throw err;
            if (req.session.user.range === 'user') {
                res.render('ranking', {
                    players: result,
                    helpers: {
                        inc: (index) => index+1
                    }
                });   
            } else {
                res.render('ranking', {
                    players: result,
                    helpers: {
                        inc: (index) => index+1
                    }, 
                    layout: 'admin_layout'
                });
            }
        });
    } else {
        res.redirect('/logowanie');
    }
});

module.exports = router;