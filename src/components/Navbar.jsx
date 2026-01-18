"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close offcanvas when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="navbar-custom">
      <div className="container-fluid p-0">
        <div className="navbar-wrapper">
          {/* Left Section with Logo */}
          <div className="navbar-logo-section">
            <div className="d-flex align-items-center gap-3">
              {/* Logo */}
              <div className="navbar-logo">
                <Image
                  src="/images/logo.png"
                  alt="Profuture Logo"
                  width={283}
                  height={91}
                  priority
                  className="navbar-logo-img"
                />
              </div>
            </div>
          </div>

          {/* Right Section with Top Bar and Navigation */}
          <div className="navbar-right-section">
            {/* Top Information Bar - Desktop Only */}
            <div className="navbar-top-bar">
              <div className="navbar-top-bar-content">
                <div className="navbar-top-left">
                  <FontAwesomeIcon icon={faEnvelope} className="navbar-top-icon" />
                  <span className="navbar-top-text">profuture@gmail.com</span>
                </div>
                <div className="navbar-top-right">
                  <span className="navbar-top-text">ISSN: 345-255</span>
                  <span className="navbar-top-text">Başlangıç: 2025</span>
                  <span className="navbar-top-text">Periyot: Yılda 2 Sayı</span>
                </div>
              </div>
            </div>

            {/* Main Navigation */}
            <div className="navbar-nav-section">
              <div className="navbar-nav-content">
                {/* Home Icon - Desktop Only */}
                <div className="navbar-left-controls">
                  <a href="#" className="navbar-home-icon">
                    <FontAwesomeIcon icon={faHome} className="navbar-home-icon-svg" />
                  </a>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-desktop-nav">
                  {/* Navigation Links */}
                  <div className="navbar-links">
                    <a href="#" className="navbar-link">Amaç ve Kapsam</a>
                    <a href="#" className="navbar-link">Etik İlkeler ve Yayın Politikası</a>
                    <a href="#" className="navbar-link">Makale Çağrıları</a>
                    <a href="#" className="navbar-link">Sayılar</a>
                    <a href="#" className="navbar-link">İletişim</a>
                  </div>

                  {/* Buttons */}
                  <div className="navbar-buttons">
                    {/* Dergi Kurulu Button */}
                    <button className="btn navbar-btn-primary">
                      <Image src="/icons/kurul.svg" alt="Kurul" width={25} height={22} className="me-2" />
                      <span className="navbar-btn-text">Dergi Kurulu</span>
                    </button>

                    {/* Yazar Rehberi Button */}
                    <button className="btn navbar-btn-secondary">
                      <Image src="/icons/author.svg" alt="Author" width={24} height={24} className="me-2" />
                      <span className="navbar-btn-text">Yazar Rehberi</span>
                    </button>

                    {/* Search Button */}
                    <button className="btn navbar-search-btn">
                      <FontAwesomeIcon icon={faSearch} className="navbar-search-icon" />
                    </button>
                  </div>
                </div>

                {/* Mobile Burger Icon - Right Side */}
                <button 
                  className="navbar-mobile-toggle"
                  onClick={toggleMobileMenu}
                  aria-label="Toggle menu"
                >
                  <FontAwesomeIcon 
                    icon={isMobileMenuOpen ? faTimes : faBars} 
                    className="navbar-mobile-toggle-icon"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Offcanvas - Right Side */}
      <div 
        className={`navbar-offcanvas-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
      >
        <div 
          className={`navbar-offcanvas ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Information Bar in Offcanvas */}
          <div className="navbar-offcanvas-top-bar">
            <div className="navbar-offcanvas-top-left">
              <div className="navbar-top-left">
                <FontAwesomeIcon icon={faEnvelope} className="navbar-top-icon" />
                <span className="navbar-top-text">profuture@gmail.com</span>
              </div>
              <div className="navbar-top-right">
                <span className="navbar-top-text">ISSN: 345-255</span>
                <span className="navbar-top-text">Başlangıç: 2025</span>
                <span className="navbar-top-text">Periyot: Yılda 2 Sayı</span>
              </div>
            </div>
            {/* Close Button */}
            <button 
              className="navbar-offcanvas-close"
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faTimes} className="navbar-offcanvas-close-icon" />
            </button>
          </div>

          {/* Navigation Links in Offcanvas */}
          <div className="navbar-offcanvas-content">
            <div className="navbar-mobile-links">
              <a href="#" className="navbar-mobile-link" onClick={toggleMobileMenu}>Amaç ve Kapsam</a>
              <a href="#" className="navbar-mobile-link" onClick={toggleMobileMenu}>Etik İlkeler ve Yayın Politikası</a>
              <a href="#" className="navbar-mobile-link" onClick={toggleMobileMenu}>Makale Çağrıları</a>
              <a href="#" className="navbar-mobile-link" onClick={toggleMobileMenu}>Sayılar</a>
              <a href="#" className="navbar-mobile-link" onClick={toggleMobileMenu}>İletişim</a>
            </div>
            <div className="navbar-mobile-buttons">
              <button className="btn navbar-btn-primary navbar-mobile-btn" onClick={toggleMobileMenu}>
                <Image src="/icons/kurul.svg" alt="Kurul" width={25} height={22} className="me-2" />
                Dergi Kurulu
              </button>
              <button className="btn navbar-btn-secondary navbar-mobile-btn" onClick={toggleMobileMenu}>
                <Image src="/icons/author.svg" alt="Author" width={24} height={24} className="me-2" />
                Yazar Rehberi
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
