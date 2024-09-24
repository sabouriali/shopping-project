import { type ComponentProps, type ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
  showCart: boolean;
  hideCart: () => void;
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
  showLoading: boolean;
  hideLoading: () => void;
};

export type RightModalProps = {
  children: ReactNode;
  showRightModal: boolean;
  hideRightModal: () => void;
};

export type HeaderProps = {
  onCartClick: () => void;
};

export type CartProps = {
  closeModal: () => void;
};

export type CartItemProps = {
  id: number;
  qty: number;
  price: number;
  closeModal: () => void;
};
