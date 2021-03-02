import { User } from "../screens/projectaList/searchPanel";
import { useHttp } from "utils/http";
import { useAsync } from "utils/use-async";
import { useEffect } from "react";
import { cleanObj } from "utils/index";

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<User[]>();
  console.log(result.data);

  useEffect(() => {
    run(client("users", { data: cleanObj(param || {}) }));
  }, [param]);

  return result;
};
