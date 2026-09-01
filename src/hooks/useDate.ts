import { use } from 'react'

import { DateContext } from '@/contexts/DateContext'

export function useDate() {
  const context = use(DateContext)
  if (!context) {
    throw new Error('useDate must be used within a DateProvider')
  }
  return context
}
