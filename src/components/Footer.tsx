import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './Footer.css';

export function Footer() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <div className="footer__logo font-heading">
            <span className="footer__logo-mark">DR</span>
            Dhaka Rental Network
          </div>
          <p className="footer__tagline font-body">{t('footer_tagline')}</p>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <h4 className="footer__col-title font-heading">{t('footer_find')}</h4>
            <Link to="/search">{t('nav_find_home')}</Link>
            <Link to="/areas">{t('footer_areas')}</Link>
            <Link to="/requests">{t('nav_post_request')}</Link>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title font-heading">{t('footer_list')}</h4>
            <Link to="/list-property">{t('nav_list_property')}</Link>
            <Link to="/verification">{t('footer_verification')}</Link>
            <Link to="/pricing">{t('choose_plan')}</Link>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title font-heading">{t('footer_help')}</h4>
            <Link to="/help">{t('nav_help')}</Link>
            <Link to="/how-it-works">{t('nav_how_it_works')}</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title font-heading">Legal</h4>
            <Link to="/terms">{t('footer_terms')}</Link>
            <Link to="/privacy">{t('footer_privacy')}</Link>
            <Link to="/contact">{t('footer_contact')}</Link>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© 2026 Dhaka Rental Network</p>
          <div className="footer__lang">
            <button
              type="button"
              className={locale === 'bn' ? 'is-active' : ''}
              onClick={() => setLocale('bn')}
            >
              বাংলা
            </button>
            <span>|</span>
            <button
              type="button"
              className={locale === 'en' ? 'is-active' : ''}
              onClick={() => setLocale('en')}
            >
              English
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
