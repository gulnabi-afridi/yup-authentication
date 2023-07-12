import React from 'react';
import { useState } from 'react';
import { SignInModal } from '@/components/SignInModal';
import { SignUpModal } from '@/components/SignUpModal';
import { ForgotPasswordModal } from '@/components/ForgotPasswordModal';
import {tailwindStyles} from './styles.tailwind';


export const Header = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false);

  return (
    <header className={tailwindStyles.header}>
      <nav className={tailwindStyles.nav} aria-label="Global">
        <div className={tailwindStyles.logoContainer}>
          <a href="#" className={tailwindStyles.logoLink}>
            <span className="sr-only">Your Company</span>
            <img
              className={tailwindStyles.logoImage}
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className={tailwindStyles.loginButtonContainer}>
          <button
            onClick={() => {
              setIsSignInModalOpen(true);
            }}
            className={tailwindStyles.loginButton}
          >
            Login
          </button>
        </div>
      </nav>

      {/*  Modal */}
      <SignInModal
        isOpen={isSignInModalOpen}
        setIsOpen={setIsSignInModalOpen}
        onSignUpBtnClick={() => {
          setIsSignUpModalOpen(true);
          setIsSignInModalOpen(false);
        }}
        onForgotPasswordBtnClick={() => {
          setIsForgotPasswordModalOpen(true);
        }}
      />
      <SignUpModal
        isOpen={isSignUpModalOpen}
        setIsOpen={setIsSignUpModalOpen}
        onSignInBtnClick={() => {
          setIsSignUpModalOpen(false);
          setIsSignInModalOpen(true);
        }}
      />

      <ForgotPasswordModal isOpen={isForgotPasswordModalOpen} setIsOpen={setIsForgotPasswordModalOpen} />
    </header>
  );
};
