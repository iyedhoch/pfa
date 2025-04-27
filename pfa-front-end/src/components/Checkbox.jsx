"use client"

import * as React from "react"
import { Check } from "lucide-react"

import { cn } from "../lib/utils"

const Checkbox = React.forwardRef(({ className, checked, defaultChecked, onCheckedChange, ...props }, ref) => {
  const [isChecked, setIsChecked] = React.useState(defaultChecked || false)

  React.useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked)
    }
  }, [checked])

  const handleChange = (event) => {
    const newChecked = event.target.checked
    if (checked === undefined) {
      setIsChecked(newChecked)
    }
    onCheckedChange?.(newChecked)
  }

  return (
    <div className="flex items-center">
      <button
        ref={ref}
        type="button"
        role="checkbox"
        aria-checked={isChecked}
        data-state={isChecked ? "checked" : "unchecked"}
        className={cn(
          "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          isChecked ? "bg-rose-500 text-primary-foreground" : "bg-background",
          className,
        )}
        onClick={() => {
          const newChecked = !isChecked
          if (checked === undefined) {
            setIsChecked(newChecked)
          }
          onCheckedChange?.(newChecked)
        }}
        {...props}
      >
        {isChecked && <Check className="h-3 w-3 text-white" />}
      </button>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
      />
    </div>
  )
})
Checkbox.displayName = "Checkbox"

export { Checkbox }
