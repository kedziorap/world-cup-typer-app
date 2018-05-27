const express = require('express');
const router = express.Router();
const connect = require('../../db/db-mysql-connect');
const matchdayMake = require('../../conf/conf-functions');

router.get('/', (req, res)=>{
    if (req.session.user) {
        if(req.session.user.range == 'admin') {
            connect.query('SELECT content FROM pages WHERE name="regulamin"', (err, result)=> {
                if (err) throw err;
                else {
                    const content = result[0].content;
                    res.render('admin/regulamin',{
                        content: content,
                        layout: 'admin_layout'
                    })
                }
            }); 
        } else {
            res.redirect('/');
        }  
    } else {
        res.redirect('/logowanie')
    }
});

router.post('/sendreg', (req, res)=> {
    if (req.session.user) {
        if(req.session.user.range == 'admin') {
            const content = req.body.reg;
            connect.query(`UPDATE pages SET content='${content}' WHERE name='regulamin'`, (err, result)=>{
                if (err) throw err;
                else {
                    res.redirect('/admin/regulamin');
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