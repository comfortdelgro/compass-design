/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import {useCallback, useLayoutEffect, useState} from 'react'
import {useId} from './useId'

export function useSlotId(depArray: ReadonlyArray<any> = []): string {
  const id = useId()
  const [resolvedId, setResolvedId] = useState(id)
  const updateId = useCallback(() => {
    // @ts-ignore
    setResolvedId(function* () {
      yield id

      yield document.getElementById(id) ? id : undefined
    })
  }, [id, setResolvedId])
  // @ts-ignore
  useLayoutEffect(updateId, [id, updateId, ...depArray])

  return resolvedId
}
