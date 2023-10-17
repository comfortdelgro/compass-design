import React from 'react'
import ReactDOM from 'react-dom'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import SnackbarPrefixIcon from './snackbar-prefix-icon'
import SnackbarSuffixIcon from './snackbar-suffix-icon'
import SnackbarText from './snackbar-text'
import {
  SnackbarRightSection,
  SnackbarVariantProps,
  StyledSnackbar,
} from './snackbar.styles'

interface Props extends StyledComponentProps {
  id?: number | string
  children?: React.ReactNode
  portalTo?: HTMLElement
  isOpen?: boolean
  handleClose?: () => void
  onClick?: (e: React.MouseEvent, id: number | string | undefined) => void
  autoClose?: false | number
}

export type SnackbarProps = Props &
  SnackbarVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Snackbar = React.forwardRef<HTMLDivElement, SnackbarProps>(
  (props, ref) => {
    const {
      children,
      // StyledComponentProps
      id,
      css = {},
      // VariantProps
      type = 'default',
      //Component props
      portalTo,
      isOpen = false,
      handleClose,
      autoClose = false,
      onClick,
      // HTMLDiv Props
      ...delegated
    } = props

    const snackbarRef = useDOMRef<HTMLDivElement>(ref)
    const variantProps = {type} as SnackbarVariantProps

    const {child: SnackbarSuffixIconElement} = pickChild<
      typeof SnackbarSuffixIcon
    >(children, SnackbarSuffixIcon)

    const {child: SnackbarPrefixIconElement} = pickChild<
      typeof SnackbarPrefixIcon
    >(children, SnackbarPrefixIcon)

    const {child: SnackbarTextElement} = pickChild<typeof SnackbarText>(
      children,
      SnackbarText,
    )

    const renderContent = React.useCallback(
      (children: React.ReactNode) => {
        return portalTo ? ReactDOM.createPortal(children, portalTo) : children
      },
      [portalTo],
    )

    // Auto close
    React.useEffect(() => {
      if (autoClose && typeof autoClose == 'number' && isOpen == true) {
        setTimeout(() => handleClose?.(), autoClose)
      }
    }, [isOpen])
    const handleClick = (e: React.MouseEvent) => {
      if (onClick) {
        onClick(e, id)
      }
    }
    return (
      <>
        {isOpen &&
          renderContent(
            <StyledSnackbar
              {...variantProps}
              css={css}
              ref={snackbarRef}
              onClick={handleClick}
              {...delegated}
            >
              {SnackbarPrefixIconElement}
              {SnackbarTextElement}
              <SnackbarRightSection>
                {SnackbarSuffixIconElement &&
                  React.cloneElement(
                    SnackbarSuffixIconElement as unknown as JSX.Element,
                    {
                      onClose: () => handleClose?.(),
                    },
                  )}
              </SnackbarRightSection>
            </StyledSnackbar>,
          )}
      </>
    )
  },
)

export default Snackbar as typeof Snackbar & {
  Text: typeof SnackbarText
  PrefixIcon: typeof SnackbarPrefixIcon
  SuffixIcon: typeof SnackbarSuffixIcon
}
