const express = require('express');
const router = express.Router();
const connect = require('../../db/db-mysql-connect');
const matchdayMake = require('../../conf/conf-functions');
const regulamin = require('./regulamin');
const posty = require('./posty');
const mecze = require('./mecze');
const typy = require('./typy');

router.get('/', (req, res)=>{
    if (req.session.user) {
        if(req.session.user.range == 'admin') {
            res.render('admin/admin', {
                layout: 'admin_layout'
            });  
        } else {
            res.redirect('/');
        }  
    } else {
        res.redirect('/logowanie')
    }
});

router.use('/regulamin', regulamin);
router.use('/posty', posty);
router.use('/mecze', mecze);
router.use('/typy', typy);

module.exports = router;