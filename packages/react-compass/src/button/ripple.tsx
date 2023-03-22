import React, {MouseEvent, ReactNode} from 'react'

interface Props {
  children: ReactNode
}

const Ripple: React.FC<Props> = ({children}: Props) => {
  const createRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget

    const circle = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${
      event.clientX - button.getBoundingClientRect().left - radius
    }px`
    circle.style.top = `${
      event.clientY - button.getBoundingClientRect().top - radius
    }px`
    circle.classList.add('ripple')

    const ripple = button.getElementsByClassName('ripple')[0]

    if (ripple) {
      ripple.remove()
    }

    button.appendChild(circle)
  }

  return React.cloneElement(children as React.ReactElement, {
    onClick: createRipple,
    style: {overflow: 'hidden', position: 'relative'},
  })
}

export default Ripple
