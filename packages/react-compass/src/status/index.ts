import _Status from './status'
import Offline from './status/offline'
import Online from './status/online'
import Verified from './status/verified'
import Zig from './status/zig'

export type {StatusProps} from './status'

const Status = _Status as typeof _Status & {
  Offline: typeof Offline
  Online: typeof Online
  Verified: typeof Verified
  Zig: typeof Zig
}

Status.Offline = Offline
Status.Online = Online
Status.Verified = Verified
Status.Zig = Zig

Status.displayName = 'Status'

export default Status
