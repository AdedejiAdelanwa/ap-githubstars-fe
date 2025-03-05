"use client";
import { useEffect, useState } from "react";
import Table from "./Table";
import { ITableColumn, ITableData } from "./Table/model";
import { Repo, repoTableColumns } from "./model";

interface Props {
  repos: Repo[];
  isLoading: boolean;
}

const RepoList = ({ repos, isLoading }: Props) => {
  const [columns, setColumns] = useState<ITableColumn[]>([]);

  useEffect(() => {
    setColumns(repoTableColumns);
  }, []);

  const dataSource: ITableData[] = repos?.map((row: Repo, index: number) => {
    return {
      uid: row.id,
      key: index,
      fullName: row.fullName,
      description: row.description,
      starsCount: row.starsCount,
    };
  });

  return (
    <div className="h-[80vh] w-[80%] overflow-auto">
      <Table isLoading={isLoading} columns={columns} dataSource={dataSource} />
    </div>
  );
};
export default RepoList;
