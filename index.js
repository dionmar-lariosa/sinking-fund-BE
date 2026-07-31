import express from "express";
import memberRoutes from "./routes/member.route.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/members", memberRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
