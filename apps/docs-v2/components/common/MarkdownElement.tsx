import {styled} from '@comfortdelgro/react-compass'
import clsx from 'clsx'
import * as React from 'react'

const Root = styled('div', {
  lineHeight: 1.5625, // Increased compared to the 1.5 default to make the docs easier to read.

  wordBreak: 'break-word',
  '& pre': {
    lineHeight: 1.5, // Developers likes when the code is dense.
    margin: '$2 0',
    padding: '$2',
    backgroundColor: '#323130',
    color: '#f8f8f2',
    border: '1px solid',
    borderColor: '$gray30',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    fontSize: 13,
    maxWidth: 'calc(100vw - 32px)',
    maxHeight: '400px',
    marginTop: 0,
  },
  '& code': {
    fontWeight: 400,
    WebkitFontSmoothing: 'subpixel-antialiased',
  },
  '& pre > code': {
    fontSize: 'inherit',
  },
  '& :not(pre) > code': {
    display: 'inline-block',
    padding: '0 5px',
    color: '$primaryText',
    backgroundColor: '$primaryBg',
    borderRadius: 5,
    fontSize: 13,
    direction: 'ltr /*! @noflip */',
  },
  '& h1': {
    fontSize: 36,
    margin: '10px 0',
    color: '$cdgBlue140',
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
    fontWeight: 700,
    color: '$gray110',
    margin: '40px 0 4px',
  },
  '& h3': {
    fontWeight: 'bold',
    color: '$gray110',
    margin: '24px 0 8px',
  },
  '& h4': {
    fontWeight: 'bold',
    color: '$gray110',
    margin: '24px 0 8px',
  },
  '& h5': {
    fontWeight: 'bold',
    color: '$gray110',
    margin: '20px 0 8px',
  },
  '& p, & ul, & ol': {
    marginTop: 0,
    marginBottom: 16,
    color: '$gray110',
  },
  '& ul': {
    paddingLeft: 30,
  },
  '& h1, & h2, & h3, & h4': {
    position: 'relative',
    paddingRight: 26 * 2 + 10,
    '& code': {
      fontSize: 'inherit',
      lineHeight: 'inherit',
      wordBreak: 'break-all',
    },
    '& .anchor-link': {
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
      backgroundColor: '$cdgBlue70',
      border: '1px solid',
      borderColor: '$gray30',
      borderRadius: 8,
      color: '$primaryText',
      cursor: 'pointer',
      display: 'inline-block',
      '&:hover': {
        backgroundColor: '$gray50',
        borderColor: '$gray10',
        color: '$primaryText',
      },
      '& svg': {
        width: '0.875rem',
        height: '0.875rem',
        fill: 'currentColor',
        pointerEvents: 'none',
      },
    },
  },
  '& h1 code, & h2 code, & h3 code': {
    color: '$gray110',
  },
  '& h1 code': {
    fontWeight: 'bold',
  },
  '& h2 code': {
    fontSize: 24,
    fontWeight: 'bold',
  },
  '& h3 code': {
    fontSize: 18,
  },
  '& table': {
    width: '100%',
    display: 'table',
    wordBreak: 'normal',
    overflowX: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderCollapse: 'collapse',
    marginBottom: '20px',
    borderSpacing: 0,
    border: `1px solid $gray40`,
    borderRadius: 12,
    '& .prop-name, & .prop-type, & .prop-default, & .slot-name, & .slot-defaultClass, & .slot-default':
      {
        fontWeight: 400,
        WebkitFontSmoothing: 'subpixel-antialiased',
        fontSize: 13,
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
      borderBottom: `1px dotted $gray40`,
    },
  },
  '& td': {
    borderBottom: `1px solid $gray40`,
    padding: '$3',
    color: '$primaryText',
  },
  '& td code': {
    lineHeight: 1.6,
  },
  '& th': {
    fontSize: 14,
    fontWeight: 500,
    color: '$primaryText',
    background: '$gray20',
    whiteSpace: 'pre',
    borderBottom: `1px solid $gray40`,
    padding: '$3',
  },
  '& blockquote': {
    borderRadius: 12,
    border: '1px solid',
    borderLeft: '8px solid',
    borderColor: '$warning',
    backgroundColor: '$warningBg',
    padding: '10px 20px',
    margin: '20px 0',
    '& p': {
      marginTop: 10,
      color: '$warning',
    },
  },
  '& .CdgCallout-root': {
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
    '&.CdgCallout-error': {
      color: '$danger',
      backgroundColor: '$dangerBg',
      borderColor: '$dangerBg',
      '& strong': {
        color: '$danger',
        fontWeight: 'bold',
      },
      '& a': {
        color: 'red',
        textDecorationColor: 'red',
        '&:hover': {
          textDecorationColor: 'inherit',
        },
      },
    },
    '&.CdgCallout-info': {
      color: '$info',
      backgroundColor: '$infoBg',
      borderColor: '$info',
      '& strong': {
        color: '$info',
      },
    },
    '&.CdgCallout-success': {
      color: '$success',
      backgroundColor: '$successBg',
      borderColor: '$success',
      '& strong': {
        color: 'green',
        fontWeight: 'bold',
      },
      '& a': {
        color: '$success',
        textDecorationColor: 'red',
        '&:hover': {
          textDecorationColor: 'inherit',
        },
      },
    },
    '&.CdgCallout-warning': {
      color: '$warning',
      backgroundColor: '$warningBg',
      borderColor: '$warning',
      '& strong': {
        color: '$warning',
      },
      '& a': {
        color: '$warning',
        textDecorationColor: '$warning',
        '&:hover': {
          textDecorationColor: 'inherit',
        },
      },
    },
  },
  '& a, & a code': {
    // Style taken from the Link component
    color: '$cdgBlue60',
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
    margin: '$5 0',
    border: 0,
    flexShrink: 0,
    backgroundColor: `#201F1E`,
  },
  '& kbd.key': {
    padding: '5px',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    margin: '0 1px',
    font: '11px Consolas,Liberation Mono,Menlo,monospace',
    lineHeight: '10px',
    color: '$primaryText',
    verticalAlign: 'middle',
    backgroundColor: '$gray50',
    border: `1px solid $gray30`,
    borderRadius: 5,
    boxShadow: `inset 0 -1px 0 $gray30`,
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
  '& .cdg-root': {
    direction: 'ltr /*! @noflip */',
    position: 'relative',
    fontSize: 10,
  },
  '& .cdg-copy': {
    display: 'inline-flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: 26,
    height: 26,
    cursor: 'pointer',
    position: 'absolute',
    top: '$1',
    right: '$1',
    padding: '$1',
    fontFamily: 'inherit',
    fontWeight: 500,
    borderRadius: 6,
    border: 'none',
    backgroundColor: 'transparent',
    color: '#FFF',
    opacity: 0.6,
    '& svg': {
      userSelect: 'none',
      width: 16,
      height: 16,
      display: 'inline-block',
      fill: 'currentcolor',
      flexShrink: 0,
      fontSize: '18px',
      margin: 'auto',
    },
    '& .cdg-copied-icon': {
      display: 'none',
    },
    '&:hover, &:focus': {
      opacity: 1,
      backgroundColor: '$cdgBlue40',
      '& .cdg-copyKeypress': {
        display: 'block',
        '@media (any-hover: none)': {
          display: 'none',
        },
      },
    },
    '& .cdg-copyKeypress': {
      display: 'none',
      position: 'absolute',
      right: 26,
    },
    '&[data-copied]': {
      // style of the button when it is in copied state.
      borderColor: '$cdgBlue60',
      color: '#fff',
      backgroundColor: '$cdgBlue40',
      '& .cdg-copy-icon': {
        display: 'none',
      },
      '& .cdg-copied-icon': {
        display: 'block',
      },
    },
    '&:focus-visible': {
      outline: '2px solid',
      outlineOffset: 2,
      outlineColor: '$cdgBlue40',
    },
  },
  '& .cdg-copyKeypress': {
    pointerEvents: 'none',
    userSelect: 'none',
    marginRight: '$1',
    marginBottom: '$1',
    whiteSpace: 'nowrap',
    opacity: 0.6,
  },
  '& li': {
    marginBottom: 4,
    '& pre': {
      marginTop: '$1',
    },
    '& > p': {
      marginBottom: '$!',
    },
  },
})

const MarkdownElement = React.forwardRef(function MarkdownElement(
  props: any,
  ref,
) {
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
