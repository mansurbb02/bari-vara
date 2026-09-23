import { useLanguage } from '../i18n/LanguageContext';
import { Button } from '../components/Button';
import './SimplePage.css';

export function Login() {
  const { locale } = useLanguage();
  return (
    <main className="simple-page">
      <div className="container" style={{ maxWidth: 400 }}>
        <h1 className="simple-page__title font-heading">
          {locale === 'bn' ? 'লগইন' : 'Log in'}
        </h1>
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <label className="form-label">
            {locale === 'bn' ? 'মোবাইল নম্বর' : 'Mobile number'}
            <input type="tel" className="form-input" placeholder="01XXXXXXXXX" />
          </label>
          <label className="form-label">
            {locale === 'bn' ? 'পাসওয়ার্ড' : 'Password'}
            <input type="password" className="form-input" />
          </label>
          <Button type="submit" fullWidth>
            {locale === 'bn' ? 'লগইন করুন' : 'Log in'}
          </Button>
        </form>
      </div>
    </main>
  );
}
