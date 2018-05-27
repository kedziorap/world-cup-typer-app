const express = require('express');
const expressSession = require('express-session');
const router = express.Router();
router.get('/', (req, res) => {
   delete req.session.user;
    res.redirect('/logowanie');
});

module.exports = router;