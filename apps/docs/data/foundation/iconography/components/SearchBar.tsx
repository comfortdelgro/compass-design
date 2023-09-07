import SearchField from '@comfortdelgro/react-compass/searchfield'
import {useRouter} from 'next/navigation'

interface Props {
  component: React.ReactNode
  name: string
}

const IconBox: React.FC<Props> = () => {
  const router = useRouter()

  const navigate = (url: string) => {
    router.push(`/foundation/iconography/search?q=${url}`)
  }

  return (
    <SearchField placeholder='Search for any icon...' onSubmit={navigate} />
  )
}

export default IconBox
