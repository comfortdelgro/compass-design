import Pagination from '@comfortdelgro/react-compass-old/pagination'
import React from 'react'

function PaginationControlled() {
  const [page, setPage] = React.useState(1)
  return (
    <div>
      <Pagination
        total={10}
        page={page}
        onChange={(page) => {
          setPage(page)
        }}
      />
    </div>
  )
}

export default PaginationControlled
