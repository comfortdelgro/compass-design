import * as React from 'react';
import { Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import Folder from '@mui/icons-material/Folder';

const data = [
  { name: 'Fonts', size: 125600 },
  { name: 'Libs', size: 134000000 },
  { name: 'Source', size: 200000000 },
  { name: 'Dependencies', size: 44000000 },
];

type Data = typeof data extends Array<infer T> ? T : never;

type Order = 'asc' | 'desc';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function formatSize(size: number) {
  const kb = size / 1000;
  if (kb < 1000) {
    return `${kb.toFixed(1)} KB`;
  }
  return `${(kb / 1000).toFixed(0)} MB`;
}

export default function BasicTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('name');
  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    handleRequestSort(event, property);
  };
  const headCells = [
    { id: 'name', label: 'Folder Name', TableCellProps: {} },
    { id: 'size', label: 'Size', TableCellProps: { align: 'right' } },
  ] as const;
  return (
    <TableContainer
      component={Paper}
      variant="outlined"
      sx={[
        {
          maxWidth: 260,
          [`& .${tableCellClasses.root}`]: {
            borderColor: 'grey.200',
          },
          [`& .${tableCellClasses.sizeSmall}`]: {
            padding: '0.625rem 1rem',
          },
        },
        (theme) =>
          theme.applyDarkStyles({
            bgcolor: 'primaryDark.800',
            [`& .${tableCellClasses.root}`]: {
              borderColor: 'primaryDark.500',
            },
          }),
      ]}
    >
      <Table aria-label="folder table" size="small">
        <TableHead>
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                sortDirection={orderBy === headCell.id ? order : false}
                {...headCell.TableCellProps}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={createSortHandler(headCell.id)}
                  sx={{ fontSize: '0.75rem' }}
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {stableSort(data, getComparator(order, orderBy)).map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Folder
                    sx={(theme: Theme) => ({
                      mr: 1,
                      color: 'grey.300',
                      ...theme.applyDarkStyles({
                        color: 'primary.700',
                      }),
                    })}
                    fontSize="small"
                  />{' '}
                  {row.name}
                </Box>
              </TableCell>
              <TableCell align="right" sx={{ color: 'success.main' }}>
                {formatSize(row.size)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
