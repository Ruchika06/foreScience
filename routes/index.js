var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
const app = express();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ruchika' });
});
/* GET predict changes page. */
router.get('/changes', function(req, res) {
  res.render('changes', { title: 'Predict Changes' });
});
/* GET Userlist page. */
router.get('/statelist', function(req, res) {
  var db = req.db;
  var collection = db.get('things');
  collection.find({},{},function(e,docs){
      res.render('statelist', {
          "statelist" : docs
      });
  });
});


router.get('/contact', function(req, res) {
  var db = req.db;
  var collection = db.get('things');
  collection.find({},{},function(e,docs){
      res.render('contact', {
          "contact" : docs
      });
  });
});

router.get('/login', function(req, res) {
  var db = req.db;
  var collection = db.get('things');
  collection.find({},{},function(e,docs){
      res.render('login', {
          "login" : docs
      });
  });
});
router.post('/dropdata', (req,res)=>{
  var stat = req.body.Region;
  var perch = req.body.perch;
  var typ = req.body.cause;
  console.log(typ);
  res.send('exit');
  //var obj=document.getElementById("attr");
 //var suj=document.getElementById("suggestion");
 /*
 if(obj.value()==="dropTim"){
   suj="The increasing use of wood in the timber industries is leading to deforestation in the location which has further adverse effects on the rainfall as well as greenhouse gases in the atmosphere.Transition from wood-based furniture to other fibres/marble etc. must be promoted.Go paperless! Go digital!";
   res.redirect('/drop/timber', {
     "suj":suj,
    "stte":stat,
    "perch":perch,
   });
  }
 else if(obj.value()==="fuel"){
     suj="Increased rates of fuelwood use in your location may lead to tremendously harmful results.So, switch to LPG usage in place of burning fuelwood in your houses.";
     res.redirect('/drop/fuel', {
      "suj":suj,
     "stte":stat,
     "perch":perch,
    });
 }
 else{
   suj="Land is increasingly being used for cultivation in the location which may possibly lead to deforestation. Preferably use the open lands for cultivation purpose rather than the land obtained by clearing the tree-cover.Go for AgroForestry (growing trees with crops)!";
  res.redirect('/drop/agri', {
    "suj":suj,
   "stte":stat,
   "perch":perch,
  });}*/
});
router.get('/drop/timber', function(req, res){
  var db = req.db;
  var collection = db.get('things');
  var qry = {"State":"Punjab", "perch":0.25};
  collection.find({}, {}, function(e, docs){
    res.render('dropTim', {
      "stte":"Punjab",
      "perch":0.25,
      "data": docs
    });
  });
});

router.get('/drop/agri', function(req, res){
  var db = req.db;
  var collection = db.get('things');
  var qry = {"State":"Haryana", "perch":0.25};
  collection.find({}, {}, function(e, docs){
    res.render('dropAgri', {
      "stte":"Haryana",
      "perch":0.25,
      "data": docs
    });
  });
});


router.get('/drop/fuel', function(req, res){
  var db = req.db;
  var collection = db.get('things');
  var qry = {"State":"Kerala", "perch":0.25};
  collection.find({}, {}, function(e, docs){
    res.render('dropFuel', {
      "stte":"Arunachal Pradesh",
      "perch":0.25,
      "data": docs
    });
  });
});



router.get('/grafs00', function(req, res){
  var db = req.db;
  var collection = db.get('things');
  collection.find({}, {}, function(e, docs){
    res.render('grafs00', {
      "grafs": docs
    });
  });
});

router.get('/grafs09', function(req, res){
  var db = req.db;
  var collection = db.get('things');
  collection.find({}, {}, function(e, docs){
    res.render('grafs09', {
      "grafs": docs
    });
  });
});

router.get('/grafs10', function(req, res){
  var db = req.db;
  var collection = db.get('things');
  collection.find({}, {}, function(e, docs){
    res.render('grafs10', {
      "grafs": docs
    });
  });
});

router.get('/grafs20', function(req, res){
  var db = req.db;
  var collection = db.get('things');
  collection.find({}, {}, function(e, docs){
    res.render('grafs20', {
      "grafs": docs
    });
  });
});

router.get('/grafs13', function(req, res){
  var db = req.db;
  var collection = db.get('things');
  collection.find({}, {}, function(e, docs){
    res.render('grafs13', {
      "grafs": docs
    });
  });
});

router.get('/grafs15', function(req, res){
  var db = req.db;
  var collection = db.get('things');
  collection.find({}, {}, function(e, docs){
    res.render('grafs15', {
      "grafs": docs
    });
  });
});

router.get('/grafs18', function(req, res){
  var db = req.db;
  var collection = db.get('things');
  collection.find({}, {}, function(e, docs){
    res.render('grafs18', {
      "grafs": docs
    });
  });
});


module.exports = router;
