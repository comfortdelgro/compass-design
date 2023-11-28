import {
  Column,
  Divider,
  SlideAction,
  Typography,
} from '@comfortdelgro/react-compass'
import {ReactNode, useState} from 'react'

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
      <StyledColorPickerWrapper styles={{marginBottom: '$4'}}>
        {slideBgColors.map((color) => (
          <StyledColorPicker
            key={color}
            title={color}
            styles={{backgroundColor: color}}
            onClick={() => setColorBg(color)}
          />
        ))}

        <StyledColorPicker
          styles={{
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

const StyledColorPickerWrapper = (props: {
  children: ReactNode
  styles: object
}) => (
  <div
    {...props}
    style={{
      ...props.styles,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '0.5rem',
    }}
  >
    {props.children}
  </div>
)

const StyledColorPicker = (props: {
  children?: ReactNode
  title?: string
  styles: object
  onClick: () => void
}) => (
  <button
    {...props}
    type='button'
    style={{
      ...props.styles,
      height: '2.5rem',
      width: '5rem',
      fontWeight: '600',
      color: '#FFF',
      fontSize: '0.75rem',

      border: 'none',
      borderRadius: '4px',
      opacity: 0.8,
      transition: 'opacity .2s ease',
      cursor: 'pointer',

      // '&:hover': {
      //   opacity: 1,
      // },
    }}
  >
    {props.children}
  </button>
)
