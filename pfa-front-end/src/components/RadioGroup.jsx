"use client"

import * as React from "react"

import { cn } from "../lib/utils"

const RadioGroup = React.forwardRef(({ className, value, onValueChange, defaultValue, ...props }, ref) => {
  const [selectedValue, setSelectedValue] = React.useState(defaultValue || "")

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])

  const handleValueChange = (newValue) => {
    if (value === undefined) {
      setSelectedValue(newValue)
    }
    onValueChange?.(newValue)
  }

  return (
    <div ref={ref} className={cn("grid gap-2", className)} role="radiogroup" {...props}>
      {React.Children.map(props.children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            selectedValue,
            onValueChange: handleValueChange,
          })
        }
        return child
      })}
    </div>
  )
})
RadioGroup.displayName = "RadioGroup"

const RadioGroupItem = React.forwardRef(({ className, id, value, selectedValue, onValueChange, ...props }, ref) => {
  const isSelected = selectedValue === value

  return (
    <div className="flex items-center space-x-2">
      <button
        ref={ref}
        id={id}
        type="button"
        role="radio"
        aria-checked={isSelected}
        data-state={isSelected ? "checked" : "unchecked"}
        className={cn(
          "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          isSelected ? "bg-rose-500 text-primary-foreground" : "bg-background",
          className,
        )}
        onClick={() => onValueChange?.(value)}
        {...props}
      >
        {isSelected && (
          <span className="flex h-full w-full items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-white" />
          </span>
        )}
      </button>
      <input
        type="radio"
        value={value}
        checked={isSelected}
        onChange={() => onValueChange?.(value)}
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
      />
    </div>
  )
})
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }
