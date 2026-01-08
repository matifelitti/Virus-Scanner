# 🛡️ SecureScan AI — Real Malware Scanner Web App

SecureScan AI is a web-based malware scanning application that allows users to upload files and analyze them using a **real professional antivirus engine (VirusTotal)**.
It provides a clean cyber-security styled interface and performs real-time cloud malware detection.

This project demonstrates a real-world antivirus architecture using a secure backend and a modern frontend UI.

---

## 🚀 Features

- Real malware detection using VirusTotal (70+ AV engines)
- Clean futuristic cyber-security UI
- Secure backend that protects API keys
- Upload and scan any file
- Real-time verdict (Clean / Infected)
- Fully scalable architecture

---

## 🧠 How It Works

```
Browser (HTML + JS)
        ↓
 Secure Node.js Backend
        ↓
     VirusTotal API
        ↓
     Scan Result
```

The frontend never exposes API keys.
All scans are securely handled by the backend.

---

## 🖥️ Tech Stack

- HTML5 / CSS3 (UI)
- Vanilla JavaScript (Frontend logic)
- Node.js + Express (Backend)
- VirusTotal API (Real antivirus engine)

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/Virus-Scanner.git
cd Virus-Scanner
```

### 2. Install dependencies

```bash
npm install
```

### 3. Get your VirusTotal API Key

Create a free account at:
[https://www.virustotal.com](https://www.virustotal.com)

Copy your API Key.

---

### 4. Configure API Key

Edit `server.js`:

```javascript
const API_KEY = "YOUR_API_KEY_HERE";
```

---

### 5. Start the backend

```bash
node server.js
```

You should see:

```
🛡 SecureScan backend running on http://localhost:3000
```

---

### 6. Open the app

Open `index.html` in your browser and start scanning files.

---

## ⚠️ Free API Limits

| Limit             | Free Plan |
| ----------------- | --------- |
| Requests / minute | 4         |
| Requests / day    | 500       |

Perfect for testing and demo projects.

---

## 🔐 Security

- API key is stored only on the backend
- `.gitignore` prevents uploading sensitive files
- All file scans are processed securely

---

## 📌 Disclaimer

This project is for educational and demonstration purposes.
Files scanned may be shared with VirusTotal for security research.

---

## ✨ Future Improvements

- Scan history
- Progress bar
- Quarantine system
- Multi-file scanning
- Desktop app version (Electron)

---
