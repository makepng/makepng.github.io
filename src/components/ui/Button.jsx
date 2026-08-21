import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const variants = {
  primary:
    'bg-[#26b0a1] hover:bg-[#1e9387] text-white font-semibold shadow-md shadow-[#26b0a1]/25 hover:shadow-lg hover:shadow-[#26b0a1]/35',
  secondary:
    'bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium',
  ghost:
    'bg-transparent hover:bg-slate-100 text-slate-600',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm rounded-lg',
  md: 'px-5 py-2.5 text-sm rounded-xl',
  lg: 'px-6 py-3 text-base rounded-xl',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) {
  return (
    <button
      className={twMerge(
        clsx(
          'inline-flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#26b0a1] focus-visible:ring-offset-2',
          variants[variant],
          sizes[size],
          className
        )
      )}
      {...props}
    >
      {children}
    </button>
  );
}
