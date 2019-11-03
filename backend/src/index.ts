import express from "express";
import { router as measurementRouter } from "./routes/measurement";

export const app = express();

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

// app.get("/", (req, res, next) => {
//   res.json({ message: "this works" });
// });

app.use("/measurements", measurementRouter);
