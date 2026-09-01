import { isSameDay } from 'date-fns'
import { useEffect, useState } from 'react'

import { HabitForm } from '@/components/HabitForm'
import { HabitList } from '@/components/HabitList'
import { Header } from '@/components/Header'
import { DateProvider } from '@/contexts/DateContext'
import type { Habit } from '@/types/habit'

export default function App() {
  const [habits, setHabits] = useState<Habit[]>([])

  function addHabit(name: string) {
    setHabits((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name, completions: [] }
    ])
  }

  function deleteHabit(id: string) {
    setHabits((prev) => prev.filter((habit) => habit.id !== id))
  }

  function toggleHabit(id: string, date: Date) {
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id !== id) return habit

        const isCompleted = habit.completions.some((completionDate) =>
          isSameDay(completionDate, date)
        )

        return {
          ...habit,
          completions: isCompleted
            ? habit.completions.filter(
                (completionDate) => !isSameDay(completionDate, date)
              )
            : [...habit.completions, date]
        }
      })
    )
  }

  // TODO: Remove
  useEffect(() => {
    console.log(habits)
  }, [habits])

  return (
    <DateProvider>
      <div className='mx-auto flex max-w-2xl flex-col gap-4 p-4'>
        <Header />
        <HabitForm onSubmit={addHabit} />
        <HabitList
          habits={habits}
          onDelete={deleteHabit}
          onToggle={toggleHabit}
        />
      </div>
    </DateProvider>
  )
}
