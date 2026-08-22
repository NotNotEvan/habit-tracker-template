import { Header } from "./components/Header"
import { HabitForm } from "./components/HabitForm"
import { HabitList } from "./components/HabitList"

export default function App() {
  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col">
      <Header />
      <HabitForm />
      <HabitList />
    </div>
  )
}
