import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Variant = 'primary' | 'secondary' | 'ghost-destructive'
interface Props extends ComponentProps<'button'> {
  variant?: Variant
}

export function Button({ variant = 'primary', className, ...props }: Props) {
  return (
    <button
      className={twMerge(
        `rounded px-2 py-1 transition-colors disabled:cursor-not-allowed disabled:opacity-30`,
        getVariantClassName(variant),
        className
      )}
      {...props}
    />
  )
}

function getVariantClassName(variant: Variant) {
  switch (variant) {
    case 'primary':
      return 'bg-indigo-600 hover:bg-indigo-500'
    case 'secondary':
      return 'bg-zinc-700 hover:bg-zinc-600 text-zinc-400'
    case 'ghost-destructive':
      return 'hover:bg-red-800 text-red-800 hover:text-red-200'
    default:
      throw new Error(`Unknown variant: ${variant satisfies never}`)
  }
}
