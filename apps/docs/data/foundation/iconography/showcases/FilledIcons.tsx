import AddressBookFilled from '@comfortdelgro/compass-icons/react/filled/address-book-filled'
import ArrowDownFilled from '@comfortdelgro/compass-icons/react/filled/arrow-down-filled'
import ArrowLeftFilled from '@comfortdelgro/compass-icons/react/filled/arrow-left-filled'
import ArrowRightFilled from '@comfortdelgro/compass-icons/react/filled/arrow-right-filled'
import ArrowUpFilled from '@comfortdelgro/compass-icons/react/filled/arrow-up-filled'
import CalendarDaysFilled from '@comfortdelgro/compass-icons/react/filled/calendar-days-filled'
import ClockFilled from '@comfortdelgro/compass-icons/react/filled/clock-filled'
import CreditCardFilled from '@comfortdelgro/compass-icons/react/filled/credit-card-filled'
import DuplicateImageFilled from '@comfortdelgro/compass-icons/react/filled/duplicate-image-filled'
import ExclamationFilled from '@comfortdelgro/compass-icons/react/filled/exclamation-filled'
import GroupAddFilled from '@comfortdelgro/compass-icons/react/filled/group-add-filled'
import GroupSettingsFilled from '@comfortdelgro/compass-icons/react/filled/group-settings-filled'
import HeartFilled from '@comfortdelgro/compass-icons/react/filled/heart-filled'
import ImageFilled from '@comfortdelgro/compass-icons/react/filled/image-filled'
import InfoFilled from '@comfortdelgro/compass-icons/react/filled/info-filled'
import MailFilled from '@comfortdelgro/compass-icons/react/filled/mail-filled'
import NotificationFilled from '@comfortdelgro/compass-icons/react/filled/notification-filled'
import PencilFilled from '@comfortdelgro/compass-icons/react/filled/pencil-filled'
import PersonFilled from '@comfortdelgro/compass-icons/react/filled/person-filled'
import ProfileFilled from '@comfortdelgro/compass-icons/react/filled/profile-filled'
import QuestionFilled from '@comfortdelgro/compass-icons/react/filled/question-filled'
import StarFilled from '@comfortdelgro/compass-icons/react/filled/star-filled'
import ThumbtackFilled from '@comfortdelgro/compass-icons/react/filled/thumbtack-filled'
import TrashFilled from '@comfortdelgro/compass-icons/react/filled/trash-filled'
import UserAddFilled from '@comfortdelgro/compass-icons/react/filled/user-add-filled'
import WarningFilled from '@comfortdelgro/compass-icons/react/filled/warning-filled'
import {Flexbox} from '@comfortdelgro/react-compass'
import IconBox from 'data/foundation/iconography/components/IconBox'

export default function filledIcons() {
  return (
    <Flexbox
      css={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      <IconBox
        component={<AddressBookFilled width={40} height={40} />}
        name='address-book-filled'
      />
      <IconBox
        component={<ArrowDownFilled width={40} height={40} />}
        name='arrow-down-filled'
      />
      <IconBox
        component={<ArrowLeftFilled width={40} height={40} />}
        name='arrow-left-filled'
      />
      <IconBox
        component={<ArrowRightFilled width={40} height={40} />}
        name='arrow-right-filled'
      />
      <IconBox
        component={<ArrowUpFilled width={40} height={40} />}
        name='arrow-up-filled'
      />
      <IconBox
        component={<CalendarDaysFilled width={40} height={40} />}
        name='calendar-days-filled'
      />
      <IconBox
        component={<ClockFilled width={40} height={40} />}
        name='clock-filled'
      />
      <IconBox
        component={<CreditCardFilled width={40} height={40} />}
        name='credit-card-filled'
      />
      <IconBox
        component={<DuplicateImageFilled width={40} height={40} />}
        name='duplicate-image-filled'
      />
      <IconBox
        component={<ExclamationFilled width={40} height={40} />}
        name='exclamation-filled'
      />
      <IconBox
        component={<GroupAddFilled width={40} height={40} />}
        name='group-add-filled'
      />
      <IconBox
        component={<GroupSettingsFilled width={40} height={40} />}
        name='group-settings-filled'
      />
      <IconBox
        component={<HeartFilled width={40} height={40} />}
        name='heart-filled'
      />
      <IconBox
        component={<ImageFilled width={40} height={40} />}
        name='image-filled'
      />
      <IconBox
        component={<InfoFilled width={40} height={40} />}
        name='info-filled'
      />
      <IconBox
        component={<MailFilled width={40} height={40} />}
        name='mail-filled'
      />
      <IconBox
        component={<NotificationFilled width={40} height={40} />}
        name='notification-filled'
      />
      <IconBox
        component={<PencilFilled width={40} height={40} />}
        name='pencil-filled'
      />
      <IconBox
        component={<PersonFilled width={40} height={40} />}
        name='person-filled'
      />
      <IconBox
        component={<ProfileFilled width={40} height={40} />}
        name='profile-filled'
      />
      <IconBox
        component={<QuestionFilled width={40} height={40} />}
        name='question-filled'
      />
      <IconBox
        component={<StarFilled width={40} height={40} />}
        name='star-filled'
      />
      <IconBox
        component={<ThumbtackFilled width={40} height={40} />}
        name='thumbtack-filled'
      />
      <IconBox
        component={<TrashFilled width={40} height={40} />}
        name='trash-filled'
      />
      <IconBox
        component={<UserAddFilled width={40} height={40} />}
        name='user-add-filled'
      />
      <IconBox
        component={<WarningFilled width={40} height={40} />}
        name='warning-filled'
      />
    </Flexbox>
  )
}
