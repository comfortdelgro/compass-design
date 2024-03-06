'use client'

import SubHeader from './sub-header'
import SubHeaderBody from './sub-header-body'
import SubHeaderDescription from './sub-header-description'
import SubHeaderHeader from './sub-header-header'
import SubHeaderImage from './sub-header-image'
import SubHeaderTitle from './sub-header-title'

export type {SubHeaderProps} from './sub-header'
export type {SubHeaderDescriptionProps} from './sub-header-description'
export type {SubHeaderHeaderProps} from './sub-header-header'
export type {SubHeaderSubtitleProps} from './sub-header-subtitle'
export type {SubHeaderTitleProps} from './sub-header-title'

SubHeader.Header = SubHeaderHeader
SubHeader.Title = SubHeaderTitle
SubHeader.Description = SubHeaderDescription
SubHeader.Image = SubHeaderImage
SubHeader.Body = SubHeaderBody

SubHeader.Header.displayName = 'SubHeader.Header'
SubHeader.Title.displayName = 'SubHeader.Title'
SubHeader.Description.displayName = 'SubHeader.Description'
SubHeader.Image.displayName = 'SubHeader.Image'
SubHeader.Body.displayName = 'SubHeader.Body'

export default SubHeader
