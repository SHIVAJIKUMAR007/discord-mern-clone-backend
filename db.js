const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/discordClone", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const chennelSchema = mongoose.Schema({
  name: String,
  creator: String,
});

const channelModel = mongoose.model("chennels", chennelSchema);

const ChatSchema = mongoose.Schema({
  name: String,
  pic: String,
  massage: String,
  time: String,
  channelId: String,
});

const chatModel = mongoose.model("chats", ChatSchema);

module.exports = {
  chatModel,
  channelModel,
};
