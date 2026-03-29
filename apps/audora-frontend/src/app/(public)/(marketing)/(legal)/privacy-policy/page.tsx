import React from 'react';
import TableOfContents from '@/components/marketing/Legal/table-of-contents';
import getPageMetadata from '@/lib/seo/getPageMetadata';

export const metadata = getPageMetadata({
  title: 'Audora Privacy Policy',
  description:
    'This Privacy Policy explains how Audora collects, uses, and protects your personal data when you use our platform.',
});

const sections = [
  { id: 'information-we-collect', title: 'Information We Collect' },
  { id: 'how-we-use', title: 'How We Use Your Information' },
  { id: 'data-sharing', title: 'Data Sharing and Disclosure' },
  { id: 'your-rights', title: 'Your Rights and Choices' },
  { id: 'data-security', title: 'Data Security' },
  { id: 'international-transfers', title: 'International Data Transfers' },
  { id: 'children-privacy', title: `Children's Privacy` },
  { id: 'policy-changes', title: 'Changes to This Policy' },
  { id: 'contact-us', title: 'Contact Us' },
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

function SubHeader({ title }: { title: string }) {
  return (
    <h3 className='mb-3 font-syne text-[0.95rem] font-bold tracking-[-0.02em] text-[#1a1714]'>
      {title}
    </h3>
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

const PrivacyPolicyPage = () => {
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
            Privacy Policy
          </h1>
          <p className='font-mono text-[11px] text-[#9a8878]'>
            Last updated: May 7, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className='mx-auto max-w-[90rem] px-8 py-16 sm:px-12 lg:px-16 lg:py-20 xl:px-24'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-[240px_1fr] xl:grid-cols-[280px_1fr]'>
          {/* Sidebar */}
          <aside className='hidden lg:block'>
            <TableOfContents sections={sections} />
          </aside>

          <div className='min-w-0'>
            <p className='mb-12 max-w-2xl text-[16px] leading-[1.85] text-[#5a5048]'>
              Welcome to Audora. We are committed to protecting your personal data
              and your privacy rights. This Privacy Policy explains how we collect,
              use, share, and protect your information when you use our platform.
            </p>

            {/* Mobile TOC */}
            <div className='mb-12 rounded-xl border border-[#e4dfd6] bg-white p-6 lg:hidden'>
              <TableOfContents sections={sections} />
            </div>

            <div className='space-y-14'>
              <section id='information-we-collect' className='scroll-mt-28'>
                <SectionHeader num='01' title='Information We Collect' />
                <div className='space-y-7'>
                  <div>
                    <SubHeader title='1.1 Information You Provide' />
                    <BulletList items={[
                      'Account information (name, email, password)',
                      'Profile information (profile picture, bio)',
                      'Payment information (credit card details, billing address)',
                      'Content you create or upload (audio recordings, comments)',
                      'Communications with us (support tickets, feedback)',
                    ]} />
                  </div>
                  <div>
                    <SubHeader title='1.2 Automatically Collected Information' />
                    <BulletList items={[
                      'Device information (IP address, browser type, operating system)',
                      'Usage data (pages visited, features used, time spent)',
                      'Location data (if permitted by your device settings)',
                      'Cookies and similar tracking technologies',
                    ]} />
                  </div>
                </div>
                <Divider />
              </section>

              <section id='how-we-use' className='scroll-mt-28'>
                <SectionHeader num='02' title='How We Use Your Information' />
                <Body>We use your data for the following purposes:</Body>
                <div className='mt-4'>
                  <BulletList items={[
                    'Provide, maintain, and improve our services',
                    'Process transactions and manage your account',
                    'Send you important service updates and notifications',
                    'Respond to your comments and support requests',
                    'Send marketing communications (with your consent)',
                    'Prevent fraud and enhance security',
                    'Comply with legal obligations',
                    "Analyze and improve our platform's performance",
                  ]} />
                </div>
                <Divider />
              </section>

              <section id='data-sharing' className='scroll-mt-28'>
                <SectionHeader num='03' title='Data Sharing and Disclosure' />
                <Body>We may share your information with:</Body>
                <div className='mt-4'>
                  <BulletList items={[
                    'Service providers (hosting, payment processing, analytics)',
                    'Business partners (with your consent)',
                    'Legal authorities (when required by law)',
                    'Other users (based on your privacy settings)',
                  ]} />
                </div>
                <p className='mt-5 text-[13px] leading-[1.7] text-[#9a8878]'>
                  All third parties are contractually bound to protect your data and
                  use it only for specified purposes.
                </p>
                <Divider />
              </section>

              <section id='your-rights' className='scroll-mt-28'>
                <SectionHeader num='04' title='Your Rights and Choices' />
                <Body>You have the following rights regarding your data:</Body>
                <div className='mt-4'>
                  <BulletList items={[
                    'Access your personal data',
                    'Correct inaccurate data',
                    'Request data deletion',
                    'Object to data processing',
                    'Data portability',
                    'Withdraw consent',
                  ]} />
                </div>
                <p className='mt-5 text-[15px] leading-[1.85] text-[#5a5048]'>
                  To exercise these rights, contact us at{' '}
                  <a
                    href='mailto:narsibhati2000@gmail.com'
                    className='font-medium text-[#b8620a] underline underline-offset-2 transition-colors hover:text-[#9a5008]'
                  >
                    narsibhati2000@gmail.com
                  </a>
                </p>
                <Divider />
              </section>

              <section id='data-security' className='scroll-mt-28'>
                <SectionHeader num='05' title='Data Security' />
                <Body>
                  We implement industry-standard security measures to protect your
                  data, including:
                </Body>
                <div className='mt-4'>
                  <BulletList items={[
                    'Encryption of data in transit and at rest',
                    'Regular security assessments',
                    'Access controls and authentication',
                    'Secure data storage and backup systems',
                  ]} />
                </div>
                <Divider />
              </section>

              <section id='international-transfers' className='scroll-mt-28'>
                <SectionHeader num='06' title='International Data Transfers' />
                <Body>
                  Your data may be transferred and processed in countries other than
                  your own. We ensure appropriate safeguards are in place for such
                  transfers in compliance with applicable data protection laws.
                </Body>
                <Divider />
              </section>

              <section id='children-privacy' className='scroll-mt-28'>
                <SectionHeader num='07' title="Children's Privacy" />
                <Body>
                  Our services are not intended for children under 13. We do not
                  knowingly collect or maintain information from children under 13.
                  If we learn we have collected such information, we will promptly
                  delete it.
                </Body>
                <Divider />
              </section>

              <section id='policy-changes' className='scroll-mt-28'>
                <SectionHeader num='08' title='Changes to This Policy' />
                <Body>
                  We may update this Privacy Policy periodically. We will notify you
                  of significant changes through our website or email. Continued use
                  of our services after such changes constitutes acceptance of the
                  updated policy.
                </Body>
                <Divider />
              </section>

              <section id='contact-us' className='scroll-mt-28'>
                <SectionHeader num='09' title='Contact Us' />
                <Body>
                  For any questions about this Privacy Policy or your data, please
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

export default PrivacyPolicyPage;
