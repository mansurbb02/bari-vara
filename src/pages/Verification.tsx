import { useLanguage } from '../i18n/LanguageContext';
import './SimplePage.css';

export function Verification() {
  const { t, locale } = useLanguage();
  return (
    <main className="simple-page">
      <div className="container">
        <h1 className="simple-page__title font-heading">{t('how_verification_works')}</h1>
        <p className="simple-page__lead font-body">
          {locale === 'bn'
            ? 'বাসা নেওয়ার আগে কোন তথ্য যাচাই করা হয়েছে — পরিষ্কার করে দেখুন।'
            : 'See clearly what has been verified before you rent.'}
        </p>

        <div className="verify-steps">
          <div className="verify-step">
            <span className="verify-step__num font-heading">১</span>
            <div>
              <h2 className="verify-step__title font-heading">{t('trust_step1_title')}</h2>
              <p className="verify-step__desc font-body">{t('trust_step1_desc')}</p>
            </div>
          </div>
          <div className="verify-step">
            <span className="verify-step__num font-heading">২</span>
            <div>
              <h2 className="verify-step__title font-heading">{t('trust_step2_title')}</h2>
              <p className="verify-step__desc font-body">{t('trust_step2_desc')}</p>
            </div>
          </div>
          <div className="verify-step">
            <span className="verify-step__num font-heading">৩</span>
            <div>
              <h2 className="verify-step__title font-heading">{t('trust_step3_title')}</h2>
              <p className="verify-step__desc font-body">{t('trust_step3_desc')}</p>
            </div>
          </div>
        </div>

        <div className="simple-page__content font-body" style={{ marginTop: 40 }}>
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
