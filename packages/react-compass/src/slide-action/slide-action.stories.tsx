import {Meta} from '@storybook/react'
import {useCallback, useRef, useState} from 'react'
import Button from '../button'
import Divider from '../divider'
import Typography from '../typography'
import {classNames} from '../utils/string'
import SlideAction from './slide-action'
import type {SlideActionOnSwipeEnd, SlideActionRef} from './slide-action.types'
import classes from './styles/stories.module.css'

export function Default() {
  const lastSlideRef = useRef<SlideActionRef>(null)
  const handleOnSwipeEnd = useCallback<SlideActionOnSwipeEnd>((reset) => {
    // do sth when users swiped to the end
    setTimeout(() => {
      reset()
    }, 1000)
  }, [])

  return (
    <div className={classes.sliderActionStories}>
      <SlideAction
        onChange={(isSuccess) => console.log('Status change: ', isSuccess)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        minima quaerat, ipsum ad temporibus amet distinctio vitae cupiditate
        fugit reprehenderit minus beatae hic dolor rerum, labore architecto
        facere nam numquam?
      </SlideAction>

      <Divider />

      <Typography.Header variant='header3'>
        How to reset component?
      </Typography.Header>
      <Typography.Body variant='body2'>
        1. Call <code>reset</code> function that <code>onSwipeEnd</code>{' '}
        callback provided. Type: <code>SlideActionOnSwipeEnd</code>
        <br />
        <br />
        Below SlideAction will be reset after 1000ms:
      </Typography.Body>
      <SlideAction onSwipeEnd={handleOnSwipeEnd}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </SlideAction>

      <Typography.Body variant='body2' style={{marginTop: '2rem'}}>
        2. Call <code>resetState</code> function from component ref.
      </Typography.Body>
      <Button
        variant='danger'
        type='button'
        onClick={() => lastSlideRef.current?.resetState()}
        style={{marginBottom: '1rem'}}
      >
        Reset below SlideAction
      </Button>
      <SlideAction ref={lastSlideRef}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </SlideAction>
    </div>
  )
}

// Slate, Orange, Emerald, CdgBlue, Cyan, Violet, Rose
const slideColors = [
  '#475569',
  '#ea580c',
  '#059669',
  'var(--cdg-color-cdgBlue)',
  '#0891b2',
  '#7c3aed',
  '#e11d48',
]

export function Customize() {
  const [themeColor, setThemeColor] = useState(slideColors[0])
  const [turnedOff, setTurnedOff] = useState(false)

  return (
    <Box css={{padding: 'var(--cdg-spacing-4)'}}>
      <Typography.Header variant='header3'>Default</Typography.Header>
      <pre>color: --cdg-color-cdgBlue #0142AF</pre>
      <SlideAction css={{marginTop: 'var(--cdg-spacing-4)'}}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque enim
        sint labore nesciunt
      </SlideAction>

      <Typography.Header variant='header3'>Compact</Typography.Header>
      <SlideAction compact>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque enim
        sint labore nesciunt, excepturi et voluptates laudantium exercitationem
        similique. Libero id quo eligendi sunt. Cupiditate dignissimos qui
        inventore dolores hic.
      </SlideAction>

      <Typography.Header variant='header3'>More colors 🎨</Typography.Header>

      <div className={classes.colorPickerWrapper}>
        {slideColors.map((color) => (
          <button
            key={color}
            className={'colorPicker'}
            title={color}
            style={{backgroundColor: color}}
            type='button'
            onClick={() => setThemeColor(color)}
          />
        ))}

        <button
          className={'colorPicker'}
          type='button'
          style={{
            background:
              'linear-gradient(to right top, #fff6f2, #ffd4c1, #ffb194, #f98d6b, #f16645, #dc5135, #c63a26, #b12118, #8d2318, #6a2117, #481d15, #281713)',
          }}
          onClick={() =>
            setThemeColor(
              `#${((Math.random() * 0xffffff) | 0)
                .toString(16)
                .padStart(6, '0')}`,
            )
          }
        >
          Random
        </button>
      </Box>

      <SlideAction color={themeColor}>Slide background</SlideAction>

      <SlideAction
        css={{marginTop: 'var(--cdg-spacing-4)'}}
        color={themeColor}
        slideType='static'
      >
        Fadein background
      </SlideAction>

      <Typography.Header variant='header5'>
        Label slide effect
      </Typography.Header>

      <SlideAction labelType='slide' color={themeColor}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa non
        ipsum, pariatur in eveniet neque dolores sequi, numquam aspernatur
        ratione veritatis nemo earum maxime aut distinctio repellat dolorum ipsa
        deleniti!
      </SlideAction>

      <Typography.Header variant='header5'>
        Gradient slide background
      </Typography.Header>
      <SlideAction className={classes.slideActionGradient}>
        Slide to see bg color change
      </SlideAction>

      <Typography.Header variant='header5'>With custom icon</Typography.Header>
      <Box
        css={{
          height: '360px',
          paddingTop: 'var(--cdg-spacing-4)',
          marginBottom: '-1rem',
          overflow: 'hidden',
          boxSizing: 'border-box',
          '.showCase': {
            position: 'relative',
            marginInline: 'auto',
            padding: 'var(--cdg-spacing-4) var(--cdg-spacing-12)',
            paddingTop: 'var(--cdg-spacing-20)',
            height: '720px',
            width: '360px',
            backgroundColor: 'rgb(34, 193, 195)',
            background:
              'linear-gradient(321deg, rgba(34, 193, 195, 0.8) 0%, rgba(253, 187, 45, 0.8) 100%)',
            fontWeight: 'var(--cdg-font-weight-semibold)',
            textAlign: 'center',
            outline: '10px solid #000',
            borderRadius: '2.25rem',
            boxSizing: 'border-box',
            '&::before': {
              content: '',
              position: 'absolute',
              top: 'var(--cdg-spacing-2)',
              insetInline: '0',
              marginInline: 'auto',
              height: 'var(--cdg-spacing-6)',
              width: 'var(--cdg-spacing-20)',
              borderRadius: 'var(--cdg-border-radius-full)',
              backgroundColor: '#000',
            },
            '&.turnedOff': {background: '#000', '& > *': {display: 'none'}},
          },
        }}
      >
        <div
          className={classNames(
            classes.showCase,
            turnedOff ? classes.turnedOff : '',
          )}
        >
          <SlideAction
            style={{
              border: 'none',
              backgroundColor: 'rgba(61, 127, 118, 0.5)',
            }}
            color='#fff'
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                color='red'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M7 6a7.75 7.75 0 1 0 10 0' />
                <path d='M12 4l0 8' />
              </svg>
            }
            labelType='slide'
            onSwipeEnd={() => setTurnedOff(true)}
          >
            Slide to power off
          </SlideAction>
        </div>
      </Box>
    </Box>
  )
}

const meta: Meta<typeof Default> = {
  title: 'Example/Slide Action | Swiper',
  tags: ['autodocs'],
  component: Default,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
