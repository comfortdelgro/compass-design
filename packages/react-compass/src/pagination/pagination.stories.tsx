import {Column} from '../utils'
import Pagination from './index'

export const Default = () => {
  return <Pagination />
}

export const Variants = () => {
  return (
    <Column>
      <h3>Total pages prop</h3>
      <Pagination total={10} />
      <h3>Current page prop</h3>
      <Pagination total={10} page={3} />
      <h3>OnChange prop</h3>
      <Pagination
        total={10}
        onChange={(page) => {
          console.log(page)
        }}
      />
    </Column>
  )
}
