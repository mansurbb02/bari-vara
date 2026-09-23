import { useLanguage } from '../i18n/LanguageContext';
import './SimplePage.css';

export function About() {
  const { locale } = useLanguage();
  return (
    <main className="simple-page">
      <div className="container">
        <h1 className="simple-page__title font-heading">
          {locale === 'bn' ? 'আমাদের সম্পর্কে' : 'About us'}
        </h1>
        <div className="simple-page__content font-body">
          <p>
            {locale === 'bn'
              ? 'Dhaka Rental Network ঢাকায় বাসা ভাড়া খোঁজা ও দেওয়াকে সহজ, বিশ্বস্ত ও স্বচ্ছ করে তোলার জন্য তৈরি।'
              : 'Dhaka Rental Network makes finding and listing rental homes in Dhaka simple, trustworthy and transparent.'}
          </p>
          <p>
            {locale === 'bn'
              ? 'আমরা যাচাই করা তথ্য দিয়ে সাধারণ মানুষকে সাহায্য করি।'
              : 'We help ordinary people with verified information.'}
          </p>
        </div>
      </div>
    </main>
  );
}
