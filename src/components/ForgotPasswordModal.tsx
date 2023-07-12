import React, { Fragment } from 'react';
import { Dialog, Transition } from "@headlessui/react";
import {forgotPasswordModalStyles as tailwindStyles} from './styles.tailwind';

type Props = {
  isOpen: boolean;
  setIsOpen: (value: (((prevState: boolean) => boolean) | boolean)) => void;
};

export const ForgotPasswordModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className={tailwindStyles.root} onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter={tailwindStyles.enter}
          enterFrom={tailwindStyles.enterFrom}
          enterTo={tailwindStyles.enterTo}
          leave={tailwindStyles.leave}
          leaveFrom={tailwindStyles.leaveFrom}
          leaveTo={tailwindStyles.leaveTo}
        >
          <div className={tailwindStyles.child} />
        </Transition.Child>

        <div className={tailwindStyles.fixedContainer}>
          <div className={tailwindStyles.mainForgotPasswordContainer}>
            <Transition.Child
              as={Fragment}
              enter={tailwindStyles.dcEnter}
              enterFrom={tailwindStyles.dcEnterFrom}
              enterTo={tailwindStyles.dcEnterTo}
              leave={tailwindStyles.dcLeave}
              leaveFrom={tailwindStyles.dcLeaveFrom}
              leaveTo={tailwindStyles.dcLeaveTo}
            >
              <Dialog.Panel className={tailwindStyles.childPanel}>
                <div className={tailwindStyles.contentContainer}>
                  <h2 className={tailwindStyles.title}>
                    Forgot Password
                  </h2>
                  <form className={tailwindStyles.form} action="#" method="POST">

                    <div>
                      <label htmlFor="email" className={tailwindStyles.label}>
                        Email address
                      </label>
                      <div className={tailwindStyles.inputContainer}>
                        <input
                          id="email"
                          name="email"
                          type={'email'}
                          autoComplete="email"
                          required
                          className={tailwindStyles.input}
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className={tailwindStyles.button}
                      >
                        Send Email
                      </button>
                    </div>
                  </form>

                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
