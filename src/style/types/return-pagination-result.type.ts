import { Style } from '@/schemas/style.schema';

export type ReturnPaginationReturnType = {
  results: Array<Style>;
  total: number;
};
