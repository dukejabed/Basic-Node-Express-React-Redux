const express = require("express");
const router = express.Router();

const Item = require("../../models/Item");

/// get request api/items
////Get all items
// access public

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

/// post request api/items
////post items
// access public

router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save().then(item => res.json(item));
});

/// del request api/items
////del items
// access public

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(item => res.status(404).json({ success: false }));
});

module.exports = router;
