import React from 'react';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'md' | 'lg';

type BaseProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

type ButtonAsDiv = BaseProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseProps> & {
    href?: undefined;
    as: 'div';
  };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsDiv;

const Button: React.FC<ButtonProps> = (props) => {
  const variant = props.variant || 'primary';
  const size = props.size || 'md';
  const className = props.className || '';
  const children = props.children;

  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold tracking-tight rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 focus:ring-offset-white dark:focus:ring-offset-zinc-950';

  const variantStyles = {
    primary: 'bg-amber-500 text-white hover:bg-amber-600 hover:-translate-y-0.5 shadow-md hover:shadow-lg dark:bg-amber-400 dark:text-zinc-900 dark:hover:bg-amber-300',
    secondary: 'bg-white text-zinc-800 border border-zinc-300/80 hover:bg-zinc-100 hover:border-zinc-400/80 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700 dark:hover:bg-zinc-700',
  };

  const sizeStyles = {
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  if (props.href) {
    const { children: _children, className: _className, variant: _variant, size: _size, ...anchorProps } = props as ButtonAsLink;
    return (
      <a className={combinedClassName} {...anchorProps}>
        {children}
      </a>
    );
  } else if ('as' in props && props.as === 'div') {
    const { children: _children, className: _className, variant: _variant, size: _size, as: _as, ...divProps } = props as ButtonAsDiv;
    return (
      <div className={combinedClassName} {...divProps}>
        {children}
      </div>
    );
  } else {
    const { children: _children, className: _className, variant: _variant, size: _size, ...buttonProps } = props as ButtonAsButton;
    return (
      <button
        className={combinedClassName}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }
};

export default Button;