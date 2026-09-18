# Panduan mengelola konten

Semua isi situs (teks, foto, proyek) diatur dari **satu file**:
[`src/app/resources/content.js`](src/app/resources/content.js). Tidak perlu
menyentuh file `.tsx` untuk update konten sehari-hari — cukup edit file ini,
lalu `git commit` + push, GitHub Actions otomatis build & deploy.

## Struktur halaman saat ini

| Halaman | Isi | Sumber data |
|---|---|---|
| `/` (Home) | Intro, shortcut ke tiap bidang, ringkasan skill, showcase | `home` |
| `/about` | Bio, studi, organisasi, technical skills | `about` |
| `/experience` | Riwayat kerja/freelance | `experience` |
| `/projects` | **Software Development** & **UI/UX Design** (case study: gambar + deskripsi + tools) | `projects` |
| `/gallery` | **Photography**, **Videography**, **Graphic Design**, **Content Creation** (grid foto/video, ada tab filter) | `gallery` |

`/projects` dan `/gallery` sama-sama punya **tab filter kategori** di atas
grid, dan **kartu shortcut di homepage** (section "Jump to what you're
looking for") yang langsung membuka halaman itu dengan tab yang sudah
terpilih — jadi HR yang cari UI/UX designer bisa klik satu tombol dan
langsung lihat karya UI/UX saja, tanpa perlu scroll galeri campur aduk.

## Menambah proyek baru (Software Dev / UI/UX)

1. Taruh gambar cover di `public/images/projects/nama-file.png`.
2. Buka `content.js`, cari `const projects = { ... items: [ ... ] }`.
3. Tambah satu object baru di array `items`:

```js
{
  title: "Nama Proyek",
  categories: ["software-development"], // bisa lebih dari satu, lihat di bawah
  timeframe: "2025",
  description: <>Deskripsi singkat proyeknya, peran kamu di situ.</>,
  tools: ["React", "Figma"],
  image: "/images/projects/nama-file.png",
  link: "https://link-demo-atau-figma.com", // opsional
  linkLabel: "View project", // opsional, teks tombolnya
},
```

Kategori yang tersedia didefinisikan di `projectCategories` (dekat bagian
atas file). Kalau nanti mau nambah kategori baru (misal "Mobile
Development"), tambahkan di situ dan ia otomatis muncul sebagai tab baru.

**Proyek yang masuk lebih dari satu bidang** (misal kamu yang desain UI/UX-nya
sekaligus yang membangun aplikasinya) tinggal isi kedua id-nya di
`categories`, tidak perlu bikin entry duplikat:

```js
categories: ["software-development", "ui-ux-design"],
```

Proyek itu akan otomatis muncul di tab "Software Development" maupun tab
"UI/UX Design" (dan di "All"), cukup satu kartu saja.

## Menambah foto/video baru ke Gallery

1. Taruh file di `public/images/gallery/nama-file.webp` (disarankan `.webp`
   biar ukurannya kecil).
2. Buka `content.js`, cari `const gallery = { ... images: [ ... ] }`.
3. Tambah entry:

```js
{
  src: "/images/gallery/nama-file.webp",
  alt: "Deskripsi singkat gambarnya",
  category: "photography", // "videography" | "graphic-design" | "content-creation"
  orientation: "vertical", // atau "horizontal", sesuai bentuk aslinya
},
```

Kategori tersedia di `galleryCategories`, bisa ditambah/dikurangi di situ
kalau bidangnya berubah.

**Penting:** halaman `/gallery` **tidak lagi otomatis membaca semua file**
di folder `public/images/gallery` — ia hanya menampilkan gambar yang memang
didaftarkan di `content.js`. Ini sengaja, supaya galeri tetap rapi dan
terkategori, tidak otomatis kecampur dengan file mentah/percobaan yang kamu
simpan di folder itu. Folder itu sendiri saat ini masih berisi banyak file
lama yang belum dirapikan — itu aman didiamkan (tidak dipakai situs), tapi
kalau suatu saat mau beres-beres nama file/hapus yang tidak kepakai, bilang
saja.

## Mengubah shortcut di homepage

Section "Jump to what you're looking for" diatur di `home.exploreWork` di
`content.js`. Setiap item:

```js
{
  label: "Photography",
  icon: "gallery", // nama ikon dari src/once-ui/icons.ts
  href: "/gallery?category=photography",
},
```

Tambah/hapus/urutkan item di array itu untuk mengubah tombol yang tampil di
homepage.

## Kategori kosong

Kalau sebuah kategori belum ada isinya (misalnya "Graphic Design" atau
"UI/UX Design" sekarang), tab-nya tetap muncul tapi menampilkan pesan
"Nothing in this category yet" — bukan halaman rusak. Isi saja itemnya kapan
pun kamu siap upload karyanya.
