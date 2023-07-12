import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { signUpModalStyles as tailwindStyles } from "./styles.tailwind";

// =====>
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: ((prevState: boolean) => boolean) | boolean) => void;
  onSignInBtnClick: () => void;
};

type FormValueType = {
  name: string;
  email: string;
  password: string;
};

const FormInitialValue = {
  name: "",
  email: "",
  password: "",
};

// =====> schema for form
const schema = yup.object({
  name: yup.string().required("required*"),
  email: yup.string().email("Invalid Email").required("required*"),
  password: yup.string().min(8).required("Password is required"),
});

export const SignUpModal = ({ isOpen, setIsOpen, onSignInBtnClick }: Props) => {
  // ================>
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValueType>({
    resolver: yupResolver(schema),
    defaultValues: FormInitialValue,
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className={tailwindStyles.dialog} onClose={setIsOpen}>
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

        <div className={tailwindStyles.modalContent}>
          <div className={tailwindStyles.dialogPanelContainer}>
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
                <div className={tailwindStyles.formContainer}>
                  <h2 className={tailwindStyles.signUpTitle}>Sign up</h2>
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
                        Name
                      </label>
                      <div className={tailwindStyles.formInputContainer}>
                        <input
                          {...register("name")}
                          name="name"
                          type="text"
                          autoComplete="name"
                          className={tailwindStyles.formInput}
                          placeholder="Enter your name"
                        />

                        <p className={tailwindStyles.inputError}>
                          {errors.name?.message && <>{errors.name.message}</>}
                        </p>
                      </div>
                    </div>
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
                          type="email"
                          autoComplete="email"
                          className={tailwindStyles.formInput}
                          placeholder="Enter your email"
                        />

                        <p className={tailwindStyles.inputError}>
                          {errors.email?.message && <>{errors.email.message}</>}
                        </p>
                      </div>
                    </div>
                    <div>
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
                          autoComplete="new-password"
                          className={tailwindStyles.formInput}
                          placeholder="Enter your password"
                        />

                        <p className={tailwindStyles.inputError}>
                          {errors.password?.message && (
                            <>{errors.password.message}</>
                          )}
                        </p>
                      </div>
                    </div>
                    <div>
                      <button type="submit" className={tailwindStyles.button}>
                        Sign up
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
                        onClick={onSignInBtnClick}
                        className={tailwindStyles.signUpButton}
                      >
                        Sign in
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
