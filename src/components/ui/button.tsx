import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants: {
  variant: Record<string, string>;
  size: Record<string, string>;
} = {
  variant: {
    default: "bg-[#550022] text-white hover:bg-[#44001B]",
    outline: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
    ghost: "text-slate-900 hover:bg-slate-100",
    destructive: "bg-red-600 text-white hover:bg-red-500",
    link: "text-[#550022] underline-offset-4 hover:underline",
  },
  size: {
    default: "h-10 px-4 py-2 text-sm",
    sm: "h-8 px-3 text-xs",
    lg: "h-11 px-6 text-base",
    icon: "h-10 w-10",
  },
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof buttonVariants.variant;
  size?: keyof typeof buttonVariants.size;
};

export function Button({
  className,
  variant = "default",
  size = "default",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
        buttonVariants.variant[variant],
        buttonVariants.size[size],
        className
      )}
      {...props}
    />
  );
}

export { buttonVariants };
