import Footer from './footer'
import FooterHeader from './footer-header'
import FooterInfo from './footer-info'
import FooterInfoDownload from './footer-info-download'
import FooterInfoSocial from './footer-info-social'
import FooterNavigation from './footer-nav'
import FooterPolicy from './footer-policy'

export type {FooterProps} from './footer'
export type {FooterHeaderProps} from './footer-header'
export type {FooterInfoProps} from './footer-info'
export type {FooterInfoDownloadProps} from './footer-info-download'
export type {FooterInfoSocialProps} from './footer-info-social'
export type {FooterNavigationProps} from './footer-nav'
export type {FooterPolicyProps} from './footer-policy'
export {Footer, FooterInfo}

Footer.Header = FooterHeader
Footer.Nav = FooterNavigation
Footer.Policy = FooterPolicy

FooterInfo.Download = FooterInfoDownload
FooterInfo.Social = FooterInfoSocial

Footer.Header.displayName = 'Footer.Header'
Footer.Nav.displayName = 'Footer.Nav'
Footer.Policy.displayName = 'Footer.Policy'
FooterInfo.Download.displayName = 'FooterInfo.Download'
FooterInfo.Social.displayName = 'FooterInfo.Social'
