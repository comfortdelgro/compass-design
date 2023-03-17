import toast from "react-hot-toast"

interface Props {
  component: React.ReactDOM
  name: string
}

const IconBox: React.FC<Props> = ({name, component}) => {
  return (
    <div
      className="scale"
      style={{
        width: '6rem',
        padding: '0.5rem',
        fontSize: "0.75rem",
        lineHeight: "1rem",
        fontWeight: 600,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'copy',
        flexShrink: 0,
        transitionProperty: 'all',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '150ms',
      }}
      onClick={() => {
        navigator && navigator.clipboard.writeText(name.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, ""))

        toast.success('Copied to clipboard')
      }}
    >
      <div>{component}</div>
      <div
        style={{
          wordBreak: "break-all",
          textAlign: "center"
        }}
      >
        {name}
      </div>
    </div>
  )
}

export default IconBox
