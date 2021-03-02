import { useMemo, useState } from "react";
import { useUrlQueryParam } from "../../utils/url";

// 项目列表搜索的参数
export const useProjectsSearchParams = () => {
  const [keys] = useState<("name" | "personId")[]>(["name", "personId"]);
  let [params, setParams] = useUrlQueryParam(keys);
  return [
    useMemo(
      () => ({
        ...params,
        personId: Number(params.personId) || undefined,
      }),
      [params]
    ),
    setParams,
  ] as const;
};
