import type {Collection, Node} from '@react-types/shared'
import {Key} from 'react'

interface Move {
  from: number
  to: number
}

function move<T = unknown>(items: T[], indices: number[], toIndex: number) {
  // Shift the target down by the number of items being moved from before the target
  toIndex -= indices.filter((index) => index < toIndex).length

  const moves: Move[] = indices.map((from) => ({
    from,
    to: toIndex++,
  }))
  // Shift later from indices down if they have a larger index
  for (let i = 0; i < moves.length; i++) {
    const a = moves[i]!.from
    for (let j = i; j < moves.length; j++) {
      const b = moves[j]!.from

      if (b > a) {
        moves[j]!.from--
      }
    }
  }

  // Interleave the moves so they can be applied one by one rather than all at once
  for (let i = 0; i < moves.length; i++) {
    const a = moves[i]
    for (let j = moves.length - 1; j > i; j--) {
      const b = moves[j]

      if (b!.from < a!.to) {
        a!.to++
      } else {
        b!.from++
      }
    }
  }

  const copy = items.slice()
  for (const move of moves) {
    const [item] = copy.splice(move.from, 1)
    copy.splice(move.to, 0, item!)
  }

  return copy
}

export function moveBefore(
  collection: Collection<Node<object>>,
  key: Key,
  keys: Iterable<Key>,
): Key[] {
  const [...items] = collection.getKeys()
  const toIndex = items.findIndex((item) => item === key)
  if (toIndex === -1) {
    return items
  }

  // Find indices of keys to move. Sort them so that the order in the list is retained.
  const keyArray = Array.isArray(keys) ? keys : [...keys]
  const indices = keyArray
    .map((key) => items.findIndex((item) => item === key))
    .sort()
  return move(items, indices, toIndex)
}

export function moveAfter(
  collection: Collection<Node<object>>,
  key: Key,
  keys: Iterable<Key>,
): Key[] {
  const [...items] = collection.getKeys()
  const toIndex = items.findIndex((item) => item === key)
  if (toIndex === -1) {
    return items
  }

  const keyArray = Array.isArray(keys) ? keys : [...keys]
  const indices = keyArray
    .map((key) => items.findIndex((item) => item === key))
    .sort()
  return move(items, indices, toIndex + 1)
}
