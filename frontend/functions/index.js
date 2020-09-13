const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQBLYFazrj3FMQnWRWPVTKAedMMncLKmOm2jjpBUMiE86kaiJzjLUmnzLc4A6xgjCO8azGiXLBoMSvdodVjkNkA00K8SQpv2k"
);


const app =express()

app.use(cors({origin:true}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.post("/payments/create",async(req,res)=>{
const {total}=req.query
const paymentIntent=await stripe.paymentIntents.create({
    amount:total,
    currency:"inr",
    shipping: {
        name: 'Jenny Rosen',
        address: {
          line1: '510 Townsend St',
          postal_code: '98140',
          city: 'Raippur',
          state: 'CG',
          country: 'India',
        },
      },
    description: 'Software development services',
})
res.status(201).send({
    clientSecret:paymentIntent.client_secret,
})
})
exports.api =functions.https.onRequest(app)