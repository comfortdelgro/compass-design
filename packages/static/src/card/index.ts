import Card from './card'
import CardAction from './card-actions'
import CardBody from './card-body'
import CardImage from './card-image'
import CardTitle from './card-title'

export type {CardProps} from './card'
export type {CardActionProps} from './card-actions'
export type {CardBodyProps} from './card-body'
export type {CardImageProps} from './card-image'
export type {CardTitleProps} from './card-title'

Card.Body = CardBody
Card.Image = CardImage
Card.Title = CardTitle
Card.Action = CardAction

Card.Body.displayName = 'Card.Body'
Card.Image.displayName = 'Card.Image'
Card.Title.displayName = 'Card.Title'
Card.Action.displayName = 'Card.Action'
Card.Action.displayName = 'Card.Action'
Card.displayName = 'Card'

export default Card
