import _Card from './card'
import CardAction from './card-actions'
import CardBody from './card-body'
import CardImage from './card-image'
import CardTitle from './card-title'

export type {CardProps} from './card'
export type {CardActionProps} from './card-actions'
export type {CardBodyProps} from './card-body'
export type {CardImageProps} from './card-image'
export type {CardTitleProps} from './card-title'

const Card = _Card as typeof _Card & {
  Body: typeof CardBody
  Image: typeof CardImage
  Title: typeof CardTitle
  Action: typeof CardAction
}

Card.Body = CardBody
Card.Image = CardImage
Card.Title = CardTitle
Card.Action = CardAction

Card.displayName = 'Card'
Card.Body.displayName = 'Card.Body'
Card.Image.displayName = 'Card.Image'
Card.Title.displayName = 'Card.Title'
Card.Action.displayName = 'Card.Action'

export default Card
