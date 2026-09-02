import { eachDayOfInterval, endOfWeek, startOfWeek } from 'date-fns'
import { createContext, type PropsWithChildren } from 'react'

interface DateContextType {
  today: Date
  visibleDates: Date[]
  selectedWeekStart: Date
  selectedWeekEnd: Date
}

const DateContext = createContext<DateContextType | null>(null)

function DateProvider({ children }: PropsWithChildren) {
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 })
  })

  const contextValue: DateContextType = {
    today: new Date(),
    visibleDates,
    selectedWeekStart: visibleDates[0],
    selectedWeekEnd: visibleDates[visibleDates.length - 1]
  }

  return <DateContext value={contextValue}>{children}</DateContext>
}

export { DateContext, DateProvider }
