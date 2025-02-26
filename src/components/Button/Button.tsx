import { FC, PropsWithChildren } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  selected?: boolean;
  onClick: () => void;
  ariaLabel: string;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  selected,
  onClick,
  ariaLabel,
}) => (
  <button
    onClick={onClick}
    className={`${styles.button} ${selected ? styles.selected : ""}`}
    aria-label={ariaLabel}
    type="button"
  >
    {children}
  </button>
);

export default Button;
