import React from 'react';

import { SignInForm } from './components/SignInForm';
import { SignUpForm } from './components/SignUpForm';
import { ForgotPasswordForm } from './components/ForgotPasswordForm';
import { ResetPasswordForm } from './components/ResetPasswordForm';
import { ConfirmCodeForm } from './components/ConfirmCodeForm'

import styles from './AuthPage.module.scss'

type AuthPageProps = {
  mode: 'signIn' | 'signUp' | 'forgotPassword' | 'resetPassword' | 'confirmCode';
};

export const AuthPage: React.FC<AuthPageProps> = ({ mode }) => {
  let form;
  switch (mode) {
    case 'signIn':
      form = <SignInForm />;
      break;
    case 'signUp':
      form = <SignUpForm />;
      break;
    case 'forgotPassword':
      form = <ForgotPasswordForm />;
      break;
    case 'resetPassword':
      form = <ResetPasswordForm />;
      break;
    case 'confirmCode':
      form = <ConfirmCodeForm />;
      break;
    default:
      form = null;
  }

  return (
    <div className={styles.authPage}>
      {form}
    </div>
  );
};