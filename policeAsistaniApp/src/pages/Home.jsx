import React from "react";
import { Link } from "react-router-dom";
import heroImage1 from "../assets/hero.jpg";
import heroImage2 from "../assets/hero2.jpeg";
import heroImage3 from "../assets/hero3.jpg";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-wrapper">
        <div className="hero-images">
          <img src={heroImage2} alt="Sigorta 2" className="side-hero-img" />
          <img src={heroImage1} alt="Sigorta 1" className="main-hero-img" />
          <img src={heroImage3} alt="Sigorta 3" className="side-hero-img" />
        </div>

        <div className="hero-text-box">
          <h1>Poliçe Asistanı'na Hoşgeldiniz!</h1>
          <p>Sigortanızı kolayca takip edin ve yönetim zahmetini unutun.</p>
        </div>
      </div>

      {/* Öne Çıkan Özellikler */}
      <div className="features">
        <h2>Öne Çıkan Özellikler</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Kolay Yönetim</h3>
            <p>Tüm poliçelerinizi tek yerden görüntüleyin ve yönetin.</p>
          </div>
          <div className="card">
            <h3>Hatırlatmalar</h3>
            <p>Poliçe yenileme tarihlerinizi asla kaçırmayın.</p>
          </div>
          <div className="card">
            <h3>Hızlı Teklif</h3>
            <p>Farklı sigorta şirketlerinden hızlıca teklif alın.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
