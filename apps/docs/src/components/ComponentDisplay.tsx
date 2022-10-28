import type {PropsWithChildren} from 'react'

interface Props {}

const ComponentDisplay: React.FC<PropsWithChildren<Props>> = ({children}) => {
  return <div className='isolated bg-red-400'>{children}</div>
}

export default ComponentDisplay
