import Status from './status'
import Offline from './status/offline'
import Online from './status/online'
import Verified from './status/verified'
import Zig from './status/zig'

export type {StatusProps} from './status'

Status.Offline = Offline
Status.Online = Online
Status.Verified = Verified
Status.Zig = Zig

Status.displayName = 'Status'

export default Status
