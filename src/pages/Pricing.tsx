import { subscriptionPlans, formatPrice } from '../data/mockData';
import { useLanguage } from '../i18n/LanguageContext';
import { Button } from '../components/Button';
import './Pricing.css';

export function Pricing() {
  const { t, locale } = useLanguage();

  return (
    <main className="pricing-page">
      <div className="container">
        <h1 className="pricing-title font-heading">{t('choose_plan')}</h1>
        <div className="pricing-grid">
          {subscriptionPlans.map((plan) => {
            const name = locale === 'bn' ? plan.nameBn : plan.nameEn;
            const features = locale === 'bn' ? plan.featuresBn : plan.featuresEn;
            const price =
              plan.id === 'yearly'
                ? formatPrice(plan.priceYearly, locale)
                : plan.priceMonthly === 0
                ? locale === 'bn'
                  ? 'ফ্রি'
                  : 'Free'
                : formatPrice(plan.priceMonthly, locale);

            return (
              <article
                key={plan.id}
                className={`pricing-card ${plan.recommended ? 'pricing-card--recommended' : ''}`}
              >
                {plan.recommended && (
                  <span className="pricing-badge font-heading">{t('best_value')}</span>
                )}
                <h2 className="pricing-card__name font-heading">{name}</h2>
                <p className="pricing-card__price font-heading">
                  {price}
                  {plan.id === 'monthly' && (
                    <span className="pricing-card__period">
                      {locale === 'bn' ? '/ মাস' : '/ month'}
                    </span>
                  )}
                  {plan.id === 'yearly' && (
                    <span className="pricing-card__period">
                      {locale === 'bn' ? '/ বছর' : '/ year'}
                    </span>
                  )}
                </p>
                <ul className="pricing-card__features">
                  {features.map((f) => (
                    <li key={f}>✓ {f}</li>
                  ))}
                </ul>
                <Button
                  variant={plan.recommended ? 'primary' : 'secondary'}
                  fullWidth
                >
                  {plan.id === 'free'
                    ? locale === 'bn'
                      ? 'শুরু করুন'
                      : 'Get started'
                    : locale === 'bn'
                    ? 'প্ল্যান নিন'
                    : 'Choose plan'}
                </Button>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
