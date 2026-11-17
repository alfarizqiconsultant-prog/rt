const sections = [
  ["01", "Informasi warga", "Pengumuman dan informasi penting lingkungan dalam satu tempat."],
  ["02", "Layanan administrasi", "Informasi layanan dan kebutuhan administrasi RT."],
  ["03", "Kegiatan lingkungan", "Agenda, kegiatan, dan kabar terbaru RT Arjuna GSP."],
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#"><span className="brand-mark">A</span><span><strong>RT ARJUNA GSP</strong><small>PORTAL WARGA</small></span></a>
        <a className="top-link" href="#tentang">Tentang portal ↗</a>
      </header>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="live-dot" /> PORTAL RESMI WARGA</p>
          <h1>Ruang bersama untuk warga <em>Arjuna GSP.</em></h1>
          <p className="hero-description">Selamat datang di portal RT Arjuna GSP. Satu tempat untuk mendapatkan informasi lingkungan, mengenal kegiatan warga, dan mengakses layanan RT.</p>
          <a className="primary-link" href="#layanan">Jelajahi portal <span>→</span></a>
          <p className="hero-note">Dibangun untuk lingkungan yang lebih terhubung.</p>
        </div>
        <div className="hero-art" role="img" aria-label="Ilustrasi lingkungan tempat tinggal">
          <div className="sun" /><div className="art-label">BERSAMA<br/>MEMBANGUN<br/><b>LINGKUNGAN</b></div>
          <div className="building building-back"><i/><i/><i/><i/></div>
          <div className="building building-front"><i/><i/><i/><i/><i/><i/></div>
          <div className="tree tree-one"><i/></div><div className="tree tree-two"><i/></div>
          <div className="ground"/><div className="art-caption">RT ARJUNA GSP <span>•</span> INDONESIA</div>
        </div>
      </section>
      <section className="intro" id="tentang">
        <div><p className="eyebrow">SELAMAT DATANG</p><h2>Lingkungan yang baik<br/>dimulai dari <em>kebersamaan.</em></h2></div>
        <p className="intro-copy">Portal ini menjadi fondasi digital RT Arjuna GSP. Informasi dan fitur layanan akan dikembangkan bertahap sesuai kebutuhan warga.</p>
      </section>
      <section className="services" id="layanan">
        <div className="section-heading"><div><p className="eyebrow">DI DALAM PORTAL</p><h2>Lebih dekat, lebih mudah.</h2></div><span className="section-index">01 — 03</span></div>
        <div className="service-grid">{sections.map(([number,title,description]) => <article className="service-card" key={number}><span className="service-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="coming-soon">SEGERA HADIR</span></article>)}</div>
      </section>
      <footer className="footer"><a className="footer-brand" href="#">RT ARJUNA GSP</a><span>Portal informasi dan layanan warga.</span><span>© {new Date().getFullYear()} RT Arjuna GSP</span></footer>
    </main>
  );
}
