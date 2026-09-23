import { useLanguage } from '../i18n/LanguageContext';
import './SimplePage.css';

export function Help() {
  const { locale } = useLanguage();
  return (
    <main className="simple-page">
      <div className="container">
        <h1 className="simple-page__title font-heading">
          {locale === 'bn' ? 'সহায়তা' : 'Help'}
        </h1>
        <div className="simple-page__content font-body">
          <p>
            {locale === 'bn'
              ? 'কোনো প্রশ্ন থাকলে আমাদের ইমেইল করুন: help@dhakarental.network'
              : 'Email us at help@dhakarental.network if you have questions.'}
          </p>
          <p>
            {locale === 'bn'
              ? 'আমরা সাধারণত ২৪ ঘণ্টার মধ্যে উত্তর দিই।'
              : 'We usually reply within 24 hours.'}
          </p>
        </div>
      </div>
    </main>
  );
}
