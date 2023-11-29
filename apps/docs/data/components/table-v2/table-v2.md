---
title: React Table-v2 component
components: ReactTable
---

# Table-v2

<p class="description">Table version 2 is a wrapper around the core table logic. Most of its job is related to managing state the "react" way.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {ReactTable} from '@comfortdelgro/react-compass'
```


## Example

### Full features

{{"demo": "ReactTable.tsx"}}

### Expandable Column Table

{{"demo": "ExpandableColumnTable.tsx"}}

### Loading

{{"demo": "LoadingTable.tsx"}}

## Usage

### For server sorting

\*if user want to custom sort. Add `manualSorting: true` to ReactTableOptions.

```js
const options: ReactTableOptions = {
  enableSorting: true,
  enableMultiSort: true,
  columnResizeMode: 'onChange',
  manualSorting: true,
}
```

\*then create function and assign to `onManualSorting` props on ReactTable.

Example

```js
const onSorting = (sortingField: TableV2SortingState) => {
  console.log('stateSorting', sortingField)
}
```

```js
 <ReactTable data={data} columns={columns} options={options} onManualSorting={onSorting}>
```

\*props `sortingField` contain all informations sorting for your need

### ColumnConfig

Column definitions are plain objects with the following options:

#### Enable Resizing

| Name             | Type      | Default | Description            |
| :--------------- | :-------- | :------ | :--------------------- |
| `enableResizing` | `boolean` | `false` | `Enable column resize` |

#### Enable column filter

| Name                 | Type      | Default | Description            |
| :------------------- | :-------- | :------ | :--------------------- |
| `enableColumnFilter` | `boolean` | `false` | `Enable column filter` |

#### Enable Grouping

| Name             | Type      | Default | Description              |
| :--------------- | :-------- | :------ | :----------------------- |
| `enableGrouping` | `boolean` | `false` | `Enable column grouping` |

#### Meta

Define further information about the column. Now `meta` is used to define `editable` columns.

| Name         | Type                                                              | Default     | Description                         |
| :----------- | :---------------------------------------------------------------- | :---------- | :---------------------------------- |
| `editable`   | `boolean \| undefined`                                            | `undefined` | `Enable rendering editable column`  |
| `template`   | `JSX Element \| undefined`                                        | `undefined` | `Enable rendering editable column`  |
| `updateData` | `(rowIndex: number, id: string, value: any) => void \| undefined` | `undefined` | `Callback to update table data`     |
| `revertData` | `(rowIndex: number) => void \| undefined`                         | `undefined` | `Callback to revert the table data` |

#### Example

```tsx
  {
    accessorFn: (row) => row.lastName,
    id: 'lastName',
    cell: (info) => info.getValue<string>(),
    header: () => <span>Last Name</span>,
    footer: (props) => props.column.id,
    enableResizing: true,
    enableColumnFilter: true,
    enableGrouping: true,
  },
```

### Editable Cell

Press `ENTER` to finish editing the firstName cell, `Esc` to quit editing.

Enable rendering customized template on top of the column cell.
Users can decide what to do with the template and update the table data.
To use this functionality:

- In the template component, use the hook `useEditableCellContext` that provides:

| Name                     | Type                  | Default | Description                                         |
| :----------------------- | :-------------------- | :------ | :-------------------------------------------------- |
| `cell`                   | `Cell<TData, TValue>` |         | `Cell object `                                      |
| `row`                    | `number`              |         | `row index`                                         |
| `column`                 | `string`              |         | `column name`                                       |
| `initialValue`           | `any`                 | —       | `cell initial value`                                |
| `finishTemplateEditing`  | `(data) => void`      | —       | `notify the table to call the update data function` |
| `cancelTemplateEditing ` | `(data) => void`      | —       | `notify the table to call the revert data function` |

- In the ColumnConfig object, define `editable = true` and `updateData` callback. If `template` is not defined, the default input will render.

```tsx
{
    accessorFn: (row) => row.lastName,
    id: 'lastName',
    cell: (info) => info.getValue<string>(),
    header: () => <span>Last Name</span>,
    footer: (props) => props.column.id,
    meta: {
      editable: true,
      updateData: (rowIndex: number, id: string, value: any) => {
        setData((old: Person[]) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [id]: value,
              } as Person
            }
            return row
          }),
        )
      },
    },
  },
```

### Loading

By default, the Table V2 uses the circular Progress component as the default loading indicator. Users can replace it with any other React components (Spinner, linear Progress, etc).

## Props

| Name                     | Type                                | Default             | Description                       |
| :----------------------- | :---------------------------------- | :------------------ | :-------------------------------- |
| `data`                   | `Array`                             | `[]`                | `Data for show.`                  |
| `columns`                | `Array<ColumnDef<T>>`               | `[]`                | `column with custom config.`      |
| `options`                | `OptionType`                        | `{}`                | `Table option.`                   |
| `children`               | `React.ReactNode`                   | —                   | `Child elements.`                 |
| `css`                    | `CSS`                               | `{}`                | `Additional style.`               |
| `renderRowSubComponent ` | `(rowData: T) => React.JSX.Element` | —                   | `Callback after expanding row.`   |
| `isLoading `             | `boolean`                           | `false`             | `Loading status of the table.`    |
| `loadingIndicator `      | `React.ReactNode`                   | `Progress.Circular` | `Loading indicator of the table.` |
