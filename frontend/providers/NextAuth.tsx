'use client'

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

const NextAUthProvider = ({ children }: {children: ReactNode}) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default NextAUthProvider