import SignIn from '@/app/components/signin';
import React from 'react';

const Signin = ({ providers }) => {
  return (
    <div>
      <SignIn providers={providers} />
    </div>
  );
};

export default Signin;
