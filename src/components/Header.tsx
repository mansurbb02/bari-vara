import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './Header.css';

export function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__logo font-heading">
          <span className="header__logo-mark">DR</span>
          <span className="header__logo-text">Dhaka Rental</span>
        </Link>

        <nav className="header__nav" aria-label="Main">
          <NavLink to="/search" className="header__nav-link">{t('nav_find_home')}</NavLink>
          <NavLink to="/requests" className="header__nav-link">{t('nav_post_request')}</NavLink>
          <NavLink to="/list-property" className="header__nav-link">{t('nav_list_property')}</NavLink>
          <NavLink to="/how-it-works" className="header__nav-link">{t('nav_how_it_works')}</NavLink>
          <NavLink to="/help" className="header__nav-link">{t('nav_help')}</NavLink>
        </nav>

        <div className="header__actions">
          <div className="header__lang" role="group" aria-label="Language">
            <button
              type="button"
              className={`header__lang-btn ${locale === 'bn' ? 'is-active' : ''}`}
              onClick={() => setLocale('bn')}
            >
              বাংলা
            </button>
            <span className="header__lang-sep">|</span>
            <button
              type="button"
              className={`header__lang-btn ${locale === 'en' ? 'is-active' : ''}`}
              onClick={() => setLocale('en')}
            >
              English
            </button>
          </div>
          <Link to="/login" className="header__login font-heading">
            {t('nav_login')}
          </Link>
          <button
            type="button"
            className="header__menu-toggle"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="header__mobile-menu">
          <NavLink to="/search" onClick={() => setMenuOpen(false)}>{t('nav_find_home')}</NavLink>
          <NavLink to="/requests" onClick={() => setMenuOpen(false)}>{t('nav_post_request')}</NavLink>
          <NavLink to="/list-property" onClick={() => setMenuOpen(false)}>{t('nav_list_property')}</NavLink>
          <NavLink to="/how-it-works" onClick={() => setMenuOpen(false)}>{t('nav_how_it_works')}</NavLink>
          <NavLink to="/help" onClick={() => setMenuOpen(false)}>{t('nav_help')}</NavLink>
          <NavLink to="/login" onClick={() => setMenuOpen(false)}>{t('nav_login')}</NavLink>
        </div>
      )}
    </header>
  );
}
