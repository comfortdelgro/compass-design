import {MutableRefObject, RefObject} from 'react'
import {useLayoutEffect} from '../useLayoutEffect'

interface ContextValue<T> {
  ref?: MutableRefObject<T>
}

export function useSyncRef<T>(context: ContextValue<T>, ref: RefObject<T>) {
  useLayoutEffect(() => {
    if (context.ref?.current) {
      context.ref.current = ref.current as T
    }
    return () => {
      if (context.ref?.current) {
        context.ref.current = null as T
      }
    }
  }, [context, ref])
}
