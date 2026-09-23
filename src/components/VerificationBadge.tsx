import { useLanguage } from '../i18n/LanguageContext';
import './VerificationBadge.css';

interface VerificationBadgeProps {
  className?: string;
}

export function VerificationBadge({ className = '' }: VerificationBadgeProps) {
  const { t } = useLanguage();
  return (
    <span className={`verification-badge ${className}`}>
      <span className="verification-badge__icon" aria-hidden="true">✓</span>
      <span className="verification-badge__text">{t('verified')}</span>
    </span>
  );
}
