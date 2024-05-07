import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes";
dotenv.config({ path: __dirname + '/.env' });

const app = express();
app.use(express.json());

app.use("/api/v1", router);

app.get("/", (req, res) => {
  return res.json({message: "authentication"})
});


app.listen(process.env.PORT || 8080, () => console.log(`server is listening on port: ${process.env.PORT}`))