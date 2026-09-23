import { Link } from 'react-router-dom';
import type { Property } from '../types';
import { VerificationBadge } from './VerificationBadge';
import { useLanguage } from '../i18n/LanguageContext';
import { formatPrice } from '../data/mockData';
import './PropertyCard.css';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const { locale, t } = useLanguage();
  const title = locale === 'bn' ? property.titleBn : property.titleEn;
  const area = locale === 'bn' ? property.areaNameBn : property.areaNameEn;

  return (
    <article className="property-card">
      <Link to={`/property/${property.id}`} className="property-card__link">
        <div className="property-card__image-wrap">
          <img
            src={property.images[0]}
            alt={title}
            className="property-card__image"
            loading="lazy"
          />
          {property.verified && (
            <div className="property-card__badge">
              <VerificationBadge />
            </div>
          )}
        </div>

        <div className="property-card__body">
          <h3 className="property-card__title font-heading">{title}</h3>
          <p className="property-card__location">
            <span aria-hidden="true">📍</span> {area}
          </p>
          <p className="property-card__price font-heading">
            {formatPrice(property.rent, locale)}
            <span className="property-card__price-unit">{t('per_month')}</span>
          </p>
          <p className="property-card__meta">
            {property.bedrooms} {t('bedrooms')} · {property.bathrooms} {t('bathrooms')} · {property.sizeSqft} {t('sqft')}
          </p>
          <p className="property-card__estimate">
            {t('monthly_estimate')} {formatPrice(property.monthlyTotalEstimate, locale)}
          </p>
        </div>
      </Link>
      <div className="property-card__footer">
        <Link to={`/property/${property.id}`} className="property-card__cta">
          {t('view_details')}
        </Link>
      </div>
    </article>
  );
}
