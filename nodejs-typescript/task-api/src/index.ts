import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.json({
    message: "nodejs api using typescript"
  })
})

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});
