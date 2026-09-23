import { useLanguage } from '../i18n/LanguageContext';
import './SimplePage.css';

export function Help() {
  const { locale } = useLanguage();
  return (
    <main className="simple-page">
      <div className="container">
        <h1 className="simple-page__title font-heading">
          {locale === 'bn' ? 'সহায়তা' : 'Help'}
        </h1>
        <p className="simple-page__lead font-body">
          {locale === 'bn'
            ? 'সবচেয়ে বেশি জিজ্ঞাসা করা প্রশ্নগুলোর উত্তর।'
            : 'Answers to the questions people ask most.'}
        </p>

        <div className="help-faq">
          <details className="help-faq__item">
            <summary className="help-faq__q font-heading">
              {locale === 'bn' ? 'যাচাই করা মানে কী?' : 'What does verified mean?'}
            </summary>
            <p className="help-faq__a font-body">
              {locale === 'bn'
                ? 'আমরা বাড়িওয়ালার তথ্য, ঠিকানা, ভাড়া ও খালি আছে কিনা যাচাই করে থাকি।'
                : 'We verify owner details, address, rent and current availability.'}
            </p>
          </details>
          <details className="help-faq__item">
            <summary className="help-faq__q font-heading">
              {locale === 'bn' ? 'এই ওয়েবসাইট কি ফ্রি?' : 'Is this website free?'}
            </summary>
            <p className="help-faq__a font-body">
              {locale === 'bn'
                ? 'মূল তালিকা দেখা ফ্রি। বিস্তারিত যাচাই ও যোগাযোগের জন্য প্ল্যান নিতে পারেন।'
                : 'Browsing the main list is free. Plans unlock verified details and contact.'}
            </p>
          </details>
          <details className="help-faq__item">
            <summary className="help-faq__q font-heading">
              {locale === 'bn' ? 'বাসা দেখতে কীভাবে যাব?' : 'How do I visit a home?'}
            </summary>
            <p className="help-faq__a font-body">
              {locale === 'bn'
                ? 'বাসা পেজে “বাসা দেখতে চাই” বাটনে চাপুন। বাড়িওয়ালা/এজেন্টের সাথে সময় ঠিক করুন।'
                : 'Tap “Request a viewing” on the property page and arrange a time with the owner.'}
            </p>
          </details>
          <details className="help-faq__item">
            <summary className="help-faq__q font-heading">
              {locale === 'bn' ? 'ভাড়া ছাড়া আর কী খরচ হয়?' : 'What other costs are there?'}
            </summary>
            <p className="help-faq__a font-body">
              {locale === 'bn'
                ? 'অগ্রিম, সিকিউরিটি ও ইউটিলিটি সাধারণত আলাদা। প্রতিটি বাসার পেজে আনুমানিক খরচ দেখানো হয়।'
                : 'Advance, security and utilities are usually separate. Each listing shows estimated costs.'}
            </p>
          </details>
        </div>

        <div className="simple-page__content font-body" style={{ marginTop: 40 }}>
          <p>
            {locale === 'bn'
              ? 'অন্য কোনো প্রশ্ন থাকলে ইমেইল করুন: help@dhakarental.network'
              : 'Email us at help@dhakarental.network if you have more questions.'}
          </p>
          <p>
            {locale === 'bn'
              ? 'আমরা সাধারণত ২৪ ঘণ্টার মধ্যে উত্তর দিই।'
              : 'We usually reply within 24 hours.'}
          </p>
        </div>
      </div>
    </main>
  );
}
