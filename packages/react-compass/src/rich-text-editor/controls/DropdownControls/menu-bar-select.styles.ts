import {styled} from '../../../theme'
import type {VariantProps} from '../../../utils/stitches.types'

export type DropdownVariantProps = VariantProps<typeof StyledDropdownWrapper>
interface ButtonProps {
  isOpen?: boolean
  isFocusVisible?: boolean
}
export const StyledDropdownWrapper = styled('div', {
  width: '100%',
  label: {
    fontSize: '$label1',
    fontWeight: '$semibold',
    marginBottom: '$2',
    display: 'inline-block',
    width: '100%',
  },
})

export const StyledDropdown = styled('div', {
  width: '100%',
  border: '1px solid #E6E6E6',
  borderRadius: '$md',
  button: {
    cursor: 'pointer',
    border: 'none',
    width: '100%',
    display: 'flex',
    padding: '$3 $4',
    gap: '$1',
    backgroundColor: '#FFFFFF',
    '.dropdown-icon': {
      flexShrink: 0,
      width: '$6',
      height: '$6',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      border: 'none',
      background: 'transparent',
      svg: {
        width: '$4',
        height: '$4',
      },
    },
    p: {
      fontSize: '$label1',
      fontWeight: '$semibold',
      height: '$6',
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
      border: 'none',
      textAlign: 'start',
      padding: 0,
      margin: 0,
    },
    input: {
      fontSize: '$label1',
      fontWeight: '$semibold',
      height: '$6',
      flexGrow: 1,
      border: 'none',
      padding: 0,
      margin: 0,
      '&:focus': {
        outline: 'none',
      },
    },
  },
})

export const StyledPopover = styled('div', {
  margin: 0,
  padding: '$2 0',
  borderRadius: '$md',
  position: 'absolute',
  width: '100%',
  top: '0px',
  left: '0px',
  background: '#FFFFFF',
  boxShadow:
    '0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)',
  ul: {
    maxHeight: '$64',
    overflowY: 'auto',
    listStyle: 'none',
    marginBlockStart: 0,
    marginBlockEnd: 0,
    marginInlineStart: 0,
    marginInlineEnd: 0,
    paddingInlineStart: 0,
    li: {
      fontSize: '$label1',
      fontWeight: '$medium',
      padding: '$2 $4',
      outline: 'none',
      cursor: 'pointer',
    },
  },
})

// const Button = styled
//   appearance: none;
//   background: ${(props) => (props.isOpen ? '#eee' : 'white')};
//   border: 1px solid;
//   padding: 6px 2px 6px 8px;
//   margin-top: 6px;
//   outline: none;
//   border-color: ${(props) => (props.isFocusVisible ? 'seagreen' : 'lightgray')};
//   box-shadow: ${(props) =>
//     props.isFocusVisible ? '0 0 0 3px rgba(143, 188, 143, 0.5)' : ''};
//   border-radius: 4px;
//   display: inline-flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 200px;
//   text-align: left;
//   font-size: 14px;
//   color: black;

// const Value = styled.span`
//   display: inline-flex;
//   align-items: center;
// `

// const StyledIcon = styled(SelectorIcon)`
//   width: 18px;
//   height: 18px;
//   padding: 6px 2px;
//   margin: 0 4px;
//   background: seagreen;
//   border-radius: 4px;
//   color: white;
// `
