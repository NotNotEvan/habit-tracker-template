import { HabitForm } from '@/components/HabitForm'
import { HabitList } from '@/components/HabitList'
import { Header } from '@/components/Header'
import { DateProvider } from '@/contexts/DateContext'

import { HabitProvider } from './contexts/HabitContext'

export default function App() {
  return (
    <DateProvider>
      <HabitProvider>
        <div className='mx-auto flex max-w-2xl flex-col gap-4 p-4'>
          <Header />
          <HabitForm />
          <HabitList />
        </div>
      </HabitProvider>
    </DateProvider>
  )
}
