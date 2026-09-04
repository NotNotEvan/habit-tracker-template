import { format, isSameDay, isAfter } from 'date-fns'

import { Button } from '@/components/Button'
import { useDate } from '@/hooks/useDate'
import { useHabit } from '@/hooks/useHabit'
import type { Habit } from '@/types/habit'

export function HabitList() {
  const { habits, deleteHabit, toggleHabit } = useHabit()

  if (habits.length === 0) {
    return <p className='py-12 text-center text-zinc-500!'>No habits yet.</p>
  }

  return (
    <div className='flex flex-col gap-2'>
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onDelete={deleteHabit}
          onToggle={toggleHabit}
        />
      ))}
    </div>
  )
}

interface HabitItemProps {
  habit: Habit
  onDelete: (id: string) => void
  onToggle: (id: string, date: Date) => void
}

function HabitItem({ habit, onDelete, onToggle }: HabitItemProps) {
  const { visibleDates, today } = useDate()
  const { getHabitStreak } = useHabit()

  const streak = getHabitStreak(habit.completions)

  function handleDelete() {
    onDelete(habit.id)
  }

  return (
    <div className='flex flex-col gap-3 rounded-xl bg-zinc-800 p-4'>
      <div className='mb-3 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <span className='font-medium'>{habit.name}</span>
          <span className='text-sm text-amber-400'>🔥 {streak}</span>
        </div>
        <Button
          variant='ghost-destructive'
          className='text-sm'
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
      <div className='flex gap-2'>
        {visibleDates.map((date) => (
          <Button
            disabled={isAfter(date, today)}
            key={date.toISOString()}
            className='flex flex-1 flex-col items-center gap-0.5 rounded-lg text-sm'
            variant={
              habit.completions.some((d) => isSameDay(date, d))
                ? 'primary'
                : 'secondary'
            }
            onClick={() => onToggle(habit.id, date)}
          >
            <span className='font-medium'>{format(date, 'EEE')}</span>
            <span>{format(date, 'd')}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
