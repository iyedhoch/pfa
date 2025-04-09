
import * as React from "react"
import { cva } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button as ShadcnButton } from "@/components/ui/button"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-rose-500 text-white hover:bg-rose-600",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-rose-100 text-rose-900 hover:bg-rose-200",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-rose-500 underline-offset-4 hover:underline",
        destructive: "bg-red-500 text-white hover:bg-red-600",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      isLoading,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <ShadcnButton
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </ShadcnButton>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }


















/*import { Button } from "@/components/custom-button"

// Basic button
<Button>Click me</Button>

// With variants
<Button variant="secondary">Secondary</Button>

// With loading state
<Button isLoading>Processing</Button>

// With icons
<Button leftIcon={<Mail />}>Email</Button>
<Button rightIcon={<ArrowRight />}>Next</Button>*/