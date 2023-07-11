import {alpha, styled} from '@mui/material/styles'
import clsx from 'clsx'
import {brandingLightTheme as lightTheme} from 'docs/src/brandingTheme'
import * as React from 'react'

const Root = styled('div')(({theme}) => ({
  lineHeight: 1.5625, // Increased compared to the 1.5 default to make the docs easier to read.

  wordBreak: 'break-word',
  '& pre': {
    lineHeight: 1.5, // Developers likes when the code is dense.
    margin: theme.spacing(2, 'auto'),
    padding: theme.spacing(2),
    backgroundColor: `var(--muidocs-palette-primaryDark-800, ${lightTheme.palette.primaryDark[800]})`,
    color: '#f8f8f2',
    colorScheme: 'dark',
    borderRadius: `var(--muidocs-shape-borderRadius, ${
      theme.shape?.borderRadius ?? lightTheme.shape.borderRadius
    }px)`,
    border: '1px solid',
    borderColor: `var(--muidocs-palette-primaryDark-700, ${lightTheme.palette.primaryDark[700]})`,
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    fontSize: lightTheme.typography.pxToRem(13),
    maxWidth: 'calc(100vw - 32px)',
    maxHeight: '400px',
    [lightTheme.breakpoints.up('md')]: {
      maxWidth: 'calc(100vw - 32px - 16px)',
    },
  },
  '& code': {
    fontFamily: lightTheme.typography.fontFamilyCode,
    fontWeight: 400,
    WebkitFontSmoothing: 'subpixel-antialiased',
  },
  '& pre > code': {
    fontSize: 'inherit',
  },
  '& :not(pre) > code': {
    display: 'inline-block',
    padding: '0 5px',
    color: `var(--muidocs-palette-text-primary, ${lightTheme.palette.text.primary})`,
    backgroundColor: '#b1b1b1',
    borderRadius: 5,
    fontSize: lightTheme.typography.pxToRem(13),
    direction: 'ltr /*! @noflip */',
  },
  '& h1': {
    ...lightTheme.typography.h3,
    fontSize: lightTheme.typography.pxToRem(36),
    fontFamily: `"PlusJakartaSans-ExtraBold", ${lightTheme.typography.fontFamilySystem}`,
    margin: '10px 0',
    color: `var(--muidocs-palette-primaryDark-900, ${lightTheme.palette.primaryDark[900]})`,
    fontWeight: 800,
  },
  '& .description': {
    fontWeight: 400,
    margin: '0 0 28px',
  },
  '& .component-tabs': {
    margin: '0 0 40px',
  },
  '& h2': {
    fontFamily: lightTheme.typography.fontFamilySystem,
    fontWeight: 700,
    color: `var(--muidocs-palette-grey-900, ${lightTheme.palette.grey[900]})`,
    margin: '40px 0 4px',
  },
  '& h3': {
    fontFamily: lightTheme.typography.fontFamilySystem,
    fontWeight: lightTheme.typography.fontWeightSemiBold,
    color: `var(--muidocs-palette-grey-900, ${lightTheme.palette.grey[900]})`,
    margin: '24px 0 8px',
  },
  '& h4': {
    fontFamily: lightTheme.typography.fontFamilySystem,
    fontWeight: lightTheme.typography.fontWeightSemiBold,
    color: `var(--muidocs-palette-grey-900, ${lightTheme.palette.grey[900]})`,
    margin: '24px 0 8px',
  },
  '& h5': {
    fontWeight: lightTheme.typography.fontWeightSemiBold,
    color: `var(--muidocs-palette-grey-900, ${lightTheme.palette.grey[900]})`,
    margin: '20px 0 8px',
  },
  '& p, & ul, & ol': {
    marginTop: 0,
    marginBottom: 16,
    color: `var(--muidocs-palette-grey-900, ${lightTheme.palette.grey[900]})`,
  },
  '& ul': {
    paddingLeft: 30,
  },
  '& h1, & h2, & h3, & h4': {
    position: 'relative',
    // Reserve space for the end of the line action button
    paddingRight: 26 * 2 + 10,
    '& code': {
      fontSize: 'inherit',
      lineHeight: 'inherit',
      // Remove scroll on small screens.
      wordBreak: 'break-all',
    },
    '& .anchor-link': {
      // To prevent the link to get the focus.
      display: 'none',
    },
    '& a:not(.anchor-link):hover': {
      color: 'currentColor',
      borderBottom: '1px solid currentColor',
      textDecoration: 'none',
    },
    '&:hover .anchor-link, & .comment-link': {
      lineHeight: '21.5px',
      position: 'absolute',
      textAlign: 'center',
      marginLeft: 10,
      marginTop: 5,
      height: 26,
      width: 26,
      backgroundColor: `var(--muidocs-palette-primary-50, ${lightTheme.palette.primary[50]})`,
      border: '1px solid',
      borderColor: `var(--muidocs-palette-divider, ${lightTheme.palette.divider})`,
      borderRadius: 8,
      color: `var(--muidocs-palette-text-secondary, ${lightTheme.palette.text.secondary})`,
      cursor: 'pointer',
      display: 'inline-block',
      '&:hover': {
        backgroundColor: 'red',
        borderColor: `var(--muidocs-palette-primary-100, ${lightTheme.palette.primary[100]})`,
        color: `var(--muidocs-palette-primary-main, ${lightTheme.palette.primary.main})`,
      },
      '& svg': {
        width: '0.875rem',
        height: '0.875rem',
        fill: 'currentColor',
        pointerEvents: 'none',
      },
    },
    '& .comment-link': {
      display: 'none', // So we can have the comment button opt-in.
      top: 0,
      right: 0,
      transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.shortest,
      }),
      '& svg': {
        opacity: 0.6,
        marginBottom: 2,
        verticalAlign: 'middle',
      },
      '&:hover': {
        '&>svg': {opacity: 1},
      },
    },
  },
  '& h1 code, & h2 code, & h3 code': {
    color: `var(--muidocs-palette-grey-900, ${lightTheme.palette.grey[900]})`,
  },
  '& h1 code': {
    fontWeight: lightTheme.typography.fontWeightSemiBold,
  },
  '& h2 code': {
    fontSize: lightTheme.typography.pxToRem(24),
    fontWeight: lightTheme.typography.fontWeightSemiBold,
  },
  '& h3 code': {
    fontSize: lightTheme.typography.pxToRem(18),
  },
  '& table': {
    // Trade display table for scroll overflow
    display: 'block',
    wordBreak: 'normal',
    overflowX: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderCollapse: 'collapse',
    marginBottom: '20px',
    borderSpacing: 0,
    '& .prop-name, & .prop-type, & .prop-default, & .slot-name, & .slot-defaultClass, & .slot-default':
      {
        fontWeight: 400,
        fontFamily: lightTheme.typography.fontFamilyCode,
        WebkitFontSmoothing: 'subpixel-antialiased',
        fontSize: lightTheme.typography.pxToRem(13),
      },
    '& .required': {
      color: '#006500',
    },
    '& .optional': {
      color: '#45529f',
    },
    '& .prop-type, & .slot-defaultClass': {
      color: '#932981',
    },
    '& .prop-default, & .slot-default': {
      borderBottom: `1px dotted var(--muidocs-palette-divider, ${lightTheme.palette.divider})`,
    },
  },
  '& td': {
    borderBottom: `1px solid var(--muidocs-palette-divider, ${lightTheme.palette.divider})`,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    color: `var(--muidocs-palette-text-secondary, ${lightTheme.palette.text.secondary})`,
  },
  '& td code': {
    lineHeight: 1.6,
  },
  '& th': {
    fontSize: theme.typography.pxToRem(14),
    lineHeight: theme.typography.pxToRem(24),
    fontWeight: 500,
    color: `var(--muidocs-palette-text-primary, ${lightTheme.palette.text.primary})`,
    whiteSpace: 'pre',
    borderBottom: `1px solid var(--muidocs-palette-divider, ${lightTheme.palette.divider})`,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
  },
  '& blockquote': {
    borderRadius: 12,
    border: '1px solid',
    borderLeft: '8px solid',
    borderColor: `var(--muidocs-palette-warning-300, ${lightTheme.palette.warning[300]})`,
    backgroundColor: `var(--muidocs-palette-warning-50, ${lightTheme.palette.warning[50]})`,
    padding: '10px 20px',
    margin: '20px 0',
    '& p': {
      marginTop: 10,
      color: `var(--muidocs-palette-primaryDark-800, ${lightTheme.palette.primaryDark[800]})`,
    },
  },
  '& .MuiCallout-root': {
    padding: '16px',
    margin: '16px 0',
    border: '1px solid',
    borderRadius: 12,
    '& > ul, & > p': {
      '&:last-child': {
        margin: 0,
      },
    },
    '& > p, & ul, li': {
      color: 'inherit',
    },
    '&.MuiCallout-error': {
      color: `var(--muidocs-palette-error-900, ${lightTheme.palette.error[900]})`,
      backgroundColor: `var(--muidocs-palette-error-50, ${lightTheme.palette.error[50]})`,
      borderColor: `var(--muidocs-palette-error-100, ${lightTheme.palette.error[100]})`,
      '& strong': {
        color: `var(--muidocs-palette-error-800, ${lightTheme.palette.error[800]})`,
      },
      '& a': {
        color: `var(--muidocs-palette-error-800, ${lightTheme.palette.error[800]})`,
        textDecorationColor: 'red',
        '&:hover': {
          textDecorationColor: 'inherit',
        },
      },
    },
    '&.MuiCallout-info': {
      color: `var(--muidocs-palette-primary-900, ${lightTheme.palette.primary[900]})`,
      backgroundColor: `var(--muidocs-palette-grey-50, ${lightTheme.palette.grey[50]})`,
      borderColor: `var(--muidocs-palette-grey-200, ${lightTheme.palette.grey[200]})`,
      '& strong': {
        color: `var(--muidocs-palette-primary-800, ${lightTheme.palette.primary[800]})`,
      },
    },
    '&.MuiCallout-success': {
      color: `var(--muidocs-palette-success-900, ${lightTheme.palette.success[900]})`,
      backgroundColor: `var(--muidocs-palette-success-50, ${lightTheme.palette.success[50]})`,
      borderColor: `var(--muidocs-palette-success-200, ${lightTheme.palette.success[200]})`,
      '& strong': {
        color: `var(--muidocs-palette-success-900, ${lightTheme.palette.success[900]})`,
      },
      '& a': {
        color: `var(--muidocs-palette-success-900, ${lightTheme.palette.success[900]})`,
        textDecorationColor: 'red',
        '&:hover': {
          textDecorationColor: 'inherit',
        },
      },
    },
    '&.MuiCallout-warning': {
      color: `var(--muidocs-palette-grey-900, ${lightTheme.palette.grey[900]})`,
      backgroundColor: alpha(lightTheme.palette.warning[50], 0.5),
      borderColor: alpha(lightTheme.palette.warning[600], 0.3),
      '& strong': {
        color: `var(--muidocs-palette-warning-800, ${lightTheme.palette.warning[800]})`,
      },
      '& a': {
        color: `var(--muidocs-palette-warning-800, ${lightTheme.palette.warning[800]})`,
        textDecorationColor: alpha(lightTheme.palette.warning.main, 0.4),
        '&:hover': {
          textDecorationColor: 'inherit',
        },
      },
    },
  },
  '& a, & a code': {
    // Style taken from the Link component
    color: `var(--muidocs-palette-primary-600, ${lightTheme.palette.primary[600]})`,
    textDecoration: 'underline',
    textDecorationColor: 'red',
    '&:hover': {
      textDecorationColor: 'inherit',
    },
  },
  '& a code': {
    color: 'red',
  },
  '& img, & video': {
    maxWidth: '100% !important',
    height: 'auto',
  },
  '& img': {
    display: 'inline-block',
    borderRadius: 2,
  },
  '& hr': {
    height: 1,
    margin: theme.spacing(5, 0),
    border: 0,
    flexShrink: 0,
    backgroundColor: `var(--muidocs-palette-divider, ${lightTheme.palette.divider})`,
  },
  '& kbd.key': {
    padding: '5px',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    margin: '0 1px',
    font: '11px Consolas,Liberation Mono,Menlo,monospace',
    lineHeight: '10px',
    color: `var(--muidocs-palette-text-primary, ${lightTheme.palette.text.primary})`,
    verticalAlign: 'middle',
    backgroundColor: `var(--muidocs-palette-grey-50, ${lightTheme.palette.grey[50]})`,
    border: `1px solid var(--muidocs-palette-grey-300, ${lightTheme.palette.grey[300]})`,
    borderRadius: 5,
    boxShadow: `inset 0 -1px 0 var(--muidocs-palette-grey-300, ${lightTheme.palette.grey[300]})`,
  },
  '& details': {
    marginBottom: 15,
    padding: 10,
    '& pre': {
      marginTop: 10,
    },
  },
  '& summary': {
    cursor: 'pointer',
  },
  '& .MuiCode-root': {
    direction: 'ltr /*! @noflip */',
    position: 'relative',
    fontSize: 10,
  },
  '& .MuiCode-copy': {
    display: 'inline-flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: 26,
    height: 26,
    cursor: 'pointer',
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    padding: theme.spacing(0.5),
    fontFamily: 'inherit',
    fontWeight: 500,
    borderRadius: 6,
    border: 'none',
    backgroundColor: 'transparent',
    color: '#FFF',
    opacity: 0.6,
    transition: theme.transitions.create(
      ['background', 'borderColor', 'display'],
      {
        duration: theme.transitions.duration.shortest,
      },
    ),
    '& svg': {
      userSelect: 'none',
      width: theme.typography.pxToRem(16),
      height: theme.typography.pxToRem(16),
      display: 'inline-block',
      fill: 'currentcolor',
      flexShrink: 0,
      fontSize: '18px',
      margin: 'auto',
    },
    '& .MuiCode-copied-icon': {
      display: 'none',
    },
    '&:hover, &:focus': {
      opacity: 1,
      backgroundColor: lightTheme.palette.primaryDark[500],
      '& .MuiCode-copyKeypress': {
        display: 'block',
        '@media (any-hover: none)': {
          display: 'none',
        },
      },
    },
    '& .MuiCode-copyKeypress': {
      display: 'none',
      position: 'absolute',
      right: 26,
    },
    '&[data-copied]': {
      // style of the button when it is in copied state.
      borderColor: lightTheme.palette.primary[700],
      color: '#fff',
      backgroundColor: lightTheme.palette.primaryDark[600],
      '& .MuiCode-copy-icon': {
        display: 'none',
      },
      '& .MuiCode-copied-icon': {
        display: 'block',
      },
    },
    '&:focus-visible': {
      outline: '2px solid',
      outlineOffset: 2,
      outlineColor: lightTheme.palette.primaryDark[500],
    },
  },
  '& .MuiCode-copyKeypress': {
    pointerEvents: 'none',
    userSelect: 'none',
    marginRight: theme.spacing(1.2),
    marginBottom: theme.spacing(0.2),
    whiteSpace: 'nowrap',
    opacity: 0.6,
  },
  '& li': {
    marginBottom: 4,
    '& pre': {
      marginTop: theme.spacing(1),
    },
    '& > p': {
      marginBottom: theme.spacing(1),
    },
  },
}))

const MarkdownElement = React.forwardRef(function MarkdownElement(props, ref) {
  const {className, renderedMarkdown, ...other} = props as any
  const more = {}

  if (typeof renderedMarkdown === 'string') {
    // @ts-ignore
    more.dangerouslySetInnerHTML = {__html: renderedMarkdown}
  }

  return (
    <Root
      className={clsx('markdown-body', className)}
      {...more}
      {...other}
      ref={ref}
    />
  )
})

export default MarkdownElement
