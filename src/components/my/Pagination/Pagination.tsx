import React from 'react';
import { useSelector } from 'react-redux';

import { Button } from 'components/ui/button';
import { PropsTable } from '@/types';

import { selectTotalItems, selectTotalPages } from '@/myRedux';


export function Pagination({ table }: PropsTable) {

  const itemsCount = useSelector(selectTotalItems);
  const pageCount = useSelector(selectTotalPages);

  return (
    <div data-testid="pagination" className="flex items-center justify-end space-x-2 py-4">
      <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{' '}
        {table.getFilteredRowModel().rows.length} row(s) selected.
        <strong> Items: {itemsCount} {' '}</strong>
        <strong> Pages: {pageCount}</strong>
      </div>
      <Button
        data-testid="pagination-prev"
        variant="outline"
        size="sm"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Previous
      </Button>
      <Button
        data-testid="pagination-next"
        variant="outline"
        size="sm"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
      </Button>
    </div>
  );
}