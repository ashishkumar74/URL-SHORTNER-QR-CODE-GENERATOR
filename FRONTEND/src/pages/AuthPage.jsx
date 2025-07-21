/*import React, { useState } from 'react'
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm'

const AuthPage = () => {

    const [login, setLogin] = useState(true)

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            {login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />};
        </div>
    )
};

export default AuthPage*/

import React, { useState, useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import { useSearch } from '@tanstack/react-router';

const AuthPage = () => {
  const { mode } = useSearch({ strict: false }); // read from URL: ?mode=register
  const [login, setLogin] = useState(true);

  useEffect(() => {
    if (mode === 'register') {
      setLogin(false);
    } else {
      setLogin(true);
    }
  }, [mode]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />}
    </div>
  );
};

export default AuthPage;
