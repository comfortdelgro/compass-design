import type {
  createStitches,
  CSS,
  VariantProps as StitchesVariantProps,
} from '@stitches/react'
import type {Primitive} from './types'

export type StitchesTheme = NonNullable<
  NonNullable<Parameters<typeof createStitches>[0]>['theme']
>

export type VariantProps<
  // eslint-disable-next-line
  Component extends {[key: symbol | string]: any}, // this is fine because we're using a type required by stitches
  V = StitchesVariantProps<Component>,
> = {
  [K in keyof V]: Extract<V[K], Primitive>
}

export interface StyledComponentProps {
  css?: CSS
}
