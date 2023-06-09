import React, {MouseEvent, ReactNode} from 'react'

// Define the interface for the props expected by the Ripple component
interface Props {
  children?: ReactNode // Child elements of the Ripple component
  isEnabled?: boolean // Flag to enable/disable the ripple effect
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

    // Add the 'ripple' class to the circle element
    circle.classList.add('ripple')

    // Check if there is an existing element with the 'ripple' class within the button
    const ripple = button.getElementsByClassName('ripple')[0]

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
        onMouseDown: createRipple, // Add createRipple function to onMouseDown event
        onTouchStart: createRipple, // Add createRipple function to onTouchStart event
        onFocus: createFocusRipple, // Add createFocusRipple function to onFocus event
        css: {overflow: 'hidden', position: 'relative'}, // Add CSS styles to the child element
      })
    : (children as React.ReactElement)
}

export default Ripple
