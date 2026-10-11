import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes.js";




const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.app_MONGO_URI, {
    dbName: "mayuri_demo",
  })
  .then(() => console.log("Database connected"))
  .catch((e) => console.log(e));

const demoSchema = new mongoose.Schema(
  {
    happy: String,
  },
  { strict: false }
);

const Demo = mongoose.model("Demo", demoSchema,"demo");

app.use("/api",router);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

export { Demo };