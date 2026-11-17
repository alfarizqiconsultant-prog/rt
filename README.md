# RT Arjuna GSP

Portal informasi dan layanan warga RT Arjuna GSP, dibangun menggunakan Next.js.

## Menjalankan secara lokal

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Buka http://localhost:3000.

## Supabase

Project Supabase: https://uqbhotcyovpeesmcpwpl.supabase.co

Isi .env.local dengan URL project dan publishable key Supabase (bukan secret/service-role key):

```env
NEXT_PUBLIC_SUPABASE_URL=https://uqbhotcyovpeesmcpwpl.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
```

Endpoint pemeriksaan koneksi: /api/health/supabase. Database public saat ini belum memiliki tabel aplikasi; skema dan RLS perlu ditentukan berdasarkan fitur yang disepakati.

## Perintah

- npm run dev — server pengembangan
- npm run lint — pemeriksaan ESLint
- npm run build — build Next.js

Target hosting: Cloudflare Workers. Proyek ini memakai Next.js 16 dan perlu konfigurasi deployment Cloudflare yang sesuai sebelum deployment produksi.
