import type { PropsWithChildren } from 'react'

import { Header } from '@/components/Header'

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className='mx-auto flex max-w-2xl flex-col gap-4 p-4'>
      <Header />

      <main className='flex flex-col gap-4'>{children}</main>
    </div>
  )
}
