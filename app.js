const { json } = require("express");
const express = require("express");
const app = express();
const apiRouter = require("./route/api");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  // api access by origin
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});
app.use("/api", apiRouter);

// router
app.get("/", (req, res) => {
  res.send("backend prepared");
});

// listen
app.listen(process.env.PORT || 5000, () =>
  console.log(`server is lisning at ${process.env.PORT || 5000}`)
);
