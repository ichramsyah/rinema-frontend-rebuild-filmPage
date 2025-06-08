# Rebuild Halaman Film Rinema


[![Lisensi: MIT](https://img.shields.io/badge/Lisensi-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Dideploy](https://img.shields.io/badge/Dideploy-Ya-green)](https://rinemaa.paramadina.ac.id/)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

#### [README.md](README-en.md) English Ver.

Proyek ini adalah pembangunan ulang modern dari halaman film di aplikasi web buatan saya, Rinema (https://rinemaa.paramadina.ac.id/film). Dibuat ulang sebagai aplikasi web berbasis React, proyek ini menampilkan sistem pencarian dan filter dinamis untuk film. Saat ini, proyek ini menggunakan data film dan genre lokal dari file JSON untuk simulasi API, memungkinkan pengembangan antarmuka yang cepat dan mandiri. Portfolio ini menunjukkan kemampuan saya dalam pengembangan React, manajemen state, serta penerapan pola desain dan optimasi performa tingkat lanjut.

## Fitur

- **Daftar Film Dinamis**: Menampilkan semua film dari API Rinema dengan detail seperti judul, produser, sutradara, pemeran, tahun rilis, durasi, rating, genre, dan sinopsis.
- **Fungsi Pencarian**: Pencarian real-time berdasarkan judul dengan debounce untuk optimasi performa.
- **Opsi Filter**: Urutkan berdasarkan "Semua Film", "Terbaru", "Terlama", atau "Populer", serta filter berdasarkan genre yang diurutkan secara alfabetis.
- **Desain Responsif**: Dibangun dengan Tailwind CSS untuk antarmuka yang bersih dan ramah mobile.
- **Simulasi Data API Lokal**: Mengambil data dari file films.json dan genres.json lokal untuk simulasi respons API.
- **Fitur Tampilkan Film**: Memungkinkan pengguna untuk mengklik film dan melihat informasi detail di halaman terpisah.

## Teknologi yang Digunakan

- **React**: Framework utama untuk membangun antarmuka pengguna.
- **Axios**: Untuk permintaan API ke API Rinema.
- **Tailwind CSS**: Untuk styling dengan pendekatan utility-first.
- **Lodash**: Digunakan untuk fungsi debounce guna meningkatkan performa pencarian.
- **Custom Hooks**: Mengemas logika untuk pengambilan dan penyaringan data (`useSearchPosts` dan `useFilmDetail`).
- **React Router DOM**: Untuk navigasi ke halaman detail film.

## Konsep Utama yang Diterapkan

- **Debounce**: Diterapkan dengan Lodash untuk menunda query pencarian, mengurangi panggilan fungsi yang tidak perlu dan meningkatkan responsivitas aplikasi.
- **Custom Hooks**: Membuat `useSearchPosts` dan `useFilmDetail` untuk mengelola state, panggilan API, dan logika filter, mendukung reusability dan pemisahan tanggung jawab.
- **Container-Presenter Pattern**: Memisahkan logika (di `SearchContainer` dan `FilmDetailContainer`) dari tampilan (di `SearchPresenter` dan `FilmDetailPresenter`) untuk kemudahan maintenance.
- **Facade Pattern**: Digunakan dengan `apiClient` untuk menyederhanakan konfigurasi Axios dan interaksi API.
- **Single Responsibility Principle**: Setiap komponen dan hook hanya menangani satu tugas, meningkatkan kejelasan kode.
- **Desain Responsif**: Menggunakan kelas utilitas Tailwind untuk pengalaman yang mulus di berbagai perangkat.

## Cara Instalasi

1. Clone repository:
   ```bash
   git clone <your-repo-url>
   ```
2. Masuk ke direktori proyek:
   ```bash
   cd my-search-app
   ```
3. Install dependensi:
   ```bash
   npm install
   ```
4. Jalankan server pengembangan:
   ```bash
   npm start
   ```
5. Buka http://localhost:3000 di browser kamu.

## Cara Penggunaan

- Gunakan dropdown untuk mengurutkan film (misalnya, "Terbaru") atau klik tombol genre yang diurutkan untuk memfilter.
- Ketik di kolom pencarian untuk mencari film berdasarkan judul.
- Jelajahi detail film termasuk poster dan sinopsis.
- Klik "Lihat Detail" untuk melihat halaman informasi lengkap film.

## Endpoint API

- `/allFilm`: Menampilkan semua film.
- `/latest`: Menampilkan film terbaru.
- `/oldest`: Menampilkan film terlama.
- `/popular`: Menampilkan film populer.
- `/allGenre`: Mengambil daftar genre yang tersedia.
- `/films/{film}`: Menyediakan informasi detail untuk film tertentu berdasarkan ID.

## Struktur Proyek

```
rebuild-rinema/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── api/              # Simulasi client API dengan data lokal
│   ├── components/
│   │   ├── Search/       # Komponen pencarian
│   │   │   ├── SearchContainer.jsx
│   │   │   └── SearchPresenter.jsx
│   │   ├── FilmDetail/   # Komponen detail film
│   │   │   ├── FilmDetailContainer.jsx
│   │   │   └── FilmDetailPresenter.jsx
│   ├── hooks/            # Custom hooks
│   │   ├── useSearchPosts.js
│   │   └── useFilmDetail.js
│   ├── App.jsx           # Komponen utama App dengan routing
│   ├── films.json        # file JSON film
│   ├── genres.json       # file JSON genre
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
![image](https://github.com/user-attachments/assets/a0acccde-0dc5-4103-93d7-87a229e253b0)

/DetailFilm
![image](https://github.com/user-attachments/assets/88347f26-f72d-41cf-aa8b-277b6c21d224)

## Rencana Peningkatan

- Integrasi API Sesungguhnya: Mengganti data lokal dengan panggilan API ke endpoint Rinema yang sebenarnya.
- Tambahkan pagination untuk daftar film yang panjang.
- Tingkatkan halaman detail film dengan fitur interaktif (misalnya, pengiriman rating).
- Perbaiki penanganan error dengan pesan yang lebih ramah pengguna.
