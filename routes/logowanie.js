const express = require('express');
const router = express.Router();
const connect = require('../db/db-mysql-connect');

router.get('/', (req,res)=>{
    if (req.session.user) {
        res.redirect('/')
    } else {
        res.render('logowanie', {
            loginError: req.session.loginError,
            registerSuccess: req.session.registerSuccess,
            layout: 'nologin'  
        });
        delete req.session.loginError;   
        delete req.session.registerSuccess;   
    }
});

router.post('/loguj', (req, res) => {
    if (req.session.user) {
        res.redirect('/logowanie')
    } else {
        const login = req.body.inputLogin;
        const password = req.body.inputPassword;
        connect.query(`SELECT id, \`range\`, active FROM users WHERE login='${login}' AND password=PASSWORD('${password}')`, (err, result)=>{
            if (err) res.send('<h1>Błąd połaczenia z bazą danych</h1>');
            if (result.length) {
                if (result[0].active === 0) {
                    req.session.loginError = 'Konto nieaktywowane. Kliknij w link aktywacyjny w mailu.';
                    res.redirect('/logowanie');
                } else {
                    req.session.user = {
                        id: result[0].id,
                        range: result[0].range
                    }
                    if (result[0].range === 'admin') {
                        res.redirect('/admin/posty');
                    } else {
                        res.redirect('/');   
                    }
                }
            } else {
                req.session.loginError = 'Nieporawne dane';
                res.redirect('/logowanie');
            }
        });
    }
});

module.exports = router;