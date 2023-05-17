import {useLayoutEffect} from 'react'

export function useSyncRef(context: any, ref: any) {
  useLayoutEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (context?.ref && ref) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      context.ref.current = ref.current
      return () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        context.ref.current = null
      }
    }
  }, [context, ref])
}
