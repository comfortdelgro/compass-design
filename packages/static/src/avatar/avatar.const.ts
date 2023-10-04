import styles from './styles/avatar.module.css'

export type AvatarSize = 'lg' | 'md' | 'sm' | 'xs' | 'xxs' | ''

export const sizeMap = {
  '': '',
  lg: styles.large,
  md: styles.medium,
  sm: styles.small,
  xs: styles.extraSmall,
  xxs: styles.smallest,
}
