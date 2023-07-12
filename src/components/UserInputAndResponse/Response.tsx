import React from "react";
import Image from "next/image";
import { responseStyles as tailwindStyles } from "@/components/UserInputAndResponse/styles.tailwind";

// =====>
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormDataType = {
  imageLookLike: string;
};

const FormInitialValue = {
  imageLookLike: "",
};

// =====> schema for form
const schema = yup.object({
  imageLookLike: yup.string().required("required*"),
});

export const Response = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: yupResolver(schema),
    defaultValues: FormInitialValue,
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div onSubmit={handleSubmit(onSubmit)} className={tailwindStyles.container}>
      <h1 className={tailwindStyles.heading}>Results</h1>
      {/* <Controller
        name="result"
        control={control}
        render={({ field }) => ( */}
      <textarea
        rows={10}
        id="result"
        className={tailwindStyles.textarea}
        defaultValue={"wah g wah"}
      />
      {/* //   )} */}
      {/* // /> */}
      {/* <p className={tailwindStyles.inputError}>
        {errors.result?.message && <>{errors.result.message}</>}
      </p> */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={tailwindStyles.imageContainer}
      >
        <Image
          className={tailwindStyles.image}
          width={800}
          height={800}
          src="/img.jpg"
          alt="midjourney img"
        />
        <div className={tailwindStyles.imageOverlay}>
          <input
            {...register("imageLookLike")}
            name="imageLookLike"
            id="howImageShouldLookLike"
            type="text"
            autoComplete="title"
            placeholder="How you want your image should look like"
            className={tailwindStyles.input}
          />
          <button type="submit" className={tailwindStyles.submitButton}>
            Submit
          </button>
        </div>

        <p className="text-[red] text-[14px] absolute bottom-2 left-[20px]">
          {errors.imageLookLike?.message && <>{errors.imageLookLike.message}</>}
        </p>
      </form>
      <div className="mt-12">
        <button type="button" className={tailwindStyles.generateButton}>
          Generate Next Part
        </button>

        {/* This will be only shown if the user has generated all */}
        {/*<button*/}
        {/*  type="submit"*/}
        {/*  className={tailwindStyles.downloadButton}*/}
        {/*>*/}
        {/*  Download*/}
        {/*</button>*/}
      </div>
    </div>
  );
};
