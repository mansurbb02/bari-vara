import { useLanguage } from '../i18n/LanguageContext';
import { Button } from '../components/Button';
import './SimplePage.css';

export function NewRequest() {
  const { locale, t } = useLanguage();
  return (
    <main className="simple-page">
      <div className="container" style={{ maxWidth: 560 }}>
        <h1 className="simple-page__title font-heading">{t('tenant_request_cta')}</h1>
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <label className="form-label">
            {locale === 'bn' ? 'কোন এলাকায়?' : 'Which area?'}
            <input type="text" className="form-input" placeholder={locale === 'bn' ? 'মিরপুর বা উত্তরা' : 'Mirpur or Uttara'} />
          </label>
          <label className="form-label">
            {t('budget_question')}
            <input type="number" className="form-input" placeholder="25000" />
          </label>
          <label className="form-label">
            {t('for_whom')}
            <select className="form-input">
              <option value="family">{t('family')}</option>
              <option value="bachelor">{t('bachelor')}</option>
              <option value="room">{t('room')}</option>
              <option value="sublet">{t('sublet')}</option>
            </select>
          </label>
          <label className="form-label">
            {locale === 'bn' ? 'বিস্তারিত' : 'Details'}
            <textarea className="form-input" rows={3} style={{ height: 'auto', padding: 12 }} />
          </label>
          <Button type="submit" fullWidth>
            {locale === 'bn' ? 'চাহিদা জমা দিন' : 'Submit request'}
          </Button>
        </form>
      </div>
    </main>
  );
}
