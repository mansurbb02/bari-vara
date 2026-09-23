import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { areas, properties } from '../data/mockData';
import { AreaCard } from '../components/AreaCard';
import { PropertyCard } from '../components/PropertyCard';
import { Button } from '../components/Button';
import './Home.css';

export function Home() {
  const { t, locale } = useLanguage();
  const verified = properties.filter((p) => p.verified).slice(0, 4);
  const recent = properties.slice(0, 3);

  return (
    <main className="home">
      <section className="hero">
        <div
          className="hero__bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80')",
          }}
          role="img"
          aria-label={locale === 'bn' ? 'ঢাকার বাসা' : 'Dhaka apartment'}
        />
        <div className="hero__overlay" />
        <div className="hero__inner container">
          <div className="hero__content">
            <p className="hero__eyebrow font-heading">
              {locale === 'bn' ? 'ঢাকা রেন্টাল নেটওয়ার্ক' : 'Dhaka Rental Network'}
            </p>
            <h1 className="hero__title font-heading">{t('hero_title')}</h1>
            <p className="hero__subtitle font-body">{t('hero_subtitle')}</p>

            <form className="hero__search" action="/search" method="get">
              <div className="hero__search-fields">
                <label className="hero__field">
                  <span className="hero__field-label">{t('search_area_placeholder')}</span>
                  <input
                    type="text"
                    name="area"
                    placeholder={locale === 'bn' ? 'মিরপুর, উত্তরা...' : 'Mirpur, Uttara...'}
                    className="hero__input"
                  />
                </label>
                <label className="hero__field">
                  <span className="hero__field-label">{t('search_rent_placeholder')}</span>
                  <select name="budget" className="hero__input hero__select">
                    <option value="">{locale === 'bn' ? 'যেকোনো' : 'Any'}</option>
                    <option value="10000-15000">১০–১৫ হাজার</option>
                    <option value="15000-20000">১৫–২০ হাজার</option>
                    <option value="20000-30000">২০–৩০ হাজার</option>
                    <option value="30000+">৩০ হাজার+</option>
                  </select>
                </label>
                <label className="hero__field">
                  <span className="hero__field-label">{t('search_type_placeholder')}</span>
                  <select name="type" className="hero__input hero__select">
                    <option value="">{locale === 'bn' ? 'যেকোনো' : 'Any'}</option>
                    <option value="family">{t('family')}</option>
                    <option value="bachelor">{t('bachelor')}</option>
                    <option value="room">{t('room')}</option>
                    <option value="sublet">{t('sublet')}</option>
                  </select>
                </label>
              </div>
              <Button type="submit" fullWidth className="hero__cta">
                {t('search_button')}
              </Button>
            </form>

            <div className="hero__alt">
              <Link to="/list-property" className="hero__alt-link">
                {t('hero_cta_list')} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title font-heading">{t('popular_areas')}</h2>
            <Link to="/areas" className="section__link">{t('view_all')}</Link>
          </div>
          <div className="area-grid">
            {areas.slice(0, 6).map((area) => (
              <AreaCard key={area.id} area={area} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title font-heading">{t('verified_properties')}</h2>
            <Link to="/search?verified=1" className="section__link">{t('view_all')}</Link>
          </div>
          <div className="property-grid">
            {verified.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section__title font-heading" style={{ marginBottom: 24 }}>
            {t('what_kind_of_home')}
          </h2>
          <div className="type-grid">
            {[
              { key: 'family', icon: '🏠', label: t('family') },
              { key: 'bachelor', icon: '👤', label: t('bachelor') },
              { key: 'room', icon: '🛏', label: t('room') },
              { key: 'sublet', icon: '🔑', label: t('sublet') },
            ].map((item) => (
              <Link key={item.key} to={`/search?type=${item.key}`} className="type-card">
                <span className="type-card__icon" aria-hidden="true">{item.icon}</span>
                <span className="type-card__label font-heading">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-band__inner">
            <div className="cta-band__text">
              <p className="cta-band__eyebrow font-heading">
                {locale === 'bn' ? 'চাহিদা জানান' : 'Post a request'}
              </p>
              <h2 className="cta-band__title font-heading">{t('tenant_request_cta')}</h2>
              <p className="cta-band__desc font-body">
                {locale === 'bn'
                  ? 'আপনার বাজেট, এলাকা ও প্রয়োজন জানান। বাড়িওয়ালারা আপনাকে খুঁজে পাবে।'
                  : 'Tell us your budget, area and needs. Landlords will find you.'}
              </p>
            </div>
            <Link to="/requests/new" className="cta-band__action">
              <Button>{t('nav_post_request')}</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--process">
        <div className="container">
          <header className="process-header">
            <h2 className="section__title font-heading">{t('how_it_works')}</h2>
            <p className="process-header__lead font-body">
              {locale === 'bn'
                ? 'পাঁচটি সহজ ধাপে আপনার নতুন বাসা খুঁজে নিন।'
                : 'Find your next home in five simple steps.'}
            </p>
          </header>

          <ol className="process-list">
            {[
              {
                num: '01',
                title: t('step1'),
                desc: locale === 'bn' ? 'এলাকা, বাজেট ও ধরন দিয়ে খুঁজুন।' : 'Search by area, budget and type.',
              },
              {
                num: '02',
                title: t('step2'),
                desc: locale === 'bn' ? 'ছবি, ভাড়া ও বিবরণ দেখুন।' : 'View photos, rent and details.',
              },
              {
                num: '03',
                title: t('step3'),
                desc: locale === 'bn' ? 'কোন তথ্য যাচাই করা হয়েছে দেখুন।' : 'Check what has been verified.',
              },
              {
                num: '04',
                title: t('step4'),
                desc: locale === 'bn' ? 'বাসা দেখতে সময় ঠিক করুন।' : 'Arrange a viewing time.',
              },
              {
                num: '05',
                title: t('step5'),
                desc: locale === 'bn' ? 'শর্তাবলী বুঝে ভাড়া নিন।' : 'Understand terms and rent.',
              },
            ].map((s) => (
              <li key={s.num} className="process-list__item">
                <span className="process-list__num font-heading" aria-hidden="true">
                  {s.num}
                </span>
                <div className="process-list__body">
                  <h3 className="process-list__title font-heading">{s.title}</h3>
                  <p className="process-list__desc font-body">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="process-footer">
            <Link to="/how-it-works" className="section__link">
              {locale === 'bn' ? 'বিস্তারিত দেখুন' : 'Learn more'} →
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title font-heading">{t('recently_added')}</h2>
            <Link to="/search" className="section__link">{t('view_all')}</Link>
          </div>
          <div className="property-grid">
            {recent.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band cta-band--support">
        <div className="container">
          <div className="cta-band__inner">
            <div className="cta-band__text">
              <h2 className="cta-band__title font-heading">{t('support_cta')}</h2>
              <p className="cta-band__desc font-body">
                {locale === 'bn'
                  ? 'কোনো প্রশ্ন থাকলে আমাদের সাথে কথা বলুন।'
                  : 'Have a question? Talk to us.'}
              </p>
            </div>
            <Link to="/help" className="cta-band__action">
              <Button variant="secondary">{t('nav_help')}</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
