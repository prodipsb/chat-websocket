const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Message = require('../models/Message');

// POST /users - register user
router.post('/', async (req, res) => {
  const { username } = req.body;
  try {
    const user = new User({ username });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /users/:id/message - get all messages for user
router.get('/:id/message', async (req, res) => {
  const userId = req.params.id;
  try {
    const messages = await Message.find({
      $or: [{ senderId: userId }, { receiverId: userId }]
    }).sort({ timestamp: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
