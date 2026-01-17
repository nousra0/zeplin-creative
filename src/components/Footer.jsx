"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      {/* Top Section - Contact Information */}
      <div className="footer-top-section">
        <div className="footer-content-wrapper">
          {/* Column 1: Journal Editor */}
          <div className="footer-column">
            <div className="footer-icon-wrapper">
              <Image 
                src="/icons/card.svg" 
                alt="User" 
                width={24} 
                height={24} 
                className="footer-icon"
              />
            </div>
            <div className="footer-column-content">
              <div className="footer-label">Dergi Editörü</div>
              <div className="footer-value">Prof. Dr. Elif Başkaya Acar</div>
              <div className="footer-email">
                <Image 
                  src="/icons/Vector3.svg" 
                  alt="Mail" 
                  width={24} 
                  height={24} 
                  className="footer-email-icon"
                />
                <a href="mailto:elif@gmail.com" className="footer-email-link">elif@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Column 2: Mail Address */}
          <div className="footer-column">
            <div className="footer-icon-wrapper">
              <FontAwesomeIcon icon={faEnvelope} className="footer-icon-fa" />
            </div>
            <div className="footer-column-content">
              <div className="footer-label">Mail Adresi</div>
              <div className="footer-value">profuture@gmail.com</div>
            </div>
          </div>

          {/* Column 3: Publisher Location */}
          <div className="footer-column">
            <div className="footer-icon-wrapper">
              <Image 
                src="/icons/location.svg" 
                alt="Location" 
                width={24} 
                height={24} 
                className="footer-icon"
              />
            </div>
            <div className="footer-column-content">
              <div className="footer-label">Profuture Teknoloji Yayınevi</div>
              <div className="footer-address">
                <div>Ahmet Kemal Mahallesi 1245. Cadde No: 10</div>
                <div>Çankaya/Ankara</div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="footer-separator"></div>

        {/* Disclaimer Section */}
        <div className="footer-disclaimer">
          <p className="footer-disclaimer-text">
            Bu sitede yer alan tüm yazılı, görsel ve uygulama içerikleri kaynak gösterilmeden kullanılamaz. 
            Site içerisinde sunulan bilgiler yalnızca bilgilendirme amacıyla hazırlanmış olup, bu bilgilerin 
            kullanımından doğabilecek her türlü sorumluluk kullanıcıya aittir. Siteye erişim sağlayan kullanıcılar, 
            bu şartları okumuş, anlamış ve kabul etmiş sayılır.
          </p>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="footer-bottom-section">
        <div className="footer-copyright">
          Profuture Teknoloji - Tüm Hakları Saklıdır. © 2025
        </div>
      </div>
    </footer>
  );
}
