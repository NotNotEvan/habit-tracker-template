import type { Habit } from '@/types/habit'

const STORAGE_KEY = 'habit-tracker:habits:v1'

type StoredHabit = Omit<Habit, 'completions'> & {
  completions: string[]
}

export function saveHabits(habits: Habit[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(habits))
}

export function loadHabits(): Habit[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)

    if (saved === null) return []

    const storedHabits = JSON.parse(saved) as StoredHabit[]

    return storedHabits.map((habit) => ({
      ...habit,
      completions: habit.completions.map((date) => new Date(date))
    }))
  } catch (error) {
    console.error('Could not load saved habits:', error)
    return []
  }
}
