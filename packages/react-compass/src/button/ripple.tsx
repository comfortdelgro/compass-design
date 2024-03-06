import React, {MouseEvent, ReactNode} from 'react'
import styles from './styles/button.module.css'

// Define the interface for the props expected by the Ripple component
interface Props {
  children?: ReactNode // Child elements of the Ripple component
  isEnabled?: boolean // Flag to enable/disable the ripple effect
  style?: React.CSSProperties // Style prop for the Ripple component
}

interface ButtonFocusEvent extends React.FocusEvent<HTMLButtonElement> {
  clientX: number
  clientY: number
}

// Define the Ripple component as a functional component
const Ripple: React.FC<Props> = ({children, isEnabled = false}: Props) => {
  // Function to create the ripple effect on button click or touch
  const createRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget // The button that was clicked or touched

    // Create a span element for the ripple effect
    const circle = document.createElement('span')

    // Calculate the diameter and radius of the circle based on button dimensions
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    // Set the width and height of the circle element
    circle.style.width = circle.style.height = `${diameter}px`

    // Calculate and set the left and top positions of the circle element
    circle.style.left = `${
      event.clientX - button.getBoundingClientRect().left - radius
    }px`
    circle.style.top = `${
      event.clientY - button.getBoundingClientRect().top - radius
    }px`

    // Add the 'ripple' styles to the circle element
    circle.classList.add(styles.ripple)
    circle.style.position = 'absolute'
    circle.style.borderRadius = '50%'
    circle.style.transform = 'scale(0)'
    circle.style.backgroundColor = 'rgba(255, 255, 255, 0.7)'

    // Check if there is an existing element with the 'ripple' class within the button
    const ripple = button.getElementsByClassName(styles.ripple)[0]

    // Remove the existing ripple element, if any
    if (ripple) {
      ripple.remove()
    }

    // Append the circle element as a child to the button, creating the ripple effect
    button.appendChild(circle)
  }

  // Function to create the focus ripple effect on button focus
  const createFocusRipple = (event: ButtonFocusEvent) => {
    // do nothing for now
    return event
  }

  // Return the modified child element or t he original child element based on the isEnabled prop
  return isEnabled
    ? React.cloneElement(children as React.ReactElement, {
        onMouseDown: createRipple,
        onTouchStart: createRipple,
        onFocus: createFocusRipple,
        style: Object.assign(
          {overflow: 'hidden', position: 'relative'}, // Additional styles for the Ripple component
          (children as React.ReactElement).props.style, // Preserve child's existing styles
        ),
      })
    : (children as React.ReactElement)
}

export default Ripple
