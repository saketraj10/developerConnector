const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namastenode:A19qeBel0W3BthCr@namastenode.qvgtc.mongodb.net/developerConnector"
  );
};

module.exports = connectDB;
