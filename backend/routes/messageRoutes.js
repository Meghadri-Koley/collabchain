const express = require("express");
const {isAuthenticatedUser} = require("../middleware/auth.js")
const router = express.Router();
router.use(isAuthenticatedUser);
const Message = require("../models/messageModel");
const User = require('../models/userModel');
const Chat = require('../models/chatModel');


// Route 1: Sending Messages
router.post('/', async (req, res) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    console.log("Invalid data passed into request");
    return res.sendStatus(400);
  }

  try {
    let message = await Message.create({ sender: req.user._id, content, chat: chatId });

    message = await (
      await message.populate("sender", "name pic email")
    ).populate({
      path: "chat",
      select: "chatName isGroupChat users",
      model: "Chat",
      populate: { path: "users", select: "name email pic", model: "User" },
    });    

    await Chat.findByIdAndUpdate(chatId, { latestMessage: message });

    res.json(message);
  } catch (error) {
    res.status(400).send(error.message);
  }
})

// Route 2: Fetching messages
router.get('/:chatId', async (req, res) => {
  try {
      const messages = await Message.find({ chat: req.params.chatId })
          .populate("sender", "name pic email")
          .populate("chat");
      res.json(messages);
  } catch (error) {
      res.status(400).send("Error Occured");
  }
})
module.exports = router;
