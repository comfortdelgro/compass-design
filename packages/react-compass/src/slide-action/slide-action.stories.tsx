import React, {useState} from 'react'
import Button from '../button'
import Modal from '../modal'
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
