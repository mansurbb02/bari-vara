import { useLanguage } from '../i18n/LanguageContext';
import './SimplePage.css';

export function HowItWorks() {
  const { t, locale } = useLanguage();
  const steps = [
    { num: '01', title: t('step1'), desc: locale === 'bn' ? 'এলাকা, বাজেট ও ধরন দিয়ে বাসা খুঁজুন।' : 'Search by area, budget and type.' },
    { num: '02', title: t('step2'), desc: locale === 'bn' ? 'ছবি, ভাড়া ও বিবরণ দেখুন।' : 'View photos, rent and details.' },
    { num: '03', title: t('step3'), desc: locale === 'bn' ? 'কোন তথ্য যাচাই করা হয়েছে দেখুন।' : 'See what has been verified.' },
    { num: '04', title: t('step4'), desc: locale === 'bn' ? 'বাসা দেখতে সময় ঠিক করুন।' : 'Arrange a viewing time.' },
    { num: '05', title: t('step5'), desc: locale === 'bn' ? 'শর্তাবলী বুঝে ভাড়া নিন।' : 'Understand terms and rent.' },
  ];

  return (
    <main className="simple-page">
      <div className="container">
        <h1 className="simple-page__title font-heading">{t('how_it_works')}</h1>
        <div className="how-steps">
          {steps.map((s) => (
            <div key={s.num} className="how-step">
              <span className="how-step__num font-heading">{s.num}</span>
              <div>
                <h2 className="how-step__title font-heading">{s.title}</h2>
                <p className="how-step__desc font-body">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
