import { format } from 'date-fns'

import { Button } from '@/components/Button'
import { useDate } from '@/hooks/useDate'

export function Header() {
  const { currentWeekStart, currentWeekEnd } = useDate()
  return (
    <header className='flex items-center justify-between'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-3xl font-bold'>Simplified Habit Tracker</h1>
        <span className='text-sm text-zinc-400'>1/1 done today</span>
      </div>
      <div className='flex flex-col gap-1'>
        <p>
          {format(currentWeekStart, 'LLL do')} -{' '}
          {format(currentWeekEnd, 'LLL do')}
        </p>
        <div className='flex gap-1'>
          <Button>Prev</Button>
          <Button>Next</Button>
        </div>
      </div>
    </header>
  )
}
