import { useLanguage } from '../i18n/LanguageContext';
import './SimplePage.css';

export function Verification() {
  const { t, locale } = useLanguage();
  return (
    <main className="simple-page">
      <div className="container">
        <h1 className="simple-page__title font-heading">{t('how_verification_works')}</h1>
        <div className="simple-page__content font-body">
          <p>
            {locale === 'bn'
              ? 'আমরা বাড়িওয়ালার পরিচয়, বাসার ঠিকানা, ভাড়ার পরিমাণ এবং বর্তমানে খালি আছে কিনা যাচাই করি।'
              : 'We verify owner identity, property address, rent amount and current availability.'}
          </p>
          <ul style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li>✓ {t('owner_verified')}</li>
            <li>✓ {t('address_verified')}</li>
            <li>✓ {t('rent_verified')}</li>
            <li>✓ {t('availability_verified')}</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
