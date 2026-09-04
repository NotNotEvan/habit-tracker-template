import { format } from 'date-fns'

import { Button } from '@/components/Button'
import { useDate } from '@/hooks/useDate'
import { useHabit } from '@/hooks/useHabit'

export function Header() {
  const {
    selectedWeekStart,
    selectedWeekEnd,
    showNextWeek,
    showPreviousWeek,
    isCurrentWeek
  } = useDate()
  const { getDailyStats } = useHabit()
  const { totalHabitsCount, habitsCompletedTodayCount } = getDailyStats()

  return (
    <header className='flex items-center justify-between'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-3xl font-bold'>Habit Tracker</h1>
        <span className='text-sm text-zinc-400'>
          {habitsCompletedTodayCount} / {totalHabitsCount} habits
        </span>
      </div>
      <div className='flex flex-col gap-1'>
        <p>
          {format(selectedWeekStart, 'LLL do')} -{' '}
          {format(selectedWeekEnd, 'LLL do')}
        </p>
        <div className='flex gap-1'>
          <Button className='flex-1' onClick={showPreviousWeek}>
            Prev
          </Button>
          <Button
            className='flex-1'
            onClick={showNextWeek}
            disabled={isCurrentWeek}
          >
            Next
          </Button>
        </div>
      </div>
    </header>
  )
}
