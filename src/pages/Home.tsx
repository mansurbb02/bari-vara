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
      {/* 02 Hero + Search */}
      <section className="hero">
        <div className="hero__inner container">
          <div className="hero__content">
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

          <div className="hero__visual">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80"
              alt={locale === 'bn' ? 'ঢাকার বাসা' : 'Dhaka apartment'}
              className="hero__image"
            />
          </div>
        </div>
      </section>

      {/* 03 Popular Dhaka Areas */}
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

      {/* 04 Verified Properties */}
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

      {/* 05 What kind of home */}
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
              <Link
                key={item.key}
                to={`/search?type=${item.key}`}
                className="type-card"
              >
                <span className="type-card__icon" aria-hidden="true">{item.icon}</span>
                <span className="type-card__label font-heading">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 06 Tenant Requirement CTA */}
      <section className="section section--cta">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-box__title font-heading">{t('tenant_request_cta')}</h2>
            <p className="cta-box__text font-body">
              {locale === 'bn'
                ? 'আপনার বাজেট, এলাকা ও প্রয়োজন জানান। বাড়িওয়ালারা আপনাকে খুঁজে পাবে।'
                : 'Tell us your budget, area and needs. Landlords will find you.'}
            </p>
            <Link to="/requests/new">
              <Button>{t('nav_post_request')}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 07 How Verification Works */}
      <section className="section">
        <div className="container">
          <h2 className="section__title font-heading" style={{ marginBottom: 32 }}>
            {t('how_verification_works')}
          </h2>
          <div className="trust-steps">
            <div className="trust-step">
              <div className="trust-step__num">১</div>
              <h3 className="trust-step__title font-heading">{t('trust_step1_title')}</h3>
              <p className="trust-step__desc font-body">{t('trust_step1_desc')}</p>
            </div>
            <div className="trust-step">
              <div className="trust-step__num">২</div>
              <h3 className="trust-step__title font-heading">{t('trust_step2_title')}</h3>
              <p className="trust-step__desc font-body">{t('trust_step2_desc')}</p>
            </div>
            <div className="trust-step">
              <div className="trust-step__num">৩</div>
              <h3 className="trust-step__title font-heading">{t('trust_step3_title')}</h3>
              <p className="trust-step__desc font-body">{t('trust_step3_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 08 How It Works */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title font-heading" style={{ marginBottom: 32 }}>
            {t('how_it_works')}
          </h2>
          <div className="steps">
            {[
              { num: '01', title: t('step1') },
              { num: '02', title: t('step2') },
              { num: '03', title: t('step3') },
              { num: '04', title: t('step4') },
              { num: '05', title: t('step5') },
            ].map((s) => (
              <div key={s.num} className="step">
                <span className="step__num font-heading">{s.num}</span>
                <span className="step__title font-heading">{s.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09 Recently Added */}
      <section className="section">
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

      {/* 10 Rental Tips */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title font-heading" style={{ marginBottom: 24 }}>
            {t('rental_tips')}
          </h2>
          <div className="tips">
            <article className="tip">
              <h3 className="tip__title font-heading">
                {locale === 'bn' ? 'ভাড়া আগে থেকে জানুন' : 'Know the rent upfront'}
              </h3>
              <p className="tip__text font-body">
                {locale === 'bn'
                  ? 'মাসিক ভাড়া ছাড়াও ইউটিলিটি ও অন্যান্য খরচ জেনে নিন।'
                  : 'Ask about utilities and extra costs beyond the monthly rent.'}
              </p>
            </article>
            <article className="tip">
              <h3 className="tip__title font-heading">
                {locale === 'bn' ? 'যাচাই দেখুন' : 'Check verification'}
              </h3>
              <p className="tip__text font-body">
                {locale === 'bn'
                  ? 'বাসা দেখতে যাওয়ার আগে কোন তথ্য যাচাই করা হয়েছে দেখুন।'
                  : 'See what has been verified before you visit.'}
              </p>
            </article>
            <article className="tip">
              <h3 className="tip__title font-heading">
                {locale === 'bn' ? 'শর্ত পড়ুন' : 'Read the terms'}
              </h3>
              <p className="tip__text font-body">
                {locale === 'bn'
                  ? 'অগ্রিম, সিকিউরিটি ও চুক্তির শর্তাবলী ভালো করে বুঝে নিন।'
                  : 'Understand advance, security and agreement terms carefully.'}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 11 FAQ */}
      <section className="section">
        <div className="container">
          <h2 className="section__title font-heading" style={{ marginBottom: 24 }}>
            {t('faq')}
          </h2>
          <div className="faq">
            <details className="faq__item">
              <summary className="faq__q font-heading">
                {locale === 'bn' ? 'যাচাই করা মানে কী?' : 'What does verified mean?'}
              </summary>
              <p className="faq__a font-body">
                {locale === 'bn'
                  ? 'আমরা বাড়িওয়ালার তথ্য, ঠিকানা, ভাড়া ও খালি আছে কিনা যাচাই করে থাকি।'
                  : 'We verify owner details, address, rent and current availability.'}
              </p>
            </details>
            <details className="faq__item">
              <summary className="faq__q font-heading">
                {locale === 'bn' ? 'এই ওয়েবসাইট কি ফ্রি?' : 'Is this website free?'}
              </summary>
              <p className="faq__a font-body">
                {locale === 'bn'
                  ? 'মূল তালিকা দেখা ফ্রি। বিস্তারিত যাচাই ও যোগাযোগের জন্য প্ল্যান নিতে পারেন।'
                  : 'Browsing the main list is free. Plans unlock verified details and contact.'}
              </p>
            </details>
            <details className="faq__item">
              <summary className="faq__q font-heading">
                {locale === 'bn' ? 'বাসা দেখতে কীভাবে যাব?' : 'How do I visit a home?'}
              </summary>
              <p className="faq__a font-body">
                {locale === 'bn'
                  ? 'বাসা পেজে “বাসা দেখতে চাই” বাটনে চাপুন। বাড়িওয়ালা/এজেন্টের সাথে সময় ঠিক করুন।'
                  : 'Tap “Request a viewing” on the property page and arrange a time with the owner.'}
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 12 Support CTA */}
      <section className="section section--cta">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-box__title font-heading">{t('support_cta')}</h2>
            <p className="cta-box__text font-body">
              {locale === 'bn'
                ? 'কোনো প্রশ্ন থাকলে আমাদের সাথে কথা বলুন।'
                : 'Have a question? Talk to us.'}
            </p>
            <Link to="/help">
              <Button>{t('nav_help')}</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
