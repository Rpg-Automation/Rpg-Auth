
const passport = require('passport');
const strategies = require('../strategies');

const router = require('express').Router();
const passportDiscord = passport.authenticate('discord', { session: false });

router.get('/discord', passportDiscord);

router.get('/discord/callback', passportDiscord,
    async (req, res) => {
        // Authorize success
        res.status(200).json({
            ok: true,
            status: 200,
            data: req.user
        });
    });


module.exports = router;