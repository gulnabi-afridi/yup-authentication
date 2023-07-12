import React from 'react';
import {UserInputForm} from "@/components/UserInputAndResponse/UserInputForm";
import {Response} from "@/components/UserInputAndResponse/Response";
import {userInputAndResponseStyles as tailwindStyles} from './styles.tailwind'
export const UserInputAndResponse = () => {
  return (
    <div className={tailwindStyles.container}>
      <UserInputForm/>
      <Response />
    </div>
  );
};
