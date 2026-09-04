import { isSameDay } from 'date-fns'
import { createContext, useState, type PropsWithChildren } from 'react'

import { useDate } from '@/hooks/useDate'
import type { Habit } from '@/types/habit'

interface HabitContextType {
  habits: Habit[]
  addHabit: (habitName: string) => void
  deleteHabit: (habitId: string) => void
  toggleHabit: (habitId: string, date: Date) => void
  getDailyStats: () => {
    totalHabitsCount: number
    habitsCompletedTodayCount: number
  }
}

const HabitContext = createContext<HabitContextType | null>(null)

function HabitProvider({ children }: PropsWithChildren) {
  const { today } = useDate()
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

  function getDailyStats(): {
    totalHabitsCount: number
    habitsCompletedTodayCount: number
  } {
    const todayCompletions = habits.reduce((total, habit) => {
      return (
        total +
        habit.completions.filter((completionDate) =>
          isSameDay(completionDate, today)
        ).length
      )
    }, 0)

    return {
      totalHabitsCount: habits.length,
      habitsCompletedTodayCount: todayCompletions
    }
  }

  const contextValue: HabitContextType = {
    habits,
    addHabit,
    deleteHabit,
    toggleHabit,
    getDailyStats
  }

  return <HabitContext value={contextValue}>{children}</HabitContext>
}

export { HabitContext, HabitProvider }
