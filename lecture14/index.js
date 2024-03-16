// JavaScript Module [Third-party Module : npm]
// - Express Module
// - Create a Simple HTTP Server
//

import express from "express";
import cors from "cors";

import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const port = 3000;
const connectionString = "mongodb://127.0.0.1:27017/test";

console.log("Connecting to MongoDB ...");
mongoose
  .connect(connectionString, { serverSelectionTimeoutMS: 5000 })
  .then(() => {
    console.log("Connected to MongoDB.");
    const app = express();
    const db = mongoose.connection;

    app.use(cors());

    app.get("/", (req, res) => {
      res.send(
        "<h1>Hello NodeJS !</h1> <p>This is a simple HTTP Server from Express.</p>"
      );
    });

    app.get("/api", async (req, res) => {
      const data = await db.collection("test").find({}).toArray();
      res.send(data);
    });

    // Start the Express server
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("Error connecting to MongoDB.");
  });
