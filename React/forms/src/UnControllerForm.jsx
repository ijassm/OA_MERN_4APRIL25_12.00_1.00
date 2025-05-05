import React, { useRef, useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

export const UnControlledForm = () => {
  console.log("UnControlledForm rendered");

  // ❌
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //   });

  // ✔
  const formRef = useRef(null);

  // ❌
  //   const handleChange = (e) => {
  //     const field = e.target.name;
  //     const value = e.target.value;

  //     setFormData((formData) => ({ ...formData, [field]: value }));
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    const elements = formRef.current.elements;
    const formData = {
      name: elements.name.value,
      email: elements.email.value,
    };

    console.log(formData);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col max-w-sm mx-auto min-h-screen justify-center"
    >
      <section className="my-2">
        <label className="block" htmlFor="name">
          Name
        </label>
        <Input name="name" className="focus:border-green-600 w-full" required />
      </section>
      <section className="my-2">
        <label className="block" htmlFor="email">
          Email
        </label>

        <Input
          type="email"
          name="email"
          className="focus:border-green-600 w-full"
          required
        />
      </section>
      <Button>Submit</Button>
    </form>
  );
};
