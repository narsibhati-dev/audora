import React from 'react';

interface AuthCardProps {
  children: React.ReactNode;
}

const AuthCard = ({ children }: AuthCardProps) => {
  return (
    <section className='flex h-full w-full flex-col md:flex-row'>
      {children}
    </section>
  );
};

export default AuthCard;
