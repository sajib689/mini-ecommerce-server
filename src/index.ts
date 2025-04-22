import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json());

// example route
app.get("/", (req: Request, res: Response) => {
  res.send("Api Working");
});

mongoose.connect(process.env.MONGO_URI as string).then(() => {
  console.log("Mongodb connected");
  app.listen(PORT, () => {
    console.log(`Server is working on ${PORT}`);
  });
});

app.use('/api/v1', userRouter)
