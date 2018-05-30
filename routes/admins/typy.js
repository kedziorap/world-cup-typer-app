const express = require('express');
const router = express.Router();
const connect = require('../../db/db-mysql-connect');

router.get('/', (req, res)=>{
    if (req.session.user) {
        if(req.session.user.range == 'admin') {
            connect.query(`SELECT COUNT(*) AS mecze FROM matches WHERE status IN ('FINISHED', 'TIMED')`, (err, result)=> {
                if (err) throw err;
                else {
                    const mecze = result[0].mecze;
                    console.log(mecze);
                    connect.query(`SELECT u.id, u.login, COUNT(*) as typy FROM types t, users u WHERE typed=1 AND u.id=t.id_user GROUP BY login ORDER BY login`, (err, result)=>{
                        if (err) throw err;
                        const wytypowane = result;
                        res.render('admin/typy', {
                            wytypowane,
                            mecze: mecze
                        });
                        
                    });
                }
            }); 
        } else {
            res.redirect('/');
        }  
    } else {
        res.redirect('/logowanie')
    }
});


module.exports = router;