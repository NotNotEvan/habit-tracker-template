import {
  eachDayOfInterval,
  endOfWeek,
  startOfWeek,
  addWeeks,
  isSameWeek
} from 'date-fns'
import { createContext, useState, type PropsWithChildren } from 'react'

interface DateContextType {
  today: Date
  visibleDates: Date[]
  selectedWeekStart: Date
  selectedWeekEnd: Date
  showPreviousWeek: () => void
  showNextWeek: () => void
  isCurrentWeek: boolean
}

const DateContext = createContext<DateContextType | null>(null)

function DateProvider({ children }: PropsWithChildren) {
  const [today] = useState(new Date())
  const [selectedWeekStart, setSelectedWeekStart] = useState(() =>
    startOfWeek(today, { weekStartsOn: 1 })
  )

  const selectedWeekEnd = endOfWeek(selectedWeekStart, { weekStartsOn: 1 })

  const visibleDates = eachDayOfInterval({
    start: selectedWeekStart,
    end: selectedWeekEnd
  })

  function showPreviousWeek() {
    setSelectedWeekStart((current) => addWeeks(current, -1))
  }

  function showNextWeek() {
    setSelectedWeekStart((current) => addWeeks(current, 1))
  }

  const isCurrentWeek = isSameWeek(selectedWeekStart, today, {
    weekStartsOn: 1
  })

  const contextValue: DateContextType = {
    today,
    visibleDates,
    selectedWeekStart: visibleDates[0],
    selectedWeekEnd: visibleDates[visibleDates.length - 1],
    showPreviousWeek,
    showNextWeek,
    isCurrentWeek
  }

  return <DateContext value={contextValue}>{children}</DateContext>
}

export { DateContext, DateProvider }
