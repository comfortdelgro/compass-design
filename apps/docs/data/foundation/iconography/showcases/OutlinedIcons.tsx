import AddressBookOutlined from '@comfortdelgro/compass-icons/react/outlined/address-book-outlined'
import ArrowDownOutlined from '@comfortdelgro/compass-icons/react/outlined/arrow-down-outlined'
import ArrowLeftOutlined from '@comfortdelgro/compass-icons/react/outlined/arrow-left-outlined'
import ArrowRightOutlined from '@comfortdelgro/compass-icons/react/outlined/arrow-right-outlined'
import ArrowUpOutlined from '@comfortdelgro/compass-icons/react/outlined/arrow-up-outlined'
import CalendarDaysOutlined from '@comfortdelgro/compass-icons/react/outlined/calendar-days-outlined'
import ClockOutlined from '@comfortdelgro/compass-icons/react/outlined/clock-outlined'
import CreditCardOutlined from '@comfortdelgro/compass-icons/react/outlined/credit-card-outlined'
import DuplicateImageOutlined from '@comfortdelgro/compass-icons/react/outlined/duplicate-image-outlined'
import ExclamationOutlined from '@comfortdelgro/compass-icons/react/outlined/exclamation-outlined'
import GroupAddOutlined from '@comfortdelgro/compass-icons/react/outlined/group-add-outlined'
import GroupSettingsOutlined from '@comfortdelgro/compass-icons/react/outlined/group-settings-outlined'
import HeartOutlined from '@comfortdelgro/compass-icons/react/outlined/heart-outlined'
import ImageOutlined from '@comfortdelgro/compass-icons/react/outlined/image-outlined'
import InfoOutlined from '@comfortdelgro/compass-icons/react/outlined/info-outlined'
import MailOutlined from '@comfortdelgro/compass-icons/react/outlined/mail-outlined'
import NotificationOutlined from '@comfortdelgro/compass-icons/react/outlined/notification-outlined'
import PencilOutlined from '@comfortdelgro/compass-icons/react/outlined/pencil-outlined'
import PersonOutlined from '@comfortdelgro/compass-icons/react/outlined/person-outlined'
import ProfileOutlined from '@comfortdelgro/compass-icons/react/outlined/profile-outlined'
import QuestionOutlined from '@comfortdelgro/compass-icons/react/outlined/question-outlined'
import StarOutlined from '@comfortdelgro/compass-icons/react/outlined/star-outlined'
import ThumbtackOutlined from '@comfortdelgro/compass-icons/react/outlined/thumbtack-outlined'
import TrashOutlined from '@comfortdelgro/compass-icons/react/outlined/trash-outlined'
import UserAddOutlined from '@comfortdelgro/compass-icons/react/outlined/user-add-outlined'
import UserGroupOutlined from '@comfortdelgro/compass-icons/react/outlined/user-group-outlined'
import WarningOutlined from '@comfortdelgro/compass-icons/react/outlined/warning-outlined'
import {Flexbox} from '@comfortdelgro/react-compass-old'
import IconBox from 'data/foundation/iconography/components/IconBox'

export default function outlinedIcons() {
  return (
    <Flexbox
      css={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      <IconBox
        component={<AddressBookOutlined width={40} height={40} />}
        name='address-book-outlined'
      />
      <IconBox
        component={<ArrowDownOutlined width={40} height={40} />}
        name='arrow-down-outlined'
      />
      <IconBox
        component={<ArrowLeftOutlined width={40} height={40} />}
        name='arrow-left-outlined'
      />
      <IconBox
        component={<ArrowRightOutlined width={40} height={40} />}
        name='arrow-right-outlined'
      />
      <IconBox
        component={<ArrowUpOutlined width={40} height={40} />}
        name='arrow-up-outlined'
      />
      <IconBox
        component={<CalendarDaysOutlined width={40} height={40} />}
        name='calendar-days-outlined'
      />
      <IconBox
        component={<ClockOutlined width={40} height={40} />}
        name='clock-outlined'
      />
      <IconBox
        component={<CreditCardOutlined width={40} height={40} />}
        name='credit-card-outlined'
      />
      <IconBox
        component={<DuplicateImageOutlined width={40} height={40} />}
        name='duplicate-image-outlined'
      />
      <IconBox
        component={<ExclamationOutlined width={40} height={40} />}
        name='exclamation-outlined'
      />
      <IconBox
        component={<GroupAddOutlined width={40} height={40} />}
        name='group-add-outlined'
      />
      <IconBox
        component={<GroupSettingsOutlined width={40} height={40} />}
        name='group-settings-outlined'
      />
      <IconBox
        component={<HeartOutlined width={40} height={40} />}
        name='heart-outlined'
      />
      <IconBox
        component={<ImageOutlined width={40} height={40} />}
        name='image-outlined'
      />
      <IconBox
        component={<InfoOutlined width={40} height={40} />}
        name='info-outlined'
      />
      <IconBox
        component={<MailOutlined width={40} height={40} />}
        name='mail-outlined'
      />
      <IconBox
        component={<NotificationOutlined width={40} height={40} />}
        name='notification-outlined'
      />
      <IconBox
        component={<PencilOutlined width={40} height={40} />}
        name='pencil-outlined'
      />
      <IconBox
        component={<PersonOutlined width={40} height={40} />}
        name='person-outlined'
      />
      <IconBox
        component={<ProfileOutlined width={40} height={40} />}
        name='profile-outlined'
      />
      <IconBox
        component={<QuestionOutlined width={40} height={40} />}
        name='question-outlined'
      />
      <IconBox
        component={<StarOutlined width={40} height={40} />}
        name='star-outlined'
      />
      <IconBox
        component={<ThumbtackOutlined width={40} height={40} />}
        name='thumbtack-outlined'
      />
      <IconBox
        component={<TrashOutlined width={40} height={40} />}
        name='trash-outlined'
      />
      <IconBox
        component={<UserAddOutlined width={40} height={40} />}
        name='user-add-outlined'
      />
      <IconBox
        component={<UserGroupOutlined width={40} height={40} />}
        name='user-group-outlined'
      />
      <IconBox
        component={<WarningOutlined width={40} height={40} />}
        name='warning-outlined'
      />
    </Flexbox>
  )
}
