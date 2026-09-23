import { Link } from 'react-router-dom';
import type { Area } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import './AreaCard.css';

interface AreaCardProps {
  area: Area;
}

export function AreaCard({ area }: AreaCardProps) {
  const { locale } = useLanguage();
  const name = locale === 'bn' ? area.nameBn : area.nameEn;

  return (
    <Link to={`/areas/${area.slug}`} className="area-card">
      <div className="area-card__image-wrap">
        <img src={area.imageUrl} alt={name} className="area-card__image" loading="lazy" />
      </div>
      <div className="area-card__content">
        <h3 className="area-card__name font-heading">{name}</h3>
        <p className="area-card__count">
          {area.propertyCount}{locale === 'bn' ? 'টি বাসা' : ' homes'}
        </p>
      </div>
    </Link>
  );
}
