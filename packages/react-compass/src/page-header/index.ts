import PageHeader from './page-header'
import PageHeaderDescription from './page-header-description'
import PageHeaderHeader from './page-header-header'
import PageHeaderSubtitle from './page-header-subtitle'
import PageHeaderTitle from './page-header-title'

export type {PageHeaderProps} from './page-header'
export type {PageHeaderDescriptionProps} from './page-header-description'
export type {PageHeaderHeaderProps} from './page-header-header'
export type {PageHeaderSubtitleProps} from './page-header-subtitle'
export type {PageHeaderTitleProps} from './page-header-title'

PageHeader.Header = PageHeaderHeader
PageHeader.Title = PageHeaderTitle
PageHeader.Subtitle = PageHeaderSubtitle
PageHeader.Description = PageHeaderDescription

PageHeader.displayName = 'PageHeader'
PageHeader.Header.displayName = 'PageHeader.Header'
PageHeader.Title.displayName = 'PageHeader.Title'
PageHeader.Subtitle.displayName = 'PageHeader.Subtitle'
PageHeader.Description.displayName = 'PageHeader.Description'

export default PageHeader
