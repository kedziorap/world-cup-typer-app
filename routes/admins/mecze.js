const express = require('express');
const router = express.Router();
const connect = require('../../db/db-mysql-connect');
const myQuery = require('../../db/myQueries');

router.get('/', (req, res)=>{
    if (req.session.user) {
        if(req.session.user.range == 'admin') {
            res.render('admin/mecze', {
                kol: [1,2,3,4,5,6,7,8],
                layout: 'admin_layout'
            });  
        } else {
            res.redirect('/');
        }  
    } else {
        res.redirect('/logowanie')
    }
});

router.get('/:id', (req, res) => {
    if (req.session.user) {
        if(req.session.user.range == 'admin') {
            const id = req.params.id;
            connect.query(`SELECT * FROM matches WHERE matchday=${id} ORDER BY date`, (err, result)=>{
                if (result.length) {
                    const macthes = result;
                    res.render('admin/kolejka', {
                        result: result,
                        layout: 'admin_layout'
                    })
                } else {
                    res.render('404', {
                        layout: 'admin_layout'
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

router.post('/addResult/:kolejka/:mecz', (req, res)=> {
    if (req.session.user) {
        if(req.session.user.range == 'admin') {
            const kolejka = req.params.kolejka;
            const mecz= req.params.mecz;
            const homeTeamName = req.body.homeTeamName;
            const awayTeamName = req.body.awayTeamName;
            const goalsHomeTeam = req.body.home;
            const goalsAwayTeam = req.body.away;
            const status = req.body.status;
            if (isNaN(goalsAwayTeam) || isNaN(goalsHomeTeam)) {
                res.redirect('/admin/mecze/'+kolejka);
            } else {
                connect.query(`UPDATE matches SET homeTeamName='${homeTeamName}', awayTeamName='${awayTeamName}', goalsHomeTeam=${goalsHomeTeam}, goalsAwayTeam=${goalsAwayTeam}, status='${status}' WHERE id=${mecz}`, (err, result)=>{
                    if (err) throw err;
                    else {
                        if (status === 'FINISHED') {
                            connect.query(myQuery.onePointsAdd(mecz), (err, result)=>{
                                if (err) throw err;   
                                connect.query(myQuery.threePointsAdd(mecz), (err, result)=>{
                                    if (err) throw err;
                                    res.redirect('/admin/mecze/'+kolejka);
                                });
                            });
                        } else {
                            connect.query(myQuery.clearPoints(mecz), (err, result)=>{
                                if (err) throw err;
                                res.redirect('/admin/mecze/'+kolejka);
                            });
                        }
                    } 
                });   
            }
        } else {
            res.redirect('/');
        }  
    } else {
        res.redirect('/logowanie')
    }
    
});

module.exports = router;