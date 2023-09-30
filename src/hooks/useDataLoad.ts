import { useEffect, useState } from "react";
import { CertificatesTableRow, getDataSlice } from "../api/api-service";
import { removeDuplicateObjects } from "../helpers/helpers";

export const useDataLoad = (pageNumber: number, limit: number = 40) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [dataList, setDataList] = useState<
    Array<CertificatesTableRow & { id: number }>
  >([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(false);

    getDataSlice(pageNumber, limit)
      .then((res) => {
        setDataList((currentValue) =>
          removeDuplicateObjects<CertificatesTableRow & { id: number }>(
            [...currentValue, ...res],
            "id"
          )
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
