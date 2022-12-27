import type {Placement} from '@react-types/overlays'
import {useState} from 'react'
import Button from '../button'
import {Column, Row} from '../utils/components'
import {Tooltip, TooltipTrigger} from './index'

export const Positions: React.FC = () => {
  const rightSides = [
    {triggerElement: <a href='#'>Right tooltip</a>, placement: 'right'},
    {
      triggerElement: <a href='#'>Right-bottom tooltip</a>,
      placement: 'right bottom',
    },
    {triggerElement: <a href='#'>Right-top tooltip</a>, placement: 'right top'},
  ]

  const leftSides = [
    {triggerElement: <a href='#'>Left tooltip</a>, placement: 'left'},
    {
      triggerElement: <a href='#'>Left-bottom tooltip</a>,
      placement: 'left bottom',
    },
    {triggerElement: <a href='#'>Left-top tooltip</a>, placement: 'left top'},
  ]

  const topSides = [
    {triggerElement: <a href='#'>Top tooltip</a>, placement: 'top'},
    {
      triggerElement: <a href='#'>Top-left tooltip</a>,
      placement: 'top left',
    },
    {triggerElement: <a href='#'>Top-right tooltip</a>, placement: 'top right'},
  ]

  const bottomSides = [
    {triggerElement: <a href='#'>Bottom tooltip</a>, placement: 'bottom'},
    {
      triggerElement: <a href='#'>Bottom-left tooltip</a>,
      placement: 'bottom left',
    },
    {
      triggerElement: <a href='#'>Bottom-right tooltip</a>,
      placement: 'bottom right',
    },
  ]

  return (
    <Column css={{gap: '40px'}}>
      <h1>Positions</h1>
      <h2>Right side</h2>
      <Row css={{gap: '40px'}}>
        {rightSides.map((side) => {
          const placement = side.placement as Placement
          return (
            <TooltipTrigger placement={placement}>
              {side.triggerElement}
              <Tooltip title='Tooltip' dismissible>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae blanditiis laborum commodi mollitia officiis minus
                  ipsum totam fuga odit, dicta magnam numquam reprehenderit et
                  sequi dignissimos iusto deleniti. Quia, modi
                </p>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    marginTop: '16px',
                    gap: '16px',
                  }}
                >
                  <Button fullWidth variant='primary'>
                    Button
                  </Button>
                  <Button
                    fullWidth
                    variant='secondary'
                    css={{backgroundColor: 'white'}}
                  >
                    Button
                  </Button>
                </div>
              </Tooltip>
            </TooltipTrigger>
          )
        })}
      </Row>
      <h2>Left side</h2>
      <Row css={{gap: '40px', justifyContent: 'flex-end'}}>
        {leftSides.map((side) => {
          const placement = side.placement as Placement
          return (
            <TooltipTrigger placement={placement}>
              {side.triggerElement}
              <Tooltip title='Tooltip' dismissible>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae blanditiis laborum commodi mollitia officiis minus
                  ipsum totam fuga odit, dicta magnam numquam reprehenderit et
                  sequi dignissimos iusto deleniti. Quia, modi
                </p>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    marginTop: '16px',
                    gap: '16px',
                  }}
                >
                  <Button fullWidth variant='primary'>
                    Button
                  </Button>
                  <Button
                    fullWidth
                    variant='secondary'
                    css={{backgroundColor: 'white'}}
                  >
                    Button
                  </Button>
                </div>
              </Tooltip>
            </TooltipTrigger>
          )
        })}
      </Row>
      <h2>Bottom side</h2>
      <Row css={{gap: '40px', justifyContent: 'center'}}>
        {bottomSides.map((side) => {
          const placement = side.placement as Placement
          return (
            <TooltipTrigger placement={placement}>
              {side.triggerElement}
              <Tooltip title='Tooltip' dismissible>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae blanditiis laborum commodi mollitia officiis minus
                  ipsum totam fuga odit, dicta magnam numquam reprehenderit et
                  sequi dignissimos iusto deleniti. Quia, modi
                </p>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    marginTop: '16px',
                    gap: '16px',
                  }}
                >
                  <Button fullWidth variant='primary'>
                    Button
                  </Button>
                  <Button
                    fullWidth
                    variant='secondary'
                    css={{backgroundColor: 'white'}}
                  >
                    Button
                  </Button>
                </div>
              </Tooltip>
            </TooltipTrigger>
          )
        })}
      </Row>
      <h2>Top side</h2>
      <Row css={{gap: '40px', justifyContent: 'center'}}>
        {topSides.map((side) => {
          const placement = side.placement as Placement
          return (
            <TooltipTrigger placement={placement}>
              {side.triggerElement}
              <Tooltip title='Tooltip' dismissible>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae blanditiis laborum commodi mollitia officiis minus
                  ipsum totam fuga odit, dicta magnam numquam reprehenderit et
                  sequi dignissimos iusto deleniti. Quia, modi
                </p>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    marginTop: '16px',
                    gap: '16px',
                  }}
                >
                  <Button fullWidth variant='primary'>
                    Button
                  </Button>
                  <Button
                    fullWidth
                    variant='secondary'
                    css={{backgroundColor: 'white'}}
                  >
                    Button
                  </Button>
                </div>
              </Tooltip>
            </TooltipTrigger>
          )
        })}
      </Row>
    </Column>
  )
}

export const Dismissible: React.FC = () => {
  return (
    <Column css={{gap: '40px'}}>
      <div>
        <h1>Dissmisible</h1>
        <TooltipTrigger placement={'right'}>
          <a href='#'>Dissmisible tooltip</a>
          <Tooltip title='Tooltip' dismissible>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae blanditiis laborum commodi mollitia officiis minus
              ipsum totam fuga odit, dicta magnam numquam reprehenderit et sequi
              dignissimos iusto deleniti. Quia, modi
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                marginTop: '16px',
                gap: '16px',
              }}
            >
              <Button fullWidth variant='primary'>
                Button
              </Button>
              <Button
                fullWidth
                variant='secondary'
                css={{backgroundColor: 'white'}}
              >
                Button
              </Button>
            </div>
          </Tooltip>
        </TooltipTrigger>
      </div>

      <div>
        <h1>Non-dismissible</h1>
        <TooltipTrigger placement={'right'}>
          <a href='#'>Non-Dissmisible tooltip</a>
          <Tooltip title='Tooltip'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae blanditiis laborum commodi mollitia officiis minus
              ipsum totam fuga odit, dicta magnam numquam reprehenderit et sequi
              dignissimos iusto deleniti. Quia, modi
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                marginTop: '16px',
                gap: '16px',
              }}
            >
              <Button fullWidth variant='primary'>
                Button
              </Button>
              <Button
                fullWidth
                variant='secondary'
                css={{backgroundColor: 'white'}}
              >
                Button
              </Button>
            </div>
          </Tooltip>
        </TooltipTrigger>
      </div>
    </Column>
  )
}

export const Controlled: React.FC = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <h1>Tooltip is {isOpen ? 'Open' : 'Close'}</h1>
      <TooltipTrigger
        placement={'bottom'}
        open={isOpen}
        onOpenChange={setOpen}
        id='text'
      >
        <a href='#'>Controlled tooltip</a>
        <Tooltip title='Tooltip' dismissible>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            blanditiis laborum commodi mollitia officiis minus ipsum totam fuga
            odit, dicta magnam numquam reprehenderit et sequi dignissimos iusto
            deleniti. Quia, modi
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              marginTop: '16px',
              gap: '16px',
            }}
          >
            <Button fullWidth variant='primary'>
              Button
            </Button>
            <Button
              fullWidth
              variant='secondary'
              css={{backgroundColor: 'white'}}
            >
              Button
            </Button>
          </div>
        </Tooltip>
      </TooltipTrigger>
    </div>
  )
}
