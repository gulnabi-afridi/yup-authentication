import React, { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { userInputFormStyles as tailwindStyles } from "./styles.tailwind";
// =====>
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const dropdownOptions = [
  {
    id: 1,
    value: "First Option",
  },
  {
    id: 2,
    value: "Second Option",
  },
  {
    id: 3,
    value: "Third Option",
  },
];

const radioOptions = [
  {
    id: "one",
    value: "penguins",
  },
  {
    id: "two",
    value: "afzal bhi",
  },
  {
    id: "three",
    value: "hamdan",
  },
];

type MyFormValues = {
  title: string;
  radioValue: string;
  selectValue: string;
};

const InitialFormData = {
  title: "",
  radioValue: "",
  selectValue: "",
};

// =====> schema for form
const schema = yup.object({
  title: yup.string().required("required*"),
  radioValue: yup.string().required("Please select one"),
  selectValue: yup.string().required("Please select one value"),
});

export const UserInputForm = () => {
  // ================>
  const {
    handleSubmit,
    setValue,
    getValues,
    register,
    formState: { errors },
  } = useForm<MyFormValues>({
    resolver: yupResolver(schema),
    defaultValues: InitialFormData,
  });

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    setValue("selectValue", dropdownOptions[0].value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  }, []);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
        action="#"
        method="POST"
      >
        <div>
          <label htmlFor="title" className={tailwindStyles.title}>
            Write a title
          </label>
          <div className={tailwindStyles.inputContainer}>
            <input
              // {...field}
              type="text"
              autoComplete="title"
              {...register("title")}
              className={tailwindStyles.titleInput}
            />

            <p className={tailwindStyles.inputError}>
              {errors.title?.message && <>{errors.title.message}</>}
            </p>
          </div>
        </div>
        <div>
          <label htmlFor="type" className={tailwindStyles.selectOneItemTitle}>
            Pick One of These
          </label>
          <div className={tailwindStyles.radioItemsContainer}>
            {/* ====> ist radio */}
            {radioOptions.map((item, index) => {
              return (
                <div className={tailwindStyles.radioItemAndLabelContainer}>
                  <input
                    {...register("radioValue")}
                    id={item.id}
                    type="radio"
                    value={item.value}
                    className={tailwindStyles.radioButton}
                  />

                  <label
                    htmlFor={item.id}
                    className={tailwindStyles.radioItemLabel}
                  >
                    {item.value}
                  </label>
                </div>
              );
            })}
          </div>
          <p className={tailwindStyles.inputError}>
            {errors.radioValue?.message && <>{errors.radioValue.message}</>}
          </p>
        </div>
        <div>
          <label htmlFor="type" className={tailwindStyles.dropdownLabel}>
            Pick One of These
          </label>

          <Menu as="div" className={tailwindStyles.menu}>
            <div>
              <Menu.Button className={tailwindStyles.dropdownButton}>
                {getValues().selectValue}
                <ChevronDownIcon
                  className={tailwindStyles.chevronIcon}
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter={tailwindStyles.enter}
              enterFrom={tailwindStyles.enterFrom}
              enterTo={tailwindStyles.enterTo}
              leave={tailwindStyles.leave}
              leaveFrom={tailwindStyles.leaveFrom}
              leaveTo={tailwindStyles.leaveTo}
            >
              <Menu.Items className={tailwindStyles.menuItems}>
                <div className="py-1">
                  {dropdownOptions.map((option) => (
                    <Menu.Item key={option.id}>
                      {({ active }) => (
                        <div
                          onClick={() => {
                            setValue("selectValue", option.value, {
                              shouldDirty: true,
                              shouldTouch: true,
                              shouldValidate: true,
                            });
                          }}
                          className={`${
                            active || option.value === getValues().selectValue
                              ? tailwindStyles.activeItem
                              : tailwindStyles.nonActiveItem
                          } ${tailwindStyles.dropdownOption}`}
                        >
                          {option.value}
                        </div>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className={tailwindStyles.submitButtonContainer}>
          <button type="submit" className={tailwindStyles.submitButton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
