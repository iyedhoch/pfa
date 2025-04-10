import React from "react"
import { Loader2 } from "lucide-react"
import { cn } from "../lib/utils"

const VARIANTS = {
  soft: "bg-rose-50 text-rose-600 hover:bg-rose-100",
  default: "bg-rose-500 text-white hover:bg-rose-600",
  outline: "border border-gray-300 bg-white hover:bg-gray-100",
  secondary: "bg-rose-100 text-rose-900 hover:bg-rose-200",
  ghost: "hover:bg-gray-100",
  link: "text-rose-500 underline hover:no-underline",
  destructive: "bg-red-500 text-white hover:bg-red-600",
}

const SIZES = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3 text-sm",
  lg: "h-11 px-6 text-base",
  icon: "h-10 w-10 p-0",
}

const Button = React.forwardRef(
  ({ 
    children, 
    variant = "default", 
    size = "default", 
    isLoading = false, 
    leftIcon, 
    rightIcon, 
    className, 
    disabled, 
    ...props 
  }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-rose-400 disabled:opacity-50 disabled:pointer-events-none",
          VARIANTS[variant],
          SIZES[size],
          className
        )}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          leftIcon && <span className="mr-2">{leftIcon}</span>
        )}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    )
  }
)

Button.displayName = "Button"
export default Button
