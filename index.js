import express from "express";
import cors from "cors";

import authRoutes from "./routes/Auth.js";
import repoRoutes from "./routes/Repos.js";

const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());

//routes   
app.use("/auth", authRoutes);
app.use("/repos", repoRoutes);

app.get("/", (req, res) => {
  res.send("Server running successfully!");
});

app.listen(PORT, () => console.log(`Running on PORT ${PORT}`));
