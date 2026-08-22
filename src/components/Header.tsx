import { Button } from "./Button";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Simplified Habit Tracker</h1>
        <span className="text-zinc-400 text-sm">1/1 done today</span>
      </div>
      <div className="flex flex-col gap-1">
        <p>Apr 6 - Apr 12</p>
        <div className="flex items-baseline gap-1">
          <Button>Prev</Button>
          <Button>Next</Button>
        </div>
      </div>
    </header>
  );
}
