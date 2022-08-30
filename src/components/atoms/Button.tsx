import { MouseEvent, PropsWithChildren } from "react";

type Variant = "outlined" | "text";

type ButtonProps = {
  role: string;
  onClick?(): void;
  variant?: Variant;
} & PropsWithChildren;

export default function Button({ children, role, variant = "outlined", onClick }: ButtonProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick();
  };

  return (
    <button
      className={`
        px-3 py-1
        rounded-md ${variant === "outlined" && "border border-rose-500"}
        hover:bg-rose-300/10
        text-rose-500
      `}
      aria-label={role}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
