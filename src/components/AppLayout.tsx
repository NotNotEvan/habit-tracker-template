import type { PropsWithChildren } from 'react'

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className='mx-auto flex max-w-2xl flex-col gap-4 p-4'>{children}</div>
  )
}
