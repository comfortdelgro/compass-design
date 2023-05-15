import {useContext} from 'react'
import {PressResponderContext} from '../contexts/PressResponderContext'
import {PressHookProps} from '../types'
import {useSyncRef} from './useSyncRef'

export function usePressResponderContext(
  props: PressHookProps,
): PressHookProps {
  const context = useContext(PressResponderContext)
  if (context) {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const {register, ...contextProps} = context
    props = {...contextProps, ...props} as PressHookProps
    register()
  }
  useSyncRef(context, props.ref)

  return props
}
