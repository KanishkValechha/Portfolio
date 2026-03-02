import { PostHogProvider as BasePostHogProvider } from 'posthog-js/react'
import type { ReactNode } from 'react'

const options = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  defaults: '2026-01-30',
} as const

interface PostHogProviderProps {
  children: ReactNode
}

export default function PostHogProvider({ children }: PostHogProviderProps) {
  return (
    <BasePostHogProvider
      apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
      options={options}
    >
      {children}
    </BasePostHogProvider>
  )
}
