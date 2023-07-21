import React from 'react'
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
interface Props extends StyledComponentProps {
  children?: React.ReactNode
  options?: string[]
  onSelect?: (selectedValue: string) => unknown
  onSearch?: (value: string) => unknown
  searchedValue?: string
  notFoundContent?: string
  debounce?: number
}

export type AutoCompleteProps = Props &
  AutoCompleteVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const AutoComplete = React.forwardRef<HTMLDivElement, AutoCompleteProps>(
  (props, ref) => {
    const {
      children,
      options,
      onSearch,
      onSelect,
      searchedValue,
      debounce,
      notFoundContent = 'No Results Found',
      css = {},
      ...delegated
    } = props
    const [isOpenPopover, setIsOpenPopover] = React.useState(false)
    const [timerId, setTimerId] = React.useState<NodeJS.Timeout | null>(null)
    const [selectedOption, setSelectedOption] = React.useState<string | null>(
      null,
    )
    const containerRef = useDOMRef<HTMLDivElement>(ref)

    const calculatedPopoverWidth = containerRef.current?.clientWidth

    // Debounce search and close popover when searched value is empty
    React.useEffect(() => {
      if (searchedValue && searchedValue !== selectedOption) {
        // Clear the previous timer
        if (timerId) {
          clearTimeout(timerId)
        }
        const newTimerId = setTimeout(() => {
          onSearch && onSearch(searchedValue)
        }, debounce)
        setTimerId(newTimerId)
      } else {
        setIsOpenPopover(false)
      }
      // Clear the timer when the component unmounts
      return () => {
        if (timerId) {
          clearTimeout(timerId)
        }
      }
    }, [searchedValue])

    // Only open popover when options are available after the API call is complete.
    // We don't want to open popover right when user starts typing because the options will be incorrect before the API call is complete.
    React.useEffect(() => {
      if (searchedValue) {
        setIsOpenPopover(true)
      }
    }, [options])

    // Select an option
    React.useEffect(() => {
      if (selectedOption) {
        onSelect && onSelect(selectedOption)
        setIsOpenPopover(false)
      }
    }, [selectedOption])

    return (
      <StyledAutoComplete ref={containerRef} css={css} {...delegated}>
        <Popover
          isOpen={isOpenPopover}
          onClose={() => {
            setIsOpenPopover(false)
          }}
          anchor={children}
          direction='bottom-center'
          attachToElement={
            containerRef.current && containerRef.current.parentElement
          }
        >
          <StyledPopover css={{width: calculatedPopoverWidth}}>
            {options?.length == 0 ? (
              <StyledEmptyMessage>{notFoundContent}</StyledEmptyMessage>
            ) : (
              options?.map((option) => (
                <StyledOption
                  key={option}
                  onClick={() => setSelectedOption(option)}
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
