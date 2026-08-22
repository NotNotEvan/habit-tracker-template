export function HabitList() {
  const habits = ["this is a new habit", "and another"];

  if (habits.length === 0) {
    return <p className="text-center text-zinc-500! py-12">No habits yet.</p>;
  }

  return (
    <div className="flex flex-col gap-2">
      {habits.map((habit, index) => (
        <p key={index}>{habit}</p>
      ))}
    </div>
  );
}
