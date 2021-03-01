import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { useMemo } from "react";
// import { cleanObj, subset } from "utils/index";
import { cleanObj } from "../utils/index";

// 返回页面url中，指定键的参数值
export const useUrlQueryParam = <K extends string>(keys: K[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("name"));
  return [
    useMemo(
      () =>
        keys.reduce((prev, key: K) => {
          return { ...prev, [key]: searchParams.get(key) || "" };
        }, {} as { [key in K]: string }),
      [searchParams, keys]
    ),
    (params: Partial<{ [key in K]: unknown }>) => {
      const o = cleanObj({
        ...Object.fromEntries(searchParams),
        ...params,
      }) as URLSearchParamsInit;
      return setSearchParams(o);
    },
  ] as const;
};
