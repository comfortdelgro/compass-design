import {Typography} from '@comfortdelgro/react-compass'
// import {Pagination} from '@comfortdelgro/static'
import {Pagination} from '@comfortdelgro/react-compass'
import {useState} from 'react'

function PaginationBasic() {
  const [page, setPage] = useState(1)
  const [rows, setRows] = useState(5)
  return (
    <>
      <Typography.Header variant='header4'>
        Row page pages: {rows}
      </Typography.Header>
      <Pagination
        rowsOptions={[5, 10, 15, 20]}
        rowsPerPage={5}
        onRowsPerPageChange={(rows) => {
          setRows(rows)
        }}
        page={page}
        total={10}
        onChange={(page) => setPage(page)}
        count={100}
      ></Pagination>
    </>
  )
}

export default PaginationBasic
