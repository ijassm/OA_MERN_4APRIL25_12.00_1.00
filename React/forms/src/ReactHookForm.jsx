import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "./Input";
import { Button } from "./Button";
import { formSchema } from "./validation";

export const ReactHookForm = () => {
  //   console.log(useForm(), "useForm");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  //   console.log(register("name"));

  //   console.log(errors);

  const submit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form
      onSubmit={submit}
      className="flex flex-col max-w-sm mx-auto min-h-screen justify-center"
    >
      <section className="my-2">
        <label className="block" htmlFor="name">
          Name <span className="text-red-600">*</span>
        </label>
        <Input
          className="focus:border-green-600 w-full"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-600 mt-1 text-sm">{errors.name.message}</p>
        )}
      </section>
      <section className="my-2">
        <label className="block" htmlFor="email">
          Email <span className="text-red-600">*</span>
        </label>

        <Input
          type="email"
          className="focus:border-green-600 w-full"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-600 mt-1 text-sm">{errors.email.message}</p>
        )}
      </section>
      <Button>Submit</Button>
    </form>
  );
};
