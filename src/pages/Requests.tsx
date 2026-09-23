import { Link } from 'react-router-dom';
import { tenantRequests } from '../data/mockData';
import { useLanguage } from '../i18n/LanguageContext';
import { Button } from '../components/Button';
import { formatPrice } from '../data/mockData';
import './SimplePage.css';

export function Requests() {
  const { locale, t } = useLanguage();
  return (
    <main className="simple-page">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
          <h1 className="simple-page__title font-heading" style={{ marginBottom: 0 }}>
            {locale === 'bn' ? 'চাহিদা' : 'Tenant requests'}
          </h1>
          <Link to="/requests/new">
            <Button>{t('nav_post_request')}</Button>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {tenantRequests.map((r) => (
            <article
              key={r.id}
              style={{
                background: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
                padding: '20px',
              }}
            >
              <h2 className="font-heading" style={{ fontSize: 17, marginBottom: 8 }}>
                {r.areaPreferenceBn}
              </h2>
              <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginBottom: 8 }}>
                {formatPrice(r.budgetMax, locale)} · {r.bedrooms} {t('bedrooms')} · {t(r.propertyType as 'family')}
              </p>
              <p className="font-body" style={{ fontSize: 14 }}>{r.descriptionBn}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
