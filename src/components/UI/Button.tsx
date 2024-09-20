import {
  type TButtonSizes,
  type ButtonProps,
  type TButtonVariants,
} from "../../types/componentTypes";

function Button({
  children,
  className,
  color,
  variant,
  size,
  ...props
}: ButtonProps) {
  function checkVariant(variant: TButtonVariants) {
    if (variant === "solid") {
      return { backgroundColor: checkColor(color!), color: "#ffffff" };
    } else if (variant === "outline") {
      return {
        border: `1px solid ${checkColor(color!)}`,
        color: checkColor(color!),
      };
    } else if (variant === "disabled") {
      return { backgroundColor: "#71717a", color: "#ffffff" };
    }
  }

  function checkSize(size: TButtonSizes) {
    if (size === "sm") {
      return { padding: "0.375rem", borderRadius: "0.375rem" };
    } else if (size === "md") {
      return { padding: "0.25rem 0.75rem", borderRadius: "0.5rem" };
    } else if (size === "lg") {
      return { padding: "0.5rem 1rem", borderRadius: "0.5rem" };
    } else if (size === "full") {
      return { width: "100%", padding: "0.5rem 1rem", borderRadius: "0.5rem" };
    }
  }

  function checkColor(color: string) {
    if (color === "primary") {
      return "#3498db";
    } else if (color === "secondary") {
      return "#34495e";
    } else if (color === "success") {
      return "#2ecc71";
    } else if (color === "danger") {
      return "#ef4444";
    } else {
      return color;
    }
  }

  return (
    <button
      {...props}
      className={`transition ${className}`}
      style={{ ...checkVariant(variant), ...checkSize(size) }}
    >
      {children}
    </button>
  );
}

export default Button;
