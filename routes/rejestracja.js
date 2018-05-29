const express = require('express');
const router = express.Router();
const connect = require('../db/db-mysql-connect');

router.get('/', (req, res) => {
    if (req.session.user) {
        res.redirect('/');
    } else {
        res.render('rejestracja',{
            errors: req.session.registerErrors,
            layout: 'nologin'
        });
        delete req.session.registerErrors;
    }
});

router.post('/sendForm', (req,res)=>{
    req.check('login', 'Login jest za krótki').isLength({min: 4});
    req.check('name', 'Imię jest za krótkie').isLength({min: 3});
    req.check('email', 'Niepoprawny adres email').isEmail();
    req.check('password', 'Hasło jest za krótkie').isLength({min: 6});
    req.check('passwordRepeat', 'Hasła nie są takie same').equals(req.body.password);
    let registerErrors = req.validationErrors();
    if (req.body.regulamin !=='on') registerErrors.push({
       location: 'body',
        param: 'regulamin',
        msg: 'Musisz zaakceptować regulamin'
    });
    if((req.body.name).indexOf(' ') !==-1) registerErrors.push({
        location: 'body',
        param: 'name',
        msg: 'Nie można użyc spacji w imieniu'
    });
    if((req.body.login).indexOf(' ') !==-1) registerErrors.push({
        location: 'body',
        param: 'login',
        msg: 'Nie można użyc spacji w loginie'
    });
    if((req.body.password).indexOf(' ') !==-1) registerErrors.push({
        location: 'body',
        param: 'password',
        msg: 'Nie można użyc spacji w haśle'
    });
    if (registerErrors.length) {
        req.session.registerErrors = registerErrors;
        res.redirect('/rejestracja');
    } else {
        connect.query(`SELECT * FROM users WHERE login='${req.body.login}'`, (err, result) =>{
            if (err) throw err;
            if(result.length) {
                registerErrors=[];
                registerErrors.push({
                    location: 'body',
                    param: 'login',
                    msg: 'Login zajęty'
                });
                req.session.registerErrors = registerErrors;
                res.redirect('/rejestracja');
            } else {
                connect.query(`SELECT * FROM USERS WHERE email='${req.body.email}'`, (err, result) => {
                    if (result.length) {
                        registerErrors=[];
                        registerErrors.push({
                            location: 'body',
                            param: 'email',
                            msg: 'email zajęty'
                        });
                        req.session.registerErrors = registerErrors;
                        res.redirect('/rejestracja'); 
                    } else {
                        const date = new Date();
                        const now = date.toJSON();
                        connect.query(`INSERT INTO users (login, name, email, password, \`range\`, date, active) VALUES ('${req.body.login}', '${req.body.name}', '${req.body.email}', PASSWORD('${req.body.password}'),'user','${now}', 0)`, (err, result)=>{
                           if (err) throw err;
                            connect.query(`SELECT * FROM users WHERE email='${req.body.email}' AND active=0`, (err, result)=> {
                                if (err) throw err;
                                if (result.length) {
                                    const id = result[0].id;
                                    connect.query(`CALL create_types(${id})`, (err, result)=> {
                                        if (err) throw err;
                                        connect.query(`UPDATE users SET active=1 WHERE email='${req.body.email}'`, (err, result) => {
                                            req.session.registerSuccess = 1;
                                            res.redirect('/'); 
                                        }); 
                                    });
                                } else {
                                    res.render('404');
                                }
                            })
                        });
                    }
                });
            }
        });
    }
});



module.exports = router;