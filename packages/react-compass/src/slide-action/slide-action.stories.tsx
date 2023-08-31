import {faPowerOff} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import Button from '../button'
import Modal from '../modal'
import {styled} from '../theme'
import Typography from '../typography'
import SliderAction from './slide-action'

export function Default() {
  const [slideStatus, setSlideStatus] = useState(false)
  const [openConfirmModal, setOpenConfirmModal] = useState(false)

  return (
    <div>
      <Typography.Header variant='header3' css={{marginBottom: '$4'}}>
        Slide Action / Swiper component
      </Typography.Header>

      <Typography.Body
        variant='body2'
        css={{color: '$grayShades60', marginBottom: '$4'}}
      >
        Component will be reset after 1000ms
      </Typography.Body>
      <Typography.Body variant='body3' css={{marginBottom: '$4'}}>
        Slide status: <strong>{`${slideStatus}`}</strong>
      </Typography.Body>

      <SliderAction
        color='$cdgBlue'
        onChange={(isSuccess) => setSlideStatus(isSuccess)}
        onSuccess={(reset) => {
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
      </SliderAction>

      <Typography.Header variant='header3' css={{marginBlock: '$8 $4'}}>
        Close a modal
      </Typography.Header>
      <Button
        type='button'
        variant='secondary'
        onClick={() => setOpenConfirmModal(true)}
      >
        Open confirm modal
      </Button>

      <Modal.Trigger
        isOpen={openConfirmModal}
        handleClose={() => setOpenConfirmModal(false)}
      >
        <Modal
          css={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '$88',
            '&>div': {
              width: '100%',
            },
          }}
        >
          <Modal.Description>
            Our Driver is on the way. Any promo code that has been applied maybe
            forfeited. Do you want to proceed?
            <SliderAction
              css={{marginBlock: '$4', maxWidth: 'unset', width: '100%'}}
              onSuccess={() => setOpenConfirmModal(false)}
            >
              Slide to cancel
            </SliderAction>
            <Button
              variant='ghost'
              onClick={() => setOpenConfirmModal(false)}
              type='button'
              css={{
                display: 'block',
                color: '$cdgBlue',
                marginInline: 'auto',
              }}
            >
              Close
            </Button>
          </Modal.Description>
        </Modal>
      </Modal.Trigger>
    </div>
  )
}

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

export function Customize() {
  const [colorBg, setColorBg] = useState('$cdgBlue')

  return (
    <>
      <Typography.Header variant='header3' css={{marginBottom: '$4'}}>
        Default
      </Typography.Header>
      <pre>color: $dangerShades</pre>
      <SliderAction css={{marginTop: '$4'}}>Default color</SliderAction>

      <Typography.Header variant='header3' css={{marginBlock: '$8 $4'}}>
        More color
      </Typography.Header>

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
      <SliderAction css={{marginTop: '$4'}} color={colorBg}>
        Slide background
      </SliderAction>

      <SliderAction css={{marginTop: '$4'}} color={colorBg} bgType='static'>
        Fadein background
      </SliderAction>

      <Typography.Header variant='header4' css={{marginBlock: '$8 $4'}}>
        Label slide effect
      </Typography.Header>

      <SliderAction labelType='slide' color={colorBg}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa non
        ipsum, pariatur in eveniet neque dolores sequi, numquam aspernatur
        ratione veritatis nemo earum maxime aut distinctio repellat dolorum ipsa
        deleniti!
      </SliderAction>

      <Typography.Body variant='body2' css={{marginBlock: '$4'}}>
        With custom icon
      </Typography.Body>
      <SliderAction
        icon={<FontAwesomeIcon icon={faPowerOff} color='#fff' size='2x' />}
        labelType='slide'
      >
        Slide to shutdown
      </SliderAction>

      <Typography.Header variant='header4' css={{marginBlock: '$8 $4'}}>
        Default gradient background
      </Typography.Header>
      <SliderAction css={{marginTop: '$4'}} color='#e11d48' slideBg='gradient'>
        Slide to see bg color change
      </SliderAction>
    </>
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
