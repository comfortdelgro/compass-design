import {
  Column,
  Divider,
  SlideAction,
  Typography,
} from '@comfortdelgro/react-compass-old'
import { useState } from 'react'
import colorPickerStyles from './styles/ColorPicker.module.css'
import colorPickerWrapperStyles from './styles/ColorPickerWrapper.module.css'

// Slate, Orange, Emerald, CdgBlue, Cyan, Violet, Rose
const slideBgColors = [
  '#475569',
  '#ea580c',
  '#059669',
  '$cdgBlue',
  '#0891b2',
  '#7c3aed',
  '#e11d48',
]

export default function SliderColorfulDocs() {
  const [colorBg, setColorBg] = useState(slideBgColors[0] || '$cdgBlue')
  return (
    <Column>
      <Typography.Header variant='header4'>Default color</Typography.Header>
      <code>$dangerShades - #E31617</code>
      <SlideAction css={{ marginBlock: '$4' }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque enim
        sint labore nesciunt
      </SlideAction>

      <Divider />

      <Typography.Header variant='header4'>More colors 🎨</Typography.Header>
      <StyledColorPickerWrapper style={{ marginBottom: 'var(--space-4)' }}>
        {slideBgColors.map((color) => (
          <StyledColorPicker
            key={color}
            title={color}
            style={{ backgroundColor: color }}
            type='button'
            onClick={() => setColorBg(color)}
          />
        ))}

        <StyledColorPicker
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
        </StyledColorPicker>
      </StyledColorPickerWrapper>

      <SlideAction color={colorBg}>Slide background</SlideAction>

      <SlideAction css={{ marginBlock: '$4' }} color={colorBg} slideType='static'>
        Fadein background
      </SlideAction>

      <SlideAction labelType='slide' color={colorBg}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa non
        ipsum, pariatur in eveniet neque dolores sequi, numquam aspernatur
        ratione veritatis nemo earum maxime aut distinctio repellat dolorum ipsa
        deleniti!
      </SlideAction>

      <Divider css={{ marginBlock: '$4' }} />

      <Typography.Header variant='header4'>
        Default gradient background
      </Typography.Header>
      <SlideAction color='#e11d48' slideColor='gradient'>
        Slide to see bg color change
      </SlideAction>
    </Column>
  )
}


const StyledColorPickerWrapper = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={colorPickerWrapperStyles.colorPickerWrapper} {...props}>{props.children}</div>
}


const StyledColorPicker = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button className={colorPickerStyles.colorPicker} {...props}>{props.children}</button>
}
