import express from "express";
import multer from "multer";
import fetch from "node-fetch";
import FormData from "form-data";
import cors from "cors";

const app = express();
const upload = multer();
const API_KEY = "YOUR_API_KEY_HERE";

app.use(cors());

app.post("/scan", upload.single("file"), async (req, res) => {
  try {
    const form = new FormData();
    form.append("file", req.file.buffer, req.file.originalname);

    const uploadRes = await fetch("https://www.virustotal.com/api/v3/files", {
      method: "POST",
      headers: { "x-apikey": API_KEY },
      body: form,
    });

    const uploadData = await uploadRes.json();
    const analysisId = uploadData.data.id;

    let report;
    do {
      await new Promise((r) => setTimeout(r, 3000));
      const rep = await fetch(
        `https://www.virustotal.com/api/v3/analyses/${analysisId}`,
        {
          headers: { "x-apikey": API_KEY },
        }
      );
      report = await rep.json();
    } while (report.data.attributes.status !== "completed");

    const stats = report.data.attributes.stats;

    res.json({
      infected: stats.malicious > 0,
      virus: `${stats.malicious} engines flagged this file`,
    });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

app.listen(3000, () =>
  console.log("🛡 SecureScan backend running on http://localhost:3000")
);
