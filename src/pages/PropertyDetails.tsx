import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/mockData';
import { useLanguage } from '../i18n/LanguageContext';
import { formatPrice } from '../data/mockData';
import { VerificationBadge } from '../components/VerificationBadge';
import { Button } from '../components/Button';
import { PropertyCard } from '../components/PropertyCard';
import './PropertyDetails.css';

export function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const { locale, t } = useLanguage();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <main className="property-details container">
        <p>{t('no_results')}</p>
        <Link to="/search">{t('back')}</Link>
      </main>
    );
  }

  const title = locale === 'bn' ? property.titleBn : property.titleEn;
  const area = locale === 'bn' ? property.areaNameBn : property.areaNameEn;
  const description = locale === 'bn' ? property.descriptionBn : property.descriptionEn;
  const terms = locale === 'bn' ? property.rentalTermsBn : property.rentalTermsEn;
  const similar = properties.filter((p) => p.id !== property.id && p.areaId === property.areaId).slice(0, 3);

  return (
    <main className="property-details">
      {/* Images */}
      <div className="pd-gallery">
        <div className="pd-gallery__main">
          <img src={property.images[0]} alt={title} />
        </div>
        {property.images.length > 1 && (
          <div className="pd-gallery__thumbs">
            {property.images.slice(1, 4).map((img, i) => (
              <img key={i} src={img} alt="" />
            ))}
          </div>
        )}
      </div>

      <div className="container pd-content">
        <div className="pd-main">
          {/* Price + Title */}
          <div className="pd-header">
            {property.verified && <VerificationBadge />}
            <p className="pd-price font-heading">
              {formatPrice(property.rent, locale)}
              <span className="pd-price-unit">{t('per_month')}</span>
            </p>
            <h1 className="pd-title font-heading">{title}</h1>
            <p className="pd-location">
              <span aria-hidden="true">📍</span> {area}
            </p>
          </div>

          {/* Quick facts */}
          <div className="pd-facts">
            <div className="pd-fact">
              <span className="pd-fact__icon" aria-hidden="true">🏠</span>
              <span className="pd-fact__value font-heading">{property.bedrooms}</span>
              <span className="pd-fact__label">{t('bedrooms')}</span>
            </div>
            <div className="pd-fact">
              <span className="pd-fact__icon" aria-hidden="true">🚿</span>
              <span className="pd-fact__value font-heading">{property.bathrooms}</span>
              <span className="pd-fact__label">{t('bathrooms')}</span>
            </div>
            <div className="pd-fact">
              <span className="pd-fact__icon" aria-hidden="true">📐</span>
              <span className="pd-fact__value font-heading">{property.sizeSqft}</span>
              <span className="pd-fact__label">{t('sqft')}</span>
            </div>
          </div>

          {/* Verification */}
          {property.verified && (
            <section className="pd-section">
              <h2 className="pd-section__title font-heading">{t('verified_info')}</h2>
              <ul className="pd-verified-list">
                <li>✓ {t('owner_verified')}</li>
                <li>✓ {t('address_verified')}</li>
                <li>✓ {t('rent_verified')}</li>
                <li>✓ {t('availability_verified')}</li>
              </ul>
              <p className="pd-verified-date">
                {t('last_verified')}: {property.verificationDate}
              </p>
            </section>
          )}

          {/* Costs */}
          <section className="pd-section">
            <h2 className="pd-section__title font-heading">
              {locale === 'bn' ? 'খরচের হিসাব' : 'Cost summary'}
            </h2>
            <div className="pd-costs">
              <div className="pd-cost-row">
                <span>{t('monthly_estimate')}</span>
                <strong className="font-heading">{formatPrice(property.monthlyTotalEstimate, locale)}</strong>
              </div>
              <div className="pd-cost-row">
                <span>{t('move_in_cost')}</span>
                <strong className="font-heading">{formatPrice(property.moveInCostEstimate, locale)}</strong>
              </div>
            </div>
          </section>

          {/* Description */}
          <section className="pd-section">
            <h2 className="pd-section__title font-heading">
              {locale === 'bn' ? 'বিবরণ' : 'Description'}
            </h2>
            <p className="pd-desc font-body">{description}</p>
          </section>

          {/* Terms */}
          <section className="pd-section">
            <h2 className="pd-section__title font-heading">{t('rental_terms')}</h2>
            <p className="pd-desc font-body">{terms}</p>
          </section>

          {/* Facilities */}
          <section className="pd-section">
            <h2 className="pd-section__title font-heading">{t('facilities')}</h2>
            <ul className="pd-facilities">
              {property.facilities.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>

          {/* Availability */}
          <section className="pd-section">
            <h2 className="pd-section__title font-heading">
              {locale === 'bn' ? 'খালি হওয়ার তারিখ' : 'Available from'}
            </h2>
            <p className="font-heading" style={{ fontSize: 18 }}>{property.availabilityDate}</p>
          </section>
        </div>

        {/* Sidebar / Sticky CTA on mobile handled by sticky bar */}
        <aside className="pd-aside">
          <div className="pd-aside-card">
            <p className="pd-aside-price font-heading">
              {formatPrice(property.rent, locale)}
              <span>{t('per_month')}</span>
            </p>
            <Button fullWidth>{t('request_viewing')}</Button>
            <button type="button" className="pd-aside-save">
              ♡ {t('save')}
            </button>
          </div>
        </aside>
      </div>

      {/* Sticky mobile CTA */}
      <div className="pd-sticky-cta">
        <button type="button" className="pd-sticky-save" aria-label={t('save')}>
          ♡
        </button>
        <Button fullWidth className="pd-sticky-primary">
          {t('request_viewing')}
        </Button>
      </div>

      {/* Similar */}
      {similar.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="section__title font-heading" style={{ marginBottom: 24 }}>
              {t('similar_properties')}
            </h2>
            <div className="property-grid">
              {similar.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
