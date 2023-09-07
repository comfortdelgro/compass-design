import Pagination from '@comfortdelgro/react-compass/pagination'
import {useState} from 'react'

function PaginationBasic() {
  const [page, setPage] = useState(1)
  return (
    <Pagination page={page} total={10} onChange={(page) => setPage(page)}>
      <Pagination.ItemsCounting
        totalItem={100}
        page={page}
      ></Pagination.ItemsCounting>
    </Pagination>
  )
}

export default PaginationBasic
