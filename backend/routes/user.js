const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const verifyPassword = require('../middlewares/verifyPassword');

const userCtrl = require('../controllers/user');

router.post('/signup', verifyPassword, userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/:id', auth, userCtrl.deleteUser);

module.exports = router;