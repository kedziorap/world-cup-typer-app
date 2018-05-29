const express = require('express');
const router = express.Router();

// routes import
const index = require('./index');
const ranking = require('./ranking');
const players = require('./gracze');
const regulamin = require('./regulamin');
const wyniki = require('./wyniki');
const mecz = require('./mecz');
const admin = require('./admins/admin');
const typowanie = require('./typowanie');
const profil = require('./profil');
const rejestracja = require('./rejestracja');
const logowanie = require('./logowanie');
const wyloguj = require('./wyloguj');

// ROUTES

router.use('/', index);
router.use('/ranking', ranking);
router.use('/gracz', players);
router.use('/regulamin', regulamin);
router.use('/wyniki', wyniki);
router.use('/mecz', mecz);
router.use('/admin', admin);
router.use('/typowanie', typowanie);
router.use('/profil', profil);
router.use('/rejestracja', rejestracja);
router.use('/logowanie', logowanie);
router.use('/wyloguj', wyloguj);

// 404
router.use((req, res, next) => {
    res.status(404).render('404');
});

module.exports = router;