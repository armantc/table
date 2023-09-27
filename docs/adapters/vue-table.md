---
title: Vue Table
---

The `@tanstack-rtl/vue-table` adapter is a wrapper around the core table logic. Most of it's job is related to managing state the "vue" way, providing types and the rendering implementation of cell/header/footer templates.

## Exports

`@tanstack-rtl/vue-table` re-exports all of `@tanstack-rtl/table-core`'s and the following:

### `useVueTable`

Takes an `options` object and returns a table.

```tsx
import { useVueTable } from '@tanstack-rtl/vue-table'

function App() {
  const table = useVueTable(options)

  // ...render your table
}
```

### `FlexRender`

A Vue component for rendering cell/header/footer templates with dynamic values.

Example:

```vue
import { FlexRender } from '@tanstack-rtl/vue-table'

<template>
  <tbody>
    <tr v-for="row in table.getRowModel().rows" :key="row.id">
      <td v-for="cell in row.getVisibleCells()" :key="cell.id">
        <FlexRender
          :render="cell.column.columnDef.cell"
          :props="cell.getContext()"
        />
      </td>
    </tr>
  </tbody>
</template>
```
