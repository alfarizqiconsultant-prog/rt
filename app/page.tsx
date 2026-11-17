"use client";
import { useState } from "react";

const updates = [
  { category: "INFORMASI WARGA", date: "Pengumuman", title: "Pusat informasi RT Arjuna GSP", text: "Kabar lingkungan, agenda bersama, dan informasi penting warga dalam satu ruang digital.", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=85" },
  { category: "LINGKUNGAN", date: "Program bersama", title: "Lingkungan bersih dan nyaman", text: "Ruang untuk berbagi inisiatif kebersihan, penghijauan, dan kepedulian lingkungan.", image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=85" },
  { category: "KEGIATAN", date: "Gotong royong", title: "Tumbuh kuat melalui kebersamaan", text: "Dokumentasi kegiatan dan cerita kolaborasi warga Arjuna GSP.", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=85" },
];
const programs = [
  ["01", "Sosial & kepedulian", "Menguatkan solidaritas, kepedulian tetangga, dan semangat gotong royong."],
  ["02", "Kebersihan lingkungan", "Menjaga lingkungan yang bersih, sehat, tertata, dan nyaman."],
  ["03", "Keamanan & ketertiban", "Membangun lingkungan yang aman melalui komunikasi dan partisipasi warga."],
  ["04", "Pemberdayaan warga", "Membuka ruang bagi ide, potensi, dan kegiatan produktif warga."],
];
const gallery = [
  ["https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=85", "Kebersamaan warga"],
  ["https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=85", "Kegiatan sosial"],
  ["https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=85", "Lingkungan hijau"],
  ["https://images.unsplash.com/photo-1517457373958-b7Virb5b7a7?auto=format&fit=crop&w=1000&q=85", "Ruang berkumpul"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent("Pesan untuk Pengurus RT Arjuna GSP");
    const body = encodeURIComponent(`Email warga: ${email}\n\n${message}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }
  return (
    <main className="site-shell" id="beranda">
      <div className="topline"><span>PORTAL RESMI WARGA</span><span>RT ARJUNA GSP <i /> INDONESIA</span></div>
      <header className="topbar">
        <a className="brand" href="#beranda" aria-label="RT Arjuna GSP beranda"><span className="brand-mark">A<span>.</span></span><span className="brand-copy"><strong>ARJUNA GSP</strong><small>RUKUN TETANGGA</small></span></a>
        <button className="menu-toggle" type="button" aria-label="Buka navigasi" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "TUTUP −" : "MENU +"}</button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Navigasi utama">
          <a onClick={() => setMenuOpen(false)} href="#tentang">Tentang</a><a onClick={() => setMenuOpen(false)} href="#program">Program</a><a onClick={() => setMenuOpen(false)} href="#berita">Informasi</a><a onClick={() => setMenuOpen(false)} href="#galeri">Galeri</a>
        </nav>
        <a className="nav-cta" href="#kontak">Hubungi pengurus <span>↗</span></a>
      </header>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> LINGKUNGAN · KEBERSAMAAN · KEMAJUAN</p>
          <h1>Membangun lingkungan, <em>dimulai dari kita.</em></h1>
          <p className="hero-description">Ruang informasi dan kolaborasi warga RT Arjuna GSP. Bersama menjaga lingkungan, mempererat hubungan, dan menciptakan tempat tinggal yang lebih baik.</p>
          <div className="hero-actions"><a className="primary-link" href="#tentang">Jelajahi lingkungan <span>↗</span></a><a className="secondary-link" href="#program">Lihat program <span>↓</span></a></div>
          <div className="hero-footnote"><span>01 / 04</span><span>SEBUAH LINGKUNGAN, SATU KELUARGA</span></div>
        </div>
        <div className="hero-visual"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90" alt="Hunian modern dengan taman dan lingkungan yang asri" /><div className="hero-visual-shade" /><div className="hero-image-caption"><span>RUMAH KITA</span><strong>Tempat tumbuh<br />dan saling menjaga.</strong></div><div className="hero-side-label">ARJUNA GSP — COMMUNITY PORTAL</div><div className="hero-index">A<span>/</span>GSP</div></div>
      </section>
      <section className="intro-strip" id="tentang">
        <p className="eyebrow">01 — TENTANG KAMI</p><div className="intro-content"><h2>Bukan hanya tempat tinggal.<br /><em>Ini rumah bersama.</em></h2><div><p>RT Arjuna GSP tumbuh dari kepedulian dan partisipasi setiap warganya. Kami percaya lingkungan yang baik dibangun melalui komunikasi, gotong royong, dan langkah sederhana yang dilakukan bersama.</p><a className="underlined-link" href="#kontak">Kenali dan hubungi pengurus <span>↗</span></a></div></div>
      </section>
      <section className="news-section" id="berita">
        <div className="section-heading"><div><p className="eyebrow">02 — KABAR LINGKUNGAN</p><h2>Yang sedang <em>berlangsung.</em></h2></div><span className="section-note">INFORMASI & CERITA WARGA</span></div>
        <div className="news-grid">{updates.map((item, index) => <article className="news-card" key={item.title}><a href="#kontak" className="news-image"><img src={item.image} alt="" /><span className="news-number">0{index + 1}</span><span className="image-arrow">↗</span></a><div className="news-body"><div className="news-meta"><span>{item.category}</span><span>{item.date}</span></div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
        <p className="demo-note">Konten informasi di atas merupakan contoh awal dan dapat diperbarui oleh pengurus RT.</p>
      </section>
      <section className="program-section" id="program">
        <div className="program-intro"><p className="eyebrow">03 — FOKUS KAMI</p><h2>Lingkungan yang baik dibangun <em>bersama.</em></h2><p>Setiap kontribusi berarti. Inilah beberapa hal yang menjadi perhatian dan ruang kolaborasi warga.</p><a className="light-link" href="#kontak">Ikut berkontribusi <span>↗</span></a><div className="program-decoration">A<span>.</span></div></div>
        <div className="program-list">{programs.map(([number, title, description]) => <article className="program-item" key={number}><span className="program-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="program-arrow">↗</span></article>)}</div>
      </section>
      <section className="vision-section">
        <div className="vision-image"><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1300&q=85" alt="Ruang hunian yang hangat dan nyaman" /><span>MERAWAT LINGKUNGAN, MERAWAT KEBERSAMAAN</span></div>
        <div className="vision-copy"><p className="eyebrow">04 — ARAH BERSAMA</p><h2>Langkah kecil hari ini, <em>lingkungan lebih baik esok hari.</em></h2><p>Portal ini akan terus berkembang sebagai pusat informasi dan ruang kolaborasi warga. Cerita, agenda, dan layanan akan disesuaikan dengan kebutuhan lingkungan.</p><div className="vision-signature">RT ARJUNA GSP <span>BERSAMA KITA BISA</span></div></div>
      </section>
      <section className="gallery-section" id="galeri">
        <div className="section-heading"><div><p className="eyebrow">05 — DOKUMENTASI</p><h2>Potret <em>kebersamaan.</em></h2></div><span className="section-note">MOMEN · AKTIVITAS · KOLABORASI</span></div>
        <div className="gallery-grid">{gallery.map(([src, label], index) => <figure className={`gallery-item gallery-${index + 1}`} key={label}><img src={src} alt={label} /><figcaption><span>0{index + 1}</span>{label}</figcaption></figure>)}</div>
        <p className="demo-note">Foto merupakan ilustrasi. Dokumentasi asli kegiatan RT Arjuna GSP dapat ditambahkan di sini.</p>
      </section>
      <section className="contact-section" id="kontak">
        <div className="contact-heading"><p className="eyebrow">06 — TERHUBUNG</p><h2>Ada ide untuk lingkungan kita? <em>Mari bicara.</em></h2><p>Silakan sampaikan pertanyaan, informasi, atau usulan kegiatan kepada pengurus RT.</p></div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-email">Alamat email</label><input id="contact-email" type="email" required placeholder="nama@email.com" value={email} onChange={(event) => setEmail(event.target.value)} />
          <label htmlFor="contact-message">Pesan untuk pengurus</label><textarea id="contact-message" required rows={3} placeholder="Tuliskan pesan atau usulan Anda..." value={message} onChange={(event) => setMessage(event.target.value)} />
          <button type="submit">Siapkan pesan <span>↗</span></button>
          {submitted && <p className="form-note" role="status">Aplikasi email akan dibuka untuk mengirim pesan. Alamat email pengurus perlu dikonfigurasi.</p>}
          <p className="form-note">Form ini menyiapkan pesan melalui aplikasi email perangkat Anda; belum menyimpan data ke server.</p>
        </form>
      </section>
      <footer className="footer"><a className="footer-brand" href="#beranda"><span>A.</span> ARJUNA GSP</a><span>Portal informasi dan ruang kebersamaan warga.</span><a href="#beranda">Kembali ke atas ↑</a><span>© 2026 RT Arjuna GSP</span></footer>
    </main>
  );
}
