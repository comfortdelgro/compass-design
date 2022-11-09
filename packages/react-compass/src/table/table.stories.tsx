import {Cell, Column, Row, TableBody, TableHeader} from '@react-stately/table'
import Table from './table'

export const Tables: React.FC = () => (
  <div style={{width: '800px'}}>
    <Table selectionMode='none'>
      <TableHeader>
        <Column>Name</Column>
        <Column>Type</Column>
        <Column>Date Modified</Column>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>Games</Cell>
          <Cell>File folder</Cell>
          <Cell>6/7/2020</Cell>
        </Row>
        <Row>
          <Cell>Program Files</Cell>
          <Cell>File folder</Cell>
          <Cell>4/7/2021</Cell>
        </Row>
        <Row>
          <Cell>bootmgr</Cell>
          <Cell>System file</Cell>
          <Cell>11/20/2010</Cell>
        </Row>
        <Row>
          <Cell>log.txt</Cell>
          <Cell>Text Document</Cell>
          <Cell>1/18/2016</Cell>
        </Row>
      </TableBody>
    </Table>
  </div>
)
