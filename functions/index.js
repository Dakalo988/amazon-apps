const functions = require("firebase-function");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51P2s8NB0AvtkWgujXyUO31cForcljF0UqoAlrL53v75ONw1OTALGwlNGrfv578CgKhLz1K3GHPAzMsu5RYkAtjkX00IaCSt18U"
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
