import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Button({ children }: Props) {
  return (
    <button className='rounded bg-indigo-600 px-2 py-1 transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-30'>
      {children}
    </button>
  )
}
