import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-links">
        <Link to="/" className="nav-link">
          Ana Sayfa
        </Link>
        <Link to="/hakkinda" className="nav-link">
          Hakkında
        </Link>
        <Link to="/urunler" className="nav-link">
          Ürünler/Hizmetler
        </Link>
        <Link to="/saglik" className="nav-link">
          Poliçelerim
        </Link>
        <Link to="/iletisim" className="nav-link">
          İletişim
        </Link>
      </div>
      <div className="header-links">
        <Link to="/login" className="nav-link">
          GİRİŞ YAP/ÜYE OL
        </Link>
      </div>
    </div>
  );
}

export default Header;
