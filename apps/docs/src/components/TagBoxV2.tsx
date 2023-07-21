import {Column} from '@comfortdelgro/react-compass'
import TagBoxV2, {Tag} from '@comfortdelgro/react-compass/tag-box-v2'
import React, {useEffect, useState} from 'react'

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

export const WithErroredItemsTagBox: React.FC = (props: any) => {
  const WithErroredItemsTagBoxStyles = {
    svg: {
      overflow: 'visible',
      boxSizing: 'content-box',
      display: 'var(--fa-display, inline-block)',
      height: '1em',
      verticalAlign: '-0.125em',
      overflowClipMargin: 'content-box',
    },
  }

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

    fetchTags()
  }, [])

  return (
    <Column>
      <TagBoxV2
        tagBoxLabel='Attribute values'
        addTagPlaceholder='Please enter to add tag'
        tags={tags}
        isErrored={true}
        css={WithErroredItemsTagBoxStyles}
      />
    </Column>
  )
}

export const BasicTagBox: React.FC = (props: any) => {
  const BasicTagBoxStyles = {
    svg: {
      overflow: 'visible',
      boxSizing: 'content-box',
      display: 'var(--fa-display, inline-block)',
      height: '1em',
      verticalAlign: '-0.125em',
      overflowClipMargin: 'content-box',
    },
  }
  const [tags, setTags] = useState<Tag[]>([])
  const handleAddTag = (newTagValue: string) => {
    const newTagObject: Tag = {
      id: `cdg-id-${Math.random().toString(36).substring(2)}`,
      value: newTagValue.trim(),
    }
    setTags([...tags, newTagObject])
  }

  const handleRemoveTag = (id: number) => {
    const newTags = tags.filter((tag) => tag.id !== id)
    setTags(newTags)
  }

  const handleEditTag = (id: number, value: string) => {
    const updatedTags = tags.map((tag) => {
      if (tag.id === id) {
        return {id, value}
      }
      return tag
    })
    setTags(updatedTags)
  }
  return (
    <Column>
      <TagBoxV2
        tagBoxLabel='Attribute values'
        addTagPlaceholder='Please enter to add tag'
        tags={tags}
        isErrored={props.isErrored}
        isEditable
        onAddTag={handleAddTag}
        onRemoveTag={(tagToBeRemoved) =>
          handleRemoveTag(tagToBeRemoved.id as number)
        }
        onEditTag={(tagToBeEdited) =>
          handleEditTag(tagToBeEdited.id as number, tagToBeEdited.value)
        }
        css={BasicTagBoxStyles}
      />
    </Column>
  )
}
