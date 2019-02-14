const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');

//route GET api/items
//desc GET all items
//public
router.get('/', (req,res) =>{
    Item.find()
    .sort({date:-1})
    .then(items => res.json(items))
}); 

//route POST new item
//desc Create new items
//public
router.post('/', (req,res) => {
    const newItem = new Item({
        name:req.body.name
    });
    newItem.save().then(item =>res.json(item));
}); 

//route POST new item
//desc Delete an items
//public
router.delete('/', (req,res) => {
    Item.findById(res.param.id).
    then(item => item.remove().then(() => res.json({success: true}))).
    catch(err => res.json({success:false}));
}); 

module.exports = router;