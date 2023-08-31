import {
  Column,
  SlideAction,
  styled,
  Typography,
} from '@comfortdelgro/react-compass'
import {useState} from 'react'

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
      <SlideAction css={{marginBlock: '$4'}}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque enim
        sint labore nesciunt
      </SlideAction>

      <Typography.Header variant='header4'>More color</Typography.Header>

      <StyledColorPickerWrapper>
        {slideBgColors.map((color) => (
          <StyledColorPicker
            key={color}
            title={color}
            css={{backgroundColor: color}}
            type='button'
            onClick={() => setColorBg(color)}
          />
        ))}

        <StyledColorPicker
          type='button'
          css={{
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
      <SlideAction css={{marginTop: '$4'}} color={colorBg}>
        Slide background
      </SlideAction>

      <SlideAction css={{marginTop: '$4'}} color={colorBg} slideType='static'>
        Fadein background
      </SlideAction>

      <SlideAction labelType='slide' color={colorBg}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa non
        ipsum, pariatur in eveniet neque dolores sequi, numquam aspernatur
        ratione veritatis nemo earum maxime aut distinctio repellat dolorum ipsa
        deleniti!
      </SlideAction>

      <Typography.Header variant='header4' css={{marginBlock: '$8 $4'}}>
        Default gradient background
      </Typography.Header>
      <SlideAction
        css={{marginTop: '$4'}}
        color='#e11d48'
        slideColor='gradient'
      >
        Slide to see bg color change
      </SlideAction>
    </Column>
  )
}

const StyledColorPickerWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})

const StyledColorPicker = styled('button', {
  height: '$10',
  width: '$20',
  fontWeight: '$semibold',
  color: '$whiteText',
  fontSize: '$label2',

  border: 'none',
  borderRadius: '$md',
  opacity: 0.8,
  transition: 'opacity .2s ease',
  cursor: 'pointer',

  '&:hover': {
    opacity: 1,
  },
})
