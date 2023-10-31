import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "<h1>hello there this is server 3000 on which we are practicing our basics of http request and maethods to handel the requests done to the server</h1>"
  );
});
app.get("/about", (req, res) => {
  res.send(
    "<p>this is the basic information about the wepage which generally tells about the content this webpage is containing.</p>"
  );
});
app.get("/contact", (req, res) => {
  res.send("<h1>You can contact me here at the localhost </h1>");
});
app.listen(port, () => {
  console.log(`server started at port ${port} `);
});
