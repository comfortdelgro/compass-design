import {
  Column,
  Divider,
  SlideAction,
  Typography,
} from '@comfortdelgro/react-compass'
import {useState} from 'react'
import classes from './styles/slide-action-document.module.css'

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

export default function SliderColorfulDocs() {
  const [themeColor, setThemeColor] = useState(slideColors[0])

  return (
    <Column className={classes.exampleContainer}>
      <Typography.Header variant='header4'>Theme color</Typography.Header>
      <Typography.Body variant='body2'>
        You can use the <code>color</code> prop to change the theme color.
        <br />
        <small>
          Default color: &nbsp;
          <code style={{color: '#0142AF'}}>--cdg-color-cdgBlue #0142AF</code>
        </small>
      </Typography.Body>
      <SlideAction color='--cdg-color-success' style={{marginBlock: '1rem'}}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque enim
        sint labore nesciunt
      </SlideAction>

      <Divider />

      <Typography.Header variant='header4'>More colors 🎨</Typography.Header>
      <div className={classes.colorPickerWrapper}>
        {slideColors.map((color) => (
          <button
            key={color}
            title={color}
            className={classes.colorPickerBtn}
            onClick={() => setThemeColor(color)}
            style={{backgroundColor: color}}
          />
        ))}

        <button
          className={classes.colorPickerBtn}
          style={{
            background:
              'linear-gradient(to right top, #fff6f2, #ffd4c1, #ffb194, #f98d6b, #f16645, #dc5135, #c63a26, #b12118, #8d2318, #6a2117, #481d15, #281713)',
          }}
          onClick={() =>
            setThemeColor(
              `#${Math.floor(Math.random() * 0xffffff)
                .toString(16)
                .padStart(6, '0')}`,
            )
          }
        >
          Random
        </button>
      </div>

      <SlideAction color={themeColor}>Slide background</SlideAction>

      <SlideAction
        color={themeColor}
        slideType='static'
        style={{marginBlock: '1rem'}}
      >
        Fadein background
      </SlideAction>

      <SlideAction labelType='slide' color={themeColor}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa non
        ipsum, pariatur in eveniet neque dolores sequi, numquam aspernatur
        ratione veritatis nemo earum maxime aut distinctio repellat dolorum ipsa
        deleniti!
      </SlideAction>

      <Divider css={{marginBlock: 'var(--cdg-spacing-4)'}} />

      <Typography.Header variant='header4'>
        Gradient slide background
      </Typography.Header>
      <SlideAction className={classes.slideActionGradient}>
        Slide to see bg color change
      </SlideAction>
    </Column>
  )
}
