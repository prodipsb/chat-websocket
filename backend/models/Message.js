const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  senderId: { type: String, required: true },   // changed from ObjectId
  receiverId: { type: String, required: true }, // changed from ObjectId
  message: { type: String, required: false },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Message', messageSchema);
