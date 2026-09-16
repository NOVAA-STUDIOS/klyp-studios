import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import styles from "./container.module.css";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "text";
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Container<T extends ElementType = "div">({
  as,
  children,
  className,
  size = "default",
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";
  const classes = [styles.container, size !== "default" && styles[size], className]
    .filter(Boolean)
    .join(" ");
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
