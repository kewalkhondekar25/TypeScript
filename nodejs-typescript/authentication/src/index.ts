import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes";
dotenv.config({ path: __dirname + '/.env' });

const app = express();
app.use(express.json());

app.use("/api/v1", router);

console.log(process.env.PORT);


app.get("/", (req, res) => {
  return res.json({message: "authentication"})
});

app.get("/healthy", (req, res) => {
  return res.json({message: "server is healthy"})
});


app.listen(process.env.PORT || 8080, () => console.log(`server is listening on port: ${process.env.PORT}`))