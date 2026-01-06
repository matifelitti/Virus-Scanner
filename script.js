document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.querySelector('input[type="file"]');
  const scanBtn = document.querySelector(".scan-btn");
  const resultBox = document.querySelector(".result");

  scanBtn.addEventListener("click", async () => {
    const file = fileInput.files[0];
    if (!file) {
      resultBox.textContent = "Select a file first.";
      return;
    }

    resultBox.style.color = "var(--muted)";
    resultBox.textContent = "Uploading file for deep scan...";

    const form = new FormData();
    form.append("file", file);

    const res = await fetch("http://localhost:3000/scan", {
      method: "POST",
      body: form,
    });

    const data = await res.json();

    if (data.infected) {
      resultBox.style.color = "var(--danger)";
      resultBox.textContent = `⚠ INFECTED: ${data.virus}`;
    } else {
      resultBox.style.color = "var(--safe)";
      resultBox.textContent = "✔ CLEAN — No threats detected.";
    }
  });
});
