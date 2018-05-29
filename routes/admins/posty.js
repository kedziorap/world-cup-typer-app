const express = require('express');
const router = express.Router();
const connect = require('../../db/db-mysql-connect');
const matchdayMake = require('../../conf/conf-functions');

router.get('/', (req, res)=>{
    if (req.session.user) {
        if(req.session.user.range == 'admin') {
            connect.query('SELECT * FROM news ORDER BY date DESC', (err, result)=> {
                result.forEach(post=> post.content = post.content.substr(0,200)+'...');
                if (err) res.send('<h1>Błąd połaczenia z bazą danych</h1>');
                else {
                    res.render('admin/posty',{
                        posts: result,
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

router.post('/delete/:id', (req,res)=>{
    if (req.session.user) {
        if(req.session.user.range == 'admin') {
            const idPost = req.params.id;
            connect.query(`DELETE FROM news WHERE id=${idPost}`, (err, result) => {
                if (err) res.send('<h1>Błąd połaczenia z bazą danych</h1>');
                res.redirect('/admin/posty');
            }); 
        } else {
            res.redirect('/');
        }  
    } else {
        res.redirect('/logowanie')
    }
    
});

router.get('/edit/:id', (req, res)=> {
    if (req.session.user) {
        if(req.session.user.range == 'admin') {
            const idPost = req.params.id;
            connect.query(`SELECT * FROM news WHERE id=${idPost}`, (err, result) => {
                if (err) res.send('<h1>Błąd połaczenia z bazą danych</h1>');
                else {
                    if(result.length) {
                        const post = result[0];
                        res.render('admin/postEdit', {
                            post: post,
                            layout: 'admin_layout'
                        });   
                    } else {
                        res.redirect('/admin/posty');
                    }
                }
            });
        } else {
            res.redirect('/');
        }  
    } else {
        res.redirect('/logowanie')
    }
});

router.post('/edit/:id', (req, res)=> {
    if (req.session.user) {
        if(req.session.user.range == 'admin') {
            const id = req.params.id;
            const title = req.body.title;
            const content = req.body.content;
            connect.query(`UPDATE news SET title='${title}', content='${content}' WHERE id=${id}`, (err, result) => {
                if (err) res.send('<h1>Błąd połaczenia z bazą danych</h1>');
                else {
                    res.redirect('/admin/posty');
                }
            }); 
        } else {
            res.redirect('/');
        }  
    } else {
        res.redirect('/logowanie')
    }
});

router.get('/new', (req, res) => {
    if (req.session.user) {
        if(req.session.user.range == 'admin') {
            res.render('admin/postNew', {
                layout: 'admin_layout'
            });
        } else {
            res.redirect('/');
        }  
    } else {
        res.redirect('/logowanie')
    }
});

router.post('/new/add', (req, res)=> {
    if (req.session.user) {
        if(req.session.user.range == 'admin') {
            const now = new Date(); 
            const date = now.toJSON();
            const title = req.body.title;
            const content = req.body.content;
            connect.query(`INSERT INTO news (date, title, content) VALUES ('${date}','${title}','${content}')`, (err, result) => {
                if (err) res.send('<h1>Błąd połaczenia z bazą danych</h1>');
                else {
                    res.redirect('/admin/posty');
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