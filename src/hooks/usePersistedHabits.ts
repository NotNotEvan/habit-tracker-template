import { useEffect, useState } from 'react'

import { loadHabits, saveHabits } from '@/lib/habitStorage'
import type { Habit } from '@/types/habit'

export function usePersistedHabits() {
  const [habits, setHabits] = useState<Habit[]>(loadHabits)

  useEffect(() => {
    try {
      saveHabits(habits)
    } catch (error) {
      console.error('Could not save habits:', error)
    }
  }, [habits])

  return { habits, setHabits }
}
