import {createContext, useContext, useRef} from 'react'
import {SSRContextValue} from '../types'

const defaultContext: SSRContextValue = {
  prefix: String(Math.round(Math.random() * 10000000000)),
  current: 0,
  isSSR: false,
}

export function useCounter(isDisabled = false) {
  const ctx = useContext(SSRContext)
  const ref = useRef<number | null>(null)
  if (ref.current === null && !isDisabled) {
    ref.current = ++ctx.current
  }

  return ref.current
}

const canUseDOM = Boolean(
  typeof window !== 'undefined' && window.document['createElement'],
)

const SSRContext = createContext<SSRContextValue>(defaultContext)

export function useSSRSafeId(defaultId?: unknown): string {
  const ctx = useContext(SSRContext)

  if (ctx === defaultContext && !canUseDOM) {
    console.warn(
      'When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.',
    )
  }

  const counter = useCounter(!!defaultId)
  return (defaultId as string) ?? `compass-design${ctx.prefix}-${counter}`
}
