import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  addDays,
  addMonths,
  format,
  getDay,
  getDaysInMonth,
  isSameDay,
  isToday,
  startOfMonth,
  subMonths,
} from "date-fns"
import { cn } from "../lib/utils"
import Button from "../components/PrimaryButton"

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const Calendar = forwardRef(
  ({ className, mode = "single", selected, onSelect, disabled, initialFocus = false, ...props }, ref) => {
    const [currentMonth, setCurrentMonth] = useState(new Date())
    const calendarRef = useRef(null)
    useImperativeHandle(ref, () => calendarRef.current)

    useEffect(() => {
      if (initialFocus && calendarRef.current) {
        calendarRef.current.focus()
      }
    }, [initialFocus])

    const isDateDisabled = (date) => (typeof disabled === "function" ? disabled(date) : false)

    const isDateSelected = (date) => {
      if (!selected) return false
      if (mode === "single") return isSameDay(selected, date)
      if (mode === "multiple") return selected.some((d) => isSameDay(d, date))
      if (mode === "range") {
        const { from, to } = selected || {}
        return (
          (from && isSameDay(from, date)) ||
          (to && isSameDay(to, date)) ||
          (from && to && date > from && date < to)
        )
      }
      return false
    }

    const handleDateSelect = (date) => {
      if (isDateDisabled(date)) return

      if (mode === "single") {
        onSelect?.(date)
      } else if (mode === "multiple") {
        const exists = selected?.some((d) => isSameDay(d, date))
        onSelect?.(exists ? selected.filter((d) => !isSameDay(d, date)) : [...(selected || []), date])
      } else if (mode === "range") {
        const { from, to } = selected || {}
        if (!from || (from && to)) onSelect?.({ from: date, to: null })
        else onSelect?.(date < from ? { from: date, to: from } : { from, to: date })
      }
    }

    const generateDays = () => {
      const start = startOfMonth(currentMonth)
      const total = getDaysInMonth(currentMonth)
      const offset = getDay(start)
      const days = []

      for (let i = 0; i < offset; i++) {
        const date = addDays(start, i - offset)
        days.push({ date, current: false, disabled: isDateDisabled(date) })
      }

      for (let i = 0; i < total; i++) {
        const date = addDays(start, i)
        days.push({ date, current: true, disabled: isDateDisabled(date) })
      }

      while (days.length < 42) {
        const date = addDays(days[days.length - 1].date, 1)
        days.push({ date, current: false, disabled: isDateDisabled(date) })
      }

      return days
    }

    const days = generateDays()

    return (
      <div
        ref={calendarRef}
        className={cn("p-4 select-none bg-white rounded-md shadow-lg", className)} // Added bg-white for the background
        tabIndex={0}
        {...props}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <Button variant="outline" size="icon" onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <h3 className="text-md font-medium">{format(currentMonth, "MMMM yyyy")}</h3>
          <Button variant="outline" size="icon" onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Weekdays */}
        <div className="grid grid-cols-7 gap-1 text-xs text-center text-muted-foreground mb-2">
          {weekdays.map((day) => (
            <div key={day} className="h-8 flex items-center justify-center font-medium">{day}</div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-1">
          {days.map(({ date, current, disabled }, i) => {
            const selected = isDateSelected(date)
            const isTodayDate = isToday(date)
            return (
              <button
                key={i}
                disabled={disabled}
                onClick={() => handleDateSelect(date)}
                className={cn(
                  "h-9 w-9 text-sm flex items-center justify-center rounded-md transition",
                  !current && "text-muted-foreground",
                  disabled && "opacity-50 pointer-events-none",
                  selected && "bg-rose-500 text-white", // Selected date styling
                  !selected && isTodayDate && "border border-rose-500", // Today's date border
                  !selected && !isTodayDate && "hover:bg-rose-200 hover:text-rose-500" // Hover effect
                )}
              >
                {format(date, "d")}
              </button>
            )
          })}
        </div>
      </div>
    )
  }
)

Calendar.displayName = "Calendar"
export default Calendar
