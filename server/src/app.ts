import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import usersRouter from "./routes/users";
import roomsRouter from "./routes/rooms";

dotenv.config();

const app: Application = express();
const corsOptions = {
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "DELETE", "UPDATE", "PATCH", "OPTIONS"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use("/users", usersRouter);
app.use("/rooms", roomsRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Success");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
