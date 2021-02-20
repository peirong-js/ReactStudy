import { useState, useEffect } from "react";
import { SearchPanel } from "./searchPanel";
import { List } from "./list";
import { useHttp } from "../../utils/http";
import { useProjects } from "../../utils/project";
import { useUsers } from "../../utils/user";
import { useAsync } from "../../utils/use-async";
import { cleanObj, useMount, useDebounce } from "../../utils";
import qs from "qs";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { Project } from "./list";
import { useDocumentTitle } from "../../utils";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  // const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState<null | Error>(null);
  useDocumentTitle("项目列表", false);

  const [params, setParams] = useState({
    name: "",
    personId: "",
  });
  // const [list, setList] = useState([]);
  const client = useHttp();

  useEffect(() => {
    console.log("before SearchChange");
    return () => {
      console.log("return search");
    };
  }, [params]);

  const debouncedParam = useDebounce(params, 200);
  const { isLoading, error, data: list } = useProjects(debouncedParam);
  const { data: users } = useUsers();
  // useEffect(() => {
  //   run(client("projects", { data: cleanObj(debouncedParam) }));
  //   // setIsLoading(true);
  //   // client("projects", { data: cleanObj(debouncedParam) })
  //   //   .then(setList)
  //   //   .catch((error) => {
  //   //     setList([]);
  //   //     setError(error);
  //   //   })
  //   //   .finally(() => setIsLoading(false));

  //   // fetch(`${apiUrl}/projects?${qs.stringify(cleanObj(debouncedParam))}`).then(
  //   //   async (res) => {
  //   //     if (res.ok) {
  //   //       setList(await res.json());
  //   //     }
  //   //   }
  //   // );
  // }, [debouncedParam]);

  // useMount(() => {
  //   client("users").then(setUsers);
  //   // fetch(`${apiUrl}/users`).then(async (res) => {
  //   //   if (res.ok) {
  //   //     setUsers(await res.json());
  //   //   }
  //   // });
  // });
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel params={params} setParams={setParams} users={users || []} />
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List loading={isLoading} dataSource={list || []} users={users || []} />
    </Container>
  );
};
const Container = styled.div`
  padding: 3.2rem;
`;
