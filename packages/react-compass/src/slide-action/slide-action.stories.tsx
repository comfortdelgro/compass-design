import {faPowerOff} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Meta} from '@storybook/react'
import {useState} from 'react'
import Typography from '../typography'
import SlideAction from './slide-action'
import classes from './styles/stories.module.css'

export function Default() {
  const [slideStatus, setSlideStatus] = useState(false)

  return (
    <div className={classes.sliderActionStories}>
      <Typography.Body variant='body2' className={classes.description}>
        Component will be reset after 1000ms
      </Typography.Body>
      <Typography.Body variant='body3'>
        Slide status: <strong>{`${slideStatus}`}</strong>
      </Typography.Body>

      <SlideAction
        color='--cdg-color-cdgBlue'
        onChange={(isSuccess) => setSlideStatus(isSuccess)}
        onSwipeEnd={(reset) => {
          console.log('success')
          // do sth when users swiped to the end
          setTimeout(() => {
            reset()
          }, 1000)
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        minima quaerat, ipsum ad temporibus amet distinctio vitae cupiditate
        fugit reprehenderit minus beatae hic dolor rerum, labore architecto
        facere nam numquam?
      </SlideAction>
    </div>
  )
}

// Slate, Orange, Emerald, CdgBlue, Cyan, Violet, Rose
const slideBgColors = [
  '#475569',
  '#ea580c',
  '#059669',
  '--cdg-color-cdgBlue',
  '#0891b2',
  '#7c3aed',
  '#e11d48',
]

export function Customize() {
  const [colorBg, setColorBg] = useState(
    slideBgColors[0] || '--cdg-color-cdgBlue',
  )
  const [turnedOff, setTurnedOff] = useState(false)

  return (
    <div className={classes.sliderActionStories}>
      <Typography.Header variant='header3'>Default</Typography.Header>
      <pre>color: var(--cdg-color-dangerShades) // #E31617</pre>
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
        {slideBgColors.map((color) => (
          <button
            key={color}
            className={classes.colorPicker}
            title={color}
            style={{backgroundColor: color}}
            type='button'
            onClick={() => setColorBg(color)}
          />
        ))}

        <button
          className={classes.colorPicker}
          type='button'
          style={{
            background:
              'linear-gradient(to right top, #fff6f2, #ffd4c1, #ffb194, #f98d6b, #f16645, #dc5135, #c63a26, #b12118, #8d2318, #6a2117, #481d15, #281713)',
          }}
          onClick={() =>
            setColorBg(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
          }
        >
          Random
        </button>
      </div>

      <SlideAction color={colorBg}>Slide background</SlideAction>

      <SlideAction
        css={{marginTop: 'var(--cdg-spacing-4)'}}
        color={colorBg}
        slideType='static'
      >
        Fadein background
      </SlideAction>

      <Typography.Header variant='header5'>
        Label slide effect
      </Typography.Header>

      <SlideAction labelType='slide' color={colorBg}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa non
        ipsum, pariatur in eveniet neque dolores sequi, numquam aspernatur
        ratione veritatis nemo earum maxime aut distinctio repellat dolorum ipsa
        deleniti!
      </SlideAction>

      <Typography.Header variant='header5'>
        Default gradient background
      </Typography.Header>
      <SlideAction
        css={{marginTop: 'var(--cdg-spacing-4)'}}
        color='#e11d48'
        slideColor='gradient'
      >
        Slide to see bg color change
      </SlideAction>

      <Typography.Header variant='header5'>With custom icon</Typography.Header>
      <div className={classes.iphoneFake}>
        <div
          className={[classes.showCase, turnedOff && classes.turnedOff]
            .filter(Boolean)
            .join(' ')}
        >
          <SlideAction
            css={{
              border: 'none',
              backgroundColor: 'rgba(61, 127, 118, 0.5)',
            }}
            color='#fff'
            icon={<FontAwesomeIcon icon={faPowerOff} color='red' size='lg' />}
            labelType='slide'
            onSwipeEnd={() => setTurnedOff(true)}
          >
            Slide to power off
          </SlideAction>
        </div>
      </div>
    </div>
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
