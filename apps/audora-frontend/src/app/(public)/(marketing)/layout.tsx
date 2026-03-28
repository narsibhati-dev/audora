import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import React from 'react';

const MarketingLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='overflow-x-hidden bg-[#f7f5f1]'>
      <Header isMarketing={true} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
