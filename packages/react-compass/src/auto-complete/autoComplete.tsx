import React, {useRef} from 'react'
import Popover from '../popover'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  AutoCompleteVariantProps,
  StyledAutoComplete,
  StyledEmptyMessage,
  StyledOption,
  StyledPopover,
} from './autoComplete.styles'

// Define the props interface
interface Props extends StyledComponentProps {
  children?: React.ReactNode
  options?: string[]
  onSelect?: (selectedValue: string) => unknown
  onSearch?: (value: string) => unknown
  searchedValue?: string
  notFoundContent?: string
  debounce?: number
  onLoadMore?: () => unknown // Add the onLoadMore prop for loading more data
  isLoadingMore?: boolean // Add the isLoadingMore prop for loading more data
}

// Define the complete prop type for AutoComplete
export type AutoCompleteProps = Props &
  AutoCompleteVariantProps &
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
      ...delegated
    } = props

    // States and refs
    const [isOpenPopover, setIsOpenPopover] = React.useState(false)
    const [timerId, setTimerId] = React.useState<NodeJS.Timeout | null>(null)
    const [selectedOption, setSelectedOption] = React.useState<string | null>(
      null,
    )
    const containerRef = useDOMRef<HTMLDivElement>(ref)
    const latestSearchedValueRef = React.useRef<unknown>(null)

    const calculatedPopoverWidth = containerRef.current?.clientWidth

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
        popoverContentElement.scrollTop + popoverContentElement.clientHeight >=
          popoverContentElement.scrollHeight
      ) {
        // User has reached the bottom of the popover content, trigger onLoadMore
        if (onLoadMore && !isLoadingMore) {
          onLoadMore()
        }
      }
    }

    // Clone children and add ref to the triggering element
    const triggerElementRef = React.useRef<HTMLDivElement>(null)
    const clonedChilren = React.Children.map(children, (child) => {
      return React.cloneElement(child as React.ReactElement, {
        ref: triggerElementRef,
        tabIndex: 0, // Allow the triggering element to be focused programmatically
      })
    })

    // Focus management when the popover is opened or closed
    React.useEffect(() => {
      const popoverContentElement = popoverContentRef.current
      const triggeringElement = triggerElementRef.current

      if (isOpenPopover) {
        // Focus the first option or descriptive element within the popover
        if (popoverContentElement) {
          const firstOption = popoverContentElement.querySelector(
            '[role="option"]',
          ) as HTMLElement
          if (firstOption) {
            firstOption.focus()
          } else {
            popoverContentElement.focus()
          }
        }
      } else {
        if (triggeringElement) {
          triggeringElement.focus() // Return focus to the triggering element
        }
      }
    }, [isOpenPopover, triggerElementRef])

    return (
      <StyledAutoComplete
        ref={containerRef}
        css={css}
        {...delegated}
        aria-haspopup='true'
        aria-expanded={isOpenPopover ? 'true' : 'false'}
        aria-controls='autocomplete-popover'
      >
        <Popover
          isOpen={isOpenPopover}
          onClose={() => {
            setIsOpenPopover(false)
          }}
          anchor={clonedChilren}
          direction='bottom-center'
          attachToElement={
            containerRef.current && containerRef.current.parentElement
          }
        >
          <StyledPopover
            ref={popoverContentRef}
            css={{
              width: calculatedPopoverWidth,
            }}
            onScroll={handleScroll}
            tabIndex={-1} // Allow the popover to be focused programmatically
          >
            {options?.length === 0 ? (
              <StyledEmptyMessage>{notFoundContent}</StyledEmptyMessage>
            ) : (
              options?.map((option) => (
                <StyledOption
                  key={option}
                  onClick={() => handleSelectOption(option)}
                  tabIndex={0} // Allow each option to be focused
                  role='option'
                >
                  {option}
                </StyledOption>
              ))
            )}
          </StyledPopover>
        </Popover>
      </StyledAutoComplete>
    )
  },
)

export default AutoComplete
