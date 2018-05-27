const express = require('express');
const router = express.Router();
const connect = require('../db/db-mysql-connect');
const myFunctions = require('../conf/conf-functions');

router.get('/', (req, res) => {
    if(req.session.user) {
        if(req.session.user.range === 'user') {
            connect.query('SELECT t.id_user, t.id_match, t.home_score, t.away_score, t.points, m.date, m.status, m.matchday, m.homeTeamName, m.awayTeamName, m.goalsHomeTeam, m.goalsAwayTeam, t.typed FROM types t, matches m WHERE t.id_match=m.id AND t.id_user='+req.session.user.id+' ORDER BY m.matchday, m.date', (err, result)=>{
                result = myFunctions.matchdayMake(8, result, 'matchday');
                res.render('typowanie', {
                    typy: result,
                    helpers: {
                        kolejka: (i) => i+1
                    }
                }); 
            });
        } else {
            res.render('404', {
                layout: 'admin_layout'
            });
        }
    } else {
        res.redirect('/logowanie');
    }
});

router.get('/kolejka/:kolejka', (req, res) => {
    if(req.session.user) {
        if(req.session.user.range === 'user') {
            connect.query('SELECT t.id_user, t.id_match, t.home_score, t.away_score, t.points, m.date, m.status, m.matchday, m.homeTeamName, m.awayTeamName, m.goalsHomeTeam, m.goalsAwayTeam, t.typed FROM types t, matches m WHERE t.id_match=m.id AND t.id_user='+req.session.user.id+' AND m.matchday='+req.params.kolejka+' ORDER BY m.matchday, m.date', (err, result)=>{
                res.render('typuj', {
                    typy: result,
                    helpers: {
                        kolejka: req.params.kolejka
                    }
                }); 
            });
        } else {
            res.render('404',{
                layout: 'admin_layout'
            });
        }
    } else {
        res.redirect('/logowanie')
    }
});

router.post('/send/:kolejka/:idMatch', (req, res) =>{
    if(req.session.user) {
        if(req.session.user.range==='user') {
            const idUser = req.session.user.id; 
            const home = Number(req.body.home);
            const away = Number(req.body.away);
            const idMatch=req.params.idMatch;
            const kolejka = req.params.kolejka;
            if (isNaN(home) || isNaN(away)) res.redirect('/typowanie/kolejka/'+kolejka);
            else {
                connect.query('SELECT status, date FROM matches WHERE id='+idMatch, (err, result)=>{
                    if (err) throw err;
                    if(result.length && myFunctions.voteIsPossible(result[0].date)) {
                        console.log(result);
                        if (result[0].status === 'TIMED' ) {
                            connect.query('UPDATE `types` SET home_score='+home+', away_score='+away+', typed=1 WHERE id_user='+idUser+' AND id_match='+idMatch, (err, result)=>{
                                if (err) throw err;
                                res.redirect('/typowanie/kolejka/'+kolejka);
                            });
                        } else res.redirect('/typowanie/kolejka/'+kolejka);
                    } else res.redirect('/typowanie/kolejka/'+kolejka);
                });   
            }
        } else {
            res.render('404',{
                layout: 'admin_layout'
            });
        }
    } else {
        res.redirect('/logowanie')
    }
});
//AJAX
router.post('/:kolejka/ajax/send/:mecz', (req, res)=> {
    if (req.session.user) {
        if (req.session.user.range==='user') {
            const home = Number(req.body.home);
            const away = Number(req.body.away);
            const idMatch=req.params.mecz;
            const idUser = req.session.user.id;
            if (isNaN(home) || isNaN(away)) {
                res.write('error');
                res.end();
            } else {
                connect.query('SELECT status, date FROM matches WHERE id='+idMatch, (err, result)=>{
                    if (err) throw err;
                    if(result.length && myFunctions.voteIsPossible(result[0].date) && idUser) {
                        if (result[0].status === 'TIMED' ) {
                            connect.query('UPDATE `types` SET home_score='+home+', away_score='+away+', typed=1 WHERE id_user='+idUser+' AND id_match='+idMatch, (err, result)=>{
                                if (err) throw err;
                                res.write('ok')
                                res.end();
                            });
                        } else {
                            res.write('error');
                            res.end()
                        };
                    } else {
                        res.write('error');
                        res.end()
                    };
                });   
            }       
        } else {
            res.send('error');
            res.end();
        }
    } else {
        res.send('error');
        res.end();
    }
});

module.exports = router;