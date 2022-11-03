import React from 'react'

/**
 * Checks if `T` is the only child.
 */
export const isOnlyChild = <T>(children: React.ReactNode, type: T) =>
  React.Children.count(children) === 1 &&
  (React.Children.toArray(children)[0] as React.ReactElement<unknown>).type ===
    type
