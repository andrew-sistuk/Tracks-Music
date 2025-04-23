import { Table } from '@tanstack/react-table';
import { Item } from '@/types';

export type PropsTable = {
  table: Table<Item[]>;
};