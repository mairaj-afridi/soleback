import React, { useState } from "react";
import { Input, PasswordInput, useMantineTheme, Checkbox } from "@mantine/core";

const LoginWithEmail = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="xl:w-[50%] lg:w-[60%] mx-auto w-full flex flex-col items-center justify-center gap-10"
    >
      <div className="w-full flex flex-col items-center justify-start gap-4">
        <h1 className="text-black-secondary text-center sm:text-4xl text-3xl font-semibold">
          Login
        </h1>
        <p className="sm:text-lg text-base text-center text-black-off font-manrope font-medium">
          Enter account details to get started
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-start gap-4">
        <Input
          className="w-full text-xl font-jakarta text-brand-main"
          classNames={{
            input:
              "text-black-secondary text-lg font-medium placeholder:text-lg !font-jakarta focus:outline-none focus:border-brand-main",
          }}
          type="email"
          size="xl"
          radius="md"
          name="email"
          value={inputs.email}
          onChange={handleInputs}
          placeholder="Email Address"
          required
        />
        <PasswordInput
          className="w-full text-xl font-jakarta text-brand-main"
          classNames={{
            root: "!focus:outline-none !focus:border-brand-main",
            innerInput:
              "text-black-secondary text-lg placeholder:text-lg font-medium !font-jakarta !focus:outline-none !focus:border-brand-main",
          }}
          size="xl"
          radius="md"
          placeholder="Password"
          name="password"
          value={inputs.password}
          onChange={handleInputs}
          required
        />
      </div>
      <div className="w-full flex items-center justify-between">
        <Checkbox
          defaultChecked
          label="Remmber Me"
          classNames={{
            input: "checked:bg-brand-main cursor-pointer",
            label: "text-lg",
          }}
          className="!text-lg text-black-secondary font-semibold font-manrope"
          color="yellow"
          size="md"
        />
        <p className="text-lg font-semibold font-manrope text-brand-main cursor-pointer">
          Forget Password
        </p>
      </div>
      <button
        type="submit"
        className="w-full h-[56px] flex items-center justify-center text-black-secondary text-lg font-semibold bg-brand-main rounded-[8px]"
      >
        Login
      </button>
      <div className="w-full flex items-center justify-center gap-2">
        <p className="text-base text-center text-black-off font-medium">
          Don’t have an account?
        </p>
        <p className="text-base text-center text-brand-main font-medium cursor-pointer">
          Sign Up
        </p>
      </div>
    </form>
  );
};

export default LoginWithEmail;
