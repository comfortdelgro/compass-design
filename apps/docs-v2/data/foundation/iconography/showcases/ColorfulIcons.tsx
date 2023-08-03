import ClubhouseColorful from '@comfortdelgro/compass-icons/react/colorful/clubhouse'
import CompassColorful from '@comfortdelgro/compass-icons/react/colorful/compass'
import CrownColorful from '@comfortdelgro/compass-icons/react/colorful/crown'
import DiscordColorful from '@comfortdelgro/compass-icons/react/colorful/discord'
import DoctypeColorful from '@comfortdelgro/compass-icons/react/colorful/doctype'
import DribbbleColorful from '@comfortdelgro/compass-icons/react/colorful/dribbble'
import FacebookColorful from '@comfortdelgro/compass-icons/react/colorful/facebook'
import FigmaColorful from '@comfortdelgro/compass-icons/react/colorful/figma'
import GoogleColorful from '@comfortdelgro/compass-icons/react/colorful/google'
import LinkedinColorful from '@comfortdelgro/compass-icons/react/colorful/linkedin'
import PinterestColorful from '@comfortdelgro/compass-icons/react/colorful/pinterest'
import RedditColorful from '@comfortdelgro/compass-icons/react/colorful/reddit'
import SignalColorful from '@comfortdelgro/compass-icons/react/colorful/signal'
import SnapchatColorful from '@comfortdelgro/compass-icons/react/colorful/snapchat'
import TelegramColorful from '@comfortdelgro/compass-icons/react/colorful/telegram'
import TiktokColorful from '@comfortdelgro/compass-icons/react/colorful/tiktok'
import TumblrColorful from '@comfortdelgro/compass-icons/react/colorful/tumblr'
import TwitterColorful from '@comfortdelgro/compass-icons/react/colorful/twitter'
import WorkbenchColorful from '@comfortdelgro/compass-icons/react/colorful/workbench'
import WorkbenchTextColorful from '@comfortdelgro/compass-icons/react/colorful/workbench-text'
import YoutubeColorful from '@comfortdelgro/compass-icons/react/colorful/youtube'
import ZigBizColorful from '@comfortdelgro/compass-icons/react/colorful/zig-biz'
import ZigBizSquareColorful from '@comfortdelgro/compass-icons/react/colorful/zig-biz-square'
import ZigBizTsmColorful from '@comfortdelgro/compass-icons/react/colorful/zig-biz-tsm'
import ZigBizWhiteColorful from '@comfortdelgro/compass-icons/react/colorful/zig-biz-white'
import {Flexbox} from '@comfortdelgro/react-compass'
import IconBox from 'data/foundation/iconography/components/IconBox'

export default function colorfulIcons() {
  return (
    <Flexbox
      css={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      <IconBox
        component={<ClubhouseColorful width={40} height={40} />}
        name='Clubhouse'
      />
      <IconBox
        component={<CompassColorful width={40} height={40} />}
        name='Compass'
      />
      <IconBox
        component={<CrownColorful width={40} height={40} />}
        name='Crown'
      />
      <IconBox
        component={<DiscordColorful width={40} height={40} />}
        name='Discord'
      />
      <IconBox
        component={<DoctypeColorful width={40} height={40} />}
        name='Doctype'
      />
      <IconBox
        component={<DribbbleColorful width={40} height={40} />}
        name='Dribbble'
      />
      <IconBox
        component={<FacebookColorful width={40} height={40} />}
        name='Facebook'
      />
      <IconBox
        component={<FigmaColorful width={40} height={40} />}
        name='Figma'
      />
      <IconBox
        component={<GoogleColorful width={40} height={40} />}
        name='Google'
      />
      <IconBox
        component={<LinkedinColorful width={40} height={40} />}
        name='Linkedin'
      />
      <IconBox
        component={<PinterestColorful width={40} height={40} />}
        name='Pinterest'
      />
      <IconBox
        component={<RedditColorful width={40} height={40} />}
        name='Reddit'
      />
      <IconBox
        component={<SignalColorful width={40} height={40} />}
        name='Signal'
      />
      <IconBox
        component={<SnapchatColorful width={40} height={40} />}
        name='Snapchat'
      />
      <IconBox
        component={<TelegramColorful width={40} height={40} />}
        name='Telegram'
      />
      <IconBox
        component={<TiktokColorful width={40} height={40} />}
        name='Tiktok'
      />
      <IconBox
        component={<TumblrColorful width={40} height={40} />}
        name='Tumblr'
      />
      <IconBox
        component={<TwitterColorful width={40} height={40} />}
        name='Twitter'
      />
      <IconBox
        component={<WorkbenchTextColorful width={40} height={40} />}
        name='WorkbenchText'
      />
      <IconBox
        component={<WorkbenchColorful width={40} height={40} />}
        name='Workbench'
      />
      <IconBox
        component={<YoutubeColorful width={40} height={40} />}
        name='Youtube'
      />
      <IconBox
        component={<ZigBizSquareColorful width={40} height={40} />}
        name='ZigBizSquare'
      />
      <IconBox
        component={<ZigBizTsmColorful width={40} height={40} />}
        name='ZigBizTsm'
      />
      <IconBox
        component={<ZigBizWhiteColorful width={40} height={40} />}
        name='ZigBizWhite'
      />
      <IconBox
        component={<ZigBizColorful width={40} height={40} />}
        name='ZigBiz'
      />
    </Flexbox>
  )
}
