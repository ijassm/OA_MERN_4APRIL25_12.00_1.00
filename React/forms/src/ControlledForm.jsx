import React, { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

export const ControlledForm = () => {
  console.log("ControlledForm rendered");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    setFormData((formData) => ({ ...formData, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-sm mx-auto min-h-screen justify-center"
    >
      <section className="my-2">
        <label className="block" htmlFor="name">
          Name
        </label>
        <Input
          name="name"
          className="focus:border-green-600 w-full"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </section>
      <section className="my-2">
        <label className="block" htmlFor="email">
          Email
        </label>

        <Input
          type="email"
          name="email"
          className="focus:border-green-600 w-full"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Button>Submit</Button>
      </section>
    </form>
  );
};
