const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const path = require("path");
const port = process.env.PORT || 3001;

const app=express();

app.use(express.static(path.join(__dirname, "cise2019/build")));

const SELECT_ALL_PRODUCTS_QUERY = "SELECT * FROM tree";
const SELECT_ALL_TIPS_QUERY = "SELECT * FROM tips";

let pool = mysql.createPool({
  connectionLimit: 10,
  multipleStatements: true,
  host: "us-cdbr-iron-east-02.cleardb.net",
  user: "b72f7916dad1ba",
  password: "bf43f260",
  database: "heroku_25a635bc8a152af"
});

app.use(cors());

app.get("/", (req, res) => {
  res.send("go to /tree");
});

app.get("/tree", (req, res) => {
  pool.getConnection(function(err, conn) {
    if (err) {
      res.send("Error occured");
    } else {
      conn.query(SELECT_ALL_PRODUCTS_QUERY, function(err2, records, fields) {
        if (!err2) {
          res.json({
            data: records
          });
        }
        conn.release();
      });
    }
  });
});

app.get("/tips", (req, res) => {
  pool.getConnection(function(err, conn) {
    if (err) {
      res.send("Error occured");
    } else {
      conn.query("SELECT * FROM tips; SELECT * FROM tips WHERE tips_id=1", [1,2], function(err2, records, fields) {
        if (!err2) {
          res.json({
            data: records
          });
        }
        conn.release();
      });
    }
  });
}); 

app.get("/tips/1", (req, res) => {
  pool.getConnection(function(err, conn) {
    if (err) {
      res.send("Error occured");
    } else {
      conn.query("SELECT * FROM tips WHERE tips_id=1", function(err2, records, fields) {
        if (!err2) {
          res.json({
            data: records
          });
        }
        conn.release();
      });
    }
  });
}); 

app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname + "/cise2019/build/index.html"));
})

app.listen(3001, () => {
  console.log("tree server listening on port 3001");
});
