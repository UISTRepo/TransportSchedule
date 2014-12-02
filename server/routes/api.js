/**
 * Created by tunte on 27-Nov-14.
 */
var express = require('express');
var router = express.Router();

var q = require('q');
var db = require('../helpers/db.js');

/* GET home page. */
router.get('/', function(req,res){
    // take the date from the database
    // and return the date to the frontend
    _handleDbQuery('SELECT * FROM p4projects order by id desc', req, res);

});

router.get('/transporters', function(req,res){

    res.send('we are at transportersa API');

});


router.get('/transporters/:id', function(req,res){

    res.send('we will return the data for' + req.params.id);

});

function _handleDbQuery(query, req, res){
    var dbCalls = [];

    dbCalls.push(db.query(query));
    q.all(dbCalls).then(
        function(results) {
            res.header('Access-Control-Allow-Origin','*');
            res.send(results[0]);
        },
        function(e) {
            console.log(e);
            return;
        }
    );
};


module.exports = router;

