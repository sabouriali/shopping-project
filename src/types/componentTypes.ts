import { type ComponentProps, type ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
};

export type TButtonVariants = "outline" | "solid" | "disabled";

export type TButtonSizes = "sm" | "md" | "lg" | "full";

export type ButtonProps = {
  children: ReactNode;
  color?: string;
  variant?: TButtonVariants;
  size: TButtonSizes;
} & ComponentProps<"button">;

export type ProductItemProps = {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
};

export type BackdropProps = {
  showBackdrop: boolean;
  hideBackdrop: () => void;
};

export type LoadingProps = {
  showBackdrop: boolean;
  hideBackdrop: () => void;
};
