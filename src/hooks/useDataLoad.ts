import { useEffect, useState } from "react";
import { getDataSlice } from "../api/api-service";
import { removeDuplicateObjects } from "../helpers/helpers";
import { TableRow, TableRowsArray, Tables } from "../components/types/tab-types";

export const useDataLoad = (
  pageNumber: number,
  limit: number = 40,
  table: Tables
) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [dataList, setDataList] = useState<TableRowsArray>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(false);

    getDataSlice(pageNumber, limit, table)
      .then((res) => {
        if (!dataList.length) setDataList(res);
        if (dataList[0].table !== table)
        setDataList((currentValue) =>
          removeDuplicateObjects<TableRow>([...currentValue, ...res], "id")
        );
        setHasMore(res.length > 0);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [pageNumber, limit]);

  return { loading, error, dataList, hasMore };
};
