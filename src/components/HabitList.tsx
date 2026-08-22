export function HabitList() {
  const habits = ['this is a new habit', 'and another']

  if (habits.length === 0) {
    return <p className='py-12 text-center text-zinc-500!'>No habits yet.</p>
  }

  return (
    <div className='flex flex-col gap-2'>
      {habits.map((habit, index) => (
        <p key={index}>{habit}</p>
      ))}
    </div>
  )
}
