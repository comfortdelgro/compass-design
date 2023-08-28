import H5AccountFilled from '@comfortdelgro/compass-icons/react/h5/h5-account-filled'
import H5AccountOutlined from '@comfortdelgro/compass-icons/react/h5/h5-account-outlined'
import H5ActivitiesFilled from '@comfortdelgro/compass-icons/react/h5/h5-activities-filled'
import H5ActivitiesOutlined from '@comfortdelgro/compass-icons/react/h5/h5-activities-outlined'
import H5Add from '@comfortdelgro/compass-icons/react/h5/h5-add'
import H5AddHeart from '@comfortdelgro/compass-icons/react/h5/h5-add-heart'
import H5Call from '@comfortdelgro/compass-icons/react/h5/h5-call'
import H5CircleOutlined from '@comfortdelgro/compass-icons/react/h5/h5-circle-outlined'
import H5Clock from '@comfortdelgro/compass-icons/react/h5/h5-clock'
import H5Close from '@comfortdelgro/compass-icons/react/h5/h5-close'
import H5Coin from '@comfortdelgro/compass-icons/react/h5/h5-coin'
import H5DoubleRight from '@comfortdelgro/compass-icons/react/h5/h5-double-right'
import H5Filter from '@comfortdelgro/compass-icons/react/h5/h5-filter'
import H5Heart from '@comfortdelgro/compass-icons/react/h5/h5-heart'
import H5HomeFilled from '@comfortdelgro/compass-icons/react/h5/h5-home-filled'
import H5HomeOutlined from '@comfortdelgro/compass-icons/react/h5/h5-home-outlined'
import H5Map from '@comfortdelgro/compass-icons/react/h5/h5-map'
import H5Marker from '@comfortdelgro/compass-icons/react/h5/h5-marker'
import H5MarkerBorder from '@comfortdelgro/compass-icons/react/h5/h5-marker-border'
import H5MarkerBorderWhite from '@comfortdelgro/compass-icons/react/h5/h5-marker-border-white'
import H5NotificationsFilled from '@comfortdelgro/compass-icons/react/h5/h5-notifications-filled'
import H5NotificationsOutlined from '@comfortdelgro/compass-icons/react/h5/h5-notifications-outlined'
import H5Pen from '@comfortdelgro/compass-icons/react/h5/h5-pen'
import H5Remove from '@comfortdelgro/compass-icons/react/h5/h5-remove'
import H5Search from '@comfortdelgro/compass-icons/react/h5/h5-search'
import H5Share from '@comfortdelgro/compass-icons/react/h5/h5-share'
import H5Smile from '@comfortdelgro/compass-icons/react/h5/h5-smile'
import H5Switch from '@comfortdelgro/compass-icons/react/h5/h5-switch'
import {Flexbox} from '@comfortdelgro/react-compass'
import IconBox from 'data/foundation/iconography/components/IconBox'

export default function h5Icons() {
  return (
    <Flexbox
      css={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      <IconBox
        component={<H5AccountFilled width={40} height={40} />}
        name='H5AccountFilled'
      />
      <IconBox
        component={<H5AccountOutlined width={40} height={40} />}
        name='H5AccountOutlined'
      />
      <IconBox
        component={<H5ActivitiesFilled width={40} height={40} />}
        name='H5ActivitiesFilled'
      />
      <IconBox
        component={<H5ActivitiesOutlined width={40} height={40} />}
        name='H5ActivitiesOutlined'
      />
      <IconBox
        component={<H5AddHeart width={40} height={40} />}
        name='H5AddHeart'
      />
      <IconBox component={<H5Add width={40} height={40} />} name='H5Add' />
      <IconBox component={<H5Call width={40} height={40} />} name='H5Call' />
      <IconBox
        component={<H5CircleOutlined width={40} height={40} />}
        name='H5CircleOutlined'
      />
      <IconBox component={<H5Clock width={40} height={40} />} name='H5Clock' />
      <IconBox component={<H5Close width={40} height={40} />} name='H5Close' />
      <IconBox component={<H5Coin width={40} height={40} />} name='H5Coin' />
      <IconBox
        component={<H5DoubleRight width={40} height={40} />}
        name='H5DoubleRight'
      />
      <IconBox
        component={<H5Filter width={40} height={40} />}
        name='H5Filter'
      />
      <IconBox component={<H5Heart width={40} height={40} />} name='H5Heart' />
      <IconBox
        component={<H5HomeFilled width={40} height={40} />}
        name='H5HomeFilled'
      />
      <IconBox
        component={<H5HomeOutlined width={40} height={40} />}
        name='H5HomeOutlined'
      />
      <IconBox component={<H5Map width={40} height={40} />} name='H5Map' />
      <IconBox
        component={<H5MarkerBorderWhite width={40} height={40} />}
        name='H5MarkerBorderWhite'
      />
      <IconBox
        component={<H5MarkerBorder width={40} height={40} />}
        name='H5MarkerBorder'
      />
      <IconBox
        component={<H5Marker width={40} height={40} />}
        name='H5Marker'
      />
      <IconBox
        component={<H5NotificationsFilled width={40} height={40} />}
        name='H5NotificationsFilled'
      />
      <IconBox
        component={<H5NotificationsOutlined width={40} height={40} />}
        name='H5NotificationsOutlined'
      />
      <IconBox component={<H5Pen width={40} height={40} />} name='H5Pen' />
      <IconBox
        component={<H5Remove width={40} height={40} />}
        name='H5Remove'
      />
      <IconBox
        component={<H5Search width={40} height={40} />}
        name='H5Search'
      />
      <IconBox component={<H5Share width={40} height={40} />} name='H5Share' />
      <IconBox component={<H5Smile width={40} height={40} />} name='H5Smile' />
      <IconBox
        component={<H5Switch width={40} height={40} />}
        name='H5Switch'
      />
    </Flexbox>
  )
}
