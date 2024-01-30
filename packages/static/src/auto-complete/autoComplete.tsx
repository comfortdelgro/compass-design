import React, {useRef} from 'react'
import Popover from '../popover'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/autoComplete.module.css'

// Define the props interface
interface Props {
  children?: React.ReactNode
  options?: string[]
  onSelect?: (selectedValue: string) => unknown
  onSearch?: (value: string) => unknown
  searchedValue?: string
  notFoundContent?: string
  debounce?: number
  css?: unknown
  onLoadMore?: () => unknown // Add the onLoadMore prop for loading more data
  isLoadingMore?: boolean // Add the isLoadingMore prop for loading more data
}

// Define the complete prop type for AutoComplete
export type AutoCompleteProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

// AutoComplete component
const AutoComplete = React.forwardRef<HTMLDivElement, AutoCompleteProps>(
  (props, ref) => {
    // Destructure the props
    const {
      children,
      options,
      onSearch,
      onSelect,
      searchedValue,
      debounce,
      notFoundContent = 'No Results Found',
      css = {},
      onLoadMore,
      isLoadingMore,
      className,
      ...htmlProps
    } = props

    // States and refs
    const [isOpenPopover, setIsOpenPopover] = React.useState(false)
    const [timerId, setTimerId] = React.useState<NodeJS.Timeout | null>(null)
    const [selectedOption, setSelectedOption] = React.useState<string | null>(
      null,
    )

    const [popoverWidth, setPopoverWidth] = React.useState<number | null>(null)
    const containerRef = useDOMRef<HTMLDivElement>(ref)
    const latestSearchedValueRef = React.useRef<unknown>(null)

    // Clone children and add ref to the triggering element
    const triggerElementRef = React.useRef<HTMLDivElement>(null)
    const triggeringElement =
      triggerElementRef.current?.querySelector('input') ??
      triggerElementRef.current

    const onFocusHandler = () => {
      if (!searchedValue || !onSearch) return
      onSearch(searchedValue)
    }
    const clonedChildren = React.Children.map(children, (child) => {
      return React.cloneElement(child as React.ReactElement, {
        ref: triggerElementRef,
        //tabIndex: -1, // Allow the triggering element to be focused programmatically
        onFocus: () => onFocusHandler(),
        onKeyDown: (event: React.KeyboardEvent) => {
          handleKeyDownOnInput(event)
        },
      })
    })

    // Function to handle option selection
    const handleSelectOption = (option: string) => {
      setSelectedOption(option)
      // Trigger the onSelect callback if provided
      onSelect && onSelect(option)
      setIsOpenPopover(false) // Close the popover after selection
    }

    // Function to handle scrolling for loading more data
    const popoverContentRef = useRef<HTMLDivElement>(null)
    const handleScroll = () => {
      const popoverContentElement = popoverContentRef.current
      if (
        popoverContentElement &&
        popoverContentElement.scrollTop === popoverContentElement.scrollHeight
      ) {
        // User has reached the bottom of the popover content, trigger onLoadMore
        if (onLoadMore && !isLoadingMore) {
          onLoadMore()
        }
      }
    }

    // Simulate the scroll behavior of native select element
    const ensureOptionInView = (
      popoverContentElement: HTMLElement,
      option: HTMLElement,
    ) => {
      const optionTop = option.offsetTop
      const optionBottom = optionTop + option.clientHeight
      const popoverTop = popoverContentElement.scrollTop
      const popoverBottom = popoverTop + popoverContentElement.clientHeight

      if (optionTop < popoverTop) {
        // Option is above the visible area, scroll up to show it
        popoverContentElement.scrollTop = optionTop
      } else if (optionBottom > popoverBottom) {
        // Option is below the visible area, scroll down to show it
        popoverContentElement.scrollTop =
          optionBottom -
          popoverContentElement.clientHeight +
          option.clientHeight
      }
    }

    // Function to handle key down events
    const handleKeyDownOnInput = (event: React.KeyboardEvent) => {
      const popoverContentElement = popoverContentRef.current

      if (popoverContentElement && triggeringElement) {
        const optionArray = Array.from<HTMLElement>(
          document?.querySelectorAll('[role="option"]') ?? [],
        )
        const firstOption = optionArray[0] as HTMLElement
        const lastOption = optionArray[optionArray.length - 1] as HTMLElement
        const hoveredOption = popoverContentElement.querySelector(
          `.${styles.hover}`,
        ) as HTMLElement

        switch (event.key) {
          case 'ArrowUp':
            event.preventDefault()
            // If the first option is hovered, move the focus to the last option
            if (firstOption.classList.contains(styles.hover)) {
              firstOption.classList.remove(styles.hover)
              lastOption.classList.add(styles.hover)
              ensureOptionInView(popoverContentElement, lastOption)
            } else {
              // Move the focus to the previous option
              const index = optionArray.findIndex((option) =>
                option.classList.contains(styles.hover),
              )
              optionArray[index]?.classList.remove(styles.hover)
              optionArray[index - 1]?.classList.add(styles.hover)
              ensureOptionInView(
                popoverContentElement,
                optionArray[index - 1] as HTMLElement,
              )
            }

            break

          case 'ArrowDown':
            event.preventDefault()
            if (lastOption.classList.contains(styles.hover)) {
              if (onLoadMore && !isLoadingMore) {
                onLoadMore()
              } else {
                lastOption.classList.remove(styles.hover)
                firstOption.classList.add(styles.hover)
                ensureOptionInView(popoverContentElement, firstOption)
              }
            } else {
              const index = optionArray.findIndex((option) =>
                option.classList.contains(styles.hover),
              )
              optionArray[index]?.classList.remove(styles.hover)
              optionArray[index + 1]?.classList.add(styles.hover)
              ensureOptionInView(
                popoverContentElement,
                optionArray[index + 1] as HTMLElement,
              )
            }

            break

          case 'Enter':
            event.preventDefault()
            if (hoveredOption) {
              handleSelectOption(hoveredOption.dataset['value'] ?? '')
            }
            break

          case 'Escape':
            event.preventDefault()
            setIsOpenPopover(false)
            break
          default:
            break
        }
      }
    }

    // Debounce search and close popover when searched value is empty
    React.useEffect(() => {
      // Update the latestSearchedValueRef to track the latest searched value
      latestSearchedValueRef.current = searchedValue

      // If the searched value is not empty and different from the selected option
      if (searchedValue && searchedValue !== selectedOption) {
        // Clear the previous timer
        if (timerId) {
          clearTimeout(timerId)
        }

        // Start a new timer for debounce
        const newTimerId = setTimeout(() => {
          // If the latest searched value is still the same as the current searched value
          if (latestSearchedValueRef.current === searchedValue) {
            // Trigger the onSearch callback
            onSearch && onSearch(searchedValue)
          }
        }, debounce)

        // Store the timerId in state
        setTimerId(newTimerId)
      } else {
        // Close the popover if searchedValue is empty
        setIsOpenPopover(false)
      }

      // Clear the timer when the component unmounts or when searchedValue changes
      return () => {
        if (timerId) {
          clearTimeout(timerId)
        }
      }
    }, [searchedValue])

    // Only open popover when options are available after the API call is complete.
    // We don't want to open popover right when the user starts typing because the options will be incorrect before the API call is complete.
    React.useEffect(() => {
      // If searchedValue is not empty, open the popover
      if (searchedValue) {
        setIsOpenPopover(true)
      }
    }, [options])

    // Focus management when the popover is opened or closed
    React.useEffect(() => {
      const popoverContentElement = popoverContentRef.current

      if (isOpenPopover) {
        // Focus the first option or descriptive element within the popover
        if (popoverContentElement) {
          const firstOption = popoverContentElement.querySelector(
            '[role="option"]',
          ) as HTMLElement
          if (firstOption) {
            // add class styles.hover to firstOption
            firstOption.classList.add(styles.hover)
          } else {
            popoverContentElement.classList.add(styles.hover)
          }
        }
      }
    }, [isOpenPopover, triggerElementRef])

    // close popover when click outside of StyledAutoComplete
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpenPopover(false)
        }
      }

      document.addEventListener('pointerdown', handleClickOutside)
      return () => {
        document.removeEventListener('pointerdown', handleClickOutside)
      }
    }, [containerRef])

    React.useEffect(() => {
      const inputElement = containerRef.current
      if (inputElement) {
        const popoverWidth = inputElement.clientWidth
        setPopoverWidth(popoverWidth)
      }
    }, [containerRef])

    return (
      <>
        <CssInjection css={css}>
          <div
            className={`${styles.autoComplete} ${className} cdg-auto-complete`}
            ref={containerRef}
            {...htmlProps}
            aria-haspopup='true'
            aria-expanded={isOpenPopover ? 'true' : 'false'}
            aria-controls='autocomplete-popover'
            tabIndex={-1}
          >
            <Popover
              isOpen={isOpenPopover}
              anchor={clonedChildren}
              direction='bottom-center'
              isFloatingPortal={false}
              attachToElement={
                containerRef.current && containerRef.current.parentElement
              }
            >
              <div
                className={`${styles.popover} cdg-auto-complete-popover`}
                ref={popoverContentRef}
                style={{
                  width: popoverWidth ? `${popoverWidth}px` : 'auto',
                }}
                onScroll={handleScroll}
                tabIndex={-1} // Allow the popover to be focused programmatically
              >
                {options?.length === 0 ? (
                  <div
                    className={`${styles.emptyMessage} cdg-auto-complete-empty-message`}
                  >
                    {notFoundContent}
                  </div>
                ) : (
                  options?.map((option) => (
                    <div
                      className={`${styles.option} cdg-auto-complete-option`}
                      key={option}
                      data-value={option}
                      onClick={() => handleSelectOption(option)}
                      tabIndex={0} // Allow each option to be focused
                      role='option'
                    >
                      {option}
                    </div>
                  ))
                )}
              </div>
            </Popover>
          </div>
        </CssInjection>
      </>
    )
  },
)

export default AutoComplete
