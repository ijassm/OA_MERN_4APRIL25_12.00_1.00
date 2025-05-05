import clsx from "clsx";
import React from "react";

export const Button = ({
  className,
  variant = "filled",
  children,
  ...props
}) => {
  const variants = {
    filled: "bg-amber-300 hover:bg-amber-400 text-black",
    outlined:
      "border-2 border-amber-300 text-amber-600 bg-transparent hover:bg-amber-100",
    text: "bg-transparent text-amber-600 hover:underline",
  };

  return (
    <button
      className={clsx(
        "w-full py-2 hover:bg-amber-400 active:scale-[0.9] bg-amber-300 my-4 cursor-pointer",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
