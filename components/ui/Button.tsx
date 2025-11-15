import React from 'react';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'md' | 'lg';

// FIX: Refactored props to support both button and anchor attributes correctly using a discriminated union.
// This ensures type safety for props like `href`, `type`, and event handlers, resolving all type errors.
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

// FIX: Add support for rendering the button as a 'div' to allow for non-interactive button-styled elements.
type ButtonAsDiv = BaseProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseProps> & {
    href?: undefined;
    as: 'div';
  };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsDiv;

const Button: React.FC<ButtonProps> = (props) => {
  // FIX: Destructuring `props` at the top level prevents TypeScript from correctly narrowing the type
  // within the conditional `if (props.href)`. By accessing common properties directly, we
  // preserve the full type information of `props` for the type guard to work.
  const variant = props.variant || 'primary';
  const size = props.size || 'md';
  const className = props.className || '';
  const children = props.children;

  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold tracking-tight rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-white dark:focus:ring-offset-zinc-950';

  const variantStyles = {
    primary: 'bg-zinc-900 text-white hover:bg-zinc-800 hover:-translate-y-0.5 shadow-md hover:shadow-lg dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500',
    secondary: 'bg-white text-zinc-800 border border-zinc-300/80 hover:bg-zinc-100 hover:border-zinc-400/80 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700 dark:hover:bg-zinc-700',
  };

  const sizeStyles = {
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  // FIX: Using an explicit if/else block ensures TypeScript correctly narrows the `props` type in each branch.
  // This resolves issues where the spread operator (`...`) would otherwise be applied to a union type, causing type conflicts.
  if (props.href) {
    // FIX: Explicitly cast props to the correct type before destructuring with a rest parameter.
    // This is a workaround for a TypeScript limitation where it fails to narrow the type of the rest parameter from a discriminated union.
    const { children: _children, className: _className, variant: _variant, size: _size, ...anchorProps } = props as ButtonAsLink;
    return (
      <a className={combinedClassName} {...anchorProps}>
        {children}
      </a>
    );
  // FIX: Add a condition to handle rendering as a 'div' when the `as="div"` prop is provided.
  } else if ('as' in props && props.as === 'div') {
    // This uses a type guard to correctly narrow the props for a div element.
    const { children: _children, className: _className, variant: _variant, size: _size, as: _as, ...divProps } = props as ButtonAsDiv;
    return (
      <div className={combinedClassName} {...divProps}>
        {children}
      </div>
    );
  } else {
    // FIX: Explicitly cast props to the correct type before destructuring with a rest parameter.
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