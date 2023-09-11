import {keyframes} from './stitches.config'

export const spin = keyframes({
  '0%': {transform: 'rotate(0deg)'},
  '100%': {transform: 'rotate(360deg)'},
})

export const fadeInLeft = keyframes({
  '0%': {transform: 'translate3d(100%, 0, 0)'},
  '100%': {transform: 'rotate(360deg)'},
})

export const fadeInRight = keyframes({
  '0%': {transform: 'translate3d(-100%, 0, 0)'},
  '100%': {transform: 'translate3d(0, 0, 0)'},
})

export const fadeOutLeft = keyframes({
  '0%': {transform: 'translate3d(0, 0, 0)'},
  '100%': {transform: 'translate3d(-100%, 0, 0)'},
})

export const fadeOutRight = keyframes({
  '0%': {transform: 'rotate(0deg)'},
  '100%': {transform: 'translate3d(100%, 0, 0)'},
})

export const fadeInTop = keyframes({
  '0%': {transform: 'translate3d(0, -100%, 0)'},
  '100%': {transform: 'translate3d(0, 0, 0)'},
})

export const fadeOutBottom = keyframes({
  '0%': {transform: 'translate3d(0, 0, 0)'},
  '100%': {transform: 'translate3d(0, -150%, 0)'},
})
