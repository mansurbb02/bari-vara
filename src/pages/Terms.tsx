import { useLanguage } from '../i18n/LanguageContext';
import './SimplePage.css';

export function Terms() {
  const { locale } = useLanguage();
  return (
    <main className="simple-page">
      <div className="container">
        <h1 className="simple-page__title font-heading">
          {locale === 'bn' ? 'শর্তাবলী' : 'Terms of use'}
        </h1>
        <div className="simple-page__content font-body">
          <p>
            {locale === 'bn'
              ? 'এই ওয়েবসাইট ব্যবহার করে আপনি আমাদের শর্তাবলী মেনে চলতে সম্মত হচ্ছেন। বাসার তথ্য যাচাই করা হলেও চূড়ান্ত সিদ্ধান্ত আপনার।'
              : 'By using this website you agree to our terms. Even with verification, the final decision is yours.'}
          </p>
        </div>
      </div>
    </main>
  );
}
