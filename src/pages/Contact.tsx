import { useLanguage } from '../i18n/LanguageContext';
import './SimplePage.css';

export function Contact() {
  const { locale } = useLanguage();
  return (
    <main className="simple-page">
      <div className="container">
        <h1 className="simple-page__title font-heading">
          {locale === 'bn' ? 'যোগাযোগ' : 'Contact'}
        </h1>
        <div className="simple-page__content font-body">
          <p>Email: hello@dhakarental.network</p>
          <p>
            {locale === 'bn' ? 'ঢাকা, বাংলাদেশ' : 'Dhaka, Bangladesh'}
          </p>
        </div>
      </div>
    </main>
  );
}
