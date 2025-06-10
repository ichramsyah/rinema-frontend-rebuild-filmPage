# Rebuild Halaman Film Rinema

[![Lisensi: MIT](https://img.shields.io/badge/Lisensi-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Dideploy](https://img.shields.io/badge/Dideploy-Ya-green)](https://rinemaa.paramadina.ac.id/)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

#### [README.md](README-en.md) English Ver.

Proyek ini adalah pembangunan ulang modern dari halaman film di aplikasi web buatan saya, Rinema. Dibuat ulang sebagai Single Page Application (SPA) berbasis React, proyek ini terhubung langsung dengan API live Rinema untuk menampilkan sistem pencarian dan filter film yang dinamis. Portofolio ini menunjukkan kemampuan saya dalam pengembangan front-end React, manajemen state secara efisien, interaksi dengan API eksternal, serta penerapan pola desain dan optimasi performa tingkat lanjut.

## Fitur

- **Terhubung Langsung dengan API**: Mengambil data film dan genre secara real-time dari API live Rinema, bukan lagi dari file JSON lokal.
- **Sorting di Sisi Server**: Opsi urutkan berdasarkan "Terbaru", "Terlama", atau "Populer" memanfaatkan endpoint API khusus untuk performa yang lebih cepat dan efisien.
- **Fungsi Pencarian & Filter**: Pencarian real-time berdasarkan judul dan filter berdasarkan genre yang diurutkan secara alfabetis.
- **Desain Responsif**: Dibangun dengan Tailwind CSS untuk antarmuka yang bersih, modern, dan ramah mobile di semua perangkat.
- **Detail Film Lengkap**: Memungkinkan pengguna untuk mengklik film dan melihat informasi detail di halaman terpisah menggunakan React Router.

## Teknologi yang Digunakan

- **React**: Framework utama untuk membangun antarmuka pengguna yang interaktif.
- **Vite**: Sebagai build tool modern yang memberikan pengalaman pengembangan super cepat.
- **Axios**: Untuk permintaan HTTP yang andal ke API Rinema.
- **Tailwind CSS**: Untuk styling dengan pendekatan utility-first yang cepat dan fleksibel.
- **Custom Hooks**: Mengemas logika untuk pengambilan dan penyaringan data (`useSearchPosts` dan `useFilmDetail`) agar kode lebih bersih dan dapat digunakan kembali.
- **React Router DOM**: Untuk menangani routing sisi klien ke halaman daftar film dan detail film.

## Konsep Utama yang Diterapkan

- **Debounce**: Diterapkan untuk menunda query pencarian, mengurangi panggilan fungsi yang tidak perlu dan meningkatkan responsivitas aplikasi.
- **Custom Hooks**: Membuat `useSearchPosts` dan `useFilmDetail` untuk mengelola state, panggilan API, dan logika filter, mendukung reusability dan pemisahan tanggung jawab.
- **Container-Presenter Pattern**: Memisahkan logika (di `SearchContainer` dan `FilmDetailContainer`) dari tampilan (di `SearchPresenter` dan `FilmDetailPresenter`) untuk kemudahan maintenance dan skalabilitas.
- **Facade Pattern**: Digunakan dengan `apiClient` untuk menyederhanakan konfigurasi Axios dan interaksi API, menyembunyikan kompleksitas `axios` dan endpoint.
- **Single Responsibility Principle**: Setiap komponen dan hook dirancang untuk menangani satu tugas utama, meningkatkan kejelasan dan kemudahan pengujian kode.
- **Desain Responsif**: Menggunakan kelas utilitas Tailwind untuk memastikan pengalaman pengguna yang mulus di berbagai ukuran layar.

## Cara Instalasi

1. Clone repository:
   ```bash
   git clone <your-repo-url>
   ```
2. Masuk ke direktori proyek:
   ```bash
   cd rebuild-rinema
   ```
3. Install dependensi:
   ```bash
   npm install
   ```
4. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```
5. Buka http://localhost:5173 (atau port lain yang ditampilkan di terminal) di browser Anda.

## Cara Penggunaan

- Gunakan dropdown untuk mengurutkan film (misalnya, "Terbaru") atau klik tombol genre yang diurutkan untuk memfilter.
- Ketik di kolom pencarian untuk mencari film berdasarkan judul.
- Jelajahi detail film termasuk poster dan sinopsis.
- Klik "Lihat Detail" untuk melihat halaman informasi lengkap film.

## Endpoint API

Semua request ditujukan ke base URL: https://rinemaa.paramadina.ac.id/api

- `GET /films/allFilm`: Menampilkan semua film.
- `GET /films/latest`: Menampilkan film terbaru.
- `GET /films/oldest`: Menampilkan film terlama.
- `GET /films/popular`: Menampilkan film populer.
- `GET /films/allGenre`: Mengambil daftar genre yang tersedia.
- `GET /films/films/{film}`: Menyediakan informasi detail untuk film tertentu berdasarkan ID.

## Struktur Proyek

```
rebuild-rinema/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── api/              # Klien API terpusat (Facade Pattern)
│   ├── components/
│   │   ├── Search/       # Komponen pencarian (Container & Presenter)
│   │   │   ├── SearchContainer.jsx
│   │   │   └── SearchPresenter.jsx
│   │   ├── FilmDetail/   # Komponen detail film (Container & Presenter)
│   │   │   ├── FilmDetailContainer.jsx
│   │   │   └── FilmDetailPresenter.jsx
│   ├── hooks/            # Custom hooks untuk state & logic
│   │   ├── useSearchPosts.js
│   │   └── useFilmDetail.js
│   ├── App.jsx           # Komponen utama App dengan routing
│   ├── index.jsx         # Titik masuk aplikasi
│   ├── index.css         # Style global
│   ├── tailwind.config.js # Konfigurasi Tailwind
│   └── package.json      # Dependensi proyek
```

## Kontribusi

Kontribusi sangat diterima! Silakan baca [Kode Etik](CODE_OF_CONDUCT.markdown) untuk pedoman cara berinteraksi dengan komunitas. Untuk berkontribusi:

- Fork repository ini.
- Ajukan isu atau pull request dengan peningkatan (misalnya, pagination, fitur rating).

## Lisensi

Proyek ini dilisensikan di bawah [Lisensi MIT](LICENSE.txt), yang memungkinkan penggunaan, modifikasi, dan distribusi gratis dengan menyertakan pemberitahuan hak cipta.

## Penghargaan

- Dibangun dan terinspirasi dari aplikasi web buatan saya, Rinema (https://rinemaa.paramadina.ac.id).
- Data bersumber dari file JSON lokal yang meniru struktur API Rinema buatan saya.

## Screenshot

/Film
![image](https://github.com/user-attachments/assets/b2699085-a540-43aa-af23-b99c29a10b1a)


/DetailFilm
![image](https://github.com/user-attachments/assets/b42f8b96-f4e6-4120-934a-924e12da822d)


## Rencana Peningkatan

- Menambahkan pagination atau infinite scroll untuk menangani daftar film yang sangat panjang secara efisien.
- Meningkatkan halaman detail film dengan fitur yang lebih interaktif (misalnya, pengiriman rating pengguna).
- Memperbaiki penanganan error dengan menampilkan pesan yang lebih informatif dan ramah pengguna.
- Menambahkan unit test dan integration test untuk memastikan keandalan kode.
