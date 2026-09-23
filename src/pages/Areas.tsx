import { areas } from '../data/mockData';
import { useLanguage } from '../i18n/LanguageContext';
import { AreaCard } from '../components/AreaCard';
import './Areas.css';

export function Areas() {
  const { locale } = useLanguage();

  return (
    <main className="areas-page">
      <div className="container">
        <h1 className="areas-title font-heading">
          {locale === 'bn' ? 'ঢাকার এলাকা' : 'Dhaka areas'}
        </h1>
        <p className="areas-subtitle font-body">
          {locale === 'bn'
            ? 'এলাকা অনুসারে বাসা খুঁজুন।'
            : 'Find homes by area.'}
        </p>
        <div className="areas-grid">
          {areas.map((area) => (
            <AreaCard key={area.id} area={area} />
          ))}
        </div>
      </div>
    </main>
  );
}
