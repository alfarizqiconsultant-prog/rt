const updates = [
  { tag: "INFORMASI", date: "Pengumuman warga", title: "Pusat informasi RT Arjuna GSP", text: "Temukan kabar lingkungan, agenda bersama, dan informasi penting warga dalam satu portal.", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=85" },
  { tag: "LINGKUNGAN", date: "Program bersama", title: "Lingkungan bersih, nyaman, dan asri", text: "Ruang untuk berbagi inisiatif kebersihan, penghijauan, dan kepedulian lingkungan.", image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85" },
  { tag: "KEGIATAN", date: "Gotong royong", title: "Tumbuh kuat melalui kebersamaan", text: "Dokumentasi kegiatan dan cerita kolaborasi warga Arjuna GSP.", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=85" },
];

const programs = [
  ["01", "Sosial & kepedulian", "Menguatkan solidaritas, kepedulian tetangga, dan semangat gotong royong."],
  ["02", "Kebersihan lingkungan", "Mendorong lingkungan yang bersih, sehat, tertata, dan nyaman."],
  ["03", "Keamanan & ketertiban", "Membangun lingkungan yang aman melalui komunikasi dan partisipasi warga."],
  ["04", "Pemberdayaan warga", "Membuka ruang bagi ide, potensi, dan kegiatan produktif warga."],
];

const gallery = [
  ["https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=85", "Kebersamaan warga"],
  ["https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=85", "Kegiatan sosial"],
  ["https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85", "Lingkungan hijau"],
  ["https://images.unsplash.com/photo-1517457373958-b7Virb5b7a7?auto=format&fit=crop&w=900&q=85", "Ruang berkumpul"],
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#beranda" aria-label="RT Arjuna GSP beranda"><span className="brand-mark">A</span><span><strong>RT ARJUNA GSP</strong><small>BERSAMA MEMBANGUN LINGKUNGAN</small></span></a>
        <nav className="main-nav" aria-label="Navigasi utama">
          <a href="#tentang">Tentang</a><a href="#program">Program</a><a href="#berita">Informasi</a><a href="#galeri">Galeri</a>
        </nav>
        <a className="nav-cta" href="#kontak">Hubungi RT <span>↗</span></a>
      </header>

      <section className="hero" id="beranda">
        <div className="hero-copy">
          <p className="eyebrow"><span className="live-dot" /> PORTAL WARGA RT ARJUNA GSP</p>
          <h1>Lingkungan kuat, tumbuh dalam <em>kebersamaan.</em></h1>
          <p className="hero-description">Selamat datang di ruang digital warga RT Arjuna GSP. Terhubung dengan informasi lingkungan, program bersama, kegiatan warga, dan layanan kemasyarakatan.</p>
          <div className="hero-actions"><a className="primary-link" href="#tentang">Kenali lingkungan kami <span>→</span></a><a className="text-link" href="#program">Jelajahi program ↓</a></div>
          <p className="hero-note">SATU LINGKUNGAN · SATU KELUARGA · SATU TUJUAN</p>
        </div>
        <div className="hero-photo">
          <div className="photo-overlay"></div><div className="hero-photo-label"><span>RT ARJUNA GSP</span><b>Ruang untuk tumbuh bersama.</b></div>
          <div className="photo-stamp">WARGA<br/>BERDAYA</div>
        </div>
      </section>

      <section className="welcome-band" id="tentang">
        <div><p className="eyebrow">SELAMAT DATANG DI LINGKUNGAN KAMI</p><h2>Lebih dari sekadar tempat tinggal.<br/><em>Inilah rumah bersama.</em></h2></div>
        <p>RT Arjuna GSP adalah lingkungan yang tumbuh dari kepedulian dan partisipasi warganya. Melalui portal ini, kami ingin mendekatkan informasi, membuka ruang kolaborasi, dan merawat semangat kebersamaan.</p>
      </section>

      <section className="news-section" id="berita">
        <div className="section-heading"><div><p className="eyebrow">KABAR LINGKUNGAN</p><h2>Yang baru di sekitar kita.</h2></div><a className="text-link" href="#kontak">Sampaikan informasi ↗</a></div>
        <div className="news-grid">{updates.map((item) => <article className="news-card" key={item.title}><div className="news-image"><img src={item.image} alt="" /><span>{item.tag}</span></div><div className="news-body"><p className="news-date">{item.date}</p><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
      </section>

      <section className="program-section" id="program">
        <div className="program-intro"><p className="eyebrow">FOKUS KAMI</p><h2>Hal baik dimulai dari langkah <em>bersama.</em></h2><p>Kami percaya lingkungan yang nyaman dibangun melalui kepedulian sehari-hari dan kontribusi setiap warga.</p><a className="light-link" href="#kontak">Mari berkontribusi ↗</a></div>
        <div className="program-list">{programs.map(([number,title,description]) => <article className="program-item" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div><b>↗</b></article>)}</div>
      </section>

      <section className="blueprint">
        <div className="blueprint-copy"><p className="eyebrow">ARAH BERSAMA</p><h2>Membangun RT yang <em>aktif, peduli, dan terhubung.</em></h2><p>Portal ini akan terus dikembangkan sebagai pusat informasi dan kolaborasi warga. Program dan layanan dapat bertambah mengikuti kebutuhan lingkungan.</p></div>
        <div className="blueprint-quote"><span>“</span><p>Kekuatan lingkungan berawal dari warga yang saling mengenal, peduli, dan bergerak bersama.</p><small>SEMANGAT RT ARJUNA GSP</small></div>
      </section>

      <section className="gallery-section" id="galeri">
        <div className="section-heading"><div><p className="eyebrow">CERITA KEBERSAMAAN</p><h2>Galeri kegiatan warga.</h2></div><span className="section-index">MOMEN · AKTIVITAS · KOLABORASI</span></div>
        <div className="gallery-grid">{gallery.map(([src,label],i) => <figure className={`gallery-item gallery-${i+1}`} key={label}><img src={src} alt={label}/><figcaption>{label}</figcaption></figure>)}</div>
        <p className="gallery-note">Foto di atas merupakan gambar ilustrasi. Dokumentasi kegiatan RT Arjuna GSP dapat ditambahkan oleh pengurus.</p>
      </section>

      <section className="contact-section" id="kontak"><div><p className="eyebrow">PUNYA IDE ATAU PERTANYAAN?</p><h2>Mari jaga lingkungan ini <em>bersama.</em></h2><p>Hubungi pengurus RT untuk menyampaikan informasi, pertanyaan, atau usulan kegiatan warga.</p></div><span className="contact-button">Kontak pengurus akan ditambahkan <span>↗</span></span></section>
      <footer className="footer"><a className="footer-brand" href="#beranda">RT ARJUNA GSP</a><span>Portal informasi dan ruang kebersamaan warga.</span><a href="#beranda">Kembali ke atas ↑</a><span>© 2026 RT Arjuna GSP</span></footer>
    </main>
  );
}
