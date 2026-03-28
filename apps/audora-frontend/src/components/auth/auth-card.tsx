import React from 'react';

interface AuthCardProps {
  children: React.ReactNode;
}

const AuthCard = ({ children }: AuthCardProps) => {
  return (
    <section className='relative z-10 flex min-h-screen w-full flex-col md:flex-row'>
      {children}
    </section>
  );
};

export default AuthCard;
