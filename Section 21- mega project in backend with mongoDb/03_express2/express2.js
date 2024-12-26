//crud application
import express from "express";

const app = express();
const port = 3000;

// Now we want to accept the data
// Any data that comes in JSON format, Express will accept
app.use(express.json());

let teaData = [];
let nextId = 1;

// We can also use GET, but the most standard way is POST
// req isliye kyuki hum receive kar raha hai, usme res tha kyuki hum response bhej raha tha
//add a new tea
app.post("/teas", (req, resp) => {
  const { name, price } = req.body;
  const newTea = { id: nextId++, name, price };

  teaData.push(newTea);
  resp.status(201).send(newTea);
});
// it will give in object
// give all tea
app.get("/teas", (req, res) => {
  res.status(200).send(teaData);
});

//if we want specific indivdual object from multiple objects
//if anything comes in body we call req .body
//if anything comes in url we call it params
//get a tea with id
app.get("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("tea not found");
  }
  res.status(200).send(tea);
});

//update tea
app.put("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));

  if (!tea) {
    return res.status(404).send("tea not found");
  }

  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;
  res.status(200).send(tea);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
