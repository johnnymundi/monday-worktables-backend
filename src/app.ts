import express from "express";
import { router } from "./shared/routes/index";
import cors from "cors";

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
