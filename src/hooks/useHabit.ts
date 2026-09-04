import { use } from 'react'

import { HabitContext } from '@/contexts/HabitContext'

export function useHabit() {
  const context = use(HabitContext)
  if (!context) {
    throw new Error('useHabit must be used within a HabitProvider')
  }
  return context
}
