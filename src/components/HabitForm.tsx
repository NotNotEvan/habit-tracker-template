import { Button } from "./Button";

export function HabitForm() {
  return (
    <form className="flex gap-2">
      <input type="text" placeholder="New habit..." className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"/>
      <Button>Submit</Button>
    </form>
  )
}
