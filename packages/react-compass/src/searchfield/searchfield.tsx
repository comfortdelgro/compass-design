import {faClose, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {useSearchField} from '@react-aria/searchfield'
import {useSearchFieldState} from '@react-stately/searchfield'
import type {AriaSearchFieldProps} from '@react-types/searchfield'
import React from 'react'
import Button from '../button/button'
import {Icon} from '../icon'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  SearchFieldVariantProps,
  StyledSearchFieldBox,
  StyledSearchFieldInput,
} from './searchfield.styles'

interface Props extends AriaSearchFieldProps, StyledComponentProps {}

export type SearchFieldProps = Props & SearchFieldVariantProps

const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // AriaSearchFieldProps
      isDisabled,
      ...ariaSafeProps
    } = props

    const ariaProps = {
      isDisabled,
      label: 'Search',
      ...ariaSafeProps,
    } as AriaSearchFieldProps

    const state = useSearchFieldState(ariaProps)
    const searchFieldRef = useDOMRef<HTMLInputElement>(ref)
    const {inputProps, clearButtonProps} = useSearchField(
      ariaProps,
      state,
      searchFieldRef,
    )

    return (
      <StyledSearchFieldBox disabled={!!isDisabled} css={css}>
        <StyledSearchFieldInput
          ref={searchFieldRef}
          {...inputProps}
          type='text'
        />
        {state.value !== '' ? (
          <Button {...clearButtonProps} size='sm' variant='ghost'>
            <Icon className='icon' icon={faClose} />
          </Button>
        ) : (
          <Button
            isDisabled={!!isDisabled}
            onPress={() => searchFieldRef.current?.focus()}
            size='sm'
            variant='ghost'
          >
            <Icon className='icon' icon={faMagnifyingGlass} />
          </Button>
        )}
      </StyledSearchFieldBox>
    )
  },
)

export default SearchField
