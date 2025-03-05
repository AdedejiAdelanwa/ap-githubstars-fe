import { ReactNode } from "react";

export interface ITableColumn {
  title: string;
  dataIndex: string;
  key: string;
}

export class ITableData<T = unknown> {
  [key: string]: T | number | string | ReactNode;

  constructor(
    data: { [K in keyof ITableData<T>]?: ITableData<T>[K] } & Partial<
      ITableData<T>
    >
  ) {
    Object.assign(this, data);
  }
}

export interface TableProps {
  columns: ITableColumn[];
  dataSource: ITableData[];
  isLoading: boolean;
}
