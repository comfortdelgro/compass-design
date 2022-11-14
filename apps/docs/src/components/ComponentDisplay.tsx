import type {PropsWithChildren} from 'react'

interface Props {}

const ComponentDisplay: React.FC<PropsWithChildren<Props>> = ({children}) => {
  return <div className='isolated bg-gray-100 p-6'>{children}</div>
}

export default ComponentDisplay
