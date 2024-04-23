import styles from './styles/GradientText.module.css'

export const GradientText = (props: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={styles.gradientText} {...props}>
      {props.children}
    </span>
  )
}

export default GradientText
