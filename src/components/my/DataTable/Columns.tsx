import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

import { Button } from 'components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'components/ui/dropdown-menu';

import { Item } from '@/types';
import { formatDistanceToNow } from 'date-fns';
import { Checkbox } from 'components/ui/checkbox';
import { Avatar, AvatarImage } from 'components/ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';
import Logo from '/public/logo.svg';

export const columns: ColumnDef<Item[]>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'coverImage',
    header: 'Cover',
    cell: ({ row }) => {
      const coverImage = row.getValue('coverImage') as string | null;
      const title = row.getValue('title') as string;
      return (
        <Avatar>
          <AvatarImage src={coverImage || Logo} />
          <AvatarFallback>{title}</AvatarFallback>
        </Avatar>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'artist',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Artist
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'genres',
    header: 'Genres',
  },
  {
    accessorKey: 'slug',
    header: 'Slug',
  },
  {
    accessorKey: 'createdAt',
    header: () => <div className="text-left">Add At</div>,
    cell: ({ row }) => {
      const raw = row.getValue('createdAt');
      const date = typeof raw === 'string' || typeof raw === 'number'
        ? new Date(raw)
        : new Date();

      const formatted = formatDistanceToNow(date, { addSuffix: true });

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'updatedAt',
    header: () => <div className="text-left">Update At</div>,
    cell: ({ row }) => {
      const raw = row.getValue('updatedAt');
      const date = typeof raw === 'string' || typeof raw === 'number'
        ? new Date(raw)
        : new Date();

      const formatted = formatDistanceToNow(date, { addSuffix: true });

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      // const tracks = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText('test')}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-700 hover:bg-red-500 focus:bg-red-500">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];

