import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <section className="hero-section">
        <div className="hero-background">
          <Image
            src="/images/hero1.png"
            alt="Hero Background"
            fill
            priority
            style={{ objectFit: "cover" }}
            quality={90}
          />
        </div>
        <div className="hero-content">
          {/* Main Heading */}
          <h1 className="hero-title">
            <span className="hero-title-line1">Profuture Teknoloji Dergisi</span>
            <span className="hero-title-line2">Son Sayı Yayında</span>
          </h1>

          {/* Description Paragraph */}
          <p className="hero-description">
            Protufure teknoloji mekanizmaları değişikliği alanlarında özgün akademik çalışmalar içeren yeni sayıya şimdi erişin.
          </p>

          {/* Metadata Section */}
          <div className="hero-metadata">
            <div className="metadata-item">
              <Image src="/icons/cilt.svg" alt="Cilt" width={18} height={18} className="metadata-icon" />
              <span>Cilt: 2</span>
            </div>
            <div className="metadata-item">
              <Image src="/icons/Number.svg" alt="Sayı" width={18} height={18} className="metadata-icon" />
              <span>Sayı: 7</span>
            </div>
            <div className="metadata-item">
              <Image src="/icons/calendar.svg" alt="Calendar" width={18} height={18} className="metadata-icon" />
              <span>Haziran 2025</span>
            </div>
          </div>

          {/* Call to Action Button */}
          <button className="hero-button">
            <span>Dergiyi Görüntüle</span>
            <FontAwesomeIcon icon={faArrowRight} className="button-icon" />
          </button>
        </div>
      </section>
      <div className="hero-journal-image">
        <Image
          src="/images/dergison1.png"
          alt="Journal Cover"
          width={739}
          height={696}
          priority
          style={{ objectFit: "contain" }}
        />
      </div>
      <section className="hero-section-content">
        <p className="hero-section-title2">Dergi Amacı ve Kapsamı</p>
        <h3 className="hero-section-title3">Profuture Teknoloji Dergisi</h3>
        <p className="hero-section-description2">Profuture Teknoloji Dergisi, 2022 yılında yayın hayatına başlayan; teknoloji, inovasyon, dijital dönüşüm ve geleceğin üretim modelleri ekseninde sosyal bilimler ile mühendislik ve fen bilimlerini bir araya getiren, uluslararası hakemli ve açık erişimli bir akademik yayındır.</p>
        <button className="hero-detay-button">
          <span>Detay</span>
          <FontAwesomeIcon icon={faArrowRight} className="detay-button-icon" />
        </button>
      </section>
    </div>
  );
}
