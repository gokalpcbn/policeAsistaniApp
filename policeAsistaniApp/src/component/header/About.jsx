import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="about1">
          <h1> POLİÇE TAKİP SİSTEMİ</h1>
          <h2>
            Poliçe Takip Sistemi, sigorta poliçelerinizi kolayca takip etmenizi sağlayan dijital bir asistandır. Bireysel kullanıcılar ve küçük ölçekli sigorta acenteleri için
            geliştirilmiş olan bu platform, sigorta süreçlerini sadeleştirir ve zamanında bilgilendirme yaparak size konfor sağlar.
          </h2>
        </div>
        <div className="about2">
          <h1>BİREYSEL KULLANICILAR İÇİN</h1>
          <ol>
            <li>Poliçe PDF dosyanızı yükleyin</li>
            <li>Başlangıç ve bitiş tarihini girin</li>
            <li>Poliçenizin bitimine 15 gün kala e-posta ile hatırlatma alın</li>
          </ol>
        </div>
        <div className="about3">
          <h1>SİGORTA ACENTELERİ İÇİN</h1>
          <ol>
            <li>Müşterilerinizin poliçelerini tek panelden yönetin</li>
            <li>Poliçe tutarı ve komisyon oranlarını ekleyin</li>
            <li>Karlılık ve kayıp analizi yapın</li>
            <li>Bitmeye yakın poliçeler için otomatik yenileme teklifleri hazırlayın</li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default About;
