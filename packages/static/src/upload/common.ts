export const convertFileSizeToReadableNumber = (fileSizeLimit: number) => {
  const kb = 1024
  const mb = kb * 1024
  const gb = mb * 1024
  const tb = gb * 1024
  const pb = tb * 1024
  if (fileSizeLimit >= kb && fileSizeLimit < mb) {
    const size = (Math.round((fileSizeLimit / kb) * 100) / 100).toFixed(2)
    return `${size} KB`
  } else if (fileSizeLimit >= mb && fileSizeLimit < gb) {
    const size = (Math.round((fileSizeLimit / mb) * 100) / 100).toFixed(2)
    return `${size} MB`
  } else if (fileSizeLimit >= gb && fileSizeLimit < tb) {
    const size = (Math.round((fileSizeLimit / gb) * 100) / 100).toFixed(2)
    return `${size} GB`
  } else if (fileSizeLimit >= tb && fileSizeLimit < pb) {
    const size = (Math.round((fileSizeLimit / tb) * 100) / 100).toFixed(2)
    return `${size} TB`
  } else if (fileSizeLimit >= pb) {
    const size = (Math.round((fileSizeLimit / pb) * 100) / 100).toFixed(2)
    return `${size} PB`
  } else {
    return `${fileSizeLimit} Bytes`
  }
}
export const DEFAULT_FILE_ACCEPT = 'audio/*,video/*,image/*, .docs, .docx, .pdf'

export const DEFAULT_FILE_LIMIT = 9999999999
