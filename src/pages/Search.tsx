import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { properties } from '../data/mockData';
import { useLanguage } from '../i18n/LanguageContext';
import { PropertyCard } from '../components/PropertyCard';
import { Button } from '../components/Button';
import './Search.css';

export function Search() {
  const { t, locale } = useLanguage();
  const [params] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const typeFilter = params.get('type') || '';
  const verifiedOnly = params.get('verified') === '1';

  let results = [...properties];
  if (typeFilter) {
    results = results.filter((p) => p.propertyType === typeFilter);
  }
  if (verifiedOnly) {
    results = results.filter((p) => p.verified);
  }

  return (
    <main className="search-page">
      <div className="container">
        <header className="search-header">
          <h1 className="search-title font-heading">
            {locale === 'bn' ? 'বাসা খুঁজুন' : 'Search homes'}
          </h1>
          <p className="search-count">
            {results.length} {locale === 'bn' ? 'টি বাসা' : 'homes'}
          </p>
        </header>

        <div className="search-layout">
          {/* Filters */}
          <aside className={`search-filters ${showFilters ? 'is-open' : ''}`}>
            <div className="search-filters__inner">
              <h2 className="search-filters__title font-heading">
                {locale === 'bn' ? 'ফিল্টার' : 'Filters'}
              </h2>

              <div className="filter-group">
                <label className="filter-label">{t('for_whom')}</label>
                <div className="filter-options">
                  {(['family', 'bachelor', 'room', 'sublet'] as const).map((type) => (
                    <label key={type} className="filter-chip">
                      <input type="radio" name="type" value={type} defaultChecked={typeFilter === type} />
                      <span>{t(type)}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label className="filter-label">{t('budget_question')}</label>
                <div className="filter-options">
                  {['১০–১৫ হাজার', '১৫–২০ হাজার', '২০–৩০ হাজার', '৩০ হাজার+'].map((b) => (
                    <label key={b} className="filter-chip">
                      <input type="radio" name="budget" value={b} />
                      <span>{b}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label className="filter-chip">
                  <input type="checkbox" defaultChecked={verifiedOnly} />
                  <span>{t('verified')}</span>
                </label>
              </div>

              <Button fullWidth onClick={() => setShowFilters(false)}>
                {locale === 'bn' ? 'ফলাফল দেখুন' : 'Show results'}
              </Button>
            </div>
          </aside>

          {/* Results */}
          <div className="search-results">
            <button
              type="button"
              className="search-filter-toggle"
              onClick={() => setShowFilters(true)}
            >
              {locale === 'bn' ? 'ফিল্টার' : 'Filters'}
            </button>

            {results.length === 0 ? (
              <p className="search-empty">{t('no_results')}</p>
            ) : (
              <div className="property-grid">
                {results.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {showFilters && (
        <div className="search-filters-backdrop" onClick={() => setShowFilters(false)} />
      )}
    </main>
  );
}
