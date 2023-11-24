import styles from './styles/RootSvg.module.css'

const Svg = (props: React.SVGProps<SVGSVGElement>) => {
  return <svg className={styles.rootSvg} {...props}>{props.children}</svg>
}

export default Svg
