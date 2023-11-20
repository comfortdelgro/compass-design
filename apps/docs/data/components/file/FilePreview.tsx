import File from '@comfortdelgro/react-compass-old/file'
// import {File as StaticFile} from '@comfortdelgro/static'

function FilePreview() {
  return (
    <div>
      <File.Preview imageSrc='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' />
      {/* <StaticFile.Preview imageSrc='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' /> */}
    </div>
  )
}

export default FilePreview
