import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  inputClassName?: string;
}

const FancyInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className ,inputClassName, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1">
        {label && (
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </label>
        )}

        <div
          className={className}
        >
          {icon}
          <input
            ref={ref}
            className={`${inputClassName} outline-0 focus:outline-0`}
            {...props}
          />
        </div>

        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

FancyInput.displayName = "FancyInput";

export default FancyInput;
