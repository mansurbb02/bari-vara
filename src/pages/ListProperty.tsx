import { useLanguage } from '../i18n/LanguageContext';
import { Button } from '../components/Button';
import './SimplePage.css';

export function ListProperty() {
  const { locale } = useLanguage();
  return (
    <main className="simple-page">
      <div className="container" style={{ maxWidth: 560 }}>
        <h1 className="simple-page__title font-heading">
          {locale === 'bn' ? 'বাসা ভাড়া দিন' : 'List your property'}
        </h1>
        <p className="simple-page__content font-body">
          {locale === 'bn'
            ? 'আপনার বাসা যোগ করুন। আমরা যাচাই করে তালিকায় রাখব।'
            : 'Add your home. We will verify and list it.'}
        </p>
        <form className="login-form" onSubmit={(e) => e.preventDefault()} style={{ marginTop: 24 }}>
          <label className="form-label">
            {locale === 'bn' ? 'এলাকা' : 'Area'}
            <input type="text" className="form-input" placeholder={locale === 'bn' ? 'মিরপুর ১০' : 'Mirpur 10'} />
          </label>
          <label className="form-label">
            {locale === 'bn' ? 'মাসিক ভাড়া (৳)' : 'Monthly rent (BDT)'}
            <input type="number" className="form-input" placeholder="25000" />
          </label>
          <label className="form-label">
            {locale === 'bn' ? 'বেডরুম সংখ্যা' : 'Bedrooms'}
            <input type="number" className="form-input" placeholder="2" />
          </label>
          <Button type="submit" fullWidth>
            {locale === 'bn' ? 'জমা দিন' : 'Submit'}
          </Button>
        </form>
      </div>
    </main>
  );
}
