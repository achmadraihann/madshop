const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const stripe = require("stripe")("sk_test_51LdwKbHETL6yZY9vjejTJNb4hQ2nA2jQ5EGqDUPuEgdjza62VlcNAF1vKiRnRbu1tLbbTCPMI8r3E4EjwAOjPfRs00htmnye6F");

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
