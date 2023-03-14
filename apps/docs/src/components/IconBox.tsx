import toast from "react-hot-toast"

interface Props {
  component: React.ReactDOM
  name: string
}

const IconBox: React.FC<Props> = ({name, component}) => {
  return (
    <div
      className='w-24 p-2 font-mono text-xs font-semibold flex flex-col items-center justify-between cursor-copy flex-shrink-0 transition-all hover:scale-105'
      onClick={() => {
        navigator && navigator.clipboard.writeText(name.replace(/\.?([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, ""))
        toast.success('Copied to clipboard')
      }}
    >
      <div>{component}</div>
      <div className="break-all text-center">{name}</div>
    </div>
  )
}

export default IconBox
