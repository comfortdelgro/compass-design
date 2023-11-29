import {SearchField} from '@comfortdelgro/react-compass'
import {useRouter} from 'next/navigation'
import { useEffect, useState } from 'react'

interface Props {
  component: React.ReactNode
  name: string
}

const IconBox: React.FC<Props> = () => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')
  const [debouncedValue, setDebouncedValue] = useState('')
  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedValue(searchValue);
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [searchValue])

  useEffect(() => {
    if (debouncedValue) {
      router.push(`/foundation/iconography/search?q=${debouncedValue}`)
    }
  }, [debouncedValue])

  const navigate = (url: string) => {
    setSearchValue(url)
  }

  return (
    <SearchField placeholder='Search for any icon...' onChange={navigate} />
  )
}

export default IconBox
