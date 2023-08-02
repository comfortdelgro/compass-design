import React from 'react'

export const pickChildren = <T = React.ReactNode>(
  children: React.ReactNode | undefined,
  targetType: React.ElementType,
): {
  children: T[]
  rest: React.ReactNode[]
} => {
  const matched: React.ReactNode[] = []
  const rest: React.ReactNode[] = []

  React.Children.forEach(children, (item) => {
    if (!React.isValidElement(item)) {
      rest.push(item)
      return
    }

    if (item.type === targetType) {
      matched.push(item)
    } else {
      rest.push(item)
    }
  })

  return {
    children: matched as T[],
    rest,
  }
}
