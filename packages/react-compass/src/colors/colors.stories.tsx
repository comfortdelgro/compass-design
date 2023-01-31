import {cdgBlue, gray} from './index'

export const Colors: React.FC = () => {
  return (
    <>
      <h3>cdgBlue</h3>
      <div
        style={{width: '50%', height: '20%', backgroundColor: cdgBlue[10]}}
      />
      <h3>gray</h3>
      <div style={{width: '50%', height: '20%', backgroundColor: gray[10]}} />
    </>
  )
}
