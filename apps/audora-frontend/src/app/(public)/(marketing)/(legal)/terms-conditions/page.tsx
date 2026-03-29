import React from 'react';
import TableOfContents from '@/components/marketing/Legal/table-of-contents';
import getPageMetadata from '@/lib/seo/getPageMetadata';

export const metadata = getPageMetadata({
  title: 'Audora Terms and Conditions',
  description: 'These Terms and Conditions govern your use of Audora.',
});

const sections = [
  { id: 'acceptance', title: 'Acceptance of Terms' },
  { id: 'services', title: 'Services and Features' },
  { id: 'accounts', title: 'User Accounts' },
  { id: 'content', title: 'User Content' },
  { id: 'payments', title: 'Payments and Subscriptions' },
  { id: 'prohibited', title: 'Prohibited Activities' },
  { id: 'intellectual', title: 'Intellectual Property' },
  { id: 'termination', title: 'Termination' },
  { id: 'liability', title: 'Limitation of Liability' },
  { id: 'changes', title: 'Changes to Terms' },
  { id: 'contact', title: 'Contact Us' },
];

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className='mb-6 flex items-baseline gap-3'>
      <span className='shrink-0 font-mono text-[11px] font-semibold tracking-[0.14em] text-[#b8620a]'>
        {num}
      </span>
      <h2 className='font-syne text-[clamp(1.2rem,2.5vw,1.6rem)] font-extrabold leading-tight tracking-[-0.03em] text-[#1a1714]'>
        {title}
      </h2>
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return <p className='text-[15px] leading-[1.85] text-[#5a5048]'>{children}</p>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className='space-y-2.5'>
      {items.map((item, i) => (
        <li key={i} className='flex items-start gap-3'>
          <span className='mt-[0.6em] h-[5px] w-[5px] shrink-0 rounded-full bg-[#b8620a]/60' aria-hidden />
          <span className='text-[15px] leading-[1.85] text-[#5a5048]'>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Divider() {
  return <div className='mt-12 h-px bg-[#e4dfd6]' />;
}

const TermsConditionsPage = () => {
  return (
    <div className='min-h-screen bg-[#f7f5f1]'>
      {/* Hero */}
      <div className='border-b border-[#e4dfd6] bg-[#f7f5f1] pb-10 pt-32 md:pt-36'>
        <div className='mx-auto max-w-[90rem] px-8 sm:px-12 lg:px-16 xl:px-24'>
          <div className='mb-5 flex items-center gap-2.5'>
            <span className='h-px w-4 bg-[#b8620a]/60' />
            <span className='font-mono text-[10px] uppercase tracking-[0.22em] text-[#b8620a]'>
              Legal
            </span>
          </div>
          <h1 className='mb-3 font-syne text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#1a1714]'>
            Terms & Conditions
          </h1>
          <p className='font-mono text-[11px] text-[#9a8878]'>
            Last updated: May 7, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className='mx-auto max-w-[90rem] px-8 py-16 sm:px-12 lg:px-16 lg:py-20 xl:px-24'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-[240px_1fr] xl:grid-cols-[280px_1fr]'>
          <aside className='hidden lg:block'>
            <TableOfContents sections={sections} />
          </aside>

          <div className='min-w-0'>
            <p className='mb-12 max-w-2xl text-[16px] leading-[1.85] text-[#5a5048]'>
              Welcome to Audora. These Terms and Conditions govern your use of our
              platform and services. By accessing or using Audora, you agree to be
              bound by these terms.
            </p>

            {/* Mobile TOC */}
            <div className='mb-12 rounded-xl border border-[#e4dfd6] bg-white p-6 lg:hidden'>
              <TableOfContents sections={sections} />
            </div>

            <div className='space-y-14'>
              <section id='acceptance' className='scroll-mt-28'>
                <SectionHeader num='01' title='Acceptance of Terms' />
                <div className='space-y-4'>
                  <Body>
                    By accessing or using Audora, you agree to be bound by these
                    Terms and Conditions. If you do not agree to these terms, please
                    do not use our services.
                  </Body>
                  <Body>
                    We reserve the right to modify these terms at any time. Continued
                    use of our services after such modifications constitutes acceptance
                    of the updated terms.
                  </Body>
                </div>
                <Divider />
              </section>

              <section id='services' className='scroll-mt-28'>
                <SectionHeader num='02' title='Services and Features' />
                <Body>Audora provides the following services:</Body>
                <div className='mt-4'>
                  <BulletList items={[
                    'Audio recording and sharing platform',
                    'User profile management',
                    'Content creation and distribution',
                    'Community interaction features',
                    'Premium subscription services',
                  ]} />
                </div>
                <p className='mt-5 text-[15px] leading-[1.85] text-[#5a5048]'>
                  We reserve the right to modify, suspend, or discontinue any aspect
                  of our services at any time without prior notice.
                </p>
                <Divider />
              </section>

              <section id='accounts' className='scroll-mt-28'>
                <SectionHeader num='03' title='User Accounts' />
                <Body>To use certain features of Audora, you must:</Body>
                <div className='mt-4'>
                  <BulletList items={[
                    'Be at least 13 years old',
                    'Register for an account with accurate information',
                    'Maintain the security of your account credentials',
                    'Notify us immediately of any unauthorized access',
                  ]} />
                </div>
                <p className='mt-5 text-[15px] leading-[1.85] text-[#5a5048]'>
                  We reserve the right to suspend or terminate accounts that violate
                  these terms or engage in fraudulent activity.
                </p>
                <Divider />
              </section>

              <section id='content' className='scroll-mt-28'>
                <SectionHeader num='04' title='User Content' />
                <div className='space-y-4'>
                  <Body>
                    You retain ownership of content you create and share on Audora.
                    However, you grant us a license to use, modify, and distribute
                    your content for the purpose of providing our services.
                  </Body>
                  <Body>You are responsible for ensuring your content:</Body>
                </div>
                <div className='mt-4'>
                  <BulletList items={[
                    'Does not violate any laws or third-party rights',
                    'Is not defamatory or harmful',
                    'Does not contain unauthorized copyrighted material',
                    'Complies with our content guidelines',
                  ]} />
                </div>
                <Divider />
              </section>

              <section id='payments' className='scroll-mt-28'>
                <SectionHeader num='05' title='Payments and Subscriptions' />
                <Body>
                  Premium features and subscriptions are subject to the following terms:
                </Body>
                <div className='mt-4'>
                  <BulletList items={[
                    'All fees are non-refundable unless required by law',
                    'Subscriptions automatically renew unless cancelled',
                    'We may change subscription fees with notice',
                    'Payment information must be accurate and current',
                  ]} />
                </div>
                <Divider />
              </section>

              <section id='prohibited' className='scroll-mt-28'>
                <SectionHeader num='06' title='Prohibited Activities' />
                <Body>Users are prohibited from:</Body>
                <div className='mt-4'>
                  <BulletList items={[
                    'Violating any applicable laws or regulations',
                    'Impersonating others or providing false information',
                    'Harassing, threatening, or abusing other users',
                    'Uploading malicious code or engaging in hacking',
                    'Attempting to access restricted areas of the service',
                    'Using automated systems to access the service',
                  ]} />
                </div>
                <Divider />
              </section>

              <section id='intellectual' className='scroll-mt-28'>
                <SectionHeader num='07' title='Intellectual Property' />
                <Body>
                  All content, features, and functionality of Audora are owned by us
                  or our licensors and are protected by intellectual property laws.
                  You may not:
                </Body>
                <div className='mt-4'>
                  <BulletList items={[
                    'Copy or modify our platform or services',
                    'Use our trademarks or branding without permission',
                    'Reverse engineer our technology',
                    'Remove any copyright or proprietary notices',
                  ]} />
                </div>
                <Divider />
              </section>

              <section id='termination' className='scroll-mt-28'>
                <SectionHeader num='08' title='Termination' />
                <Body>We may terminate or suspend your access to Audora:</Body>
                <div className='mt-4'>
                  <BulletList items={[
                    'For violations of these terms',
                    'For fraudulent or illegal activity',
                    'At our sole discretion, with or without cause',
                    'Upon your request to delete your account',
                  ]} />
                </div>
                <Divider />
              </section>

              <section id='liability' className='scroll-mt-28'>
                <SectionHeader num='09' title='Limitation of Liability' />
                <Body>
                  To the maximum extent permitted by law, Audora shall not be liable for:
                </Body>
                <div className='mt-4'>
                  <BulletList items={[
                    'Indirect, incidental, or consequential damages',
                    'Loss of profits or data',
                    'Service interruptions or errors',
                    'User content or third-party actions',
                  ]} />
                </div>
                <Divider />
              </section>

              <section id='changes' className='scroll-mt-28'>
                <SectionHeader num='10' title='Changes to Terms' />
                <Body>
                  We may update these terms from time to time. We will notify you of
                  significant changes through our website or email. Continued use of
                  our services after such changes constitutes acceptance of the updated
                  terms.
                </Body>
                <Divider />
              </section>

              <section id='contact' className='scroll-mt-28'>
                <SectionHeader num='11' title='Contact Us' />
                <Body>
                  If you have any questions about these Terms and Conditions, please
                  contact us at:
                </Body>
                <a
                  href='mailto:narsibhati2000@gmail.com'
                  className='mt-4 inline-flex items-center gap-2 rounded-full border border-[#e4dfd6] bg-white px-5 py-2.5 font-mono text-[12px] tracking-[0.04em] text-[#1a1714] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:border-[#b8620a]/30 hover:text-[#b8620a]'
                >
                  narsibhati2000@gmail.com
                  <span className='text-[#c8b9a8]'>↗</span>
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;
