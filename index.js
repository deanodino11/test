import express from "express";
const app = express();
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_, res) => res.status(200).send("ok"));

app.post("/apple/asn", async (req, res) => {
  // For now: just log and 200 so Apple stops retrying.
  console.log("🔔 ASN received:", JSON.stringify(req.body).slice(0, 2000));
  return res.sendStatus(200);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on :${port}`));
