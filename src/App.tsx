import { HabitForm } from '@/components/HabitForm'
import { HabitList } from '@/components/HabitList'
import { Header } from '@/components/Header'
import type { Habit } from '@/types/habit'

export default function App() {
  const habits: Habit[] = []
  return (
    <div className='mx-auto flex max-w-2xl flex-col gap-4 p-4'>
      <Header />
      <HabitForm />
      <HabitList habits={habits} />
    </div>
  )
}
