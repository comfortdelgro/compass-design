import {Column, Tag, TagBoxV2} from '@comfortdelgro/react-compass-old'
import {useEffect, useState} from 'react'

const mockApiCall = (): Promise<Tag[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tags: Tag[] = [
        {
          id: `cdg-id-${Math.random().toString(36).substring(2)}`,
          value: 'Driver 1',
          isErrored: false,
        },
        {
          id: `cdg-id-${Math.random().toString(36).substring(2)}`,
          value: 'Driver 2',
          isErrored: false,
        },
        {
          id: `cdg-id-${Math.random().toString(36).substring(2)}`,
          value: 'Driver 3',
          isErrored: true,
        },
        {
          id: `cdg-id-${Math.random().toString(36).substring(2)}`,
          value: 'Driver 4',
          isErrored: false,
        },
        {
          id: `cdg-id-${Math.random().toString(36).substring(2)}`,
          value: 'Driver 5',
          isErrored: true,
        },
        {
          id: `cdg-id-${Math.random().toString(36).substring(2)}`,
          value: 'Driver 6',
          isErrored: false,
        },
      ]
      resolve(tags)
    }, 1500)
  })
}

const WithErroredItems: React.FC = (props: any) => {
  const [tags, setTags] = useState<Tag[]>([])

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const fetchedTags = await mockApiCall()
        setTags(fetchedTags)
      } catch (error) {
        console.error('Error fetching tags:', error)
      }
    }

    void fetchTags()
  }, [])

  return (
    <Column>
      <TagBoxV2
        tagBoxLabel='Attribute values'
        addTagPlaceholder='Please enter to add tag'
        tags={tags}
        isErrored={true}
      />
    </Column>
  )
}

export default WithErroredItems
