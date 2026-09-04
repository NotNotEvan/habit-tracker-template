import { useState, type SubmitEvent } from 'react'

import { Button } from '@/components/Button'
import { useHabit } from '@/hooks/useHabit'

export function HabitForm() {
  const { addHabit } = useHabit()
  const [name, setName] = useState('')

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault()

    if (name.trim() === '') return
    addHabit(name)
    setName('')
  }

  return (
    <form className='flex gap-2' onSubmit={handleSubmit}>
      <input
        autoFocus
        type='text'
        placeholder='New habit...'
        className='flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button
        disabled={name.trim() === ''}
        className='rounded-lg px-4 py-2 font-medium'
        type='submit'
      >
        Add Habit
      </Button>
    </form>
  )
}
