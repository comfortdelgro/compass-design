import {Column, Tag, TagBoxV2} from '@comfortdelgro/react-compass-old'
import {useState} from 'react'

const Basic: React.FC = () => {
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
        isErrored={true}
        isEditable
        onAddTag={handleAddTag}
        onRemoveTag={(tagToBeRemoved) =>
          handleRemoveTag(tagToBeRemoved.id as number)
        }
        onEditTag={(tagToBeEdited) =>
          handleEditTag(tagToBeEdited.id as number, tagToBeEdited.value)
        }
        css={{width: '70%'}}
      />
    </Column>
  )
}

export default Basic
