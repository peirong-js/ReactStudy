import { useAsync } from "utils/use-async";
import { Project } from "../screens/projectaList/list";
import { useEffect } from "react";
import { cleanObj } from "utils/index";
import { useHttp } from "utils/http";

export const useProjects = (param?: Partial<Project>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<Project[]>();

  useEffect(() => {
    run(client("projects", { data: cleanObj(param || {}) }));
  }, [param]);

  return result;
};
