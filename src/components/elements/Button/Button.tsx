import React, { HTMLAttributes } from "react";
import styles from "./Button.module.scss";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary";
}

const variantMap = {
  primary: styles.primary,
};

const Button = ({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const completeClassName = `${styles.button} ${className} ${variantMap[variant]}`;

  return (
    <span className={completeClassName}>
      <button {...props}>
        <span className={styles.children}>{children}</span>
      </button>
    </span>
  );
};

export default Button;
