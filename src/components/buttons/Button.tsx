import * as React from 'react';
import { IconType } from 'react-icons';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@lib/clsxm';

enum ButtonVariant {
  'primary',
  'success',
  'danger',
}

enum SizeVariant {
  'small',
  'medium',
  'large',
}

type ButtonProps = {
  isLoading?: boolean;
  isDarkBg?: boolean;
  isIcon?: boolean;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
  size?: keyof typeof SizeVariant;
  variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithRef<'button'>;

// eslint-disable-next-line react/display-name
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'primary',
      size = 'medium',
      isIcon = false,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          'inline-flex items-center text-base font-medium',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-main',
          'shadow-sm',
          'transition-colors duration-75',

          //#region  //*=========== Size Variant ===========
          [
            size === 'small' && ['min-h-[32px] py-1 px-[18px]'],
            size === 'medium' && ['min-h-[40px] py-2 px-[22px]'],
            size === 'large' && ['min-h-[48px] py-3 px-[26px]'],
          ],
          //#endregion  //*======== Size Variant ===========

          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'rounded-[4px] bg-primary-main text-neutral-100',
              'focus:border-2 focus:border-primary-border',
              'hover:bg-primary-hover',
              'active:bg-primary-pressed',
              'disabled:bg-primary-main disabled:hover:bg-primary-main',
            ],
            variant === 'success' && [
              'rounded-[4px] bg-success-main text-neutral-100',
              'focus:border-2 focus:border-success-border',
              'hover:bg-success-hover',
              'active:bg-success-pressed',
              'disabled:bg-success-main disabled:hover:bg-success-main',
            ],
            variant === 'danger' && [
              'bg-danger-main text-neutral-100',
              'rounded-[4px] focus:border-2 focus:border-danger-border',
              'hover:bg-danger-hover',
              'active:bg-danger-pressed',
              'disabled:bg-danger-main disabled:hover:bg-danger-main',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          isIcon && [
            size === 'small' && '!p-1.5',
            size === 'medium' && '!p-2',
            size === 'large' && '!p-3',
          ],
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              {
                'text-neutral-600': variant,
              }
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {LeftIcon && (
          <div className='mr-2'>
            <LeftIcon
              className={clsxm('text-xl text-neutral-100', leftIconClassName)}
            />
          </div>
        )}
        {children}
        {RightIcon && (
          <div className='ml-2'>
            <RightIcon
              className={clsxm('text-xl text-neutral-100', rightIconClassName)}
            />
          </div>
        )}
      </button>
    );
  }
);

export default Button;
