import {TooltipTrigger} from '@comfortdelgro/react-compass'
import ResetFocusIcon from '@mui/icons-material/CenterFocusWeak'
import CodeRoundedIcon from '@mui/icons-material/CodeRounded'
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Fade from '@mui/material/Fade'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MDMenuItem, {menuItemClasses} from '@mui/material/MenuItem'
import Snackbar from '@mui/material/Snackbar'
import {alpha, styled, useTheme} from '@mui/material/styles'
import SvgIcon from '@mui/material/SvgIcon'
import MDToggleButton, {toggleButtonClasses} from '@mui/material/ToggleButton'
import MDToggleButtonGroup, {
  toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup'
import Tooltip from '@mui/material/Tooltip'
import useMediaQuery from '@mui/material/useMediaQuery'
import copy from 'clipboard-copy'
import {CODE_VARIANTS} from 'constants'
import PropTypes from 'prop-types'
import * as React from 'react'
import {useSetCodeVariant} from 'utils/codeVariant'
import {useTranslate} from 'utils/i18n'
import codeSandbox from '../sandbox/CodeSandbox'

function DemoTooltip(props) {
  return (
    <Tooltip
      componentsProps={{
        popper: {
          sx: {
            zIndex: (theme) => theme.zIndex.appBar - 1,
          },
        },
      }}
      {...props}
    />
  )
}

function ToggleCodeTooltip(props) {
  const {showSourceHint, ...other} = props
  const atLeastSmallViewport = useMediaQuery((theme) =>
    theme.breakpoints.up('sm'),
  )
  const [open, setOpen] = React.useState(false)

  return (
    <DemoTooltip
      {...other}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={showSourceHint && atLeastSmallViewport ? true : open}
    />
  )
}
ToggleCodeTooltip.propTypes = {
  showSourceHint: PropTypes.bool,
}

const alwaysTrue = () => true

const ToggleButtonGroup = styled(MDToggleButtonGroup)(({theme}) => [
  theme.unstable_sx({
    [`& .${toggleButtonGroupClasses.grouped}`]: {
      '&:not(:first-of-type)': {
        marginLeft: 0.8,
        borderLeft: '1px solid',
        borderLeftColor: 'divider',
        borderTopLeftRadius: 999,
        borderBottomLeftRadius: 999,
      },
      '&:not(:last-of-type)': {
        borderTopRightRadius: 999,
        borderBottomRightRadius: 999,
      },
    },
  }),
])

const MenuItem = styled(MDMenuItem)(({theme}) => ({
  [`& .${menuItemClasses.selected}`]: {
    backgroundColor: theme.palette.primary[50],
  },
}))

const ToggleButton = styled(MDToggleButton)(({theme}) => [
  theme.unstable_sx({
    padding: theme.spacing(0, 1, 0.1, 1),
    fontSize: theme.typography.pxToRem(13),
    borderRadius: 99,
    borderColor: 'grey.200',
    '&.Mui-disabled': {
      opacity: 0.5,
    },
    [`&.${toggleButtonClasses.selected}:hover`]: {
      backgroundColor: theme.vars
        ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))`
        : alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity +
              theme.palette.action.hoverOpacity,
          ),
      '@media (hover: none)': {
        backgroundColor: theme.vars
          ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})`
          : alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity,
            ),
      },
    },
  }),
])

function useToolbar(controlRefs, options = {}) {
  const {defaultActiveIndex = 0, isFocusableControl = alwaysTrue} = options
  const [activeControlIndex, setActiveControlIndex] =
    React.useState(defaultActiveIndex)

  // TODO: do we need to do this during layout practically? It's technically
  // a bit too late since we allow user interaction between layout and passive effects
  React.useEffect(() => {
    setActiveControlIndex((currentActiveControlIndex) => {
      if (!isFocusableControl(currentActiveControlIndex)) {
        return defaultActiveIndex
      }
      return currentActiveControlIndex
    })
  }, [defaultActiveIndex, isFocusableControl])

  // controlRefs.findIndex(controlRef => controlRef.current = element)
  function findControlIndex(element) {
    let controlIndex = -1
    controlRefs.forEach((controlRef, index) => {
      if (controlRef.current === element) {
        controlIndex = index
      }
    })
    return controlIndex
  }

  function handleControlFocus(event) {
    const nextActiveControlIndex = findControlIndex(event.target)
    if (nextActiveControlIndex !== -1) {
      setActiveControlIndex(nextActiveControlIndex)
    } else {
      // make sure DCE works
      // eslint-disable-next-line no-lonely-if
      if (process.env.NODE_ENV !== 'production') {
        console.error(
          'MUI: The toolbar contains a focusable element that is not controlled by the toolbar. ' +
            'Make sure you have attached `getControlProps(index)` to every focusable element within this toolbar.',
        )
      }
    }
  }

  let handleToolbarFocus
  if (process.env.NODE_ENV !== 'production') {
    handleToolbarFocus = (event) => {
      if (findControlIndex(event.target) === -1) {
        console.error(
          'MUI: The toolbar contains a focusable element that is not controlled by the toolbar. ' +
            'Make sure you have attached `getControlProps(index)` to every focusable element within this toolbar.',
        )
      }
    }
  }

  const {direction} = useTheme()

  function handleToolbarKeyDown(event) {
    // We handle toolbars where controls can be hidden temporarily.
    // When a control is hidden we can't move focus to it and have to exclude
    // it from the order.
    let currentFocusableControlIndex = -1
    const focusableControls = []
    controlRefs.forEach((controlRef, index) => {
      const {current: control} = controlRef
      if (index === activeControlIndex) {
        currentFocusableControlIndex = focusableControls.length
      }
      if (control !== null && isFocusableControl(index)) {
        focusableControls.push(control)
      }
    })

    const prevControlKey = direction === 'ltr' ? 'ArrowLeft' : 'ArrowRight'
    const nextControlKey = direction === 'ltr' ? 'ArrowRight' : 'ArrowLeft'

    let nextFocusableIndex = -1
    switch (event.key) {
      case prevControlKey:
        nextFocusableIndex =
          (currentFocusableControlIndex - 1 + focusableControls.length) %
          focusableControls.length
        break
      case nextControlKey:
        nextFocusableIndex =
          (currentFocusableControlIndex + 1) % focusableControls.length
        break
      case 'Home':
        nextFocusableIndex = 0
        break
      case 'End':
        nextFocusableIndex = focusableControls.length - 1
        break
      default:
        break
    }

    if (nextFocusableIndex !== -1) {
      event.preventDefault()
      focusableControls[nextFocusableIndex].focus()
    }
  }

  function getControlProps(index) {
    return {
      onFocus: handleControlFocus,
      ref: controlRefs[index],
      tabIndex: index === activeControlIndex ? 0 : -1,
    }
  }

  return {
    getControlProps,
    toolbarProps: {
      onFocus: handleToolbarFocus,
      onKeyDown: handleToolbarKeyDown,
      role: 'toolbar',
    },
  }
}

export default function DemoToolbar(props) {
  const {
    codeOpen,
    codeVariant,
    hasNonSystemDemos,
    demo,
    demoData,
    demoId,
    demoHovered,
    initialFocusRef,
    onCodeOpenChange,
    onResetDemoClick,
  } = props

  const setCodeVariant = useSetCodeVariant()
  const [sourceHintSeen, setSourceHintSeen] = React.useState(false)
  const t = useTranslate()
  console.log({demo})

  const handleCodeLanguageClick = (event, clickedCodeVariant) => {
    if (clickedCodeVariant !== null && codeVariant !== clickedCodeVariant) {
      setCodeVariant(clickedCodeVariant)
    }
  }

  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleMoreClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleMoreClose = () => {
    setAnchorEl(null)
  }

  const [snackbarOpen, setSnackbarOpen] = React.useState(false)
  const [snackbarMessage, setSnackbarMessage] = React.useState(undefined)

  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
  }
  const handleCopyClick = async () => {
    try {
      await copy(demoData.rawTS)
      setSnackbarMessage(t('copiedSource'))
      setSnackbarOpen(true)
    } finally {
      handleMoreClose()
    }
  }

  const handleCodeOpenClick = () => {
    document.cookie = `sourceHintSeen=true;path=/;max-age=31536000`
    onCodeOpenChange()
    setSourceHintSeen(true)
  }

  const handleResetFocusClick = () => {
    initialFocusRef.current.focusVisible()
  }

  const showSourceHint = demoHovered && !sourceHintSeen

  let showCodeLabel
  if (codeOpen) {
    showCodeLabel = 'Hide the source'
  } else {
    showCodeLabel = 'Show the source'
  }

  const controlRefs = [
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
  ]
  // if the code is not open we hide the language controls
  const isFocusableControl = React.useCallback(
    (index) => (codeOpen ? true : index !== 1 && index !== 2),
    [codeOpen],
  )
  const {getControlProps, toolbarProps} = useToolbar(controlRefs, {
    defaultActiveIndex: 0,
    isFocusableControl,
  })

  return (
    <>
      <Box>
        <Fade in={codeOpen}>
          <Box sx={{display: 'flex', height: 40}}>
            {hasNonSystemDemos && (
              <Divider
                orientation='vertical'
                variant='middle'
                sx={{mx: 1, height: '24px'}}
              />
            )}
            <ToggleButtonGroup
              sx={{margin: '8px 0'}}
              exclusive
              onChange={handleCodeLanguageClick}
            >
              <ToggleButton
                value={CODE_VARIANTS.JS}
                aria-label={t('showJSSource')}
                {...getControlProps(1)}
              >
                {t('JS')}
              </ToggleButton>
              <ToggleButton
                value={CODE_VARIANTS.TS}
                aria-label={t('showTSSource')}
                {...getControlProps(2)}
              >
                Typescript
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Fade>
        <Box sx={{ml: 'auto'}}>
          <ToggleCodeTooltip
            showSourceHint={showSourceHint}
            PopperProps={{disablePortal: true}}
            title={showCodeLabel}
            placement='bottom'
          >
            <IconButton
              onClick={handleCodeOpenClick}
              color='default'
              {...getControlProps(3)}
              sx={{borderRadius: 1}}
            >
              <CodeRoundedIcon />
            </IconButton>
          </ToggleCodeTooltip>
          <React.Fragment>
            <TooltipTrigger>
              <IconButton
                onClick={() =>
                  codeSandbox.createReactApp(demoData).openSandbox('/demo')
                }
                {...getControlProps(4)}
                sx={{borderRadius: 1}}
              >
                <SvgIcon viewBox='0 0 1024 1024'>
                  <path d='M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z' />
                </SvgIcon>
              </IconButton>
              <Tooltip title='Title' dismissible>
                Edit in code Sandbox
              </Tooltip>
            </TooltipTrigger>
          </React.Fragment>
          <DemoTooltip title='Copy the source code' placement='bottom'>
            <IconButton
              onClick={handleCopyClick}
              {...getControlProps(6)}
              sx={{borderRadius: 1}}
            >
              <ContentCopyRoundedIcon />
            </IconButton>
          </DemoTooltip>
          <DemoTooltip title={t('resetFocus')} placement='bottom'>
            <IconButton
              onClick={handleResetFocusClick}
              {...getControlProps(7)}
              sx={{borderRadius: 1}}
            >
              <ResetFocusIcon />
            </IconButton>
          </DemoTooltip>
          <DemoTooltip title={t('resetDemo')} placement='bottom'>
            <IconButton
              aria-controls={demoId}
              onClick={onResetDemoClick}
              {...getControlProps(8)}
              sx={{borderRadius: 1}}
            >
              <RefreshRoundedIcon />
            </IconButton>
          </DemoTooltip>
          <IconButton
            onClick={handleMoreClick}
            aria-label={t('seeMore')}
            aria-owns={anchorEl ? 'demo-menu-more' : undefined}
            aria-haspopup='true'
            {...getControlProps(9)}
            sx={{borderRadius: 1}}
          >
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Box>
      <Menu
        id='demo-menu-more'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMoreClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem
          component='a'
          href={demoData.githubLocation}
          target='_blank'
          rel='noopener nofollow'
          onClick={handleMoreClose}
        >
          {t('viewGitHub')}
        </MenuItem>
      </Menu>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </>
  )
}
