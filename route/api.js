const express = require("express");
const router = express.Router();
const { chatModel, channelModel } = require("../db");

router.get("/", (req, res) => {
  res.send("api is sending");
});

router.get("/chat/:roomId", (req, res) => {
  chatModel.find({ channelId: req.params.roomId }).exec((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

router.post("/chat/:roomId", (req, res) => {
  const chat = {
    name: req.body.name,
    massage: req.body.massage,
    pic: req.body.pic,
    time: new Date(),
    channelId: req.params.roomId.toString(),
  };

  chatModel.create(chat, (err, data) => {
    res.redirect("/api/chat/" + req.params.roomId);
  });
});

router.get("/allChannels", (req, res) => {
  channelModel.find({}).exec((e, data) => res.send(data));
});

router.get("/getRoomName/:roomId", (req, res) => {
  channelModel
    .find({ _id: req.params.roomId })
    .exec((e, data) => res.send(data));
});

router.post("/createRoom/:uid", (req, res) => {
  const newChannel = {
    name: req.body.name,
    creator: req.params.uid,
  };
  channelModel.create(newChannel, (err, data) => {
    res.redirect("/api/allChannels");
  });
});

module.exports = router;
