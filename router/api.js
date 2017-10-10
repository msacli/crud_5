var express = require('express');
var mongoose = require('mongoose');
var Contact = require('../models/contact');

var db = 'mongodb://localhost:27017/contactcrud';

var router = express.Router();


mongoose.connect(db, (err)=>{
	(err)?(console.log(err)):(console.log('con. to mongo'));
});

router.get('/contact', (req,res)=>{
	Contact.find({}, (err,data)=>{
		(err)?(res.send(err)):(res.json(data))
	});
});

router.post('/contact', (req,res)=>{
	var newCon = new Contact();
	newCon.name = req.body.name;
	newCon.address = req.body.address;
	newCon.save((err,data)=>{
		(err)?(res.send(err)):(res.json(data))
	});
});

router.get('/contact/:id', (req,res)=>{
	Contact.findById(req.params.id,(err,data)=>{
		(err)?(res.send(err)):(res.json(data))
	});
});

router.delete('/contact/:id', (req,res)=>{
	Contact.findByIdAndRemove(req.params.id,(err,data)=>{
		(err)?(res.send(err)):(res.json(data))
	});
});

router.put('/contact/:id', (req,res)=>{
	Contact.findByIdAndUpdate(req.params.id, {
		$set: {
			name: req.body.name,
			address:req.body.address
		}
	},
	{
		new:true
	},
	(err,data)=>{
		(err)?(res.send(err)):(res.json({m:'update', d:data}))
	});
});

module.exports = router;