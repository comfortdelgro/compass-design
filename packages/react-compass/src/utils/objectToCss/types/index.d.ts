import type * as Native from './css'

interface CSSProperties
  extends Native.Properties,
    Native.PropertiesFallback,
    Native.PropertiesHyphen,
    Native.PropertiesHyphenFallback {}

interface Values extends Native.Globals, number, string, undefined {}

type ValueByPropertyName<PropertyName> =
  PropertyName extends keyof CSSProperties ? CSSProperties[PropertyName] : never

export type CSS =
  // known property styles
  {
    [K in keyof CSSProperties]?: ValueByPropertyName<K> | Values
  } & {
    // unknown css declaration styles
    [K: string]: Values | CSS
  }
