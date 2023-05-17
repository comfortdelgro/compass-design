/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import {useLayoutEffect} from 'react'

// @ts-ignore
export function useSyncRef(context: any, ref: any) {
  // @ts-ignore
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
