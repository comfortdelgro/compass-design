import styles from './styles/status.module.css'

export type StatusSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | ''

export type StatusType = 'online' | 'offline' | 'verified' | 'zig' | 'icon' | ''

export const STATUS_SIZE_MAP = {
  '': '',
  xs: styles.xs,
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
  xl: styles.xl,
  '2xl': styles.xxl,
  '3xl': styles.xxxl,
  '4xl': styles.xxxxl,
}
