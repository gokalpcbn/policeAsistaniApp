function Header() {
  return (
    <>
      <div className="header">
        <div className="header-links">
          <a href="/" className="nav-link">
            Ana Sayfa
          </a>
          <a href="/hakkinda" className="nav-link">
            Hakkında
          </a>
          <a href="/urunler" className="nav-link">
            Ürünler/Hizmetler
          </a>
          <a href="/saglik" className="nav-link">
            Poliçelerim
          </a>
          <a href="/iletisim" className="nav-link">
            İletişim
          </a>
        </div>
        <div href="/" className="header-links">
          <a href="Login" className="nav-link">
            GİRİŞ YAP/ÜYE OL
          </a>
        </div>
      </div>
    </>
  );
}
export default Header;
