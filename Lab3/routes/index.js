'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
   
});

router.get('/dikshant', function (req, res) {
    res.render('Dikshant', { title: 'Dikshant' });

});

router.get('/paul', function (req, res) {
    res.render('Paul', { title: 'Paul' });

});

router.get('/tina', function (req, res) {
    res.render('Tina', { title: 'Tina' });

});

router.get('/vraj', function (req, res) {
    res.render('Vraj', { title: 'Vraj' });

});

module.exports = router;
