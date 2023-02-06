import {
  background,
  cdgBlue,
  divider,
  error,
  gray,
  info,
  input,
  overlays,
  primary,
  severe,
  success,
  text,
  warning,
} from './index'

interface BoxProps {
  background: string
  name: string
  objectRef: string
  whiteText?: boolean
}

const Box: React.FC<BoxProps> = (props) => (
  <div
    style={{
      width: '240px',
      height: '160px',
      padding: 10,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: props.background,
      color: props.whiteText ? 'white' : 'black',
    }}
  >
    <span style={{fontSize: 16, fontWeight: 600}}>
      {props.name} ({props.background})
    </span>
    <span style={{fontSize: 14, fontWeight: 400}}>{props.objectRef}</span>
  </div>
)

export const Colors: React.FC = () => {
  return (
    <>
      <h3>Primary</h3>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <Box
          background={primary.cdgBlue}
          name='cdgBlue'
          whiteText
          objectRef='primary.cdgBlue'
        />
        <Box
          background={primary.heading}
          name='Heading'
          whiteText
          objectRef='primary.heading'
        />
        <Box
          background={primary.background}
          name='Background'
          objectRef='primary.background'
        />
      </div>
      <h3>Secondary</h3>
      <h4>Info</h4>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <Box
          background={info.background}
          name='Background'
          objectRef='info.background'
        />
        <Box
          background={info.status}
          name='Status'
          whiteText
          objectRef='info.status'
        />
      </div>
      <h4>Error</h4>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <Box
          background={error.background}
          name='Background'
          objectRef='error.background'
        />
        <Box
          background={error.status}
          name='Status'
          whiteText
          objectRef='error.status'
        />
      </div>
      <h4>Success</h4>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <Box
          background={success.background}
          name='Background'
          objectRef='success.background'
        />
        <Box
          background={success.status}
          name='Status'
          whiteText
          objectRef='success.status'
        />
      </div>
      <h4>Severe</h4>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <Box
          background={severe.background}
          name='Background'
          objectRef='severe.background'
        />
        <Box
          background={severe.status}
          name='Status'
          whiteText
          objectRef='severe.status'
        />
      </div>
      <h4>Warning</h4>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <Box
          background={warning.background}
          name='Background'
          objectRef='warning.background'
        />
        <Box
          background={warning.status}
          name='Status'
          whiteText
          objectRef='warning.status'
        />
      </div>

      <h3>Text</h3>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <Box
          background={text.primary}
          name='Primary'
          whiteText
          objectRef='text.primary'
        />
        <Box
          background={text.secondary}
          name='Secondary'
          whiteText
          objectRef='text.secondary'
        />
        <Box
          background={text.disabled}
          name='Disabled'
          whiteText
          objectRef='text.disabled'
        />
        <Box background={text.white} name='white' objectRef='text.white' />
      </div>
      <h3>Divider</h3>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <Box
          background={divider.primary}
          name='Primary'
          objectRef='divider.primary'
        />
      </div>
      <h3>Input</h3>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <Box
          background={input.border}
          name='Border'
          whiteText
          objectRef='input.border'
        />
        <Box
          background={input.hoverBorder}
          name='HoverBorder'
          whiteText
          objectRef='input.hoverBorder'
        />
      </div>
      <h3>CDG Blue</h3>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <Box
          background={cdgBlue[10]}
          name='cdgBlue10'
          objectRef='cdgBlue[10]'
        />
        <Box
          background={cdgBlue[20]}
          name='cdgBlue20'
          objectRef='cdgBlue[20]'
        />
        <Box
          background={cdgBlue[40]}
          name='cdgBlue40'
          objectRef='cdgBlue[40]'
        />
        <Box
          background={cdgBlue[60]}
          name='cdgBlue60'
          objectRef='cdgBlue[60]'
        />
        <Box
          background={cdgBlue[80]}
          name='cdgBlue80'
          whiteText
          objectRef='cdgBlue[80]'
        />
        <Box
          background={cdgBlue[100]}
          name='cdgBlue100'
          whiteText
          objectRef='cdgBlue[100]'
        />
        <Box
          background={cdgBlue[120]}
          name='cdgBlue120'
          whiteText
          objectRef='cdgBlue[120]'
        />
        <Box
          background={cdgBlue[140]}
          name='cdgBlue140'
          whiteText
          objectRef='cdgBlue[140]'
        />
      </div>
      <h3>Overlays</h3>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <Box
          background={overlays.light}
          name='Light'
          objectRef='overlays.light'
        />
        <Box background={overlays.dark} name='Dark' objectRef='overlays.dark' />
      </div>
      <h3>Gray</h3>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <Box background={gray[10]} name='gray10' objectRef='gray[10]' />
        <Box background={gray[20]} name='gray20' objectRef='gray[20]' />
        <Box background={gray[30]} name='gray30' objectRef='gray[30]' />
        <Box background={gray[40]} name='gray40' objectRef='gray[40]' />
        <Box background={gray[50]} name='gray50' objectRef='gray[50]' />
        <Box
          background={gray[60]}
          name='gray60'
          whiteText
          objectRef='gray[60]'
        />
        <Box
          background={gray[70]}
          name='gray70'
          whiteText
          objectRef='gray[70]'
        />
        <Box
          background={gray[80]}
          name='gray80'
          whiteText
          objectRef='gray[80]'
        />
        <Box
          background={gray[90]}
          name='gray90'
          whiteText
          objectRef='gray[90]'
        />
        <Box
          background={gray[100]}
          name='gray100'
          whiteText
          objectRef='gray[100]'
        />
        <Box
          background={gray[110]}
          name='gray110'
          whiteText
          objectRef='gray[110]'
        />
      </div>
      <h3>Background</h3>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <Box
          background={background.primary}
          name='Primary'
          objectRef='background.primary'
        />
        <Box
          background={background.secondary}
          name='Secondary'
          objectRef='background.secondary'
        />
        <Box
          background={background.darker}
          name='Darker'
          objectRef='background.darker'
        />
      </div>
    </>
  )
}
