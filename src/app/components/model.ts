import { ITableColumn } from "./Table/model";

export interface Repo {
  id: number;
  fullName: string;
  description: string;
  starsCount: number;
}

export const repoTableColumns: ITableColumn[] = [
  {
    title: "Repo Name",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "Repo Description",
    dataIndex: "description",
    key: "description",
  },
  { title: "No. of Stars", dataIndex: "starsCount", key: "starsCount" },
];
