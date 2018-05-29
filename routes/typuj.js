const express = require('express');
const router = express.Router();
const connect = require('../db/db-mysql-connect');
const matchdayMake = require('../conf/conf-functions');
const id = 1;

router.post('/:idMatch', (req, res) =>{
   const idUser = 1; 
    const home = Number(req.body.homeScore);
    const away = Number(req.body.awayScore);
    const idMatch=req.params.idMatch;
    if (isNaN(home) || isNaN(away)) res.redirect('/typuj');
    else {
        connect.query('SELECT `status` FROM matches WHERE id='+idMatch, (err, result)=>{
            if (err) throw err;
            if(result.length) {
                if (result[0].status === 'TIMED') {
                    connect.query('UPDATE `types` SET home_score='+home+', away_score='+away+' WHERE id_user='+idUser+' AND id_match='+idMatch, (err, result)=>{
                        if (err) throw err;
                        res.redirect('/typuj');
                    });
                } else res.redirect('/typuj');
            } else res.redirect('/typuj');
        });   
    }
});

module.exports = router;