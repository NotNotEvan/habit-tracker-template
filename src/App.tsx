import AppLayout from '@/components/AppLayout'
import { HabitForm } from '@/components/HabitForm'
import { HabitList } from '@/components/HabitList'
import { DateProvider } from '@/contexts/DateContext'
import { HabitProvider } from '@/contexts/HabitContext'

export default function App() {
  return (
    <DateProvider>
      <HabitProvider>
        <AppLayout>
          <HabitForm />
          <HabitList />
        </AppLayout>
      </HabitProvider>
    </DateProvider>
  )
}
