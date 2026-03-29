import React from 'react';
import TableOfContents from '@/components/marketing/Legal/table-of-contents';
import getPageMetadata from '@/lib/seo/getPageMetadata';

export const metadata = getPageMetadata({
  title: 'Audora Cookie Policy',
  description:
    'This Cookie Policy explains how Audora uses cookies and similar technologies to recognize you when you visit our website.',
});

const sections = [
  { id: 'what-are-cookies', title: 'What Are Cookies' },
  { id: 'types-of-cookies', title: 'Types of Cookies We Use' },
  { id: 'how-we-use', title: 'How We Use Cookies' },
  { id: 'third-party', title: 'Third-Party Cookies' },
  { id: 'cookie-controls', title: 'Cookie Controls' },
  { id: 'updates', title: 'Updates to This Policy' },
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

const CookiesPage = () => {
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
            Cookie Policy
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
              This Cookie Policy explains how Audora uses cookies and similar
              technologies to recognize you when you visit our website. It explains
              what these technologies are and why we use them, as well as your rights
              to control our use of them.
            </p>

            {/* Mobile TOC */}
            <div className='mb-12 rounded-xl border border-[#e4dfd6] bg-white p-6 lg:hidden'>
              <TableOfContents sections={sections} />
            </div>

            <div className='space-y-14'>
              <section id='what-are-cookies' className='scroll-mt-28'>
                <SectionHeader num='01' title='What Are Cookies' />
                <div className='space-y-4'>
                  <Body>
                    Cookies are small text files that are placed on your computer or
                    mobile device when you visit a website. They are widely used to make
                    websites work more efficiently and provide useful information to
                    website owners.
                  </Body>
                  <Body>
                    Cookies can be &ldquo;persistent&rdquo; or &ldquo;session&rdquo; cookies.
                    Persistent cookies remain on your device when you go offline, while
                    session cookies are deleted as soon as you close your web browser.
                  </Body>
                </div>
                <Divider />
              </section>

              <section id='types-of-cookies' className='scroll-mt-28'>
                <SectionHeader num='02' title='Types of Cookies We Use' />
                <div className='space-y-7'>
                  <div>
                    <SubHeader title='2.1 Essential Cookies' />
                    <Body>
                      These cookies are necessary for the website to function properly.
                      They enable basic functions like page navigation and access to
                      secure areas of the website.
                    </Body>
                  </div>
                  <div>
                    <SubHeader title='2.2 Performance Cookies' />
                    <Body>
                      These cookies help us understand how visitors interact with our
                      website by collecting and reporting information anonymously.
                    </Body>
                  </div>
                  <div>
                    <SubHeader title='2.3 Functionality Cookies' />
                    <Body>
                      These cookies enable enhanced functionality and personalization,
                      such as remembering your preferences and settings.
                    </Body>
                  </div>
                  <div>
                    <SubHeader title='2.4 Targeting Cookies' />
                    <Body>
                      These cookies are used to track visitors across websites to display
                      relevant advertisements.
                    </Body>
                  </div>
                </div>
                <Divider />
              </section>

              <section id='how-we-use' className='scroll-mt-28'>
                <SectionHeader num='03' title='How We Use Cookies' />
                <Body>We use cookies for the following purposes:</Body>
                <div className='mt-4'>
                  <BulletList items={[
                    'To provide you with a better user experience',
                    'To remember your preferences and settings',
                    'To analyze how our website is used',
                    'To personalize content and advertisements',
                    "To improve our website's performance",
                    'To ensure security and prevent fraud',
                  ]} />
                </div>
                <Divider />
              </section>

              <section id='third-party' className='scroll-mt-28'>
                <SectionHeader num='04' title='Third-Party Cookies' />
                <div className='space-y-4'>
                  <Body>
                    In addition to our own cookies, we may also use various third-party
                    cookies to report usage statistics of the website, deliver
                    advertisements on and through the website, and so on.
                  </Body>
                  <Body>
                    These third-party cookies are subject to their respective privacy
                    policies. We recommend reviewing the privacy policies of these third
                    parties for more information.
                  </Body>
                </div>
                <Divider />
              </section>

              <section id='cookie-controls' className='scroll-mt-28'>
                <SectionHeader num='05' title='Cookie Controls' />
                <div className='space-y-4'>
                  <Body>
                    You can control and/or delete cookies as you wish. You can delete
                    all cookies that are already on your computer and you can set most
                    browsers to prevent them from being placed.
                  </Body>
                  <Body>To manage your cookie preferences, you can:</Body>
                </div>
                <div className='mt-4'>
                  <BulletList items={[
                    'Use our cookie consent tool',
                    'Adjust your browser settings',
                    'Use privacy-focused browser extensions',
                    'Clear your browser cookies regularly',
                  ]} />
                </div>
                <Divider />
              </section>

              <section id='updates' className='scroll-mt-28'>
                <SectionHeader num='06' title='Updates to This Policy' />
                <Body>
                  We may update this Cookie Policy from time to time to reflect changes
                  in our practices or for other operational, legal, or regulatory
                  reasons. Please visit this Cookie Policy regularly to stay informed
                  about our use of cookies and related technologies.
                </Body>
                <Divider />
              </section>

              <section id='contact' className='scroll-mt-28'>
                <SectionHeader num='07' title='Contact Us' />
                <Body>
                  If you have any questions about our use of cookies or other
                  technologies, please contact us at:
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

export default CookiesPage;
