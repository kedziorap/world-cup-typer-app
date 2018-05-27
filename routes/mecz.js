const express = require('express');
const router = express.Router();
const connect = require('../db/db-mysql-connect');
const matchdayMake = require('../conf/conf-functions');

router.get('/:match', (req, res) =>{
    
    if (req.session.user) {
        const id = req.params.match;
        connect.query(`SELECT id, status, homeTeamName, awayTeamName, goalsHomeTeam, goalsAwayTeam FROM matches WHERE id=${id}`, (error, result) =>{
            if (!result.length || result[0].status !== 'FINISHED') {
                if (req.session.user.range === 'user') {
                    res.render('404');
                } else {
                    res.render('404', {
                        layout: 'admin_layout'
                    });   
                }
            } 
            else {
                const match = result[0];
                connect.query(`SELECT u.login, t.points, t.home_score, t.away_score, u.id, t.typed FROM types t, users u WHERE t.id_match=${id} AND u.id=t.id_user AND u.range='user' ORDER BY LOWER(u.login)`, (error, result)=>{
                    if (result.length) {
                        if (req.session.user.range === 'user') {
                            res.render('mecz', {
                                mecz: match,
                                typy: result
                            });
                        } else {
                            res.render('mecz', {
                                mecz: match,
                                typy: result,
                                layout: 'admin_layout'
                            });
                        }
                    } else {
                        if (req.session.user.range === 'user') {
                            res.render('404');
                        } else {
                            res.render('404', {
                                layout: 'admin_layout'
                            });   
                        }
                    }
                });
            }
        });
    } else {
        res.redirect('/logowanie')
    }
});

module.exports = router;