const express = require('express');
const expressSession = require('express-session');
const router = express.Router();
const connect = require('../db/db-mysql-connect');

router.get('/', (req,res) => {
    if (req.session.user) {
        if (req.session.user.range === 'user') {
            connect.query('SELECT u.id, u.login, u.name, u.email, u.date, u.password, SUM(t.points) as pts  FROM users u, types t WHERE t.id_user=u.id AND id='+req.session.user.id, (error, result)=>{
                if (result.length) {
                    const user = result[0];
                    res.render('profil', {
                        user,
                        error: req.session.changePswdError,
                        success: req.session.changePswdSuccess
                    });
                    delete req.session.changePswdError;
                    delete req.session.changePswdSuccess;
                } else {
                    res.render('404');
                }
            });       
        } else {
            res.render('404', {
                layout: 'admin_layout'
            });
        }
    } else {
        res.redirect('/logowanie')
    }
});

router.post('/sendNewPswd', (req, res)=>{
    if (req.session.user) {
        if (req.session.user.range ==='user') {
            connect.query('SELECT * FROM users WHERE id='+req.session.user.id+' AND password=PASSWORD("'+req.body.oldPswd+'")', (error,result)=>{
                if (error) throw error;
                else {
                    const user = result[0];
                    const oldPswd = req.body.oldPswd;
                    const newPswd = req.body.newPswd;
                    const repeatNewPswd = req.body.repNewPswd;
                    if(result.length) {
                        if (newPswd !== repeatNewPswd) {
                            req.session.changePswdError = 'Hasła są różne';
                            res.redirect('/profil');
                        } else if (newPswd.length < 6) {
                            req.session.changePswdError = 'Podane hasło jest za krótkie';
                            res.redirect('/profil');
                        } else {
                            connect.query(`UPDATE users SET password=PASSWORD('${newPswd}') WHERE id=${req.session.user.id}`, (err, result)=>{
                                req.session.changePswdSuccess = 'Hasło zostało zmienione';
                                res.redirect('/profil');
                            });
                        }
                    } else {
                        req.session.changePswdError = 'Podano nieprawidłowe hasło';       
                        res.redirect('/profil');
                    }
                }
            });
        } else {
            req.render('404',{
                layout: 'admin_layout'
            });
        }
    } else {
        res.redirect('/logowanie');
    }
});

module.exports = router;