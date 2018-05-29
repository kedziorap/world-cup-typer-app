const express = require('express');
const expressSession = require('express-session');
const router = express.Router();
const connect = require('../db/db-mysql-connect');

router.get('/:id', (req, res) => {
    if (req.session.user) {
        const id = req.params.id
        connect.query('SELECT * FROM users WHERE `range`="user" AND id='+req.params.id, (err, resultPlayer) =>{
            if (err) res.send('<h1>Błąd połaczenia z bazą danych</h1>');
            if (resultPlayer.length) {
                connect.query(`SELECT m.homeTeamName, m.awayTeamName, m.goalsHomeTeam, m.goalsAwayTeam, t.home_score, t.away_score, t.points, t.typed FROM matches m, types t WHERE t.id_match=m.id AND t.id_user=${id} AND m.status='FINISHED'`, (error, result)=>{
                    if (error) throw error;
                    if (req.session.user.range === 'user') {
                        res.render('gracze', {
                            player: resultPlayer[0],
                            mecze: result
                        })
                    } else {
                        res.render('gracze', {
                            player: resultPlayer[0],
                            mecze: result,
                            layout: 'admin_layout'
                        })
                    }
                    
                });
            } else {
                res.render('404');
            }
        });
    } else {
        res.redirect('/logowanie');
    }
});

module.exports = router;