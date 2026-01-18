"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faEye,
  faArrowDown,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import "./Body.css";

export default function Body() {
  const magazines = [
    {
      id: 1,
      type: "Dergi",
      title: "Teknoloji ve Dijital Dergisi",
      volume: "1",
      issue: "1",
      date: "Aralık 2022",
      isNew: true,
      isLatest: false,
      coverImage: "/images/digital.png"
    },
    {
      id: 2,
      type: "Dergi",
      title: "Teknoloji ve Dijital Dergisi",
      volume: "1",
      issue: "1",
      date: "Aralık 2022",
      isNew: true,
      isLatest: false,
      coverImage: "/images/digital.png"
    },
    {
      id: 3,
      type: "Dergi",
      title: "Teknoloji ve Dijital Dergisi",
      volume: "1",
      issue: "1",
      date: "Aralık 2022",
      isNew: true,
      isLatest: true,
      coverImage: "/images/digital.png"
    }
  ];

  // Navigation arrows - scroll functionality can be implemented when needed
  const handlePrev = () => {
    // TODO: Implement scroll functionality
  };

  const handleNext = () => {
    // TODO: Implement scroll functionality
  };

  return (
    <div className="body-container">
      <div className="body-header">
        <div className="body-header-left">
          <div className="body-header-titles">
            <span className="body-subtitle">Sayılar</span>
            <h2 className="body-title">Dergiler</h2>
          </div>
          <div className="body-navigation-arrows">
            <button
              className="body-nav-arrow body-nav-arrow-left"
              onClick={handlePrev}
              aria-label="Previous"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              className="body-nav-arrow body-nav-arrow-right"
              onClick={handleNext}
              aria-label="Next"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
        <button className="body-view-all-btn">
          <span>Tümünü Görüntüle</span>
          <FontAwesomeIcon icon={faArrowRight} className="body-view-all-icon" />
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {magazines.map((magazine) => (
          <div className="col" key={magazine.id}>
            <div className="card mb-3 body-magazine-card-wrapper" style={{ width: '465px', maxWidth: '465px', border: 'none', boxShadow: '10px 10px 10px 10px #F6F8FF', borderRadius: '10px', height: '320px' }} key={magazine.id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <Image
                    src={magazine.coverImage}
                    alt={magazine.title}
                    width={300}
                    height={400}
                    style={{ objectFit: "contain", width: "100%", height: "100%" }}
                  />
                </div>
                <div className="col-md-8 p-1">
                  <div className="card-body">
                    <div className="card-title">
                      <div className="body-card-top">
                        <div className="body-card-brand">
                          <Image
                            src="/icons/pdf.svg"
                            alt="PDF"
                            width={22}
                            height={25}
                            className="body-metadata-icon"
                          />
                        </div>
                        {magazine.isNew && (
                          <div className="body-new-badge">
                            <span>YENİ</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="card-text">
                      <div className="body-card-details">
                        <div className="body-card-type">{magazine.type}</div>
                        <h1 className="body-card-title">{magazine.title}</h1>
                        <div className="body-card-metadata">
                          <div className="body-metadata-row">
                            <div className="body-metadata-item">
                              <Image
                                src="/icons/cilt.svg"
                                alt="Cilt"
                                width={16}
                                height={16}
                                className="body-metadata-icon"
                              />
                              Cilt:<span className="fw-bold" style={{ color: "#2A2C31" }}> {magazine.volume}</span>
                            </div>
                            <div className="body-metadata-item">
                              <Image
                                src="/icons/Number.svg"
                                alt="Sayı"
                                width={16}
                                height={16}
                                className="body-metadata-icon"
                              />
                              Sayı:<span className="fw-bold" style={{ color: "#2A2C31" }}> {magazine.issue}</span>
                            </div>
                          </div>
                          <div className="body-metadata-item">
                            <Image
                              src="/icons/calendar.svg"
                              alt="Calendar"
                              width={16}
                              height={16}
                              className="body-metadata-icon"
                            />
                            Tarih:<span className="fw-bold" style={{ color: "#2A2C31" }}> {magazine.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="card-footer bg-white">
                    <div className="body-card-actions">
                      <button className="body-action-btn body-action-btn-primary">
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      <button className="body-action-btn body-action-btn-secondary">
                        <FontAwesomeIcon icon={faArrowDown} />
                      </button>
                      <button className="body-action-btn body-action-btn-secondary">
                        <FontAwesomeIcon icon={faChevronRight} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>))}
      </div>

      <div className="body-second-container relative">
        <div className="body-second-left">
          <Image
            src="/images/magazines.png"
            alt="Magazines"
            width={514}
            height={439}
            className="body-second-magazines"
          />
        </div>
        <div className="body-second-center absolute top-0 left-0">
          <div className="body-second-content">
            <div className="body-second-icon">
              <Image
                src="/icons/Vector.svg"
                alt="Vector"
                width={33}
                height={36}
              />
            </div>
            <div className="body-second-label">Makale Çağrısı</div>
            <h2 className="body-second-title">Türkiye Ulusal Dijital Veri ve Altyapıları</h2>
            <p className="body-second-description">
              Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi, kamu ve özel sektörde teknoloji altyapıları, yapay zekâ uygulamaları, büyük veri analitiği, siber güvenlik, akıllı sistemler ve dijital dönüşüm odaklı özgün, güncel ve disiplinlerarası akademik çalışmalar değerlendirilecektir.
            </p>
            <button className="body-second-button">
              <span>Makale Gönder</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
        <div className="body-second-right">
          <Image
            src="/images/ekranresmi.png"
            alt="Ekranresmi"
            width={306}
            height={465}
            className="body-second-ekranresmi"
          />
        </div>
      </div>

      <div className="body-third-container">
        <div className="body-third-left">
          <div className="body-third-magazine-card">
            <div className="body-third-latest-banner">
              <span>SON SAYI</span>
            </div>
            <div className="body-third-magazine-image-wrapper">
              <Image
                src="/images/ekranresmi1.png"
                alt="Latest Magazine Issue"
                width={428}
                height={641}
                className="body-third-magazine-image"
              />
            </div>
            <div className="body-third-magazine-actions">
              <button className="body-third-download-btn">
                <Image
                  src="/icons/Union.svg"
                  alt="Download"
                  width={18}
                  height={18}
                />
              </button>
              <button className="body-third-view-btn">
                <FontAwesomeIcon icon={faEye} />
                <span>Görüntüle</span>
              </button>
            </div>
          </div>
        </div>
        <div className="body-third-right">
          <div className="body-third-right-header">
            <div className="body-third-right-titles">
              <div className="body-third-magazine-name">Profuture Teknoloji Dergisi</div>
              <h3 className="body-third-articles-title">Güncel Yazılar</h3>
            </div>
            <button className="body-third-view-all-btn">
              <span>Tümünü Görüntüle</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <div className="body-third-articles-list">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="body-third-article-card">
                <div className="body-third-article-tags">
                  <span className="body-third-tag body-third-tag-primary">İklim</span>
                  <span className="body-third-tag body-third-tag-secondary">Araştırma Makalesi</span>
                </div>
                <div className="body-third-article-content-row">
                  <div className="body-third-article-content">
                    <div className="body-third-article-title-wrapper">
                      <Image
                        src="/icons/pdf.svg"
                        alt="PDF"
                        width={22}
                        height={25}
                        className="body-third-title-icon"
                      />
                      <h4 className="body-third-article-title">
                        Türkiye&apos;nin Teknoloji Politikaları ve Döngüsel Ekonomi
                      </h4>
                    </div>
                    <div className="body-third-article-details">
                      <div className="body-third-article-detail-item">
                        <Image
                          src="/icons/Vector2.svg"
                          alt="Page"
                          width={12}
                          height={15}
                          className="body-third-detail-icon"
                        />
                        <span className="body-third-article-detail-item-text">Sayfa: <b>12-28</b></span>
                      </div>
                      <div className="body-third-article-detail-item">
                        <Image
                          src="/icons/author2.svg"
                          alt="Author"
                          width={15}
                          height={15}
                          className="body-third-detail-icon"
                        />
                        <span className="body-third-article-detail-item-text">Elif Başkaya Acar, Emre Taran, Halil Başar</span>
                      </div>
                    </div>
                  </div>
                  <div className="body-third-article-actions">
                    <button className="body-third-article-action-btn">
                    <Image
                        src="/icons/Vector3.svg"
                        alt="Download"
                        width={16}
                        height={16}
                      />
                    </button>
                    <button className="body-third-article-action-btn">
                      <Image
                        src="/icons/Union.svg"
                        alt="Download"
                        width={16}
                        height={16}
                      />
                    </button>
                    <button className="body-third-article-view-btn">
                    <Image
                        src="/icons/eye.svg"
                        alt="Download"
                        width={16}
                        height={16}
                      />
                      <span>Görüntüle</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
