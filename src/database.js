import mongoose from "mongoose";
import "dotenv/config";
const URI = process.env.MONGODB_URL;
mongoose.connect(URI);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("BD conectada");
});
