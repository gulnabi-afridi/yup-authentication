import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { signIpModalStyles as tailwindStyles } from "./styles.tailwind";
// =====>
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: ((prevState: boolean) => boolean) | boolean) => void;
  onSignUpBtnClick: () => void;
  onForgotPasswordBtnClick: () => void;
};

type FormValueType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const FormInitialValue = {
  email: "",
  password: "",
  rememberMe: false,
};

// =====> schema for form
const schema = yup.object({
  email: yup.string().email("Invalid Email").required("required*"),
  password: yup.string().min(8).required("Password is required"),
  rememberMe: yup.boolean(),
});

export const SignInModal = ({
  isOpen,
  setIsOpen,
  onSignUpBtnClick,
  onForgotPasswordBtnClick,
}: Props) => {
  // ================>
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValueType>({
    resolver: yupResolver(schema),
    defaultValues: FormInitialValue,
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className={tailwindStyles.root} onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter={tailwindStyles.child.enter}
          enterFrom={tailwindStyles.child.enterFrom}
          enterTo={tailwindStyles.child.enterTo}
          leave={tailwindStyles.child.leave}
          leaveFrom={tailwindStyles.child.leaveFrom}
          leaveTo={tailwindStyles.child.leaveTo}
        >
          <div className={tailwindStyles.overlay} />
        </Transition.Child>

        <div className={tailwindStyles.mainContentContainer}>
          <div className={tailwindStyles.mainContent}>
            <Transition.Child
              as={Fragment}
              enter={tailwindStyles.child2.enter}
              enterFrom={tailwindStyles.child2.enterFrom}
              enterTo={tailwindStyles.child2.enterTo}
              leave={tailwindStyles.child2.leave}
              leaveFrom={tailwindStyles.child2.leaveFrom}
              leaveTo={tailwindStyles.child2.leaveTo}
            >
              <Dialog.Panel className={tailwindStyles.panel}>
                <div className={tailwindStyles.content}>
                  <h2 className={tailwindStyles.title}>Sign in</h2>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                    action="#"
                    method="POST"
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className={tailwindStyles.formInputLabel}
                      >
                        Email address
                      </label>
                      <div className={tailwindStyles.formInputContainer}>
                        <input
                          {...register("email")}
                          name="email"
                          autoComplete="email"
                          className={tailwindStyles.input}
                        />

                        <p className={tailwindStyles.inputError}>
                          {errors.email?.message && <>{errors.email.message}</>}
                        </p>
                      </div>
                    </div>

                    <div className="">
                      <label
                        htmlFor="password"
                        className={tailwindStyles.formInputLabel}
                      >
                        Password
                      </label>
                      <div className={tailwindStyles.formInputContainer}>
                        <input
                          {...register("password")}
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          className={tailwindStyles.input}
                        />

                        <p className={tailwindStyles.inputError}>
                          {errors.password?.message && (
                            <>{errors.password.message}</>
                          )}
                        </p>
                      </div>
                    </div>

                    <div
                      className={
                        tailwindStyles.rememberInputForgotPasswordContainer
                      }
                    >
                      <div className={tailwindStyles.rememberMeInputContainer}>
                        <input
                          {...register("rememberMe")}
                          name="rememberMe"
                          type="checkbox"
                          className={tailwindStyles.checkbox}
                        />

                        <label
                          htmlFor="remember-me"
                          className={tailwindStyles.rememberMeLabel}
                        >
                          Remember me
                        </label>
                      </div>

                      <div className={tailwindStyles.forgotPasswordContainer}>
                        <button
                          onClick={onForgotPasswordBtnClick}
                          className={tailwindStyles.forgotPassword}
                        >
                          Forgot password?
                        </button>
                      </div>
                    </div>

                    <div>
                      <button type="submit" className={tailwindStyles.button}>
                        Sign in
                      </button>
                    </div>
                  </form>

                  <div>
                    <div className={tailwindStyles.orTextDashContainer}>
                      <div
                        className={tailwindStyles.dashContainer}
                        aria-hidden="true"
                      >
                        <div className={tailwindStyles.dash} />
                      </div>
                      <div className={tailwindStyles.orTextContainer}>
                        <span className={tailwindStyles.orText}>or</span>
                      </div>
                    </div>

                    <div className={tailwindStyles.dontHaveAccountContainer}>
                      <p>Don&apos;t have an account</p>
                      <button
                        onClick={onSignUpBtnClick}
                        className={tailwindStyles.signUpButton}
                      >
                        Sign up
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
