# Ecotani (Frontend) 🌿

Frontend aplikasi Ecotani, dibuat dengan **React** + **Vite**.

Demo: https://ecotani-pearl.vercel.app :contentReference[oaicite:0]{index=0}

---

## ⚙️ Teknologi

- React  
- Vite  
- ESLint  
- Javascript  

---

## 📂 Struktur Proyek (Singkat)

fe-ecotani/
├── public/
├── src/
│ ├── components/
│ ├── pages/
│ ├── assets/
│ ├── hooks/
│ └── ...
├── .gitignore
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md

---

## 🛠️ Persyaratan

Sebelum menjalankan frontend ini, pastikan sudah:

- Node.js  
- npm atau yarn  

---

## 🚀 Instalasi & Menjalankan Lokal

1. **Clone repo frontend**  
   ```
   git clone https://github.com/jannahkrn/fe-ecotani.git
   cd fe-ecotani
Install dependensi
```
npm install
```
Jalankan development server
```
npm run dev
```
Server akan berjalan biasanya di http://localhost:5173 (tergantung konfigurasi Vite).

🔧 Konfigurasi Opsional
Jika ada variabel lingkungan (environment variables) yang perlu diset, buat file .env (jika belum ada) dan isikan kebutuhan misalnya API_BASE_URL, dll.

Periksa vite.config.js kalau ada pengaturan proxy atau alias path.

Periksa eslint.config.js untuk rules linting, style code.

📄 Build untuk Produksi
Untuk membuat versi produksi:
```
npm run build
```
