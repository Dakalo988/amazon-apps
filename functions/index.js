const functions = require("firebase-function");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "pk_test_51P2s8NB0AvtkWgujFmLlN8Sof4ex7PPmigTiXaUiOy38HhUGmRvGff6gaY2SknRWAXXKxSgpWLAQ87j8xdaUQhh900jqaOiM2V"
);
// -API
// -APP CONFIG
const app = express("");
// -MIDDLELEWARES
app.use(cors({ origin: true }));
app.use(express.json());
// - API ROUTES
app.get("/", (req, res) => res.status(200).send("Hello World"));
app.post("/payment/create", async (req, res) => {
  const total = req.query.total;

  console.log("payment request received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "used",
  });

  //if okay created
  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});
// - LISTEN COMMANDS
exports.api = functions.https.onRequest(app);
