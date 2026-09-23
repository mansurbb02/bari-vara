import { useLanguage } from '../i18n/LanguageContext';
import './SimplePage.css';

export function Privacy() {
  const { locale } = useLanguage();
  return (
    <main className="simple-page">
      <div className="container">
        <h1 className="simple-page__title font-heading">
          {locale === 'bn' ? 'গোপনীয়তা নীতি' : 'Privacy policy'}
        </h1>
        <div className="simple-page__content font-body">
          <p>
            {locale === 'bn'
              ? 'আমরা আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখি এবং শুধুমাত্র সেবার জন্য ব্যবহার করি।'
              : 'We protect your personal information and use it only to provide the service.'}
          </p>
        </div>
      </div>
    </main>
  );
}
