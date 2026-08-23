import { format, eachDayOfInterval, endOfWeek, startOfWeek } from 'date-fns'

import { Button } from './Button'

interface Habit {
  id: string
  name: string
}

export function HabitList() {
  const habits: Habit[] = [{ id: '1', name: 'this is a new habit' }]

  if (habits.length === 0) {
    return <p className='py-12 text-center text-zinc-500!'>No habits yet.</p>
  }

  return (
    <div className='flex flex-col gap-2'>
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </div>
  )
}

interface HabitItemProps {
  habit: Habit
}

function HabitItem({ habit }: HabitItemProps) {
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 })
  })
  return (
    <div className='flex flex-col gap-3 rounded-xl bg-zinc-800 p-4'>
      <div className='mb-3 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <span className='font-medium'>{habit.name}</span>
          <span className='text-sm text-amber-400'>🔥 3</span>
        </div>
        <Button variant='ghost-destructive'>Delete</Button>
      </div>
      <div className='flex gap-2'>
        {visibleDates.map((date) => (
          <Button key={date.toISOString()}>
            <span className='font-medium'>{format(date, 'EEE')}</span>
            <span>{format(date, 'd')}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
